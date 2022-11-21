const { Stripe } = require("../models/stripe");

//----------------------------------get all stripes data

const getStripe = async (req, res) => {
   try {
      const stripe = await Stripe.find({});
      if (!stripe) {
         throw Error("there is no stripe");
      }
      res.status(200).send(stripe);
   } catch (error) {
      res.status(500).send(error.message);
   }
};
module.exports = { getStripe };
