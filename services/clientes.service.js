import ClienteRepository from "../repositories/clientes.repository.js";

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente);
}

async function getClientes(){
    return await ClienteRepository.getClientes();
}

async function getCliente(clienteId){
    return await ClienteRepository.getCliente(clienteId);
}

async function deleteCliente(clienteId){
    return await ClienteRepository.deleteCliente(clienteId);
}

async function updateCliente(cliente){
    return await ClienteRepository.updateCliente(cliente);
}

export default {
    createCliente,
    getClientes,
    getCliente,
    deleteCliente,
    updateCliente
}