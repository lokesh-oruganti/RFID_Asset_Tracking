const sqlite3 = require( 'sqlite3' );
var no = PRAGMA ('user');
console.log(no);
const path = 'my/db/path.sqlite';
const database = new sqlite3.Database( 'user' );

database.run( 'PRAGMA journal_mode = WAL;' );