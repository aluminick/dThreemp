var actions = (function(prop) {
    var running = false;
    var pathGenerator = d3.svg.line()
        .x(function(d) {return d.x})
        .y(function(d) {return d.y});
    return {
        run: function(player, start) {
            if(start === true) {
                if(running === false) {
                    running = true;

                    //move head
                    player.container.headContainer
                        .transition()
                        .attr({
                            transform: run.getHeadContainer().ready.transform
                        });

                    //move body
                    player.container.bodyContainer
                        .transition()
                        .attr({
                            transform: run.getBodyContainer().ready.transform
                        });
                    player.container.bodyContainer.body
                        .data([run.getBody().ready.d])
                        .transition()
                        .attr({
                            d: pathGenerator
                        });

                    //move arms
                    player.container.armsContainer
                        .transition()
                        .attr({
                            transform: run.getArmsContainer().ready.transform
                        });
                    player.container.armsContainer.left
                        .data([run.getArms().ready.left.d])
                        .transition()
                        .attr({
                            d: pathGenerator,
                            transform: run.getArms().ready.left.transform
                        });
                    player.container.armsContainer.right
                        .data([run.getArms().ready.right.d])
                        .transition()
                        .attr({
                            d: pathGenerator,
                            transform: run.getArms().ready.right.transform
                        });

                    //move legs
                    player.container.legsContainer
                        .transition()
                        .attr({
                            transform: run.getLegsContainer().ready.transform
                        });
                    player.container.legsContainer.left
                        .data([run.getLegs().ready.left.d])
                        .transition()
                        .attr({
                            d: pathGenerator,
                            transform: run.getLegs().ready.left.transform
                        });
                    player.container.legsContainer.right
                        .data([run.getLegs().ready.right.d])
                        .transition()
                        .attr({
                            d: pathGenerator,
                            transform: run.getLegs().ready.right.transform
                        })
                        .each("end", function() {
                            rotate();
                        });
                }
                function rotate() {
                    if(running === false){
                        return true;
                    }
                    var backward= Math.random()*((-80 - -70)-1) + -70,
                        forward= Math.random()*((80 - 70)+1) + 70;

                    player.container.headContainer
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "translate(80, 324)"
                        })
                        .transition()
                        .attr({
                            transform: "translate(80, 323)"
                        });
                    player.container.armsContainer.left
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(" + backward + ")"
                        })
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(" + forward + ")"
                        });
                    player.container.armsContainer.right
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(" + forward + ")"
                        })
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(" + backward + ")"
                        });
                    player.container.legsContainer.left
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(-70)"
                        })
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(60)"
                        });
                    player.container.legsContainer.right
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(60)"
                        })
                        .transition()
                        .duration(300)
                        .attr({
                            transform: "rotate(-70)"
                        })
                        .each("end", function(){
                            rotate();
                        })
                }
            } else {
                if(running === true) {
                    running = false;
                    player.container.headContainer
                        .transition()
                        .duration(100)
                        .attr({
                            transform: prop.getHeadContainer().transform
                        });

                    //player body
                    player.container.bodyContainer
                        .transition()
                        .duration(100)
                        .attr({
                            transform: prop.getBodyContainer().transform
                        });
                    player.container.bodyContainer.body
                        .data([prop.getBody().d])
                        .transition()
                        .duration(100)
                        .attr({
                            d: pathGenerator
                        });

                    //player arms
                    player.container.armsContainer
                        .transition()
                        .duration(100)
                        .attr({
                            transform: prop.getArmsContainer().transform
                        });
                    player.container.armsContainer.left
                        .data([prop.getArms().left.d])
                        .transition()
                        .duration(100)
                        .attr({
                            d: pathGenerator,
                            transform: "rotate(0)"
                        });
                    player.container.armsContainer.right
                        .data([prop.getArms().right.d])
                        .transition()
                        .duration(100)
                        .attr({
                            d: pathGenerator,
                            transform: "rotate(0)"
                        });

                    //player legs
                    player.container.legsContainer
                        .transition()
                        .duration(100)
                        .attr({
                            transform: prop.getLegsContainer().transform
                        });
                    player.container.legsContainer.left
                        .data([prop.getLegs().left.d])
                        .transition()
                        .duration(100)
                        .attr({
                            d: pathGenerator,
                            transform: "rotate(0)"
                        });
                    player.container.legsContainer.right
                        .data([prop.getLegs().right.d])
                        .transition()
                        .duration(100)
                        .attr({
                            d: pathGenerator,
                            transform: "rotate(0)"
                        });
                }
            }
        }
    };
})(properties);