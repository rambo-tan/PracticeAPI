class Student {
    constructor(studentid, lastname, firstname, email, programid, yearlevel, gender, dateofbirth, isactive = true ) {
        this.studentid = studentid;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.programid = programid;
        this.yearlevel = yearlevel;
        this.gender = gender;
        this.dateofbirth = dateofbirth;
        this.isactive = isactive;
    }

    static validate(Student) {
        if (!Student.lastname || !Student.firstname || !Student.email ||  !Student.programid || !Student.yearlevel || !Student.gender || !Student.dateofbirth) {
            throw new Error('Missing required fields');
        }

        const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;
        if (!emailRegex.test(Student.email)) {
            throw new Error('Email must be a valid @gmail.com or @yahoo.com address');
        }
    }

    

}

module.exports = Student;