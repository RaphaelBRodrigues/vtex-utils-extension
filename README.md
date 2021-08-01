
# VTEX Utils

[VTEX Utils]("http://vtex.raphaelbr.dev/") is a browser extension with some helpers that will make easier the life of those who work in the [VTEX](https://vtex.com/) Ecosystem

## Stack
* [TypeScript](https://www.typescriptlang.org/)
* [SASS](https://sass-lang.com/)
* [Jest](https://jestjs.io/pt-BR/)

## Dependecies
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

## Enviroment
This is the list softwares are necessaries to run this project
* [npm](https://www.npmjs.com/)
* [node](https://nodejs.org/en/) (v14.15.1)

You can use [nvm](https://github.com/nvm-sh/nvm) to switch you node version to 14.15.1 
 
## Installation
Run the following steps in your terminal:

* Clone the repository
```sh
  git clone https://github.com/RaphaelBRodrigues/vtex_utils_extension.git
```

* Go to the project folder
```sh
  cd vtex_utils_extension
```

* Install the dependencies
```sh
  npm install
```

## Run the project
Once you installed all dependecies you will be able to start the project, use the following command to the webpack start building the files

```sh
  npm start
```

Now you can see it running on http://localhost:3000, but only some features are available on localhost, to run everything you must install the extension in your browser

## Installing the extension for test
Follow this steps to install the extension in your browser

* Go to chrome://extensions/ or YOUR_BROWSER://extensions/


![Manage Extensions](https://raw.githubusercontent.com/RaphaelBRodrigues/vtex_utils_extension/master/docs/images/manage_extensions.png)

* Active the Developer Mode


![Developer Mode](https://raw.githubusercontent.com/RaphaelBRodrigues/vtex_utils_extension/master/docs/images/developer_mode.png)

* And select the dist folder generated in the root folder of the project in "Load Unpacked Extension" 


![Load unpacked extension](https://raw.githubusercontent.com/RaphaelBRodrigues/vtex_utils_extension/master/docs/images/load_unpacked.png)

* Now you can code and the extension will be updated everytime a file is saved


![Installed extension](https://raw.githubusercontent.com/RaphaelBRodrigues/vtex_utils_extension/master/docs/images/installed_extension.png)

### Contributing
Contributions are super welcome, to do it you must fork this repository and then make a pull request when everything is ok

#### Commit

 There is a [commit linter](https://typicode.github.io/husky/#/) installed in the repository, so the commit messages must follow this [standard](https://github.com/conventional-changelog/commitlint/#what-is-commitlint):

 e.g:

* *type*(*scope*): *commit message*;

```sh
  git commit -m "fix(header): adjusting close button"
```

<br>

### Links


##### [Repository](https://github.com/RaphaelBRodrigues/vtex_utils_extension)

##### [Google store](https://chrome.google.com/webstore/detail/vtex-utils/pbeccppphodgankmbikfdlodceghmmgo)
