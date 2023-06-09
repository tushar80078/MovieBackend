const bcrypt = require("bcrypt");

const encryptPasswordMiddlewar = (req, res, next) => {
    const saltRounds = 10;


    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB.

        req.body.password = hash;

        next();
    });

    // console.log(req.body);

}

module.exports = encryptPasswordMiddlewar;