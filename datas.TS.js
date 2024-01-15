var Dias;
(function (Dias) {
    Dias[Dias["domingo"] = 0] = "domingo";
    Dias[Dias["segunda"] = 1] = "segunda";
    Dias[Dias["terca"] = 2] = "terca";
    Dias[Dias["quarta"] = 3] = "quarta";
    Dias[Dias["quinta"] = 4] = "quinta";
    Dias[Dias["sexta"] = 5] = "sexta";
    Dias[Dias["sabado"] = 6] = "sabado";
})(Dias || (Dias = {}));
var dia = new Date();
console.log(dia);
// Diz o número do mês
console.log("O número do mês é: " + (dia.getMonth() + 1)); // Note que getMonth() retorna de 0 a 11.
// Diz o dia da semana
console.log("O dia da semana é " + Dias[dia.getDay()]);
/*
   Comandos para execução:
   npm install -g typescript
   tsc datas.ts
   node datas.js
*/
