---
group:
  title: FeedBack
  order: 3
---

# Skeleton

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。

- 图文信息内容较多的列表/卡片中。

- 只在第一次加载数据的时候使用。

- 可以被 Loading 完全代替，但是在可用的场景下可以比 Loading 提供更好的视觉效果和用户体验。

## 基本使用

最基本的骨架屏。
<code src="./document/basic.tsx"></code>

## 自定义宽度

通过 row 配置展示列数，通过 width 配置每列宽度。
<code src="./document/width.tsx"></code>

## 头像

配置 avatar，显示标题骨架。
<code src="./document/avatar.tsx"></code>

## 包含子组件

loading 为 false 时会展示子组件，为 true 时展示骨架屏。
<code src="./document/child.tsx"></code>
