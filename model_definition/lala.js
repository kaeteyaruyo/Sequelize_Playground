module.exports = (sequelize, DataTypes) => {
    return sequelize.define("lala", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};