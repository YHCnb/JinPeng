<template>
  <view class="work-container">
    <!-- 照片展示框 -->
    <uni-swiper-dot class="uni-swiper-dot-box" :info="data" :current="current" field="content">
      <swiper class="swiper-box" :current="swiperDotIndex" @change="changeSwiper">
        <swiper-item v-for="(item, index) in swiperPictureUrl" :key="index">
          <view class="swiper-item" @click="clickBannerItem(item)">
            <image class="swiperimg" :src="item.image" mode="aspectFill" :draggable="false" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <!-- 通告栏1号 -->
    <view class="noticebar-box">
      <uni-notice-bar show-icon scrollable text="分析医学核磁共振（MRI）诊断描述，龙影大模型（RadGPT）快速生成诊断意见。" />
    </view>


    <!-- 按钮卡片 -->
    <view>
      <uni-card padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="onClickMRI">
        <view class="uni-card__header">
          <view class="uni-card__header-box">
            <view class="uni-card__header-avatar">
              <image class="uni-card__header-avatar-image" :src="iconUrl.url1" mode="aspectFit" />
            </view>
            <view class="uni-card__header-content">
              <text class="uni-card__header-content-title uni-ellipsis">MRI影像诊断生成</text>
              <text class="uni-card__header-content-subtitle uni-ellipsis">上传核磁共振影像描述生成诊断</text>
            </view>
          </view>
        </view>
      </uni-card>
      <uni-card padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="onClickCT">
        <view class="uni-card__header">
          <view class="uni-card__header-box">
            <view class="uni-card__header-avatar">
              <image class="uni-card__header-avatar-image" :src="iconUrl.url2" mode="aspectFit" />
            </view>
            <view class="uni-card__header-content">
              <text class="uni-card__header-content-title uni-ellipsis">CT影像诊断生成</text>
              <text class="uni-card__header-content-subtitle uni-ellipsis">上传CT影像描述生成诊断</text>
            </view>
          </view>
        </view>
      </uni-card>
      <uni-card padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="onClickXray">
        <view class="uni-card__header">
          <view class="uni-card__header-box">
            <view class="uni-card__header-avatar">
              <image class="uni-card__header-avatar-image" :src="iconUrl.url3" mode="aspectFit" />
            </view>
            <view class="uni-card__header-content">
              <text class="uni-card__header-content-title uni-ellipsis">X线影像诊断生成</text>
              <text class="uni-card__header-content-subtitle uni-ellipsis">上传X线影像描述生成诊断</text>
            </view>
          </view>
        </view>
      </uni-card>
    </view>
    <!-- 提示窗 -->
    <view>
      <uni-popup ref="tips" type="dialog">
        <uni-popup-dialog :type="info" confirmText="开始体验" title="使用方法" @confirm="dialogConfirm">
          <view class="pop-up-box" padding="0px" spacing="0px">
            <view class="pop-up-video">
              <video class="vbox" id="myVideo" :src="tipsVideoList[tipsIndex]" @error="videoErrorCallback" :object-fit="contain"
                autoplay="true" loop="true"></video>
            </view>
            <view class="pop-up-text">
              <text class="tips-text">{{tipsTextList[tipsIndex]}}</text>
            </view>
          </view>
        </uni-popup-dialog>
      </uni-popup>
    </view>

    <uni-popup ref="rightPaper" type="dialog" class="rightPaper-popup">
      <uni-popup-dialog :type="msgType" showCancel="notshow" confirmText="同意" title="龙影Rad小程序隐私声明"
        @confirm="this.clickUpload">
        <scroll-view scroll-y="true" style="height: 60vh; width: 70vw;max-width: 300px;;">
          <view v-html="disclaimerText" class='tips-text'></view>
        </scroll-view>
      </uni-popup-dialog>
    </uni-popup>
    <text class="bottom-text" @click="getMore">《使用须知》</text>
  </view>
</template>

<script>
  import {
    getCodeImg
  } from '@/api/login'
  import config from '@/config'

  export default {
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "admin123",
          code: "",
          uuid: '',
        },
        intro: [''],
        tipsIndex: 0,
        tipsVideoList: [
          config.baseUrl + "/profile/demo/demo/video/demo.mp4",
          config.baseUrl + "/profile/demo/demo/video/demo.mp4",
        ],
        tipsTextList: [
          '在MRI影像诊断信息生成功能中，用户可以上传报告中的病情描述区域截图，按照视频引导方式，生成Ai诊断报告。',
          '在CT影像诊断信息生成功能中，用户可以上传报告中的病情描述区域截图，按照视频引导方式，生成Ai诊断报告。',
          '在Xray影像诊断信息生成功能中，用户可以上传报告中的病情描述区域截图，按照视频引导方式，生成Ai诊断报告。',
        ],
        tipsNavList: [
          '/pages/diag/mri/index',
          '/pages/diag/ct/index',
          '/pages/diag/xray/index',
        ],
        current: 0,
        swiperDotIndex: 0,
        maxLength: 35,
        swiperPictureUrl: [{
          image: '/static/logo/RadGPT.jpg'
        }],

        dynamicList: [],
        iconUrl: {
          url1: '/static/icon/c1.png',
          url2: '/static/icon/c2.png',
          url3: '/static/icon/c3.png',
        },
        disclaimerText: `
        <p>欢迎使用龙影Rad小程序（以下简称“本小程序”）。本隐私声明旨在向用户（以下简称“您”）说明我们如何收集、使用、存储和保护您的个人信息。<br>
        请在使用本小程序之前仔细阅读本隐私声明。若您对本声明内容有任何疑问或建议，请联系我们。</p>
        <p>1. 收集的信息：<br>
        核磁共振影像诊断报告文本：为了进行Ai生成报告结果，本小程序需要您上传核磁共振影像诊断报告文本。<br>
        我们将严格保护您的报告信息，仅用于生成报告结果，不会用于其他目的。</p>
        <p>2. 使用的目的：<br>
        核磁共振影像诊断报告文本：用于Ai生成报告结果，并提供个性化的健康建议。</p>
        <p>3. 信息存储：<br>
        我们将严格遵守法律法规的规定，对您的个人信息进行安全存储和保护，存储期限为实现处理目的所必要的最短时间。</p>
        <p>4. 信息安全：<br>
        我们将采取合理的安全措施，保护您的个人信息免受未经授权的访问、使用或披露。</p>
        <p>5. 信息共享与披露：<br>
        我们承诺不会将您的个人信息分享或转让给任何第三方，除非得到您的明示同意或法律法规要求。<br>
        在法律法规允许的范围内，我们可能会与合作伙伴共享必要的信息，但我们将以最大努力保护您的个人信息安全。</p>
        <p>6. 用户权利：<br>
        您有权随时访问、更正、删除您的个人信息，也可以撤回授权或限制我们对您个人信息的处理，但这可能会影响到您使用本小程序的部分功能。<br>
        如果您有任何关于个人信息保护的疑问、投诉或建议，欢迎随时联系我们。</p>
        <p>7. 未成年人保护：<br>
        我们不会有意收集未满18周岁的未成年人的个人信息，若您是未成年人，请在法定监护人的监护下使用本小程序。</p>
        <p>8. 变更与通知：<br>
        我们可能会不定期更新本隐私声明的内容，更新后的隐私声明将在本页面发布，恕不另行通知。您应定期查阅本页面以了解最新隐私声明的内容。</p>
        <p>如果您继续使用本小程序，即表示您同意本隐私声明的全部内容。感谢您的信任与支持！</p>
        <p>如有任何疑问或需要进一步了解，可联系我们：<br>
        邮箱地址：longfei_chen@bit.edu.cn</p>
        <p>最后更新日期：2024年2月22日</p>
        `,
      };
    },
    created() {
      this.pwdLogin();
    },
    methods: {
      onLoad() {
        this.viewRightPaper();
      },
      viewRightPaper() {
        this.$refs.rightPaper.open();
      },
      clickUpload() {

      },
      // 密码登录
      async pwdLogin() {
        this.$store.dispatch('Login', this.loginForm).then(() => {
          this.$modal.closeLoading()
          this.loginSuccess()
        }).catch(() => {
          if (this.captchaEnabled) {
            this.getCode()
          }
        })
      },
      // 登录成功后，处理函数
      loginSuccess(result) {
        // 设置用户信息
        this.$store.dispatch('GetInfo')
      },

      clickBannerItem(item) {
        console.info(item)
      },
      changeSwiper(e) {
        this.current = e.detail.current
      },
      saySorry() {
        uni.showToast({
          title: `敬请期待`,
          icon: 'none'
        })
      },
      onClickMRI() {
        this.tipsIndex = 0
        this.$refs.tips.open()
      },
      onClickCT() {
        this.tipsIndex = 1
        this.$refs.tips.open()
      },
      onClickXray() {
        this.tipsIndex = 2
        this.$refs.tips.open()
      },
      dialogConfirm() {
        this.$tab.navigateTo(this.tipsNavList[this.tipsIndex])
      },
      videoErrorCallback: function(e) {
        uni.showModal({
          content: e.target.errMsg,
          showCancel: false
        })
      },
      getMore() {
        uni.showToast({
          title: `使用须知:报告由龙影大模型（RadGPT）生成，报告结果仅供医学参考 `,
          icon: 'none',
          duration: 3000,
        })
      }
    }
  };
</script>

<style>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    height: auto;
  }

  view {
    font-size: 14px;
    line-height: inherit;
  }


  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .work-container {
    margin-top: 200rpx;
  }

  .swiper-box {
    margin-left: 40rpx;
    margin-right: 40rpx;
    height: 300rpx;
    /* 弧度改这个无效 */
    border-radius: 16px;
  }

  .swiper-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 300rpx;
    line-height: 300rpx;
  }

  .swiperimg {
    /* 有效的弧度调节 */
    border-radius: 16px;
  }

  .grid-item-box {
    flex: 1;
    position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }

  .noticebar-box {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 0;
    margin-left: 30rpx;
    margin-right: 30rpx;
    margin-top: 20px;
    /* 弧度改这个无效 */
    border-radius: 16px;
  }

  .card-box {
    margin-left: 30rpx;
    margin-right: 30rpx;
  }

  .judge-title {
    color: #bd3124;
    font-weight: bold;
  }

  .diagnosis-info-container {
    display: flex;
    flex-direction: column;
  }

  .judge {
    font-family: "微软雅黑";
    font-size: 13px;
    letter-spacing: 0px;
    word-spacing: 0px;
    color: #000000;
    font-weight: bold;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  .card-img {
    height: 10vh;
  }

  /* 基于uni-card修改 */
  .uni-card__header {
    display: flex;
    border-bottom: 1px;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    overflow: hidden;
  }

  .uni-card__header-box {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex: 1;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }

  .uni-card__header-avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 10px;
  }

  .uni-card__header-avatar-image {
    flex: 1;
    width: 80px;
    height: 80px;
  }

  .uni-card__header-content {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 60px;
    overflow: hidden;
    margin-left: 20px;
  }

  .uni-card__header-content-title {
    font-size: large;
    /* font-size: 4vw; */
    font-weight: bold;
    color: #2979FF;
    /* line-height: 5vw; */
    letter-spacing: 1px;
  }

  .uni-card__header-content-subtitle {
    font-size: x-small;
    /* font-size: 3vw; */
    /* margin-top: 1vw; */
    color: #6a6a6a;
  }

  .pop-up-text {
    margin-left: 33px;
    margin-right: 33px;
    margin-top: 10px;
    /* 调整文字与图片的间距 */
  }

  .pop-up-video {
    position: relative;
    display: flex;
    justify-content: center;
    /* 水平居中 */
  }

  .tips-text {
    font-family: "微软雅黑";
    font-size: medium;
    /* font-size: 14px; */
    letter-spacing: 0px;
    word-spacing: 0px;
    color: #000000;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 50rpx;
  }

  .vbox {
    height: 50vh;
  }

  .bottom-text {
    position: absolute;
    bottom: 3%;
    left: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
  }
</style>