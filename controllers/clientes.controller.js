import ClienteService from "../services/clientes.service.js";

//controller is responsible for all the validations

async function createCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("All data needed");
        }
        res.send(await ClienteService.createCliente(cliente));

    } catch (err) {
        next(err);
    }

}

async function getClientes(req, res, next) {
    try {
        res.send(await ClienteService.getClientes());
    } catch (err) {
        next(err);
    }

}

async function getCliente(req, res, next) {
    try {
        res.send(await ClienteService.getCliente(req.params.clienteId));
    } catch (err) {
        next(err);
    }
}

async function deleteCliente(req, res, next) {
    try {
        await ClienteService.deleteCliente(req.params.clienteId)
        res.send({ message: `cliente de ID: ${req.params.clienteId} excluído` });
    } catch (err) {
        next(err);
    }
}

async function updateCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.clienteId || !cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("All data needed");
        }
        await ClienteService.updateCliente(cliente);
        res.send(await ClienteService.getCliente(cliente.clienteId));
    } catch (err) {
        next(err);
    }
}

export default {
    createCliente,
    getClientes,
    getCliente,
    deleteCliente,
    updateCliente
}