const express = require("express")

const UserController = require("./controllers/UserController.js")

const WorkController = require("./controllers/WorkController.js")

const authMiddleware = require("./middlewares/auth");

const router = express.Router();

router.get( "/users", authMiddleware ,UserController.index );

router.post( "/users", UserController.store );

router.put( "/users/:user_id", UserController.update );

router.delete( "/users/:user_id", UserController.delete );

router.post( "/users/login", UserController.login );

router.use(authMiddleware);

router.get("/users/:user_id/work", WorkController.index);

router.post("/users/:user_id/work", WorkController.store);

router.put("/users/:id/work", WorkController.update);

router.delete("/users/:id/work", WorkController.delete);

module.exports = router;