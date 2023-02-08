---
group:
  title: Component
  order: 1
---

# Drawer

屏幕边缘滑出的浮层面板。

## 何时使用

- 抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 基础使用 - Usage

`Ocean UI` export 5 个与 `Drawer` 有关的组件。可以对这五个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Drawer**：Drawer 组件的 Wrapper。
- **DrawerHead**: Drawer 组件的头部 wrapper。
- **DrawerHeadTitle**: Drawer 组件头部的标题。
- **DrawerHeadCloseButton**: Drawer 组件头部的关闭 Icon。
- **DrawerBody**: Drawer 组件的内容。
- **DrawerFooter**: Drawer 组件的 Footer。

<code src="./document/basic.tsx"></code>

## 自定义方向 - Placement

`Ocean UI` 提供了四个方向的 `Drawer`, 分别是 `left`、`right`、 `bottom`、 `top`。

<code src="./document/dialogBasic.tsx"></code>

## 异步抽屉 - Async

`Ocean UI` 提供了异步抽屉，结合 `Loading` 和 `async/await` 可以消费异步逻辑。

<code src="./document/asyncDialog.tsx"></code>

## 自定义尺寸

`Ocean UI` 的 Core System， 可以非常方便的对 Drawer 进行样式调整。 It's easy to Ocean UI.

<code src="./document/sizeDrawer.tsx"></code>
