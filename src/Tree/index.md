---
group:
  title: Component
  order: 1
---

# Tree

多层次的结构列表。

## 何时使用

- 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 交互模式

默认为交互模式 `mode = "interact"`

#### 支持交互式增加根节点，子节点，以及编辑和删除树节点

<code src="./document/TreeItemRecursive.tsx"></code>

## 预览模式

可以设置 `mode = "preview"` 来变为预览模式

<code src="./document/TreeItem.tsx"></code>

## 可选择树

可以设置 selectable 选项来选择树
<code src="./document/select.tsx"></code>

## 自定义工具栏

通过 tool 选项来自定义工具栏，来进行操作
<code src="./document/tool.tsx"></code>
