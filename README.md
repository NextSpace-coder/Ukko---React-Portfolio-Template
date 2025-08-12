# Creative Portfolio - React Template

A modern and professional React portfolio template perfect for showcasing creative work, design projects, and professional experience. Built with React 18 and TypeScript.

## 项目类型

**Personal Portfolio Template** - A clean, modern portfolio website suitable for designers, developers, and creative professionals.

## 主要功能特性

- 响应式设计，适配各种设备
- 单页应用 (SPA) 架构
- 个人简介与技能展示
- 作品集展示与项目详情
- 服务介绍页面
- 博客功能
- 联系表单
- 平滑滚动导航
- 轮播组件支持

## 技术栈

- **前端框架**: React 18+
- **开发语言**: TypeScript
- **构建工具**: Vite
- **样式方案**: CSS + Bootstrap 5
- **路由**: React Router Dom
- **动画**: React Scroll
- **UI组件**: Reactjs Popup, Swiper
- **字体**: Poppins (@fontsource/poppins)
- **HTTP客户端**: Axios
- **数据库集成**: Supabase (基础配置)

## 项目结构

```
├── src/
│   ├── app/                    # 应用核心配置
│   │   ├── index.tsx          # 应用入口组件
│   │   └── routes.tsx         # 路由配置
│   ├── components/            # 公共组件
│   │   ├── Layout/           # 布局组件
│   │   └── Navbar/           # 导航栏组件
│   ├── pages/                 # 页面组件
│   │   ├── landing/          # 主页各个区块
│   │   │   ├── sections/     # 页面区块
│   │   │   │   ├── home/     # 首屏区块
│   │   │   │   ├── about/    # 关于区块
│   │   │   │   ├── services/ # 服务区块
│   │   │   │   ├── skills/   # 技能区块
│   │   │   │   ├── portfolio/# 作品集区块
│   │   │   │   ├── blog/     # 博客区块
│   │   │   │   └── contact/  # 联系区块
│   │   └── blog/             # 博客详情页
│   ├── data/                  # 数据文件
│   │   ├── home.json         # 首页数据
│   │   ├── about.json        # 关于数据
│   │   ├── services.json     # 服务数据
│   │   ├── skills.json       # 技能数据
│   │   ├── portfolio.json    # 作品集数据
│   │   ├── blog.json         # 博客数据
│   │   ├── contact.json      # 联系数据
│   │   └── navbar.json       # 导航数据
│   ├── assets/               # 静态资源
│   │   ├── css/             # 样式文件
│   │   └── images/          # 图片资源
│   ├── integrations/        # 第三方集成
│   │   └── supabase/        # Supabase配置
│   └── utils/               # 工具函数
└── public/                  # 公共静态文件
```

## 页面功能

- **首页 (/)**: 个人介绍、技能展示、服务简介、作品集预览
- **关于区块**: 详细个人背景、联系方式、专业技能
- **服务区块**: 提供的专业服务列表
- **作品集区块**: 项目展示和案例详情
- **博客区块**: 文章列表和内容展示
- **联系区块**: 联系表单和联系信息

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 构建生产版本
```bash
npm run build
```

## 数据配置

所有内容数据都存储在 `src/data/` 目录下的 JSON 文件中，可以轻松修改：

- `home.json` - 首页欢迎文字和姓名
- `about.json` - 个人简介、联系方式、详细描述
- `services.json` - 服务项目列表
- `skills.json` - 技能和专业程度
- `portfolio.json` - 作品集项目
- `blog.json` - 博客文章
- `contact.json` - 联系页面信息
- `navbar.json` - 导航菜单配置

## 自定义说明

### 修改个人信息
编辑 `src/data/about.json` 中的联系方式：
```json
{
  "aboutInfo": [
    {
      "title": "EMAIL",
      "link": {
        "to": "mailto:hello@example.com",
        "text": "hello@example.com"
      }
    }
  ]
}
```

### 添加作品集项目
在 `src/data/portfolio.json` 中添加新项目，并在 `src/assets/images/portfolio/` 中放置对应图片。

### 修改服务内容
编辑 `src/data/services.json` 来自定义提供的服务项目。

## 部署

项目支持多种部署方式：
- Vercel
- Netlify  
- GitHub Pages
- 传统服务器

构建后的文件位于 `dist/` 目录中。

## 浏览器支持

支持所有现代浏览器：
- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

本项目仅供学习和个人使用。