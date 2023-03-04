const Joi = require('joi');
const mongoose = require('mongoose')


let student_shema = Joi.object({
    nom : Joi.string().required().min(5),
    class : Joi.string().required(),
    modules :[
        {
            module : Joi.string().required(),
            note : Joi.number().required().positive().less(20),
        }
    ],
    moyenne : Number,
});

const Student = mongoose.model('student',student_shema);

module.exports.Student=Student;

