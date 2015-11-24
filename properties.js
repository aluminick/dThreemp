var properties = (function() {
    var CANVAS = {
        size : {
            width: 600,
            height: 400
        },
        id: "running-zone"
    };

    CANVAS.fontFamily = "\"Arial Black\", Gadget, sans-serif";
    CANVAS.fontSize = "15px";
    CANVAS.fontColor = "#000000";

    CANVAS.btn = {};
    CANVAS.btn.fontFamily = "Impact, Charcoal, sans-serif";
    CANVAS.btn.fontSize = "25px";
    CANVAS.btn.width = 100;
    CANVAS.btn.height = 40;
    CANVAS.btn.borderRadius = 3;
    CANVAS.btn.labelColor = "#ffffff";
    CANVAS.btn.color = {
        play: "#3bd27a"
    };
    CANVAS.btn.id = {
        play: "btn-play"
    };
    CANVAS.btn.rect = {
        id: {
            play: "btn-play-rect"
        }
    };

    CANVAS.ground = {};
    CANVAS.ground.height = "10px";
    CANVAS.ground.color = "#ecf0f1";

    CANVAS.textSelect = {
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none"
    };

    var PLAYER_CONTAINER = {},
        PLAYER = {};

    /**
     * player container properties
     */
    PLAYER_CONTAINER.player = {
        id: "player-container"
    };
    PLAYER_CONTAINER.head = {
        id: "head-container",
        transform: "translate(70, 320)"
    };
    PLAYER_CONTAINER.body = {
        id: "body-container",
        transform: "translate(70, 334)"
    };
    PLAYER_CONTAINER.arms = {
        id: "arms-container",
        transform: "translate(70, 334)"
    };
    PLAYER_CONTAINER.legs = {
        id: "legs-container",
        transform: "translate(70, 360)"
    };

    /**
     * player parts properties
     */
    PLAYER.color = "#7f8c8d";//#a66bbe
    PLAYER.fill = "none";
    PLAYER.width = 7;
    PLAYER.lineCap = "round";

    PLAYER.head = {
        id: "head",
        r: 15
    };
    PLAYER.body = {
        id: "body",
        d: [
            {x: 0, y: 0},
            {x: 0, y: 13},
            {x: 0, y: 26}
        ]
    };
    PLAYER.arms = {
        left: {
            id: "leftArm",
            d: [
                {x: 0, y: 0},
                {x: -3, y: 15},
                {x: -2, y: 30}
            ]
        },
        right: {
            id: "rightArm",
            d: [
                {x: 0, y: 0},
                {x: 0, y: 15},
                {x: 2, y: 30}
            ]
        }
    };
    PLAYER.legs = {
        left: {
            id: "leftLeg",
            d: [
                {x: 0, y: 0},
                {x: -2, y: 15},
                {x: -6, y: 30}
            ]
        },
        right: {
            id: "rightLeg",
            d: [
                {x: 0, y: 0},
                {x: 2, y: 15},
                {x: 2, y: 30}
            ]
        }
    };

    return {
        getCanvasSize: function() {
            return CANVAS.size;
        },
        getCanvasId: function() {
            return CANVAS.id;
        },
        getFontFamily: function() {
            return CANVAS.fontFamily;
        },
        getFontSize: function() {
            return CANVAS.fontSize;
        },
        getFontColor: function() {
            return CANVAS.fontColor;
        },
        getGround: function() {
            return CANVAS.ground;
        },
        getButton: function() {
            return CANVAS.btn;
        },
        getButtonRectId: function() {
            return CANVAS.btn.rect.id;
        },
        disableSelection: function() {
            return CANVAS.textSelect;
        },
        getPlayerContainer: function() {
            return PLAYER_CONTAINER.player;
        },
        getHeadContainer: function() {
            return PLAYER_CONTAINER.head;
        },
        getBodyContainer: function() {
            return PLAYER_CONTAINER.body;
        },
        getArmsContainer: function() {
            return PLAYER_CONTAINER.arms;
        },
        getLegsContainer: function() {
            return PLAYER_CONTAINER.legs;
        },
        getHead: function() {
            return PLAYER.head;
        },
        getBody: function() {
            return PLAYER.body;
        },
        getArms: function() {
            return PLAYER.arms;
        },
        getLegs: function() {
            return PLAYER.legs;
        },
        getWidth: function() {
            return PLAYER.width;
        },
        getFill: function() {
            return PLAYER.fill;
        },
        getColor: function() {
            return PLAYER.color;
        },
        getCap: function() {
            return PLAYER.lineCap;
        }
    };
})();