const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    post: '3306',
    database: 'leltar',
    user: 'leltar',
    password: 'leltar_123'
})

con.connect((err)=>{
    console.log("MySQL connected !");

    console.log("1. feladat");
    const myQuery1 = "SELECT hely, ipcim, nev FROM szoftver, telepites, gep WHERE gep.id = telepites.gepid AND szoftver.id = telepites.szoftverid AND YEAR(datum)=2016 GROUP BY hely, ipcim, nev HAVING Count(telepites.id)>1;";
    con.query(myQuery1, (err, result, fields) => {
        if (err) {console.log(err);}
        con.query( myQuery1, (err, result,) =>{
            if (err) {console.log(err);}
            console.log(result);
        });})

console.log("2. feladat");
const myQuery2 = 'SELECT DISTINCT ipcim FROM gep, telepites AS telepites1, szoftver AS szoftver1, telepites AS telepites2, szoftver AS szoftver2 WHERE gep.id=telepites1.gepid AND gep.id=telepites2.gepid AND telepites1.szoftverid=szoftver1.id AND telepites2.szoftverid=szoftver2.id AND szoftver1.nev="Mozilla Firefox" AND szoftver2.nev="Google Chrome";';
con.query(myQuery2, (err, result, fields) => {
    if (err) {console.log(err);}
    con.query( myQuery2, (err, result,) =>{
        if (err) {console.log(err);}
        console.log(result);
    });})

    console.log("3. felafdat");
    const myQuery3 = `DELETE FROM szoftver WHERE kategoria LIKE "%demo%";`;
    con.query( myQuery3, (err, result) =>{
        if (err) {console.log(err);}
        console.log('A törlés megtörtént !');
        console.log(`${result.affectedRows} törölve`);
    });

    console.log("4. felafdat");
    const myQuery4 = `INSERT INTO gep(hely, tipus, ipcim) VALUES("T202", "notebook", "172.16.0.102");`;
    con.query( myQuery4, (err, result) =>{
        if (err) {console.log(err);}
        console.log('A beszúrás megtörtént !');
        console.log(`${result.affectedRows} beszúrva`);
    });

    console.log("5. felafdat");
    const myQuery5 = `UPDATE telepites SET verzio="1.0.0" WHERE verzio is null;`;
    con.query( myQuery5, (err, result) =>{
        if (err) {console.log(err);}
        console.log('A beszúrás megtörtént !');
        console.log(`${result.affectedRows} beszúrva`);
    });

});
