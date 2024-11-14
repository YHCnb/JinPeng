<script>
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'

  export default {
    onLaunch: function() {
      this.initApp()
    },
    methods: {
      // 初始化应用
      initApp() {
        // 初始化应用配置
        this.initConfig()
        // 检查用户登录状态
        //#ifdef H5
        this.checkLogin()
        //#endif
      },
      initConfig() {
        this.globalData.config = config
      },
      checkLogin() {
        this.$tab.reLaunch('/pages/index') 
        // if (!getToken()) {
        //   this.$tab.reLaunch('/pages/index') 
        // }
      }
    }
  }
</script>

<style lang="scss">
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    height: auto;
    // background-image: url('https://rvwew.space:8666/api/profile/demo/demo/video/bg.png');
	// background-image: url('@/static/bg.png');
	background-image: url('https://bpic.588ku.com/back_pic/23/04/26/39e41c7e6e410ba62ee6e88194930917.png');
    background-size: cover;
  }
  @import '@/static/scss/index.scss'
</style>
