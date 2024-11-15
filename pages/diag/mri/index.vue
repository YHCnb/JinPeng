<template>
  <view class="app-container">
    <text class="title">风格变换魔法</text>

    <!-- 卡通元素装饰 -->
    <image src="/static/icon/小画家.jpg" class="painter-icon" mode="aspectFit" />
    <image src="/static/icon/机器人画家.jpg" class="robot_painter-icon" mode="aspectFit" />

    <!-- 图片上传区域 -->
    <view class="upload-container">
      <view class="button-group">
        <button @click="uploadImage" class="upload-button">上传图片</button>
        <button @click="takePhoto" class="camera-button">拍照上传</button>
      </view>
    </view>

    <!-- 图片显示区域 -->
    <view class="images-display">
      <!-- 原始图片显示 -->
      <view v-if="originalImage" class="image-container">
        <text class="image-label">原始图片</text>
        <image :src="originalImageSrc" mode="aspectFit" class="image-display"></image>
      </view>

      <!-- 转换后的图片显示 -->
      <view v-if="convertedImage" class="image-container">
        <text class="image-label">转换后的图片</text>
        <image :src="convertedImageSrc" mode="aspectFit" class="image-display"></image>
        <button @click="downloadImage" class="download-button">下载图片</button>
      </view>
    </view>

    <!-- 风格选择器 -->
    <picker mode="selector" :range="styleOptions" @change="onStyleChange">
      <view class="picker">
        当前风格：{{ styleOptions[styleIndex] }}
      </view>
    </picker>

    <!-- 转换按钮 -->
    <button v-if="originalImage" @click="convertImage" class="convert-button">风格转换</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      originalImage: '', // 原始图片的 Base64 数据
      originalImageSrc: '', // 用于显示的原始图片本地路径
      convertedImage: '', // 转换后图片的 Base64 数据
      convertedImageSrc: '', // 用于显示的转换后图片本地路径
      accessToken: '', // 百度 API 的访问令牌
      styleOptions: ['cartoon', 'pencil', 'color_pencil', 'warm', 'wave', 'lavender', 'mononoke', 'scream', 'gothic'], // 风格选项
      styleIndex: 0, // 当前选择的风格索引
      API_KEY: 'WgVew19N1kOA8k8cV6DvFuOT', // 请替换为你的 API_KEY
      SECRET_KEY: 'TO6E9nGAPhAEh9p1YKrvnPyduIEuxNeK', // 请替换为你的 SECRET_KEY
    };
  },
  methods: {
    // 获取百度 API 的访问令牌
    getAccessToken() {
      return new Promise((resolve, reject) => {
        uni.request({
          url: 'https://aip.baidubce.com/oauth/2.0/token',
          method: 'POST',
          data: {
            grant_type: 'client_credentials',
            client_id: this.API_KEY,
            client_secret: this.SECRET_KEY,
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          success: (res) => {
            if (res.data && res.data.access_token) {
              this.accessToken = res.data.access_token;
              resolve(res.data.access_token);
            } else {
              uni.showToast({
                title: '获取访问令牌失败',
                icon: 'none',
              });
              reject('获取访问令牌失败');
            }
          },
          fail: (err) => {
            uni.showToast({
              title: '请求访问令牌失败',
              icon: 'none',
            });
            reject(err);
          },
        });
      });
    },
    // 上传图片
    uploadImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: (res) => {
          const filePath = res.tempFilePaths[0];
          const fileSystemManager = uni.getFileSystemManager();
          fileSystemManager.readFile({
            filePath,
            encoding: 'base64',
            success: (readRes) => {
              const cleanedBase64 = readRes.data.replace(/[\r\n]/g, '');
              this.originalImage = cleanedBase64;

              // 将 Base64 数据写入到本地文件
              const saveFilePath = `${uni.env.USER_DATA_PATH}/original_image.jpg`;
              fileSystemManager.writeFile({
                filePath: saveFilePath,
                data: cleanedBase64,
                encoding: 'base64',
                success: () => {
                  this.originalImageSrc = saveFilePath;
                  console.log('原始图片已保存到', saveFilePath);
                },
                fail: (err) => {
                  uni.showToast({
                    title: '保存图片失败',
                    icon: 'none',
                  });
                  console.error('保存图片失败:', err);
                },
              });
            },
            fail: (err) => {
              uni.showToast({
                title: '读取图片失败',
                icon: 'none',
              });
              console.error('读取图片失败:', err);
            },
          });
        },
        fail: (err) => {
          uni.showToast({
            title: '图片选择失败',
            icon: 'none',
          });
          console.error('图片选择失败:', err);
        },
      });
    },
    // 拍照上传
    takePhoto() {
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success: (res) => {
          const filePath = res.tempFilePaths[0];
          const fileSystemManager = uni.getFileSystemManager();
          fileSystemManager.readFile({
            filePath,
            encoding: 'base64',
            success: (readRes) => {
              const cleanedBase64 = readRes.data.replace(/[\r\n]/g, '');
              this.originalImage = cleanedBase64;

              // 将 Base64 数据写入到本地文件
              const saveFilePath = `${uni.env.USER_DATA_PATH}/original_image.jpg`;
              fileSystemManager.writeFile({
                filePath: saveFilePath,
                data: cleanedBase64,
                encoding: 'base64',
                success: () => {
                  this.originalImageSrc = saveFilePath;
                  console.log('原始图片已保存到', saveFilePath);
                },
                fail: (err) => {
                  uni.showToast({
                    title: '保存图片失败',
                    icon: 'none',
                  });
                  console.error('保存图片失败:', err);
                },
              });
            },
            fail: (err) => {
              uni.showToast({
                title: '读取图片失败',
                icon: 'none',
              });
              console.error('读取图片失败:', err);
            },
          });
        },
        fail: (err) => {
          uni.showToast({
            title: '拍照失败',
            icon: 'none',
          });
          console.error('拍照失败:', err);
        },
      });
    },
    // 风格选择器变化
    onStyleChange(e) {
      this.styleIndex = parseInt(e.detail.value, 10);
    },
    // 调用风格转换接口
    async convertImage() {
      if (!this.originalImage) {
        uni.showToast({
          title: '请先选择图片',
          icon: 'none',
        });
        return;
      }

      // 显示加载中
      uni.showLoading({
        title: '转换中...',
      });

      try {
        // 获取访问令牌
        const token = await this.getAccessToken();

        // 调用百度风格转换接口
        uni.request({
          url: `https://aip.baidubce.com/rest/2.0/image-process/v1/style_trans?access_token=${token}`,
          method: 'POST',
          data: {
            image: this.originalImage, // 发送 Base64 编码的图像数据（不带前缀）
            option: this.styleOptions[this.styleIndex], // 选择的风格类型
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          success: (response) => {
            if (response.data && response.data.image) {
              const cleanedBase64 = response.data.image.replace(/[\r\n]/g, '');
              this.convertedImage = cleanedBase64;

              // 将转换后的图片保存到本地文件
              const filePath = `${uni.env.USER_DATA_PATH}/converted_image.png`;
              const fileSystemManager = uni.getFileSystemManager();
              fileSystemManager.writeFile({
                filePath,
                data: cleanedBase64,
                encoding: 'base64',
                success: () => {
                  this.convertedImageSrc = filePath;
                  console.log('转换后的图片已保存到', filePath);
                  uni.hideLoading();
                },
                fail: (err) => {
                  uni.hideLoading();
                  uni.showToast({
                    title: '保存转换图片失败',
                    icon: 'none',
                  });
                  console.error('保存转换图片失败:', err);
                },
              });
            } else {
              uni.hideLoading();
              uni.showToast({
                title: '转换失败',
                icon: 'none',
              });
              console.error('转换失败:', response.data);
            }
          },
          fail: (err) => {
            uni.hideLoading();
            uni.showToast({
              title: '请求失败',
              icon: 'none',
            });
            console.error('请求失败:', err);
          },
        });
      } catch (error) {
        uni.hideLoading();
        uni.showToast({
          title: '获取令牌失败',
          icon: 'none',
        });
        console.error('获取访问令牌失败:', error);
      }
    },
    // 下载转换后的图片
    downloadImage() {
      if (this.convertedImageSrc) {
        uni.saveImageToPhotosAlbum({
          filePath: this.convertedImageSrc,
          success: () => {
            uni.showToast({
              title: '图片已保存',
              icon: 'success',
            });
          },
          fail: () => {
            uni.showToast({
              title: '保存失败',
              icon: 'none',
            });
          },
        });
      } else {
        uni.showToast({
          title: '无可下载的图片',
          icon: 'none',
        });
      }
    },
  },
};
</script>


<style>
/* 确保页面和根容器高度为 100% */
page, .app-container {
  height: 100%;
}

.app-container {
  background-color: #f0f8ff;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #ff4500;
  margin-bottom: 20px;
}

/* 调整图片的大小和位置 */
.painter-icon {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 80px;
  height: 80px; /* 设置高度 */
  pointer-events: none; /* 使图片不拦截点击事件 */
  z-index: 1; /* 确保图片层级较低 */
}

.robot_painter-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 80px; /* 设置高度 */
  pointer-events: none; /* 使图片不拦截点击事件 */
  z-index: 1; /* 确保图片层级较低 */
}

.upload-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  z-index: 2; /* 确保按钮在图片之上 */
}

.button-group {
  display: flex;
}

.button-group button {
  padding: 10px;
  margin: 5px;
  background-color: #2979FF;
  color: white;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.images-display {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 90%;
  text-align: center;
  margin-bottom: 20px;
}

.image-label {
  font-size: 16px;
  color: #333;
}

.image-display {
  width: 100%;
  height: auto;
  margin: 10px auto;
  border: 2px dashed #FFD700;
  border-radius: 10px;
}

.picker {
  background-color: #FFF;
  color: #000;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  border-radius: 15px;
}

.convert-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  margin: 20px 0;
  display: block;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.download-button {
  background-color: #FF9800;
  color: white;
  padding: 10px;
  margin: 10px 0;
  display: block;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}
</style>
