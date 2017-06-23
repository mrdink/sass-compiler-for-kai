module.exports = {
	/**
	 * grunt-sass
	 *
	 * Compile Sass to CSS using node-sass
	 *
	 * @link https://www.npmjs.com/package/grunt-sass
	 */
	dist: {
		options: {
			sourceMap: true,
			// @link https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/
			indentedSyntax: true,
			indentType: 'tab',
			indentWidth: '1',
			outputStyle: 'expanded'
		},
		files: {
			'assets/css/main.css': 'assets/sass/main.scss'
		}
	}
};
