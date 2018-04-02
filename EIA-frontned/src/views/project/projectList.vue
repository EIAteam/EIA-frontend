<template>
  <div class="app-container project-list-container">
    <template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="人员管理" name="first">
          <el-table  :data="companyMemberList"  fit highlight-current-row >
      <el-table-column align="center" label="名字" width="200px">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="职位" >
        <template slot-scope="scope">
          <el-tag :type="scope.row.position | positionStatusFilter">{{ scope.row.position| positionFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="邮箱" >
        <template slot-scope="scope">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column width="500px" align="center" label="职位变更" >
        <template slot-scope="scope">
      <el-collapse v-if="id!=scope.row.userId&&position=='superManager'" accordion>
          <el-collapse-item>
            <template slot="title">
              变更操作
            </template>
             <el-button v-if="scope.row.position!='noPosition'" @click="handleModifyPosition(scope.row,'noPosition')" type="info" size="mini">无职</el-button>
            <el-button v-if="scope.row.position!='superManager'" type="warning" @click="handleModifyPosition(scope.row,'superManager')" size="mini">超级管理者</el-button>
            <el-button v-if="scope.row.position!='manager'" @click="handleModifyPosition(scope.row,'manager')" type="success" size="mini">管理者</el-button>
            <el-button v-if="scope.row.position!='worker'" @click="handleModifyPosition(scope.row,'worker')" type="primary" size="mini">编写员</el-button>
            <el-button v-if="scope.row.position!='agency'" @click="handleModifyPosition(scope.row,'agency')" type="danger" size="mini">中介</el-button>
            <el-button v-if="scope.row.position!='firstParty'" @click="handleModifyPosition(scope.row,'firstParty')" type="danger" size="mini">甲方</el-button>
            </el-collapse-item>
         </el-collapse>
         <el-collapse v-if="id!=scope.row.userId&&position=='manager'&&scope.row.position!='superManager'&&scope.row.position!='manager'" accordion>
          <el-collapse-item>
            <template slot="title">
              变更操作
            </template>
             <el-button v-if="scope.row.position!='noPosition'" @click="handleModifyPosition(scope.row,'noPosition')" type="info" size="mini">无职</el-button>
            <el-button v-if="scope.row.position!='worker'" @click="handleModifyPosition(scope.row,'worker')" type="primary" size="mini">编写员</el-button>
            <el-button v-if="scope.row.position!='agency'" @click="handleModifyPosition(scope.row,'agency')" type="danger" size="mini">中介</el-button>
            <el-button v-if="scope.row.position!='firstParty'" @click="handleModifyPosition(scope.row,'firstParty')" type="danger" size="mini">甲方</el-button>
            </el-collapse-item>
         </el-collapse>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="项目管理" name="second">
      <el-table  :data="projectList" v-loading="listLoading" fit highlight-current-row >
      <el-table-column type="index">
    </el-table-column>
      <el-table-column align="center" label="项目简称" width="200px">
        <template slot-scope="scope">
          <span>{{scope.row.projectName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140px" align="center" label="中介" >
        <template slot-scope="scope">
           <span>{{scope.row.agencyName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140px" align="center" label="开始日期" >
        <template slot-scope="scope">
          <span>{{scope.row.startDay}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140px" align="center" label="进行天数" >
        <template slot-scope="scope">
          <span>{{scope.row.duration}}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="类型" width="140px">
        <template slot-scope="scope">
          <el-select v-if="position=='manager'||position=='worker'"  placeholder="请选择" :value="scope.row.projectKind" @change="(value)=>handleChangeProjectKind(scope.row,value)">
            <el-option v-for="item in projectKindOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <span v-else>{{scope.row.projectKind | projectKindFilter}}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="状态" width="140px">
        <template slot-scope="scope">
          <el-select v-if="position=='manager'||position=='worker'"  placeholder="请选择" :value="scope.row.projectStatus" @change="(value)=>handleChangeProjectStatus(scope.row,value)">
            <el-option v-for="item in projectStatusOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <span v-else>{{scope.row.projectStatus | projectStatusFilter}}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="中介材料齐全度" width="140px">
        <template slot-scope="scope">
          <el-switch v-if="position=='manager'||position=='worker'" :value="scope.row.isMaterialEnough" active-color="#67C23A" inactive-color="#F56C6C" @change="(value)=>handleChangeMaterial(scope.row,value)"></el-switch>
          <span v-else-if="scope.row.isMaterialEnough"><i class="el-icon-success" style="color: #67C23A"></i></span>
          <span v-else><i class="el-icon-error" style="color: #F56C6C"></i></span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="备注留言" width="200px">
        <template slot-scope="scope">
          <el-popover  v-if="position=='agency'" ref="popover" placement="left"  width="400" trigger="click">
            <table v-if="scope.row.agencyMessage!=''||scope.row.workerMessage!=''">
              <tr>
              <th>中介留言</th>
              <td><el-input type="textarea" autosize placeholder="请输入内容" :value="scope.row.agencyMessage" @blur="handleChangeMessage(scope.row,value)"></el-input></td>
              </tr>
              <tr>
              <th>编写员留言</th>
              <td>{{scope.row.workerMessage}}</td>
              </tr>
            </table>
          </el-popover>
          <el-popover  v-else-if="position=='worker'" ref="popover" placement="left"  width="400" trigger="click">
            <table v-if="scope.row.agencyMessage!=''||scope.row.workerMessage!=''">
              <tr>
              <th>中介留言</th>
              <td>{{scope.row.agencyMessage}}</td>
              </tr>
              <tr>
              <th>编写员留言</th>
              <td><el-input type="textarea" autosize placeholder="请输入内容" :value="scope.row.workerMessage" @blur="handleChangeMessage(scope.row,value)"></el-input></td>
              </tr>
            </table>
          </el-popover>
          <el-popover  v-else ref="popover" placement="left"  width="400" trigger="hover">
            <table v-if="scope.row.agencyMessage!=''||scope.row.workerMessage!=''">
              <tr>
              <th>中介留言</th>
              <td>{{scope.row.agencyMessage}}</td>
              </tr>
              <tr>
              <th>编写员留言</th>
              <td>{{scope.row.workerMessage}}</td>
              </tr>
            </table>
          </el-popover>
          <el-badge :is-dot="scope.row.agencyMessage!=''||scope.row.workerMessage!=''" class="item" style="margin-top: 10px;margin-right: 40px;">
            <el-button size="mini" v-popover:popover>留言</el-button>
          </el-badge>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container" style="margin-top:30px">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
      :current-page.sync="listQuery.page" :page-sizes="[10, 20, 30, 40]" :page-size="listQuery.limit" :total="total"
      layout="total, sizes, prev, pager, next, jumper" background >
    </el-pagination>
    </div>

    </el-tab-pane>

  </el-tabs>
</template>

    

  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
</style>


<script>
import { getProjectsList } from '@/api/project'
export default {
  data() {
    return {
      activeName: 'first',
      companyName: '',
      companyId: '',
      position: 'agency',
      projectKindOptions: [
        { value: 1, label: '新建' },
        { value: 2, label: '扩建' },
        { value: 3, label: '搬迁' }
      ],
      projectStatusOptions: [
        { value: 1, label: '收到资料' },
        { value: 2, label: '报告编写' },
        { value: 3, label: '资质材料完善' },
        { value: 4, label: '入件' },
        { value: 5, label: '审批修改' },
        { value: 6, label: '取证' }
      ],
      companyMemberList: [
        { userId: '1', username: '1', name: 'Jack', position: 'superManager', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tom', position: 'manager', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Jerry', position: 'worker', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Jemmy', position: 'agency', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tim', position: 'firstParty', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tim', position: 'noPosition', email: '291067847@qq.com' }
      ],
      dialogVisible: false,
      projectList: null,
      listLoading: true,
      total: 22,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  filters: {
    projectStatusFilter(projectStatus) {
      const projectStatusMap = {
        1: '收到资料',
        2: '报告编写',
        3: '资质材料完善',
        4: '入件',
        5: '审批修改',
        6: '取证'
      }
      return projectStatusMap[projectStatus]
    },
    projectKindFilter(projectKind) {
      const projectKindMap = {
        1: '新建',
        2: '扩建',
        3: '搬迁'
      }
      return projectKindMap[projectKind]
    },
    positionStatusFilter(position) {
      const positionMap = {
        superManager: 'warning',
        manager: 'success',
        worker: '',
        agency: 'danger',
        firstParty: 'danger',
        noPosition: 'info'
      }
      return positionMap[position]
    },
    positionFilter(position) {
      const positionMap = {
        superManager: '超级管理者',
        manager: '管理者',
        worker: '编写员',
        agency: '中介',
        firstParty: '甲方',
        noPosition: '无职'
      }
      return positionMap[position]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getProjectsList(this.listQuery).then(response => {
        this.projectList = response.data.projectList
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleChangeMessage(row, message) {
      this.getList()
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleChangeMaterial(row, value) {
      this.getList()
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleChangeProjectKind(row, value) {
      this.getList()
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleChangeProjectStatus(row, value) {
      this.getList()
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleSizeChange(value) {
      this.listQuery.limit = value
      this.getList()
    },
    handleCurrentChange(value) {
      this.listQuery.page = value
      this.getList()
    },
    handleModifyPosition(row, position) {
      row.position = position
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    }
  }
}
</script>

