import express from "express";

import { create, deletecustomerName, fetch, update} from "../Controller/userController.js";

const route  = express.Router();

route.get("/getallcustomer", fetch);  
route.post("/create", create);   
route.put("/update/:id", update); 
route.get("/delete/:id", deletecustomerName);  

export default route;