<template>
  <view class="container">
    <view class="header">
      <image class="logo" src="@/static/BIT.png" />
    </view>
    <image class="introduction" src="https://rvwew.space:8666/api/profile/demo/demo/video/introduction.jpg" />
    <!-- <view class="content">
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">功能介绍</view>
        </view>
        <view class="card-body">
          <view class="intro" v-for="item in introlist1" v-html="item"></view>
        </view>
      </view>
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">团队介绍</view>
        </view>
        <view class="card-body">
          <view class="intro" v-for="item in introlist2" v-html="item"></view>
        </view>
      </view>
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">未来展望</view>
        </view>
        <view class="card-body">
          <view class="intro" v-for="item in introlist3" v-html="item"></view>
        </view>
      </view>
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">当前业务 </view>
        </view>
        <view class="card-body">
          <view class="intro" v-for="item in introlist4" v-html="item"></view>
        </view>
      </view>
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">医院介绍</view>
        </view>
        <view class="card-body">
          <view class="intro">{{ intro }}</view>
        </view>
      </view>
      <view class="card">
        <view class="card-header">
          <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
          <view class="card-title">学校介绍</view>
        </view>
        <view class="card-body">
          <view class="intro">{{ insintro }}</view>
        </view>
      </view>
    </view> -->
    <!-- <view class="footer">
      <view class="copyright">Copyright © 2024</view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        hospitalName: '首都医科大学附属北京天坛医院',
        instituteName: '北京理工大学',
        contact: '010-59978585',
        address: '北京市丰台区南四环西路119号',
        intro: '首都医科大学附属北京天坛医院始建于1956年,是一座以临床神经科学发展为引领、综合学科全面发展的大型三级甲等综合医院,是国家神经疾病医学中心,中国神经疾病人群防治协作中心,国家药物、医疗器械临床试验机构,国家神经系统疾病临床医学研究中心,国家神经疾病医疗质量控制中心,国家医学中心(辅导类)创建单位,全国脑血管病防治研究办公室设在这里。',
        insintro: '北京理工大学1940年诞生于延安，是中国共产党创办的第一所理工科大学，是新中国成立以来国家历批次重点建设的高校，首批进入国家“211工程”和“985工程”，首批进入“世界一流大学”建设高校A类行列。毛泽东同志亲自题写校名，李富春、徐特立、李强等老一辈无产阶级革命家先后担任学校主要领导。学校现隶属于工业和信息化部，全体师生员工正对标国家“两个一百年”奋斗目标，全力朝着中国特色世界一流大学的建设目标迈进。',
        introlist1: [
          '1.	通过分析医学核磁共振（MRI）诊断描述，龙影大模型（RadGPT）快速生成诊断意见。', '2.	诊断涵盖多种疾病，现已能够生成超过百种的疾病诊断，诊断准确率超过95%。',
          '3.	正在学习更多影像诊断技能，如CT诊断、从图像生成诊断描述等。'
        ],
        introlist2: ['1.	由北京天坛医院放射科刘亚欧教授团队和北京理工大学叶初阳教授、张美慧教授团队联合打造。', '2.	团队成员为北京天坛医院放射科医师和北京理工大学研究生与本科生。'],
        introlist3: ['1.	希望助力缓解放射科医生短缺和工作负荷过重问题；', '2.	通过不断迭代更新，未来将进一步提高诊断的准确性和可靠性，为患者提供更优质的医疗服务；',
          '3.	致力于推广到更广泛的地区，让更多医疗条件尚不完善的地区患者，享受到精准医学影像诊断服务。', '4.	进一步增强与其他医疗系统的互联互通，探索更多应用场景，如医学教育、医学科研等。'
        ],
        introlist4: ['1.	基于龙影大模型而生的全球首个数字放射科医生“小君”现在正在天坛医院进行试运行，为放射科医师提供诊断建议撰写辅助服务。',
          '2.	积极探索与其他医疗机构合作，将“小君”推广应用到更多医院，缓解放射科医生短缺问题。', '3.	提升诊断效率和准确性，提高基层医疗机构的影像诊断水平，为患者提供更便捷、更优质的医疗服务。'
        ],
      };
    }
  };
</script>

<style>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100%;
    height: auto;

  }

  view {
    font-size: 14px;
    line-height: inherit;
  }

  .introduction {
    width: 750rpx;
    height: 5000rpx;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .header {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 146rpx;
    margin-left: 44rpx;
    margin-right: 44rpx;
    border-radius: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .logo {
    height: 138rpx;
    width: 635rpx;
  }

  .title {
    font-size: 20px;
    color: #fff;
  }

  .content {
    padding: 20px;
  }

  .card {
    margin-bottom: 20px;
    border-radius: 16px;
    background-color: #ffffff;
    padding-left: 16px;
    padding-right: 16x;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .card-header {
    padding: 10px;
  }

  .info-title-image {
    height: 30rpx;
    width: 15rpx;
    margin-right: 25rpx;
  }

  .card-title {
    display: inline-block;
    font-size: medium;
    letter-spacing: 1px;
    font-weight: bold;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  .card-body {
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    padding-top: 5px;
    border-top: 0.5px solid #dddddd;
  }

  .item {
    margin-bottom: 10px;
  }

  .label {
    /* font-size: 16px; */
    font-size: large;
    color: #666;
  }

  .value {
    font-size: 16px;
    color: #333;
  }

  .intro {
    /* font-size: 16px; */
    font-size: medium;
    color: #666666;
    /* margin-top: 20px; */
    line-height: 60rpx;
  }

  .departments {
    margin-top: 20px;
  }

  .department {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }

  .department .name {
    font-size: 18px;
    color: #333;
  }

  .department .desc {
    font-size: 16px;
    color: #666;
  }

  .experts {
    margin-top: 20px;
  }

  .expert {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }

  .expert .name {
    font-size: 18px;
    color: #333;
  }

  .expert .title {
    font-size: 16px;
    color: #666;
  }

  .expert .desc {
    font-size: 16px;
    color: #666;
  }

  .footer {
    height: 60px;
    background-color: #ddd;
  }

  .copyright {
    margin-top: 20px;
    font-size: 20px;
    color: #666;
    text-align: center;
  }
</style>