import Sequelize from "sequelize";
import db from "../repository/db.mysql.js";
import Clientes from "./clientes.model.js";
import Livros from "./livros.model.js";


const Vendas = db.define("vendas", {
    vendaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    livroId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});

Vendas.belongsTo(Clientes, { foreignKey: "clienteId"})
Vendas.belongsTo(Livros, { foreignKey: "livroId"})

export default Vendas;