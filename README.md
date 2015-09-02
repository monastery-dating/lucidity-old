# Lucidity [![Build Status](https://travis-ci.org/lucidogen/lucidity.svg)](https://travis-ci.org/lucidogen/lucidity)

Part of [Lucidity](http://lucidity.io) project.

This is a meta package at the moment for all libraries needed to create a
'lucid' app.

All of this is currently in beta. Please visit website or for more information.

## Installation

Currently only works with [**io.js**](https://iojs.org).

  ```Shell
  npm install lucidity --save
  ```

## Setup

Once installed, create an 'index.js' file in the root directory with:

  ```Javascript
  require ( 'lucy-boot' )
  .boot ()
  ```

Now you can start Lucidity from within the root directory. Note that this
application is empty and does nothing.

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

## Release History

  * 0.1.0 (2015-09-02) Initial release.
