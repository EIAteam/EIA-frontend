<template>
  <div class="app-container project-list-container">
    <template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="人员管理" name="first">
          <el-table  :data="companyMemberList" v-loading="companyMemberListLoading" fit highlight-current-row >
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
      <el-collapse v-if="userId!=scope.row.userId&&position=='superManager'" accordion>
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
         <el-collapse v-if="userId!=scope.row.userId&&position=='manager'&&scope.row.position!='superManager'&&scope.row.position!='manager'" accordion>
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
    <div class="pagination-container" style="margin-top:30px">
    <el-pagination @size-change="handleCompanyMemberListSizeChange" @current-change="handleCompanyMemberListCurrentChange" 
      :current-page.sync="companyMemberListQuery.offset" :page-sizes="[10, 20, 30, 40]" :page-size="companyMemberListQuery.limit" :total="companyMemberListTotal"
      layout="total, sizes, prev, pager, next, jumper" background >
    </el-pagination>
    </div>
    </el-tab-pane>
    <el-tab-pane label="项目管理" name="second">
      <el-table  :data="projectList" v-loading="projectListLoading" fit highlight-current-row >
      <el-table-column type="index">
    </el-table-column>
      <el-table-column align="center" label="项目简称" width="200px">
        <template slot-scope="scope">
          <span>{{scope.row.projectName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140px" align="center" label="开始日期" >
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140px" align="center" label="最近更新" >
        <template slot-scope="scope">
          <span>{{scope.row.updateTime}}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="类型" width="140px">
        <template slot-scope="scope">
          <el-select v-if="position=='manager'||position=='worker'"  placeholder="请选择" :value="scope.row.projectType" @change="(value)=>handleChangeProjectType(scope.row,value)">
            <el-option v-for="item in projectTypeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <span v-else>{{scope.row.projectType | projectTypeFilter}}</span>
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
              <td><el-input type="textarea" autosize placeholder="请输入内容" :value="scope.row.agencyMessage" @blur="handleChangeAgencyMessage(scope.row,value)"></el-input></td>
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
              <td><el-input type="textarea" autosize placeholder="请输入内容" :value="scope.row.workerMessage" @blur="handleChangeWorkerMessage(scope.row,value)"></el-input></td>
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
    <el-pagination @size-change="handleProjectListSizeChange" @current-change="handleProjectListCurrentChange" 
      :current-page.sync="ProjectListQuery.offset" :page-sizes="[10, 20, 30, 40]" :page-size="ProjectListQuery.limit" :total="projectListTotal"
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
import { getCompanyMemberList, putProjectAgencyMessage, putProjectWorkerMessage, putProjectStatus, putProjectType, putProjectIsMaterialEnough } from '@/api/company'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first',
      companyName: '',
      companyId: '',
      position: 'agency',
      companyMemberList: null,
      projectList: null,

      dialogVisible: false,
      companyMemberListLoading: true,
      projectListLoading: true,

      companyMemberListTotal: 0,
      companyMemberListQuery: {
        offset: 1,
        limit: 10
      },
      projectListTotal: 0,
      ProjectListQuery: {
        offset: 1,
        limit: 10
      },

      projectTypeOptions: [
        { value: 'none', label: '无' },
        { value: 'newBuilt', label: '新建' },
        { value: 'extension', label: '扩建' },
        { value: 'removal', label: '搬迁' }
      ],
      projectStatusOptions: [
        { value: 'none', label: '无' },
        { value: 'receivedInfo', label: '收到资料' },
        { value: 'reportEdit', label: '报告编写' },
        { value: 'InfoComplete', label: '资质材料完善' },
        { value: 'submit', label: '入件' },
        { value: 'investigate', label: '审批修改' },
        { value: 'takeEvidence', label: '取证' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  filters: {
    projectStatusFilter(projectStatus) {
      const projectStatusMap = {
        none: '无',
        receivedInfo: '收到资料',
        reportEdit: '报告编写',
        InfoComplete: '资质材料完善',
        submit: '入件',
        investigate: '审批修改',
        takeEvidence: '取证'
      }
      return projectStatusMap[projectStatus]
    },
    projectTypeFilter(projectType) {
      const projectTypeMap = {
        none: '无',
        newBuilt: '新建',
        extension: '扩建',
        removal: '搬迁'
      }
      return projectTypeMap[projectType]
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
      this.projectListLoading = true
      this.companyMemberListLoading = true
      this.companyId = this.$route.params.companyId
      this.position = this.$route.params.position
      getCompanyMemberList(this.companyMemberListQuery.limit, this.companyMemberListQuery.offset - 1, this.companyId).then(response => {
        this.companyMemberListTotal = response.count
        this.companyMemberList = response.results
        this.companyMemberListLoading = false
      })
      getProjectsList(this.ProjectListQuery.limit, this.ProjectListQuery.offset - 1, this.companyId).then(response => {
        this.projectListTotal = response.count
        this.projectList = response.results
        this.projectListLoading = false
      })
    },
    handleChangeAgencyMessage(row, message) {
      this.projectListLoading = true
      putProjectAgencyMessage(row.id, message).then(response => {
        this.getList()
        this.projectListLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    handleChangeWorkerMessage(row, message) {
      this.projectListLoading = true
      putProjectWorkerMessage(row.id, message).then(response => {
        this.getList()
        this.projectListLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    handleChangeMaterial(row, value) {
      this.projectListLoading = true
      putProjectIsMaterialEnough(row.id, value).then(response => {
        this.getList()
        this.projectListLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    handleChangeProjectType(row, value) {
      this.projectListLoading = true
      putProjectType(row.id, value).then(response => {
        this.getList()
        this.projectListLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    handleChangeProjectStatus(row, value) {
      this.projectListLoading = true
      putProjectStatus(row.id, value).then(response => {
        this.getList()
        this.projectListLoading = false
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    handleModifyPosition(row, position) {
      row.position = position
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },

    handleCompanyMemberListSizeChange(value) {
      this.companyMemberListQuery.limit = value
      this.getList()
    },
    handleCompanyMemberListCurrentChange(value) {
      this.companyMemberListQuery.offset = value
      this.getList()
      console.log(1)
    },
    handleProjectListSizeChange(value) {
      this.ProjectListQuery.limit = value
      this.getList()
    },
    handleProjectListCurrentChange(value) {
      this.ProjectListQuery.offset = value
      this.getList()
      console.log(1)
    }

  }
}
</script>

