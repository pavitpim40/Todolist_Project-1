const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('TodoList', {
        task : {
            type: DataTypes.STRING(255),
        }
    },{
        tableName: 'todoLists',
        timestamps : false,
    })
    return model;
}