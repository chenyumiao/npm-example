const argv = require('minimist')(process.argv.slice(2));

const help = `
Usage: wo <command> <input> <options>

command:
  build     - clear && build all source files to dest
  deploy    - build && upload to ftp server
  release   - build && taged git source - Experimental
  start     - build && start a local server with default root .www
  clear     - by default, rm -rf build .www
  gen       - generate a new demo project

input:
  path/to/dir
  glob/pattern/**
  path/to/file.ext
  component_name
  component_name1,component_name2
  gen_project_name

options:
  --sprite     - concat sprites to one image and generate a style file
  --nunjucks    - compile nunjucks to html
  --uglify      - compress scripts
  --imagemin    - optmize images
  --sass        - compile sass to css
  --debug       - build uncompressed js file
  --force       - deploy file with no cache
  --currdir     - generate demo project file to current directory
  --config      - specified config file path
`;

const logo = `
┬ ┬╔═╗╔═╗╔═╗
│││║ ║║ ║║ ║
└┴┘╚═╝╚═╝╚═╝
-------pkg.version
`;

if (argv.h) {
    return console.log(help);
}
if (argv.v) {
    return console.log(pkg.version);
}
