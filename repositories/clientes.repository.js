import Cliente from "../models/clientes.model.js";

async function insertCliente(cliente) {

    try {
        return await Cliente.create(cliente);
    } catch (err) {
        throw err;
    }
}

async function getClientes() {
    try {
        return await Cliente.findAll();
    } catch (err) {
        throw err;
    }
}

async function getCliente(clienteId) {
    try {
        return await Cliente.findAll({
            where: {
                clienteId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function deleteCliente(clienteId) {
    try {
        return await Cliente.destroy({
            where: {
                clienteId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateCliente(cliente) {
    try {
        return await Cliente.update(cliente,{
            where: {
                clienteId: cliente.clienteId
            }
        });
    } catch (err) {
        throw err;
    }
}


export default {
    insertCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente,
    updateCliente
}