---
group:
  title: FeedBack
  order: 2
---

# Popover

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
- 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

Ocean UI 集成了 float ui 来解决弹窗锚点定位，以及浏览器边缘碰撞问题。

## 基本使用

`Ocean UI` export 5 个与 `Popover` 有关的组件。可以对这五个组件，进行自由的组合，也可以由 `Ocean Style System` 进行任何样式覆盖和修改。

- **Popover**：Popover 组件的 Wrapper。
- **PopoverTrigger**: Popover 组件的触发元素，弹框会依据该元素和 placement 进行定位。
- **PopoverBody**: Popover 组件的 body 部分。
- **PopoverContent**: Popover 组件的内容部分。
- **PopoverFooter**: Popover 组件的 footer 部分。

<code src="./document/basic.tsx"></code>

## 不同位置

支持 15 种方向的 popover, 在这里不得不赞美 Float UI 的强大。

|              |                  |            |
| ------------ | ---------------- | ---------- |
| bottom-start | bottom (default) | bottom-end |
| auto-start   | auto             | auto-end   |
| top-start    | top              | top-end    |
| left-start   | left             | left-end   |
| right-start  | right            | right-end  |

<code src="./document/placement.tsx"></code>

## 自定义 trigger 元素

- **PopoverTrigger**: Popover 组件的触发元素，弹框会依据该元素和 placement 进行定位。

<code src="./document/input.tsx"> </code>
