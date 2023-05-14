const  { Router }  = require("express")
const { User, Show } = require("../models")
const router = Router();


//Gets all shows
router.get("/shows", async (req, res) => {
    try {
        const shows = await Show.findAll();
        res.status(200).json(shows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})


//Gets one show
router.get("/shows/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const shows = await Show.findByPk(id);
        res.status(200).json(shows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})


//Gets shows of a specific genre ??
router.get("/shows/:genreId", async (req, res) => {
    try {
        const genreId = req.params.genreId;
        const shows = await Show.findAll({where: {genre: genreId}});
        res.status(200).json(shows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})


//Updates the rating of a show that has been watched ??
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const shows = await Show.findByPk(id);
        await Show.update(shows, req.body);
        res.status(200).json({ message: "Show updated successfully" })
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})


//Updates the status of a show ??


//Deletes a show ??


module.exports = router;