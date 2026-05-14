import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    
	customerName: {
		type: String,
		required: true
	  },

	  foodItem: {
		type: String,
		required: true
	  },

	  quantity: {
		type: Number,
		required: true
	  },

	  price: {
		type: Number,
		required: true
	  },

	  address: {
		type: String,
		required: true
	  },

	  status: {
		type: String,
		enum: ["Pending", "Preparing", "Delivered"],
		default: "Pending"
	  }
  
});

export default mongoose.model("Order", orderSchema);
