---
group:
  title: Component
  order: 999
---

# Switch

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本使用 - Usage

Ocean UI export 出了 Switch 组件, 用来对单一状态进行控制。

<code src="./document/basic.tsx"></code>

## 不同类别 - Type

Ocean UI 提供了 四种 type，分别是 light, ios, custom, 以及默认 type.

<code src="./document/type.tsx"> </code>

## 不同大小 - Size

Ocean UI 提供了三种不同的大小，分别是 `small` `medium` `large`

<code src="./document/size.tsx"></code>

## 自定义图标 - Icon

Ocean UI 提供了 API 对 Switch Dot 图标进行定制化。
<code src="./document/custom.tsx"> </code>

## 自定义内容 - Content

最好是少于两个字的内容，作者建议使用受控组件状态来在外面包括标签来展示文字

<code src="./document/context.tsx"> </code>

## 受控 Switch

传入外部状态来对组件进行开闭受控

<code src="./document/control.tsx"> </code>

## 受控内容

根据开闭状态来决定文本内容

<code src="./document/controlContext.tsx"> </code>
