import mongoose from 'mongoose';
import ProductModel from '../models/Product.js';

export default {
  async index(req, res) {
    const { page = 1 } = req.query;
    // const products = await ProductModel.find();
    const products = await ProductModel.paginate({}, { page, limit: 10 });
    console.log(`length: ${products.docs.length}`);
    return res.json(products);
  },
  async store(req, res) {
    const { body } = req;
    const product = await ProductModel.create(body);

    return res.send({ status: 'ok', product });
  },
  async show(req, res) {
    const { id: _id } = req.params;
    const productDetails = await ProductModel.findById(_id);

    return res.status(200).json(productDetails);
  },
  async update(req, res) {
    const { body } = req;
    const { id: _id } = req.params;

    const productUpdated = await ProductModel.findByIdAndUpdate(_id, body, {
      new: true,
    });
    return res.json(productUpdated);
  },
  async destroy(req, res) {
    const { id: _id } = req.params;
    await ProductModel.findByIdAndRemove(_id);
    return res.send();
  },
};
