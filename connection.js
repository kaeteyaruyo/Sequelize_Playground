const Sequelize = require( 'sequelize' );
const config = require( './config' );

module.exports = async () => {
    const database = new Sequelize(
        'sequelize',
        config.username,
        config.password,
        {
            host:             config.host,
            dialect:          config.protocol,
            operatorsAliases: false,
            logging:          false,
        }
    );

    try {
        await database.authenticate();
    }
    catch ( err ) {
        console.error( 'Unable to connect to the database: ', err );
        throw new Error( 'database need to be checked.' );
    }

    return database;
};

