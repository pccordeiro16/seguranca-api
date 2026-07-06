// Importa o módulo "fs" (File System) do Node.js.
// Esse módulo permite ler, criar, alterar e excluir arquivos.
import * as fs from 'fs';
// Classe responsável por acessar os dados dos EPIs.
// Ela funciona como um intermediário entre a aplicação e o arquivo JSON.
export class EpiRepository {
    // Método responsável por retornar todos os EPIs cadastrados.
    findAll() {
        // Lê o arquivo database.json.
        // './' significa a pasta raiz do projeto.
        // 'utf8' define o formato de leitura do arquivo.
        const dados = fs.readFileSync(
            './bd/database.json',
            'utf8'
        );
        // O conteúdo do arquivo é lido como TEXTO.
        // JSON.parse converte esse texto em um objeto JavaScript.
        // Assim podemos trabalhar com os dados dentro da aplicação.
        return JSON.parse(dados);
    }

    findById(id:number) {
        const epis = this.findAll();
        return epis.find((epi) => epi.id === id);
    }
}
