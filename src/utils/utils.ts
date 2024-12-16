import translate from 'translate';

export const convertISOToCustomFormat = isoString => {
	// 创建一个新的 Date 对象，基于提供的 ISO 8601 字符串
	const date = new Date(isoString);

	// 检查是否成功创建了有效的 Date 对象
	if (isNaN(date.getTime())) {
		return 'Invalid Date';
	}

	// 获取年份、月份、日期、小时、分钟和秒，并确保月份、日期、小时、分钟和秒是两位数
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要加1
	const day = String(date.getUTCDate()).padStart(2, '0');
	const hours = String(date.getUTCHours()).padStart(2, '0');
	const minutes = String(date.getUTCMinutes()).padStart(2, '0');
	const seconds = String(date.getUTCSeconds()).padStart(2, '0');

	// 返回按照指定格式组合的字符串
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 翻译
export const translateText = (value: string, language: string = 'zh') => {
	translate.engine = 'google';

	return new Promise((resolve, reject) => {
		translate(value, language)
			.then(data => {
				resolve(data);
			})
			.catch(() => {
				reject(value);
			});
	});
};
