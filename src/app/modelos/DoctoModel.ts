export interface DoctoModel {
  _id: Number,
  docu_Fecha: Date,
  // docu_IdTutor: Number,
  docu_Tutor: { idTutor: Number, nombreTutor: String },
  docu_Tipo: String,
  docu_Estatus: Number,
  docu_FechValida: Date,
  docu_Observacion: String,
  info: String,
  statusText: String,
  statusCode: Number
}

/*
export interface DoctoModel {
  _id: Number,
  docu_Fecha: Date,
  docu_IdTutor: Number,
  docu_Tutor: String,
  docu_Tipo: String,
  docu_Estatus: Number,
  docu_FechValida: Date,
  docu_Observacion: String
}
*/

/*export interface DoctoModel {
  'docto_Id': Number;
  'docto_Nombre': String;
  'docto_Tipo': String;
  'docto_Status': String;
}
*/
// agregar: docto_TutorId  , 'docto_Obs': String;
// docto_Status: 0:pendiente 1:validado 2:declinado
// 'docto_Status': Number;


/* DATOS QUE PROVIENEN DE JSON EXTERNO
export interface DoctoModel {
  'userId': Number;
  'title': String;
  'completed': Boolean;
}
*/



/*export class DocumentoModel {
  constructor(
    public id: number,
    public nombre: string,
    public status: boolean
    public url?: string // por si no trae el dato
  ) {}
}
*/
