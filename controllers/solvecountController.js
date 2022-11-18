const Solvecount = require('../models/Solvecount')


exports.lightojcount = function(req, res){
    let solvecount = new Solvecount()
    solvecount.lightojcount().then(function(result){
        res.send(result)
    }).catch(function(e){
        res.send(e)
    })
}
exports.uricount = function(req, res){
    let solvecount = new Solvecount()
    solvecount.uricount().then(function(result){
        res.send(result)
    }).catch(function(e){
        res.send(e)
    })
}
exports.timuscount = function(req, res){
    let solvecount = new Solvecount()
    solvecount.timuscount().then(function(result){
        res.send(result)
    }).catch(function(e){
        res.send(e)
    })
}
exports.spojcount = function(req, res){
    let solvecount = new Solvecount()
    solvecount.spojcount().then(function(result){
        res.send(result)
    }).catch(function(e){
        res.send(e)
    })
}