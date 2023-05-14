const  { Router }  = require("express")
const { User, Show } = require("../models")
const router = Router();
//const dataU = require("../seed"); -> Again... I panicked

// User endpoints

//Gets all user - still need to figure how to censor or leave out password
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Gets one user - still need to figure how to censor or leave out password
router.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userFound = await User.findByPk(id, !{include: "password"});
    res.status(200).json(userFound);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Gets all shows watched by user
router.get("/users/:id/shows", async (req, res) => {
  try {
    const id = req.params.id;
    const userFound = await User.findByPk(id, !{include: "password"}, {include: Show});
    res.status(200).json(userFound);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Updates/adds show if user has watched it
router.put("/users/:id/shows/:shId", async (req, res) => {
  try {
    const userFound = await User.findByPk(req.params.id);
    const showWatched = await Show.findByPk(req.body.shId);
    await userFound.addShow(showWatched, { through: { status: "watched", rating: req.body.rating }});
    res.status(200).json({"message": `${userFound.username} added to ${showWatched.title}'s Seen List!`});
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
