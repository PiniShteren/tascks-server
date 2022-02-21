const { uuid } = require("uuidv4");
const { check, insert } = require("../querys");

const createCompany = (req, res) => {
    const { name, password, email } = req.body;
    if(name && password && email){
       check(`SELECT * FROM companys WHERE email = '${email}'`).then((flag) => {
        if(flag){
            res.send({
                status: false,
                message: "Company is exist",
                error: null
            });
        }else{
            console.log(`('${name}', '${uuid()}', '${email}', '${password}')`);
            insert(`INSERT INTO companys (name, company_id, email, password) VALUES ('${name}', '${uuid()}', '${email}', '${password}')`)
            .then((flag) => {
                if(flag){
                    res.send({
                        status: true,
                        message: "Secessfuly added new company",
                        error: null
                    });
                }else{
                    res.send({
                        status: false,
                        error: "Field to add new company"
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
            error: "Missing name or password"
        })
    }
}
module.exports = {createCompany}