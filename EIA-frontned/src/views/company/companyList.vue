<template>
<div class="companylist-container">

<el-row class="panel-group" :gutter="40">
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col" v-for="company in companyList" :key="company.id">
      <div class='card-panel' @click="handleredirect(company.companyId,company.position)">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">分组名称：{{company.companyName}}</div>
           <div class="card-panel-text">职位：{{company.position | positionFilter}}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import { getCompanyList } from '@/api/company'
export default {
  data() {
    return {
      companyList: []
    }
  },
  components: {
    Mallki
  },
  created() {
    this.getList()
  },
  filters: {
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
    getList() {
      getCompanyList().then(response => {
        this.companyList = response
      })
    },
    handleredirect(companyId, position) {
      this.$router.push({ name: 'companyDescription', params: { companyId: companyId, position: position }})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.companylist-container {
  height: 895px;
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}


.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 10px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: left;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.753);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>




