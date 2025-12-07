const Student = require('../models/student.model');
const client = require ('../config/db');


const getStudents = async (req, res) => {

    try {

        const studentid = req.query.studentid || "All";
        const programid = req.query.programid || "All";

        await client`BEGIN`;

        const students = await client` select * from miniproject_student_get(
                        ${studentid}, 
                        ${programid}); 
                        `;

        await client`COMMIT`;

        res.status(200).json(students);

    } catch (error) {

        await client`ROLLBACK`;

        console.error('Error fetching students:', error);

        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
};


const createStudent = async (req, res) => {

    try {

        await client `BEGIN`;

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


const updateStudent = async (req, res) => {

    try{

        await client `BEGIN`;

        const student = new Student(
            req.params.studentid,
            req.body.lastname,
            req.body.firstname,
            req.body.email,
            req.body.programid,
            req.body.yearlevel,
            req.body.gender,
            req.body.dateofbirth,
            req.body.isactive
        );

        Student.validate(student);

        const result = await client` select miniproject_student_update(
                                    ${student.studentid},
                                    ${student.lastname},  
                                    ${student.firstname}, 
                                    ${student.email},
                                    ${student.programid}, 
                                    ${student.yearlevel},
                                    ${student.gender}, 
                                    ${student.dateofbirth},
                                    ${student.isactive}); 
                                    `;
        await client `COMMIT`;

        res.status(200).json({
            status: 'Student updated successfully',
            data: {
                lastname: student.lastname,
                firstname: student.firstname,
                email: student.email,
                programid: student.programid,
                yearlevel: student.yearlevel,
                gender: student.gender,
                dateofbirth: student.dateofbirth,
                isactive: student.isactive
            }   

        });   

    } catch (error) {
        await client `ROLLBACK`;
        console.error('Error updating student:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        }); 
    }
}

module.exports = {
    getStudents,
    createStudent,
    updateStudent
};