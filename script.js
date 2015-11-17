(function(prop) {
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
     * parts container
     */
    var headContainer = canvas.append("g")
            .attr({
                id: "head-container",
                transform: "translate("+ prop.getHead().cx +" , " + prop.getHead().cy + ")"
            }),
        bodyContainer = canvas.append("g")
            .attr("id", "body-container"),
        armsContainer = canvas.append("g")
            .attr("id", "arms-container"),
        legsContainer = canvas.append("g")
            .attr("id", "legs-container");

    /**
     * append parts
     */
    var head = headContainer.append("circle")
        .attr({
            id: prop.getHead().id,
            r: prop.getHead().r
        })

})(properties);