---
group:
  title: Nav
  order: 4
---

# DropMenu

向下弹出的列表。

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 基本使用

最简单的下拉菜单。
<code src="./document/basic.tsx"></code>

## 受控菜单

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
<code src="./document/control.tsx"></code>

## 自定义菜单

<code src="./document/as.tsx"></code>

## 自定义图标

<code src="./document/iconAfter.tsx"></code>

## Hover 模式

默认是点击触发菜单，可以 hover 触发。
<code src="./document/hover.tsx"></code>

## 折叠菜单

传入的菜单里有多个层级。
<code src="./document/children.tsx"></code>
