// Create pool
const { createPool } = require('mysql');
let pool = createPool({
    host: "bec6ajxoan6reiui02ca-mysql.services.clever-cloud.com",
    user: "u0b12xpumebzixyw",
    password: "v2oWtDWX28KLkRCKvlvN",
    database: "bec6ajxoan6reiui02ca",
    connectionLimit: 5
});
 
// Retrieving data 
pool.query('SELECT * FROM Employees;', (error, result) => {
    if(error) {
        console.log("An error occurred, please try again");
    }
    // console.log(result);
 console.log('ID\tFirstname\tLastName');
    console.log('==\t==========\t=======');
    result.forEach(d => {
        console.log(''.concat(d.empID, '\t', d.firstname, '\t\t', d.lastname));
    });
});
