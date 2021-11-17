const router = require("express").Router();
const SECRET_KEY =
  "sk_test_51Il60uCQSzWaiOUS2fiURkisBek5crs5vFIcUGAn5IJNE8Dx18O5PGM2Uf0o1yoi5Q1X7mMh07SNhpguldb7l8qA00AJLIXy8P";
const stripe = require("stripe")(SECRET_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      currency: "usd",
      source: req.body.tokenId,
      amount: req.body.amount,
      description: "One-time setup fee",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
