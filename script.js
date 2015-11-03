(function(){
	var svg = d3.select("body")
			.append("svg")
			.attr("width", 600)
			.attr("height", 420)
			.attr("id", "running-zone");

	var head = svg.append('circle')
			.attr("cx", 60)
			.attr("cy", 350)
			.attr("r", 10)
			.attr("stroke", "none")
			.attr("id", "head");

	var body = svg.append('path')
			.attr("d", "M 60 350 l 0 35")
			.attr("fill", "none")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 4)
			.attr("stroke", "#000")
			.attr("id", "body");
	var arms = svg.append('path')
			.attr("d", "M 55 380 l 0 -10 5 -10 2 10 5 10")
			.attr("fill", "none")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 4)
			.attr("stroke", "red")
			.attr("id", "arms");
/*	var legs = svg.append('path')
			.attr("d", "M 55 405 l 2 -10 3 -10 2 10 2 10")
			.attr("fill", "none")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 4)
			.attr("stroke", "#000")
			.attr("id", "legs");*/

	var frames = {
		rest: {
			head: {
				cx: 60,
				cy: 350
			},
			body: {
				d: ["M 60 350 l 0 35"]
			},
			arms: {
				d: ["M 55 380 l 0 -10 5 -10 2 10 5 10"]
			}
		},
		run: {
			head: {
				cx: 70,
				cy: 355
			},
			body: {
				d: ["M 65 355 l -5 20 0 15", "M 65 355 l -5 20 -2 15"]
			},
			arms: {
				d: ["M 58 385 l 0 -10 5 -10 2 10 5 10",
					"M 57 384 l -1 -11 7 -10 3 11 6 11",
					"M 56 383 l -2 -10 9 -10 4 12 7 12"] //5 -10 2 10 5 10
			}
		}
	};

	var actions = {
		run: function() {
			var	bodyFrames = frames.run.body.d,
				armsFrames = frames.run.arms.d,
				bodyCtr = 0,
				armsCtr = 0,
				legsCtr = 0;

			var run = setInterval(function() {
				head.attr("cx", frames.run.head.cx);
				head.attr("cy", frames.run.head.cy);

				if(bodyCtr < bodyFrames.length) {
					body.attr("d", bodyFrames[bodyCtr]);
					bodyCtr++;
				}

				if(armsCtr < armsFrames.length) {
					arms.attr("d", armsFrames[armsCtr]);
					console.log(armsFrames[armsCtr])
					armsCtr++;

				}
			}, 50);


		}
	}
	actions.run();
	
})();