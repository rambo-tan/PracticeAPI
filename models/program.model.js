class Program {
    constructor(programid, programcode, description, isactive = true) {
        this.programid = programid;
        this.programcode = programcode;
        this.description = description;
        this.isactive = isactive;
    }

    static validate(Program) {
        if (!Program.programcode || !Program.description) { 
                throw new Error('programcode and description are required');
        }
    }

}

module.exports = Program;
