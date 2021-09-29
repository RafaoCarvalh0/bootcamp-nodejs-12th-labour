import AutorRepository from "../repositories/autor.repository.js";

async function createAutor(autor){
    return await AutorRepository.insertAutor(autor);
}

async function getAutores(){
    return await AutorRepository.getAutores();
}

async function getAutor(autorId){
    return await AutorRepository.getAutor(autorId);
}

async function deleteAutor(autorId){
    return await AutorRepository.deleteAutor(autorId);
}

async function updateAutor(autor){
    return await AutorRepository.updateAutor(autor);
}

export default {
    createAutor,
    getAutores,
    getAutor,
    deleteAutor,
    updateAutor
}