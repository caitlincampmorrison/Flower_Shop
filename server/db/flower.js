const db = require('./db')
const Sequelize = require("sequelize");
const { STRING, INTEGER, UUID, UUIDV4 } = Sequelize.DataTypes;

const Flower = db.define('flower', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING(20)
    },
    color: {
        type: STRING(20)
    },
    cost: {
        type: INTEGER
    },
    image: {
        type: STRING
    }

})

module.exports = Flower