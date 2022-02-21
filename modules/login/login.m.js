const { check } = require("../querys");

const login = (req, res) => {
    const { phone_number, email, password } = req.body;
    if((phone_number || email) && password){
       check(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}' OR phone_number = '${phone_number}' AND password = '${password}'`).then((flag) => {
        if(flag){
            res.send({
                status: true,
                user: flag,
                error: null
            });
        }else{
            res.send({
                status: false,
                message: "Email/Phone number or password, do not match",
                error: err
            });
        }
       }).catch((err) => {
        res.send({
            status: false,
            error: err
        });
       })
    }else{
        res.send({
            status: false,
            error: "Missing name or password"
        })
    }
}
module.exports = {login}