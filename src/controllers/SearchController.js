const User = require('../models/User');
const multer  = require('multer');
const { check, validationResult } = require('express-validator');
const path  = require('path');

const search = async (req,res) => {
    await res.render('index');
}
const singleReport = async (req,res) => {
    await res.render('report');
}

const reportByCity = async (req, res) => {
    const {city} = req.query;
    console.log(req.query);
    const reportOne = await User.findAll({
        where:{
            city:city
        },
        raw:true        
    }).catch (error =>console.log(error))
    await res.render('report', {reportOne:reportOne})
}

const allReports = async (req,res) => {
    const reports = await User.findAll({
        raw:true
    }).catch(error => console.log(error))
    await res.render('allReport', {reports:reports});
}

const saveReport = async (req,res) => {
    const {name, city, temp, desc } = await req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const alert = errors.array()
       await res.render('index', {alert})
    }else{    
    const user = await User.create({
        name, city, temp, desc, image:req.file.filename
    }).catch(error => console.log(error));
    }
    await res.render('index', {message:'Added to Database'});
}

const editSearch = async (req,res) => {
    const {id} = await req.params;
    const searchOne = await User.findOne({
        where: {
            id:id
        },
        raw:true
        }).catch(error=>console.log(error))
        res.render ('edit', {searchOne:searchOne})
}

const updateSearch = async (req,res) => {
    const {id} = req.params;
    const data = req.body;
    const selector = {where: {id:id}}
    await User.update(data, selector).catch(error => console.log(error));
    res.redirect ('/')
}

const deleteSearch = async (req, res) => {
    const {id} = req.params
    console.log(req.params.id);
    const delSearch = await User.destroy({
        where:{
            id:id
        },
        raw:true        
    }).catch (error =>console.log(error))
    res.redirect ('/')
}

//upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/
        const mimeType = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files format to upload')
    }
}).single('image')

module.exports = {
    search,
    singleReport,
    saveReport,
    upload,
    allReports,
    reportByCity,
    editSearch,
    updateSearch,
    deleteSearch    
}