angular.module("modulocadastro")
    .value("configAPIS", {
        urlcadastro: "http://localhost:8080/app/api/cadastro"
    });

    angular.module("moduloPedido")
    .value("configAPIS", {
        urlPedido: "http://localhost:8080/app/api/pedido",
        urlcadastro: "http://localhost:8080/app/api/cadastro"
    });