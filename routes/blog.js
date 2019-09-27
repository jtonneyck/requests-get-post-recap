const express = require("express")
const router = express.Router()
const Blog = require("../models/blog")

router.get("/create", (req,res)=> {
    res.render("blog/create")
})

router.post("/create", (req,res)=> {

    var newBlog = new Blog({
        title: req.body.title, 
        body: req.body.body
    })

    newBlog.save()
        .then((createdBlog)=> {
            res.redirect("/blog/list")
        })
        .catch((err)=> {
            res.send(err)
        })
})

router.get("/list", (req,res)=> {
    Blog.find({})
        .then((blogs)=> {
            res.render("blog/list", {blogs: blogs})
        })
        .catch((err)=> {
            res.send(err)
        })
})

router.get("/delete/:blogId", (req,res)=> {
    Blog.findByIdAndRemove(req.params.blogId)
        .then((blog)=> {
            res.redirect("/blog/list")
        })
        .catch((err)=> {
            res.send(err)
        })
})

module.exports = router