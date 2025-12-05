class Program {
    constructor(programid, programcode, description, isactive) {
        this.programid = programid;
        this.programcode = programcode;
        this.description = description;
        this.isactive = isactive;
    }

    static validate(program) {
        if (!program.programcode || !program.description) {
            throw new Error('programcode and description are required');
        }
    }
}

module.exports = Program;
