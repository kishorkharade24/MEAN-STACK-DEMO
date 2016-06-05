var myApp = angular.module("myApp");


myApp.controller('CustomerController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
    
    console.log("CustomerController initlized");
    
    $scope.getCustomers = function(){
        $http.get('/api/customers').success(function(response){
            $scope.customers =response;   
        
        });
    }
     $scope.getCustomer = function(){
         var id = $routeParams.id;
        $http.get('/api/customers/'+id).success(function(response){
            $scope.customer =response;   
        
        });
    }
    $scope.addCustomer = function(){
    
        $http.post('/api/customers/',$scope.customer).success(
            window.location.href='/#customers'        
        );
    }
     
    $scope.updateCustomer = function(){
    
        $http.put('/api/customers/'+$scope.customer._id,$scope.customer).success(
            window.location.href='/#customers'        
        );
    }
    
    $scope.deleteCustomer=function(id){
        $http.delete('/api/customers/'+id).success(
            window.location.href='/#customers'        
        );
    }
}]);