# 项目维护说明

核与粒子物理实验探测与分析 课程网站。基于 **Jekyll + GitHub Pages**，使用自定义主题（未使用 remote_theme / 任何远程主题）。

- 线上地址：https://yt876.github.io/Nuclear-and-Particle-Physics-Detection-and-Analysis/
- 仓库：https://github.com/yt876/Nuclear-and-Particle-Physics-Detection-and-Analysis
- 分支：`main`（推送到 main 后 GitHub Pages 自动构建，约 1 分钟）
- 本地目录：`C:\Users\lenovo\Documents\Default Project`
- 仓库由 `kevinlin1/just-the-class` 模板生成（GitHub 仓库页会显示 "generated from" 标记，无法去除，且不影响站点）

## 快速上手（发布流程）

```
git add -A
git commit -m "说明本次改动"
git -c http.sslVerify=false fetch origin
git -c http.sslVerify=false rebase origin/main
git -c http.sslVerify=false push origin main
```

- `main` 已启用分支保护：非管理员须走 PR；`enforce_admins=false`，**管理员（yt876）仍可直接推送**（会有 "Changes must be made through a pull request" 提示，属正常）。
- 本机访问 github.com 走 https 时证书常被拦截，git 命令前加 `-c http.sslVerify=false`。
- 若 shell 提示连接重置/超时，多为网络抖动，重试即可。

## 目录结构

| 路径 | 作用 |
| --- | --- |
| `_config.yml` | 站点 `title`/`description`/`lang`/`author`/`url`/`baseurl`、`plugins`、`exclude`、Bing/Google 验证码 |
| `_layouts/default.html` | 全站布局：`<head>`（SEO/主题初始化）、页头、导航、面包屑、页脚、`site.js` 引入、`style.css?v=N` |
| `assets/css/style.scss` | 全站样式（配色变量、标题层级、标签、团队卡片、知识库、深色模式、打印） |
| `assets/js/site.js` | 全站交互：深色模式切换、面包屑打印、悬浮目录/上一章下一章/返回顶部 |
| `assets/js/knowledge.js` | 知识库搜索与筛选（`knowledge.json?v=N`） |
| `assets/data/knowledge.json` | 学科知识库数据（教材条目） |
| `assets/images/course-logo.svg` | 课程 logo（favicon 同用） |
| `assets/images/buaa-logo.png` | 北航字标（页头右侧） |
| `assets/images/team/*.jpg` | 教学团队照片 |
| `assets/katex/` | 本地内置 KaTeX（公式渲染，**勿删**） |
| `robots.txt` | 指向 `sitemap.xml`（由 `jekyll-sitemap` 生成） |
| `README.md` | **仅仓库主页**（已 `exclude`，不参与站点构建） |
| `Gemfile` / `.gitignore` | 构建依赖与忽略规则 |

## 页面清单（Markdown，均无 front matter，标题取第一行 `#`）

| 文件 | URL | 说明 |
| --- | --- | --- |
| `index.md` | `/` | 课程主页（概述/师资/目标与先修/参考书目/课程大纲/考核说明/学习资源） |
| `Syllabus.md` | `/Syllabus.html` | 课程安排（学时、时间地点、实验安排、教学与考核、课件下载） |
| `coursework.md` | `/coursework.html` | 课程作业（总览表 + 各章作业） |
| `experiment.md` | `/experiment.html` | 课程实验 |
| `programming.md` | `/programming.html` | ROOT 入门 |
| `montecarlo.md` | `/montecarlo.html` | 蒙卡模拟 |
| `tools.md` | `/tools.html` | 软件工具（ROOT/Geant4/TRIM/LISE++/Linux） |
| `reference.md` | `/reference.html` | 学习资料（核素图与核数据等，持续补充） |
| `knowledge.md` | `/knowledge.html` | 学科知识库（加载本地 KaTeX + `knowledge.js`） |
| `faq.md` | `/faq.html` | 常见问题 |
| `discussion.md` | `/discussion.html` | 讨论留言（giscus） |

## 全站约定

- **无 front matter**：页面标题取首行 `#`；插件在 `_config.yml` 的 `plugins` 显式声明（`jekyll-optional-front-matter`、`jekyll-readme-index`、`jekyll-titles-from-headings`、`jekyll-relative-links`、`jekyll-sitemap`）。
- **缓存版本号（改后 +1）**：
  - 样式：`_layouts/default.html` 中 `style.css?v=9`
  - 知识库数据：`assets/js/knowledge.js` 中 `knowledge.json?v=3`
  - 团队照片：`index.md` 中 `*.jpg?v=2`
- **标题层级**：h1 页面标题；h2 一级板块；h3 章节/二级；h4 三级知识点（样式在 style.scss）。
- **属性标签**：`tag-meta`(学分)、`tag-lab`(实验)、`tag-self`(自学)、`tag-extra`(拓展)、`tag-required`(必学)；章末思考题用 `<p class="chapter-think">本章思考题</p>`。
- **深色模式**：`<html data-theme="dark">` + `site.js` 切换（localStorage 记忆），深色覆盖样式在 style.scss 的 `[data-theme="dark"]`。
- **面包屑/打印**：布局按 `page.url` 生成面包屑（首页除外）并输出 `BreadcrumbList` JSON-LD；「打印本页」按钮 + `@media print`。
- **悬浮目录**：`site.js` 依据 h2/h3/h4 生成右侧目录（≥1640px 显示）、上一章/下一章、返回顶部。
- `baseurl` 必须与仓库名一致（`/Nuclear-and-Particle-Physics-Detection-and-Analysis`），否则资源 404。

## 常见修改

- **站名 / 英文名 / 页脚**：`_layouts/default.html`；浏览器标签标题：`_config.yml` 的 `title`；首页大标题/副标题：`index.md` 开头。
- **导航菜单**：`_layouts/default.html` 的 `<nav class="site-nav">`，每项一个 `<a>`；新增页面时同步新建 `xxx.md`。
- **配色/背景/标题/标签**：`assets/css/style.scss` 顶部 `:root` 与相关区块；改完把 `style.css?v=N` 的 N +1。
- **教学团队**：名单与链接在 `index.md` 的 `<div class="team-grid">`；换照片替换 `assets/images/team/` 并 +1 `?v`。
- **课程大纲分栏**：`index.md` 的 `<div class="course-columns" markdown="1">…</div>`（窄屏自动单列）。
- **课程作业**：`coursework.md`，总览表 + `### 作业 N` 结构。

## 知识库维护

编辑 `assets/data/knowledge.json`（数组），条目字段：

```json
{
  "term": "术语名",
  "en": "English",
  "category": "公式",
  "chapter": "第6章 辐射与物质的相互作用",
  "source": "核辐射物理及探测学",
  "keywords": ["关键词1", "关键词2"],
  "summary": "一句话解释。",
  "formula": "$$ ... $$",
  "detail": "<p>详解 / 推导 / 考点，可含 HTML 与 LaTeX。</p>"
}
```

- `category`：概念 / 术语 / 公式 / 理论 / 推导 / 方法 / 考点 / 总结 / 工具
- `chapter`：教材章节名（如 `第6章 辐射与物质的相互作用`）；非教材内容用 `课程补充`
- `source`：教材条目 `核辐射物理及探测学`；课程补充 `课程补充`
- `formula`、`detail` 可省略；`detail` 允许 `<p> <ul> <ol> <li> <table>` 等 HTML
- 公式用 LaTeX：行间 `$$...$$`、行内 `\(...\)`，由本地 KaTeX 渲染
- 正文中的 `<`、`>`、`&` 写成 `&lt;`、`&gt;`、`&amp;`（数学段内同理），避免 innerHTML 解析出错
- 改完把 `knowledge.js` 里 `knowledge.json?v=N` 的 N +1

## SEO / 收录

- `_layouts/default.html` 头部：`title`、`description`、`author`、`keywords`、`robots`、`canonical`、Open Graph、Twitter 卡片、`Course` 与 `BreadcrumbList` JSON-LD；各页 description 在 layout 中按 `page.url` 映射。
- `sitemap.xml` 由 `jekyll-sitemap` 生成；`robots.txt` 指向它。
- 站点验证：`_config.yml` 的 `bing_verification`、`google_verification`（留空则不输出对应 meta）。
- 收录进度：Bing/Google 已加验证，需在站长后台**提交 sitemap** 并请求抓取；收录需时间。百度因 `github.io` 主域配额限制无法添加，需绑定**自有域名**。
- 可优化项：`og:image` 现为 SVG logo，社交预览建议换 **1200×630 PNG**；README 可加**网站预览截图**。

## 协作与安全

- 仓库公开；`main` 已启用分支保护：要求 PR + 1 审批（过时审批自动失效）、要求解决对话、禁止强推与删除分支；`enforce_admins=false`，管理员仍可直接推送。
- 协作者按最小权限添加：内容维护 → Write；审阅/分类 → Triage；只读 → Read；尽量不给 Admin。
- Actions 仅允许 GitHub 官方与已验证 Action；外部贡献者的 fork PR 需审批。
- 已开启 Secret 扫描（含 push protection）、漏洞警报与 Dependabot 安全更新。
- 本地 git/gh 已改用**细粒度 PAT**（通过 `gh auth setup-git` 让 git 复用），并清理了旧凭据；账号**建议开启 2FA**。
- 仓库公开，**不要**提交未公开试题答案、学生个人信息、成绩等敏感内容。

## 当前状态与后续可做（Roadmap）

**已完成**：站点框架与 11 个页面、教学团队、课程大纲（标签化）、知识库 541 条、SEO/收录基础设施、深色模式、面包屑、打印、悬浮目录、协作安全加固。

**待补充内容（由课程团队提供后我方可续加）**：
- 课程安排：成绩构成百分比、实验排期具体时间
- 课件下载：上传课件链接
- 课程作业：第 4–8 章题目（第 2、3 章已发布）
- 学习资料：更多在线资源/文献（现有「核素图与核数据」）
- 常见问题：按实际完善答案

**可选增强**：
- `og:image` 换 1200×630 PNG；README 加预览截图
- 全站关键词搜索页；页面间更多「相关页面」互链
- 图片压缩/WebP；绑定自定义域名以获得更稳定访问与百度收录

## 注意事项

- 页面 Markdown 无 front matter，标题取第一行 `#`。
- `assets/katex/` 为公式渲染依赖，请勿删除。
- 讨论留言使用 giscus（GitHub Discussions，分类 `Announcements`，repoId/categoryId 在 `discussion.md`）；删评论需到 Discussions 操作。
- 本地预览需 Ruby + Jekyll：`bundle install` 后 `bundle exec jekyll serve`，打开 http://localhost:4000/Nuclear-and-Particle-Physics-Detection-and-Analysis/ 。
