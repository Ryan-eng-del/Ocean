---
group:
  title: FeedBack
  order: 3
---

# Steps

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本使用

基础步骤条组件。
<code src="./document/basic.tsx"></code>

## 受控 Steps

通过 current 状态来受控 Steps
<code src="./document/next.tsx"></code>

## complete 回调

<code src="./document/complete.tsx"></code>

## description

通过 subTitle 配置步骤子标题、 description 配置步骤描述。
<code src="./document/content.tsx"> </code>

## 自定义 icon

带图标的步骤条,通过设置 items 的 icon 属性，可以启用自定义图标。
<code src="./document/icon.tsx"></code>

## 可点击

点击切换步骤，通过 onChange 获取点击的 current。
<code src="./document/click.tsx"></code>
