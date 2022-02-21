const { check } = require("../querys");

const createUser = (req, res) => {
    const { first_name, last_name, password, email, company_id, phone_number, promition } = req.body;
    if(first_name && last_name && password && email && company_id && phone_number && promition){
       check(`SELECT * FROM users WHERE email = '${email}' OR phone_number = '${phone_number}'`).then((flag) => {
           console.log(flag);
        if(flag){
            res.send({
                status: false,
                message: "User is exist",
                error: null
            });
        }else{
            check(`INSERT into users (first_name, last_name, company_id, email, password, phone_number, promition) VALUES ('${first_name}', '${last_name}', '${company_id}', '${email}', '${password}', '${phone_number}', ${promition})`)
            .then((flag) => {
                if(!flag){
                    res.send({
                        status: true,
                        message: "Secessfuly added new user",
                        error: null
                    });
                }else{
                    res.send({
                        status: false,
                        error: "Field to add new user"
                    });
                }
            }).catch((err) => {
                res.send({
                    status: false,
                    error: err
                });
            })
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
            error: "Missing some property"
        })
    }
}
module.exports = {createUser}