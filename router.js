const express = require('express')
const router = express.Router()
const solvecountController = require('./controllers/solvecountController')

router.get('/uri', solvecountController.uricount)
router.get('/lightoj', solvecountController.lightojcount)
router.get('/timus', solvecountController.timuscount)
router.get('/spoj', solvecountController.spojcount)
module.exports = router