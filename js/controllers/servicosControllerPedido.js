angular.module('moduloPedido')
    .controller('pedidoController', function ($scope, $injector, $http) {
        var pedidoAPI = $injector.get('pedidoAPI');

        init();

        function init() {
            $scope.app = 'moduloPedido'
            $scope.titulo = "Pedido";
            $scope.servico = [];
            $scope.servico = "pedido";
            
            $scope.servicos = function () {
                $http.post("http://localhost:8080/app/api/orcamento", pedido).then(function (resposta) {

                }).catch(function (resposta) {

                });
                
            }
        };

    });