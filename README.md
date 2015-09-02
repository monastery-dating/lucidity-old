# Lucidity [![Build Status](https://travis-ci.org/lucidogen/lucidity.svg)](https://travis-ci.org/lucidogen/lucidity)

Part of [Lucidity](http://lucidity.io) project.

This is a meta package for all libraries needed to create a 'lucid' app.

## Installation

Currently only works with [**io.js**](https://iojs.org).

  ```Shell
  npm install lucidity --save
  ```

## Setup

Once installed, create an 'index.js' file in the root directory with:

  ```Javascript
  require ( 'lucidity' )
  .boot ()
  ```

Now you can start your application from within the root directory. Your
application will be run by executing the code in the workbench:
`lucy/work/index.js`.

  ```Shell
  electron .
  ```

Note: you can install electron with

  ```Shell
  npm install -g electron-prebuilt
  ```

## Tests

  ```Shell
  npm test
  ```

## Contributing

Please use ['jessy style'](http://github.com/lucidogen/jessy).

Add unit tests (when possible) for any new or changed functionality.

## Issues

Please fill in issues for the specific libraries, not the meta-package 'lucidity'.

## Release History

  * 0.1.1 (2015-09-02) Updated docs.
  * 0.1.0 (2015-09-02) Initial release.
