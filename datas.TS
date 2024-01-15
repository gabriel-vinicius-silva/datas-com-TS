enum Dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6,
}

const dia = new Date();
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
