/**
 * This is the entry point of the app
 */

(function(prop) {
    var canvas = d3.select("body").append("svg")
        .attr({
            width: prop.getCanvasSize().width,
            height: prop.getCanvasSize().height,
            id: prop.getCanvasId()
        });

    /**
     * player
     */
    var player = {};
    player.container = canvas.append("g")
        .attr({
            id: prop.getPlayerContainer().id
        });
    //player head
    player.container.headContainer = player.container.append("g")
        .attr({
            id: prop.getHeadContainer().id
        });
    player.container.headContainer.head = player.container.headContainer.append("circle")
        .attr({
            id: prop.getHead().id,
            r: prop.getHead().r
        });

    //player body
    player.container.bodyContainer = player.container.append("g")
        .attr({
            id: prop.getBodyContainer().id
        });
    player.container.bodyContainer.body = player.container.bodyContainer.append("path")
        .attr({
            id: prop.getBody().id
        });

    //player arms
    player.container.armsContainer = player.container.append("g")
        .attr({
            id: prop.getArmsContainer().id
        });
    player.container.armsContainer.left = player.container.armsContainer.append("path")
        .attr({
            id: prop.getArms().left.id
        });
    player.container.armsContainer.right = player.container.armsContainer.append("path")
        .attr({
            id: prop.getArms().right.id
        });

    //player legs
    player.container.legsContainer = player.container.append("g")
        .attr({
            id: prop.getLegsContainer().id
        });
    player.container.legsContainer.left = player.container.legsContainer.append("path")
        .attr({
            id: prop.getLegs().left.id
        });
    player.container.legsContainer.right = player.container.legsContainer.append("path")
        .attr({
            id: prop.getLegs().right.id
        });

})(properties);
