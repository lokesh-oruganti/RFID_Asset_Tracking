var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('mydb.db');



//Perform INSERT operation.
db.run("INSERT into user_info (info) VALUES ('Ipsum 11')");

    //Perform SELECT Operation
db.all("SELECT * from user_info",function(err,rows){
    console.log(rows);
//rows contain values while errors, well you can figure out.
});
//Perform DELETE operation
// db.run("DELETE * from user_info where col1 = 9",function(err,rows){
//     //rows contain values while errors, well you can figure out.
//     });

// //Perform UPDATE operation
// db.run("UPDATE user_info where col1 = 6",function(err,rows){
//     //rows contain values while errors, well you can figure out.
//     });

db.close();