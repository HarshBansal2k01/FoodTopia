const express = require("express")
const router = express.Router()
const Order = require("../models/Order")


router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})


    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    // if first order
    if (eId===null) {
        try {
            
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }
// apppend latest order with older orders
    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
          
            res.send("Server Error", error.message)
        }
    }
})

router.post('/myorderData',async(req,res)=>{
    try{
        let myData = await Order.findOne({'email' : req.body.email})
        res.json({orderData:myData})
    }catch(error){
        res.send("Server Error", error.message)
    }
})

module.exports = router