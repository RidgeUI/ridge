# 社区版本下载与安装

## 准备工作

### 前提条件

服务运行要求NodeJS框架， 请首先下载并安装(https://nodejs.org/zh-cn/download/) 版本最低要求为维护版本(LTS 目前为>v18.20.5)

### 下载社区版本  


## 运行及配置

解压后目录结构如下

```
node_modules
public
boot.js
config.js
package.json
start.bat
```

在根目录执行： 
windows:
> start.bat 

linux: 
> node ./boot.js

linux下使用pm2保活启动： (需要先 npm i -g pm2 安装pm2守护进程)
>pm2 start ecosystem.config.js

## 服务配置

```javascript
module.exports = {
  serverRootDir: path.resolve(__dirname, '../../../'),
  api: '/api',
  port: 8088,  // http端口 
  httpsPort: 8083, // https端口
  httpsKey: path.resolve(__dirname, './ssl/localhost.key'),   // https密钥
  httpsCert: path.resolve(__dirname, './ssl/localhost.crt'),  // https证书
  // 启用CORS 默认启用
  cors: {
    credentials: true
  },
  npmRegistry: 'https://registry.npmmirror.com', // NPM镜像站, 因为官方经常无法连接，所以这里读取信息时，更多走这个站点
  npmDeliveryUrl: 'https://unpkg.com', // NPM 分发站地址
  public: path.resolve(__dirname, '../../../public'), // http的公开目录
  npmHomeDir: 'npm', // 安装npm包的目录,目录相对于public的路径
  packages: [] // 模块列表，按序启动
}
```
