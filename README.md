# Key Hash for Cordova

[![Build Status](https://travis-ci.org/adriano-di-giovanni/cordova-plugin-key-hash.svg?branch=master)](https://travis-ci.org/adriano-di-giovanni/cordova-plugin-key-hash)

> This plugin provides the ability to generate and retrieve application key hashes from signatures.

## Installation

```bash
cordova plugin add cordova-plugin-key-hash
```

## Usage

```javascript
var successCallback = function(keyHashes) {
    console.log(keyHashes) // ['NoeLNrq33NiEm2sfQRTnS+clCx4=']
}
var errorCallback = function(err) {
    window.alert(err)
}

window.plugins.getKeyHashes(successCallback, errorCallback)
```

## Supported platforms

* Android

## Example app and tests

You can find example an example app inside the `example/` folder. You can run auto tests tapping on the `Run tests` button in the app.

| Example app          | Auto tests           |
| -------------------- | -------------------- |
| ![android-example-1] | ![android-example-2] |

[android-example-1]: images/android-example-1.png
[android-example-2]: images/android-example-2.png

## License

This project is [MIT-licensed](LICENSE)
