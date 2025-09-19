const nomes = ["Valeria", "Ana caroline", "Samantha", "Enya", "Bruna", "Daniela", "Maria eduarda"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)