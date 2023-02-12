---
group:
  title: FeedBack
  order: 2
---

# Modal

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 基本使用 - Usage

`Ocean UI` export 5 个与 `Modal` 有关的组件。可以对这五个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Modal**：Modal 组件的 Wrapper。
- **ModalHead**: Modal 组件的头部 wrapper。
- **ModalHeadTitle**: Modal 组件头部的标题。
- **ModalHeadCloseButton**: Modal 组件头部的关闭 Icon。
- **ModalBody**: Modal 组件的内容。
- **ModalFooter**: Modal 组件的 Footer。

<code src="./document/basic.tsx"></code>

## 异步调用 - Async

Ocean UI 提供了异步抽屉，结合 Loading 和 async/await 可以消费异步逻辑。
<code src="./document/async.tsx"></code>

## 滚动条行为

针对于 `Modal Body` 内容溢出，Ocean UI 提供了两种方式，一种是 inside，inside 就是在 `Modal` 中产生滚动条来解决溢出，outside 是在 `Body` 中产生滚动条来解决溢出。

<code src="./document/behavior.tsx"></code>

## 不同尺寸

`Ocean UI` 的 Core System， 可以非常方便的对 Drawer 进行样式调整。 It's easy to Ocean UI.
<code src="./document/size.tsx"></code>
