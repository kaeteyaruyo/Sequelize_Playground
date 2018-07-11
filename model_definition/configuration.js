const Sequelize = require('sequelize');
(async() => { 
    const db = await require('../connection')();
    const Bar = db.define('bar', {
        barId: Sequelize.INTEGER,
    },
    {
        // don't add the timestamp (updatedAt, createdAt)
        timestamps: false,
        // disable the modification of table names
        // By default, sequelize will automatically transform all passed model names (first parameter of define) into plural. if you don't want that, set the following
        freezeTableName: true,
        // version number
        version: true,
        // storing engine
        engine: 'MYISAM',
        // table comment
        comment: "I'm a table comment!"
    });

    const Foo = db.define('foo',  {
            fooId: Sequelize.INTEGER,
        },
        {
        // define the table's name
        tableName: 'fooooooooooo',
        // don't use camelcase  but underscore style for automatically added attributes, e.g. updatedAt -> updated_at
        underscored: true,
        // use timestamps (by default)
        timestamps: true,
        // I don't want createdAt
        createdAt: false,
        // I want updatedAt to actually be called updateTimestamp
        updatedAt: 'updateTimestamp',
        // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
        deletedAt: 'destroyTime',
        paranoid: true
    });

    await Bar.sync();
    await Foo.sync();
})();