---
group:
  title: Component
  order: 1
---

# Input

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 基本使用 - Usage

`Ocean UI` export 6 个与 `Input` 有关的组件。可以对这六个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Input**：Input 表单组件。
- **InputGroup**: Input 表单组。
- **InputLeftElement**: Input 组件的左边的元素，可以是按钮，也可以是 Icon……。
- **InputRightElement**: Input 组件的右边的元素，可以是按钮，也可以是 Icon……。
- **InputLeftAddon**: Input 组件的左边的 `slot`, 比如 `http:` 、`com`……。
- **InputRightAddon**: Input 组件的右边的 `slot`。比如 `http:` 、`com`……。

<code src="./document/basic.tsx"></code>

## 尺寸 - Size

`Ocean UI` 提供了 四种尺寸 ，分别是：

- lg - 大尺寸
- md- 中等尺寸
- sm - 小尺寸
- xs - 极小尺寸

<code src="./document/size.tsx"></code>

## 表单类别 - Variant

Ocean UI 提供了 三种类被 ，分别是：

- unstyle 无样式
- outline 边框表单，默认值
- underline 下划线表单

<code src="./document/type.tsx"></code>

## 表单插件 - Addon

- **InputLeftAddon**: Input 组件的左边的 `slot`, 比如 `http:` 、`com`……。
- **InputRightAddon**: Input 组件的右边的 `slot`。比如 `http:` 、`com`……。

<code src="./document/groupAddon.tsx"></code>

## 表单图标 - Addon

- **InputLeftAddon**: Input 组件的左边的 `slot`, 比如 `http:` 、`com`……。
- **InputRightAddon**: Input 组件的右边的 `slot`。比如 `http:` 、`com`……。

<code src="./document/groupIcon.tsx"></code>

## 表单元素 - Element

- **InputLeftElement**: Input 组件的左边的元素，可以是按钮，也可以是 Icon……。
- **InputRightElement**: Input 组件的右边的元素，可以是按钮，也可以是 Icon……。

<code src="./document/groupElement.tsx"></code>

## Input 定制宽度 - Width

`Ocean UI` 的 Core System， 可以非常方便的对 Input 进行样式调整。 It's easy to Ocean UI.

<code src="./document/width.tsx"></code>

## InputGroup 定制宽度 - Width

`Ocean UI` 的 Core System， 可以非常方便的对 Input 进行样式调整。 It's easy to Ocean UI.

<code src="./document/groupWidth.tsx"></code>

## 可清除 - Clear

通过受控 value 对表单进行置空。
<code src="./document/clear.tsx"></code>

## 密码框 - password

通过 type 来进行密码框的转换。
<code src="./document/password.tsx"></code>

## 受控表单 - Control

通过 value 结合 setValue 进行表单受控。
<code src="./document/control.tsx"></code>

## 表单默认值 - defaultValue

通过受控 defaultValue 对表单提供默认值。
<code src="./document/defaultValue.tsx"></code>
