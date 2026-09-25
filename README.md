# 核与粒子物理实验探测与分析

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-brightgreen)
![Jekyll](https://img.shields.io/badge/Jekyll-4.x-blue)

👉 在线课程网站：https://yt876.github.io/Nuclear-and-Particle-Physics-Detection-and-Analysis/

北京航空航天大学《核与粒子物理实验探测与分析》课程网站源码（Jekyll + GitHub Pages，自定义主题）。

## 课程定位与适合人群

面向核物理、粒子物理、医学物理及相关专业的本科生：系统讲解射线与物质相互作用、气体 / 闪烁 / 半导体探测器原理、核电子学与数据获取、能谱与符合测量，并配套 ROOT 数据分析、蒙特卡罗模拟与实验训练。课程门槛友好，零基础亦可入门，也欢迎对核探测技术感兴趣的读者参考。

## 网站内容

- [课程主页](https://yt876.github.io/Nuclear-and-Particle-Physics-Detection-and-Analysis/)：课程概述、师资团队、目标与先修、课程大纲、学习资源
- 课程安排 / 课程作业 / 课程实验 / ROOT 入门 / 蒙卡模拟 / 软件工具 / 学习资料 / 学科知识库 / 常见问题 / 讨论留言

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `index.md` | 课程主页 |
| `Syllabus.md` `coursework.md` `experiment.md` | 课程安排 / 作业 / 实验 |
| `programming.md` `montecarlo.md` `tools.md` | ROOT 入门 / 蒙卡模拟 / 软件工具 |
| `reference.md` `knowledge.md` `faq.md` `discussion.md` | 学习资料 / 知识库 / 常见问题 / 讨论 |
| `_layouts/default.html` | 全站布局（含 SEO 与主题） |
| `assets/css/style.scss` | 全站样式 |
| `assets/js/site.js` `assets/js/knowledge.js` | 全站交互 / 知识库搜索 |
| `assets/data/knowledge.json` | 学科知识库数据 |
| `assets/katex/` | 本地 KaTeX（公式渲染，请勿删除） |

## 技术栈

- Jekyll（`github-pages` gem）+ 自定义主题
- 本地 KaTeX 渲染公式
- Giscus（GitHub Discussions）评论区
- 内置 SEO：sitemap、robots、canonical、Open Graph、JSON-LD、面包屑

## 本地预览

```
bundle install
bundle exec jekyll serve
```

打开 http://localhost:4000/Nuclear-and-Particle-Physics-Detection-and-Analysis/

## 说明

课程内容与页面由课程团队整理；公式渲染使用 KaTeX，评论区使用 Giscus。
