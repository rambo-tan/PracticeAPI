const Program = require('../models/program.model');
const client = require('../config/db');

const getPrograms = async (req, res) => {
    try {

        const program = new Program(
            req.params.programid || "All",
            null,
            null,
            null
        );

        const result = await client`
            SELECT * FROM miniproject_program_get(${program.programid});`;

        res.status(200).json(result);
        
    } catch (error) {

        console.error('Error fetching programs:', error);

        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
}

const createProgram = async (req, res) => {
   
    await client `BEGIN`;

    try {

        const program = new Program(
            null,
            req.body.programcode,
            req.body.description,
            null
        );

        Program.validate(program);

        const result = await client`
                SELECT miniproject_program_create(              
                    ${program.programcode}, 
                    ${program.description}
                ) as id;`;
        
        await client `COMMIT`;

        res.status(201).json({ 
            id: result[0].id, 
            program: program.programcode, 
            description: program.description 
        });

    } catch (error) {
        await client `ROLLBACK`;

        console.error('Error creating program:', error);
        
       res.status(500).json({ 
            error: 'Internal server error', 
            details: error.message 
        });
    }
};


const updateProgram = async (req, res) => {

    await client `BEGIN`;

    try{
        const program = new Program(
            req.params.programid,
            req.body.programcode,
            req.body.description,
            req.body.isactive          
        );
        
        Program.validate(program);

        const result = await client`
            SELECT miniproject_program_update(
                ${program.programid},
                ${program.programcode},
                ${program.description},
                ${program.isactive}
            );
            `;

        await client `COMMIT`;

    return res.status(200).json({
      status: "success",
      message: `Program updated successfully.`,
      data: { programid: program.programid,
                programcode: program.programcode,
                description: program.description,
                isactive: program.isactive        
            }
    });

    } catch (error) {
        await client `ROLLBACK`;
        console.error('Error updating program:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
}

module.exports = {
    createProgram, 
    updateProgram,
    getPrograms
};