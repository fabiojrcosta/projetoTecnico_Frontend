angular.module("moduloPedido").service("pedidoAPI", function ($http, configAPIS) {
    this.postPedido = function (servico) {
        return $http.post(configAPIS.urlPedido, pedido);
    };

    this.postPedidoByPedido = function (idPedido) {
        return $http.post(configAPIS.urlPedido + "/" + idPedido);
    };
    
});