/**
 * Created by SergST on 23.09.2016.
 */

module.exports = function (grunt) {

	// 1. Вся настройка находится здесь
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			// 2. Настройка для объединения файлов находится тут
			options: {
				separator: ';'
			},

			dist: {
				src: [
					'js/libs/*.js', // Все JS в папке libs
					'js/plugins/*.js', // Все JS в папке libs
					'js/main.js'  // Конкретный файл
				],
				dest: 'js/build/production.js'
			},

		},

		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		}

	});

	// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
	grunt.registerTask('default', ['concat', 'uglify']);

};
