const express = require("express")
const deckRouter = require("../router/deckRouter")

const app = express()
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running"
    })
})

app.use("/deck", deckRouter)

app.use((req, res, next) => {
    const error = new Error("Not found!")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const deckRoutes = deckRouter.stack.map((r) => {
        if (r.route && r.route.path){
          return r.route.path
        }
      })
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        },
        routes: {
            deckRouter: deckRoutes
        }
    })
})

module.exports = app