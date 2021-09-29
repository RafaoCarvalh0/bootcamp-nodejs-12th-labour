import Sequelize from "sequelize";
import db from "../repository/db.mysql.js";


const Autor = db.define("autor", {
    autorId: {
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
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});


export default Autor;