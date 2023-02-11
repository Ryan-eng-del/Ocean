---
group:
  title: Component
  order: 1
---

# Radio

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本使用

**Ocean UI** 导出了 **Radio** 以及 **RadioGroup** 组件。

**exam**: 提供考试模式，也就是选项包括在组件当中，非考试模式则是在组件之外。
**solid**: 提供实心模式，也就是颜色直接填充组件，非实心是边框修饰组件。
**type**: 提供不同的类别，也就是按钮的类别。

**可以将这三者，进行积极的组合，满足开发者的需求**

<code src="./document/basic.tsx"></code>

## 单选框类别 -Type

提供不同 Type 的基础单选框。
<code src="./document/radio.tsx"></code>

## 非考试模式 - NoExam

非考试模式下，不是实心样式。
<code src="./document/exam.tsx"></code>

## 自定义方向 - Direction

提供两种方向，一种是垂直，一种是水平
<code src="./document/direction.tsx"></code>

## 自定义大小 - Size

`Ocean UI` 提供了 三种尺寸 ，分别是：

- large - 大尺寸
- medium- 中等尺寸
- small - 小尺寸

<code src="./document/sizeRadio.tsx"></code>

## 考试模式 + 实心模式 + 不同 type

你可以讲 考试模式 和 实心模式，以及不同单选框类别进行样式组合。

<code src="./document/solid.tsx"></code>
