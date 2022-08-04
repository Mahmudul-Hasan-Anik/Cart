const express = require('express')
const post = require('../Models/PostModel')
const Authentication = require('../Models/AuthModel')

const blogGet = (req,res)=>{

    post.find({}, (err, docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
}

module.exports = blogGet
