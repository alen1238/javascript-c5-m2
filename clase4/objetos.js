let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Ingeniería Informática",
    activo : true
}

estudiante.edad = 21;
estudiante.semestre = 4;


let cursos = [
    {nombre: "Matemáticas", creditos: 5},
    {nombre: "Física", creditos: 4},
    {nombre: "Química", creditos: 4}
]

cursos[1].creditos = 6;

let estudiante2 = {
    nombre: "María",
    edad: 22,
    direccion: {
        ciudad: "Bogotá",
        barrio: "Chapinero",
        codigoPostal: "110111"
    }
}

estudiante2.direccion.barrio = "Teusaquillo";


let estudiantes = [
    {nombre: "Ana", notas:{matematicas: 85, fisica: 90}}, 
    {nombre: "Carlos", notas:[78, 82]}, 
    {nombre: "Luisa", notas:{matematicas: 92, fisica: 88}}
];

console.log(estudiantes[0].notas.matematicas); // 


let estudiante3 = {
    id: 12131,
    nombre: "alexandra",
    ciudad: "medellin",
    correo: "alexandra@ejemplo.com"
}



