const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/adminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')
const route = express.Router()

route.get('/home',FrontController.home) //static method
route.get('/about',FrontController.about) //static method
route.get('/contact',FrontController.contact) //static method
route.get('/blog',FrontController.blog) //static method
route.get('/login',FrontController.login) //static method

route.get('/admin/dashboard',AdminController.dashboard) //admincontroller

route.get('/admin/blogdisplay',BlogController.display)  //blogcontroller

route.get('/admin/categorydisplay',CategoryController.display) //CategoryController

route.get('/admin/aboutdisplay',AboutController.display) //AboutController

module.exports = route
