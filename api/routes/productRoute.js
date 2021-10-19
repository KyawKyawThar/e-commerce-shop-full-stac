const router = require("express").Router();
const Product = require("../model/productModel");
const { verifyTokenAndAdmin, verifyToken} = require("./verifyToken");

//Create Product
router.post("/", verifyToken, async (req, res) => {
  const newProducts = new Product(req.body);

  try {
    const savedProduct = await newProducts.save();
    res.status(200).json(savedProduct);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateProduct);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Delete Product

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted successfully....");
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get Product

router.get("/find/:id", async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get all Product
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  console.log(qCategory);

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(404).json(e);
  }
});

module.exports = router;
