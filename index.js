const customExpress = require('./src/config/custom-express.js');
const conexao = require('./src/infraestrutura/conexao');
const Tabelas = require('./src/infraestrutura/tabelas');

conexao.connect((error) => {

    if (error) {
        console.log('Banco fora: ' + error);
    } else {

        Tabelas.init(conexao);

        console.log('Banco conectado com sucesso!');

        app = customExpress();

        app.listen(3000, () => {

            console.log('Servidor rodando na porta 3000');

        });

    }

});