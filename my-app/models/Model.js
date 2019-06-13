const { db, Sequelize } = require('../database');

const Ragister = db.define('ragister', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phonenumber: {
        type: Sequelize.STRING
    }

})

const Listcar = db.define('listcar', {
    address: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.STRING
    },
    make: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    }
})

Ragister.hasMany(Listcar); // Will add userId to Task mo
Listcar.belongsTo(Ragister);
module.exports.Ragister = Ragister;
module.exports.Listcar = Listcar;

