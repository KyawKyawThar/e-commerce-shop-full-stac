const router = require("express").Router();
const Cart = require("../model/CartModel");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken} = require("./verifyToken");

//Create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const saveCart = await newCart.save();

    res.status(200).json(saveCart);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Update Cart

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCart = new Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { $new: true }
    );
    res.status(200).json(updateCart);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Your cart has veen delete successfully");
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get User Cart
router.get("/find/:id",verifyTokenAndAuthorization, async (req,res) => {
   try {
     const cart = await Cart.findOne({userId: req.params.userId})
     res.status(200).json(cart)
   }catch (e) {
 res.status(500).json(e)
   }
})

//Get All

router.get("/", verifyTokenAndAdmin, async (req,res) => {
  try {
    const cart = await Cart.find()
    res.status(200).json(cart)

  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router;
