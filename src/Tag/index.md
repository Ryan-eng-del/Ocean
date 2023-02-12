---
group:
  title: Data Entry
  order: 3
---

# Tag

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 基本使用

`Ocean UI` export 5 个与 `Tag` 有关的组件。可以对这五个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Tag**：Tag 组件的 Wrapper。
- **TagLeftIcon**: Tag 组件左图标。
- **TagRightIcon**: Tag 组件右图标。
- **TagLabel**: Tag 组件的内容。
- **TagCloseButton**: Tag 组件的关闭图标。

`Ocean UI` 的 Core System， 可以非常方便的对 Tag 进行样式调整。 It's easy to Ocean UI.

<code src="./document/basic.tsx"></code>

## 不同尺寸

`Ocean UI` 提供了 三种尺寸 ，分别是：

- large - 大尺寸
- medium- 中等尺寸
- small - 小尺寸

<code src="./document/size.tsx"></code>

## 不同类别

`Ocean UI` 提供了 两种类别 ，分别是：solid, outline
<code src="./document/type.tsx"></code>

## Icon

当需要在 Tag 内嵌入 Icon 时，可以设置两个 Icon 组件。

- **TagLeftIcon**: Tag 组件左图标。
- **TagRightIcon**: Tag 组件右图标。

<code src="./document/icon.tsx"></code>

## 关闭图标

配置可关闭标签

<code src="./document/close.tsx"></code>

## 可编辑

动态编辑标签，可结合 React state 以及 Ocean 对外暴露的组件， 对标签进行增删改查。

当前案例：输入标签 name 后，blur 进行添加标签。

<code src="./document/edit.tsx"></code>
