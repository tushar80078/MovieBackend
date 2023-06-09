

const errorMiddleware = (err, req, res, next) => {

    res.json({
        message: "Failed",
        err: err.toString()
    })
}

module.exports = errorMiddleware