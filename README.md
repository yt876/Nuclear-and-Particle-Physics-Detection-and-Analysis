# 核与粒子物理实验探测与分析

*Detection and Analysis in Nuclear and Particle Physics Experiments*

## 课程简介

本课程围绕核辐射探测技术展开，讲授射线与物质相互作用、气体 / 闪烁 / 半导体探测器（配套实验）、核实验测量与电子学；学习 ROOT 数据分析、Geant4 等仿真；介绍医学诊疗与空天探测应用，培养核技术方向科研实践能力。

## 教学团队

<div class="team-grid">
  <a class="team-card" href="https://physics.buaa.edu.cn/info/1265/4767.htm" target="_blank" rel="noopener">
    <img class="team-photo" src="assets/images/team/sunbaohua.jpg?v=2" alt="孙保华">
    <span class="team-name">孙保华 教授</span>
    <span class="team-honor">杰青</span>
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

## 学习目标与预修课程

1. 掌握辐射防护、核统计规律以及射线与物质相互作用等基础知识，理解各类粒子探测器的物理工作基础，建立核实验安全意识。
2. 熟悉气体、闪烁体、半导体探测器的工作原理、性能特点，理解核探测读出电子学与数据获取系统，掌握能谱、符合时间测量以及粒子鉴别等实验技术。
3. 能够运用 Linux、ROOT 工具开展核实验离线数据分析，初步掌握核实验数据处理的基本方法。
4. 了解蒙特卡罗模拟思想以及 GEANT4、TRIM 等仿真软件，建立利用模拟手段研究探测器性能的科研思维。
5. 认识核探测技术在医学诊疗、空天探测等领域的工程应用；理清核物理实验完整研究流程，培养严谨求实的科研素养，为本方向后续科研工作奠定基础。


## 参考书

- W. R. Leo, *Techniques for Nuclear and Particle Physics Experiments*, 2nd ed., Springer-Verlag, 1994.
- G. F. Knoll, *Radiation Detection and Measurement*, 4th ed., Wiley, 2010.
- H. Kolanoski and N. Wermes, *Particle Detectors: Fundamentals and Applications*, Oxford University Press, 2020.
- 《原子核物理实验方法（上册）》，第三版，原子能出版社。
- 《粒子探测技术》。

## 课件下载

[课堂讲义下载](https://disk.pku.edu.cn/link/AAB4A94F4129A248368FAFB8E3EA133267)（提取码：`exp_xxxx`）

## 课程内容

### 第一章　射线与物质的相互作用

1. 重带电粒子与物质的相互作用
2. 电子与物质的相互作用
3. γ 射线与物质的相互作用
4. 中子与物质的相互作用

### 第二章　放射性测量中的统计学

1. 二项分布、Poisson 分布和 Gaussian 分布
2. 事件的时间间隔分布
3. 中心极限定理
4. 误差传播
5. 参数估计：最大似然法和最小二乘法

### 第三章　探测器信号的一般特征

1. 脉冲信号形成
2. 核探测器等效电路与 RC 电路
3. 能量分辨率与时间分辨率
4. 探测效率

### 第四章　气体探测器

1. 气体电离和传输过程
2. 雪崩放大机制与气体探测器工作区
3. 电离室、正比室、MWPC 与 PPAC
4. 漂移室与 TPC
5. MSGC、MGC 与 GEM

### 第五章　闪烁探测器

1. 闪烁体探测器的一般特性
2. 无机闪烁体和有机闪烁体
3. 脉冲形状甄别
4. 光电倍增管
5. 切伦科夫辐射与粒子鉴别

### 第六章　半导体探测器

1. PN 结与耗尽层
2. 硅探测器和高纯锗探测器
3. 位置灵敏探测器
4. 半导体光敏元件

### 第七章　核电子学

1. 傅里叶变换、带宽与阻抗
2. 同轴电缆中的信号传输、反射与阻抗匹配
3. 前置放大器、主放大器与 ADC
4. 时间甄别方法与 TDC
5. 符合测量

### 第八章　数据获取系统

1. 数据获取系统的基本组成
2. 触发与基本触发逻辑
3. VME 系统
4. 实验应用实例：<sup>14</sup>O 破裂截面测量实验

### 第九章　探测器信号的数字化处理

1. 数字化与混叠误差
2. Nyquist 采样定理与 Flash ADC
3. FPGA 与数字化算法
4. 能量信号：梯形滤波算法
5. 时间信号：CFD、采样相位偏移、DAC 与 up-sampling
6. 波形信号处理：脉冲形状甄别与 pile-up 分析

### 第十章　Accelerators for Nuclear Physics

1. 离子源与束流产生
2. 静电加速器、回旋加速器、直线加速器、同步加速器
3. 束流光学：磁刚度、偶极磁铁、四极磁铁、传输矩阵
4. 放射性离子束：In-flight、ISOL、磁分离器
5. 加速器应用：中子源、对撞机、同步辐射

## 教学安排

各章学时、上课时间和考核方式见[课程安排](Syllabus.html)。

## 课程作业与学习资料

- [课程作业](coursework.html)
- [编程与 ROOT 入门](programming.html)
- [学习资料与实例](reference.html)
