<template>
    <view>
      <view class="input-container">
        <!-- 文本输入框 -->
        <uni-forms ref="form">
          <view class="text-box">
            <view class="input-title">
              <text>上传CT影像</text>
              <image class="ct-image" :src="processedImageSrc" mode="aspectFit"/>
            </view>
          </view>
        </uni-forms>
  
        <!-- 按钮组 -->
        <view class="button-group">
          <view class="little-button-group">
            <!-- 图像识别按钮 -->
            <button @click="imageRecognition" class="little-button1">
              <uni-icons type="camera" size="22" color=#2979FF></uni-icons>上传图片
            </button>
          </view>
  
          <!-- 查看诊断按钮-->
          <button @click="viewRightPaper" class="blue-button">查看诊断</button>
        </view>
      </view>
  
      <!-- 提交后显示诊断卡 -->
      <view class="output-container" v-if="showDiag" padding="0px" spacing="0px">
        <uni-card class="diag-card" margin='0px' padding="0px" spacing="0px">
          <view class="blue-line"></view>
          <view class="diag-container">
            <template>
              <view class="diag-title-container">
                <text class="createTime">{{ diagDetail.createTime }}</text>
                <text class="diag-title">诊断报告</text>
              </view>
            </template>
            <view class="diag-info-container">
              <view class="info-item">
                <view class="info-title-container">
                  <image class="info-title-image" mode="aspectFit" src="@/static/images/tabbar/gradient.png" />
                  <text class="info-title">诊断结果：</text>
                </view>
                <p class="info">{{ diagDetail.modelFeedback }}</p>
              </view>
            </view>
            <view class="bottom-text-container">
              <text>本报告由龙影</text>
              <text style="color: #2475fc;">RadGPT</text>
              <text>生成，报告结果仅供医学参考</text>
            </view>
          </view>
        </uni-card>
      </view>
  
      <uni-popup ref="pop">
        <view class="content">
          <view class="title">弹窗编辑</view>
          <view @click="close" class="close">X</view>
          <bt-cropper ref="cropper" :imageSrc="rawImageSrc" :mask="mask" ratio="0" :initPosition="initPosition"
            :dWidth="800" fileType="png" :containerSize="containerSize" @change="onChange"></bt-cropper>
          <view class="btns">
            <button class="button" @click="crop">确认</button>
            <button class="button" @click="close">取消</button>
          </view>
        </view>
      </uni-popup>
      <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog :type="msgType" cancelText="拒绝" confirmText="同意" title="诊断知情同意书" @confirm="this.clickUpload">
          <view class="right-paper-text-box" style="width: 70vw;">
            <text
              class="right-paper-text">尊敬的用户，您好！\n\n在您使用我们的服务时，我们将为您提供由人工智能生成的初步诊断结果。请注意，这些结果仅供参考，最终的诊断需要由专业医生进行确认。\n\n由于人工智能诊断存在一定的误差，可能会产生不准确的结果。我们建议您在接受任何治疗或决策之前，仍要咨询专业医生的意见。\n\n</text>
            <text class="right-paper-text1">请确认您已了解以上风险，并同意继续使用我们的服务。</text>
          </view>
        </uni-popup-dialog>
      </uni-popup>
    </view>
</template>
  
<script>
    import {
      addDiag,
      getMsgFromBigDataApi,
      imageToText,
      sendImg,
    } from '@/api/diag';
    export default {
      data() {
        return {
          rightPaper: '尊敬的用户，您好！在您使用我们的服务时，我们将为您提供由人工智能生成的初步诊断结果。请注意，这些结果仅供参考，最终的诊断需要由专业医生进行确认。由于人工智能诊断存在一定的误差，可能会产生不准确的结果。我们建议您在接受任何治疗或决策之前，仍要咨询专业医生的意见。请确认您已了解以上风险，并同意继续使用我们的服务。',
          rawImageSrc: '',
          processedImageSrc: '/static/icon/c1.png',
          mask: "",
          // 如果在弹窗中使用，必须手动指定裁剪器的大小
          containerSize: {
            width: 600,
            height: 600
          },
          initPosition: null,
          showDiag: true,
          diagDetail: {
            diagType: '0',
            age: '',
            sex: '',
            symptomDesc: '',
            modelFeedback: '',
            doctorConclusion: '',
            symptomDescImg: ''
          },
        };
      },
      methods: {
        onLoad(options) {},
        // 获取当前时间
        getTime() {
          let t = new Date();
          let fn1 = (d) => ('0' + d).substr(-2);
          this.diagDetail.createTime = t.getFullYear() + '-' +
            fn1(t.getMonth() + 1) + '-' +
            fn1(t.getDate()) + '  ' +
            t.toLocaleTimeString('chinese', {
              hour12: false
            })
        },
        upload() {
          this.$refs.files.upload()
        },
        close() {
          this.$refs.pop.close();
        },
        crop() {
          this.$refs.cropper.crop().then(res => {
            this.conImg2Text([res])
            this.close()
          });
        },
        imageRecognition() {
          uni.chooseImage({
            count: 1, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], //从二者选择
            success: (chooseImageRes) => {
              this.rawImageSrc = chooseImageRes.tempFilePaths[0];
              this.$refs.pop.open();
            }
          });
        },
        conImg2Text(result) {
          console.log(result);
          const tempFilePaths = result;
          this.processedImageSrc = tempFilePaths[0];

          sendImg(tempFilePaths[0]).then((res) => {
            const url = res.url
            console.log('Uploaded Image URL:', url);
            const index = url.indexOf('/upload')
            // 如果找到了，截取/upload之后的部分
            console.log(index)
  
            if (index !== -1) {
              this.diagDetail.symptomDescImg = url.substring(index + '/upload'.length)
              console.log(this.diagDetail.symptomDescImg)
            }
          });
        },
        viewRightPaper() {
          this.$refs.alertDialog.open();
        },
        // 查看诊断按钮点击事件
        clickUpload() {
          if (this.diagDetail.symptomDesc == '') {
            uni.showToast({
              title: '请输入内容',
              icon: 'error'
            });
          } else {
            this.viewDiagnosis();
          }
        },
        upload2Back() {
          console.log(this.diagDetail)
          addDiag(this.diagDetail).then((res) => {
            console.log(res);
            // this.$modal.msgSuccess(res)
          })
        },
        viewDiagnosis() {
          this.$modal.loading("请耐心等待...");
          this.getTime();
          console.log(this.createTime);
          const requestData = {
            'model': 'baichuan2-13b',
            'messages': [{
              'role': 'user',
              'content': this.diagDetail.symptomDesc
            }],
            'stream': 'False'
          }
          getMsgFromBigDataApi(JSON.stringify(requestData)).then((res) => {
            this.$modal.closeLoading();
            //使报告表单的结果变成大模型输出
            this.diagDetail.modelFeedback = res.msg;
            console.log(res.msg);
            //显示诊断报告卡片
            this.showDiag = true;
            this.upload2Back();
          })
        },
      },
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
  
  
    .input-container {
      margin-bottom: 40rpx;
      margin-left: 40rpx;
      margin-right: 40rpx;
      border-radius: 16px;
      background-color: #ffffff;
      padding-bottom: 10px;
    }
  
    .input-title {
      z-index: 1;
      color: #2475FC;
      font-size: 5vw;
      margin-bottom: 3vw;
      margin-left: 5px;
      margin-top: 10px;
      font-weight: bold;
    }

    .ct-image{
      height: 30vh;
      margin-top: 20rpx;
    }
  
    .text-box {
      /* background-color: #ffffff; */
      margin-top: 40px;
      padding-top: 2vw;
      padding-bottom: 2vw;
      padding-left: 2vw;
      padding-right: 2vw;
      margin-left: 12px;
      margin-right: 12px;
    }
  
    /* 样式调整：按钮组 */
    .button-group {
      margin-top: 5px;
      display: flex;
      justify-content: space-around;
      height: 45px;
      position: relative;
    }
  
    .little-button-group {
      display: flex;
      justify-content: space-around;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 25%;
      left: 3%;
      right: auto;
      margin: 0;
    }
  
    .little-button1 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      color: #000000;
      font-size: 26rpx;
      height: 8vw;
      width: 28vw;
      line-height: 25rpx;
      border-radius: 25rpx;
      border: 2rpx solid #c5c5c5;
  
    }
  
    .little-button2 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      color: #000000;
      font-size: 26rpx;
      height: 8vw;
      width: 28vw;
      line-height: 25rpx;
      border-radius: 25rpx;
      border: 2rpx solid #c5c5c5;
    }
  
    /* 样式调整：蓝色按钮 */
    .blue-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2979FF;
      color: #fff;
  
      position: absolute;
      bottom: 25%;
      left: auto;
      right: 5%;
      margin: 0;
      font-size: 30rpx;
      line-height: 30rpx;
      height: 8vw;
      width: 28vw;
      border-radius: 25rpx;
      border: 2rpx solid #c5c5c5;
    }
  
    .logo {
      display: flex;
      justify-content: space-around;
      height: 500rpx;
      width: 2000rpx;
      margin-top: 400rpx;
    }
  
    .output-container {
      padding: 0rpx;
      margin-left: 5vw;
      margin-right: 5vw;
      border-radius: 25rpx;
      /* box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0, 0, 0, 0.5); */
      margin-bottom: 10vh;
    }
  
    .blue-line {
      height: 30rpx;
      background-color: #7bb6ff;
    }
  
    .diag-container {
      position: relative;
      min-height: 35vh;
      padding: 15rpx 30rpx 80rpx 40rpx;
      /* border-radius: 20rpx; */
      overflow: hidden;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
      background-color: #ffffff;
      flex: 1;
    }
  
    .createTime {
      font-size: small;
    }
  
    .diag-info-container {
      overflow: auto;
      margin-top: 40rpx;
    }
  
    .diag-title {
      margin-top: 30rpx;
      display: flex;
      justify-content: center;
      font-size: 40rpx;
      letter-spacing: 0rpx;
      word-spacing: 0rpx;
      color: #0d0d0d;
      font-weight: bold;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
    }
  
    .info-item {
      padding-bottom: 4rpx;
      left: 7%;
      right: 7%;
      margin-bottom: 30rpx;
    }
  
    .info-title-container {
      margin-bottom: 20rpx;
    }
  
    .info-title-image {
      height: 30rpx;
      width: 15rpx;
      margin-right: 25rpx;
    }
  
    .info-title {
      display: inline-block;
      font-size: 30rpx;
      letter-spacing: 0rpx;
      word-spacing: 0rpx;
      color: #2475fc;
      font-weight: bold;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
    }
  
    .info {
      font-size: 28rpx;
      letter-spacing: 0rpx;
      word-spacing: 0rpx;
      color: #0d0d0d;
      font-weight: bold;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
      text-indent: 1.5em;
      line-height: 1.5;
    }
  
    .bottom-text-container {
      position: absolute;
      bottom: 20rpx;
      left: 0;
      right: 0;
      margin: 0;
      padding-top: 30rpx;
      display: flex;
      justify-content: center;
      font-size: small;
    }
  
    .bottom-blue-text {
      color: #2979FF;
    }
  
    .button-container {
      display: flex;
    }
  
    .button-container button {
      width: 40%;
      height: 40px;
      color: #fff;
    }
  
    .right-paper-text-box {
      margin-left: 20rpx;
      margin-right: 20rpx;
      margin-top: 20rpx;
      margin-bottom: 40rpx;
    }
  
    .right-paper-text {
      font-family: "微软雅黑";
      /* font-size: 30rpx; */
      font-size: medium;
      letter-spacing: 0rpx;
      word-spacing: 0rpx;
      color: #000000;
      font-weight: bold;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
    }
  
    .right-paper-text1 {
      font-family: "微软雅黑";
      /* font-size: 30rpx; */
      font-size: medium;
      letter-spacing: 0rpx;
      word-spacing: 0rpx;
      color: #FF0000;
      font-weight: bold;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
    }
  
    .content {
      background-color: #fff;
      padding: 20rpx;
      border-radius: 20rpx;
      position: relative;
    }
  
    .title {
      font-size: 36rpx;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20rpx;
    }
  
    .close {
      position: absolute;
      top: 0rpx;
      right: 0;
      padding: 20rpx;
    }
</style>