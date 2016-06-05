var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
    
   $routeProvider.when('/',{
       controller: 'DashboardController',
       templateUrl: 'views/dashboard.html'
       
   })
   .when('/customers',{
       controller: 'CustomerController',
       templateUrl: 'views/customers.html'
       
   })
   .when('/customers/details/:id',{
       controller: 'CustomerController',
       templateUrl: 'views/customer_details.html'
       
   })
    .when('/customers/edit/:id',{
       controller: 'CustomerController',
       templateUrl: 'views/edit_customer.html'
       
   })
   .when('/invoices',{
       controller: 'InvoiceController',
       templateUrl: 'views/invoices.html'
       
   })
    .when('/invoices/details/:id',{
       controller: 'InvoiceController',
       templateUrl: 'views/invoice_details.html'
       
   })
   .when('/customers/add',{
       controller: 'CustomerController',
       templateUrl: 'views/add_customer.html'
       
   })
   .when('/invoices/add',{
       controller: 'InvoiceController',
       templateUrl: 'views/add_invoice.html'
       
   })
    .when('/invoices/edit/:id',{
       controller: 'InvoiceController',
       templateUrl: 'views/edit_invoice.html'
       
   })
    .otherwise({
       redirectTo: '/'
   }); 
});