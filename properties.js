var properties = (function() {
    var CANVAS = {
        size : {
            width: 600,
            height: 400
        },
        id: "running-zone"
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
        id: "body-container"
    };
    PLAYER_CONTAINER.arms = {
        id: "arms-container"
    };
    PLAYER_CONTAINER.legs = {
        id: "legs-container"
    };

    /**
     * player parts properties
     */
    PLAYER.head = {
        id: "head",
        r: 15
    };
    PLAYER.body = {
        id: "body"
    };
    PLAYER.arms = {
        left: {
            id: "leftArm"
        },
        right: {
            id: "rightArm"
        }
    };
    PLAYER.legs = {
        left: {
            id: "leftLeg"
        },
        right: {
            id: "rightLeg"
        }
    };

    return {
        getCanvasSize: function() {
            return CANVAS.size;
        },
        getCanvasId: function() {
            return CANVAS.id;
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
            return PLAYER.head
        },
        getBody: function() {
            return PLAYER.body
        },
        getArms: function() {
            return PLAYER.arms
        },
        getLegs: function() {
            return PLAYER.legs
        }
    };
})();