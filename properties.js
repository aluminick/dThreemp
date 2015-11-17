var properties = (function() {
    /**
     * player properties
     */
    var prop = {
        head: {
            r: 15,
            id: "head",
            cx: 60,
            cy: 330
        }
    };

    return {
        getHead: function() {
            return prop.head;
        }
    };
})();