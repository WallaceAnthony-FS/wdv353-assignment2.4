const express = require("express")
const { deckService, drawCardFromDeckServiceById } = require("../services/deckService")

const deckRouter = express.Router()

deckRouter.get("/", (req, res, next) => {
    const shuffle = !!req.query.shuffle === true
    deckService(shuffle).then(result => {
        res.status(200).json(result.data)
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

deckRouter.get("/:id/:numberOfCards", (req, res, next) => {
    const {id, numberOfCards} = req.params
    drawCardFromDeckServiceById(id, numberOfCards).then(result => {
        res.status(200).json(result.data)
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})



module.exports = deckRouter