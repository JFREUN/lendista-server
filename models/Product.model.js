const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Password is required."],
    },
    category: {
      type: String,
      enum: ["top", "hoodie", "jacket", "dress", "shorts", "trousers", "skirt"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
    credits: Number,
    imageUrl: String,
    inStock: {
      type: Boolean,
    },
    rentedAt: {
      type: Date,
    },
    renter: { type: Schema.Types.ObjectId, ref: 'User' },
    returned: Boolean
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
