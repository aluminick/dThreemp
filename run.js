var run = (function() {

    var PLAYER_CONTAINER ={},
        PLAYER = {};

    PLAYER_CONTAINER.head = {
        ready: {
            transform: "translate(80, 323)"
        }
    };

    PLAYER_CONTAINER.body = {
        ready: {
            transform: "translate(75, 333)"
        }
    };

    PLAYER_CONTAINER.arms = {
        ready: {
            transform: "translate(74, 338)"
        }
    };

    PLAYER_CONTAINER.legs = {
        ready: {
            transform: "translate(65, 360)"
        }
    };

    PLAYER.body = {
        ready: {
            d: [
                {x: 0, y: 0},
                {x: -5, y: 15},
                {x: -10, y: 28}
            ]
        }
    };

    PLAYER.arms = {
        ready: {
            left: {
                d: [
                    {x: 0, y: 0},
                    {x: 0, y: 15},
                    {x: 15, y: 15}
                ],
                transform: "rotate(50)"
            },
            right: {
                d: [
                    {x: 0, y: 0},
                    {x: 0, y: 15},
                    {x: 15, y: 15}
                ],
                transform: "rotate(-50)"
            }
        }
    };

    PLAYER.legs = {
        ready: {
            left: {
                d: [
                    {x: 0, y: 0},
                    {x: 0, y: 18},
                    {x: -15, y: 25}
                ],
                transform: "rotate(60)"
            },
            right: {
                d: [
                    {x: 0, y: 0},
                    {x: 0, y: 18},
                    {x: -15, y: 25}
                ],
                transform: "rotate(-70)"
            }
        }
    };

    return {
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
        getBody: function() {
            return PLAYER.body;
        },
        getArms: function() {
            return PLAYER.arms;
        },
        getLegs: function() {
            return PLAYER.legs;
        }
    };
})();