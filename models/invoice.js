var mongoose =require('mongoose');

/// Invoice Schema

var invoiceSchema = mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    service:{
        type:String,
        require :true
    },
    price:{
        type:String
    },
    due:{
        type:String      
    },
    status:{
        type:String,
        require :true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

var Invoice =module.exports=mongoose.model('Invoice',invoiceSchema);

// Get Invoices
module.exports.getInvoices =function (callback,limit) {
    
    Invoice.find(callback).limit(limit).populate('customer').sort([['createdAt','descending']])
    
}

// Get Invoice
module.exports.getInvoiceById =function (id,callback) {
    
    Invoice.findById(id,callback).populate('customer');
    
}

// Add Invoice

module.exports.addInvoice = function (invoice,callback) {
    
    var add = {
        
        customer: invoice.customer_id,
        service:invoice.service,
        price:invoice.price,
        due:invoice.due,
        status:invoice.status
        }
    Invoice.create(add, callback);
}

// Update Invoice


module.exports.updateInvoice = function (id,invoice,option,callback) {
     var query = {_id: id};
     var update ={
        service:invoice.service,
        price:invoice.price,
        due:invoice.due,
        status:invoice.status
        }
    Invoice.findOneAndUpdate(query,update,option, callback);
}


//Remove Invoices

module.exports.removeInvoice = function (id,callback) {
    var query ={_id:id};
    Invoice.remove(query,callback);
}
