class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {

        let sql = 'CREATE TABLE IF NOT EXISTS Atendimentos ('

        .concat('id int NOT NULL AUTO_INCREMENT,')

        .concat(' cliente varchar(50) NOT NULL,')

        .concat(' pet varchar(20),')

        .concat(' servico varchar(20) NOT NULL,')

        .concat(' status varchar(20) NOT NULL,')

        .concat(' observacoes text,')

        .concat(' data datetime NOT NULL,')

        .concat(' dataCriacao datetime NOT NULL, status varchar(20) NOT NULL,')

        .concat(' PRIMARY KEY(id));');

        console.log('+++++++++++++++++++++++++++++++++++++++')

        console.log(sql);

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Tabela de atendimentos criada');
            }
        })
    }
}

module.exports = new Tabelas;