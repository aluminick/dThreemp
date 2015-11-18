(function( prop, act ) {

    /**
     * path generator
     */

    function generatePath() {
        return d3.svg.line()
            .x(function(d) {return d.x})
            .y(function(d) {return d.y});
    }

    /**
     * running zone
     */
    var canvas = d3.select("body").append("svg")
        .attr({
            id: "running-zone",
            width: 600,
            height: 400
        });

    /**
     * player container
     */
    var playerContainer = canvas.append("g")
        .attr({
           id: "player-container"
        });

    /**
     * player parts
     */
    var player = {
        head : playerContainer.append("circle")
            .attr({
                id: prop.getHead().id,
                r: prop.getHead().r,
                fill: prop.getHead().color,
                transform: "translate("+ prop.getHead().x +" , " + prop.getHead().y + ")"
            }),
        body: playerContainer.append("path")
            .data([prop.getBody().d])
            .attr({
                id: prop.getBody.id,
                d: generatePath(),
                "stroke": prop.getBody().color,
                "stroke-width": prop.width(),
                "stroke-linecap": prop.round(),
                "fill": prop.fill()
            }),
        arms: playerContainer.append("path")
            .data([prop.getArms().d])
            .attr({
                id: prop.getLegs().id,
                d: generatePath(),
                "stroke": prop.getArms().color,
                "stroke-width": prop.width(),
                "stroke-linecap": prop.round(),
                "fill": prop.fill()
            }),
        legs: playerContainer.append("path")
            .data([prop.getLegs().d])
            .attr({
                id: prop.getLegs().id,
                d: generatePath(),
                "stroke": prop.getLegs().color,
                "stroke-width": prop.width(),
                "stroke-linecap": prop.round(),
                "fill": prop.fill()
            })
    };

    d3.select("body").on("keydown", function() {
        if(d3.event.keyCode === 82) {
            act.run(player, true)
        }
        if(d3.event.keyCode === 83) {
            act.run(player, false)
        }
    })



})(properties, actions);