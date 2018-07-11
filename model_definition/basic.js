const Sequelize = require('sequelize');
(async() => { 
    const db = await require('../connection')();
    const User = db.define('user', {
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        }
      });     
    const Project = db.define('project', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT
    })    
    const Task = db.define('task', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        deadline: Sequelize.DATE
    });
    
    // sync: to create table / update data to database
    // force: true will drop the table if it already exists
    await User.sync({force: true});
    await Project.sync({force: true});
    await Task.sync({force: true});
})();