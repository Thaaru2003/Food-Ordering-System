import Order from "../Model/userModels.js";

export const create = async(req, res)=>{
    try{
       
        const orderData = new Order(req.body);
        const {customerName} = orderData;

        const orderExist = await Order.findOne({customerName})
        if(orderExist){
            return res.status(400).json({message : "Order already exists."})
        }
       
        const savedorder = await orderData.save();
       
        res.status(200).json(savedorder)
    } catch(error){
     
        res.status(500).json({error: "Internal server Error."})
    }
}


export const fetch = async(req, res)=>{
    try{
        
        const customerName = await Order.find();

        if(customerName.length=== 0){
            return res.status(404).json({message : "customerName not found."})
        }
       res.status(200).json(customerName);
    } catch(error){
       
        res.status(500).json({error: "Internal server Error."})
    }
}

export const update = async(req, res)=>{
    try{
        
        const id = req.params.id;
        
        const OrderExist = await Order.findOne({_id:id})
        if(!OrderExist){
            return res.status(404).json({message : "student not found."});
        }
       
        const updateOrder = await Order.findByIdAndUpdate(id,req.body,{new : true});
       res.status(201).json(updateOrder);
    } catch(error){
       
        res.status(500).json({error: "Internal server Error."});
    }
}

export const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id;

        const orderExist = await Order.findById(id);

        if (!orderExist) {
            return res.status(404).json({ message: "Order not found." });
        }

        await Order.findByIdAndDelete(id);

        return res.status(200).json({ message: "Order deleted successfully." });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
};