const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
// desta forma acima o js procura só o open dentro do sqlite e salva em uma variável chamada open

module.exports = ()=> 
    open({
        filename: './src/database/pergunteme.sqlite',
        driver: sqlite3.Database,
    });
