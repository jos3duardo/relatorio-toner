# relatorio-toner


## Configurando banco de dados

no arquivo [database/conexao.js](/database/conexao.js) é onde estão as configurações para o banco de dados,
para usar qualquer um dos banco de dados abaixo substitua as linhas conforme a configuração desejada

### usando banco de dados sqlite
```javascript
const sqlite = require('sqlite')

const conexao = sqlite.open('./database/database.sqlite')
```

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