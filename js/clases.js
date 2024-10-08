class Personas{
    constructor(nombre,apellido,edad,sexo,nacionalidad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.sexo=sexo;
        this.nacionalidad=nacionalidad;
    }
    ConvertirMayus(){
       return this.nacionalidad.toUpperCase();
    }
}


class Vuelos{
    constructor(origen,destino){
        this.origen=origen;
        this.destino=destino;
        
    }
    ConvertirMayus(){
        return this.origen.toUpperCase();
     }


}


class Fechas extends Vuelos{
    constructor(origen,destino, horaSalida, fechaSalida, aerolinea){
        super(origen,destino);
        this.horaSalida=horaSalida;
        this.fechaSalida=fechaSalida;
        this.aerolinea=aerolinea;
    }
    ConvertirMayus(){
        return this.aerolinea.toUpperCase();
     }
}