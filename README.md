# 核与粒子物理实验探测与分析

*Detection and Analysis in Nuclear and Particle Physics Experiments*

👉 在线课程网站：https://yt876.github.io/Nuclear-and-Particle-Physics-Detection-and-Analysis/

## 课程概述

本课程围绕核辐射探测技术展开，讲授射线与物质相互作用、气体 / 闪烁 / 半导体探测器（配套实验）、核实验测量与电子学；学习 ROOT 数据分析、Geant4 等仿真；介绍医学诊疗与空天探测应用，培养核技术方向科研实践能力。

## 师资团队

<div class="team-grid">
  <a class="team-card" href="https://physics.buaa.edu.cn/info/1265/4767.htm" target="_blank" rel="noopener">
    <img class="team-photo" src="assets/images/team/sunbaohua.jpg?v=2" alt="孙保华">
    <span class="team-name">孙保华 教授</span>
    <span class="team-honor">杰青 · 课程负责人</span>
  </a>
  <a class="team-card" href="https://physics.buaa.edu.cn/info/1265/3155.htm" target="_blank" rel="noopener">
    <img class="team-photo" src="assets/images/team/zhouxiaopeng.jpg?v=2" alt="周小朋">
    <span class="team-name">周小朋 教授</span>
    <span class="team-honor">青年长江</span>
  </a>
  <a class="team-card" href="https://physics.buaa.edu.cn/info/1265/3152.htm" target="_blank" rel="noopener">
    <img class="team-photo" src="assets/images/team/yuanli.jpg?v=2" alt="袁丽">
    <span class="team-name">袁丽 教授</span>
    <span class="team-honor">青年拔尖</span>
  </a>
</div>

## 目标与先修

### 课程目标

1. 掌握辐射防护、核统计规律以及射线与物质相互作用等基础知识，理解各类粒子探测器的物理工作基础，建立核实验安全意识。
2. 熟悉气体、闪烁体、半导体探测器的工作原理、性能特点，理解核探测读出电子学与数据获取系统，掌握能谱、符合时间测量以及粒子鉴别等实验技术。
3. 能够运用 Linux、ROOT 工具开展核实验离线数据分析，初步掌握核实验数据处理的基本方法。
4. 了解蒙特卡罗模拟思想以及 Geant4、TRIM 等仿真软件，建立利用模拟手段研究探测器性能的科研思维。
5. 认识核探测技术在医学诊疗、空天探测等领域的工程应用；理清核物理实验完整研究流程，培养严谨求实的科研素养，为本方向后续科研工作奠定基础。

### 先修要求

下列内容仅为学习建议，**不作硬性要求**；没有全部先修也完全不影响选课与学习。

- 大学物理、原子物理、量子力学等物理基础；
- 高等数学、概率论与数理统计；
- 一门程序设计语言（C++ 或 Python）的基础。

> 课程氛围轻松、注重物理直觉与动手实践，零基础也无需担心——我们会提供必要的背景补充与工具入门，欢迎带着兴趣来。

## 参考书目

### 核心必读

- *Techniques for Nuclear and Particle Physics Experiments: A How-to Approach*, William R. Leo, Springer
- 核辐射物理及探测学，陈伯显、张智，哈尔滨工程大学出版社

### 拓展阅读

**中文**

- 原子核物理实验方法（修订第三版），吴治华等主编，原子能出版社
- 核辐射探测器，丁洪林，哈尔滨工程大学出版社
- 核与粒子物理实验方法，李澄，科学出版社
- 粒子探测器与数据获取，谢一冈等，科学出版社
- 粒子探测技术，汪晓莲等，中国科技大学出版社
- 实验物理中的概率和统计，朱永生，科技出版社
- 高能物理数据分析，朱永生、刘福安 译，中国科技大学出版社
- 原子核物理，卢希庭，原子能出版社

**英文**

- *Radiation Detection and Measurement*, Glenn F. Knoll, Wiley
- *Experimental Techniques in Nuclear and Particle Physics*, Stefaan Tavernier, Springer
- *Practical Gamma-Ray Spectrometry*, Gilmore and Hemingway, Wiley
- *Signal Processing for Radiation Detectors*, Mohammad Nakhostin, Wiley

## 课程大纲

<div class="course-columns" markdown="1">

### 第0章 绪论 <span class="tag-meta">1学分</span>

### 第1章 辐射防护基础 <span class="tag-meta">2学分</span> <span class="tag-self">含自学</span>

1. 辐射来源
2. 防护计算方法
3. 自学模块

<p class="chapter-think">本章思考题</p>

### 第2章 统计分布规律 <span class="tag-meta">3学分</span>

1. 核与粒子基础知识
2. 统计分布规律
3. 误差处理

<p class="chapter-think">本章思考题</p>

### 第3章 射线与物质相互作用 <span class="tag-meta">9学分</span> <span class="tag-lab">实验</span>

1. 总览：射线、物质与相互作用
2. 带电粒子与物质的相互作用
3. γ 射线与物质的相互作用
4. 中子与物质的相互作用

<p class="chapter-think">本章思考题</p>

### 第4章 气体探测器 <span class="tag-meta">4学分</span> <span class="tag-lab">实验</span>

1. 带电粒子与气体作用
2. 典型气体探测器
   - 电离室
   - 正比计数器
3. 拓展：信号成型过程

<p class="chapter-think">本章思考题</p>

### 第5章 闪烁体探测器 <span class="tag-meta">4学分</span> <span class="tag-lab">实验</span>

1. 工作原理
2. 闪烁体
3. 光电读出设备
4. 最新进展及应用

<p class="chapter-think">本章思考题</p>

### 第6章 半导体探测器 <span class="tag-meta">3学分</span> <span class="tag-lab">实验</span>

1. PN 结原理
2. 硅半导体与 HPGe 半导体
3. 最新进展及应用

<p class="chapter-think">本章思考题</p>

### 第7章 能谱测量 <span class="tag-meta">3学分</span>

1. 基本概念：能谱、能量分辨
2. 带电粒子能谱测量及分析
3. γ 射线能谱测量及分析

<p class="chapter-think">本章思考题</p>

### 第8章 符合方法与时间测量 <span class="tag-meta">3学分</span>

1. 基本概念及应用举例
2. 时间测量方法
3. 拓展：径迹测量

<p class="chapter-think">本章思考题</p>

### 第9章 粒子鉴别 <span class="tag-meta">3学分</span>

1. 粒子电荷鉴别
2. 质荷比（A/Z）鉴别
3. 综合实例

### 第10章 电子学及信号处理过程 <span class="tag-meta">3学分</span>

1. 探测器信号及噪声
2. 不同探测器信号
3. 能量通道与时间通道信号处理
4. 辅助设备：高压、光缆、三通、示波器等
5. 数据获取系统

### 第11章 ROOT 数据分析 <span class="tag-meta">12学分</span>

1. Linux 系统基本命令与 C++ 简单编程
2. ROOT 基本操作
3. ROOT 数据分析
4. ROOT 数据分析实例介绍

### 第12章 探测器模拟与 Geant4 <span class="tag-meta">12学分</span>

- 带电离子在物质中的能损、射程
- 电子能损、射程：TRIM
- 束流光学模拟：LISE++、MOCADI、GICOSY
- 综合系统模拟：Geant4

### 第13章 应用专题 <span class="tag-meta">5学分</span>

1. 医学诊疗
2. 空天探测

### 第14章 总结 <span class="tag-meta">1学分</span>

</div>

## 考核说明

课程考核由**平时成绩**与**期末笔试**结合构成；各章学时、上课时间与地点见[课程安排](Syllabus.html)。教学以理论授课为主，部分内容结合演示实验与上机实践。

## 学习资源

<div class="resource-grid">
  <a class="resource-card" href="coursework.html">
    <span class="resource-title">平时作业</span>
    <span class="resource-desc">各章思考题与上机作业</span>
  </a>
  <a class="resource-card" href="experiment.html">
    <span class="resource-title">实验指导</span>
    <span class="resource-desc">配套实验的目的、原理、步骤与报告要求</span>
  </a>
  <a class="resource-card" href="tools.html">
    <span class="resource-title">软件工具</span>
    <span class="resource-desc">ROOT、Geant4、TRIM/SRIM、LISE++、Linux 入门</span>
  </a>
  <a class="resource-card" href="Syllabus.html#课件下载">
    <span class="resource-title">课件讲义</span>
    <span class="resource-desc">课程课件与讲义下载</span>
  </a>
</div>
