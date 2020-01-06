export default {
    numberToReal: function(currency, numero) {
        numero = numero.toFixed(2).split('.');
        numero[0] = `${currency} ` + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    },
}