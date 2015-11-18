var actions = (function ( prop ) {

    function generatePath() {
        return d3.svg.line()
            .x(function(d) {return d.x})
            .y(function(d) {return d.y});
    }

    var controls = {
        running: false
    };

    var head = {},
        body = {},
        arms = {},
        legs = {};
    
    return {
        run: function( player, start ) {
            if( start === true ) {
                if( controls.running === false ) {
                    controls.running = true;
                    console.log("running");
                }
            } else {
                if( controls.running === true ) {
                    controls.running = false;

                    console.log("stopped");
                }
            }
        }
    };
})( run );