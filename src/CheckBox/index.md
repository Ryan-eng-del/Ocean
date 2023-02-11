---
group:
  title: Component
  order: 1
---

# CheckBox

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本使用

**Ocean UI** 导出了一个 **CheckBox** 组件。

**exam**: 提供考试模式，也就是选项包括在组件当中，非考试模式则是在组件之外。
**solid**: 提供实心模式，也就是颜色直接填充组件，非实心是边框修饰组件。
**type**: 提供不同的类别，也就是按钮的类别。

**可以将这三者，进行积极的组合，满足开发者的需求**

<code src="./document/ba.tsx"></code>

## 不同 type CheckBox

提供不同 Type 的基础单选框。
<code src="./document/basic.tsx"></code>

## 非考试模式

非考试模式下，不是实心样式。
<code src="./document/noExam.tsx"></code>

## 不同大小 CheckBox

`Ocean UI` 提供了 三种尺寸 ，分别是：

- large - 大尺寸
- medium- 中等尺寸
- small - 小尺寸
  <code src="./document/size.tsx"></code>

## 不同方向 CheckBox

提供两种方向，一种是垂直，一种是水平
<code src="./document/direction.tsx"></code>

## 考试模式 + 实心模式 + 不同 type

你可以讲 考试模式 和 实心模式，以及不同单选框类别进行样式组合。

<code src="./document/solid.tsx"></code>
