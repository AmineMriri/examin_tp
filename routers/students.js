const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const {Student} = require('../models/student');



router.post('/',async(req,res)=>{
    let student = new Student(req.body);
    student = await student.save();
    res.status(201).send(student);
})

router.get('/',async(req,res)=>{
    let students = await Student.find();
    res.status(201).send(students);
})

router.get('/name/:name',async(req,res)=>{
    
    let validation_results=student_shema.validate(req.body);
    if(validation_results.error)
        return res.status(400).send(validation_results.error.message)
    
    const name = req.params.name.toLowerCase();
    let student = await Student.find(req.params.name.toLowerCase()== name);
   
    if (!student)
        return res.status(404).send('Student is not found')
    res.status(201).send(student);
})
/*


router.put('/:name',(req,res) => {
    let validation_results=student_shema.validate(req.body);
    if(validation_results.error)
        return res.status(400).send(validation_results.error.message);
   
    
    let student = students.find(std => std.id === parseInt(req.params.stid));
    if(!student)
        return res.status(404).send('student with given id not found');
    if(req.body.name)
        student.name = req.body.name;
    if(req.body.class)
        student.class = req.body.class;
    res.send(student);
});
*/
module.exports=router;