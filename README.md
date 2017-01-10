web-storage-demo
================

A simple demo to show usage of the Web Storage API. For more detail on how it works, read [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

View the demo online: http://mdn.github.io/web-storage-demo/
#### 同源
协议+主机名+端口

* http://www.example.com
* https://www.example.com
* http://static.example.com
* http://www.example.com:8000

### localStorage and sessionStorage
区别在于有效期和作用域不同

* localStorage:永久性的，除非刻意删除，同源的文档间共享；
* sessionStorage:有效期是脚本所在的最顶层窗口或者浏览器的标签页，同源的文档间共享（如包含两个iframe的窗口）；
#### 存储API
* setItem, getItem, removeItem, clear, key

#### 存储事件
onstorage

### cookie
document.cookie = "name=" + encodeURIComponent(value)";

* 可以设置过期时间；
* 标准不允许浏览器保存超过300个cookie，为每个Web浏览器保存的cookie数不能超过20个，每个cookie保存的数据不能超过4KB。
