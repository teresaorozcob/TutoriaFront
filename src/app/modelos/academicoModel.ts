export interface AcademicoModel {
    grado: {
        _id: String,
        tipo: String,
        nombre: String,
        escuela: String,
        periodoIni: Number,
        periodoFin: Number,
        titulo: Boolean,
        fechaTitulo: Number
    },
    statusCode: Number,
    info: String
}


/*

    escuela: String,
    periodoIni: Date,
    periodoFin: Date,
    titulo: Boolean,
    fechaTitulo: Date,
    documento: {
        tipo: String,
        numCedula: Number,
        ruta: String
    }
  },
  carrera: {
    actividad: string
  }
  */
