module.exports = [
	'longIslandWorldGenerator',
	'islandWorldGenerator',
    'myFirstWorldGenerator'
].reduce((exp, mod) => Object.assign(exp, {
	[mod]: require('./generators/' + mod)
}), {});