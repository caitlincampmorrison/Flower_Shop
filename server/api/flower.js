const express = require('express')
const app = express.Router()
const{ Flower, Sale} = require('../db')

app.get('/', async(req,res,next) => {
    try{
        res.send(await Flower.findAll())
    }
    catch(ex){
        next(ex)
    }
})
app.get('/sales', async(req,res,next) => {
    try{
        res.send(await Sale.findAll())
    }
    catch(ex){
        next(ex)
    }
})

app.post('/sales', async(req, res, next) => {
    try{
        const data = await Sale.create({flowerId: req.body.flowerId, flowerName: req.body.flowerName, flowerColor: req.body.flowerColor, flowerCost: req.body.flowerCost, flowerImage: req.body.flowerImage})        
        res.send(data)
    }
    catch(ex){
        next(ex)
    }
})

app.delete("/sales", async (req, res, next) => {
    try {
        const data = await Sale.destroy({
            where: {}
        })
        res.send(data)
    } catch (ex) {
      next(ex);
    }
});

app.delete("/sales/:id", async (req, res, next) => {
    try {
        const data = await Sale.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send(data)
    } catch (ex) {
      next(ex);
    }
});

module.exports = app