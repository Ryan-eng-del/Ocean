---
group:
  title: Common
  order: 2
---

# Button

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 基本使用 - Usage

**Ocean UI** 导出了一个 **Button** 组件。

- 提供了 **Mui** 式的波浪按钮动画,支持波浪颜色自定义。
- 支持五种不同的 **type**。
- 支持受控 **Loading**、以及自定义 **Loading Text**。
- 支持按钮左右 **Icon**。

Click and enjoy it! It's extremely interesting!

<code src="./document/Basic.tsx"></code>

### 按钮类别 - Type

基础的按钮，共有五种状态。

<code src="./document/BasicButton.tsx"></code>

### 按钮尺寸 - Size

支持小 中 大 三种尺寸按钮 `medium` 就是默认按钮

<code src="./document/SizeButton.tsx"></code>

### 自定义波浪颜色

通过 `animationColor` 可以对波浪动画颜色进行覆盖。

<code src="./document/Animation.tsx"></code>

### 加载中按钮

`Ocean UI` 提供 加载按钮，来消费异步逻辑

<code src="./document/LoadingButton.tsx"></code>

### 加载文本

通过 `loadingText` 可以提供按钮加载文本，如果不提供，则默认无加载文本，也不用担心宽度突变的问题，按钮宽度还是根据按钮内容进行占位。

<code src="./document/loadingText.tsx"></code>

### 按钮图标

通过 `leftIcon`、`rightIcon` 可以提供按钮左、右图标。

<code src="./document/iconButton.tsx"></code>

### 自定义按钮

`Ocean UI` 的 Core System， 可以非常方便的对 Button 进行样式调整。 It's easy to Ocean UI.

<code src="./document/custom.tsx"></code>
