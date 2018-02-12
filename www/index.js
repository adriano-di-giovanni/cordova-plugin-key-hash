var exec = require('cordova/exec')

/**
 * Generates and asynchronously returns the application key hashes
 *
 * @param {Function} done the success callback. Invoked with `(keyHashes)`.
 * @param {Function} doneWithError the error callback. Invoked with `(err)`.
 */
module.exports = function(done, doneWithError) {
    if (typeof done !== 'function') {
        throw new Error("Missing or invalid argument, 'done'. Function expected.")
    }

    if (typeof doneWithError !== 'function') {
        throw new Error("Missing or invalid argument, 'doneWithError'. Function expected.")
    }

    exec(done, doneWithError, 'getKeyHashes', 'getKeyHashes', [])
}
