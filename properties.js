var properties = (function() {
    /**
     * player properties
     */
    var prop = {
        head: {
            r: 15,
            id: "head",
            x: 60,
            y: 330
        },
        body: {

        }
    };

    return {
        getHead: function() {
            return prop.head;
        }
    };
})();