import Sequelize from "sequelize";
import db from "../repository/db.mysql.js";
import Autor from "./autor.model.js";


const Livros = db.define("livros", {
    livroId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    autorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});

Livros.belongsTo(Autor, { foreignKey: "autorId"})

export default Livros;