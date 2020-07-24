const db = require("../dbconfig.js");

module.exports = {
  insertStudent: async student => {
    const [id] = await db("students").returning('id').insert(student);

    return db("students")
      .where({ id })
      .first();
  },
  getStudentById: async student => {
    return db("students")
      .select("students.*", "schools.schoolName","bubl.bublName","threads.title")
      .join("schools", "schools.id", "students.school_id")
      .join("threads", "students.id", "threads.student_id")
      .join("bubl", "threads.bubl_id", "bubl.id")
      .where({ "students.id": student })
      .first();
  },

  getAllStudents: async () => {
    return db("students")
      .select("students.*", "schools.schoolName")
      .join("schools", "students.school_id", "schools.id");
  },
  registerStudent: student => {
    
    return db("students").insert(student);
    
  }
};
