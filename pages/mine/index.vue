<template>
  <view class="mine-container" :style="{height: `${windowHeight}px`}">
    <view class="bottom-logo-container">
      <image class="bottom-logo" mode="aspectFit" src="@/static/logo/whitebg.png" />
    </view>
    <!--顶部个人信息栏-->
    <view class="header-section">
      <uni-card margin="5px" padding="0px" spacing="0px">
        <view class="flex padding justify-between">
          <view class="flex align-center">
            <view v-if="!avatar" class="cu-avatar xl round bg-white">
              <view class="iconfont icon-people text-gray icon"></view>
            </view>
            <image v-if="avatar" @click="handleToAvatar" :src="avatar" class="cu-avatar xl round" mode="widthFix">
            </image>
            <view>
              <view v-if="!name" @click="handleBuilding" class="login-tip">
                点击登录
              </view>
              <view v-if="name" @click="handleBuilding" class="user-info">
                <view class="u_title">
                  {{ name }}
                </view>
              </view>
              <view @click="handleBuilding" class="flex align-center user_info_nav">
                <text>个人信息</text>
                <view class="iconfont icon-right"></view>
              </view>
            </view>
            <image v-if="avatar" @click="handleBuilding" src="@/static/icon/QR.png" class= "QR" mode="widthFix">
            </image>  
          </view>
        </view>
      </uni-card>
    </view>

    <view class="content-section">
      <view class="mine-actions grid col-4 text-center">
        <view class="action-item" @click="handleBuilding">
          <view class="iconfont icon-friendfill text-pink icon"></view>
          <text class="text">交流群</text>
        </view>
        <view class="action-item" @click="handleBuilding">
          <view class="iconfont icon-service text-blue icon"></view>
          <text class="text">在线客服</text>
        </view>
        <view class="action-item" @click="handleBuilding">
          <view class="iconfont icon-community text-mauve icon"></view>
          <text class="text">反馈社区</text>
        </view>
        <view class="action-item" @click="handleBuilding">
          <view class="iconfont icon-dianzan text-green icon"></view>
          <text class="text">点赞我们</text>
        </view>
      </view>

      <view class="menu-list">
        <view class="list-cell list-cell-arrow" @click="handleBuilding">
          <view class="menu-item-box">
            <view class="iconfont icon-user menu-icon"></view>
            <view>编辑资料</view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow" @click="handleBuilding">
          <view class="menu-item-box">
            <view class="iconfont icon-help menu-icon"></view>
            <view>常见问题</view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow" @click="handleBuilding">
          <view class="menu-item-box">
            <view class="iconfont icon-aixin menu-icon"></view>
            <view>关于我们</view>
          </view>
        </view>
        <view class="list-cell list-cell-arrow" @click="handleBuilding">
          <view class="menu-item-box">
            <view class="iconfont icon-setting menu-icon"></view>
            <view>应用设置</view>
          </view>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
  import storage from '@/utils/storage'
  
  export default {
    data() {
      return {
        // name: "李晓明",
        name: this.$store.state.user.name,
        version: getApp().globalData.config.appInfo.version
      }
    },
    computed: {
      avatar() {
        return this.$store.state.user.avatar
      },
      windowHeight() {
        return uni.getSystemInfoSync().windowHeight - 50
      }
    },
    methods: {
      handleToInfo() {
        this.$tab.navigateTo('/pages/mine/info/index')
      },
      handleToEditInfo() {
        this.$tab.navigateTo('/pages/mine/info/edit')
      },
      handleToSetting() {
        this.$tab.navigateTo('/pages/mine/setting/index')
      },
      handleToLogin() {
        this.$tab.reLaunch('/pages/login')
      },
      handleToAvatar() {
        this.$tab.navigateTo('/pages/mine/avatar/index')
      },
      handleLogout() {
        this.$modal.confirm('确定注销并退出系统吗？').then(() => {
          this.$store.dispatch('LogOut').then(() => {
            this.$tab.reLaunch('/pages/index')
          })
        })
      },
      handleHelp() {
        this.$tab.navigateTo('/pages/mine/help/index')
      },
      handleAbout() {
        this.$tab.navigateTo('/pages/mine/about/index')
      },
      handleJiaoLiuQun() {
        this.$modal.showToast('QQ群：①133713780、②146013835')
      },
      handleBuilding() {
        this.$modal.showToast('模块建设中~')
      }
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #f5f6f7;
  }

  .mine-container {
    width: 100%;
    height: 100%;


    .header-section {
      padding: 10px 10px 45px 10px;
      background-color: #3c96f3;
      color: white;

      .login-tip {
        font-size: 20px;
        margin-left: 10px;
      }

      .cu-avatar {
        border: 2px solid #eaeaea;

        .icon {
          font-size: 40px;
        }
      }

      .user-info {
        margin-left: 15px;

        .u_title {
          font-size: 20px;
          font-weight: bold;
          line-height: 30px;
        }
      }
      .user_info_nav{
        margin-left: 15px;
      }
      .QR{
        width: 40px;
        // 放于最右边
        position: absolute;
        right: 20px;
      }
    }

    .content-section {
      position: relative;
      top: -50px;

      .mine-actions {
        margin: 15px 15px;
        padding: 20px 0px;
        border-radius: 8px;
        background-color: white;

        .action-item {
          .icon {
            font-size: 28px;
          }

          .text {
            display: block;
            font-size: 13px;
            margin: 8px 0px;
          }
        }
      }
    }

    .bottom-logo-container {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      opacity: 0.6;
    }
  }
</style>
