const express = require("express")
const task = require("../models/task");
const auth = require("../middleware/auth")
const router = new express.Router()
const user = require("../models/user")


router.post("/task",auth, async(req, res)=>{
    // const Task = new task(req.body)
    const Task = new task({
        ...req.body,
        owner: req.user._id
    })

    try{
        await Task.save()
        res.status(201).send(Task)
    }catch (e){
        res.status(404).send(e)
    }
    // Task.save().then(()=>{
    //     res.send(Task)
    // }).catch((error)=>{
    //     res.status(400)
    //     res.send(error)
    // })
})


router.get("/task",auth,async(req,res)=>{
    try {
        await req.user.populate({
            path:'tasks',
            match:{
                completed: false
            }
        }).execPopulate()
        res.send(req.user.tasks)
    }catch(e){
        res.status(500).send()
    }
})

router.get("/task/:id",auth,async (req, res)=>{
    const _id = req.params.id
    try {
        const Task = await task.findOne({_id,owner:req.user._id})
        if (!Task) {
            return res.status(404).send()
        }
        res.send(Task)
    }
    catch(error) {
        res.status(500).send(error)
    }
})


router.patch("/task/:id", async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ["task","completed"]
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const Task = await task.findByIdAndUpdate(req.params.id)

        updates.forEach((update)=>Task[update]=req.body[update])
        await Task.save()
    // try{
    //     const Task = await task.findByIdAndUpdate(_id,req.body, { new:true, runValidators:true })
    //     if (!Task){
    //         return res.status(404)
    //     }
        res.send(Task)
        res.status(201).send()
    }catch (e){
        res.status(400).send(e)
    }
})

router.delete("/task/:id", async(req,res)=>{
    const _id = req.params.id
    try{
        const Task = await task.findByIdAndDelete(_id)
        if(!Task){
            res.status(404).send()
        }
        res.send(Task)
    }catch(e){
        res.status(400).send()
    }

})

module.exports = router