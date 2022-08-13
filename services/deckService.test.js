const { deckService, deckServiceById, drawCardFromDeckServiceById } = require("./deckService")

jest.mock("./deckService")
describe("Deck service test", () => {
    test("Should return a deck of 52 un-shuffled cards", async () => {
        const {data} = await deckService()
        expect(data.success).toEqual(true)
        expect(data.deck_id).toEqual("3p40paa87x90")
        expect(data.shuffled).toEqual(false)
        expect(data.remaining).toEqual(52)
    })

    test("Should return a deck of 52 shuffled cards", async () => {
        const {data} = await deckService(true)
        expect(data.success).toEqual(true)
        expect(data.deck_id).toEqual("3p40paa87x90")
        expect(data.shuffled).toEqual(true)
        expect(data.remaining).toEqual(52)
    })

    test("Should return two cards from a given deck by id", async () => {
        const {data} = await drawCardFromDeckServiceById("3p40paa87x90", 2)
        expect(data.success).toEqual(true)
        expect(data.deck_id).toEqual("3p40paa87x90")
        expect(data.remaining).toEqual(50)
        expect(data.cards).toHaveLength(2)
    })
})