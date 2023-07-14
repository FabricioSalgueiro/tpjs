//ej9
function Persona(nombre,edad,genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
    console.log("Mi nombre es "+this.nombre +" y tengo "+this.edad + " año de edad y mi genero es "+ this.genero);
}

function Estudiante(nombre,edad,genero,curso, grupo) {
    Persona.call(this,nombre,edad,genero)
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona);

Estudiante.prototype.registrar = function () {
    console.log("El alumno "+this.nombre +" de "+this.edad + " año de edad y genero "+ this.genero+", a sido resgistrado en el curso "+ this.curso +" y en el grupo "+this.grupo);
}

function Profesor(nombre,edad,genero,asignatura, nivel) {
    Persona.call(this,nombre,edad,genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona);

Profesor.prototype.asignar = function () {
    console.log("El Profesor "+this.nombre +" de "+this.edad + " de edad y genero "+ this.genero+" a sido asignado a la asignatura "+ this.asignatura +" y en el nivel "+this.nivel);
}

function EstudianteInstancia() {
    let nombre = document.querySelector("#Nombre").value;
    let edad = document.querySelector("#Edad").value;
    let genero = document.querySelector("#Genero").value;
    let curso = document.querySelector("#Curso").value;
    let grupo = document.querySelector("#Grupo").value;

    let estudiante = new Estudiante(nombre,edad,genero,curso,grupo);

    console.log(estudiante.registrar());
}

function ProfesorInstancias() {
    let nombre = document.querySelector("#NombreP").value;
    let edad = document.querySelector("#EdadP").value;
    let genero = document.querySelector("#GeneroP").value;
    let asignatura = document.querySelector("#Asignatura").value;
    let Nivel = document.querySelector("#Nivel").value;

    let profesor = new Profesor(nombre,edad,genero,asignatura,Nivel);

    console.log(profesor.asignar());
}