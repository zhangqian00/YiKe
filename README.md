## 基于AngularJS模仿的"豆瓣一刻"APP
### 首页
![image index](https://github.com/AlertZq/YiKe/blob/master/img-folder/index.jpg)
### 菜单栏
![image aside](https://github.com/AlertZq/YiKe/blob/master/img-folder/aside.jpg)
### 作者
![image author](https://github.com/AlertZq/YiKe/blob/master/img-folder/author.jpg)
### 栏目分类
![image category](https://github.com/AlertZq/YiKe/blob/master/img-folder/category.jpg)
### 设置
![image setting](https://github.com/AlertZq/YiKe/blob/master/img-folder/setting.jpg)
## Apache环境搭建
```html
DocumentRoot "e:/Yike/"
<Directory "e:/Yike/">
```
## 配置虚拟主机 
### 步骤一：httpd.conf文件498行
```
# Virtual hosts
Include conf/extra/httpd-vhosts.conf
```
### 步骤二：extra/httpd-vhost.conf文件
```
<VirtualHost *:80>
    DocumentRoot "e:/Yike"
    ServerName yike.com
    ServerAlias www.yike.com
</VirtualHost>
```
### 步骤三：配置hosts文件（C:\Windows\System32\drivers\etc\hosts)
```
127.0.0.1       yike.com
127.0.0.1       www.yike.com
```
### 步骤四：重启Apache服务器