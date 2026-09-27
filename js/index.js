

  var hoy = new Date()   /*fecha del día en hoy */
//    var dia = hoy.getDay();
//   var mes = hoy.getMonth()+1;
//   var year = hoy.getFullYear();
  var hora = hoy.getHours();
  var min = hoy.getMinutes();
  var sec = hoy.getSeconds();
  console.log(`${hora}:${min}`)








$(document).ready(function() {
 
});


function alert_msg(mensaje){
  const caja_mensaje = document.getElementById("mensaje_alert");
    const msg = document.getElementById("msg");
// alert_msg("como estas");
  caja_mensaje.style.display = "block";   
        msg.innerHTML =mensaje;
   setTimeout(() => {
            caja_mensaje.style.display = "none";
        }, 3000);
  
     
}

 

const btnCopiar = document.getElementById("btnCopiarPortapapeles"),
      plantillaWSP = document.getElementById("plantilla"),
      sotActa = document.getElementById("sot"),
      fechaActa = document.getElementById("txtFecha"),
      tecnicoActa = document.getElementById("txtNombreTecnico"),
      cintilloActa = document.getElementById("txtCintillo"),
      txtHoraInicio = document.getElementById("txtHoraInicio"),
      txtHoraTermino = document.getElementById("txtHoraTermino"),
      txtCliente = document.getElementById("razon_social"),



      codSolucionActa1 = document.getElementById("txtCodSolucion1"),
      codSolucionActa2 = document.getElementById("txtCodSolucion2"),
      codSolucionActa3 = document.getElementById("txtCodSolucion3"),
      codSolucionActa4 = document.getElementById("txtCodSolucion4"),
      snEquipoInstalado1 = document.getElementById("txtSnEquipoInstalado"),
      snEquipoRetirado = document.getElementById("txtSnEquipoRetirado"),
      radioHFC = document.getElementById("plataformaHfc"),
      radioFTTH = document.getElementById("plataformaFtth");


radioInstalacion = document.getElementById("servicioInsta");
radioPostVenta = document.getElementById("servicioPost"),
radioManto = document.getElementById("servicioManto"),
radioRetiroEquipos = document.getElementById("servicioRetiro");
radioMigracion = document.getElementById("servicioMigracion");

   const servicioRealizado  = document.querySelectorAll('input[name="servicioRealizado"]');

    txtCableCoaxialNegro = document.getElementById("txtCableCoaxialNegro"),
    txtCableCoaxialBlanco = document.getElementById("txtCableCoaxialBlanco"),
    txtCableTelefonico = document.getElementById("txtCableTelefonico"),
    txtCableUtp = document.getElementById("txtCableUtp"),
    txtCableIndor = document.getElementById("txtCableIndor"),
    txtRj11 = document.getElementById("txtRj11"),
    txtRj45 = document.getElementById("txtRj45"),
    txtConectorRg6 = document.getElementById("txtConectorRg6"),
    txtConectorOPT = document.getElementById("txtConectorOPT"),
    txtCableAPC = document.getElementById("txtCableAPC"),
    txtControlRemotoHFC = document.getElementById("txtControlRemotoHFC"),
    txtCableHDMI = document.getElementById("txtCableHDMI"),
    txtRosetaTelefonico = document.getElementById("txtRosetaTelefonico"),

    txtRosetaOPT = document.getElementById("txtRosetaOPT"),
    txtAnclajeP = document.getElementById("txtAnclajeP"),
    txtTelefono = document.getElementById("txtTelefono"),
    txtChapaQ = document.getElementById("txtChapaQ"),

    txtDivisor2v = document.getElementById("txtDivisor2v"),
    txtDivisor3v = document.getElementById("txtDivisor3v"),

    txtCintilloRojo = document.getElementById("txtCintilloRojo"),
    txtCintillosNegro = document.getElementById("txtCintillosNegro"),
    txtGrapasN8 = document.getElementById("txtGrapasN8"),
    txtGrapasN6 = document.getElementById("txtGrapasN6"),
    txtControlFTTH = document.getElementById("txtControlFTTH");

    txtCodSolucion1 = document.getElementById("txtCodSolucion1");
    txtCodSolucion2 = document.getElementById("txtCodSolucion2");
    txtDescripCodSolucion1 = document.getElementById("txtDescripCodSolucion1");
    txtDescripCodSolucion2 = document.getElementById("txtDescripCodSolucion2");

   const radiosDrop = document.querySelectorAll('input[name="drop"]');

    const radiosServicioRealizado= document.querySelectorAll('input[name="servicioRealizado"]');

    labelCableCoaxialNegro = document.getElementById("labelCableCoaxialNegro").textContent;
    labelCableCoaxialBlanco = document.getElementById("labelCableCoaxialBlanco").textContent;
    labelCableTelefonico = document.getElementById("labelCableTelefonico").textContent;
    labelCableUtp = document.getElementById("labelCableUtp").textContent;
    labelCableIndor = document.getElementById("labelCableIndor").textContent;
    labelRj11 = document.getElementById("labelRj11").textContent;
    labelRj45 = document.getElementById("labelRj45").textContent;
    labelConectorRg6 = document.getElementById("labelConectorRg6").textContent;
    labelConectorOPT = document.getElementById("labelConectorOPT").textContent;
    labelCableAPC = document.getElementById("labelCableAPC").textContent;
    labelControlRemotoHFC = document.getElementById("labelControlRemotoHFC").textContent;
    labelCableHDMI = document.getElementById("labelCableHDMI").textContent;
    labelRosetaTelefonico = document.getElementById("labelRosetaTelefonico").textContent;
    labelRosetaOPT = document.getElementById("labelRosetaOPT").textContent;
    labelAnclajeP = document.getElementById("labelAnclajeP").textContent;
    labelTelefono = document.getElementById("labelTelefono").textContent;

    labelChapaQ = document.getElementById("labelChapaQ").textContent;
    labelDivisor = document.getElementById("labelDivisor").textContent;
    
    labelTelefono = document.getElementById("labelTelefono").textContent;

    labelCintilloRojo = document.getElementById("labelCintilloRojo").textContent;
    labelCintillosNegro = document.getElementById("labelCintillosNegro").textContent;
    labelTelefono = document.getElementById("labelTelefono").textContent;

    labelGrapasN8 = document.getElementById("labelGrapasN8").textContent;
    labelGrapasN6 = document.getElementById("labelGrapasN6").textContent;
    labelControlFTTH = document.getElementById("labelControlFTTH").textContent;

    radioInstalado1 = document.getElementById("instalado1"),
    radioInstalado2 = document.getElementById("instalado2"),
    radioInstalado3 = document.getElementById("instalado3"),
    radioInstalado4 = document.getElementById("instalado4"),
    radioInstalado5 = document.getElementById("instalado5"),
    radioInstalado6 = document.getElementById("instalado6"),
    radioInstalado7 = document.getElementById("instalado7"),
    radioInstalado8 = document.getElementById("instalado8"),
    radioInstalado9 = document.getElementById("instalado9"),
    radioInstalado10 = document.getElementById("instalado10"),
    

    radioRetirado1 = document.getElementById("retirado1"),
    radioRetirado2 = document.getElementById("retirado2"),
    radioRetirado3 = document.getElementById("retirado3"),
    radioRetirado4 = document.getElementById("retirado4"),
    radioRetirado5 = document.getElementById("retirado5"),
    radioRetirado6 = document.getElementById("retirado6"),
    radioRetirado7 = document.getElementById("retirado7"),
    radioRetirado8 = document.getElementById("retirado8"),
    radioRetirado9 = document.getElementById("retirado9"),
    radioRetirado10 = document.getElementById("retirado10"),
    
    txtSnEquipoInstalado1 =document.getElementById("txtSnEquipoInstalado1"),
    txtSnEquipoInstalado2 =document.getElementById("txtSnEquipoInstalado2");
    txtSnEquipoInstalado3 =document.getElementById("txtSnEquipoInstalado3");
    txtSnEquipoInstalado4 =document.getElementById("txtSnEquipoInstalado4");
    txtSnEquipoInstalado5 =document.getElementById("txtSnEquipoInstalado5");
    txtSnEquipoInstalado6 =document.getElementById("txtSnEquipoInstalado6");
    txtSnEquipoInstalado7 =document.getElementById("txtSnEquipoInstalado7");
    txtSnEquipoInstalado8 =document.getElementById("txtSnEquipoInstalado8");
    txtSnEquipoInstalado9 =document.getElementById("txtSnEquipoInstalado9");
    txtSnEquipoInstalado10 =document.getElementById("txtSnEquipoInstalado10");

    labelCodigoAutorizacion1 =document.getElementById("mitextHolder1");
    labelCodigoAutorizacion2 =document.getElementById("mitextHolder2");
    labelCodigoAutorizacion3 =document.getElementById("mitextHolder3");

    txtCodigoAutorizacion1 =document.getElementById("txtCodigoAutorizacion1");
    txtCodigoAutorizacion2 =document.getElementById("txtCodigoAutorizacion2");
    txtCodigoAutorizacion3 =document.getElementById("txtCodigoAutorizacion3");



    txtObservacionesTecnico =document.getElementById("coment_tec");
    cont_impresion =document.getElementById("cont_impresion");


txtHoraInicio.value =`${hora-2}:${min}`;
txtHoraTermino.value=`${hora}:${min}`;


const loadingText = document.querySelector(".loading");

const progress = document.querySelector(".progress");

let dots ="", progressWidth = 0;


      
btnCopiar.addEventListener("click", e=>{

    resultado  =validacionActa();

    if(resultado ==false){
        return false;
    }







if(radioInstalacion.checked || radioPostVenta.checked || radioManto.checked || radioRetiroEquipos.checked || radioMigracion.checked){

    
   
                        serie1Copiado = txtSnEquipoInstalado1.value
                        serie2Copiado = txtSnEquipoInstalado2.value
                        serie3Copiado = txtSnEquipoInstalado3.value
                        serie4Copiado = txtSnEquipoInstalado4.value
                        serie5Copiado = txtSnEquipoInstalado5.value
                        serie6Copiado = txtSnEquipoInstalado6.value
                        serie7Copiado = txtSnEquipoInstalado7.value
                        serie8Copiado = txtSnEquipoInstalado8.value
                        serie9Copiado = txtSnEquipoInstalado9.value
                        serie10Copiado = txtSnEquipoInstalado10.value

                        let equipos_instalados = [];
                        let equipos_retirados = [];

                            if(radioInstalado1.checked==true){
                                    equipos_instalados.push("✔ " + serie1Copiado)
                            }else if(radioRetirado1.checked==true){
                                    equipos_retirados.push("✔ " + serie1Copiado)
                            }

                            if(radioInstalado2.checked==true){
                                equipos_instalados.push("✔ " + serie2Copiado)
                            }else if(radioRetirado2.checked==true){
                                equipos_retirados.push("✔ " + serie2Copiado)
                            }

                            if(radioInstalado3.checked==true){
                                equipos_instalados.push("✔ " + serie3Copiado)
                            }else if(radioRetirado3.checked==true){
                                equipos_retirados.push("✔ " + serie3Copiado)
                            }

                            if(radioInstalado4.checked==true){
                                equipos_instalados.push("✔ " + serie4Copiado)
                            }else if(radioRetirado4.checked==true){
                                equipos_retirados.push("✔ " + serie4Copiado)
                            }

                            if(radioInstalado5.checked==true){
                                equipos_instalados.push("✔ " + serie5Copiado)
                            }else if(radioRetirado5.checked==true){
                                equipos_retirados.push("✔ " + serie5Copiado)
                            }

                            if(radioInstalado6.checked==true){
                                equipos_instalados.push("✔ " + serie6Copiado)
                            }else if(radioRetirado6.checked==true){
                                equipos_retirados.push("✔ " + serie6Copiado)
                            }

                            if(radioInstalado7.checked==true){
                                equipos_instalados.push("✔ " + serie7Copiado)
                            }else if(radioRetirado7.checked==true){
                                equipos_retirados.push("✔ " + serie7Copiado)
                            }

                            if(radioInstalado8.checked==true){
                                equipos_instalados.push("✔ " + serie8Copiado)
                            }else if(radioRetirado8.checked==true){
                                equipos_retirados.push("✔ " + serie8Copiado)
                            }

                            if(radioInstalado9.checked==true){
                                equipos_instalados.push("✔ " + serie9Copiado)
                            }else if(radioRetirado9.checked==true){
                                equipos_retirados.push("✔ " + serie9Copiado)
                            }

                            if(radioInstalado10.checked==true){
                                equipos_instalados.push("✔ " + serie10Copiado)
                            }else if(radioRetirado10.checked==true){
                                equipos_retirados.push("✔ " + serie10Copiado)
                            }

                            var textoSeriesInstalados =equipos_instalados.join('\n')
                            var textoSeriesRetirados =equipos_retirados.join('\n')
                            textoSeriesInstalados.replaceAll(',', '');
                            textoSeriesRetirados.replaceAll(',', '');


                            let contadorMat = 0;
                            let arrayFerreteria = [];
                        if (txtCableCoaxialNegro.value.trim() !== "") { 
                            arrayFerreteria.push( "✔ " + txtCableCoaxialNegro.value + "m "+  labelCableCoaxialNegro.trimStart().trimEnd()); 
            contadorMat++
                            }
                        if (txtCableCoaxialBlanco.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableCoaxialBlanco.value + "m "+  labelCableCoaxialBlanco.trimStart().trimEnd());
            contadorMat++
                            }
                    
                        if (txtCableTelefonico.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableTelefonico.value + "m "+ labelCableTelefonico.trimStart().trimEnd());
            contadorMat++
                        }
                    
                        if (txtCableUtp.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableUtp.value + "m "+labelCableUtp.trimStart().trimEnd());
            contadorMat++
                        }

                        if (txtCableIndor.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableIndor.value + "m "+labelCableIndor.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtRj11.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtRj11.value + " "+labelRj11.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtRj45.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtRj45.value + " "+labelRj45.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtConectorRg6.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtConectorRg6.value + " "+labelConectorRg6.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtConectorOPT.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtConectorOPT.value + " "+labelConectorOPT.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtCableAPC.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableAPC.value + " "+labelCableAPC.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtControlRemotoHFC.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtControlRemotoHFC.value + " "+labelControlRemotoHFC.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtCableHDMI.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCableHDMI.value + " "+labelCableHDMI.trimStart().trimEnd());
            contadorMat++
                        }

                        if (txtRosetaOPT.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtRosetaOPT.value + " "+labelRosetaOPT.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtAnclajeP.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtAnclajeP.value + " "+labelAnclajeP.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtTelefono.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtTelefono.value + " "+labelTelefono.trimStart().trimEnd());
            contadorMat++
                        }
                        if (txtChapaQ.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtChapaQ.value + " "+labelChapaQ.trimStart().trimEnd());
            contadorMat++
                        }

                        if (txtDivisor2v.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtDivisor2v.value + " "+labelDivisor.trimStart().trimEnd()+ " 2v ") ;
            contadorMat++
                        }
                        if (txtDivisor3v.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtDivisor3v.value + " "+labelDivisor.trimStart().trimEnd()+ " 3v ") ;
                            contadorMat++ 
                        }


                        if (txtCintilloRojo.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCintilloRojo.value + " "+labelCintilloRojo.trimStart().trimEnd());
                            contadorMat++
                        }
                        if (txtCintillosNegro.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtCintillosNegro.value + " "+labelCintillosNegro.trimStart().trimEnd());
                            contadorMat++
                        }
                        if (txtGrapasN8.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtGrapasN8.value + " "+labelGrapasN8.trimStart().trimEnd());
                            contadorMat++
                        }
                        if (txtGrapasN6.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtGrapasN6.value + " "+labelGrapasN6.trimStart().trimEnd());
                            contadorMat++
                        }
                        if (txtControlFTTH.value.trim() !== "") {
                            arrayFerreteria.push( "✔ " + txtControlFTTH.value + " "+labelControlFTTH.trimStart().trimEnd());
                            contadorMat++
                        }

                        let radioDropSeleccionado  = '';
                        radiosDrop.forEach(radio => {
                            if (radio.checked) {
                                radioDropSeleccionado = radio.value;
                            }
                        });

                        if (radioDropSeleccionado.trim() !== "") {
                            arrayFerreteria.push( "✔ 1 Drop de " + radioDropSeleccionado);
                            contadorMat++
                        }



                        let radioServicioRealizado  = '';
                        servicioRealizado.forEach(radio => {
                            if (radio.checked) {
                                radioServicioRealizado = radio.value;
                            }
                        });

                        // console.log(radioServicioRealizado)



                        let arrayCodSol = [];
                        if (radioServicioRealizado.trim() == "manto") {

                            if (txtCodSolucion1.value.trim() !== "" ||txtCodSolucion2.value.trim() !== "") { 
                                // codSol =txtCodSolucion1.value
                                if (txtCodSolucion1.value.trim() !== "") {
                                        arrayCodSol.push( "✔  " + txtCodSolucion1.value );
                                }
                                if (txtCodSolucion2.value.trim() !== "") {
                                        arrayCodSol.push( "✔  " + txtCodSolucion2.value );
                                }
                                    var textoCodSol =arrayCodSol.join('\n')
                                    textoCodSol.replaceAll(',','');
                                    console.log(textoCodSol);
                            }else{ 
                                       mensajeToastError("Por lo menos digite 1 código de soluciónnnnnnn");

                                        alert_msg("Por lo menos digite 1 código de solución")
                                    //    mesajeToastError("Por lo menos digite 1 codigo de solucion")
                            }
                        }



                    
                var textoArrayFerreteria =arrayFerreteria.join('\n')
                textoArrayFerreteria.replaceAll(',','');

            if(contadorMat > 0){
                console.log(textoArrayFerreteria);
            }else{
                console.log('no hay mat')
            }

          

            let arrayCodAutorizacion = [];
            let contadorCodAutorizacion =0;
            if (txtCodigoAutorizacion1.value.trim() !== "") { 
                arrayCodAutorizacion.push("✔️  *"+ labelCodigoAutorizacion1.value +"* : "  + txtCodigoAutorizacion1.value);
                contadorCodAutorizacion++;
            }
            if (txtCodigoAutorizacion2.value.trim() !== "") { 
                arrayCodAutorizacion.push("✔️  *"+ labelCodigoAutorizacion2.value +"* : "  + txtCodigoAutorizacion2.value);
                contadorCodAutorizacion++;
            }
            if (txtCodigoAutorizacion3.value.trim() !== "") { 
                arrayCodAutorizacion.push("✔️  *"+ labelCodigoAutorizacion3.value +"* : "  + txtCodigoAutorizacion3.value);
                contadorCodAutorizacion++;
            }
                var textoarrayCodAutorizacion =arrayCodAutorizacion.join('\n')
                textoarrayCodAutorizacion.replaceAll(',','');

        

//   if (inputBox.value.trim() == "") { 
//            mensajeToastError("Digite nombre del Tecnico ");
//             return false
//         }




            let arrayPlantilla = [];

            if (sotActa.value.trim() !== "") { 
                arrayPlantilla.push("📌​  *Sot* : "  + sotActa.value);
            }else{
                
              mesajeToastError("Digite el Nº SOT");
               alert_msg("Digite el Nº SOT")
            
                 return false;
            }

            if (fechaActa.value.trim() !== "") { 
                arrayPlantilla.push("📅​  *Fecha* : "  + fechaActa.value);
            }


            let radioServivioSeleccionado  = '';
            radiosServicioRealizado.forEach(radio => {
                if (radio.checked) {
                    radioServivioSeleccionado = radio.value;
                }
            });

            if(radioServivioSeleccionado == "insta"){
                        arrayPlantilla.push("🛠️  *Tipo Actividad* : Instalación");
            }else if(radioServivioSeleccionado == "post"){
                        arrayPlantilla.push("🛠️  *Tipo Actividad* : Post Venta");
            }else if(radioServivioSeleccionado == "manto"){
                        arrayPlantilla.push("🛠️  *Tipo Actividad* : Mantenimiento");
            }
            else if(radioServivioSeleccionado == "retiroEQ"){
                        arrayPlantilla.push("🛠️  *Tipo Actividad* : Retiro Equipos");
            } else if(radioServivioSeleccionado == "migracion"){
                        arrayPlantilla.push("🛠️  *Tipo Actividad* : Migración");
            }

            // console.log(radioServivioSeleccionado + "jojojojjojojojo");


            if (tecnicoActa.value.trim() !== "") { 
                    const nombreArray = tecnicoActa.value.split(" ");
                const mostrarNombre = nombreArray.slice(0, 2).join(" ");
                    arrayPlantilla.push("👷  *Técnico* : "  + mostrarNombre +  '\n');

            }



            if (cintilloActa.value.trim() !== "") { 
                arrayPlantilla.push("🔖​ *Nº Cintillo* : "  + cintilloActa.value +  '\n' );
            }

            

            // let arrayCodSol = [];
             if (radioServicioRealizado.trim() == "manto") {

                            // if (txtCodSolucion1.value.trim() !== "" ||txtCodSolucion2.value.trim() !== "") { 
                            //    arrayPlantilla.push("💡​ *Cod. solución* : " +  '\n' + textoCodSol+  '\n' );
                            // }
            // 
              if (textoCodSol.trim() !== "") { 
                arrayPlantilla.push("💡​ *Cod. solución* : " +  '\n' + textoCodSol+  '\n' );
                }
            }else{ 
                        // mensajeToastError("Por lo menos digite 1 código de solucióness");
                        // return false;
            }


          










            if (textoSeriesInstalados.trim() !== "") { 
                arrayPlantilla.push("📦 *EQ Instalados* : "  +  '\n');
                arrayPlantilla.push(textoSeriesInstalados+  '\n');
            }

            if (textoSeriesRetirados.trim() !== "") { 
                arrayPlantilla.push("🔁 *EQ Retirados* : "  +  '\n');
                arrayPlantilla.push(textoSeriesRetirados+  '\n');
            }

            if (textoArrayFerreteria.trim() !== "") { 
                arrayPlantilla.push("🧰  *Materiales* : "  +  '\n');
                arrayPlantilla.push(textoArrayFerreteria+  '\n');
            }


            if(contadorCodAutorizacion > 0){
            console.log(textoarrayCodAutorizacion);
                arrayPlantilla.push("🔑  *Código Autorizacion* : "  +  '\n');
                arrayPlantilla.push(textoarrayCodAutorizacion+  '\n');
            }else{
                console.log('no hay mat')
            }



             if (txtObservacionesTecnico.value.trim() !== "") { 
                arrayPlantilla.push("⚠️ *Observaciónes* : "  +  '\n');
                arrayPlantilla.push('_'+txtObservacionesTecnico.value+'_'+ '\n');
                // alert(txtObservacionesTecnico.value);
                // arrayPlantilla.push(textoArrayFerreteria+  '\n');
            }

            




                //  arrayPlantilla.replaceAll(',','');
                //  arrayPlantilla.replaceAll(',','');
            var textoArrayPlantilla =arrayPlantilla.join('\n')
            console.log(arrayPlantilla)
            
                    try { 
                        
                        let  texto  = navigator.clipboard.writeText( 
                            textoArrayPlantilla
                                
                            )
                            mensajeExito("Plantilla en Portapapeles.");
                    } catch (error) {
                   mesajeToastError("Hubo un error intente Nuevamente. TryCatch");
                    alert_msg("Hubo un error intente Nuevamente. TryCatch")
                    } finally {
                    // Se ejecuta siempre
                    console.log("Proceso finalizado.");
                    }



           

    }else{
        mensajeToastError("Seleccione Servicio Realizado.");
         alert_msg("Seleccione Servicio Realizado.")
    }






 






})


function validacionActa(){
     if (sotActa.value.trim() == "") { 
           mensajeToastError("Digite el nº SOT ");
            alert_msg("Digite el nº SOT ")
            return false
        }

         if (txtCliente.value.trim() == "") { 
           mensajeToastError("Digite nombre del Cliente ");
           alert_msg("Digite nombre del Cliente ")
            return false
        }

         if (inputBox.value.trim() == "") { 
           mensajeToastError("Digite nombre del Tecnico ");
           alert_msg("Digite nombre del Tecnico ")
            return false
        }


                      let radioServicioRealizado  = '';
                        servicioRealizado.forEach(radio => {
                            if (radio.checked) {
                                radioServicioRealizado = radio.value;
                            }
                        });

                        if(radioServicioRealizado.trim()== ""){
                            mensajeToastError("Seleccione Servicio Realizado. ");
                            alert_msg("Seleccione Servicio Realizado.")
                            
                            return false
                        }
                        console.log(radioServicioRealizado)



                        // let arrayCodSol = [];
                        // if (radioServicioRealizado.trim() == "manto") {

                        //     if (txtCodSolucion1.value.trim() !== "" ||txtCodSolucion2.value.trim() !== "") { 
                              
                        //     }else{ 
                        //                mensajeToastError("Por lo menos digite 1 código de solución");
                        //                return false;
                        //     }
                        // }





}





 document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
  input.addEventListener('blur', function() {
    this.value = this.value.trim();
  });
});
 
// TODO: FIN BOTON COPIAR A PORTAPAPELES

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
  radio.dataset.wasChecked = radio.checked;
  
  radio.addEventListener('click', function() {
    if (this.dataset.wasChecked === 'true') {
      this.checked = false;
      this.dataset.wasChecked = 'false';
    } else {
      radios.forEach(r => r.dataset.wasChecked = 'false');
      this.checked = true;
      this.dataset.wasChecked = 'true';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[type='text'], input[type='search']");

  const inputsSinEspacio = document.querySelectorAll("input[type='text'], input[type='search'], input[type='textarea']");

  inputs.forEach(input => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.toUpperCase();
        

    });
  });

  inputsSinEspacio.forEach(input => {
    input.addEventListener("input", (e) => {
      e.value = e.value.trim();
    });
  });
});

const fecha = new Date();

$("#txtFecha").val(fecha.toLocaleDateString());

  $(".btnFotoActa").click(function(){



   




    console.log("Generar imagen del acta");
    let  sot = $("#sot").val();
    generar_actaImagen(sot);
    let  texto = $("#razon_social").val();
    navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  
   });


   function generar_actaImagen(sot){

 




resultado  =validacionActa();


          








    if(resultado ==false){
        return false;
    }

          $objetivo = document.querySelector("#acta");
          $contenedorCanvas = document.querySelector("#contenedor_img_acta"); // En dónde ponemos el elemento canvas
    
   document.getElementById("mitextHolder1").placeholder = "";
   document.getElementById("mitextHolder2").placeholder = "";
   document.getElementById("mitextHolder3").placeholder = "";

   txtCodigoAutorizacion1.placeholder = "";
   txtCodigoAutorizacion2.placeholder = "";
   txtCodigoAutorizacion3.placeholder = "";

  const textoComentTecnico = document.getElementById('coment_tec').value;
  document.getElementById('cont_impresion').textContent = textoComentTecnico;

  document.getElementById('coment_tec').style.display = 'none';
   document.getElementById('cont_impresion').style.display = 'block';


          html2canvas($objetivo,{
              dpi    : window.devicePixelRatio*1,
              scale  :1.5,
              width  :990,
              heigth :1800,
          }).then(canvas => {
                  // Cuando se resuelva la promesa traerá el canvas
                  $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
                  let enlace = document.createElement('a');
                  //  window.devicePixelRatio();
                  var aleatorio = Math.random()
                      // return false;
                  enlace.download = sot +"."+"png"
                  // Convertir la imagen a Base64
                  enlace.href = canvas.toDataURL();
                  // Hacer click en él
                  enlace.click();
            });


    document.getElementById('coment_tec').value = textoComentTecnico;
//   document.getElementById('cont_impresion').textContent = textoComentTecnico;

  document.getElementById('coment_tec').style.display = 'block';
   document.getElementById('cont_impresion').style.display = 'none';




    }


// TODO: Caja busqueda nombre y dni tecnico ::::::::::::::::::::::::

const tecnicos = [
    {
        nombre: "ANGEL EDINSON BENITO MORA 00000000",
        dni: "23569863" ,
    },{
        nombre: "APARICIO MENESES ANTHONY WALTER 00000000",
        dni: "" ,
    },{
        nombre: "ARAPA BERNEDO RAUL ROSSEL 00000000",
        dni: "23569863" ,
    },{
        nombre: "CASTILLO CHALLA JAIME JUNNIOR 00000000",    
        dni: "23569863" ,
    },{
        nombre: "FLORES FLORES JULIO ALBERTO 00000000",    
        dni: "23569863" ,
    },{
        nombre: "GARCIA SARCA CRISTIAN IVAN 00000000",    
        dni: "23569863" ,
    },{
        nombre: "ILLANES CHAMBI JHON RONALD 00000000",    
        dni: "23569863" ,
    },{
        nombre: "MAMANI LOPEZ JULIO ELIAS 00000000",    
        dni: "23569863" ,
    },{
        nombre: "OLLACHICA BAUTISTA ROSBERT ALCIDES 00000000",    
        dni: "23569863" ,
    },{
        nombre: "SALOMON VALDEZ PACOHUANACO 46835582",    
        dni: "46835582" ,
    },{
        nombre: "TENUCO CALDERON ROY DARIO 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TICONA AQUIMA JONATHAN DIEG 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TITO GUERRA VICTOR MANUEL 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TORRES HUAMANI YERON 00000000",    
        dni: "23569863" ,
    }
    ,{
        nombre: "VARGAYA QUISPE GENNODY YOEL 00000000",    
        dni: "23569863" ,
    },{
        nombre: "VICTOR JHONY SAIRE QUISPE 00000000",    
        dni: "23569863" ,
    },{
        nombre: "JHON MENDOZA LOA 74763435",    
        dni: "74763435" ,
    },{
        nombre: "EDELSON PAUCCAR AÑO 60651726",    
        dni: "60651726" ,
    }
];

const nombres = tecnicos.map(tecnico => tecnico.nombre);

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("txtNombreTecnico");
const inputBoxDNI = document.getElementById("txtDniTecnico");


inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = nombres.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML = "";
    }
} 


function display(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=selectedInputNombres(this)>" + list.trim() + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectedInputNombres(list){
    inputBox.value = list.innerHTML;
    nombresDni = inputBox.value;
    let dni = nombresDni.slice(nombresDni.length- 8, nombresDni.length);
    let nombresCompletos =  nombresDni.slice(0, nombresDni.length-8)


    // console.log(removeTags(''));;


    inputBox.value = nombresCompletos;
    inputBoxDNI.value = dni; 
    resultsBox.innerHTML = "";

}

// TODO: FILTRO codigo de solucuion:::::::::::::::::::::::::::::::::::::::::


const arrayCodigosSolucion = [
    "Control Remoto no funciona EQ01",
    "Cambio de EXTENSOR WIFI - MESH EQ02",
    "EMTA por Cambio de tecnología / Fidelización EQ04",
    "ONT/EMTA - Problemas con el equipo EQ05",
    "ONT/EMTA - Problemas con el equipo + Cambio de Acometida EQ06",
    "ONT/EMTA - Problemas con el equipo + cambio de Cable interno EQ07",
    "STB problema del equipo + Cambio de Acometida EQ08",
    "STB problema del equipo EQ09",
    "STB problema del equipo + cambio de Cable interno EQ10",
    "TELEFONO problema del equipo EQ11",
    "ONT/EMTA - Problemas con el equipo - NEGOCIO + IP FIJA EQ12",
    "EMTA Cambio por tecnología / Fidelización - NEGOCIO + IP FIJA EQ13",
    "Cambio de Equipo -Tormenta Eléctrica EQ14",
    "",
    "MANIPULACION CLIENTE - Televisor /Control Remoto/Android TV desprogramados  AB01",
    "MANIPULACION CLIENTE - Cliente desconfiguró equipo ONT/EMTA AB02",
    "MANIPULACION CLIENTE - Cliente modificó red interna AB03",
    "MANIPULACION CLIENTE - Comparte señal a otras personas/ varias PCs conectadas (Cabina) AB04",
    "MANIPULACION CLIENTE - Equipo telefónico desconfigurado o mal conectado AB05",
    "MANIPULACION CLIENTE - Equipos desconectados o problemas con las tomas eléctricas AB06",
    "PROB. CLIENTE - No cuenta con minutos para llamar AB07",
    "PROB. CLIENTE - Problemas con Equipos propiedad del cliente AB08",
    "PROB. CLIENTE - Reinstalacion por incendio, remodelacion o construccion AB09",
    "",
    "Configuracion Avanzada (3 a Más Equipos) FI02",
    "Configuración de Puertos EMTA/ ONT FI03",
    "Problema de cobertura WIFI FI06",
    "Pruebas de servicios integrales FI07",
    "Reinicio manual de ONT/EMTA FI08",
    "Instalación/Configuración - Extensor WIFI - MESH FI09",
    "Reactivacion de servicios Internet y/o telefonia FI10",
    "Envio de comandos/reactivacion de servicios-TV FI11",
    "Configuracion Wifi equipos Claro FI12",
    "Configuracion Wifi equipos cliente FI13",
    "",
    "CONMUTACION - Llamadas no se concretan a ciertos números determinados DE01",
    "CONMUTACION - Operadora indica que numero no existe (llamada entrante). DE02",
    "CONMUTACION - Problemas con SVA (Central Virtual, hunting, etc) DE03",
    "DERIVADO PEXT - Degradación del servicio DE04",
    "DERIVADO PEXT - Sin Servicio / Averia Masiva DE05",
    "DERIVADO PEXT - Niveles RF Altos / Bajos DE06",
    "DERIVADO PEXT - Intermitencia / Pérdida de paquetes DE07",
    "DERIVADO PEXT - Mala Señal DE08",
    "Derivado a segundo nivel DE09",
    "",
    "Conector mar preparado IN01",
    "INSPECCION TECNICA (Verificación de servicio contratado) IN02",
    "Mala distribucion de equipos y/o cables o reutilizacion de cableado existente IN03",
    "",
    "Cambio o reposición de cables Patch RCA/HDMI/UTP/JUMPER OPTICO PC01",
    "Cambio de acometida PC02",
    "Cambio de acometida + Cambio de cables internos PC03",
    "Cambio de cables internos (Coaxial, Telefónico, UTP) PC04",
    "Cambio de Fuente equipo terminal PC05",
    "Conector óptico sucio PC06",
    "Conectores flojos PC07",
    "Reacomodo de acometida PC08",
    "Roseta telefonica averiada PC09",
    "Roseta OPTICA averiada PC10",
    "Reacomodo Acometida - Autoinstalación PC12",
    "Conectores y/o divisores sulfatados PC13",
    "Cambio conector optico PC18",
    "Cambio de conector RJ45 PC20",
    "",
    "Cliente esta Ausente MO01",
    "Cliente dará de baja el servicio MO02",
    "Cliente informa Servicio conforme-visita técnica MO03",
    "No Hay facilidades tecnicas MO04",
    "",
    "Acometida desconectada  del TAP/FAT TE10",
    "Acometida cortada  TE11",
];


const listaCodSolucion = document.getElementById("lista_cod_solucion");
const codSolucion = document.getElementById("txtCodSolucion1");
const  descripcionCodSolucion = document.getElementById("txtDescripCodSolucion1");

codSolucion.onkeyup = function() {
    let result = [];
    let input = codSolucion.value;
    if(input.length) {
        result = arrayCodigosSolucion.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    mostrarResultado(result);
    if(!result.length) {
        listaCodSolucion.innerHTML = "";
    }
} 




function mostrarResultado(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=seleccionCodSolucion(this)>" + list.trim() + "</li>";
        });
        listaCodSolucion.innerHTML = "<ul>" + content.join('') + "</ul>";
}




function seleccionCodSolucion(list){
    codSolucion.value = list.innerHTML;
    cadenaCodSolucion = codSolucion.value;
    let codigo = cadenaCodSolucion.slice(cadenaCodSolucion.length- 4, cadenaCodSolucion.length);


    let descripcionCodigo =  cadenaCodSolucion.slice(0, cadenaCodSolucion.length-4)
    

    codSolucion.value = codigo;
    descripcionCodSolucion.value =descripcionCodigo; 
    listaCodSolucion.innerHTML = "";

}












// ----------------
const listaCodSolucion2 = document.getElementById("lista_cod_solucion2");
const codSolucion2 = document.getElementById("txtCodSolucion2");
const  descripcionCodSolucion2 = document.getElementById("txtDescripCodSolucion2");

codSolucion2.onkeyup = function() {
    let result2 = [];
    let input2 = codSolucion2.value;
    if(input2.length) {
        result2 = arrayCodigosSolucion.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input2.toLowerCase());
                        }
        );
        console.log(result2);
    }
    mostrarResultado2(result2);
    if(!result2.length) {
        listaCodSolucion2.innerHTML = "";
    }
} 


function mostrarResultado2(result2) {
     
        const content = result2.map((list)=>{
             
            return "<li onclick=seleccionCodSolucion2(this)>" + list.trim() + "</li>";
        });
        listaCodSolucion2.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function seleccionCodSolucion2(list){
    codSolucion2.value = list.innerHTML;
    cadenaCodSolucion2 = codSolucion2.value;
    let codigo = cadenaCodSolucion2.slice(cadenaCodSolucion2.length- 4, cadenaCodSolucion2.length);


    let descripcionCodigo2 =  cadenaCodSolucion2.slice(0, cadenaCodSolucion2.length-4)
    

    codSolucion2.value = codigo;
    descripcionCodSolucion2.value =descripcionCodigo2; 
    listaCodSolucion2.innerHTML = "";

}

// --------


function mensajeToastError(mensaje){
    // var mensaje = "hola";

const parrafo = document.getElementById("textoToast");
parrafo.textContent = mensaje;

        const elemento = document.getElementById('mensajeToast');
          // 1. Aparecer después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            elemento.style.display = 'flex'; // Lo metemos en el flujo de la página
            
            // Usamos un pequeño delay para que el navegador aplique el display antes de la transición
            setTimeout(() => {
                elemento.classList.add('visible');
            }, 50); 

        }, 0);

        // 2. Desaparecer después de 8 segundos en total (8000 milisegundos desde el inicio)
                // Esto significa que estará visible durante 5 segundos exactos
        setTimeout(() => {
            elemento.classList.remove('visible'); // Inicia efecto de desvanecido
            
            // Esperamos a que termine la animación CSS (0.5s) para quitarlo del display por completo
            setTimeout(() => {
                elemento.style.display = 'none';
            }, 500);

        }, 2000);



    return mensaje
}


function mensajeExito(mensaje){
        Swal.fire({
                position: "center",
                icon: "success",
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
        });
        return mensaje;
}





