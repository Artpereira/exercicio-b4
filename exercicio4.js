// Usando operador E (&&)
const currentHour = 11;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

// Usando operador OU (||)

let weekDay = "SaBado";
let formatedWeekDay = weekDay.toLowerCase();

if (formatedWeekDay == "sabado" || formatedWeekDay == "domingo") {
    console.log(`Hoje é ${formatedWeekDay}, dia de descanso`);
} else if (formatedWeekDay == "Segunda-feira" || formatedWeekDay == "Terça-feira" || formatedWeekDay == "Quarta-feira" || formatedWeekDay == "Quinta-feira" || formatedWeekDay == "Sexta-feira"){
    console.log(`Hoje é ${formatedWeekDay}, mais um dia de aprendizado`);
} else {
    console.log("Dia da semana incorreto");
}


