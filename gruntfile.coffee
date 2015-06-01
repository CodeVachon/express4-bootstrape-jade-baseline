module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON("package.json")
        path: require "path"

        uglify:
            options:
                sourceMap: true
                compress: true
                report: 'gzip'
            compile:
                files:
                    'public<%= path.sep %>js<%= path.sep %><%= pkg.name.toLowerCase() %>.min.js': '<%= jshint.compile.src %>'

        coffee:
            compile:
                expand: true,
                flatten: true,
                cwd: 'src<%= path.sep %>coffee<%= path.sep %>',
                src: ['*.coffee'],
                dest: 'public<%= path.sep %>js<%= path.sep %>',
                ext: '.js'

        less:
            options:
                compress: true
                ieCompat: true
                sourceMap: false
            compile:
                files:
                    "public<%= path.sep %>css<%= path.sep %><%= pkg.name.toLowerCase() %>.min.css": "src<%= path.sep %>less<%= path.sep %>bootstrap.less"

        jshint:
            options:
                globals:
                    jQuery: true
                    console: true
                    module: true
            gruntfile:
                src: ['gruntfile.coffee']
            compile:
                src: [
                    'public<%= path.sep %>js<%= path.sep %>*.js',
                    '!public<%= path.sep %>js<%= path.sep %>*.min.js',
                    '!public<%= path.sep %>js<%= path.sep %>vendor<%= path.sep %>*'
                ]

        watch:
            gruntfile:
                files: ['gruntfile.coffee']
                options:
                    spawn: false
            jsFiles:
                files: ['public<%= path.sep %>js<%= path.sep %>*.js', '!public<%= path.sep %>js<%= path.sep %>**<%= path.sep %>*.min.js']
                tasks: ['jshint:compile','uglify:compile']
                options:
                    spawn: false
            coffeeFiles:
                files: ['src<%= path.sep %>**<%= path.sep %>*.coffee']
                tasks: ['coffee:compile','jshint:compile','uglify:compile']
                options:
                    spawn: false
            less:
                files: ['src<%= path.sep %>**<%= path.sep %>*.less']
                tasks: ['less:compile']
                options:
                    spawn: false

    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-jshint"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-less"
    grunt.loadNpmTasks "grunt-contrib-jshint"

    grunt.registerTask "build", [
        'coffee:compile',
        'jshint:compile',
        'uglify:compile',
        'less:compile'
    ]
