const express = require("express");
const route = express.Router();
const taskControllers = require("../Controllers/TaskController");

const PREFIX = "task";

route.get(`${PREFIX}/task-view`, taskControllers.ReadAll);
route.delete(`/${PREFIX}/delete`, taskControllers.ReadAll);
route.get(`/${PREFIX}/:id`, taskControllers.ReadOne);
route.put(`/${PREFIX}/update`, taskControllers.ReadAll);

module.exports = route;
