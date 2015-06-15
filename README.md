# fis-postpackager-replace

----
本插件将会根据配置替换字符串，适用于打包规则

```
npm install fis-postpackager-replace -g
```


```
fis.config.merge({
	modules: {
		// 启用插件
		postpackager: ['replace']
	},
	settings: {
		postpackager: {
			// 插件配置
			replace: {
				// 打包规则
				'/css/home.css': {
					// 替换规则
					// 'string[|正则修饰符]': string
					
					// 纯字符串替换，将123替换为456
					'123': '456',
					'123|gi': '456',

					// 绝对路径替换为相对路径，部分特殊字符需要使用\\进行转义，例如(
					'url\\(/images/|gi': 'url(../images/'
				}
			}
		}
	}
})
```

