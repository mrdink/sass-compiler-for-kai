module.exports = {
	'default': [
		'styles',
		'notify:default'
	],
	'styles': [
		'clean:pre',
		'sass',
		'postcss:dev',
		'notify:styles'
	],
	'build': [
		'clean',
		'default',
		'postcss:build',
		'notify:build'
	]
};
