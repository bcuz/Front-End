const db = require("../dbconfig.js");

module.exports = {
  postThread: async thread => {
    const [id] = await db("threads").returning('id').insert(thread);

    return db("threads")
      .where({ id })
      .first();
  },
  getThreadById: async thread => {
    return db("threads")
      .select("threads.*", "students.username","bubl.bublName")
      .join("students", "students.id", "threads.student_id")
      .join("bubl", "threads.bubl_id", "bubl.id")
      .where({ "threads.id": thread })
      .first();
  },
  getThreadWithCommentById: async thread => {
    return db("comments")
      .select("comments.*", "students.username","bubl.bublName","threads.title")
      .join("students", "students.id", "comments.student_id",)
      .join("bubl", "threads.bubl_id", "bubl.id")
      .join("threads", "threads.id", "comments.thread_id")
      .where({ "comments.thread_id": thread })
      
  },

  getAllThreads: async () => {
    return db("threads")
    .select("threads.*", "students.username","bubl.bublName")
    .join("students", "students.id", "threads.student_id")
    .join("bubl", "threads.bubl_id", "bubl.id")
  },

};
