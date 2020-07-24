const db = require("../dbconfig.js");

module.exports = {
    postComment: async comment => {
      const [id] = await db("comments").returning('id').insert(comment);
  
      return db("comments")
        .where({ id })
        .first();
    },
    
  
  };
  