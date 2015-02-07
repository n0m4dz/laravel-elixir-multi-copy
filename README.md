# laravel-elixir-multi-copy
Laravel Elixir - Copy multiple files.  

## Install

```
npm install laravel-elixir-multi-copy --save-dev
```

## Usage

Add it to your `Gulpfile.js`, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-multi-copy');

elixir(function(mix) {
   mix.multiCopy(['file1.js', 'file2.js'], 'outputDir');
});
```

If you want to combine files, like so:

```
elixir(function(mix) {
   mix.multiCopy(['file1.js', 'file2.js'], 'outputDir', 'combinedFile.js');
});
```
Instead of `combinedFile.js` you can 
