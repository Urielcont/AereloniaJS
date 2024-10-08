 
 var numBoletos=0, msg=["Se imprimio el ticket Correctamente"];

 try{

 
function Calcular(){

    // declaracion de variables locales
    let nombre="",apellido="", edad=0,sexo="", nacionalidad="", origen="",destino="", horaSalida="", fechaSalida="",tipoAvion="",
     aerolinea="",costo=0, desc=0, totdesc=0, costoT=0, pesoeq=0,kgex=0,asiento=0;
     const aviones=["Airbus 330","AIRBUS 320","BOEING 777","BOEING 737"];

     const lim=10,kgp=100,precxec=300;

     

    //  obtencion de datos
        nombre=document.getElementById("nombre").value;
        apellido=document.getElementById("apellido").value;
        edad=parseInt(document.getElementById("edad").value);
        sexo=document.getElementById("sexo").value;
        nacionalidad=document.getElementById("nacionalidad").value;
        origen=document.getElementById("origen").value;
        costo=parseInt(document.getElementById("destino").value);
        horaSalida=document.getElementById("horaSalida").value;
        fechaSalida=document.getElementById("fechaSalida").value;
        fechaVuelta=document.getElementById("fechaVuelta").value
        horaVuelta=document.getElementById("horaVuelta").value;
        aerolinea=document.getElementById("tAerolinea").value;
        pesoeq=parseInt(document.getElementById("pesoeq").value);
        // kgexCampo=document.getElementById("kgextraCampo")


       
        // condicion para obtener el destino
        switch (costo){
            case 1800:destino="Paris";tipoAvion=aviones[0];break
            case 1300:destino="España";tipoAvion=aviones[0];break
            case 1200:destino="Estados Unidos";tipoAvion=aviones[1];break
            case 2000:destino="Japon";tipoAvion=aviones[2];break
            case 1400:destino="Italia";tipoAvion=aviones[3];break
        }

        // Condicion para calcular el equipaje
        if(pesoeq>=10 && pesoeq<=40){
          kgex=pesoeq-lim;
          // document.getElementById("kgextraCampo").value= `${kgex}`;
          totkgex=kgex*precxec;
          totkg1=((pesoeq-kgex)*kgp)+totkgex;
          totkg=1000;;
          
          alert(`Se cobrara 300 pesos extras por cada kilo extra, Kg extra=${kgex}
          ${totkg1}`)
          MostrarDatos(); 
          
        }else if(pesoeq>40) {
          alert(`NO SE PUEDE SUBIR MAS DE 40KG EN EQUIPAJE`)
          document.getElementById("pesoeq").value=40;
          
        }else if(pesoeq<0){
          alert(`No se puede realizar la accion`);
        }else if(pesoeq==0){
          kgex=pesoeq;
          totkgex=0;
          totkg=pesoeq*kgp;
         MostrarDatos();
        }else{
          alert(`No se puede realizar la accion`); 
        }
        


     
        

         

          
          

          
   
    
    function ticket(){
      // Instancias
      const Aero1 = new Personas(nombre,apellido,edad,sexo,nacionalidad);
      const Vuelo1= new Vuelos(origen,destino);
      const Fecha1=new Fechas(origen,destino,horaSalida,fechaSalida,aerolinea)

      Aero1.nacionalidad=Aero1.ConvertirMayus();
      Vuelo1.origen=Vuelo1.ConvertirMayus();
      Fecha1.aerolinea=Fecha1.ConvertirMayus();


      if(Aero1.edad<=8 || Aero1.edad>=60){
        desc=0.50;
        totdesc=costo*desc;
      }else{
        totdesc=0;
       }

      //numero de asiento
        asiento= Math.ceil(Math.random()*31);
      
      


      tot=costo+totkgex+totkg-totdesc;

      document.getElementById("mosNom").value=Aero1.nombre;
        document.getElementById("mosApellido").value=Aero1.apellido;
        document.getElementById("mosEdad").value=Aero1.edad;
        document.getElementById("mosSexo").value=Aero1.sexo;
        document.getElementById("mosNacionalidad").value=Aero1.nacionalidad;
        document.getElementById("mosOrigen").value=Vuelo1.origen
        document.getElementById("mosDestino").value=Vuelo1.destino
        document.getElementById("mosFechaSalida").value=Fecha1.fechaSalida;
        document.getElementById("mosHoraSalida").value=Fecha1.horaSalida;
        document.getElementById("mosFechaVuelta").value=fechaVuelta;
        document.getElementById("mosHoraVuelta").value=horaVuelta;
        document.getElementById("mosAero").value=Fecha1.aerolinea;
        document.getElementById("mosPesoeq").value=pesoeq;
        document.getElementById("mosAsiento").value=asiento;
        document.getElementById("mosCostoBol").value=costo;
        document.getElementById("mosTipoA").value=tipoAvion;
        document.getElementById("mosKgextra").value=kgex;
        document.getElementById("mosDesc").value=totdesc;
        document.getElementById("mosPrecioEq").value=totkg;
        document.getElementById("mosPrecioEqEx").value=totkgex;
        document.getElementById("mosTot").value=tot;
      
    }




    function MostrarDatos(){
      opcPrompt=confirm(`¿Deseas Continuar?`);

          if(opcPrompt==true){
          CampoOcultar=document.getElementById("container");
          CampoOcultar.style.display="none";
          
          CampoMostrar=document.getElementById("container2");
          CampoMostrar.style.display="block";
          numBoletos++;
          // acum+=costo;

          ticket();
          }else{
      
          }
    }


    
    Limpiar();
      
       
    }

  } catch(error){
    alert(error);
  }



  //  Mostrar fecha de vuelta

    var ida = document.getElementById("ida");
    var idayvuelta = document.getElementById("idayvuelta");
    var campo = document.getElementById("vuelta-div");
    var mosCam = document.getElementById("vuelta-div2");

    ida.addEventListener("change", function() {
      if (ida.checked) {
        campo.style.display = "none";
        mosCam.style.display= "none";
      } else {
        campo.style.display = "none";
        mosCam.style.display= "none";
      }
    });

    idayvuelta.addEventListener("change", function() {
      if (idayvuelta.checked) {
        campo.style.display = "block";
        mosCam.style.display= "block";
      } else {
        campo.style.display = "none";
        mosCam.style.display= "none";
      }
    });



  // funcion para limpiar campos

  function Limpiar(){

      document.getElementById("nombre").value="";
      document.getElementById("apellido").value="";
      document.getElementById("edad").value="";
      document.getElementById("nacionalidad").value="";
      document.getElementById("origen").value="";
      document.getElementById("pesoeq").value="0";
      document.getElementById("horaSalida").value="10:30";
      document.getElementById("fechaSalida").value="2023-04-25";
      document.getElementById("fechaVuelta").value="2023-04-26";
      document.getElementById("horaVuelta").value="10:30";

      CampoMensajeExtra=document.getElementById("CampoPeso");
   CampoMensajeExtra.style.display="none";


  }


  function resetear(){
    Limpiar();
    numBoletos=0;
  }


  // funciones de botones del ticket
  function Imprimirticket(){
    
    alert(`${msg[0]}`);
  
    // contador para las veces que se imprimio el boleto
    let contador = 1;
    const miBoton = document.getElementById('btn-imprimir');

    miBoton.addEventListener('click', () => {
   contador++;
    
    });
    alert(`Se imprimio ${contador} veces`);
    
    window.location.replace("../INICIO.html");

  }
  function ComprarOtro(){
   let compra=0
   do{
    CampoOcultar2=document.getElementById("container");
    CampoOcultar2.style.display="block";

    
    CampoMostrar2=document.getElementById("container2");
    CampoMostrar2.style.display="none";

    alert(`Numero de boletos Comprados ${numBoletos}`)
   }while(compra>1)
  }

  function SalirB(){

    let saliendo=0
    do{
      alert(`Saliendo del sistema...`);
      saliendo++;
      alert(`Numero de boletos Comprados:${numBoletos}`)
    window.location.replace("../INICIO.html");

    resetear();
    }while (saliendo<1)
      

  
    
  }