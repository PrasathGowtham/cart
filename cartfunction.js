const cart = require("./model")



const createList = async (req, res) => {
    try {
        const List = new cart({
            productname: req.body.productname,
            productimage: req.body.productimage,
            quantity: req.body.quantity,
            price: req.body.price,
            stock: req.body.stock,
        })
        const createData = await List.save();
        if (createData) {
            res.send(createData)
        }
    } catch (error) {
        
        console.log(error)
          res.status(500).send(err)
    }
}

const getList = async (req, res) => {
    try {
        const list = await cart.findById(req.params.id);

        if (list) {
            res.json(list)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getList, createList };