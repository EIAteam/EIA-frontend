<template>
  <div class="app-container">

<el-container style="height: 650px;">
<el-header style="margin-bottom:50px;" >
  <el-steps :active="active" finish-status="success" align-center>
      <el-step title="基础信息"></el-step>
      <el-step title="产品表/材料表/设备表"></el-step>
      <el-step title="地理信息"></el-step>
      <el-step title="工程组成/敏感点信息/废气排放标准"></el-step>
      <el-step title="基础信息附图"></el-step>
  </el-steps>
  <el-button-group style="margin-top:10px;margin-left:550px;width:300px;">
    <el-button type="primary" icon="el-icon-arrow-left"  @click="previous" disabled>上一页</el-button>
    <el-button type="primary" @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
</el-header>

  <el-main>
    <el-form :model="basicInfoForm" label-width="120px;" ref="basicInfoForm">
      <el-form-item label="项目性质" prop="projectType">
        <el-select v-model="basicInfoForm.projectType" placeholder="请选择">
          <el-option label="新建" value=1></el-option>
          <el-option label="搬迁" value=2></el-option>
          <el-option label="扩建" value=3></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="建设单位名称" prop="enterpriseName">
        <el-input v-model="basicInfoForm.enterpriseName" type="text" placeholder="项目名称（与营业执照一致）" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="名称缩写" prop="nameAbbreviation">
        <el-input v-model="basicInfoForm.nameAbbreviation" type="text" placeholder="单位名称" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="国民经济行业类别及代码" prop="NEIType">
        <el-cascader :options="options1" :show-all-levels="false" v-model="basicInfoForm.NEIType"
        placeholder="请选择" style="width:400px;" expand-trigger="hover"></el-cascader>
      </el-form-item>

      <el-form-item label="环境影响评价行业类别" prop="environmentalEffectclassification">
        <el-cascader :options="options2" :show-all-levels="false" expand-trigger="hover"
        v-model="basicInfoForm.environmentalEffectclassification" placeholder="请选择" style="width:1200px;"></el-cascader>
      </el-form-item>

      <el-form-item label="环评单位名称" prop="companyName">
        <el-input v-model="basicInfoForm.companyName" type="text" placeholder="环评单位全称" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="环评单位证书编号" prop="companyCertificatenumber">
        <el-input v-model="basicInfoForm.companyCertificatenumber" type="text" placeholder="环评单位号码" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="环评单位联系电话" prop="companyTelephone">
        <el-input v-model="basicInfoForm.companyTelephone" type="text" placeholder="环评报告联系人电话" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="环评单位联系地址" prop="companyAddress">
        <el-input v-model="basicInfoForm.companyAddress" type="text" placeholder="环评单位地址" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="项目地址" prop="address">
        <el-input v-model="basicInfoForm.address" type="text" placeholder="与营业执照一致" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="邮政编码" prop="postalCode">
        <el-input v-model="basicInfoForm.postalCode" type="text" placeholder="6位数字" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="法人代表" prop="corporateName">
        <el-input v-model="basicInfoForm.corporateName" type="text" placeholder="法人姓名" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="法人身份证号" prop="corporateId">
        <el-input v-model="basicInfoForm.corporateId" type="text" placeholder="身份证号码" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="项目规模" prop="constructionScale">
        <el-input v-model="basicInfoForm.constructionScale" type="text" placeholder="年产量" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="统一社会信用代码" prop="societyCreditcode">
        <el-input v-model="basicInfoForm.societyCreditcode" type="text" placeholder="与营业执照一致" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="营业执照经营范围" prop="businessRange">
        <el-input v-model="basicInfoForm.businessRange" type="text" placeholder="与营业执照一致" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="联系人" prop="contacts">
        <el-input v-model="basicInfoForm.contacts" type="text" placeholder="联系人姓名" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="telephone">
        <el-input v-model="basicInfoForm.telephone" type="text" placeholder="手机号码" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="项目总投资（万元）" prop="totalInvestment">
        <el-input v-model="basicInfoForm.totalInvestment" type="text" placeholder="对照营业执照，数字" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="环保投资（万元）" prop="environmentalProtectionInvestment">
        <el-input v-model="basicInfoForm.environmentalProtectionInvestment" type="text" placeholder="比例约为项目总投资的10-15%" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="占地面积（m²）" prop="floorSpace">
        <el-input v-model="basicInfoForm.floorSpace" type="text" placeholder="与经营场所使用证明或房产证一致，整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="经营面积（m²）" prop="managementSpace">
        <el-input v-model="basicInfoForm.managementSpace" type="text" placeholder="多层建筑要用占地面积乘以层数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="职工不住宿人数（人）" prop="nonAccommodationNum">
        <el-input v-model="basicInfoForm.nonAccommodationNum" type="text" placeholder="整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="职工住宿人数（人）" prop="accommodationNum">
        <el-input v-model="basicInfoForm.accommodationNum" type="text" placeholder="整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="员工吃饭人数（人）" prop="dinningNum">
        <el-input v-model="basicInfoForm.dinningNum" type="text" placeholder="整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="日工作时间（小时）" prop="dayWorkTime">
        <el-input v-model="basicInfoForm.dayWorkTime" type="text" placeholder="小时数，整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="年工作时间（日）" prop="yearWorkTime">
        <el-input v-model="basicInfoForm.yearWorkTime" type="text" placeholder="天数，整数" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="投产时间" prop="investmentTime">
        <el-input v-model="basicInfoForm.investmentTime" type="text" placeholder="一般以接单时间往后推半年计算，多以年计算" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="电年耗量(万kWh/a)" prop="annualPowerConsumption">
        <el-input v-model="basicInfoForm.annualPowerConsumption" type="text" placeholder="整数或小数一位" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="东" prop="east">
        <el-input v-model="basicInfoForm.east" type="text" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="南" prop="south">
        <el-input v-model="basicInfoForm.south" type="text" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="西" prop="west">
        <el-input v-model="basicInfoForm.west" type="text" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="北" prop="north">
        <el-input v-model="basicInfoForm.north" type="text" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="longtitude">
        <el-input v-model="basicInfoForm.longtitude" type="text" placeholder="小数点后6位" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="纬度" prop="latitude">
        <el-input v-model="basicInfoForm.latitude" type="text" placeholder="小数点后6位" style="width:700px;"></el-input>
      </el-form-item>
    </el-form>

  <el-tooltip class="item" effect="dark" content="保存" placement="right">
    <el-button  style="margin-top:10px" type="success" @click="putBasicFormInfo" >提交修改</el-button>
  </el-tooltip>
  </el-main>
</el-container>
  </div>
</template>

<script>
import { getFormInfo } from '@/api/project'
import { putFormInfo } from '@/api/project'

export default {

  data() {
    return {
      active: 0,
      projectId: 1,
      basicInfoForm: {
        projectType: '',
        enterpriseName: '',
        nameAbbreviation: '',
        NEIType: [],
        companyName: '',
        dinningNum: '',
        address: '',
        postalCode: '',
        corporateName: '',
        corporateId: '',
        contacts: '',
        telephone: '',
        totalInvestment: '',
        environmentalProtectionInvestment: '',
        floorSpace: '',
        managementSpace: '',
        nonAccommodationNum: '',
        accommodationNum: '',
        dayWorkTime: '',
        yearWorkTime: '',
        investmentTime: '',
        annualPowerConsumption: '',
        east: '',
        south: '',
        west: '',
        north: '',
        longtitude: '',
        latitude: '',
        constructionScale: '',
        societyCreditcode: '',
        businessRange: '',
        companyCertificatenumber: '',
        companyTelephone: '',
        companyAddress: '',
        environmentalEffectclassification: []
      },

      options1: [{
        value: 'C 制造业', label: 'C 制造业',
        children: [
          { value: 'C1391 淀粉及淀粉制品制造', label: 'C1391 淀粉及淀粉制品制造' },
          { value: 'C14 食品制造业', label: 'C14 食品制造业' },
          { value: 'C1421  糖果、巧克力制造', label: 'C1421  糖果、巧克力制造' },
          { value: 'C17 纺织业', label: 'C17 纺织业' },
          { value: 'C1789 篷、帆布制造', label: 'C1789 篷、帆布制造' },
          { value: 'C181 纺织服装制造业', label: 'C181 纺织服装制造业' },
          { value: 'C20 木材加工和木、竹、藤、棕、草制品业', label: 'C20 木材加工和木、竹、藤、棕、草制品业' },
          { value: 'C2011 锯材加工', label: 'C2011 锯材加工' },
          { value: 'C2013 单板加工', label: 'C2013 单板加工' },
          { value: 'C21 家具制造业', label: 'C21 家具制造业' },
          { value: 'C22 造纸和纸制品业', label: 'C22 造纸和纸制品业' },
          { value: 'C2231 纸和纸板容器制造', label: 'C2231 纸和纸板容器制造' },
          { value: 'C23 印刷和记录媒介复制业', label: 'C23 印刷和记录媒介复制业' },
          { value: 'C231 印刷', label: 'C231 印刷' },
          { value: 'C2319 包装装潢及其他印刷', label: 'C2319 包装装潢及其他印刷' },
          { value: 'C24 文教、工美、体育和娱乐用品制造业', label: 'C24 文教、工美、体育和娱乐用品制造业' },
          { value: 'C2438 珠宝首饰及有关物品的制造', label: 'C2438 珠宝首饰及有关物品的制造' },
          { value: 'C2450 玩具制造', label: 'C2450 玩具制造' },
          { value: 'C26 化学原料和化学制品制造业', label: 'C26 化学原料和化学制品制造业' },
          { value: 'C263 农药制造', label: 'C263 农药制造' },
          { value: 'C2641 涂料制造', label: 'C2641 涂料制造' },
          { value: 'C2662 专项化学用品制造', label: 'C2662 专项化学用品制造' },
          { value: 'C2669 其他专用化学产品制造', label: 'C2669 其他专用化学产品制造' },
          { value: 'C2682 化妆品制造', label: 'C2682 化妆品制造' },
          { value: 'C26 化学原料和化学品制造业', label: 'C26 化学原料和化学品制造业' },
          { value: 'C273 中药饮片加工', label: 'C273 中药饮片加工' },
          { value: 'C29  橡胶和塑料制品业', label: 'C29  橡胶和塑料制品业' },
          { value: 'C292 塑料制品业', label: 'C292 塑料制品业' },
          { value: 'C2921 塑料薄膜制造', label: 'C2921 塑料薄膜制造' },
          { value: 'C2922 塑料板、管、型材制造', label: 'C2922 塑料板、管、型材制造' },
          { value: 'C2924 泡沫塑料制造', label: 'C2924 泡沫塑料制造' },
          { value: 'C2926 塑料包装箱及容器制造', label: 'C2926 塑料包装箱及容器制造' },
          { value: 'C2927 日用塑料制品制造', label: 'C2927 日用塑料制品制造' },
          { value: 'C2928 塑料零件制造', label: 'C2928 塑料零件制造' },
          { value: 'C2929 其他塑料制品制造', label: 'C2929 其他塑料制品制造' },
          { value: 'C30 非金属矿物制品业', label: 'C30 非金属矿物制品业' },
          { value: 'C303 砖瓦、石材等建筑材料制造', label: 'C303 砖瓦、石材等建筑材料制造' },
          { value: 'C3033 建筑用石加工', label: 'C3033 建筑用石加工' },
          { value: 'C3039 其他建筑材料制造', label: 'C3039 其他建筑材料制造' },
          { value: 'C305 玻璃制品制造', label: 'C305 玻璃制品制造' },
          { value: 'C3051 技术玻璃制品制造', label: 'C3051 技术玻璃制品制造' },
          { value: 'C3071 卫生陶瓷制品制造', label: 'C3071 卫生陶瓷制品制造' },
          { value: 'C3140 钢压延加工', label: 'C3140 钢压延加工' },
          { value: 'C33 金属制品业', label: 'C33 金属制品业' },
          { value: 'C3311 金属结构制造', label: 'C3311 金属结构制造' },
          { value: 'C3352 建筑装饰及水暖管道零件制造', label: 'C3352 建筑装饰及水暖管道零件制造' },
          { value: 'C3381 金属制厨房用器具制造', label: 'C3381 金属制厨房用器具制造' },
          { value: 'C3383 金属制卫生器具制造', label: 'C3383 金属制卫生器具制造' },
          { value: 'C3389 其他金属制日用品制造', label: 'C3389 其他金属制日用品制造' },
          { value: 'C339  其他金属制品制造', label: 'C339  其他金属制品制造' },
          { value: 'C3392 交通及公共管理用金属标牌制造', label: 'C3392 交通及公共管理用金属标牌制造' },
          { value: 'C34 通用设备制造业', label: 'C34 通用设备制造业' },
          { value: 'C342 金属加工机械制造', label: 'C342 金属加工机械制造' },
          { value: 'C3431 轻小型起重设备制造', label: 'C3431 轻小型起重设备制造' },
          { value: 'C3433 生产专用车辆制造', label: 'C3433 生产专用车辆制造' },
          { value: 'C3462 风机、风扇制造', label: 'C3462 风机、风扇制造' },
          { value: 'C348 通用零部件制造', label: 'C348 通用零部件制造' },
          { value: 'C3482 紧固件制造', label: 'C3482 紧固件制造' },
          { value: 'C3483 通用设备制造业', label: 'C3483 通用设备制造业' },
          { value: 'C3484 机械零部件加工', label: 'C3484 机械零部件加工' },
          { value: 'C35 专用设备制造业', label: 'C35 专用设备制造业' },
          { value: 'C3525 模具制造', label: 'C3525 模具制造' },
          { value: 'C354 印刷、制药、日化及日用品生产专用设备制造', label: 'C354 印刷、制药、日化及日用品生产专用设备制造' },
          { value: 'C3561 电工机械专用设备制造', label: 'C3561 电工机械专用设备制造' },
          { value: 'C3585 机械治疗及病房护理设备制造', label: 'C3585 机械治疗及病房护理设备制造' },
          { value: 'C3599 其他专用设备制造', label: 'C3599 其他专用设备制造' },
          { value: 'C3660 汽车零部件及配件制造', label: 'C3660 汽车零部件及配件制造' },
          { value: 'C37 铁路、船舶、航空航天和其他运输设备制造业', label: 'C37 铁路、船舶、航空航天和其他运输设备制造业' },
          { value: 'C38 电气机械和器材制造', label: 'C38 电气机械和器材制造' },
          { value: 'C3819 微电机及其他电机制造', label: 'C3819 微电机及其他电机制造' },
          { value: 'C3823 配电开关控制设备制造', label: 'C3823 配电开关控制设备制造' },
          { value: 'C3829 其他输配电及控制设备制造', label: 'C3829 其他输配电及控制设备制造' },
          { value: 'C383 电线、电缆、光缆及电工器材制造', label: 'C383 电线、电缆、光缆及电工器材制造' },
          { value: 'C385 家用电力器具制造', label: 'C385 家用电力器具制造' },
          { value: 'C3852 家用空气调节器制造', label: 'C3852 家用空气调节器制造' },
          { value: 'C3854 家用厨房电器具制造', label: 'C3854 家用厨房电器具制造' },
          { value: 'C3857 家用电力器具专用配件制造', label: 'C3857 家用电力器具专用配件制造' },
          { value: 'C3859 其他家用电力器具制造', label: 'C3859 其他家用电力器具制造' },
          { value: 'C3872 照明灯具制造', label: 'C3872 照明灯具制造' },
          { value: 'C3879 灯用电器附件及其他照明器具制造', label: 'C3879 灯用电器附件及其他照明器具制造' },
          { value: 'C39 计算机、通信和其他电子设备制造业', label: 'C39 计算机、通信和其他电子设备制造业' },
          { value: 'C3951 电视机制造', label: 'C3951 电视机制造' },
          { value: 'C3971 电子元件及组件制造', label: 'C3971 电子元件及组件制造' },
          { value: 'C42 废弃资源综合利用业', label: 'C42 废弃资源综合利用业' },
          { value: 'C81 其他服务业', label: 'C81 其他服务业' }
        ] },
      { value: 'D 电力、热力、燃气及水生产和供应业', label: 'D 电力、热力、燃气及水生产和供应业',
        children: [
          { value: 'D44 电力、热力生产和供应业', label: 'D44 电力、热力生产和供应业' }
        ] },
      { value: 'E 建筑业', label: 'E 建筑业',
        children: [
          { value: 'E48 土木工程建筑业', label: 'E48 土木工程建筑业' },
          { value: 'E4813 市政道路工程建筑', label: 'E4813 市政道路工程建筑' },
          { value: 'E4822 河湖治理及防洪设施工程建筑', label: 'E4822 河湖治理及防洪设施工程建筑' },
          { value: 'E4852 管道工程建筑', label: 'E4852 管道工程建筑' },
          { value: 'E7610 防洪除涝设施管理', label: 'E7610 防洪除涝设施管理' }
        ] },
      { value: 'G 交通运输、仓储和邮政业', label: 'G 交通运输、仓储和邮政业',
        children: [
          { value: 'G59 仓储业', label: 'G59 仓储业' },
          { value: 'G5990 其他仓储业', label: 'G5990 其他仓储业' }
        ] },
      { value: 'H 住宿和餐饮业', label: 'H 住宿和餐饮业',
        children: [{ value: 'H62 餐饮业', label: 'H62 餐饮业' }
        ] },
      { value: 'K 房地产业', label: 'K 房地产业',
        children: [{ value: 'K70 房地产业', label: 'K70 房地产业' }
        ] },
      { value: 'L 租赁和商务服务业', label: 'L 租赁和商务服务业',
        children: [{ value: 'L72 商务服务业', label: 'L72 商务服务业' }
        ] },
      { value: 'M 科学研究和技术服务业', label: 'M 科学研究和技术服务业',
        children: [
          { value: 'M73 研究和试验发展', label: 'M73 研究和试验发展' },
          { value: 'M7461 环境保护监测', label: 'M7461 环境保护监测' }
        ] },
      { value: 'N 水利、环境和公共设施管理业', label: 'N 水利、环境和公共设施管理业',
        children: [
          { value: 'N76 水利管理业', label: 'N76 水利管理业' },
          { value: 'N7610 防洪除涝设施管理服务', label: 'N7610 防洪除涝设施管理服务' },
          { value: 'N77 生态保护和环境治理业', label: 'N77 生态保护和环境治理业' },
          { value: 'N7852 游览景区管理', label: 'N7852 游览景区管理' }
        ] },
      { value: 'O 居民服务、修理和其他服务业', label: 'O 居民服务、修理和其他服务业',
        children: [{ value: 'O7930 洗染服务', label: 'O7930 洗染服务' }
        ] },
      { value: 'Q 卫生和社会工作', label: 'Q 卫生和社会工作',
        children: [
          { value: 'Q83 卫生', label: 'Q83 卫生' },
          { value: 'Q8330 门诊部', label: 'Q8330 门诊部' },
          { value: 'Q839 其他卫生活动', label: 'Q839 其他卫生活动' }
        ] }
      ],

      options2: [{
        value: '一、畜牧业', label: '一、畜牧业',
        children: [{ value: '1、畜禽养殖场、养殖小区', label: '1、畜禽养殖场、养殖小区' }
        ] },
      { value: '二、农副食品加工业', label: '二、农副食品加工业',
        children: [
          { value: '2、粮食及饲料加工（其他）', label: '2、粮食及饲料加工（其他）' },
          { value: '3、植物油加工（除单纯分工和调和外的）', label: '3、植物油加工（除单纯分工和调和外的）' },
          { value: '4、制糖、糖制品加工（其他）', label: '4、制糖、糖制品加工（其他）' },
          { value: '5、屠宰（其他）', label: '5、屠宰（其他）' },
          { value: '6、肉禽类加工（年加工两万吨及以上）', label: '6、肉禽类加工（年加工两万吨及以上）' },
          { value: '7、水产品加工（鱼油提取及制品制造；年加工十万吨及以上）', label: '7、水产品加工（鱼油提取及制品制造；年加工十万吨及以上）' },
          { value: '8、淀粉、淀粉糖（其他-单纯分装除外）', label: '8、淀粉、淀粉糖（其他-单纯分装除外）' },
          { value: '9、豆制品制造（除手工制作和单纯分装外的）', label: '9、豆制品制造（除手工制作和单纯分装外的）' },
          { value: '10、蛋品加工', label: '10、蛋品加工' }
        ] },
      { value: '三、食品制造业', label: '三、食品制造业',
        children: [
          { value: '11、方便食品制造（其他-手工制作和单纯分装除外）', label: '11、方便食品制造（其他-手工制作和单纯分装除外）' },
          { value: '12、乳制品制造（其他）', label: '12、乳制品制造（其他）' },
          { value: '13、调味品、发酵制品制造（其他-单纯分装除外）', label: '13、调味品、发酵制品制造（其他-单纯分装除外）' },
          { value: '14、盐加工（全部）', label: '14、盐加工（全部）' },
          { value: '15、饲料添加剂、食品添加剂制造（单纯混合或分装的）', label: '15、饲料添加剂、食品添加剂制造（单纯混合或分装的）' },
          { value: '16、营养食品、保健食品、冷冻饮品、食用冰制造及其他食品制造（其他-手工制作和单纯分装除外）',
            label: '16、营养食品、保健食品、冷冻饮品、食用冰制造及其他食品制造（其他-手工制作和单纯分装除外）' }
        ] },
      { value: '四、酒、饮料制造业', label: '四、酒、饮料制造业',
        children: [
          { value: '17、酒精饮料及酒类制造（其他）', label: '17、酒精饮料及酒类制造（其他）' },
          { value: '18、果菜汁类及其他软饮料制造（其他）', label: '18、果菜汁类及其他软饮料制造（其他）' }
        ] },
      { value: '五、烟草制造业', label: '五、烟草制造业',
        children: [
          { value: '19、卷烟（其他）', label: '19、卷烟（其他）' }
        ] },
      { value: '六、纺织业', label: '六、纺织业',
        children: [
          { value: '20、纺织品制造（其他-编织物及其制品制造除外）', label: '20、纺织品制造（其他-编织物及其制品制造除外）' }
        ] },
      { value: '七、纺织服装、服饰业', label: '七、纺织服装、服饰业',
        children: [
          { value: '21、服装制造（新建年加工100万件及以上）', label: '21、服装制造（新建年加工100万件及以上）' }
        ] },
      { value: '八、皮革、毛皮、羽毛及其制品和制鞋业', label: '八、皮革、毛皮、羽毛及其制品和制鞋业',
        children: [
          { value: '22、皮革、毛皮、羽毛（绒）制品（其他）', label: '22、皮革、毛皮、羽毛（绒）制品（其他）' },
          { value: '23、制鞋业（使用有机溶剂的）', label: '23、制鞋业（使用有机溶剂的）' }
        ] },
      { value: '九、木材加工和木、竹、藤、棕、草制品业', label: '九、木材加工和木、竹、藤、棕、草制品业',
        children: [
          { value: '24、锯材、木片加工、木制品制造（其他）', label: '24、锯材、木片加工、木制品制造（其他）' },
          { value: '25、人造板制造（其他）', label: '25、人造板制造（其他）' }
        ] },
      { value: '十、家具制造业', label: '十、家具制造业',
        children: [
          { value: '27、家具制造（其他）', label: '27、家具制造（其他）' }
        ] },
      { value: '十一、造纸和纸制品业', label: '十一、造纸和纸制品业',
        children: [
          { value: '28、纸浆、溶解浆、纤维浆等制造；造纸（含废纸造纸）', label: '28、纸浆、溶解浆、纤维浆等制造；造纸（含废纸造纸）' }
        ] },
      { value: '十二、印刷和记录媒介复制业', label: '十二、印刷和记录媒介复制业',
        children: [
          { value: '30、印刷厂；磁材料制品（全部）', label: '30、印刷厂；磁材料制品（全部）' }
        ] },
      { value: '十三、文教、工美、体育和娱乐用品制造业', label: '十三、文教、工美、体育和娱乐用品制造业',
        children: [
          { value: '31、文教、体育、娱乐用品制造（全部）', label: '31、文教、体育、娱乐用品制造（全部）' },
          { value: '32、工艺品制造（有喷漆工艺且年用油性漆量，含稀释剂10吨以下的，或使用水性漆的；有机加工的）',
            label: '32、工艺品制造（有喷漆工艺且年用油性漆量，含稀释剂10吨以下的，或使用水性漆的；有机加工的）' }
        ] },
      { value: '十五、化学原料和化学制品制造业', label: '十五、化学原料和化学制品制造业',
        children: [
          { value: '36、基本化学原料制造；农药制造；涂料、染料、颜料、油墨及其类似产品制造；合成材料制造；专用化学品制造；炸药、火工及焰火产品制造；水处理剂等制造（单纯混合或分装的）',
            label: '36、基本化学原料制造；农药制造；涂料、染料、颜料、油墨及其类似产品制造；合成材料制造；专用化学品制造；炸药、火工及焰火产品制造；水处理剂等制造（单纯混合或分装的）' },
          { value: '37、肥料制造（其他）', label: '37、肥料制造（其他）' },
          { value: '38、半导体材料', label: '38、半导体材料' },
          { value: '39、日用化学品制造（单纯混合或分装的）', label: '39、日用化学品制造（单纯混合或分装的）' }
        ] },
      { value: '十六、医药制造业', label: '十六、医药制造业',
        children: [
          { value: '40、化学药品制造；生物、生化制品制造', label: '40、化学药品制造；生物、生化制品制造' },
          { value: '41、单纯药品分装、复配（全部）', label: '41、单纯药品分装、复配（全部）' },
          { value: '42、中成药制造、中药饮片加工（其他）', label: '42、中成药制造、中药饮片加工（其他）' },
          { value: '43、卫生材料及医药用品制造（全部）', label: '43、卫生材料及医药用品制造（全部）' }
        ] },
      { value: '十七、化学纤维制造业', label: '十七、化学纤维制造业',
        children: [
          { value: '44、化学纤维制造（单纯纺丝）', label: '44、化学纤维制造（单纯纺丝）' },
          { value: '45、生物质纤维素乙醇生产', label: '45、生物质纤维素乙醇生产' }
        ] },
      { value: '十八、橡胶和塑料制品业', label: '十八、橡胶和塑料制品业',
        children: [
          { value: '46、轮胎制造、再生橡胶制造、橡胶加工、橡胶制品制造及翻新制造（其他）', label: '46、轮胎制造、再生橡胶制造、橡胶加工、橡胶制品制造及翻新制造（其他）' },
          { value: '47、塑料制品制造（其他）', label: '47、塑料制品制造（其他）' }
        ] },
      { value: '十九、非金属矿物制品业', label: '十九、非金属矿物制品业',
        children: [
          { value: '48、水泥制造', label: '48、水泥制造' },
          { value: '49、水泥粉磨站（全部）', label: '49、水泥粉磨站（全部）' },
          { value: '50、砼结构构件制造、商品混凝土加工（全部）', label: '50、砼结构构件制造、商品混凝土加工（全部）' },
          { value: '51、石灰和石膏制造、石材加工、人造石制造、砖瓦制造（全部）', label: '51、石灰和石膏制造、石材加工、人造石制造、砖瓦制造（全部）' },
          { value: '52、玻璃及玻璃制品（其他玻璃制造；以煤、油、天然气为燃料加热的玻璃制品制造）', label: '52、玻璃及玻璃制品（其他玻璃制造；以煤、油、天然气为燃料加热的玻璃制品制造）' },
          { value: '53、玻璃纤维及玻璃纤维增强塑料制品（全部）', label: '53、玻璃纤维及玻璃纤维增强塑料制品（全部）' },
          { value: '54、陶瓷制品（其他）', label: '54、陶瓷制品（其他）' },
          { value: '55、耐火材料及其制品（其他）', label: '55、耐火材料及其制品（其他）' },
          { value: '56、石墨及其他非金属矿物制品（其他）', label: '56、石墨及其他非金属矿物制品（其他）' },
          { value: '57、防水建筑材料制造、沥青搅拌站、干粉砂浆搅拌站（全部）', label: '57、防水建筑材料制造、沥青搅拌站、干粉砂浆搅拌站（全部）' }
        ] },
      { value: '二十、黑色金属冶炼和压延加工业', label: '二十、黑色金属冶炼和压延加工业',
        children: [
          { value: '58、炼铁、球团、烧结', label: '58、炼铁、球团、烧结' },
          { value: '59、炼钢', label: '59、炼钢' },
          { value: '60、黑色金属铸造（其他）', label: '60、黑色金属铸造（其他）' },
          { value: '61、压延加工（其他）', label: '61、压延加工（其他）' },
          { value: '62、铁合金制造；锰、铬冶炼', label: '62、铁合金制造；锰、铬冶炼' }
        ] },
      { value: '二十一、有色金属冶炼和压延加工业', label: '二十一、有色金属冶炼和压延加工业',
        children: [
          { value: '63、有色金属冶炼（含再生有色金属冶炼）', label: '63、有色金属冶炼（含再生有色金属冶炼）' },
          { value: '64、有色金属合金制造', label: '64、有色金属合金制造' },
          { value: '65、有色金属铸造（其他）', label: '65、有色金属铸造（其他）' },
          { value: '66、压延加工（全部）', label: '66、压延加工（全部）' }
        ] },
      { value: '二十二、金属制品业', label: '二十二、金属制品业',
        children: [
          { value: '67、金属制品加工制造（其他-仅切割组装除外）', label: '67、金属制品加工制造（其他-仅切割组装除外）' },
          { value: '68、金属制品表面处理及热处理加工（其他）', label: '68、金属制品表面处理及热处理加工（其他）' }
        ] },
      { value: '二十三、通用设备制造业', label: '二十三、通用设备制造业',
        children: [
          { value: '69、通用设备制造及维修（其他-仅组装的除外）', label: '69、通用设备制造及维修（其他-仅组装的除外）' }
        ] },
      { value: '二十四、专用设备制造业', label: '二十四、专用设备制造业',
        children: [
          { value: '70、专用设备制造及维修（其他-仅组装的除外）', label: '70、专用设备制造及维修（其他-仅组装的除外）' }
        ] },
      { value: '二十五、汽车制造业', label: '二十五、汽车制造业',
        children: [
          { value: '71、汽车制造（其他）', label: '71、汽车制造（其他）' }
        ] },
      { value: '二十七、电气机械和器材制造业', label: '二十七、电气机械和器材制造业',
        children: [
          { value: '78、电气机械及器材制造（其他-仅组装的除外）', label: '78、电气机械及器材制造（其他-仅组装的除外）' },
          { value: '79、太阳能电池片（其他）', label: '79、太阳能电池片（其他）' }
        ] },
      { value: '二十八、计算机、通信和其他电子设备制造业', label: '二十八、计算机、通信和其他电子设备制造业',
        children: [
          { value: '80、计算机制造（有分割、焊接、酸洗或有机溶剂清洗工艺的）', label: '80、计算机制造（有分割、焊接、酸洗或有机溶剂清洗工艺的）' },
          { value: '81、电子真空器件、集成电路、半导体分立器件制造、光电子器件、其他电子器件制造等（有分割、焊接、酸洗或有机溶剂清洗工艺的）',
            label: '81、电子真空器件、集成电路、半导体分立器件制造、光电子器件、其他电子器件制造等（有分割、焊接、酸洗或有机溶剂清洗工艺的）' },
          { value: '82、印刷电路板、电子元件及组件制造（有分割、焊接、酸洗或有机溶剂清洗工艺的）', label: '82、印刷电路板、电子元件及组件制造（有分割、焊接、酸洗或有机溶剂清洗工艺的）' },
          { value: '83、电子陶瓷、有机薄膜、荧光粉、贵金属粉等电子专用材料', label: '83、电子陶瓷、有机薄膜、荧光粉、贵金属粉等电子专用材料' },
          { value: '84、电子配件组装（有分割、焊接（手工焊接除外）、酸洗或有机溶剂清洗工艺的）', label: '84、电子配件组装（有分割、焊接（手工焊接除外）、酸洗或有机溶剂清洗工艺的）' }
        ] },
      { value: '二十九、仪器仪表制造业', label: '二十九、仪器仪表制造业',
        children: [
          { value: '85、仪器仪表制造（其他-仅组装的除外）', label: '85、仪器仪表制造（其他-仅组装的除外）' }
        ] },
      { value: '三十、废弃资源综合利用业', label: '三十、废弃资源综合利用业',
        children: [
          { value: '86、废旧资源（含生物质）加工、再生利用（其他）', label: '86、废旧资源（含生物质）加工、再生利用（其他）' }
        ] },
      { value: '三十一、电力、热力生产和供应业', label: '三十一、电力、热力生产和供应业',
        children: [
          { value: '87、火力发电（含热电）（燃气发电）', label: '87、火力发电（含热电）（燃气发电）' },
          { value: '88、综合利用发电（单纯利用余热、余压、余气（含煤层气）发电）', label: '88、综合利用发电（单纯利用余热、余压、余气（含煤层气）发电）' },
          { value: '89、热力生产和供应工程（其他-电热锅炉除外）', label: '89、热力生产和供应工程（其他-电热锅炉除外）' }
        ] },
      { value: '三十四、环境治理业', label: '三十四、环境治理业',
        children: [
          { value: '99、脱硫、脱硝、除尘等工程（脱硫、脱硝）', label: '99、脱硫、脱硝、除尘等工程（脱硫、脱硝）' }
        ] },
      { value: '三十五、公共设施管理业', label: '三十五、公共设施管理业',
        children: [
          { value: '103、城镇生活垃圾转运站（全部）', label: '103、城镇生活垃圾转运站（全部）' }
        ] },
      { value: '三十六、房地产', label: '三十六、房地产',
        children: [
          { value: '106、房地产开发、宾馆、酒店、办公用房等（建筑面积5万平方米及以上；涉及环境敏感区的）', label: '106、房地产开发、宾馆、酒店、办公用房等（建筑面积5万平方米及以上；涉及环境敏感区的）' }
        ] },
      { value: '三十九、卫生', label: '三十九、卫生',
        children: [
          { value: '111、医院、专科防治院（所、站）、社区医疗、卫生院（所、站）、血站、急救中心、疗养院等其他卫生机构（其他-20张床位以下的，中医门诊除外）',
            label: '111、医院、专科防治院（所、站）、社区医疗、卫生院（所、站）、血站、急救中心、疗养院等其他卫生机构（其他-20张床位以下的，中医门诊除外）' },
          { value: '112、疾病预防控制中心（其他）', label: '112、疾病预防控制中心（其他）' }
        ] },
      { value: '四十、社会事业与服务业', label: '四十、社会事业与服务业',
        children: [
          { value: '113、学校、幼儿园、托儿所、福利院、养老院（建筑面积5万平方米及以上，有实验室的学校（P3、P4生物安全实验室除外））',
            label: '113、学校、幼儿园、托儿所、福利院、养老院（建筑面积5万平方米及以上，有实验室的学校（P3、P4生物安全实验室除外））' },
          { value: '115、餐饮、娱乐、洗浴场所', label: '115、餐饮、娱乐、洗浴场所' },
          { value: '119、公园（含动物园、植物园、主题公园）（其他）', label: '119、公园（含动物园、植物园、主题公园）（其他）' },
          { value: '124、加油、加气站（新建、扩建）', label: '124、加油、加气站（新建、扩建）' },
          { value: '125、洗车场（营业面积1000平方米及以上；涉及环境敏感区的）', label: '125、洗车场（营业面积1000平方米及以上；涉及环境敏感区的）' },
          { value: '126、汽车、摩托车维修场所（营业面积5000平方米及以上；涉及环境敏感区的）', label: '126、汽车、摩托车维修场所（营业面积1000平方米及以上；涉及环境敏感区的）' }
        ] }
      ]
    }
  },
  created() {
    this.getBasicFormInfo()
  },
  methods: {
    getBasicFormInfo() {
      getFormInfo(this.projectId).then(response => {
        this.basicInfoForm.projectType = response.projectInfo.projectType
        this.basicInfoForm.enterpriseName = response.projectInfo.enterpriseName
        this.basicInfoForm.nameAbbreviation = response.projectInfo.nameAbbreviation
        this.basicInfoForm.NEIType = response.projectInfo.NEIType
        this.basicInfoForm.companyName = response.projectInfo.companyName
        this.basicInfoForm.dinningNum = response.projectInfo.dinningNum
        this.basicInfoForm.address = response.projectInfo.address
        this.basicInfoForm.postalCode = response.projectInfo.postalCode
        this.basicInfoForm.corporateName = response.projectInfo.corporateName
        this.basicInfoForm.corporateId = response.projectInfo.corporateId
        this.basicInfoForm.contacts = response.projectInfo.contacts
        this.basicInfoForm.telephone = response.projectInfo.telephone
        this.basicInfoForm.totalInvestment = response.projectInfo.totalInvestment
        this.basicInfoForm.environmentalProtectionInvestment = response.projectInfo.environmentalProtectionInvestment
        this.basicInfoForm.floorSpace = response.projectInfo.floorSpace
        this.basicInfoForm.managementSpace = response.projectInfo.managementSpace
        this.basicInfoForm.nonAccommodationNum = response.projectInfo.nonAccommodationNum
        this.basicInfoForm.accommodationNum = response.projectInfo.accommodationNum
        this.basicInfoForm.dayWorkTime = response.projectInfo.dayWorkTime
        this.basicInfoForm.yearWorkTime = response.projectInfo.yearWorkTime
        this.basicInfoForm.investmentTime = response.projectInfo.investmentTime
        this.basicInfoForm.annualPowerConsumption = response.projectInfo.annualPowerConsumption
        this.basicInfoForm.east = response.projectInfo.east
        this.basicInfoForm.south = response.projectInfo.south
        this.basicInfoForm.west = response.projectInfo.west
        this.basicInfoForm.north = response.projectInfo.north
        this.basicInfoForm.longtitude = response.projectInfo.longtitude
        this.basicInfoForm.latitude = response.projectInfo.latitude
        this.basicInfoForm.constructionScale = response.projectInfo.constructionScale
        this.basicInfoForm.societyCreditcode = response.projectInfo.societyCreditcode
        this.basicInfoForm.businessRange = response.projectInfo.businessRange
        this.basicInfoForm.companyCertificatenumber = response.projectInfo.companyCertificatenumber
        this.basicInfoForm.companyTelephone = response.projectInfo.companyTelephone
        this.basicInfoForm.companyAddress = response.projectInfo.companyAddress
        this.basicInfoForm.environmentalEffectclassification = response.projectInfo.environmentalEffectclassification
      })
    },
    putBasicFormInfo() {
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      putFormInfo(this.basicInfoForm).then(response => {})
      this.loading = false
    },
    openDialog() {
      console.log('fdsdf')
      this.$confirm('是否保存对基础信息的修改', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消保存'
        })
      })
    },
    next() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: '/form/form2' })
          break
        case 1:
          this.$router.push({ path: '/form/form3' })
          break
        case 2:
          this.$router.push({ path: '/form/form4' })
          break
        case 3:
          this.$router.push({ path: '/form/form5' })
          break

        default:
          break
      }
      if (this.active++ > 4) {
        this.active = 0
        this.$router.push({ path: '/form/form1' })
      }
    },
    previous() {
      if (this.active > 0) {
        this.active--
        this.$router.go(-1)
      }
    }
  }
}
</script>

