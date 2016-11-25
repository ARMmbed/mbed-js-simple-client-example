# mbed-js-simple-client-example

Connect your microcontroller to the internet via [mbed Device Connector](http://connector.mbed.com/) using [JavaScript on mbed](https://developer.mbed.org/javascript-on-mbed/).

## Dependencies

Install:

* A recent version of [node.js](http://nodejs.org/).
* [Gulp](http://gulpjs.com/).
* [mbed CLI](https://github.com/ARMmbed/mbed-cli) and its dependencies.

## Build

1. Run `npm install`.
1. Create a [Device Certificate](https://connector.mbed.com/#credentials) and copy the contents to ``native_extras\security.h``.
1. Configure your connectivity method in ``native_extras\mbed_app.json``. See [here](https://docs.mbed.com/docs/building-an-internet-connected-lighting-system/en/latest/4_connectivity/) for more information.
1. Run `gulp --target=YOUR_TARGET_NAME`.
    * To find your target name, look at the [platforms](http://developer.mbed.org/platforms/) page for your development board.
1. Copy the `mbedos5.hex` or `mbedos5.bin` file from `build/out/YOUR_TARGET_NAME` onto your development board.
1. Your device will register with mbed Device Connector and show up under [Connected devices](https://connector.mbed.com/#endpoints).

