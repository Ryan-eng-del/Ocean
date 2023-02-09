---
group:
  title: Component
  order: 1
---

# Alert

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 基本使用 - Usage

`Ocean UI` export 4 个与 `Alert` 有关的组件。可以对这四个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Alert**：Alert 组件的 Wrapper。
- **AlertIcon**：Alert 组件的图标，根据传递的 status 改变。
- **AlertTitle**: Alert 组件的标题。
- **AlertContent**: Alert 组件的内容。

<code src="./document/basic.tsx"></code>

## 不同类别 - Variant

`Alert` 有四种 `variant` 可以使用，你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

四种分格，分别是 `solid`、`left-line`、 `top-line` or `bottom-line`。

<code src="./document/variant.tsx"></code>

## 不同状态 - Status

`Alert` 有四种 `Status` 可以使用，分别是 `info` `success` `warning` `error`。你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

<code src="./document/type.tsx"></code>

## 关闭按钮

`Alert` 支持关闭按钮，平滑关闭 Alert。
<code src="./document/close.tsx"></code>

## 组合 Alert

`Alert` 支持四种组件自由组合，`Ocean UI` 的 Core System， 可以非常方便的对 `Alert` 进行样式调整。 It's easy to Ocean UI.

<code src="./document/title.tsx"></code>

## 无图标

`Alert` 支持无状态图标。
<code src="./document/icon.tsx"></code>

## 受控 Alert

`Alert` 支持传入状态受控组件。
<code src="./document/control.tsx"></code>
