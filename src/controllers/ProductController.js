import mongoose from 'mongoose';
import ProductModel from '../models/Product.js'

export default {
    async index(req,res){
        const products = await ProductModel.find();
        return res.json(products)
    }
}