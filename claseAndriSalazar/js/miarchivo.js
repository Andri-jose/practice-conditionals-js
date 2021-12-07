
// numero mayor que, mostrado con alert
let estrellas= prompt("ingrese la cantidad de veces que ha ido al cine en su vida");

parseInt(estrellas);

if (estrellas >= 200) {
    alert("Muy bien");
}
else if(estrellas < 200)  {
    alert("hay que seguir iendo");
}
else {
    alert("palabra incorrecta");
}


// alerta por consola
let saludo= prompt("Diga Hola");

if (saludo == "Hola") {
    console.log("Un gusto")
}
else {
    console.log("palabra incorrecta");
}


//numero entre 10 y 50 mostrado con alert

let edad= prompt("ingrese su edad");

parseInt(edad);

if ((edad >= 18) && (edad <= 34)) {
    alert("Usted es un adulto joven");
}
else if ((edad > 5) && (edad < 18)) {
    alert("Usted es muy joven");
}
else if ((edad > 34) && (edad <= 75)) {
    alert("Usted ya empezo a envejecer");
}
else {
    alert("palabra incorrecta");
}