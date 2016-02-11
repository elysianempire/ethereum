module.exports = function(grunt) {
    'use strict';

    var shell;

    // FYI This is the command to run the container interactively
    // docker run -it --rm tutum.co/elysianempire/ethereum-miner
    grunt.loadNpmTasks('grunt-shell');
    shell = {
        'docker-init': {
            command: [
                'docker-machine create --driver virtualbox dev',
                'docker-machine env dev'
            ].join('&&')
        },
        'docker-start': {
            command: [
                'docker-machine start dev'
            ].join('&&')
        },
        'docker-ps': {
            command: 'docker ps -a'
        },
        'docker-up': {
            command: 'docker-compose up -d'
        },
        'docker-stop': {
            command: 'docker-compose stop'
        },
        'build-lib': {
            command: 'docker build --build-arg PASSWORD=ethereum -t tutum.co/elysianempire/ethereum-miner .'
        },
        'docker-kill-all': {
            command: 'docker rm --force `docker ps -qa`'
        },
        'ssh-aws': {
            command: 'ssh -i ./ethereum.pem ubuntu@52.91.200.143',
            options: {
                stdin: true,
                stdout: true
            }
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: shell
    });

    grunt.registerTask('default', []);

    grunt.registerTask('build', [
        'shell:build-lib'
    ]);

    grunt.registerTask('up', [
        'shell:docker-up'
    ]);

    grunt.registerTask('stop', [
        'shell:docker-stop'
    ]);

    grunt.registerTask('reboot', [
        'shell:docker-stop',
        'shell:docker-up'
    ]);

    grunt.registerTask('kill', [
        'shell:docker-kill-all'
    ]);

    grunt.registerTask('show', [
        'shell:docker-ps'
    ]);
};
