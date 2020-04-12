angular.module("moduloContato").service("contatoAPI", function ($http, configAPIS) {
    this.postContato = function (email) {
        return $http.post(configAPIS.urlContato, email);
    };

    this.postContatoByContato = function (idContato) {
        return $http.post(configAPIS.urlContato + "/" + idContato);
    };
    
});