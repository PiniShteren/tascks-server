const sql = require("../config");
const check = (query) => {
    return new Promise((reslove, reject) => {
        sql.query(query, (err, result, field) => {
            if(err) reject(err);
            if(result && result.length > 0){
                reslove(result);
            }else{
                reslove(false)
            }
         })
    })
}
const insert = (query) => {
    return new Promise((reslove, reject) => {
        sql.query(query, (err, result, field) => {
            if(err) reject(err);
            reslove(true);
         })
    })
}
module.exports = {check, insert};