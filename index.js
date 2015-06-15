// for uz by gavinning
// homepage: https://www.npmjs.com/package/fis-postpackager-replace

module.exports = function(ret, conf, settings, opt) {
	fis.util.map(settings, function(filepath, config){
		// 检查是否有此打包规则，检查替换规则是否存在
		if(!ret.pkg[filepath] || typeof config !== 'object') return;

		// 执行规则替换
		fis.util.map(config, function(key, str){
			var reg, arr = key.split('|');
			reg = new RegExp(arr[0], arr[1]);
			ret.pkg[filepath]._content = ret.pkg[filepath]._content.replace(reg, str);
		})
	});
};