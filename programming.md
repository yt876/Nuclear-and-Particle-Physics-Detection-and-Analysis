# 编程与 ROOT 入门

课程作业可使用 PyROOT 或 ROOT C++。两种语言使用相同的 ROOT 对象和文件，选择其中一种即可。

## 安装与运行

按 [ROOT 官方安装说明](https://root.cern/install/) 安装 ROOT，并配置 JupyterLab 内核（PyROOT）或 ROOT C++ 解释器。

## 学习路径

| 内容 | PyROOT | ROOT C++ |
| --- | --- | --- |
| 编程基础（按需阅读） | [Python 官方教程](https://docs.python.org/3/tutorial/) | [C++ 参考手册（cppreference）](https://en.cppreference.com/w/cpp) |
| Tutorial I：函数、图、直方图、随机数、基本拟合与 ROOT 文件 | [ROOT Primer](https://root.cern/primer/) | [ROOT Primer](https://root.cern/primer/) |
| Tutorial II：TTree 读写、关联图与事例选择 | [ROOT 官方教程集](https://root.cern/doc/master/group__Tutorials.html) | [ROOT 官方教程集](https://root.cern/doc/master/group__Tutorials.html) |

Tutorial I 配合作业 1–3 使用；Tutorial II 建议学完第一章后阅读，介绍后续作业中的 TTree 读写、关联分析和 cut。

学习第二章的参数估计后，可继续阅读 [TF1 拟合文档](https://root.cern/doc/master/classTF1.html) 与 [RooFit 用户手册](https://root.cern/manual/roofit/)，了解拟合方法、误差与结果检验。
