# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 目录说明
```ts
.
├── App.vue
├── assets   // 图片、字体、视频等静态资源
│   └── logo.png
├── auto-imports.d.ts
├── components   // 组件列表
│   └── HelloWorld.vue
├── components.d.ts
├── composables   // hooks
├── env.d.ts
├── main.ts
├── modules
├── pages    // 页面列表，通过vite-plugin-page配置，该文件夹内的文件会自动生成路由
│   ├── [...all].vue
│   ├── index.vue
│   └── mypages
│       ├── [id].vue
│       └── about
│           ├── index.scss
│           └── index.vue
├── stores    // 状态管理
└── styles    // 样式文件
    └── main.css
```

## 功能介绍

### 插件列表
 - `vite-plugin-page`: 根据`vite.config.js`配置好的文件夹路径、指定后缀的文件自动生成的对应的路由表`routes`。
 - `vite-ssg`: 用于生成可以静态部署的代码，在`package.json`的`scripts`中将默认的`build`改为`build:ssg`。
