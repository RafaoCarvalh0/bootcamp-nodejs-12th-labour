import Sequelize from "sequelize";
import db from "../repository/db.mysql.js";


const Clientes = db.define("clientes", {
    clienteId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    endereco: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});


export default Clientes;