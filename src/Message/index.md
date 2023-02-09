---
group:
  title: Component
  order: 1
---

# Message

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 基本使用 - Usage

`Ocean UI` export 出 useMessage Hook, 用来对弹窗进行管理

`const { message, close, update } = useMessage();`

- **message**：创建弹窗。
- **close**: 关闭弹窗，传入弹窗 Id，进行关闭。
- **update**: 更新弹窗，传入弹窗 Id，进行更新。

<code src="./document/basic.tsx"></code>

## 不同方向 - Direction

`Ocean UI` 支持六种方向的弹窗，分别是 top,bottom,top-left,top-right,bottom-left,bottom-right,

<code src="./document/direction.tsx"></code>

## 可关闭弹窗

**message**：创建弹窗方法，会返回窗口的 id，然后通过 close 方法进行关闭。

<code src="./document/close.tsx"></code>

## 更新弹窗

**update**: 更新弹窗，传入弹窗 Id，进行更新。

<code src="./document/update.tsx"></code>

## 弹窗标题

通过 title 属性，设置弹窗标题
<code src="./document/title.tsx"></code>

## 不同状态

`Alert` 有四种 `Status` 可以使用，分别是 `info` `success` `warning` `error`。你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

<code src="./document/type.tsx"></code>

## 不同类别

`Message` 有四种 `variant` 可以使用，你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

四种风格，分别是 `solid`、`left-line`、 `top-line` or `bottom-line`。

<code src="./document/variant.tsx"></code>
