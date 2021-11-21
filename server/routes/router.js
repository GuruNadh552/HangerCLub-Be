const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET
 */

route.get("/",services.HomeRoutes)

/**
 * @description Add Route
 * @method GET
 */

route.get("/add",services.AddRoute)

/**
 * @description Update Route
 * @method GET
 */

route.get("/update",services.UpdateRoute)


/**
 * @description Post User Data Route
 * @method POST
 */

route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.delete("/api/users/:id",controller.delete)
route.put("/api/users/:id",controller.update)

module.exports = route