let semana = 1
const semanaDeSeguimiento = 4
let propuestasAtendidas = 0

console.log("seguimiento comunitario semanal")

while (semana <= semanaDeSeguimiento) {
    console.log ("semana de seguimiento número:", semana)
    propuestasAtendidas = propuestasAtendidas + 2
    console.log("Propuestas atendidas hasta ahora:", propuestasAtendidas);
    semana = semana + 1
}
console.log("seguimiento comunitario finalizado.")
console.log("total de propuestas atendidas:", propuestasAtendidas)