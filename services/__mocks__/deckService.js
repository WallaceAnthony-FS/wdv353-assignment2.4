const axios = require("axios")
require("dotenv").config()

const deckService = async (shuffle=false) => {
    return Promise.resolve({
        data: {
            "success": true,
            "deck_id": "3p40paa87x90",
            "shuffled": shuffle,
            "remaining": 52
        }
    })
}

const drawCardFromDeckServiceById = async (id, numberOfCards) => {
    return Promise.resolve({
        data: {
            "success": true,
            "cards": [
                {
                    "image": "https://www.deckofcardsapi.com/static/img/KH.png",
                    "value": "KING",
                    "suit": "HEARTS",
                    "code": "KH"
                },
                {
                    "image": "https://www.deckofcardsapi.com/static/img/8C.png",
                    "value": "8",
                    "suit": "CLUBS",
                    "code": "8C"
                }
            ],
            "deck_id": "3p40paa87x90",
            "remaining": 50
        }
    })
}

module.exports = {
    deckService,
    drawCardFromDeckServiceById
}