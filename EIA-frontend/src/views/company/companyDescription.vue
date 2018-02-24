<template>
  <div class="app-container member-list-container">
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
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
      :current-page.sync="listQuery.page" :page-sizes="[10, 20, 30, 40]" :page-size="listQuery.limit" :total="total"
      layout="total, sizes, prev, pager, next, jumper" background >
    </el-pagination>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  data() {
    return {
      companyName: '',
      companyId: '',
      position: 'agency',
      companyMemberList: [
        { userId: '1', username: '1', name: 'Jack', position: 'superManager', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tom', position: 'manager', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Jerry', position: 'worker', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Jemmy', position: 'agency', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tim', position: 'firstParty', email: '291067847@qq.com' },
        { userId: '1', username: '1', name: 'Tim', position: 'noPosition', email: '291067847@qq.com' }
      ],
      total: 6,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  filters: {
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
  methods: {
    handleModifyPosition(row, position) {
      row.position = position
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
    }
  }
}
</script>

