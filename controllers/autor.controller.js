import AutorService from "../services/autor.service.js";

//controller is responsible for all the validations

async function createAutor(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.nome || !autor.email || !autor.telefone) {
            throw new Error("All data needed");
        }
        res.send(await AutorService.createAutor(autor));

    } catch (err) {
        next(err);
    }

}

async function getAutores(req, res, next) {
    try {
        res.send(await AutorService.getAutores());
    } catch (err) {
        next(err);
    }

}

async function getAutor(req, res, next) {
    try {
        res.send(await AutorService.getAutor(req.params.autorId));
    } catch (err) {
        next(err);
    }
}

async function deleteAutor(req, res, next) {
    try {
        await AutorService.deleteAutor(req.params.autorId)
        res.send({ message: `autor de ID: ${req.params.autorId} excluído` });
    } catch (err) {
        next(err);
    }
}

async function updateAutor(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.autorId || !autor.nome || !autor.email || !autor.senha || !autor.telefone || !autor.endereco) {
            throw new Error("All data needed");
        }
        await AutorService.updateAutor(autor);
        res.send(await AutorService.getAutor(autor.autorId));
    } catch (err) {
        next(err);
    }
}

export default {
    createAutor,
    getAutores,
    getAutor,
    deleteAutor,
    updateAutor
}