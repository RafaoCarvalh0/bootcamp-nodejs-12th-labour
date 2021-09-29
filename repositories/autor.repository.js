import Autor from "../models/autor.model.js";

async function insertAutor(autor) {

    try {
        return await Autor.create(autor);
    } catch (err) {
        throw err;
    }
}

async function getAutores() {
    try {
        return await Autor.findAll();
    } catch (err) {
        throw err;
    }
}

async function getAutor(autorId) {
    try {
        return await Autor.findAll({
            where: {
                autorId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function deleteAutor(autorId) {
    try {
        return await Autor.destroy({
            where: {
                autorId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateAutor(autor) {
    try {
        return await Autor.update(autor,{
            where: {
                autorId: autor.autorId
            }
        });
    } catch (err) {
        throw err;
    }
}


export default {
    insertAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor,
    updateAutor
}