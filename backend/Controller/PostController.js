const express = require('express')
const post = require('../Models/PostModel')

const blogPost = async(req,res)=>{
    const URL = req.protocol + '://' + req.get('host')
    let imageURL = URL + "/upload/" + req.files.image[0].filename;
    let  documentURL = URL + "/upload/pdf/" + req.files.document[0].filename;
     
  
    const newPost = new post({
        text: req.body.text,
        image: imageURL,
        video: req.body.video,
        document: documentURL,
        time: req.body.time
    })
    await newPost.save()
    .then(()=>{
        res.status(200).json({msg:'Post Successful'})
    }).catch(()=>{
        res.status(400).json({msg: 'Post not Successful'})
    })

}

module.exports = blogPost