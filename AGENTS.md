# 项目维护说明

核与粒子物理实验探测与分析 课程网站。基于 **Jekyll + GitHub Pages**，使用自定义主题（未使用 remote_theme）。

- 线上地址：https://yt876.github.io/Nuclear-and-Particle-Physics-Detection-and-Analysis/
- 仓库：https://github.com/yt876/Nuclear-and-Particle-Physics-Detection-and-Analysis
- 分支：`main`（推送到 main 后 GitHub Pages 自动构建，约 1 分钟）
- 本地目录：`C:\Users\lenovo\Documents\Default Project`

## 目录结构

| 路径 | 作用 |
| --- | --- |
| `_config.yml` | 站点 `title`、`description`、`url`、`baseurl` |
| `_layouts/default.html` | 全站布局：页头（课程 logo、站名、北航 logo）、导航、页脚、样式表版本号 |
| `assets/css/style.scss` | 全站样式（配色变量、团队卡片、知识库、两列课程内容等） |
| `assets/images/course-logo.svg` | 课程 logo（favicon 同用） |
| `assets/images/buaa-logo.png` | 北航字标（页头右侧） |
| `assets/images/team/*.jpg` | 教学团队照片 |
| `assets/data/knowledge.json` | 学科知识库数据（概念/公式） |
| `assets/js/knowledge.js` | 知识库搜索与筛选逻辑 |
| `assets/katex/` | 本地内置 KaTeX（公式渲染，**勿删**） |
| `Gemfile` / `.gitignore` | 构建与忽略规则 |

页面均为 Markdown（**无 front matter**，标题取第一行 `#`）：

- `index.md` — 课程主页（Jekyll 用它生成首页）
- `Syllabus.md` — 课程安排
- `coursework.md` — 课程作业
- `experiment.md` — 课程实验
- `programming.md` — ROOT 入门
- `montecarlo.md` — 蒙卡模拟
- `reference.md` — 学习资料
- `knowledge.md` — 学科知识库
- `discussion.md` — 讨论留言

## 常见修改

### 改站名 / 英文名 / 页脚
- 站名、英文名、页脚：`_layouts/default.html`
- 浏览器标签页标题：`_config.yml` 的 `title`
- 首页大标题与副标题：`index.md` 开头

### 增删导航菜单
- 编辑 `_layouts/default.html` 的 `<nav class="site-nav">`，每项一个 `<a>`
- 新增页面时同步新建 `xxx.md`，链接写 `{{ '/xxx.html' | relative_url }}`

### 改配色 / 背景 / 样式
- 主色、背景、卡片色：`assets/css/style.scss` 顶部 `:root`（`--accent`、`--page`、`--paper` 等）
- **改完样式务必把** `_layouts/default.html` 里 `style.css?v=N` 的 `N` 加 1（避免浏览器缓存旧样式）

### 教学团队
- 名单与链接：`index.md` 的 `<div class="team-grid">`
- 换照片：替换 `assets/images/team/` 下对应文件，并把 `index.md` 中图片链接的 `?v=N` 加 1

### 更新知识库
- 编辑 `assets/data/knowledge.json`，条目格式：

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

- `category` 取值：概念 / 术语 / 公式 / 理论 / 推导 / 方法 / 考点 / 总结 / 工具
- `chapter` 用教材章节名（如 `第6章 辐射与物质的相互作用`）；非教材内容用 `课程补充`
- `source` 教材条目为 `核辐射物理及探测学`，课程补充为 `课程补充`
- `formula`、`detail` 均可省略；`detail` 允许 `<p> <ul> <ol> <li> <table>` 等 HTML 片段
- 公式用 LaTeX：行间 `$$...$$`、行内 `\(...\)`，由本地 KaTeX 渲染
- 正文中的 `<`、`>`、`&` 需写成 `&lt;`、`&gt;`、`&amp;`（数学段内同理），避免 innerHTML 解析出错
- 更新后把 `assets/js/knowledge.js` 里 `knowledge.json?v=N` 的 `N` 加 1

### 课程内容分栏
- 结构：`index.md` 的 `<div class="course-columns" markdown="1">…</div>`
- 样式：`assets/css/style.scss` 的 `.course-columns`（窄屏自动单列）

## 本地预览（可选）

需先安装 Ruby + Jekyll：

```
bundle install
bundle exec jekyll serve
```

打开 http://localhost:4000/Nuclear-and-Particle-Physics-Detection-and-Analysis/

## 发布

```
git add -A
git commit -m "说明本次改动"
git push
```

推送到 `main` 后 GitHub Pages 自动构建。

## 注意事项

- 页面 Markdown 无 front matter，标题取第一行 `#`；插件在 `_config.yml` 的 `plugins` 中显式声明（`jekyll-optional-front-matter`、`jekyll-readme-index`、`jekyll-titles-from-headings`、`jekyll-relative-links`、`jekyll-sitemap`，均由 `github-pages` gem 提供）
- SEO：`_layouts/default.html` 头部含 description/keywords/canonical/Open Graph/Twitter 卡片与 JSON-LD，各页描述在 layout 中按 `page.url` 映射；`robots.txt` 指向 `sitemap.xml`（由 `jekyll-sitemap` 生成）
- `baseurl` 必须与仓库名一致（`/Nuclear-and-Particle-Physics-Detection-and-Analysis`），否则资源 404
- `assets/katex/` 是公式渲染依赖，请勿删除
- 本机通过 https 访问 GitHub 时若报证书错误，可在 git 命令前临时加 `-c http.sslVerify=false`
- 讨论留言使用 giscus（GitHub Discussions，分类 `Announcements`）；首次需在仓库安装 giscus App，之后在 Discussions 内审核/删除评论
