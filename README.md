# INIT FRONTEND

## :fire: Features

- Naming classes by [BEM](https://en.bem.info/)
- BEM structure is used
- Preprocessors are used [Pug](https://pugjs.org/) and [SCSS](https://sass-lang.com/)
- Used transpiler [Babel](https://babeljs.io/) to support modern JavaScript (ES6) in browsers
- Used by [Webpack](https://webpack.js.org/) to build JavaScript modules
- Uses CSS-grid [smart-grid](https://github.com/dmitry-lavrik/smart-grid) based on Bootstrap for fast responsive layout
- Using a hard code guide
- Checking the code for errors before committing is used

## :hammer_and_wrench: Install

- Install [NodeJS](https://nodejs.org/en/) (if required) and [Yarn](https://yarnpkg.com/en/docs/install)
- Download the assembly in the console using [Git](https://git-scm.com/downloads): `git clone git@github.com:buiduccuong30051989/init-frontend.git`
- Install `gulp` globally:` yarn global add gulp-cli`
- Install `bem-tools-core` globally:` yarn global add bem-tools-core`
- Go to the downloaded folder with the assembly: `cd init-frontend`
- Download the required dependencies: `yarn`
- To get started, enter the command: `yarn run dev` (development mode)
- To build the project, enter the command `yarn run build` (build mode)

If you did everything correctly, you should open a browser with a local server.
Build mode assumes project optimization: image compression, minification of CSS and JS files for uploading to the server.

## :open_file_folder: File structure

```
gulp-pug-starter
├── dist
├── gulp-tasks
├── src
│ ├── blocks
│ ├── fonts
│ ├── img
│ ├── js
│ ├── styles
│ ├── views
│ └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
├── .gitignore
├── .prettierrc
└── yarn.lock/package-lock.json
```

- Folder root:
  - `.babelrc.js` - Babel settings
  - `.bemrc.js` - BEM settings
  - `.eslintrc.json` - ESLint settings
  - `.gitignore` - prohibit Git from tracking files
  - `.stylelintrc` - Stylelint settings
  - `.stylelintignore` - prohibit Stylelint from tracking files
  - `gulpfile.babel.js` - Gulp settings
  - `webpack.config.js` - Webpack settings
  - `package.json` - list of dependencies
- Folder `src` - used during development:
  - BEM blocks and components: `src / blocks`
  - Fonts: `src / fonts`
  - Images: `src / img`
  - JS files: `src / js`
  - Site pages: `src / views / pages`
  - SCSS files: `src / styles`
  - Service Pug files: `src / views`
  - Apache web server configuration file with settings [gzip](https://habr.com/ru/post/221849/) (lossless compression): `src / .htaccess`
- The `dist` folder - the folder from which the local development server is started (when you run` yarn run dev`)
- Folder `gulp-tasks` - folder with Gulp-tasks

## :keyboard: Commands

- `yarn run lint: styles` - check SCSS files. For VSCode, you need to install [plugin](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). For WebStorm
  or PHPStorm must enable Stylelint in `Languages & Frameworks - Style Sheets - Stylelint` (errors will be fixed automatically when you save the file)
- `yarn run lint: styles --fix` - fix errors in SCSS files
- `yarn run lint: scripts` - check JS files
- `yarn run lint: scripts --fix` - fix errors in JS files
- `yarn run dev` - start the server for project development
- `yarn run build` - build a project with optimization without starting the server
- `yarn run build: views` - compile Pug files
- `yarn run build: styles` - compile SCSS files
- `yarn run build: scripts` - build JS files
- `yarn run build: images` - build images
- `yarn run build: webp` - convert images to` .webp` format
- `yarn run build: sprites` - collect sprites
- `yarn run build: fonts` - build fonts
- `yarn run build: favicons` - build favicons
- `yarn run build: gzip` - build Apache configuration
- `yarn run bem-m` - add a BEM block
- `yarn run bem-c` - add a component

## :bulb: Recommendations for use

### Component approach to website development

- Each BEM block has its own folder inside `src / blocks / modules`
- A folder for one BEM block contains one Pug file, one SCSS file and one JS file (if the block uses a script)
  - The pug file of the block is imported into the file `src / views / index.pug` (or into the required page file from where the block will be called)
  - The SCSS file of the block is imported into the file `src / blocks / modules / _modules.scss`
  - JS file of the block is imported into `src / js / import / modules.js`

An example of a folder structure with a BEM block:

```
blocks
├── modules
│ ├── header
│ │ ├── header.pug
│ │ ├── header.js
│ │ ├── header.scss
```

In order not to manually create the corresponding folder and files, it is enough to write the following commands in the console:

- `yarn run bem-m my-block` - to create a BEM block in` src / block / modules` (for basic BEM blocks), where `my-block` is the name of the BEM block;
- `yarn run bem-with my-component` - to create a component in` src / blocks / components` (for components), where `my-component` is the name of the component

### Components

- Components (for example, icons, buttons) are styled in Pug using mixins
- Each component has its own folder inside `src / blocks / components`
- The folder of one component contains one Pug file, one SCSS file and one JS file (if the component uses a script)
  - The pug file of the component is imported into the main page file `src / views / index.pug` (or into the required page file from where the component will be called)
  - The SCSS file of the component is imported into the file `src / blocks / components / _components.scss`
  - The component JS file is imported into the file `src / js / import / components.js`

### Project Pages

- Project pages are located in the `src / views / pages` folder
  - Each page (including the main page) inherits the template `src / views / layouts / default.pug`
  - Main page: `src / views / index.pug`

### Fonts

- Fonts are in the `src / fonts` folder
  - Use [formats](https://caniuse.com/#search=woff) `.woff` and` .woff2`
  - Fonts are included in the file `src / styles / base / _fonts.scss`
  - You can convert local fonts using [this service](https://onlinefontconverter.com/)

### Images

- Images are in the `src / img` folder

  - The image for generating favicons must be located in the `src / img / favicon` folder and have a size of at least` 1024px x 1024px`
  - By default svg file can be include dynamic to pug via mixin [see](https://twitter.com/wesbos/status/821457987495755776/photo/1) then return svg inline that we can target via dom then easy control them. All svg icon with stand alone using place in `src / img / icon-svg`

```javascript
+iconSvg("iconName");
```

- Optional images converted to `.webp` format. Detailed information on use [here](https://vk.com/@vk_it-webp).
- Optional svg sprites, takes a bunch of SVG files in `src / img / svg `, optimizes generating them into SVG sprites [here](https://github.com/jkphl/gulp-svg-sprite). Uncomment two optionals in `gulpfile.babel.js` and `gulp-tasks / serve.js `

### Third party libraries

- All third party libraries are installed in the `node_modules` folder
  - To load them use the command `yarn add package_name`
  - To connect JS files of libraries, import them at the very beginning of the JS file of the BEM block (that is, the BEM block that the script uses), for example:
  ```javascript
  import $ from "jquery";
  ```
  - To include the style files of the libraries, import them into the file `src / styles / vendor / _libs.scss`
  - JS files and style files of libraries cannot be changed by yourself

:warning: If your project uses several libraries that need to be included on several pages, to avoid errors you need to:

- On the path `src / js / import` create a folder `pages`
- In the `pages` folder, create a js file for the page, for example,` pageA.js`, and import a library there that will be used only on this page
  - Perform the same step for additional pages
- In the file `webpack.config.js` add js-files of pages to the entry point, for example:

```javascript
entry: {
  main: "./src/js/index.js",
  pageA: "./src/js/import/pages/pageA.js",
  pageB: "./src/js/import/pages/pageB.js"
}
```

- Connect the compiled js-files on the required pages

## :hash: smart-grid CSS

The builder includes the [smart-grid](https://github.com/dmitry-lavrik/smart-grid) CSS grid from [Dmitry Lavrik](https://dmitrylavrik.ru/). It allows you to get rid of
unnecessary classes in markup due to the use of mixins in SCSS and speeds up adaptive layout. The configuration is already set up according to the [Bootstrap](https://getbootstrap.com/) grid. Instructions for use [here](https://grid4web.ru/basics).
