exports.defineAutoTests = function() {
    var getKeyHashes = window.plugins.getKeyHashes

    it('should be a function', function() {
        expect(typeof getKeyHashes).toBe('function')
    })

    it("should throw when 'done' argument is not a function.", function() {
        expect(function() {
            getKeyHashes()
        }).toThrowError(/done/)
    })

    it("should throw when 'doneWithError' argument is not a function.", function() {
        expect(function() {
            getKeyHashes(function() {})
        }).toThrowError(/doneWithError/)
    })

    it('should asynchronously return the application key hashes', function(done) {
        var teardown = function(keyHashes) {
            expect(Array.isArray(keyHashes)).toBe(true)
            expect(
                keyHashes.every(function(keyHash) {
                    return typeof keyHash === 'string'
                })
            ).toBe(true)
            expect(successCallback).toHaveBeenCalledTimes(1)
            expect(errorCallback).not.toHaveBeenCalled()
            done()
        }
        var successCallback = jasmine.createSpy('successCallback', teardown).and.callThrough()
        var errorCallback = jasmine.createSpy('errorCallback', teardown).and.callThrough()

        getKeyHashes(successCallback, errorCallback)
    })
}
