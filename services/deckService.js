const axios = require("axios")
require("dotenv").config()

const deckService = async (shuffle=false) => {
    if(shuffle){
        return await axios.get(process.env.CARD_API_BASE_URL + "new/shuffle")
    }else{
        return await axios.get(process.env.CARD_API_BASE_URL + "new")
    }
}

const drawCardFromDeckServiceById = async (id, numberOfCards) => {
    return await axios.get(process.env.CARD_API_BASE_URL + `${id}/draw/?count=${numberOfCards}`)
}

module.exports = {
    deckService,
    drawCardFromDeckServiceById
}