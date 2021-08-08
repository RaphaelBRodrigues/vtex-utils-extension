module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': [
			'error',
			{
				'vars': 'all',
				'args': 'after-used',
				'ignoreRestSiblings': false
			}
		],
		'no-trailing-spaces': [
			'error',
			{}
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 3
			}
		],
		'no-mixed-spaces-and-tabs':['off'],
		'@typescript-eslint/no-var-requires': ['error'],
		'@typescript-eslint/ban-types': ['off'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
 		'no-undef': ['off'],
		'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
	},
	'overrides': [
		{
			'files': ['__tests__/**/*.ts'],
			'rules': {
				'@typescript-eslint/no-var-requires': ['off']
			}
		}
	]
};
