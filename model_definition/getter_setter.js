const Sequelize = require('sequelize');
(async() => { 
    const db = await require('../connection')();
    const Employee = db.define('employee', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                const title = this.getDataValue('title');
                // 'this' allows you to access attributes of the instance
                return this.getDataValue('name') + ' (' + title + ')';
            },
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            set(val) {
                this.setDataValue('title', val.toUpperCase());
            }
        }
    });

    await Employee.sync();
    await Employee.create({ name: 'Kinoe T', title: 'backend engineer' });
    await Employee.create({ name: 'Daniel Chen', title: 'database engineer' });
    Employee.findAll().then( employees => employees.forEach(employee => {
        console.log(employee.get('name'));
        console.log(employee.get('title')); 
    }));
})();