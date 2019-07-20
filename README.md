# next_Kollins
next.js 实现的 kollins 背单词项目.  

其核心功能是:

1. 从单词列表中, 查到柯林斯对应的解释
2. 选出你想要的句子
3. 存入txt文件

本质就是, 你能创建一个自定义的背单词txt文件.

运行的命令: npm run dev

---

一直想实现此功能. 但之前在尝试的过程中, 曾遇到以下问题:

|  技术选项   | 能实现  | 无法实现(或有困难) |
|  ----  | ----  |---- |
| python  | 在dict中查词, 读写文件 | ui界面 |
| react native  | 读取ajax, realm数据库, 查词, ui界面 | 读写文件的路径不明, 不知道存到哪里去了, 并且rn会对txt文件自动改名.|
|react| 读取ajax, 查词, ui界面 |  (1)读写文件, 只能由后端node.js来支持. <br/> (2)MongoDB数据库|
|前端 react, <br/>后端 node.js| |(1)node.js无法(配置较难)读取react组件的内容来写回浏览器页面. 造成只能使用ejs等模板字符串来操作, 工具原始. 失去了react的强大操作效率. <br/><br/> (2)写入文件只能前端通过get或post请求, 将要写入txt的数据发送给后端服务器, 来调用fs来写入文件中. <br/> 但两者使用的ip地址不同, 无法实现无缝连接. 体验极其不流畅.|
|next.js|服务端渲染. 帮助实现了前端react和后端node.js, 使用同一ip地址的无缝连接, 体验很流畅.|(1)无法像react native那样用在iPhone app上, 只能在pc端浏览器中使用. <br/><br/> (2)state中的属性, 在表单提交, 或页面刷新后, 会被重置为修改前的最初始数值. 我尝试的解决方案: <br/> (a) 把state中的数据存放在 window.localStorage中 ,可惜后端渲染不存在window这个对象. <br/> (b)使用mongoDB数据库 |


本项目尚未实现的功能:
1. 没有结合入typescript.
2. 尚未接入有道词典的接口, 实现网络查词

