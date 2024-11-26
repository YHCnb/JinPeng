<template>
  <view class="work-container">
    <!-- 照片展示框 -->
    <uni-swiper-dot class="uni-swiper-dot-box" :info="data" :current="current" field="content">
      <swiper autoplay=true interval=4000 class="swiper-box" :current="swiperDotIndex" @change="changeSwiper">
        <swiper-item v-for="(item, index) in swiperPictureUrl" :key="index">
          <view class="swiper-item" @click="clickBannerItem(item)">
            <image class="swiperimg" :src="item.image" mode="aspectFill" :draggable="false" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <!-- 通告栏1号 -->
    <view class="noticebar-box">
      <uni-notice-bar show-icon scrollable color="#30e3ca"
	  text="✨ 绘梦小精灵新功能上线啦！ ✨只需告诉我们你想画什么，小精灵就能立即为你画出梦幻般的世界！快来试试吧，开启属于你的创意之旅！🎨✨" />
    </view>


    <!-- 按钮卡片 -->
    <view>
      <uni-card :border="false" padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="onClickCT">
        <view class="uni-card__header">
          <view class="uni-card__header-box">
            <view class="uni-card__header-avatar">
              <image class="uni-card__header-avatar-image" :src="iconUrl.url1" mode="aspectFit" />
            </view>
            <view class="uni-card__header-content">
              <text class="uni-card__header-content-title uni-ellipsis">AI作画</text>
              <text class="uni-card__header-content-subtitle uni-ellipsis">AI画作，一键生成~</text>
            </view>
          </view>
        </view>
      </uni-card>
	  <uni-card :border="false" padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="onClickMRI">
	    <view class="uni-card__header">
	      <view class="uni-card__header-box">
	        <view class="uni-card__header-avatar">
	          <image class="uni-card__header-avatar-image" :src="iconUrl.url2" mode="aspectFit" />
	        </view>
	        <view class="uni-card__header-content">
	          <text class="uni-card__header-content-title uni-ellipsis">图像AI风格转化</text>
	          <text class="uni-card__header-content-subtitle uni-ellipsis">上传图像改变风格~</text>
	        </view>
	      </view>
	    </view>
	  </uni-card>
      <uni-card :border="false" padding="0px 20px 0px 20px" spacing="0px" margin="20px 25px" @click="saySorry">
        <view class="uni-card__header">
          <view class="uni-card__header-box">
            <view class="uni-card__header-avatar">
              <image class="uni-card__header-avatar-image" :src="iconUrl.url3" mode="aspectFit" />
            </view>
            <view class="uni-card__header-content">
              <text class="uni-card__header-content-title uni-ellipsis">敬请期待</text>
              <text class="uni-card__header-content-subtitle uni-ellipsis">更多功能正在开发中~</text>
            </view>
          </view>
        </view>
      </uni-card>
    </view>
    <!-- 提示窗 -->
    <view>
      <uni-popup ref="tips" type="dialog">
        <uni-popup-dialog :type="info" confirmText="开始体验" title="✨使用方法✨" @confirm="dialogConfirm">
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

    <uni-popup ref="rightPaper" type="dialog">
      <uni-popup-dialog class="rightPaper-popup" :type="msgType" showCancel="notshow" confirmText="开始体验" title="✨ 绘梦小精灵新功能上线啦！ ✨"
        @confirm="this.clickUpload">
        <scroll-view scroll-y="true" style="width: 70vw;max-width: 300px;">
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
          "https://env-00jxhjunlk7s.normal.cloudstatic.cn/video1.mp4?expire_at=1731986918&er_sign=e295aaf36395e3f96d49a6d07b6b80c3",
          "https://env-00jxhjunlk7s.normal.cloudstatic.cn/video2.mp4?expire_at=1732620196&er_sign=71f6aaac2ad944e240f490e3345b19bf",
        ],
        tipsTextList: [
          '上传图片，选择风格，小精灵秒变艺术大师！油画、素描、二次元任你挑！快来让照片焕发艺术魅力吧！✨🖌️',
          '上传图片，选择风格，小精灵秒变艺术大师！油画、素描、二次元任你挑！快来让照片焕发艺术魅力吧！✨🖌',
        ],
        tipsNavList: [
          '/pages/diag/mri/index',
          '/pages/diag/ct/index',
        ],
        current: 0,
        swiperDotIndex: 0,
        maxLength: 35,
        swiperPictureUrl: [{
          image: '/static/images/image1.jpg'
        },{
          image: '/static/images/image2.jpg'
        },{
          image: '/static/images/image3.jpg'
        }
		],

        dynamicList: [],
        iconUrl: {
          url1: '/static/icon/c1.png',
          url2: '/static/icon/c2.png',
		  url3: '/static/icon/c3.png',
        },
		// <p>亲爱的小朋友，欢迎使用“绘梦小精灵”！希望你在这里可以发挥创意，绘制美丽的梦境，享受无尽的乐趣！在你使用这个小程序时，我们会非常小心地保护你的隐私，就像保护珍贵的宝贝一样。</p>
		// <p>1. 收集的信息：<br>
		// <p>我们仅会收集你在使用小程序时输入的画画指令，比如你告诉我们“我要画一只彩虹独角兽”或者“画个星星在蓝天上”。这些信息只是为了帮助你创造美丽的画作。</p>
		// <p>2. 没有私人信息：<br>
		// <p>我们不会要求你输入任何个人信息，比如名字、地址或者电话号码。我们只关心你的创意和梦想，不会储存你的个人资料。</p>
		// <p>3. 数据的使用：<br>
		// <p>你的画作数据仅会用于生成你请求的图画，并且不会与任何其他人共享。你创造的每一幅画都是你独一无二的艺术作品。</p>
		// <p>4. 安全保障：<br>
		// <p>我们会用安全的方式存储和处理所有数据，就像给你的画作装上了一个小小的保护罩，确保它们不被外人看到。</p>
		// <p>5. 关于父母：<br>
		// <p>为了确保你的隐私得到最好的保护，如果你是小学生，我们会建议家长一起使用这个小程序。</p>
		// <p>小朋友们，放心大胆地绘画吧！你在“绘梦小精灵”里的每一个创意都将成为美丽的梦想，我们会一直保护它们，直到你完成每一幅画作。</p>
		// <p>最后更新日期：2024年11月18日</p>
        disclaimerText: `
		用心聆听你的梦话，"绘梦小精灵"现在可以快速将你的想法变成美丽的画作！🎨只需告诉我们你想画什么，小精灵‍就能立即为你绘制出一个梦幻般的世界！快来试试吧，开启属于你的创意之旅！🚀🌟
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
          title: `图像由AI接口生成，与小程序无关`,
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
    height: 350rpx;
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
    height: 350rpx;
    line-height: 350rpx;
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
	background-color: #252a34;
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
/* 	background-color: #40514e; */
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
    color: #30e3ca;
    /* line-height: 5vw; */
    letter-spacing: 1px;
  }

  .uni-card__header-content-subtitle {
    font-size: x-small;
    /* font-size: 3vw; */
    /* margin-top: 1vw; */
    color: #11999e;
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
    color: #fff;
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