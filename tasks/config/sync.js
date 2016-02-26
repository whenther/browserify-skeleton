/**
 * A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 * For usage docs see:
 * 		https://github.com/tomusdrw/grunt-sync
 *
 */
module.exports = function(grunt) {
	grunt.log.writeln("Sync registered");
	grunt.config.set('sync', {
		dev: {
			files: [{
				cwd: './source/public',
				src: ['**/*','!/js/**/*.js'],
				dest: 'dev/public'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-sync');
};
