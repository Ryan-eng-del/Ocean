##### 不同方向 - Direction

`Ocean UI` 支持六种方向的弹窗，分别是 top,bottom,top-left,top-right,bottom-left,bottom-right,

##### 可关闭弹窗

**message**：创建弹窗方法，会返回窗口的 id，然后通过 close 方法进行关闭。

##### 更新弹窗

**update**: 更新弹窗，传入弹窗 Id，进行更新。

##### 弹窗标题

通过 title 属性，设置弹窗标题

##### 不同状态

`Alert` 有四种 `Status` 可以使用，分别是 `info` `success` `warning` `error`。你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

##### 不同类别

`Message` 有四种 `variant` 可以使用，你可以将 `variant` 和 `status` 进行组合，也可以就其中一个，进行单独使用。

四种分格，分别是 `solid`、`left-line`、 `top-line` or `bottom-line`。
