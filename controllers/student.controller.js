const Student = require('../models/student.model');
const client = require ('../config/db');

const createStudent = async (req, res) => {

    await client `BEGIN`;

    try {
        const student = new Student(
            null,
            req.body.lastname,
            req.body.firstname,
            req.body.email,
            req.body.programid,
            req.body.yearlevel,
            req.body.gender,
            req.body.dateofbirth,
            null
        );

        Student.validate(student);

        const result = await client` select miniproject_student_create(
                                    ${student.lastname},  
                                    ${student.firstname}, 
                                    ${student.email},
                                    ${student.programid}, 
                                    ${student.yearlevel},
                                    ${student.gender}, 
                                    ${student.dateofbirth}) as id; `;
        await client `COMMIT`;
        res.status(201).json({ 
            id: result[0].id, 
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            programid: student.programid,
            yearlevel: student.yearlevel,
            dateofbirth: student.dateofbirth
            });

    } catch (error) {

        await client `ROLLBACK`;

        console.error('Error creating student:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }   
}



module.exports = {
    createStudent
};