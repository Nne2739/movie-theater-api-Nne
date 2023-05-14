const request = require("supertest");
const app = require("../app");
const user = require("../routes/users");
//const data = require("../seed"); -> I panicked

describe("User endpoints", () => {
    it("gets all users", async() => {
        const response = await request(app).get("/users")
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject(Users.userData)
    })
    it("gets one user", async() => {
        const response = await request(app).get("/users/1")
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject([{
            "username": "testUser@gmail.com",
            "password": "ThisIsA"
          }])
    })
    it("gets all shows watched by user", async() => {
        const response = await request(app).get("/users/1/shows")
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject(Shows.showsData)
    })
    it("update/add show if user has watched it", async() => {
        const response = await request(app).put("/users/1/shows").send({ showId: 2, status: "watched"})
        expect(response.status).toEqual(200)
        expect(response.body).toMatchObject({
            "message": `King of Queens added to testUser@gmail.com's Seen List!`
        })
    })
})

//My tests wont pass, I apparently need a middleware function, I tried to teach myself about it but I need a bit more time to understand it so couldn't implement it. :(