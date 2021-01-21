module.exports = function(grunt) {
	const sass = require('node-sass');
	 
	grunt.initConfig({
	    cssmin: {
			build: {
				files: [{
					expand: true,
					cwd: 'assets',
					src: ['*.css', '!*.min.css'],
					dest: 'assets',
					ext: '.min.css'
				  }, {
					expand: true,
					cwd: 'themekit/css',
					src: ['*.css', '!*.min.css'],
					dest: 'themekit/css',
					ext: '.min.css'
				  }]
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'assets/custom.css': 'assets/custom.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	 
	grunt.registerTask('default', ['sass','cssmin']);
};