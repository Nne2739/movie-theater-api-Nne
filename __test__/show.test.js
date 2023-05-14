const request = require("supertest");
const app = require("../app");
const show = require("../routes/shows");


describe("Shows endpoints", () => {
    it("gets all shows", async() => {
        const response = await request(app).get("/shows")
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject(Shows.userData)
    })
    it("gets one show", async() => {
        const response = await request(app).get("/shows/1")
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject([
            {
                "title": "King of Queens",
                "genre": "Drama",
                "rating": 5,
                "status": "on-going"
              }
        ])
    })
    it("gets shows of a specific genre")
    it("updates the rating of a show that has been watched")
    it("updates the status of the show")
    it("deletes a show")
})