var express =require('express');
var router = express.Router();


Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');
// GET all Invoices

router.get('/',function (req, res) {
  
   
 Invoice.getInvoices(function (err,invoices) {
      if(err){
          res.send(err);
      } 
      res.json(invoices);
       
   })
});

//GET single Invoice
router.get('/:id',function (req, res) {
   Invoice.getInvoiceById(req.params.id, function ( err,invoice) {
      if(err){
          res.send(err);
      } 
      res.json(invoice);
       
   })
});


//add Invoice
router.post('/',function (req,res) {
    var invoice = req.body;
    Invoice.addInvoice(invoice,function (err,invoice) {
        
        if(err){
            res.send(err);
        }
        res.json(invoice);
        
    });
});

// Update Invoice

router.put('/:id',function (req,res) {
    var id = req.params.id;
    var invoice = req.body;
    Invoice.updateInvoice(id,invoice,{},function (err,invoice) {
        
        if(err){ 
            res.send(err);
        }
        res.json(invoice);
        
    });
});

//Delete Invoice
router.delete('/:id', function (req,res) {
    var id =req.params.id;
    Invoice.removeInvoice(id,function(err,invoice){
        if(err){
            res.send(err);
        }
        res.json(invoice);
    });
});

 module.exports = router;