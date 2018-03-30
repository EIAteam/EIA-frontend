<template>
  <el-form :model="basicInfoForm" label-width="120px;" ref="basicInfoForm" :rules="formRules">
      <el-form-item label="项目性质" prop="projectType">
        <el-select v-model="basicInfoForm.projectType" placeholder="请选择">
          <el-option label="新建" value="newBuilt"></el-option>
          <el-option label="搬迁" value="extension"></el-option>
          <el-option label="扩建" value="removal"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="建设单位名称" prop="constructionCompanyName">
        <el-input v-model="basicInfoForm.constructionCompanyName" type="text" placeholder="项目名称（与营业执照一致）" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="名称缩写" prop="nameAbbreviation">
        <el-input v-model="basicInfoForm.nameAbbreviation" type="text" placeholder="单位名称" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="国民经济行业类别及代码" prop="NEIType">
        <el-cascader :options="NEITypeOptions" :show-all-levels="false" v-model="basicInfoForm.NEIType"
        placeholder="请选择" style="width:400px;" expand-trigger="hover"></el-cascader>
      </el-form-item>

      <el-form-item label="环境影响评价行业类别" prop="environmentalEffectclassification">
        <el-cascader :options="environmentalEffectclassificationOptions" expand-trigger="hover"
        v-model="basicInfoForm.environmentalEffectclassification" placeholder="请选择" style="width:1200px;"></el-cascader>
      </el-form-item>

      <el-form-item label="环评单位名称" prop="EAcompanyName" class="demo-autocomplete">
        <el-autocomplete class="inline-input" v-model="basicInfoForm.EAcompanyName" :fetch-suggestions="querySearch"
        placeholder="请输入环评单位全称" @select="handleSelect($event)" style="width:400px;"></el-autocomplete>
      </el-form-item>

      <el-form-item label="环评单位证书编号" prop="EAcompanyCertificatenumber">
        <el-input v-model="basicInfoForm.EAcompanyCertificatenumber" type="text" placeholder="环评单位号码" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="环评单位联系电话" prop="EAcompanyTelephone">
        <el-input v-model="basicInfoForm.EAcompanyTelephone" type="text" placeholder="环评报告联系人电话" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="环评单位联系地址" prop="EAcompanyAddress">
        <el-input v-model="basicInfoForm.EAcompanyAddress" type="text" placeholder="环评单位地址" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="项目地址" prop="address">
        <el-input v-model="basicInfoForm.address" type="text" placeholder="与营业执照一致" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="邮政编码" prop="postalCode">
        <el-input v-model="basicInfoForm.postalCode" type="text" placeholder="6位数字" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="法人代表" prop="corporateName">
        <el-input v-model="basicInfoForm.corporateName" type="text" placeholder="法人姓名" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="法人身份证号" prop="corporateId">
        <el-input v-model="basicInfoForm.corporateId" type="text" placeholder="身份证号码" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="项目规模" prop="constructionScale">
        <el-input v-model="basicInfoForm.constructionScale" type="text" placeholder="年产量" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="统一社会信用代码" prop="societyCreditcode">
        <el-input v-model="basicInfoForm.societyCreditcode" type="text" placeholder="与营业执照一致" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="营业执照经营范围" prop="businessRange">
        <el-input v-model="basicInfoForm.businessRange" type="text" placeholder="与营业执照一致" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="联系人" prop="contacts">
        <el-input v-model="basicInfoForm.contacts" type="text" placeholder="联系人姓名" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="telephone">
        <el-input v-model="basicInfoForm.telephone" type="text" placeholder="手机号码" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="项目总投资（万元）" prop="totalInvestment">
        <el-input v-model.number="basicInfoForm.totalInvestment" type="text" placeholder="对照营业执照，数字" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="环保投资（万元）" prop="environmentalProtectionInvestment">
        <el-input v-model.number="basicInfoForm.environmentalProtectionInvestment" type="text" placeholder="比例约为项目总投资的10-15%" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="占地面积（m²）" prop="floorSpace">
        <el-input v-model.number="basicInfoForm.floorSpace" type="text" placeholder="与经营场所使用证明或房产证一致，整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="经营面积（m²）" prop="managementSpace">
        <el-input v-model.number="basicInfoForm.managementSpace" type="text" placeholder="多层建筑要用占地面积乘以层数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="职工不住宿人数（人）" prop="nonAccommodationNum">
        <el-input v-model.number="basicInfoForm.nonAccommodationNum" type="text" placeholder="整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="职工住宿人数（人）" prop="accommodationNum">
        <el-input v-model.number="basicInfoForm.accommodationNum" type="text" placeholder="整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="员工吃饭人数（人）" prop="dinningNum">
        <el-input v-model.number="basicInfoForm.dinningNum" type="text" placeholder="整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="日工作时间（小时）" prop="dayWorkTime">
        <el-input v-model.number="basicInfoForm.dayWorkTime" type="text" placeholder="小时数，整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="年工作时间（日）" prop="yearWorkTime">
        <el-input v-model.number="basicInfoForm.yearWorkTime" type="text" placeholder="天数，整数" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="投产时间" prop="investmentTime">
        <el-input v-model.number="basicInfoForm.investmentTime" type="text" placeholder="一般以接单时间往后推半年计算，多以年计算" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="电年耗量（万kWh/a）" prop="annualPowerConsumption">
        <el-input v-model.number="basicInfoForm.annualPowerConsumption" type="text" placeholder="整数或小数一位" style="width:400px;"></el-input>
      </el-form-item>

	    <el-form-item label="边角料年产量" prop="annualLeftover">
        <el-input v-model.number="basicInfoForm.annualLeftover" type="text" placeholder="整数或小数一位" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="能源使用情况" prop="energyUsage">
        <el-select v-model="basicInfoForm.energyUsage" placeholder="请选择">
          <el-option label="天然气" value="NG"></el-option>
          <el-option label="液化石油气" value="LPG"></el-option>
          <el-option label="无" value="none"></el-option>
        </el-select>
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
        <el-input v-model.number="basicInfoForm.longtitude" type="text" placeholder="小数点后6位" style="width:400px;"></el-input>
      </el-form-item>

      <el-form-item label="纬度" prop="latitude">
        <el-input v-model.number="basicInfoForm.latitude" type="text" placeholder="小数点后6位" style="width:400px;"></el-input>
      </el-form-item>
    </el-form>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'basicInfoFormComponent',
  props: ['basicInfoForm'],
  data() {
    return {
      formRules: {
        projectType: [{ required: true, trigger: 'change', type: 'string', message: '请选择' }],
        energyUsage: [{ required: true, trigger: 'change', type: 'string', message: '请选择' }],
        NEIType: [{ required: true, trigger: 'change', message: '请选择' }],
        environmentalEffectclassification: [{ required: true, trigger: 'change', message: '请选择' }],
        constructionCompanyName: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        nameAbbreviation: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        EAcompanyName: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请输入正确的格式' }],
        EAcompanyCertificatenumber: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请输入正确的格式' }],
        EAcompanyTelephone: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请输入正确的格式', pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/ }],
        EAcompanyAddress: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请输入正确的格式' }],
        address: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        postalCode: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式', pattern: /^[1-9]\d{5}(?!\d)$/ }],
        corporateName: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        corporateId: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式', pattern: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/ }],
        constructionScale: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        societyCreditcode: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        businessRange: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        contacts: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        telephone: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式', pattern: /^1\d{10}$/ }],
        totalInvestment: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        environmentalProtectionInvestment: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        floorSpace: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        managementSpace: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        nonAccommodationNum: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        accommodationNum: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        dinningNum: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        dayWorkTime: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        yearWorkTime: [{ required: true, whitespace: true, trigger: 'blur', type: 'integer', message: '请输入正确的格式' }],
        investmentTime: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        annualPowerConsumption: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        annualLeftover: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        east: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        south: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        west: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        north: [{ required: true, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        longtitude: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }],
        latitude: [{ required: true, whitespace: true, trigger: 'blur', type: 'number', message: '请输入正确的格式' }]
      },
      NEITypeOptions: [{
        value: '农副食品', label: '农副食品',
        children: [
          { value: '131 谷物磨制', label: '131 谷物磨制' },
          { value: '132 饲料加工', label: '132 饲料加工' },
          { value: '133 植物油加工', label: '133 植物油加工' },
          { value: '134 制糖业', label: '134 制糖业' },
          { value: '135 屠宰及肉类加工', label: '135 屠宰及肉类加工' },
          { value: '136 水产品加工', label: '136 水产品加工' },
          { value: '137 蔬菜、菌类、水果和坚果加工', label: '137 蔬菜、菌类、水果和坚果加工' },
          { value: '139 其他农副食品加工', label: '139 其他农副食品加工' }
        ] },
      { value: '食品制造业', label: '食品制造业',
        children: [
          { value: '141 焙烤食品制造', label: '141 焙烤食品制造' },
          { value: '142 糖果、巧克力及蜜饯制造', label: '142 糖果、巧克力及蜜饯制造' },
          { value: '143 方便食品制造', label: '143 方便食品制造' },
          { value: '144 乳制品制造', label: '144 乳制品制造' },
          { value: '145 罐头食品制造', label: '145 罐头食品制造' },
          { value: '146 调味品、发酵制品制造', label: '146 调味品、发酵制品制造' },
          { value: '149 其他食品制造', label: '149 其他食品制造' }
        ] },
      { value: '酒、饮料和精制茶制造业', label: '酒、饮料和精制茶制造业',
        children: [
          { value: '151 酒的制造', label: '151 酒的制造' },
          { value: '152 饮料制造', label: '152 饮料制造' }
        ] },
      { value: '烟草制品业', label: '烟草制品业',
        children: [
          { value: '1610 烟叶复烤', label: '1610 烟叶复烤' },
          { value: '1620 卷烟制造', label: '1620 卷烟制造' },
          { value: '1690 其他烟草制品制造', label: '1690 其他烟草制品制造' }
        ] },
      { value: '纺织业', label: '纺织业',
        children: [
          { value: '171 棉纺织及印染精加工', label: '171 棉纺织及印染精加工' },
          { value: '172 毛纺织及染整精加工', label: '172 毛纺织及染整精加工' },
          { value: '173 麻纺织及染整精加工', label: '173 麻纺织及染整精加工' },
          { value: '174 丝绢纺织及印染精加工', label: '174 丝绢纺织及印染精加工' },
          { value: '175 化纤织造及印染精加工', label: '175 化纤织造及印染精加工' },
          { value: '176 针织或钩针编织物及其制品制造', label: '176 针织或钩针编织物及其制品制造' },
          { value: '177 家用纺织制成品制造', label: '177 家用纺织制成品制造' },
          { value: '178 产业用纺织制成品制造', label: '178 产业用纺织制成品制造' }
        ] },
      { value: '纺织服装、服饰业', label: '纺织服装、服饰业',
        children: [
          { value: '181 机织服装制造', label: '181 机织服装制造' },
          { value: '182 针织或钩针编织服装制造', label: '182 针织或钩针编织服装制造' },
          { value: '1830 服饰制造', label: '1830 服饰制造' }
        ] },
      { value: '皮革、毛皮、羽毛及其制品和制鞋业', label: '皮革、毛皮、羽毛及其制品和制鞋业',
        children: [
          { value: '1910 皮革鞣制加工', label: '1910 皮革鞣制加工' },
          { value: '192 皮革制品制造', label: '192 皮革制品制造' },
          { value: '193 毛皮鞣制及制品加工', label: '193 毛皮鞣制及制品加工' },
          { value: '194 羽毛（绒）加工及制品制造', label: '194 羽毛（绒）加工及制品制造' },
          { value: '195 制鞋业', label: '195 制鞋业' }
        ] },
      { value: '木材加工和木、竹、藤、棕、草制品业', label: '木材加工和木、竹、藤、棕、草制品业',
        children: [
          { value: '201 木材加工', label: '201 木材加工' },
          { value: '202 人造板制造', label: '202 人造板制造' },
          { value: '203 木质制品制造', label: '203 木质制品制造' },
          { value: '204 竹、藤、棕、草等制品制造', label: '204 竹、藤、棕、草等制品制造' }
        ] },
      { value: '家具制造业', label: '家具制造业',
        children: [
          { value: '2110 木质家具制造', label: '2110 木质家具制造' },
          { value: '2120 竹、藤家具制造', label: '2120 竹、藤家具制造' },
          { value: '2130 金属家具制造', label: '2130 金属家具制造' },
          { value: '2140 塑料家具制造', label: '2140 塑料家具制造' },
          { value: '2190 其他家具制造', label: '2190 其他家具制造' }
        ] },
      { value: '造纸和纸制品业 ', label: '造纸和纸制品业 ',
        children: [
          { value: '221 纸浆制造', label: '221 纸浆制造' },
          { value: '222 造纸', label: '222 造纸' },
          { value: '223 纸制品制造', label: '223 纸制品制造' }
        ] },
      { value: '印刷和记录媒介复制业', label: '印刷和记录媒介复制业',
        children: [
          { value: '231 印刷', label: '231 印刷' },
          { value: '2320 装订及印刷相关服务', label: '2320 装订及印刷相关服务' },
          { value: '2330 记录媒介复制', label: '2330 记录媒介复制' }
        ] },
      { value: '文教、工美、体育和娱乐用品制造业', label: '文教、工美、体育和娱乐用品制造业',
        children: [
          { value: '241 文教办公用品制造', label: '241 文教办公用品制造' },
          { value: '242 乐器制造', label: '242 乐器制造' },
          { value: '243 工艺美术及礼仪用品制造', label: '243 工艺美术及礼仪用品制造' },
          { value: '244 体育用品制造', label: '244 体育用品制造' },
          { value: '245 玩具制造', label: '245 玩具制造' },
          { value: '246 游艺器材及娱乐用品制造', label: '246 游艺器材及娱乐用品制造' }
        ] },
      { value: '石油、煤炭及其他燃料加工业', label: '石油、煤炭及其他燃料加工业',
        children: [
          { value: '251 精炼石油产品制造', label: '251 精炼石油产品制造' },
          { value: '252 煤炭加工', label: '252 煤炭加工' },
          { value: '2530 核燃料加工', label: '2530 核燃料加工' },
          { value: '254 生物质燃料加工', label: '254 生物质燃料加工' }
        ] },
      { value: '化学原料和化学制品制造业', label: '化学原料和化学制品制造业',
        children: [
          { value: '261 基础化学原料制造', label: '261 基础化学原料制造' },
          { value: '262 肥料制造', label: '262 肥料制造' },
          { value: '263 农药制造', label: '263 农药制造' },
          { value: '264 涂料、油墨、颜料及类似产品制造', label: '264 涂料、油墨、颜料及类似产品制造' },
          { value: '265 合成材料制造', label: '265 合成材料制造' },
          { value: '266 专用化学产品制造', label: '266 专用化学产品制造' },
          { value: '267 炸药、火工及焰火产品制造', label: '267 炸药、火工及焰火产品制造' },
          { value: '268 日用化学产品制造', label: '268 日用化学产品制造' }
        ] },
      { value: '医药制造业', label: '医药制造业',
        children: [
          { value: '2710 化学药品原料药制造', label: '2710 化学药品原料药制造' },
          { value: '2720 化学药品制剂制造', label: '2720 化学药品制剂制造' },
          { value: '2730 中药饮片加工', label: '2730 中药饮片加工' },
          { value: '2740 中成药生产', label: '2740 中成药生产' },
          { value: '2750 兽用药品制造', label: '2750 兽用药品制造' },
          { value: '276 生物药品制品制造', label: '276 生物药品制品制造' },
          { value: '2770 卫生材料及医药用品制造', label: '2770 卫生材料及医药用品制造' },
          { value: '2780 药用辅料及包装材料', label: '2780 药用辅料及包装材料' }
        ] },
      { value: '化学纤维制造业', label: '化学纤维制造业',
        children: [
          { value: '281 纤维素纤维原料及纤维制造', label: '281 纤维素纤维原料及纤维制造' },
          { value: '282 合成纤维制造', label: '282 合成纤维制造' },
          { value: '283 生物基材料制造', label: '283 生物基材料制造' }
        ] },
      { value: '橡胶和塑料制品业', label: '橡胶和塑料制品业',
        children: [
          { value: '291 橡胶制品业', label: '291 橡胶制品业' },
          { value: '292 塑料制品业', label: '292 塑料制品业' },
          { value: '2921 塑料薄膜制造', label: '2921 塑料薄膜制造' },
          { value: '2922 塑料板、管、型材制造', label: '2922 塑料板、管、型材制造' },
          { value: '2923 塑料丝、绳及编织品制造', label: '2923 塑料丝、绳及编织品制造' },
          { value: '2924 泡沫塑料制造', label: '2924 泡沫塑料制造' },
          { value: '2925 塑料人造革、合成革制造', label: '2925 塑料人造革、合成革制造' },
          { value: '2926 塑料包装箱及容器制造', label: '2926 塑料包装箱及容器制造' },
          { value: '2927 日用塑料制品制造', label: '2927 日用塑料制品制造' },
          { value: '2928 人造草坪制造', label: '2928 人造草坪制造' },
          { value: '2929 塑料零件及其他塑料制品制造', label: '2929 塑料零件及其他塑料制品制造' }
        ] },
      { value: '非金属矿物制品业', label: '非金属矿物制品业',
        children: [
          { value: '301 水泥、石灰和石膏制造', label: '301 水泥、石灰和石膏制造' },
          { value: '302 石膏、水泥制品及类似制品制造', label: '302 石膏、水泥制品及类似制品制造' },
          { value: '303 砖瓦、石材等建筑材料制造', label: '303 砖瓦、石材等建筑材料制造' },
          { value: '304 玻璃制造', label: '304 玻璃制造' },
          { value: '305 玻璃制品制造', label: '305 玻璃制品制造' },
          { value: '306 玻璃纤维和玻璃纤维增强塑料制品制造', label: '306 玻璃纤维和玻璃纤维增强塑料制品制造' },
          { value: '307 陶瓷制品制造', label: '307 陶瓷制品制造' },
          { value: '308 耐火材料制品制造', label: '308 耐火材料制品制造' },
          { value: '309 石墨及其他非金属矿物制品制造', label: '309 石墨及其他非金属矿物制品制造' }
        ] },
      { value: '黑色金属冶炼和压延加工业', label: '黑色金属冶炼和压延加工业',
        children: [
          { value: '3110 炼铁', label: '3110 炼铁' },
          { value: '3120 炼钢', label: '3120 炼钢' },
          { value: '3130 钢压延加工', label: '3130 钢压延加工' },
          { value: '3140 铁合金冶炼', label: '3140 铁合金冶炼' }
        ] },
      { value: '有色金属冶炼和压延加工业', label: '有色金属冶炼和压延加工业',
        children: [
          { value: '321 常用有色金属冶炼', label: '321 常用有色金属冶炼' },
          { value: '322 贵金属冶炼', label: '322 贵金属冶炼' },
          { value: '323 稀有稀土金属冶炼', label: '323 稀有稀土金属冶炼' },
          { value: '3240 有色金属合金制造', label: '3240 有色金属合金制造' },
          { value: '325 有色金属压延加工', label: '325 有色金属压延加工' }
        ] },
      { value: '金属制品业', label: '金属制品业',
        children: [
          { value: '331 结构性金属制品制造', label: '331 结构性金属制品制造' },
          { value: '332 金属工具制造', label: '332 金属工具制造' },
          { value: '333 集装箱及金属包装容器制造', label: '333 集装箱及金属包装容器制造' },
          { value: '3340 金属丝绳及其制品制造', label: '3340 金属丝绳及其制品制造' },
          { value: '335 建筑、安全用金属制品制造', label: '335 建筑、安全用金属制品制造' },
          { value: '3360 金属表面处理及热处理加工', label: '3360 金属表面处理及热处理加工' },
          { value: '337 搪瓷制品制造', label: '337 搪瓷制品制造' },
          { value: '338 金属制日用品制造', label: '338 金属制日用品制造' },
          { value: '339 铸造及其他金属制品制造', label: '339 铸造及其他金属制品制造' }
        ] },
      { value: '通用设备制造业', label: '通用设备制造业',
        children: [
          { value: '341 锅炉及原动设备制造', label: '341 结构性金属制品制造' },
          { value: '342 金属加工机械制造', label: '342 金属加工机械制造' },
          { value: '343 物料搬运设备制造', label: '343 物料搬运设备制造' },
          { value: '344 泵、阀门、压缩机及类似机械制造', label: '344 泵、阀门、压缩机及类似机械制造' },
          { value: '345 轴承、齿轮和传动部件制造', label: '345 轴承、齿轮和传动部件制造' },
          { value: '346 烘炉、风机、包装等设备制造', label: '346 烘炉、风机、包装等设备制造' },
          { value: '347 文化、办公用机械制造', label: '347 文化、办公用机械制造' },
          { value: '348 通用零部件制造', label: '348 通用零部件制造' },
          { value: '349 其他通用设备制造业', label: '349 其他通用设备制造业' }
        ] },
      { value: '专用设备制造业', label: '专用设备制造业',
        children: [
          { value: '351 采矿、冶金、建筑专用设备制造', label: '351 采矿、冶金、建筑专用设备制造' },
          { value: '352 化工、木材、非金属加工专用设备制造', label: '352 化工、木材、非金属加工专用设备制造' },
          { value: '353 食品、饮料、烟草及饲料生产专用设备制造', label: '353 食品、饮料、烟草及饲料生产专用设备制造' },
          { value: '354 印刷、制药、日化及日用品生产专用设备制造', label: '354 印刷、制药、日化及日用品生产专用设备制造' },
          { value: '355 纺织、服装和皮革加工专用设备制造', label: '355 纺织、服装和皮革加工专用设备制造' },
          { value: '356 电子和电工机械专用设备制造', label: '356 电子和电工机械专用设备制造' },
          { value: '357 农、林、牧、渔专用机械制造', label: '357 农、林、牧、渔专用机械制造' },
          { value: '358 医疗仪器设备及器械制造', label: '358 医疗仪器设备及器械制造' },
          { value: '359 环保、邮政、社会公共服务及其他专用设备制造', label: '359 环保、邮政、社会公共服务及其他专用设备制造' }
        ] },
      { value: '汽车制造业', label: '汽车制造业',
        children: [
          { value: '361 汽车整车制造', label: '361 汽车整车制造' },
          { value: '3620 汽车用发动机制造', label: '3620 汽车用发动机制造' },
          { value: '3630 改装汽车制造', label: '3630 改装汽车制造' },
          { value: '3640 低速汽车制造', label: '3640 低速汽车制造' },
          { value: '3650 电车制造', label: '3650 电车制造' },
          { value: '3660 汽车车身、挂车制造', label: '3660 汽车车身、挂车制造' },
          { value: '3670 汽车零部件及配件制造', label: '3670 汽车零部件及配件制造' }
        ] },
      { value: '铁路、船舶、航空航天和其他运输设备制造业', label: '铁路、船舶、航空航天和其他运输设备制造业',
        children: [
          { value: '371 铁路运输设备制造', label: '371 铁路运输设备制造' },
          { value: '3720 城市轨道交通设备制造', label: '3720 城市轨道交通设备制造' },
          { value: '373 船舶及相关装置制造', label: '373 船舶及相关装置制造' },
          { value: '374 航空、航天器及设备制造', label: '374 航空、航天器及设备制造' },
          { value: '375 摩托车制造', label: '375 摩托车制造' },
          { value: '376 自行车和残疾人座车制造', label: '376 自行车和残疾人座车制造' },
          { value: '3770 助动车制造', label: '3770 助动车制造' },
          { value: '3780 非公路休闲车及零配件制造', label: '3780 非公路休闲车及零配件制造' },
          { value: '379 潜水救捞及其他未列明运输设备制造', label: '379 潜水救捞及其他未列明运输设备制造' }
        ] },
      { value: '电气机械和器材制造业', label: '电气机械和器材制造业',
        children: [
          { value: '381 电机制造', label: '381 电机制造' },
          { value: '382 输配电及控制设备制造', label: '382 输配电及控制设备制造' },
          { value: '383 电线、电缆、光缆及电工器材制造', label: '383 电线、电缆、光缆及电工器材制造' },
          { value: '384 电池制造', label: '384 电池制造' },
          { value: '385 家用电力器具制造', label: '385 家用电力器具制造' },
          { value: '386 非电力家用器具制造', label: '386 非电力家用器具制造' },
          { value: '387 照明器具制造', label: '387 照明器具制造' },
          { value: '389 其他电气机械及器材制造', label: '389 其他电气机械及器材制造' }
        ] },
      { value: '计算机、通信和其他电子设备制造业', label: '计算机、通信和其他电子设备制造业',
        children: [
          { value: '391 计算机制造', label: '391 计算机制造' },
          { value: '392 通信设备制造', label: '392 通信设备制造' },
          { value: '393 广播电视设备制造', label: '393 广播电视设备制造' },
          { value: '3940 雷达及配套设备制造', label: '3940 雷达及配套设备制造' },
          { value: '395 非专业视听设备制造', label: '395 非专业视听设备制造' },
          { value: '396 智能消费设备制造', label: '396 智能消费设备制造' },
          { value: '397 电子器件制造', label: '397 电子器件制造' },
          { value: '398 电子元件及电子专用材料制造', label: '398 电子元件及电子专用材料制造' },
          { value: '3990 其他电子设备制造', label: '3990 其他电子设备制造' }
        ] },
      { value: '仪器仪表制造业', label: '仪器仪表制造业',
        children: [
          { value: '401 通用仪器仪表制造', label: '401 通用仪器仪表制造' },
          { value: '402 专用仪器仪表制造', label: '402 专用仪器仪表制造' },
          { value: '4030 钟表与计时仪器制造', label: '4030 钟表与计时仪器制造' },
          { value: '4040 光学仪器制造', label: '4040 光学仪器制造' },
          { value: '4050 衡器制造', label: '4050 衡器制造' },
          { value: '4090 其他仪器仪表制造业', label: '4090 其他仪器仪表制造业' }
        ] },
      { value: '其他制造业', label: '其他制造业',
        children: [
          { value: '411 日用杂品制造', label: '411 日用杂品制造' },
          { value: '4020 核辐射加工', label: '4120 核辐射加工' },
          { value: '4190 其他未列明制造业', label: '4190 其他未列明制造业' }
        ] },
      { value: '废弃资源综合利用业', label: '废弃资源综合利用业',
        children: [
          { value: '4210 金属废料和碎屑加工处理', label: '4210 金属废料和碎屑加工处理' },
          { value: '4220 非金属废料和碎屑加工处理', label: '4220 非金属废料和碎屑加工处理' }
        ] },
      { value: '金属制品、机械和设备修理业', label: '金属制品、机械和设备修理业',
        children: [
          { value: '4310 金属制品修理', label: '4310 金属制品修理' },
          { value: '4320 通用设备修理', label: '4320 通用设备修理' },
          { value: '4330 专用设备修理', label: '4330 专用设备修理' },
          { value: '434 铁路、船舶、航空航天等运输设备修理', label: '434 铁路、船舶、航空航天等运输设备修理' },
          { value: '4350 电气设备修理', label: '4350 电气设备修理' },
          { value: '4360 仪器仪表修理', label: '4360 仪器仪表修理' },
          { value: '4390 其他机械和设备修理业', label: '4390 其他机械和设备修理业' }
        ] },
      { value: '电力、热力生产和供应业', label: '电力、热力生产和供应业',
        children: [
          { value: '441 电力生产', label: '441 电力生产' },
          { value: '4420 电力供应', label: '4420 电力供应' },
          { value: '4430 热力生产和供应', label: '4430 热力生产和供应' }
        ] },
      { value: '燃气生产和供应业', label: '燃气生产和供应业',
        children: [
          { value: '451 燃气生产和供应业', label: '451 燃气生产和供应业' },
          { value: '4520 生物质燃气生产和供应业', label: '4520 生物质燃气生产和供应业' }
        ] },
      { value: '水的生产和供应业', label: '水的生产和供应业',
        children: [
          { value: '4610 自来水生产和供应', label: '4610 自来水生产和供应' },
          { value: '4620 污水处理及其再生利用', label: '4620 污水处理及其再生利用' },
          { value: '4630 海水淡化处理', label: '4630 海水淡化处理' },
          { value: '4690 其他水的处理、利用与分配', label: '4690 其他水的处理、利用与分配' }
        ] },
      { value: '装卸搬运和仓储业', label: '装卸搬运和仓储业',
        children: [
          { value: '591 装卸搬运', label: '591 装卸搬运' },
          { value: '5920 通用仓储', label: '5920 通用仓储' },
          { value: '5930 低温仓储', label: '5930 低温仓储' },
          { value: '594 危险品仓储', label: '594 危险品仓储' },
          { value: '595 谷物、棉花等农产品仓储', label: '595 谷物、棉花等农产品仓储' },
          { value: '5960 中药材仓储', label: '5960 中药材仓储' },
          { value: '5990 其他仓储业', label: '5990 其他仓储业' }
        ] },
      { value: '餐饮业', label: '餐饮业',
        children: [
          { value: '6210 正餐服务', label: '6210 正餐服务' },
          { value: '6220 快餐服务', label: '6220 快餐服务' },
          { value: '623 饮料及冷饮服务', label: '623 饮料及冷饮服务' },
          { value: '624 餐饮配送及外卖送餐服务', label: '624 餐饮配送及外卖送餐服务' },
          { value: '629 其他餐饮业', label: '629 其他餐饮业' }
        ] },
      { value: '房地产业', label: '房地产业',
        children: [
          { value: '7010 房地产开发经营', label: '7010 房地产开发经营' },
          { value: '7020 物业管理', label: '7020 物业管理' },
          { value: '7030 房地产中介服务', label: '7030 房地产中介服务' },
          { value: '7040 房地产租赁经营', label: '7040 房地产租赁经营' },
          { value: '7090 其他房地产业', label: '7090 其他房地产业' }
        ] },
      { value: '机动车、电子产品和日用产品修理业', label: '机动车、电子产品和日用产品修理业',
        children: [
          { value: '811 汽车、摩托车等修理与维护', label: '811 汽车、摩托车等修理与维护' },
          { value: '812 计算机和办公设备维修', label: '812 计算机和办公设备维修' },
          { value: '813 家用电器修理', label: '813 家用电器修理' },
          { value: '819 其他日用产品修理业', label: '819 其他日用产品修理业' }
        ] },
      { value: '卫生', label: '卫生',
        children: [
          { value: '841 医院', label: '841 医院' },
          { value: '842 基层医疗卫生服务', label: '842 基层医疗卫生服务' },
          { value: '843 专业公共卫生服务', label: '843 专业公共卫生服务' },
          { value: '849 其他卫生活动', label: '849 其他卫生活动' }
        ] },
      { value: '娱乐业', label: '娱乐业',
        children: [
          { value: '901 室内娱乐活动', label: '901 室内娱乐活动' },
          { value: '9020 游乐园', label: '9020 游乐园' },
          { value: '9030 休闲观光活动', label: '9030 休闲观光活动' },
          { value: '904 彩票活动', label: '904 彩票活动' },
          { value: '905 文化体育娱乐活动与经纪代理服务 文化活动服务', label: '905 文化体育娱乐活动与经纪代理服务 文化活动服务' },
          { value: '9090 其他娱乐业', label: '9090 其他娱乐业' }
        ] }
      ],

      environmentalEffectclassificationOptions: [{
        value: '畜牧业', label: '畜牧业',
        children: [{ value: '畜禽养殖场、养殖小区', label: '畜禽养殖场、养殖小区' }
        ] },
      { value: '农副食品加工业', label: '农副食品加工业',
        children: [
          { value: '粮食及饲料加工-其他', label: '粮食及饲料加工-其他' },
          { value: '植物油加工-除单纯分工和调和外的', label: '植物油加工-除单纯分工和调和外的' },
          { value: '制糖、糖制品加工-其他', label: '制糖、糖制品加工-其他' },
          { value: '屠宰-其他', label: '屠宰-其他' },
          { value: '肉禽类加工-年加工两万吨及以上', label: '肉禽类加工-年加工两万吨及以上' },
          { value: '水产品加工-鱼油提取及制品制造；年加工十万吨及以上的，涉及环境敏感区的', label: '水产品加工-鱼油提取及制品制造；年加工十万吨及以上的，涉及环境敏感区的' },
          { value: '淀粉、淀粉糖-其他（单纯分装除外）', label: '淀粉、淀粉糖-其他（单纯分装除外）' },
          { value: '豆制品制造-除手工制作和单纯分装外的', label: '豆制品制造-除手工制作和单纯分装外的' },
          { value: '蛋品加工', label: '蛋品加工' }
        ] },
      { value: '食品制造业', label: '食品制造业',
        children: [
          { value: '方便食品制造-其他（手工制作和单纯分装除外）', label: '方便食品制造-其他（手工制作和单纯分装除外）' },
          { value: '乳制品制造-其他', label: '乳制品制造-其他' },
          { value: '调味品、发酵制品制造-其他（单纯分装除外）', label: '调味品、发酵制品制造-其他（单纯分装除外）' },
          { value: '盐加工-全部', label: '盐加工-全部' },
          { value: '饲料添加剂、食品添加剂制造-单纯混合或分装的', label: '饲料添加剂、食品添加剂制造-单纯混合或分装的' },
          { value: '营养食品、保健食品、冷冻饮品、食用冰制造及其他食品制造-其他（手工制作和单纯分装除外）',
            label: '营养食品、保健食品、冷冻饮品、食用冰制造及其他食品制造-其他（手工制作和单纯分装除外）' }
        ] },
      { value: '酒、饮料制造业', label: '酒、饮料制造业',
        children: [
          { value: '酒精饮料及酒类制造-其他', label: '酒精饮料及酒类制造-其他' },
          { value: '果菜汁类及其他软饮料制造-其他', label: '果菜汁类及其他软饮料制造-其他' }
        ] },
      { value: '烟草制造业', label: '烟草制造业',
        children: [
          { value: '卷烟-其他', label: '卷烟-其他' }
        ] },
      { value: '纺织业', label: '纺织业',
        children: [
          { value: '纺织品制造-其他（编织物及其制品制造除外）', label: '纺织品制造-其他（编织物及其制品制造除外）' }
        ] },
      { value: '纺织服装、服饰业', label: '纺织服装、服饰业',
        children: [
          { value: '服装制造-新建年加工100万件及以上', label: '服装制造-新建年加工100万件及以上' }
        ] },
      { value: '皮革、毛皮、羽毛及其制品和制鞋业', label: '皮革、毛皮、羽毛及其制品和制鞋业',
        children: [
          { value: '皮革、毛皮、羽毛（绒）制品-其他', label: '皮革、毛皮、羽毛（绒）制品-其他' },
          { value: '制鞋业-使用有机溶剂的', label: '制鞋业-使用有机溶剂的' }
        ] },
      { value: '木材加工和木、竹、藤、棕、草制品业', label: '木材加工和木、竹、藤、棕、草制品业',
        children: [
          { value: '锯材、木片加工、木制品制造-其他', label: '锯材、木片加工、木制品制造-其他' },
          { value: '人造板制造-其他', label: '人造板制造-其他' }
        ] },
      { value: '家具制造业', label: '家具制造业',
        children: [
          { value: '家具制造-其他', label: '家具制造-其他' }
        ] },
      { value: '造纸和纸制品业', label: '造纸和纸制品业',
        children: [
          { value: '纸浆、溶解浆、纤维浆等制造；造纸（含废纸造纸）', label: '纸浆、溶解浆、纤维浆等制造；造纸（含废纸造纸）' }
        ] },
      { value: '印刷和记录媒介复制业', label: '印刷和记录媒介复制业',
        children: [
          { value: '印刷厂；磁材料制品-全部', label: '印刷厂；磁材料制品-全部' }
        ] },
      { value: '文教、工美、体育和娱乐用品制造业', label: '文教、工美、体育和娱乐用品制造业',
        children: [
          { value: '文教、体育、娱乐用品制造-全部', label: '文教、体育、娱乐用品制造-全部' },
          { value: '工艺品制造-有喷漆工艺且年用油性漆量（含稀释剂）10吨以下的，或使用水性漆的；有机加工的',
            label: '工艺品制造-有喷漆工艺且年用油性漆量（含稀释剂）10吨以下的，或使用水性漆的；有机加工的' }
        ] },
      { value: '化学原料和化学制品制造业', label: '化学原料和化学制品制造业',
        children: [
          { value: '基本化学原料制造；农药制造；涂料、染料、颜料、油墨及其类似产品制造；合成材料制造；专用化学品制造；炸药、火工及焰火产品制造；水处理剂等制造-单纯混合或分装的',
            label: '基本化学原料制造；农药制造；涂料、染料、颜料、油墨及其类似产品制造；合成材料制造；专用化学品制造；炸药、火工及焰火产品制造；水处理剂等制造-单纯混合或分装的' },
          { value: '肥料制造-其他', label: '肥料制造-其他' },
          { value: '半导体材料', label: '半导体材料' },
          { value: '日用化学品制造-单纯混合或分装的', label: '日用化学品制造-单纯混合或分装的' }
        ] },
      { value: '医药制造业', label: '医药制造业',
        children: [
          { value: '化学药品制造；生物、生化制品制造', label: '化学药品制造；生物、生化制品制造' },
          { value: '单纯药品分装、复配-全部', label: '单纯药品分装、复配-全部' },
          { value: '中成药制造、中药饮片加工-其他', label: '中成药制造、中药饮片加工-其他' },
          { value: '卫生材料及医药用品制造-全部', label: '卫生材料及医药用品制造-全部' }
        ] },
      { value: '化学纤维制造业', label: '化学纤维制造业',
        children: [
          { value: '化学纤维制造-单纯纺丝', label: '化学纤维制造-单纯纺丝' },
          { value: '生物质纤维素乙醇生产', label: '生物质纤维素乙醇生产' }
        ] },
      { value: '橡胶和塑料制品业', label: '橡胶和塑料制品业',
        children: [
          { value: '轮胎制造、再生橡胶制造、橡胶加工、橡胶制品制造及翻新制造-其他', label: '轮胎制造、再生橡胶制造、橡胶加工、橡胶制品制造及翻新制造-其他' },
          { value: '塑料制品制造-其他', label: '塑料制品制造-其他' }
        ] },
      { value: '非金属矿物制品业', label: '非金属矿物制品业',
        children: [
          { value: '水泥制造', label: '水泥制造' },
          { value: '水泥粉磨站-全部', label: '水泥粉磨站-全部' },
          { value: '砼结构构件制造、商品混凝土加工-全部', label: '砼结构构件制造、商品混凝土加工-全部' },
          { value: '石灰和石膏制造、石材加工、人造石制造、砖瓦制造-全部', label: '石灰和石膏制造、石材加工、人造石制造、砖瓦制造-全部' },
          { value: '玻璃及玻璃制品-其他玻璃制造；以煤、油、天然气为燃料加热的玻璃制品制造', label: '玻璃及玻璃制品-其他玻璃制造；以煤、油、天然气为燃料加热的玻璃制品制造' },
          { value: '玻璃纤维及玻璃纤维增强塑料制品-全部', label: '玻璃纤维及玻璃纤维增强塑料制品-全部' },
          { value: '陶瓷制品-其他', label: '陶瓷制品-其他' },
          { value: '耐火材料及其制品-其他', label: '耐火材料及其制品-其他' },
          { value: '石墨及其他非金属矿物制品-其他', label: '石墨及其他非金属矿物制品-其他' },
          { value: '防水建筑材料制造、沥青搅拌站、干粉砂浆搅拌站-全部', label: '防水建筑材料制造、沥青搅拌站、干粉砂浆搅拌站-全部' }
        ] },
      { value: '黑色金属冶炼和压延加工业', label: '黑色金属冶炼和压延加工业',
        children: [
          { value: '炼铁、球团、烧结', label: '炼铁、球团、烧结' },
          { value: '炼钢', label: '炼钢' },
          { value: '黑色金属铸造-其他', label: '黑色金属铸造-其他' },
          { value: '压延加工-其他', label: '压延加工-其他' },
          { value: '铁合金制造；锰、铬冶炼', label: '铁合金制造；锰、铬冶炼' }
        ] },
      { value: '有色金属冶炼和压延加工业', label: '有色金属冶炼和压延加工业',
        children: [
          { value: '有色金属冶炼（含再生有色金属冶炼）', label: '有色金属冶炼（含再生有色金属冶炼）' },
          { value: '有色金属合金制造', label: '有色金属合金制造' },
          { value: '有色金属铸造-其他', label: '有色金属铸造-其他' },
          { value: '压延加工-全部', label: '压延加工-全部' }
        ] },
      { value: '金属制品业', label: '金属制品业',
        children: [
          { value: '金属制品加工制造-其他（仅切割组装除外）', label: '金属制品加工制造-其他（仅切割组装除外）' },
          { value: '金属制品表面处理及热处理加工-其他', label: '金属制品表面处理及热处理加工-其他' }
        ] },
      { value: '通用设备制造业', label: '通用设备制造业',
        children: [
          { value: '通用设备制造及维修-其他（仅组装的除外）', label: '通用设备制造及维修-其他（仅组装的除外）' }
        ] },
      { value: '专用设备制造业', label: '专用设备制造业',
        children: [
          { value: '专用设备制造及维修-其他（仅组装的除外）', label: '专用设备制造及维修-其他（仅组装的除外）' }
        ] },
      { value: '汽车制造业', label: '汽车制造业',
        children: [
          { value: '汽车制造-其他', label: '汽车制造-其他' }
        ] },
      { value: '电气机械和器材制造业', label: '电气机械和器材制造业',
        children: [
          { value: '电气机械及器材制造-其他（仅组装的除外）', label: '电气机械及器材制造-其他（仅组装的除外）' },
          { value: '太阳能电池片-其他', label: '太阳能电池片-其他' }
        ] },
      { value: '计算机、通信和其他电子设备制造业', label: '计算机、通信和其他电子设备制造业',
        children: [
          { value: '计算机制造-有分割、焊接、酸洗或有机溶剂清洗工艺的', label: '计算机制造-有分割、焊接、酸洗或有机溶剂清洗工艺的' },
          { value: '电子真空器件、集成电路、半导体分立器件制造、光电子器件、其他电子器件制造等-有分割、焊接、酸洗或有机溶剂清洗工艺的',
            label: '电子真空器件、集成电路、半导体分立器件制造、光电子器件、其他电子器件制造等-有分割、焊接、酸洗或有机溶剂清洗工艺的' },
          { value: '印刷电路板、电子元件及组件制造-有分割、焊接、酸洗或有机溶剂清洗工艺的', label: '印刷电路板、电子元件及组件制造-有分割、焊接、酸洗或有机溶剂清洗工艺的' },
          { value: '电子陶瓷、有机薄膜、荧光粉、贵金属粉等电子专用材料', label: '电子陶瓷、有机薄膜、荧光粉、贵金属粉等电子专用材料' },
          { value: '电子配件组装-有分割、焊接（手工焊接除外）、酸洗或有机溶剂清洗工艺的', label: '电子配件组装-有分割、焊接（手工焊接除外）、酸洗或有机溶剂清洗工艺的' }
        ] },
      { value: '仪器仪表制造业', label: '仪器仪表制造业',
        children: [
          { value: '仪器仪表制造-其他（仅组装的除外）', label: '仪器仪表制造-其他（仅组装的除外）' }
        ] },
      { value: '废弃资源综合利用业', label: '废弃资源综合利用业',
        children: [
          { value: '废旧资源（含生物质）加工、再生利用-其他', label: '废旧资源（含生物质）加工、再生利用-其他' }
        ] },
      { value: '电力、热力生产和供应业', label: '电力、热力生产和供应业',
        children: [
          { value: '火力发电（含热电）-燃气发电', label: '火力发电（含热电）-燃气发电' },
          { value: '综合利用发电-单纯利用余热、余压、余气（含煤层气发电）', label: '综合利用发电-单纯利用余热、余压、余气（含煤层气发电）' },
          { value: '热力生产和供应工程-其他（电热锅炉除外）', label: '热力生产和供应工程-其他（电热锅炉除外）' }
        ] },
      { value: '环境治理业', label: '环境治理业',
        children: [
          { value: '脱硫、脱硝、除尘等工程-脱硫、脱硝', label: '脱硫、脱硝、除尘等工程-脱硫、脱硝' }
        ] },
      { value: '公共设施管理业', label: '公共设施管理业',
        children: [
          { value: '城镇生活垃圾转运站-全部', label: '城镇生活垃圾转运站-全部' }
        ] },
      { value: '房地产', label: '房地产',
        children: [
          { value: '房地产开发、宾馆、酒店、办公用房等-建筑面积5万平方米及以上；涉及环境敏感区的', label: '房地产开发、宾馆、酒店、办公用房等-建筑面积5万平方米及以上；涉及环境敏感区的' }
        ] },
      { value: '卫生', label: '卫生',
        children: [
          { value: '医院、专科防治院（所、站）、社区医疗、卫生院（所、站）、血站、急救中心、疗养院等其他卫生机构-其他（20张床位以下的，中医门诊除外）',
            label: '医院、专科防治院（所、站）、社区医疗、卫生院（所、站）、血站、急救中心、疗养院等其他卫生机构-其他（20张床位以下的，中医门诊除外）' },
          { value: '疾病预防控制中心-其他', label: '疾病预防控制中心-其他' }
        ] },
      { value: '社会事业与服务业', label: '社会事业与服务业',
        children: [
          { value: '学校、幼儿园、托儿所、福利院、养老院-建筑面积5万平方米及以上，有实验室的学校（P3、P4生物安全实验室除外）',
            label: '学校、幼儿园、托儿所、福利院、养老院-建筑面积5万平方米及以上，有实验室的学校（P3、P4生物安全实验室除外）' },
          { value: '餐饮、娱乐、洗浴场所', label: '餐饮、娱乐、洗浴场所' },
          { value: '公园-含动物园、植物园、主题公园-其他', label: '公园-含动物园、植物园、主题公园-其他' },
          { value: '加油、加气站-新建、扩建', label: '加油、加气站-新建、扩建' },
          { value: '洗车场-营业面积1000平方米及以上；涉及环境敏感区的', label: '洗车场-营业面积1000平方米及以上；涉及环境敏感区的' },
          { value: '汽车、摩托车维修场所-营业面积5000平方米及以上；涉及环境敏感区的', label: '汽车、摩托车维修场所-营业面积1000平方米及以上；涉及环境敏感区的' }
        ] }
      ]
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var companyName = this.companyName
      var results = queryString ? companyName.filter(this.createFilter(queryString)) : companyName
      cb(results)
    },
    createFilter(queryString) {
      return (companyName) => {
        return (companyName.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll() {
      return [
        { 'value': '广东森海环保顾问股份有限公司' },
        { 'value': '深圳市环新环保技术有限公司' },
        { 'value': '广东顺德环境科学研究院有限公司' }
      ]
    },
    handleSelect: function($event, item) {
      const allEAcompanyInfo = [
        { EAcompanyName: '广东森海环保顾问股份有限公司', EAcompanyInfo: ['国环评证乙字第2869号', '', '广州市天河区粤垦路607号力达广场A2栋1803室'] },
        { EAcompanyName: '深圳市环新环保技术有限公司', EAcompanyInfo: ['国环评证乙字第2872号', '0755-82913063', '深圳市福田区彩田路彩虹新都海鹰大厦26A'] },
        { EAcompanyName: '广东顺德环境科学研究院有限公司', EAcompanyInfo: ['国环评证乙字第2811号', '0757-82583173', '佛山市顺德区大良街道新城区兴业路2号'] }
      ]
      for (var val of allEAcompanyInfo) {
        if (this.basicInfoForm.EAcompanyName === val.EAcompanyName) {
          this.basicInfoForm.EAcompanyCertificatenumber = val.EAcompanyInfo[0]
          this.basicInfoForm.EAcompanyTelephone = val.EAcompanyInfo[1]
          this.basicInfoForm.EAcompanyAddress = val.EAcompanyInfo[2]
        }
      }
      console.log(item)
    }
  },
  mounted() {
    this.companyName = this.loadAll()
  }
}

</script>

