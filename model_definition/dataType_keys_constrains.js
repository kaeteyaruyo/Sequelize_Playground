const Sequelize = require('sequelize');
(async() => { 
    const db = await require('../connection')();
    const Bar = db.define('bar', {
        barId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        }

    },
    {
        // don't add the timestamp (updatedAt, createdAt)
        timestamps: false,
    });

    const Baz = db.define('baz', {
        // primary key (will not set to be unique if not specify)
        // will overrid the default 'id' field
        bazId: {
            // data type
            type: Sequelize.INTEGER,
            // primary key
            primaryKey: true,
            // auto increment
            autoIncrement: true,
            // specify field name in database
            field: 'baz_id'
        },
        myDate: {
            type: Sequelize.DATE,
            // allow null
            allowNull: false,
            // default value
            defaultValue: Sequelize.NOW
        },
        // unique index, could be composite
        uniqueOne: {
            type: Sequelize.STRING,
            unique: 'compositeIndex'
        },
        uniqueTwo: {
            type: Sequelize.INTEGER,
            unique: 'compositeIndex'
        },
        someUnique: {
            type: Sequelize.STRING,
            unique: true
        },
        // foreign keys
        foreignKey: {
          type: Sequelize.INTEGER,
          references: {
            // referenced model
            model: Bar,
            // column name of the referenced model
            key: 'barId',
          }
        }
    });
    await Bar.sync({force: true});
    await Baz.sync({force: true});
})();