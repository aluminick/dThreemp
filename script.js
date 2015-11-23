/**
 * This is the entry point of the app
 */

(function(prop) {

    /**
     * Path generator
     */
    var pathGenerator = d3.svg.line()
        .x(function(d) {return d.x})
        .y(function(d) {return d.y});

    /**
     * Game zone
     */
    var canvas = d3.select("body").append("svg")
        .attr({
            width: prop.getCanvasSize().width,
            height: prop.getCanvasSize().height,
            id: prop.getCanvasId()
        })
        .style(prop.disableSelection());

    /**
     * Ground
     */
    canvas.append("rect")
        .attr({
            width: prop.getCanvasSize().width,
            height: prop.getGround().height,
            fill: prop.getGround().color,
            y: prop.getCanvasSize().height - 10
        });

    /**
     * Play button
     */
    var btnPlayContainer = canvas.append("g")
        .attr({
            id: prop.getButton().id.play,
            transform: "translate(" + (prop.getCanvasSize().width - 110) +", "+ (prop.getCanvasSize().height - 60) +")"
        })
        .style({
            cursor: "pointer"
        });

    btnPlayContainer.append("rect")
        .attr({
            id: prop.getButtonRectId().play,
            width: prop.getButton().width,
            height: prop.getButton().height,
            rx: prop.getButton().borderRadius,
            ry: prop.getButton().borderRadius,
            fill: prop.getButton().color.play
        });

    btnPlayContainer.append("text")
        .attr({
            x: 28,
            y: 30,
            "font-family": prop.getButton().fontFamily,
            "font-size": prop.getButton().fontSize,
            fill: prop.getButton().labelColor
        })
        .text("PLAY");

    /**
     * Score
     */
    canvas.append("text")
        .attr({
            x: 10,
            y: 20,
            "font-family": prop.getFontFamily(),
            "font-size": prop.getFontSize(),
            fill: prop.getFontColor()
        })
        .text("Score:");

    var score = canvas.append("text")
        .attr({
            x: 55,
            y: 20,
            "font-family": prop.getFontFamily(),
            "font-size": prop.getFontSize(),
            fill: "#2980b9"
        })
        .text("0");

    /**
     * Countdown timer for start
     */
    var countDown = canvas.append("text")
        .attr({
            x: prop.getCanvasSize().width/2,
            y: prop.getCanvasSize().height/2,
            fill: "#3b9bdc",
            "text-anchor": "middle"
        });

    var startCountdown = function(ctr) {
        countDown
            .attr({
                "font-size": "50px",
                y: 220
            })
            .transition()
            .duration(1000)
            .attr({
                "font-size": "0px",
                y: 200
            })
            .text(ctr--)
            .each("end", function() {
                if(ctr > 0) {
                    startCountdown(ctr);
                } else {
                    actions.run(player, true);
                }
            });
    };
    /**
     * Player object
     */
    var player = {};
    player.container = canvas.append("g")
        .attr({
            id: prop.getPlayerContainer().id
        });

    /**
     * Player head
     */
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

    /**
     * Player body
     */
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

    /**
     * Player arms
     */
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

    /**
     * Player legs
     */
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

/*    d3.select("body").on("keydown", function() {
        if(d3.event.keyCode === 82) {
            actions.run(player, true);
        }
        if(d3.event.keyCode === 83) {
            actions.run(player, false);
        }
    });*/

    /**
     * button effects
     */
    d3.select("#btn-play").on("mouseover", function() {
        d3.select("#btn-play-rect")
            .transition()
            .attr("fill", "#27ae60");
    });
    d3.select("#btn-play").on("mouseout", function() {
        d3.select("#btn-play-rect")
            .transition()
            .attr("fill", "#3bd27a");
    });

    /**
     * Start game trigger
     */
    d3.select("#btn-play").on("click", function() {
        d3.select(this)
            .transition()
            .style({
                visibility: "hidden"
            })
            .each("end", function() {
                var ctrStart = 3;
                startCountdown(ctrStart);
            });
    });

})(properties);
