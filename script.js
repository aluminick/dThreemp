(function(){

	var pathGenerator = d3.svg.line()
		.x(function(d) { return d.x})
		.y(function(d) { return d.y});

	var runningZone = d3.select("body")
		.append("svg")
		.attr({
			width: 600,
			height: 400,
			id: "running-zone"
		});

	var playerContainer = runningZone.append("g")
		.attr({
			id: "player-container",
			transform: "translate(70, 300)"
		});

	var armsContainer = playerContainer.append("g")
		.attr({
			id: "arms-container"
		});

	var legsContainer = playerContainer.append("g")
		.attr({
			id: "legs-container"
		});

	var playerProperties = {
		head: {
			r: 15
		},
		body: {
			d: [
				{x: 0, y: 0},
                {x: 0, y: 20},
				{x: 0, y: 40}
			]
		},
		arms: {
			left: {
				d: [
					{x: -1, y: 0},
					{x: -2, y: 15},
					{x: -4, y: 30}
				]
			},
			right: {
				d: [
					{x: 1, y: 0},
					{x: 2, y: 15},
					{x: 4, y: 30}
				]
			},
			transform: "translate(0, 15)"
		},
		legs: {
			left: {
				d: [
					{x: 0, y:0},
					{x: -2, y: 20},
					{x: -4, y: 40}
				]
			},
			right: {
				d: [
					{x: 0, y:0},
					{x: 2, y: 20},
					{x: 4, y: 40}
				]
			},
			transform: "translate(0, 40)"
		},
		thickness: 6
	};

	var playerActionFrames = {
		run: {
			head: {
                transform: "translate(15, 10)"
			},
			body: {
                d: [
                    {x: 10, y: 20},
                    {x: 5, y: 30},
                    {x:-2, y: 50}
                ]
			},
			arms: {
				left: {
                    d: [
                        {x: 5, y: 10},
                        {x: -8, y: 15},
                        {x: 0, y: 28}
                    ],
                    after: {
                        transform: "translate(-2, 28) rotate(270)"
                    },
                    again: {
                        transform: "translate(5,12)rotate(30)"
                    }
				},
				right: {
                    d: [
                        {x: 8, y: 10},
                        {x: 16, y: 25},
                        {x: 25, y: 10}
                    ]
				}
			},
			legs: {
				left: {

				},
				right: {

				}
			}
		}
	};

	var player = {
		head		: playerContainer.append("circle")
			.attr({
				id: "head",
				r: playerProperties.head.r
			}),

		body		: playerContainer.append("path")
			.data([playerProperties.body.d])
			.attr({
				d: pathGenerator,
				"stroke-width": playerProperties.thickness,
				"stroke": "#000000",
				"fill" : "none",
				"stroke-linecap": "round",
				id: "body"
			}),

		leftArm		: armsContainer.append("path")
			.data([playerProperties.arms.left.d])
			.attr({
				d: pathGenerator,
				"stroke-width": playerProperties.thickness,
				"stroke": "#000000",
				"fill" : "none",
				"stroke-linecap": "round",
				"transform": playerProperties.arms.transform,
				id: "left-arm"
			})/*,


		rightArm	: armsContainer.append("path")
			.data([playerProperties.arms.right.d])
			.attr({
				d: pathGenerator,
				"stroke-width": playerProperties.thickness,
				"stroke": "#000000",
				"fill" : "none",
				"stroke-linecap": "round",
				"transform": playerProperties.arms.transform,
				id: "right-arm"
			})*//*,

		leftLeg		: legsContainer.append("path")
			.data([playerProperties.legs.left.d])
			.attr({
				d: pathGenerator,
				"stroke-width": playerProperties.thickness,
				"stroke": "#000000",
				"fill" : "none",
				"stroke-linecap": "round",
				"transform": playerProperties.legs.transform,
				id: "left-leg"
			})*//*,

		rightLeg	:legsContainer.append("path")
			.data([playerProperties.legs.right.d])
			.attr({
				d: pathGenerator,
				"stroke-width": playerProperties.thickness,
				"stroke": "#000000",
				"fill" : "none",
				"stroke-linecap": "round",
				"transform": playerProperties.legs.transform,
				id: "right-leg"
			})*/
	};

	var playerActions = {
		rest: function() {
            var self = this;

		},
		run: function() {

            var repeat = function(el) {
                if(el.attr("id") === "left-arm") {
                    el.transition()
                        .attr({
                            transform: playerActionFrames.run.arms.left.after.transform
                        })
                        .transition()
                        .attr({
                            transform: playerActionFrames.run.arms.left.again.transform
                        })
                        .each("end", function() {
                           repeat(el);
                        });
                }
            };

            player.head
                .transition()
                .attr({
                   transform: playerActionFrames.run.head.transform
                });

            player.body
                .data([playerActionFrames.run.body.d])
                .transition()
                .attr({
                    d: pathGenerator
                });

            player.leftArm
                .data([playerActionFrames.run.arms.left.d])
                .transition()
                .attr({
                    d: pathGenerator
                })
                .each("end", function() {
                    repeat(player.leftArm);
                });

            /*player.rightArm
                .data([playerActionFrames.run.arms.right.d])
                .transition()
                .attr({
                   d: pathGenerator
                });*/

		}
	};

	document.getElementsByTagName("body")[0].onkeydown = function(e) {
		if(e.keyCode === 82) {
			playerActions.run();
		}
	};
})();