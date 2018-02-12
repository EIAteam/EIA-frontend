<template>
  <div>
    <el-form :model="basicInfoForm">
      <el-form-item label="项目性质">
        <el-select v-model="basicInfoForm.projectType" placeholder="请选择">
          <el-option label="新建"></el-option>
          <el-option label="搬迁"></el-option>
          <el-option label="扩建"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item :inline="true" class="demo-form-inline" label="项目所在地">
        <el-select v-model="basicInfoForm." placeholder="请选择">
          <el-option label="河南"></el-option>
          <el-option label="广东"></el-option>
          <el-option label="北京"></el-option>
          <el-option label="河北"></el-option>
          <el-option label="江苏"></el-option>
          <el-option label="浙江"></el-option>
        </el-select>
        <el-select v-model="basicInfoForm." placeholder="请选择">
          <el-option label="佛山"></el-option>
          <el-option label="广州"></el-option>
          <el-option label="深圳"></el-option>
          <el-option label="珠海"></el-option>
          <el-option label="东莞"></el-option>
          <el-option label="中山"></el-option>
        </el-select>
        <el-select v-model="basicInfoForm." placeholder="请选择">
          <el-option label="禅城"></el-option>
          <el-option label="南海"></el-option>
          <el-option label="顺德"></el-option>
        </el-select>
        <el-select v-model="basicInfoForm." placeholder="请选择">
          <el-option label="勒流"></el-option>
          <el-option label="大良"></el-option>
          <el-option label="容桂"></el-option>
          <el-option label="均安"></el-option>
          <el-option label="陈村"></el-option>
          <el-option label="伦教"></el-option>
          <el-option label="乐从"></el-option>
          <el-option label="龙江"></el-option>
          <el-option label="北滘"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item lable="建设单位名称">
        <el-input v-model="basicInfoForm.enterpriseName" type="text" placeholder="项目名称（与营业执照一致）"></el-input>
      </el-form-item>

      <el-form-item lable="名称缩写">
        <el-input v-model="basicInfoForm.nameAbbreviation" type="text" placeholder="单位名称"></el-input>
      </el-form-item>

      <el-form-item label="国民经济行业类别及代码">
      <el-cascader :options="options" :show-all-levels="false" v-model="basicInfoForm.NEIType" placeholder="请选择"></el-cascader>
      </el-form-item>

      <el-form-item lable="环评单位名称">
        <el-input v-model="basicInfoForm.companyName" type="text" placeholder="环评单位全称"></el-input>
      </el-form-item>

      <el-form-item lable="环评单位证书编号">
        <el-input v-model="basicInfoForm.companyId" type="text" placeholder="环评单位号码"></el-input>
      </el-form-item>

      <el-form-item lable="环评单位联系电话">
        <el-input v-model="basicInfoForm." type="text" placeholder="环评报告联系人电话"></el-input>
      </el-form-item>

      <el-form-item lable="环评单位联系地址">
        <el-input v-model="basicInfoForm." type="text" placeholder="环评单位地址"></el-input>
      </el-form-item>

      <el-form-item lable="项目地址">
        <el-input v-model="basicInfoForm.address" type="text" placeholder="与营业执照一致"></el-input>
      </el-form-item>

      <el-form-item lable="邮政编码">
        <el-input v-model="basicInfoForm.postalCode" type="text" placeholder="6位数字"></el-input>
      </el-form-item>

      <el-form-item lable="法人代表">
        <el-input v-model="basicInfoForm.corporateName" type="text" placeholder="法人姓名"></el-input>
      </el-form-item>

      <el-form-item lable="法人身份证号">
        <el-input v-model="basicInfoForm.corporateId" type="text" placeholder="身份证号码"></el-input>
      </el-form-item>

      <el-form-item lable="项目规模">
        <el-input v-model="basicInfoForm.constructionScale" type="text" placeholder="年产量"></el-input>
      </el-form-item>

      <el-form-item lable="统一社会信用代码">
        <el-input v-model="basicInfoForm." type="text" placeholder="与营业执照一致"></el-input>
      </el-form-item>

      <el-form-item lable="营业执照经营范围">
        <el-input v-model="basicInfoForm." type="text" placeholder="与营业执照一致"></el-input>
      </el-form-item>

      <el-form-item lable="联系人">
        <el-input v-model="basicInfoForm.contacts" type="text" placeholder="联系人姓名"></el-input>
      </el-form-item>

      <el-form-item lable="联系电话">
        <el-input v-model="basicInfoForm.telephone" type="text" placeholder="手机号码"></el-input>
      </el-form-item>

      <el-form-item lable="项目总投资（万元）">
        <el-input v-model="basicInfoForm.totalInvestment" type="text" placeholder="对照营业执照，数字"></el-input>
      </el-form-item>

      <el-form-item lable="环保投资（万元）">
        <el-input v-model="basicInfoForm.environmentalProtectionInvestment" type="text" placeholder="比例约为项目总投资的10-15%"></el-input>
      </el-form-item>

      <el-form-item lable="占地面积（m²）">
        <el-input v-model="basicInfoForm.floorSpace" type="text" placeholder="与经营场所使用证明或房产证一致，整数"></el-input>
      </el-form-item>

      <el-form-item lable="经营面积（m²）">
        <el-input v-model="basicInfoForm.managementSpace" type="text" placeholder="多层建筑要用占地面积乘以层数"></el-input>
      </el-form-item>

      <el-form-item lable="职工不住宿人数（人）">
        <el-input v-model="basicInfoForm.nonAccommodationNum" type="text" placeholder="整数"></el-input>
      </el-form-item>

      <el-form-item lable="职工住宿人数（人）">
        <el-input v-model="basicInfoForm.accommodationNum" type="text" placeholder="整数"></el-input>
      </el-form-item>

      <el-form-item lable="员工食饭人数（人）">
        <el-input v-model="basicInfoForm." type="text" placeholder="整数"></el-input>
      </el-form-item>

      <el-form-item lable="日工作时间（小时）">
        <el-input v-model="basicInfoForm.dayWorkTime" type="text" placeholder="小时数，整数"></el-input>
      </el-form-item>

      <el-form-item lable="年工作时间（日）">
        <el-input v-model="basicInfoForm.yearWorkTime" type="text" placeholder="天数，整数"></el-input>
      </el-form-item>

      <el-form-item lable="投产时间">
        <el-input v-model="basicInfoForm.investmentTime" type="text" placeholder="一般以接单时间往后推半年计算，多以年计算"></el-input>
      </el-form-item>

      <el-form-item lable="电年耗量">
        <el-input v-model="basicInfoForm.annualPowerConsumption" type="text" placeholder="万kWh/a，整数或小数一位"></el-input>
      </el-form-item>

      <el-form-item lable="东">
        <el-input v-model="basicInfoForm.east" type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="南">
        <el-input v-model="basicInfoForm.south" type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="西">
        <el-input v-model="basicInfoForm.west" type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="北">
        <el-input v-model="basicInfoForm.north" type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="经度">
        <el-input v-model="basicInfoForm.longtitude" type="text" placeholder="小数点后6位"></el-input>
      </el-form-item>

      <el-form-item lable="纬度">
        <el-input v-model="basicInfoForm.latitude" type="text" placeholder="小数点后6位"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        basicInfoForm: {
          projectType: '',
          formInline: '',
          enterpriseName: '',
          nameAbbreviation: '',
          NEIType: '',
          companyName: '',
          companyId: '',
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
          constructionScale: ''
        },

        options: [{
          value: 'C 制造业',
          label: 'C 制造业',
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
        { value: 'D 电力、热力、燃气及水生产和供应业',
          label: 'D 电力、热力、燃气及水生产和供应业',
          children: [
            { value: 'D44 电力、热力生产和供应业', label: 'D44 电力、热力生产和供应业' }
          ] },
        { value: 'E 建筑业',
          label: 'E 建筑业',
          children: [
            { value: 'E48 土木工程建筑业', label: 'E48 土木工程建筑业' },
            { value: 'E4813 市政道路工程建筑', label: 'E4813 市政道路工程建筑' },
            { value: 'E4822 河湖治理及防洪设施工程建筑', label: 'E4822 河湖治理及防洪设施工程建筑' },
            { value: 'E4852 管道工程建筑', label: 'E4852 管道工程建筑' },
            { value: 'E7610 防洪除涝设施管理', label: 'E7610 防洪除涝设施管理' }
          ] },
        { value: 'G 交通运输、仓储和邮政业',
          label: 'G 交通运输、仓储和邮政业',
          children: [
            { value: 'G59 仓储业', label: 'G59 仓储业' },
            { value: 'G5990 其他仓储业', label: 'G5990 其他仓储业' }
          ] },
        { value: 'H 住宿和餐饮业',
          label: 'H 住宿和餐饮业',
          children: [{ value: 'H62 餐饮业', label: 'H62 餐饮业' }] },
        { value: 'K 房地产业',
          label: 'K 房地产业',
          children: [{ value: 'K70 房地产业', label: 'K70 房地产业' }] },
        { value: 'L 租赁和商务服务业',
          label: 'L 租赁和商务服务业',
          children: [{ value: 'L72 商务服务业', label: 'L72 商务服务业' }] },
        { value: 'M 科学研究和技术服务业',
          label: 'M 科学研究和技术服务业',
          children: [
            { value: 'M73 研究和试验发展', label: 'M73 研究和试验发展' },
            { value: 'M7461 环境保护监测', label: 'M7461 环境保护监测' }
          ] },
        { value: 'N 水利、环境和公共设施管理业',
          label: 'N 水利、环境和公共设施管理业',
          children: [
            { value: 'N76 水利管理业', label: 'N76 水利管理业' },
            { value: 'N7610 防洪除涝设施管理服务', label: 'N7610 防洪除涝设施管理服务' },
            { value: 'N77 生态保护和环境治理业', label: 'N77 生态保护和环境治理业' },
            { value: 'N7852 游览景区管理', label: 'N7852 游览景区管理' }
          ] },
        { value: 'O 居民服务、修理和其他服务业',
          label: 'O 居民服务、修理和其他服务业',
          children: [{ value: 'O7930 洗染服务', label: 'O7930 洗染服务' }] },
        { value: 'Q 卫生和社会工作',
          label: 'Q 卫生和社会工作',
          children: [
            { value: 'Q83 卫生', label: 'Q83 卫生' },
            { value: 'Q8330 门诊部', label: 'Q8330 门诊部' },
            { value: 'Q839 其他卫生活动', label: 'Q839 其他卫生活动' }
          ] }
        ]
      }
    }
  }
</script>


