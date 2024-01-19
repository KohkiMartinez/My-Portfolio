const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
const port = process.env.PORT || 5000
const connectDB = require('./utils/database')
const { BlogItemModel, AdminUserModel, BlogImageModel } = require('./utils/schemaModels')

// READ ALL
app.get('/', async(req, res) => {
    try {
        await connectDB();
        const allItems = await BlogItemModel.find();
        return res.status(200).json({message: 'Read All Items Successfully!!', allItems: allItems});
    } catch(err) {
        return res.status(400).json({message: 'Failed to Read All Items...'});
    }
});

// READ Single Item
app.get('/item/:id', async(req, res) => {
    try {
        await connectDB();
        const singleItem = await BlogItemModel.findById(req.params.id);
        return res.status(200).json({message: 'Read Single Item Successfully!!', singleItem: singleItem});
    } catch(err) {
        return res.status(400).json({message: 'Failed to Read Single Item'})
    }
    
})

// READ Single Item Images
app.get('/image/:id', async(req, res) => {
    try {
        await connectDB();
        const singleImageItem = await BlogImageModel.findById(req.params.id);
        return res.status(200).json({message: 'Read Single Image Item Successfully!!', singleItem: singleImageItem});
    } catch(err) {
        return res.status(400).json({message: 'Failed to Read Single Image Item'});
    }
});

app.listen(port, () => {
    console.log(`Listening on localhost port ${port}`)
})
