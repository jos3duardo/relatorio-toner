# API REST Relatorio Tonner

## Iniciando servidor
```bash
npm start
```

## Configurando banco de dados

no arquivo [database/conexao.js](/database/conexao.js) é onde estão as configurações para o banco de dados,
para usar qualquer um dos banco de dados abaixo substitua as linhas conforme a configuração desejada

### usando bando de dados mysql
```javascript
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'tonner'
})

```

## Documentação Rotas

*[POSTMAN DOCS](https://documenter.getpostman.com/view/10174080/TVKA5zN4)*


## Usando o KNEX
se o knex estiver instaldo de forma global usar o comando conforme nos exemplos  
caso esteja instalando somente local usar assim:
```
npx knex ....
```

#### usando knex instalado globalmente
iniciando arquivo de configuração
```
knex init
```
criando uma migration
```
knex migrate:make students
```

exemplo de uma migration
```javascript
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('tonners', table => {
      table.increments()
      table.string('nome')
  })
};

exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('tonners')
};
```

criando um seeder
```
$ knex seed:make 01_<seed name>
```

exemplo de um seeder
```javascript
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tonners').del()
    .then(function () {
      // Inserts seed entries
      return knex('tonners').insert([
        {id: 1, nome: 'rowValue1'},
        {id: 2, nome: 'rowValue2'},
        {id: 3, nome: 'rowValue3'}
      ]);
    });
};
```

#### rodando migration e seeder
```bash
$ knex migrate:latest
$ knex seed:run
```