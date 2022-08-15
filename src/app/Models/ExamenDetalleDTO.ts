export interface RegistroDevOpExamenDetalleDTO{
  id:number,
  idSimuladorDevOpExamen:number,
  idSimuladorDevOpDominio:number,
  idSimuladorDevOpTarea?:number,
  idSimuladorDevOpPregunta:number,
  ejecutado:boolean,
  idSimuladorDevOpPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
