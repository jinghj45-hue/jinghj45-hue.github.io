# 黄静个人作品集 · GitHub Pages 部署版

这是完整的静态网站，包含首页、17 个作品详情、个人页、工牌组件、图片、视频和简历 PDF。无需安装依赖或构建即可部署。

## 当前仓库的自动发布方式

网站地址：https://jinghj45-hue.github.io/

本仓库使用 `Settings → Pages → GitHub Actions` 自动发布。`portfolio.zip.part01` 至 `part11` 是完整源文件包的十一个连续分卷（为满足网页上传单文件限制）。工作流 `.github/workflows/deploy.yml` 会合并、解压并发布完整网站。根目录 HTML/CSS/JS 会覆盖包内同名文件，因此直接修改这些代码后提交即可自动更新。

需要编辑图片、视频或工牌 React 源码时，在本地依次合并十一个分卷为 `portfolio.zip` 后解压，即可得到完整 `assets/` 与 `tools/`。Linux/macOS 命令：`cat portfolio.zip.part* > portfolio.zip`。Windows PowerShell 可使用 .NET FileStream 依次复制分卷内容。修改资源后重新生成完整 ZIP 和十一个分卷并提交，或改为将解压后的资源目录直接纳入 Git 并相应调整工作流。

以下是完整解压代码包的另一种部署方式，不是本仓库当前配置。

## 解压代码包部署到 GitHub Pages

1. 解压代码包。将**解压后文件夹里面的内容**放到仓库根目录，确保根目录直接包含 `index.html`、`project.html`、`personal.html` 和 `assets/`。不要只上传 ZIP 文件。
2. 创建 GitHub 仓库；个人主页仓库名可用 `你的用户名.github.io`，普通仓库名称也可以。
3. 使用 GitHub Desktop 将整个文件夹提交并推送到 `main` 分支。`.nojekyll` 文件也要上传。
4. 打开仓库 `Settings → Pages`，选择 `Deploy from a branch`，分支为 `main`，文件夹为 `/ (root)`，点击 Save。
5. 等待部署完成，通过 Pages 页面显示的链接访问。普通仓库的网址是 `https://用户名.github.io/仓库名/`。

官网说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 本地预览

安装 Node.js 后，在此目录运行 `node preview-server.cjs`，打开 `http://127.0.0.1:4174/`。个人页和视频建议通过 HTTP 预览，不直接双击 HTML 文件。

## 修改网站

- 首页布局与交互：`index.html`、`hero-entrance.js`
- 卡片顺序与作品名称：`works-data.js`
- 作品详情内容：`project.js`、`project.css`
- 个人页：`personal.html`、`personal.js`、`personal.css`
- 图片、视频和简历：`assets/`；简历文件为 `assets/resume.pdf`
- 工牌 React 源码：`tools/lanyard/src/`。修改后在 `tools/lanyard/` 执行 `npm install` 和 `npm run build`，生成根目录 `assets/personal/` 下的组件文件。现有构建文件已包含在包中，部署时无需构建。

## 压缩与资源说明

PNG 图片统一转为 WebP，保留原始尺寸与透明背景，质量参数 94；原有 WebP 仅在新文件更小时替换。视频使用 H.264 / AAC、CRF 24、faststart，保留原有比例和音频；如果转码比原文件大则保留原视频。SVG 是矢量文件，不进行有损压缩。逐文件体积记录见 `compression-report.json`。

首页滚动预览与作品卡片采用浏览器原生图片懒加载，详情页优先加载首屏展示图，其余图片接近视口时再加载。平安报告首组 3 张图优先加载，后续 9 张按需加载；图片保留尺寸占位，减少加载时的布局跳动。首页工作台立即加载，以保证入场动效。

此代码包不含原始 PNG、临时截图或 node_modules。原始网站仍保存在制作工作区，可以用于重新导出高质量资源。

首页目前使用 Tailwind 的在线样式脚本，查看网站需联网。其他本地媒体均使用相对路径，可部署在 GitHub Pages 仓库子路径。

图片视频的右键、拖拽及播放器下载入口限制已包含在代码中；静态网站仍会向浏览器提供媒体文件，这些前端限制不能阻止网络面板下载。
