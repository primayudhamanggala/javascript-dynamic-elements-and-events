const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo-controller");

router.post("/", todoController.create)
router.get("/", todoController.getData)
router.post("/:id", todoController.update)
router.post("/delete/:id", todoController.delete)

module.exports = router
