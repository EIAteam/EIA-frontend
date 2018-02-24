# EIA-frontend
> The frontend of EIA project,which use vue.js,vue-element-admin

> # content

```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── icons                  // 项目所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```
---

> # tips

1. ensure nodejs is installed

2. ensure cnpm has been set up

3. installed dependencise
```
 E:\GitHub\EIA-frontend> cnpm install --save-dev
```

4. run it for test
```
 E:\GitHub\EIA-frontend> npm run dev
```

5. if you want to publish it
```
E:\GitHub\EIA-frontend> npm run build
```

6. set the api url in _config/dev.env.js_ and _config/prod.env.js_