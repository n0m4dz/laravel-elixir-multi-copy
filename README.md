# laravel-elixir-multi-copy
Laravel Elixir - Copy multiple files.  

## Install

```
npm install laravel-elixir-multi-copy --save-dev
```

## Usage

Add it to your `Gulpfile.js`, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-multi-copy');

var files = {
    cssFiles: {
        files: [
            'file1.css',
            'file2.css'
        ],
        dest: 'public/css/',
        outputFile: 'all.css' 
    },
    jsFiles: {
        files: [
            'file1.js',
            'file2.js'
        ],
        dest: 'public/js/'
    },
    fontFiles: {
        files: 'resource/assets/fonts/*'
        dest: "public/fonts/"
    }
};

elixir(function(mix) {
   mix.multiCopy(files);
});
```

First argument `files` is the entry point of your application. Second argument `dest` is the destination point and last one `outputFile` is an optional argument. If it is not defined, files are copied into destination folder. If it is defined files are combined into one file. The result of above example is:

```
project-dir/
  |- /
  |  public/
  |  |  /
  |  |- css/
  |  |  |- all.css
  |  |- |
  |  |- js/
  |  |  |- file1.js
  |  |  |- file2.js
  |  |- |
  |  |- fonts/
  |  |- |- font1.ttf
  |  |- |- font2.eot
  |  |- |- font1.svg
  |  |- |- font2.woff
  |  |  |
```
