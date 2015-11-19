/**
 * This is the entry point of the app
 */

(function(prop) {
    var pathGenerator = d3.svg.line()
        .x(function(d) {return d.x})
        .y(function(d) {return d.y});

    var canvas = d3.select("body").append("svg")
        .attr({
            width: prop.getCanvasSize().width,
            height: prop.getCanvasSize().height,
            id: prop.getCanvasId()
        });

    var player = {};
    player.container = canvas.append("g")
        .attr({
            id: prop.getPlayerContainer().id
        });
    //player head
    player.container.headContainer = player.container.append("g")
        .attr({
            id: prop.getHeadContainer().id,
            transform: prop.getHeadContainer().transform
        });
    player.container.headContainer.head = player.container.headContainer.append("circle")
        .attr({
            id: prop.getHead().id,
            r: prop.getHead().r,
            fill: prop.getColor()
        });

    //player body
    player.container.bodyContainer = player.container.append("g")
        .attr({
            id: prop.getBodyContainer().id,
            transform: prop.getBodyContainer().transform
        });
    player.container.bodyContainer.body = player.container.bodyContainer.append("path")
        .data([prop.getBody().d])
        .attr({
            id: prop.getBody().id,
            d: pathGenerator,
            fill: prop.getFill(),
            "stroke-width": prop.getWidth(),
            stroke: prop.getColor(),
            "stroke-linecap": prop.getCap()
        });

    //player arms
    player.container.armsContainer = player.container.append("g")
        .attr({
            id: prop.getArmsContainer().id,
            transform: prop.getArmsContainer().transform
        });
    player.container.armsContainer.left = player.container.armsContainer.append("path")
        .data([prop.getArms().left.d])
        .attr({
            id: prop.getArms().left.id,
            d: pathGenerator,
            fill: prop.getFill(),
            "stroke-width": prop.getWidth(),
            stroke: prop.getColor(),
            "stroke-linecap": prop.getCap()
        });
    player.container.armsContainer.right = player.container.armsContainer.append("path")
        .data([prop.getArms().right.d])
        .attr({
            id: prop.getArms().right.id,
            d: pathGenerator,
            fill: prop.getFill(),
            "stroke-width": prop.getWidth(),
            stroke: prop.getColor(),
            "stroke-linecap": prop.getCap()
        });

    //player legs
    player.container.legsContainer = player.container.append("g")
        .attr({
            id: prop.getLegsContainer().id,
            transform: prop.getLegsContainer().transform
        });
    player.container.legsContainer.left = player.container.legsContainer.append("path")
        .data([prop.getLegs().left.d])
        .attr({
            id: prop.getLegs().left.id,
            d: pathGenerator,
            fill: prop.getFill(),
            "stroke-width": prop.getWidth(),
            stroke: prop.getColor(),
            "stroke-linecap": prop.getCap()
        });
    player.container.legsContainer.right = player.container.legsContainer.append("path")
        .data([prop.getLegs().right.d])
        .attr({
            id: prop.getLegs().right.id,
            d: pathGenerator,
            fill: prop.getFill(),
            "stroke-width": prop.getWidth(),
            stroke: prop.getColor(),
            "stroke-linecap": prop.getCap()
        });

    d3.select("body").on("keydown", function() {
        if(d3.event.keyCode === 82) {
            actions.run(player, true);
        }
        if(d3.event.keyCode === 83) {
            actions.run(player, false);
        }
    });
})(properties);
