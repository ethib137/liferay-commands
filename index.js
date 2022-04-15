#!/usr/bin/env node

const program = require('commander');
const lrupdate = require('./commands/lrupdate');
const clearcache = require('./commands/clearcache');
program
	.command('update')
	.alias('u')
	.description(
		'Update liferay 7.4 bundle by moving the required modules and files from the old bundle to the new bundle.'
	) // command description
	.option('-s, --old [value]', 'Liferay 7.4 old bundle')
	.option('-s, --new [value]', 'Liferay 7.4 new bundle')
	// function to execute when command is uses
	.action(function (update, args) {
		lrupdate.start(update.old, update.new);
	});
program
	.command('clear-cache')
	.alias('r')
	.description(
		'Update liferay 7.4 bundle by moving the required modules and files from the old bundle to the new bundle.'
	) // command description
	.option('-s, --bundle [value]', 'Liferay 7.4 old bundle')
	// function to execute when command is uses
	.action(function (clear, args) {
		clearcache.clear(clear.bundle);
	});
// allow commander to parse `process.argv`
program.parse(process.argv);
