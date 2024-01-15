enum Dias {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7,
}
const dia = new Date();
console.log(dia)
//diz o numero do meis
console.log("o numero do mes  é : "+dia.getDate())
//dis o dia da semana
console.log("o dia da semana é "+Dias[+dia.getDay()])
