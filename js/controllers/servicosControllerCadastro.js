angular.module('moduloCadastro')
    .controller('contatoController', function ($scope, $injector, $http) {
        var contatoAPI = $injector.post('cadastroAPI');

        init();

        function init() {
            $scope.app = 'moduloCadastro'
            $scope.titulo = "Cadastro";
            $scope.cadastro = [];
            $scope.cadastro = "cadastro";

            $scope.email = function () {
                $http.post("http://localhost:8080/app/api/cadastro", cadastro).then(function (resposta) {

                }).catch(function (resposta) {

                });
            }
        };

    });