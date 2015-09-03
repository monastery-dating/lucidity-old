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

## Modules

  * **[lucy-app](http://github.com/lucidogen/lucy-app)** Application runtime and main event loop.
  * **[lucy-live](http://github.com/lucidogen/lucy-live)** Live coding support.
  * **[lucy-compose](http://github.com/lucidogen/lucy-compose)** Scene composition.
  * **[lucy-three](http://github.com/lucidogen/lucy-three)** Scene composition for THREE.js.
  * **[lucy-forge](http://github.com/lucidogen/lucy-forge)** Minimal component/entity composition to 'mixin' behaviors.
  * **[lucy-boot](http://github.com/lucidogen/lucy-boot)** Electron application main process management.
  * **[lucy-util](http://github.com/lucidogen/lucy-util)** Utility library (value smoothing, etc).

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
