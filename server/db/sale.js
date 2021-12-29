const db = require('./db')
const Sequelize = require("sequelize");
const { STRING, INTEGER, UUID, UUIDV4 } = Sequelize.DataTypes;

const Sale = db.define('sale',{
    flowerId: {
        type: UUID,
        allowNull: false
    },
    flowerName: {
        type: STRING(20)
    },
    flowerColor: {
        type: STRING(20)
    },
    flowerCost: {
        type: INTEGER
    },
    flowerImage: {
        type: STRING
    }
})

module.exports = Sale