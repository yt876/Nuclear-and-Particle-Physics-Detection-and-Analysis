# 学习资料与实例

按主题列出补充实例与参考文献。作业题目见[课程作业](coursework.html)，ROOT 基础操作见 [ROOT 入门](programming.html)。

## 辐射与物质的相互作用

### 实例

- Gamma Spectrum Features：γ 能谱中常见结构的图示（材料准备中）。

### 参考文献

1. B. Davin et al., “LASSA: a large area silicon strip array for isotopic identification of charged particles,” *Nucl. Instrum. Methods A* **473**, 302–318 (2001).
2. M. S. Wallace et al., “The high resolution array (HiRA) for rare isotope beam experiments,” *Nucl. Instrum. Methods A* **583**, 302–312 (2007).
3. S. Takeuchi et al., “DALI2: A NaI(Tl) detector array for measurements of γ rays from fast nuclei,” *Nucl. Instrum. Methods A* **763**, 596–603 (2014).
4. F. M. Marqués et al., “Detection of neutron clusters,” *Phys. Rev. C* **65**, 044006 (2002).
5. F. M. Marqués et al., “On the possible detection of 4n events in the breakup of 14Be,” arXiv:nucl-ex/0504009 (2005).
6. K. Kisamori et al., “Candidate Resonant Tetraneutron State Populated by the ⁴He(⁸He,⁸Be) Reaction,” *Phys. Rev. Lett.* **116**, 052501 (2016).
7. M. Duer et al., “Observation of a correlated free four-neutron system,” *Nature* **606**, 678–682 (2022).

## 统计与拟合

### 统计方法与拟合实例

**统计过程与计数**

- 源和本底测量时间的分配（材料准备中）。

**拟合教程**

建议在学习参数估计后阅读。以下为 ROOT 官方拟合文档，提供可运行的示例与结果。

1. [TF1：拟合函数与参数估计](https://root.cern/doc/master/classTF1.html)：从 weighted least squares 与 Gaussian 峰入手，学习直方图拟合、参数与误差、拟合优度与稳定性。
2. [RooFit 用户手册](https://root.cern/manual/roofit/)：从归一化 PDF 与数据集入手，学习 workspace、signal + background、binned / unbinned 与 extended likelihood、profile 与 simultaneous fit。

常规 ROOT Fit 用 `TF1` 直接描述 histogram 或 graph 的拟合函数；RooFit 用 PDF、组分与数据集组织概率模型。区别主要在模型组织方式，不是分别对应 least squares 和 maximum likelihood。

**专题查阅**

- 少计数与高计数样本中的 likelihood / least-squares 比较（材料准备中）。
- 加权拟合与拟合结果的误差传播（材料准备中）。

### 参考文献

1. K. Morita et al., “New Result in the Production and Decay of an Isotope, ²⁷⁸113, of the 113th Element,” *J. Phys. Soc. Jpn.* **81**, 103201 (2012). 少计数事件与本底概率。
2. D. S. Ahn et al., “Location of the Neutron Dripline at Fluorine and Neon,” *Phys. Rev. Lett.* **123**, 212501 (2019). 未观测到事件时的统计推断。
3. C. B. Hinke et al., “Superallowed Gamow–Teller decay of the doubly magic nucleus ¹⁰⁰Sn,” *Nature* **486**, 341–345 (2012). 衰变数据的参数估计。
4. T. Zheng et al., “Study of halo structure of ¹⁶C from reaction cross section measurement,” *Nucl. Phys. A* **709**, 103–118 (2002). 截面测量与系统误差。

## 探测器信号特征

- 探测器电流与 RC 电路的输出脉冲（材料准备中）。

## 气体探测器

### 栅极电离室（GIC）

1. 信号形成与模拟：α 径迹、感应电流与电荷、前放响应、能量—角度关联与波形累积图（材料准备中）。
2. 实验波形、成型与物理量提取：原始与滤波波形、成型与定时、阴极—阳极关联、角度选择及实验—模拟比较（材料准备中）。

### 参考文献

1. A. Göök et al., “[Application of the Shockley–Ramo theorem on the grid inefficiency of Frisch grid ionization chambers](https://doi.org/10.1016/j.nima.2011.10.052),” *Nucl. Instrum. Methods A* **664**, 289–293 (2012).
2. J. Liu et al., “[The impacts of the ballistic deficit and electron attachment on the pulse shapes of the Frisch-grid ionization chamber](https://doi.org/10.1016/j.nima.2021.165751),” *Nucl. Instrum. Methods A* **1014**, 165751 (2021).
3. J. Liu et al., “[Improved method to measure the electron drift velocity using the Frisch-grid ionization chamber](https://doi.org/10.1016/j.nima.2021.165363),” *Nucl. Instrum. Methods A* **1004**, 165363 (2021).
4. J. Liu et al., “[Research on the electron attachment of oxygen using a Frisch-grid ionization chamber](https://doi.org/10.1016/j.nima.2021.165669),” *Nucl. Instrum. Methods A* **1013**, 165669 (2021).
5. H. Kumagai et al., “Development of Parallel Plate Avalanche Counter (PPAC) for BigRIPS fragment separator,” *Nucl. Instrum. Methods B* **317**, 717–727 (2013).

## 讨论与留言

有疑问或想法？请到[讨论留言](discussion.html)区留言讨论。
