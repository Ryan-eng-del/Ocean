---
order: 2
group:
  title: 'Core System'
---

# System

这是 Ocean UI 当中的第三大系统 System, 你可以通过暴露出来的 接口去使用 Ocean UI 的特性

- 支持构造函数
- 支持声明式 JSX

```javascript
// 支持声明式 JSX
<ocean.div />
<ocean.section />
<ocean.span />
<ocean.input />
<ocean.button />
```

```javascript
// 支持构造函数
const oceanDiv = ocean('div'); // 任何 HTML 标签名字
<oceanDiv />;
```

## 样式优先级

style props > css(给使用者提供的覆盖接口) > \_\_css(这是组件库开发者私有的接口)

```javascript
<ocean.div c="red.500" css={{ c: 'green.500' }} __css={{ c: 'blue.500' }} />
```

## 如何使用

你可以使用任意的 html 标签: ocean.div/span/input…………

<code src="./document/index.tsx"></code>
