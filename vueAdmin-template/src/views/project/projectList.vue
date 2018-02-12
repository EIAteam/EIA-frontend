<template>
  <div class="app-container project-list-container">
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
          <el-switch v-if="position=='agency'||position=='worker'" :value="scope.row.isMaterialEnough" active-color="#67C23A" inactive-color="#F56C6C" @change="(value)=>handleChangeMaterial(scope.row,value)"></el-switch>
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

  </div>
</template>

<script>
import { getProjectsList } from '@/api/project'
export default {
  data() {
    return {
      companyName: '',
      companyId: '',
      position: 'manager',
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
    }
  }
}
</script>

