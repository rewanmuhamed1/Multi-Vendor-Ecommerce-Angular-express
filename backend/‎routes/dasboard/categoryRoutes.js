const categoryController = require('../../controllers/dasboard/categoryController') 
 const { authMiddleware } = require('../../‎middlewares/authMiddleware')
 const router = require('express').Router()
 
 router.post('/add-category',authMiddleware, categoryController.add_category) 
 router.get('/get-category',authMiddleware, categoryController.get_category) 
 router.put('/update-category/:id',authMiddleware, categoryController.update_category) 
 router.delete('/delete-category/:id', categoryController.delete_category) 


 module.exports = router