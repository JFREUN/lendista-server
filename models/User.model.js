const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Password is required."],
    },
    membership: {
      type: String,
      enum: ["S", "M", "L"],
    },
    role: {
      type: String,
      enum: ["Admin", "Member"],
    },
    credits: Number,

    paymentCard: {
      name: String,
      number: {
        type: Number,
      },
      expiry: {
        type: String,
      },
      cvv: {
        type: Number,
        maxlength: 3,
      },
    },

    rentedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    pastRented: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    basket: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
