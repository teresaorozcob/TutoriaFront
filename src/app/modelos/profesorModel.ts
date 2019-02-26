export interface ProfesorModel {
    _id: Number,
    idProfesor: Number,
    apellido1: String,
    apellido2: String,
    nombre: String,
    fechaNac: Date,
    plantel: String,
    puestoInstituto: String,
    correoInstitucional: String,
    correoPersonal: String,
    academico: {
      grado: String
    },
    statusCode: Number,
    info: String

}
