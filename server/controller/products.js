
const Product =require('../models/product.model')

// Add new product
const saveProduct = async(req,res) => { 
const newProduct = new Product({

  name: req.body.name,
  price: req.body.price,
  description: req.body.description,
  color: req.body.color,
  size: req.body.size,
  gender: req.body.gender,
  categorie:req.body.categorie,
  enum : req.body.enum,
  brande: req.body.brande,
  closeView: req.body.closeView,
  fullView: req.body.fullView,
  withoutModel: req.body.withoutModel
  
});
try {
  await newProduct.save().then((result) => {
    res.status(201).json(result);
  });
} catch (error) {
  res.status(500).json(error);
} 
} 

// Get All Product

  const get =  async (req,res) => {
const allProduct =  await Product.find({})
   try {
    res.status(200).send(allProduct)

   } catch (error) {
    res.status(401).send(error)
   }
  } 
  //Get one product

  const findOneProduct = async (req, res) => {
    const oneProduct = await Product.findOne({ name: req.params.name });
    try {
      res.status(201).json(oneProduct);
    } catch (err) {
      res.status(500).json(err);
    }

  };

// Delete product

  const deleteProduct = async(req,res) =>{ 
    try { 
      await Product.findOneAndDelete({id:req.params.id})
      res.send('deleted')
    }
    catch (err){
      console.log(err)
    }
  }
  
// Modify Product 

  const put =async(req,res) =>{ 
    try { 
      await Product.findOneAndUpdate({id:req.params.id},{
        
  name: req.body.name,
  price: req.body.price,
  description: req.body.description,
  color: req.body.color,
  size: req.body.size,
  gender: req.body.gender,
  categorie:req.body.categorie,
  enum : req.body.enum,
  brande: req.body.brande,
  closeView: req.body.closeView,
  fullView: req.body.fullView,
  withoutModel: req.body.withoutModel

      })
      res.send('yeey')
    }
    catch (err){
      console.log(err)
    }
  }





      module.exports = {saveProduct,get,put,deleteProduct,findOneProduct}