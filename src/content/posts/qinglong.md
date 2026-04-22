---
title: 青龙面板 (Qinglong) 部署全攻略：Docker 安装、依赖配置及拉库指南
published: 2026-04-20
description: '手把手教你如何通过 Docker 部署青龙面板，并配置完善的 NodeJs、Python3 及 Linux 环境依赖，助力自动化脚本运行。'
image: 'https://tc.yang.pp.ua/file/Blog/qinglong1.png'
tags: [青龙面板, Docker, 自托管, 自动化]
category: 技术教程
draft: false
---
## 🎯 拉取青龙面板镜像
首先，从 Docker Hub 拉取官方最新的青龙面板镜像：
```bash
docker pull whyour/qinglong:latest
```
---
## 🎯 创建 Docker 容器
执行以下命令创建容器。请确认你的挂载路径（`-v`）是否符合你的服务器实际目录。
```bash
docker run -dit \
-v $PWD/ql/config:/ql/config \
-v $PWD/ql/log:/ql/log \
-v $PWD/ql/db:/ql/db \
-v $PWD/ql/scripts:/ql/scripts \
-v $PWD/ql/jbot:/ql/jbot \
-p 5777:5700 \
-e ENABLE_HANGUP=true \
-e ENABLE_WEB_PANEL=true \
--name qinglong1 \
--hostname qinglong \
--restart always \
whyour/qinglong:latest
```
> **💡 提示**：端口转发设置。在 Docker 的配置里（如 DockerMan 设置）— 访问控制 — 允许访问的端口 — 选中 `qinglong 5700 tcp`，保存应用并重启路由器，即可访问面板。
---
## 🎯 添加环境依赖
为了让脚本正常运行，请在青龙面板后台的**“依赖管理”**中点击“新建依赖”，选择对应的语言，并复制以下列表：
### 1. NodeJs 依赖
```text
axios
request
canvas
cheerio
js-base64
dotenv
magic
tough-cookie
ws@7.4.3
require
requests
date-fns
ts-md5
typescript
json5
axios@v0.27.2
crypto-js
@types/node
png-js
node-telegram-bot-api
fs
jsdom
form-data
jieba
tslib
ds
jsdom -g
prettytable
ql
common
node-jsencrypt
juejin-helper
moment
global-agent
```
### 2. Python3 依赖
```text
rsa
bs4
telethon
cacheout
jieba
PyExecJS
ping3
canvas
Crypto
ds
requests
pycryptodome
```
### 3. Linux 依赖
```text
bizCode
bizMsg
lxml
libc-dev
gcc
g++
libffi-dev
python3-dev
```
---
## 🎯 环境变量配置
在“环境变量”菜单中添加 `JD_COOKIE`。格式参考如下：
`pt_key=AAJmDonvADAObvbaJU1OFY2***;pt_pin=wliuy;`
---
## 🎯 订阅管理与拉库
建议定时触发设为：`0 15 10 * * ?`（每天上午 10:15）。
### 常用京东脚本库汇总
*注：拉库前请确保网络环境可以连接 GitHub。*
**[Faker2 助力池版](https://github.com/shufflewzc/faker2.git)**
```text
[https://github.com/shufflewzc/faker2.git](https://github.com/shufflewzc/faker2.git)
```
**[Faker3 纯净版](https://github.com/shufflewzc/faker3.git)**
```text
[https://github.com/shufflewzc/faker3.git](https://github.com/shufflewzc/faker3.git)
```
