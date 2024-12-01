<template>
	<view class="container">
<!-- 	  <view class="main-container">
		
	  </view> -->
	  
	  <!-- size选择器 -->
	  <picker mode="selector" :range="sizeOptions" @change="onSizeChange">
	  	<view class="picker">
	  	  {{ sizeOptions[sizeIndex] }}
	  	</view>
	  </picker>
	  
	  <!-- 文本输入框 -->
	  <uni-forms ref="form">
	    <view class="text-box">
	      <uni-easyinput class="easyinput" :style="easyinputStyle" :placeholderStyle="placeholderStyle" maxlength=-1
	        type="textarea" v-model="prompt" placeholder="请输入prompt"></uni-easyinput>
	    </view>
	  </uni-forms>
	  
	  <!-- 原始图片显示 -->
	  <div class="card">
	  	<div class="card__content">
	  		<image :src="convertedImageSrc || originalImageSrc" mode="aspectFit" class="image-display"></image>
	  	</div>
	  </div>
	  
	  <view class="button-group">
	    <button @click="uploadImage">
	      <span class="text">上传图片</span>
	    </button>
	    <!-- <button @click="takePhoto">
	      <span class="text">拍照上传</span>
	    </button> -->
		<button @click="convertImage">
			<span class="text">风格转换</span>
		</button>
	  </view>
	  
	  <button class= "download-button" v-if="convertedImageSrc" @click="downloadImage">
	    <span class="text">下载图片</span>
	  </button>
	</view>
</template>

<script>
export default {
  data() {
    return {
	  placeholderStyle: "font-size:26rpx",
	  easyinputStyle: {
	    color: '#2979FF',
		borderColor: '#2979FF'
	  },
      originalImage: '', // 原始图片的 Base64 数据
      originalImageSrc: '', // 原始图片本地路径
      convertedImage: '', // 转换后图片的 Base64 数据
      convertedImageSrc: '', // 转换后图片本地路径
      accessToken: '', // 百度 API 的访问令牌
      sizeOptions: ['512x512', '640x360','360x640','1024x1024','1280x720','720x1280'],  // 尺寸选项
      sizeIndex: 0, // 当前选择的风格索引
	  widthArray: [512, 640, 360, 1024, 1280, 720],
	  heightArray: [512, 360, 640, 1024, 720, 1280],
	  change_degree: 7,
	  prompt: "梵高风格，星夜旋转，色彩浓厚，梵高笔触",
	  taskId: "",
      API_KEY: 'RZsaK2LuyTbODyaFLQOrUWE6', // 请替换为你的 API_KEY
      SECRET_KEY: 'xrwhWNQOrxqqU8BSNsZkaWTLgQ5eL2rb', // 请替换为你的 SECRET_KEY
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
              const randomId = Math.random().toString(36).substr(2, 9); // 生成短随机字符串
              const saveFilePath = `${uni.env.USER_DATA_PATH}/original_image_${randomId}.jpg`;
              fileSystemManager.writeFile({
                filePath: saveFilePath,
                data: cleanedBase64,
                encoding: 'base64',
                success: () => {
                  this.originalImageSrc = saveFilePath;
				  this.convertedImage = "";
				  this.convertedImageSrc = "";
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
			  const randomId = Math.random().toString(36).substr(2, 9); // 生成短随机字符串
              const saveFilePath = `${uni.env.USER_DATA_PATH}/original_image_${randomId}.jpg`;
              fileSystemManager.writeFile({
                filePath: saveFilePath,
                data: cleanedBase64,
                encoding: 'base64',
                success: () => {
                  this.originalImageSrc = saveFilePath;
				  this.convertedImage = "";
				  this.convertedImageSrc = "";
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
    onSizeChange(e) {
      this.sizeIndex = parseInt(e.detail.value, 10);
	  // if (this.originalImage) {
		 //  this.convertImage();
	  // }
    },
	
	// 查询结果
	async queryResult() {
		try {
			const token = await this.getAccessToken();
			uni.request({
				url: `https://aip.baidubce.com/rpc/2.0/wenxin/v1/extreme/getImg?access_token=${token}`,
				method: 'POST',
				data: {
					task_id: this.taskId,
				},
				header: {
					'Content-Type': 'application/json',
				},
				success: (response) => {
					if (response.data) {
						if (response.data.data.task_status == "SUCCESS") {
							uni.hideLoading();
							console.log('查询结果成功:', response.data.data);
							uni.showToast({
								title: '转换成功',
								icon: 'success',
							});
							const image_url = response.data.data.sub_task_result_list[0].final_image_list[0].img_url;
							this.convertedImageSrc = image_url;
							console.log('转换后图片地址:', image_url);
							console.log('this.convertedImageSrc:', this.convertedImageSrc);
							
						} else{
							console.log('查询结果中:', response.data.data);
							setTimeout(() => {
								this.queryResult();
							}, 1000);
						}
					} else {
						uni.hideLoading();
						console.error('查询结果失败:', response.data.data);				
					}
				},
				fail: (err) => {
					console.error('查询结果失败:', err);
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
          url: `https://aip.baidubce.com/rpc/2.0/wenxin/v1/extreme/textToImage?access_token=${token}`,
          method: 'POST',
          data: {
			prompt: this.prompt,
			width: this.widthArray[this.sizeIndex],
			height: this.heightArray[this.sizeIndex],
            image: this.originalImage, // 发送 Base64 编码的图像数据（不带前缀）
			change_degree: this.change_degree,
          },
          header: {
            'Content-Type': 'application/json',
          },
          success: (response) => {
            if (response.data && !response.data.error_msg) {
              console.log('转换成功', response.data.data);
			  this.taskId = response.data.data.task_id;
			  console.log('task_id:', this.taskId);
			  console.log('task_id:', response.data.data.task_id);
              this.queryResult();
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
        // uni.saveImageToPhotosAlbum({
        //   filePath: this.convertedImageSrc,
        //   success: () => {
        //     uni.showToast({
        //       title: '图片已保存',
        //       icon: 'success',
        //     });
        //   },
        //   fail: () => {
        //     uni.showToast({
        //       title: '保存失败',
        //       icon: 'none',
        //     });
        //   },
        // });
		wx.getImageInfo({
		  src: this.convertedImageSrc,
		  success: res=> {
			  wx.saveImageToPhotosAlbum({
				filePath: res.path,
				success(res) {
				  wx.showToast({ title: '保存图片成功！', })
				},
				fail(err) {
				  wx.showToast({ title: '保存图片失败！', })
				}
			  })
		  },
		  fail: err => {
			console.log(err,'err')
		  }
		})
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
	page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	min-height: 100%;
	height: auto;
	/* 水平居中 */
	align-items: center;
	}

	view {
	font-size: 14px;
	line-height: inherit;
	}

	/* 最外层容器 */
	.container {
	  margin-top: 50rpx;
	}

	/* 主容器 */
	.main-container {
		margin-bottom: 40rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		border-radius: 16px;
		background-color: #252a34;
		padding-bottom: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.button-group {
	  display: flex;
	}

	/* 图片样式，确保图片自适应容器并保持比例 */
	.image-display {
	  width: 100%;
	  height: 100%;
	  object-fit: contain; /* 保持图片比例 */
	  background-color: #252a34; /* 图片未加载时的占位颜色 */
	  border-radius: 10px;
	}

	.picker {
	  background-color: #252a34;
	  color: #30e3ca;
	  padding: 10px;
	  margin: 10px 0;
	  text-align: center;
	  border-radius: 15px;
	  font-size: 16px;
	  font-weight: bold;
	}
	
	/* From www.lingdaima.com */
	button {
	 align-items: center;
	 background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
	 border: 0;
	 border-radius: 8px;
	 box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
	 box-sizing: border-box;
	 color: #FFFFFF;
	 display: flex;
	 font-family: Phantomsans, sans-serif;
	 font-size: 18px;
	 justify-content: center;
	 line-height: 1em;
	 max-width: 100%;
	 min-width: 140px;
	 padding: 3px;
	 text-decoration: none;
	 user-select: none;
	 -webkit-user-select: none;
	 touch-action: manipulation;
	 white-space: nowrap;
	 cursor: pointer;
	 transition: all .3s;
	}
	
	button:active,
	button:hover {
	 outline: 0;
	}
	
	button span {
	 background-color: rgb(5, 6, 45);
	 padding: 16px 24px;
	 border-radius: 6px;
	 width: 100%;
	 height: 100%;
	 transition: 300ms;
	}
	
	button:hover span {
	 background: none;
	}
	
	button:active {
	 transform: scale(0.9);
	}
	
	.download-button {
	  margin-top: 10px;
	}
	
	.card {
	 width: 80vw;
	 height: 100vw;
	 padding: 6px;
	 border-radius: 20px;
	 box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
	 background-image: conic-gradient(
			#488cfb,
			#29dbbc,
			#ddf505,
			#ff9f0e,
			#e440bb,
			#655adc,
			#488cfb
		);
	}
	
	.card__content {
	 background: rgb(5, 6, 45);
	 border-radius: 17px;
	 width: 100%;
	 height: 100%;
	}

	.text-box {
		width: 80vw;
		height: 40vw;
		padding: 6px;
		border-radius: 20px;
		box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
		background-image: conic-gradient(
					#488cfb,
					#29dbbc,
					#ddf505,
					#ff9f0e,
					#e440bb,
					#655adc,
					#488cfb
				);
		margin-bottom: 10px;
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
</style>
