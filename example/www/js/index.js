/* global $ */
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },

    onDeviceReady: function() {
        var getKeyHashes = window.plugins.getKeyHashes

        $('#button-get-key-hashes')
            .button('option', 'disabled', false)
            .click(function() {
                $.mobile.loading('show')
                getKeyHashes(
                    function(keyHashes) {
                        $.mobile.loading('hide')
                        var $el = $('ul')
                        $el.empty()
                        keyHashes.forEach(function(keyHash) {
                            $el.append($('<li>' + keyHash + '</li>'))
                            $el.listview('refresh')
                        })
                    },
                    function(err) {
                        $.mobile.loading('hide')
                        window.alert(err)
                    }
                )
            })

        $('#button-run-tests')
            .button('option', 'disabled', false)
            .click(function() {
                window.location.href = 'cdvtests/index.html'
            })
    },
}

app.initialize()
