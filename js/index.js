function abrir_ventana(vn, smsg) {
  var modal = document.getElementById("tvesModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];
  modal.style.display = "block";
  body.style.position = "static";
  body.style.height = "100%";
  body.style.overflow = "hidden";
  span.onclick = function() {
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  };
  if (vn == 1) {
    var smsg_1 = smsg.split("|");
    var sal_msg =
      "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
      "<tr>" +
      "<td colspan=3 width=100% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=30px align=center bgcolor=#f74b4b >" +
      "<font face=arial style='font-size:16px' color='white'>" +
      "Alertar actividad número:" +
      smsg_1[0] +
      "</font>" +
      "</td>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=40px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=40px align=center bgcolor=#ffe8e8 >" +
      "<font face=arial style='font-size:14px' color='black'>" +
      '"' +
      smsg_1[1] +
      '"' +
      "</font>" +
      "</td>" +
      "<td  width=5% height=40px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=20px align=center bgcolor=#ffe8e8 >" +
      "<font face=arial style='font-size:14px' color='red'>" +
      "Describa las razones de alertar (max. 200 caracteres)" +
      "</font>" +
      "</td>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=10px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=10px align=center bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "<td  width=5% height=10px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=70px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=70px align=center bgcolor=#ffffff >" +
      "<textarea id='inc_" +
      smsg_1[0] +
      "' maxlength='200' style='width:100%;height:70px;border: 0px solid #ffffff;resize: none;'></textarea>" +
      "</td>" +
      "<td  width=5% height=70px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=15px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=15px align=center bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "<td  width=5% height=15px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=20px align=center bgcolor=#ffe8e8 >" +
      '<button onclick="guardar_incidencia(' +
      "'" +
      smsg_1[0] +
      "'" +
      ')" style="height:25px;width:100px;background-color:#ffd029;color:black;font-family: arial;font-size:14px; outline: none;  border: 0" type="button">Aceptar</button>' +
      "</td>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td colspan=3 width=100% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</table>";
    document.getElementById("modal_contenido").innerHTML = sal_msg;
  }
  if (vn == 0) {
    var smsg_1 = smsg.split("|");
    var sal_msg =
      "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
      "<tr>" +
      "<td colspan=3 width=100% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=30px align=center bgcolor=#f74b4b >" +
      "<font face=arial style='font-size:16px' color='white'>" +
      smsg_1[0] +
      "</font>" +
      "</td>" +
      "<td  width=5% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td  width=5% height=40px align=left bgcolor=#ffe8e8>" +
      "&nbsp;" +
      "</td>" +
      "<td  width=90% height=40px align=center bgcolor=#ffe8e8 >" +
      "<font face=arial style='font-size:14px' color='black'>" +
      smsg_1[1] +
      "</font>" +
      "</td>" +
      "<td  width=5% height=40px align=left bgcolor=#ffe8e8 >" +
      "&nbsp;" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td colspan=3 width=100% height=20px align=left bgcolor=#ffe8e8 style='padding-left:20px'>" +
      "&nbsp;" +
      "</td>" +
      "</table>";
    document.getElementById("modal_contenido").innerHTML = sal_msg;
  }
}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
var cadena_checks = "";
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
function agrega_checks(valo) {
  var cadena_checks_1 = cadena_checks.split("|");
  var bnd_cadena_checks = 0;
  for (var i = 0; i < cadena_checks_1.length - 1; i++) {
    if (cadena_checks_1[i] == valo) {
      bnd_cadena_checks = 1;
    }
  }
  if (bnd_cadena_checks == 0) {
    cadena_checks = cadena_checks + valo + "|";
  }
  //document.getElementById("temcadena").innerHTML = "<font face=Arial style='font-size:12px'>"+cadena_checks+"</font>"
}

function resta_checks(valo) {
  var cadena_checks_1 = cadena_checks.split("|");
  var tmps_cadena_checks = "";
  for (var i = 0; i < cadena_checks_1.length - 1; i++) {
    if (cadena_checks_1[i] != valo) {
      tmps_cadena_checks = tmps_cadena_checks + cadena_checks_1[i] + "|";
    }
  }
  cadena_checks = tmps_cadena_checks;
  // document.getElementById("temcadena").innerHTML = "<font face=Arial style='font-size:12px'>"+cadena_checks+"</font>"
}
//----------------------------------------------------------------------------------------------------------------------------------------
function checkar(mycheck) {
  var x = document.getElementById(mycheck).checked;
  if (x == true) {
    agrega_checks(mycheck);
  } else {
    resta_checks(mycheck);
  }
}

function uncheckar(mycheck) {
  document.getElementById(mycheck).checked = false;
}
//----------------------------------------------------------------------------------------------------------------------------------------
function regresacheckeos(valorregresos) {
  var cadena_checks_1 = cadena_checks.split("|");
  var salidach = "";
  for (var i = 0; i < cadena_checks_1.length; i++) {
    if (cadena_checks_1[i] == valorregresos) {
      salidach = "checked";
    }
  }
  return salidach;
}
//----------------------------------------------------------------------------------------------------------------------------------------
var base_items = "";
var base_items_BA =
  "5888#TED#CENTRAL OPS#1|PERIODO 1&ACTIVIDADES DEL 09 AL 15 DE ENERO&1|PROTECCIÓN DE ACTIVOS!¡<font color=red><b>PA</b></font> - Módulo de Proteccion de activos, limpio y ordenado~ <font color=red><b>PA</b></font> - Revisión de funcionamiento correcto de detectores de humo~ <font color=red><b>PA</b></font> - Puertas de emergencia sin obstruir~ <font color=red><b>PA</b></font> - Lipieza de hidrantes y extintores, que cuenten con tarjeta de revisión mensual con vigencia correcta~ <font color=red><b>PA</b></font> - Revisar en todas las áreas no exista extensiones y/o multicontactos (apegarse a protocolo de seguridad contra incendios). Equipo de emergencia y contra incendio limpio, ordenado  y completo~ <font color=red><b>PA</b></font> - Pizarrón de emergencia actualizado~ <font color=red><b>PA</b></font> - Revisar botiquín, se encuentre completo y revisión de caducidades correctas en materiales de curación~ <font color=red><b>PA</b></font> - Bodega de alto valor ordenada y con bitacora actualizada &2|RECIBO!¡<font color=red>DISPONIBILIDAD</b></font> - Ubicar  un lugar seguro y fuera de riesgo contra incendio para almacenamiento de pacas de cartón y playo  con su señalización.  ~ <font color=red>DISPONIBILIDAD Y PA</b></font> - Limpieza profunda de anden y área de Recibo~ <font color=red>DISPONIBILIDAD Y PA</b></font> - Áreas de transito y rutas de evacuación libres de obstrucción (mercancía y equipo)~ <font color=red>MTTO Y PA</b></font> - Retocar cebreado de precaución  y pintura amarilla en rampas y andenes. (si cuentas con ella, de no ser así, sólo lavar a profundidad.)~ <font color=red>MTTO</b></font> - Revisa el correcto funcionamiento y limpieza a profundidad  debajo de las  rampas de descarga ~ <font color=red>MTTO</b></font> - Revisa correcto  funcionamiento de cortina y cadenas  que se encuentren engrasadas ~ <font color=red>MTTO</b></font> - Pintar señalizacion área de descarga  H  ~ <font color=red>MTTO</b></font> - Lámparas  de andenes  funcionando  de manera correcta~ <font color=red>DISPONIBILIDAD Y PA</b></font> - Mueble de merma limpio, con señalización de acuerdo a procedimiento  y contar con reporte diario de captura.~ <font color=red>DISPONIBILIDAD</b></font> - Mueble de recibo limpio y ordenado~ <font color=red>DISPONIBILIDAD</b></font> -  Cuarto de devoluciones y consumos: Limpio y ordenado ~ <font color=red>MTTO</b></font> -  Patines, escaleras y montacargas en buen estado (de no ser así levantar OT para su reparación)~ <font color=red>DISPONIBILIDAD Y GERENCIA</b></font> -  Verificar el vaciado de contenedores de temporada navideña~ <font color=red>PA</b></font> -  Unidad Satelital: ordenada, limpia y señalizada ~ <font color=red>PA</b></font> - Cuarto de basura&3|SISTEMAS!¡<font color=red>SISTEMAS</b></font> - Cuarto frío limpio y despejado (sin archivo muerto, consumos y/o utensilios de limpieza)~ <font color=red>SISTEMAS</b></font> - cuarto de Controladores limpio, ordenado y con temperatura correcta.~ <font color=red>SISTEMAS</b></font> - Temperatura correcta de cuarto frío y contar con bitácora de registro de temperaturas diaria.~ <font color=red>SISTEMAS</b></font> - Mobiliario en buenas condiciones (barras de trabajo, mueble porta TC70 y sillas)~ <font color=red>SISTEMAS</b></font> - Cuarto de consumos limpio y ordenado~ <font color=red>SISTEMAS</b></font> - Revisar excedentes de consumos para controlar compras~ <font color=red>SISTEMAS</b></font> - Revisa que esté aplicado el programa 5 S en el cuarto de consumos para mejor control&4|MANTENIMIENTO!¡<font color=red>MTTO</b></font> - Área de trabajo limpia y ordenada~ <font color=red>MTTO</b></font> - Cuarto de limpieza limpio, funcionando al 100 por ciento y con insumos completos ~ <font color=red>MTTO</b></font> - Eliminar equipos en desuso que se tengan en área de trabajo~ <font color=red>MTTO</b></font> - Acomodo correcto de  herramienta y equipo~ <font color=red>MTTO</b></font> - Revisar funcionamiento correcto de Sanitarios de clientes y asociados (WC, mingitorios lavamanos, secadores)~ <font color=red>MTTO</b></font> -  Asientos de WC y tapas al 100 por ciento~ <font color=red>MTTO</b></font> - Papeleras de higiénico completas~ <font color=red>MTTO</b></font> - Jaboneras de sanitarios completas y llenas~ <font color=red>MTTO</b></font> - Botes de basura completos y con tapa~ <font color=red>MTTO</b></font> - Cambiador de Bebé funcionando y limpio~ <font color=red>MTTO</b></font> - Secadores de manos funcionando~ <font color=red>MTTO</b></font> - Lavamanos funcionando con tapete antiderrapante bajo el secador de manos~ <font color=red>MTTO</b></font> - Iluminación en baños adecuada y extractores funcionando~ <font color=red>MTTO</b></font> - Rejillas de salida de aire en techo limpias y en buen estado~ <font color=red>MTTO</b></font> - Espejos limpios y en buen estado~ <font color=red>MTTO</b></font> - Revisar equipo en desuso que se tenga al exterior y realizar listado para su venta&5|RÓTULOS!¡<font color=red>CALIDAD</b></font> - Área de trabajo limpia y ordenada~<font color=red>CALIDAD</b></font> - Revisar que sólo se cuente con señalización de campañas vigentes~<font color=red>CALIDAD</b></font> - Acomodo correcto de señalización por tamaño y campañas.~<font color=red>CALIDAD Y GERENCIA</b></font> - Revisa que cuentes con el Kit completo para rotular y en buenas condiciones. (si no es así comenta a tu Gerencia para solicitar)&6|RH (Lockers, comedor y sala de juntas)!¡<font color=red>RH</b></font> - Área de lockers limpia y despejada~ <font color=red>RH Y PA</b></font> - Locker´s sin asignar debidamente cerrados y relacionados en R.H~ <font color=red>RH Y MTTO</b></font> - Mobiliario de comedor en buenas condiciones, limpios y con separadores completos.~ <font color=red>RH Y MTTO</b></font> - Iluminación en área de comedor correcta~ <font color=red>RH Y MTTO</b></font> - Horno Microondas y despachador de agua limpio y funcionando~ <font color=red>RH Y MTTO</b></font> - Pantalla de  TV con señal~ <font color=red>RH</b></font> - CBL/Recursos Humanos limpio y ordenado. Equipo funcionando al 100 por ciento~ <font color=red>RH Y ENCARGADA COMEDOR</b></font> - Equipo de cocina en buenas condiciones de limpieza y seguridad~ <font color=red>RH</b></font> - Revisar que se cuente con servicio de comedor para asociados.~ <font color=red>RH</b></font> - Revisar y actualizar pizarrones de información para asociados~ <font color=red>RH</b></font> - Sala de capacitación limpia y sin artículos ajenos (Art. Para la venta, insumos, etc.)~ <font color=red>RH Y MTTO</b></font> - Pantalla de sala de juntas funcionando y con señal Walmart TV.&7|PROGRAMA 5s:  Trastienda, Consumos Internos, Bodega Materia Prima Perecederos!¡<font color=red>GERENCIA Y PERECEDEROS</b></font> - Asociados conocen el significado del programa 5 S  (Separar, Situar, Sanitizar, Sistematizar y Seguir mejorando) Contar con Acta difusión de todos los involucrados~ <font color=red>SISTEMAS Y PERECEDEROS</b></font> - Se cuentan con los insumos correctos para implementación del Programa 5 S:  Etiquetas de Identificación, Identificador por color,  micas protectoras.~ <font color=red>PERECEDEROS</b></font> - Revisa que cuentes con las etiquetas de identificación requisitadas correctamente: Código de barras escaneable, máximos y mínimos señalizados, mica protectora con imán y  señalizada con colores.~ <font color=red>PERECEDEROS Y MTTO</b></font> - Muebles, escalera y carritos de Bodega perfectamente limpios y operando en condiciones seguras~ <font color=red>PERECEDEROS Y RH</b></font> - Posters impresos del programa 5 S y responsables del área. ~ <font color=red>PERECEDEROS Y GERENCIA</b></font> - Se cuenta con Bitácora de limpieza diaria firmada por encargados de área y subgerente de Perecederos~ <font color=red>PERECEDEROS Y GERENCIA</b></font> - Se tiene una constancia visual de que el programa tiene continuidad sobre su implementación diariamente~ <font color=red>PERECEDEROS Y GERENCIA</b></font> - En caso de contar con excedentes, Realizar acciones#2|PERIODO 2&ACTIVIDADES DEL 16 AL 22 DE ENERO&1|PANADERÍA!¡<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de limpieza en muebles y mesas de exhibición~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar calidad y caducidad de productos~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de precios, señalización y programas vigentes~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Vitrina de pasteles  de acuerdo  a COMAC actual~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Cabeceras vigentes~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar que asociados lleven acabo  las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&2|COCINA!¡<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de limpieza en el área (vitrina y área de producción)~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de caducidades en cámara~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de limpieza en cámara~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar PEPS~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Producción de tortillas lista para la venta~<font color=red><b>SUBGERENTE PERECEDEROS Y PA</b></font> - Sin mal olor y plagas~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Producción de rosticería suficiente~<font color=red><b>SUBGERENTE PERECEDEROS, PA Y RH</b></font> - Revisar que asociados lleven acabo las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&3|CARNES!¡<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de limpieza del área (vitrina baja y multideck)~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar listas de producción / programas mínimos y máximos (planta de carnes/inventario perpetuo correcto)~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Surtido y Acomodo de la mercancía~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Retirar de exhibición  productos con desjugue~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de precios, COMAC vigente y señalización~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión de cortes de acuerdo a ficha técnica~<font color=red><b>SUBGERENTE PERECEDEROS, PA Y RH</b></font> - Revisar que asociados lleven acabo las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.~<font color=red><b>SUBGERENTE PERECEDEROS Y PA</b></font> - Sin mal olor y plagas&4|FRUTAS Y VERDURAS!¡<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisa frescura de la fruta y verdura (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar que los porta rollo cuenten con suficiente bolsa para mejor atención al cliente.~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Surtido suficiente para la venta del día~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar RPC´s limpios y sanitizadas~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar la limpieza de muebles (panteras), piso mopeado y trapeado~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisar apuestas comerciales y precios vigentes~<font color=red><b>SUBGERENTE PERECEDEROS Y PA</b></font> - Sin mal olor y plagas&5|SALCHICHONERÍA Y LÁCTEOS!¡<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisa frescura y calidad de producto (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisa el abasto de la mercancía~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisión del COMAC y caducidades~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Revisa precios, señalización de programas vigentes~<font color=red><b>SUBGERENTE PERECEDEROS Y PA</b></font> - Sin mal olor y plagas~<font color=red><b>SUBGERENTE PERECEDEROS</b></font> - Promotoría cumpla con uniforme, gafete, medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&6|REVISIÓN CÁMARAS Y ÁREAS DE PRODUCCIÓN!¡<font color=red><b>PERECEDEROS Y MTTO</b></font> - Limpieza profunda en cámaras de perecederos (Paredes, piso, Techo, puertas, picaportes y marcos)~<font color=red><b>PERECEDEROS, PA Y RH</b></font> - Asociados uniformados y cumpliendo con las medidas de seguridad e higiene correspondientes.~<font color=red><b>PERECEDEROS</b></font> - Revisión y señalización de PEPS~<font color=red><b>PERECEDEROS Y MTTO</b></font> - Revisión de equipo (si se encuentra alguna falla inmovilizar y leventar OT inmediatamente)~<font color=red><b>GERENCIA</b></font> - Revisa que las áreas de proceso cumplan con las normas de seguridad alimentaria~<font color=red><b>SUBGERENTE DE PERECEDEROS</b></font> - Asegurar un espacio mínimo de 15 cm entre la pared y el producto, así como 20 cm de separación de mercancía contra piso para poder realizar limpieza y evitar concentración de plagas~<font color=red><b>SUBGERENTE DE PERECEDEROS</b></font> - Identificar mercancía no apta para exhibición y venta. (En caso de encontrar oportunidad llevar acabo proceso captura de merma)#3|PERIODO 3&ACTIVIDADES DEL 23 AL 29 DE ENERO&1|FRENTE DE TIENDA!¡<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Área de servicio al cliente limpia y ordenada, revisa que cuentes sólo con señalización autorizada (Consulta La Forma Correcta, en Comunica)~<font color=red><b>ATENCIÓN AL CLIENTE, MTTO Y PA</b></font> - Carritos, Canastillas y portabebes limpios, alineados, portabebes con cinturón completo~<font color=red><b>PA</b></font> - Sillas de ruedas en buen estado y limpios~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Lockers limpios y funcionando de manera correcta.~<font color=red><b>ATENCIÓN AL CLIENTE Y RH</b></font> - Entrada de clientes limpia y ordenada con señalización autorizada~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Buzón de Sugerencias limpio, con cuadernillo y pluma ~<font color=red><b>TODA LA TIENDA</b></font> - Los asociados saludan a los clientes? (Aplicar Regla de los 3 metros).~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Módulo de facturación limpio y ordenado, con señalización vigente autorizada.~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Protocolo de Servicio y Seguridad (Voceo constante de nuestros protocolos de seguridad y Servicio).~<font color=red><b>CALIDAD</b></font> - Pizarrón promocional limpio y ordenado con señalización autorizada, vigente.~<font color=red><b>SUBGERENTE DE ATENCIÓN A CLIENTES Y PA</b></font> - Licencias y permisos completos, exhibidos a la vista~<font color=red><b>SUBGERENTE DE ATENCIÓN A CLIENTES</b></font> - Locales comerciales y módulos limpios, con orden y con señalización en buen estado.~<font color=red><b>SUBGERENTE DE ATENCIÓN AL CLIENTE Y MTTO</b></font> - Estacionamiento limpio, eliminar grasa de autos y gravilla suelta&2|OFICINA ADMINISTRATIVA!¡<font color=red><b>SUBGERENTE DE ATENCIÓN AL CLIENTE</b></font> - Oficina Limpia y ordenada con señalización autorizada y contar con bitacora de acceso con registro diario.~<font color=red><b>SUBGERENTE DE ATENCIÓN AL CLIENTE</b></font> - Cuarto de valores limpio y ordenado&3|OMNICANAL!¡<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Kiosko limpio y ordenado, eliminar equipo innecesario.~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Eliminar papelería y archivo muerto, contar con lo necesario para la operación~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Área de Despensa a tu casa, limpia y ordenada, libre de equipo ajeno al módulo~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Eliminar señalización vencida en el interior de la tienda, kiosko y módulo.~<font color=red><b>SUBGERENTE ATENCIÓN AL CLIENTE</b></font> - Revisar PC´s, Tabletas y TPV´s que estén en buen estado&4|CAJAS!¡<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Cajas y basculas limpias y funcionando correctamente~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Check Out con funcionamiento correcto, ejecución de planogramas vigentes.~<font color=red><b>ATENCIÓN AL CLIENTE Y DISPONIBILIDAD</b></font> - Bodega sección 82 Ordenada, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Pizarrón indicadores desempeño de cajas, actualizado y con el cajero del mes.~<font color=red><b>ATENCIÓN AL CLIENTE</b></font> - Protocolo de Servicio: Los asociados saludan a los clientes y Aplican Regla de 3 Metros? Funciona Tablet IEC? (Indice de Experiencia de la Clienta)&5|PISO DE VENTAS MG Y PRICHOS!¡<font color=red><b>DISPONIBILIDAD</b></font> - Pasillos despejados, libre de basura y cajas (revisar debajo de los muebles y detrás de cabeceras y refigeradores)~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Muebles Limpios, cambio de etiquetas maltratadas (no mayor a 1 mes), Libre de residuos de etiquetas, banderas actualizadas y ejecución del planograma vigente.~<font color=red><b>DISPONIBILIDAD</b></font> - Islas de pasillo entrada, salida y área flex con tarimas limpias alineadas de acuerdo a centro de excelencia.~<font color=red><b>CALIDAD</b></font> - Señalización aérea, Campañas vigentes, sembrado de MSI, limpios, alineados y con letra legible~<font color=red><b>DISPONIBILIDAD Y PA</b></font> - Piso de ventas libre de derrames, sin basura debajo de muebles, Islas y cabeceras, Con estaciones de limpieza completas y abastecidas, Cierra pasillos en buenas condiciones~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Bodegas ordenadas, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.~<font color=red><b>DISPONIBILIDAD</b></font> - Limpieza debajo de tarimas de islas y cabeceras~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Montaje de planogramas (Revisar programa)&6|ELECTRÓNICA, LINEA BLANCA Y TELEFONÍA!¡<font color=red><b>DISPONIBILIDAD</b></font> - Cabeceras con mercadeo correcto y Exhibición de Pantallas encendidas(Tv Wall), proyectando promociones vigentes.~<font color=red><b>DISPONIBILIDAD</b></font> - Montaje de mesa de Tabletas y computo, vitrina de telefonía de acuerdo a carta de Instrucción vigente. Ejecucion de planograma de accesorios usb, cámaras y pilas.~<font color=red><b>DISPONIBILIDAD</b></font> - Se cuenta con Promotoria presente en isla de telefonía?~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Montaje de planogramas (Revisar programa)&7|ABARROTES Y CONSUMIBLES!¡<font color=red><b>DISPONIBILIDAD</b></font> - Pasillos despejados, libre de mercancía, escaleras, sin basura debajo de muebles y cabeceras . ~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Muebles limpios, cambio de etiquetas maltratadas (no mayor a 1 mes), libre de residuos de etiquetas, banderas actualizadas y ejecución del planograma vigente.~<font color=red><b>DISPONIBILIDAD</b></font> - Islas de pasillo entrada, salida y área flex con tarimas limpias alineadas de acuerdo a centro de excelencia.~<font color=red><b>CALIDAD</b></font> - Señalización aérea, Campañas vigentes, sembrado de MSI, limpios, alineados y con letra legible~<font color=red><b>DISPONIBILIDAD</b></font> - Piso de ventas libre de derrames, sin basura debajo de mueble, Islas y cabeceras~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Bodegas ordenadas, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Reimprimir etiquetas blancas de BIN LOCATOR y etiquetas amarillas de AISLE LOCATION que se encuentren dañadas o despintadas.(Incluye MG)~<font color=red><b>DISPONIBILIDAD</b></font> - Limpieza debajo de tarimas de islas y cabeceras~<font color=red><b>DISPONIBILIDAD Y CALIDAD</b></font> - Montaje de planogramas (Revisar programa)&8|CERTIFICACIÓN!¡Realizar presentación con fotografias del antes y despues~Añadir presentación al directorio <font color=blue><p onclick=" +
  '"' +
  "enlace(1)" +
  '"' +
  "><u>Enlace</u></p></font>";
var base_items_BAE =
  "5888#TED#CENTRAL OPS#1|PERIODO 1&ACTIVIDADES DEL 02 AL 08 DE ENERO&1|PROTECCIÓN DE ACTIVOS!¡Revisión de funcionamiento correcto de detectores de humo~Limpieza de hidrantes (en caso de aplicar) y extintores, que cuenten con tarjeta de revisión mensual con vigencia correcta~Revisar en todas las áreas no exista extensiones y/o multicontactos (apegarse a protocolo de seguridad contra incendios). Equipo de emergencia y contra incendio limpio, ordenado y completo~Pizarrón de emergencia actualizado~Revisar botiquín, se encuentre completo y revisión de caducidades correctas en materiales de curación& 2|RECIBO!¡Ubicar un lugar seguro y fuera de riesgo contra incendio el almacenamiento de cartón y playo.~ Limpieza profunda en cortina y zona de descarga y recibo de mercancia de proveedores o centro de distribución.~ Áreas de transito y rutas de evacuación libres de obstrucción (mercancía y equipo)~ Revisa correcto funcionamiento de cortina y cadenas, que se encuentren engrasadas~ Patines y escaleras en buen estado (de no ser así levantar OT para su reparación)~ Limpieza, pintura y mantenimiento en Cuarto de basura (generar OT en caso que se requiera)& 3|SISTEMAS/OFICINA!¡Mobiliario en buenas condiciones (barras de trabajo, mueble porta TC70 y sillas)~Revisar excedentes de consumos para controlar compras (Validar manual de CE apartado 5s)& 4|MANTENIMIENTO!¡Revisar funcionamiento correcto de Sanitarios de asociados. (WC, mingitorios lavamanos, secadores)~ Asientos de WC y tapas al 100 por ciento~ Despachadores de papel higiénico completas y funcionando~ Jaboneras de sanitarios completas y llenas~ Botes de basura completos, con tapa y rotulados~ Iluminación en baños adecuada y extractores funcionando~ Rejillas de ventilación de salida de aire en techo limpias y en buen estado~ Espejos limpios y en buen estado (en caso de que aplique)~ Revisar equipo en desuso que se tenga al exterior y realizar listado para su venta~ Revision de goteras en techumbre (generar OT en caso de requerirse)& 5|R.H. (Lockers y comedor)!¡Horno Microondas y despachador de agua limpio y funcionando~ Oficina limpia y ordenada. Equipo funcionando al 100%~ Revisar y actualizar pizarrones de información para asociados~ Pantalla de comedor y con señal Walmart TV.& 6|PROGRAMA 5s Trastienda!¡Asociados conocen el significado del programa 5 s (Separar, Situar, Sanitizar, Sistematizar y Seguir mejorando) Contar con Acta difusión de todos los involucrados (Revisar Manual CE)~ Se cuentan con los insumos correctos para su implementación del Programa 5 S:  Etiquetas de Identificación, Identificador por color,  micas protectoras.(Revisar Manual CE)~ Muebles, escalera y carritos de Bodega perfectamente limpios y operando en condiciones seguras~ Se tiene una constancia visual de que el programa tiene continuidad sobre su implementación diariamente~ En caso de contar con excedentes, que acciones se estan realizando?#2|PERIODO 2&ACTIVIDADES DEL 09 AL 15 DE ENERO&1|PANADERÍA!¡Revisión de limpieza en muebles y mesas de exhibición~Revisar calidad y caducidad de productos~Revisión de precios, señalización con campañas vigentes~Programas comerciales vigentes~ Revisar que asociados lleven acabo las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&2|CARNES!¡Revisión de limpieza del área (vitrina baja y multideck) Solo en caso de que aplique~ Revisar Lay Out y frecuencia de entregas de tienda madre. Programas maximos y minimos (planta de carnes/inventario perpetuo correcto) ~ Surtido y Acomodo de la mercancía~ Retirar de exhibición productos con desjugue~ Revisión de precios, señalización y campañas vigentes~ Revisar que asociados lleven acabo las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.~ Sin mal olor y plagas& 3|FRUTAS Y VERDURAS!¡Revisa frescura de la fruta y verdura (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~ Revisar que los porta rollo cuenten con suficiente bolsa para mejor atención al cliente.~ Surtido suficiente para la venta del día~ Revisar RPC´s limpios y sanitizadas~ Revisar la limpieza de muebles (panteras), piso mopeado y trapeado~ Revisar apuestas comerciales y precios vigentes~ Sin mal olor y plagas& 4|SALCHICHONERÍA Y LÁCTEOS!¡Revisa frescura y calidad de producto (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~ Revisa el abasto de la mercancía~ Revisión del COMAC (o planograma ) y caducidades~ Revisa precios, señalización de programas vigentes~ Sin mal olor y plagas& 5|REVISIÓN CÁMARAS Y ÁREAS DE PRODUCCIÓN!¡ Limpieza profunda en cámaras de perecederos (Paredes, piso, Techo, puertas, picaportes y marcos)~ Asociados uniformados y cumpliendo con las medidas de seguridad e higiene correspondientes.~ Revisión y señalización de PEPS~ Revisión de equipo (si se encuentra alguna falla inmovilizar y leventar OT inmediatamente)~ Revisa que las áreas de proceso cumplan con las normas de seguridad alimentaria~ Asegurar un espacio mínimo de 15 cm entre la pared y el producto, así como 20 cm de separación de mercancía contra piso para poder realizar limpieza y evitar concentración de plagas~ Identificar mercancía no apta para exhibición y venta. (En caso de encontrar oportunidad llevar acabo proceso captura de merma)#3|PERIODO 3&ACTIVIDADES DEL 16 AL 22 DE ENERO&1|ESTACIONAMIENTO Y FRENTE DE TIENDA!¡Carritos y Canastillas alineados, portabebes con cinturón completo (en caso de que aplique)~ Entrada de clientes limpia y ordenada con señalización autorizada~ Los asociados saludan a los clientes? (Aplicar Regla de los 3 metros).~ Protocolo de Servicio y Seguridad (Voceo constante de nuestros protocolos de seguridad y Servicio).~ Pizarrón promocional  limpio y ordenado con señalización autorizada, vigente.~ Licencias y permisos completos, exhibidos a la vista~ Estacionamiento limpio, eliminar grasa de autos y gravilla suelta&2|CAJAS!¡Cajas  y basculas limpias y funcionando correctamente~ Check Out con funcionamiento correcto, ejecución de planogramas vigentes.~ Señalizacion en linea de cajas (ecosistemas)&3|PISO DE VENTAS!¡Revision y ejecucion del Manual Centros de Excelencia vigente~ Limpieza debajo de tarimas de islas y cabeceras~ Pasillos  despejados, libre de mercancía, escaleras, sin  basura debajo de muebles y cabeceras . ~ Muebles limpios, cambio de etiquetas maltratadas (no mayor a 1 mes), libre de residuos de etiquetas, banderas actualizadas y ejecución del planograma vigente.~ Islas de pasillo entrada, salida y área flex  con tarimas tarimas  limpias alineadas de acuerdo a centro de excelencia.~ Señalización aérea, Campañas vigentes y porta precios limpios, alineados y con letra legible~ Piso de ventas libre de  derrames, sin  basura debajo de mueble, Islas y cabeceras~ Limpieza debajo de tarimas de islas y cabeceras~ Montaje de planogramas (Revisar programa)~ Zonificacion de Aisle Location (Herramienta Modflex) ( tiendas que apliquen) (Consultar manual en La Forma Correcta)~ Montaje de cabeceras 2 articulos de acuerdo a la GDM~ Desayunos lado A~ Desayunos lado B~ Comidas lado A~ Comidas lado B~ Salud y Belleza lado A~ Salud y Belleza lado B~ Quimico lado A~ Quimicos lado B~ Area flex ~ Conveniencia lado B&4|CERTIFICACIÓN!¡Realizar presentación con fotografias del antes y despues~Añadir presentacíón al directorio <font color=blue><p onclick=" +
  '"' +
  "enlace(1)" +
  '"' +
  "><u>Enlace</u></p></font>";
var base_items_MB =
  "5888#TED#CENTRAL OPS#1|PERIODO 1&ACTIVIDADES DEL 09 AL 15 DE ENERO&1|PROTECCIÓN DE ACTIVOS!¡Módulo de Proteccion de activos, limpio y ordenado~Revisión de funcionamiento correcto de detectores de humo~Puertas de emergencia sin obstruir~Lipieza de hidrantes y extintores, que cuenten con tarjeta de revisión mensual con vigencia correcta~Revisar en todas las áreas no exista extensiones y/o multicontactos (apegarse a protocolo de seguridad contra incendios). Equipo de emergencia y contra incendio limpio, ordenado  y completo~Pizarrón de emergencia actualizado~Revisar botiquín, se encuentre completo y revisión de caducidades correctas en materiales de curación~Bodega de alto valor ordenada y con bitacora actualizada&2|RECIBO!¡Ubicar  un lugar seguro y fuera de riesgo contra incendio para almacenamiento de pacas de cartón y playo  con su señalización.~Limpieza profunda de anden y área de Recibo~Áreas de transito y rutas de evacuación libres de obstrucción (mercancía y equipo)~Retocar cebreado de precaución  y pintura amarilla en rampas y andenes. (si cuentas con ella, de no ser así, sólo lavar a profundidad.)~Revisa el correcto funcionamiento y limpieza a profundidad  debajo de las  rampas de descarga~Revisa correcto  funcionamiento de cortina y cadenas que se encuentren engrasadas~Pintar señalizacion área de descargaH~Lámparas  de andenes  funcionando  de manera correcta~Mueble de merma limpio, con señalización de acuerdo a procedimiento y contar con reporte diario de captura.~Mueble de recibo limpio y ordenado~Cuarto de devoluciones y consumos: Limpio y ordenado ~Patines, escaleras y montacargas en buen estado (de no ser así levantar OT para su reparación)~Verificar el vaciado de contenedores de temporada navideña~Unidad Satelital: ordenada, limpia y señalizada~Cuarto de basura&3|SISTEMAS!¡Cuarto frío limpio y despejado (sin archivo muerto, consumos y/o utensilios de limpieza)~ cuarto de Controladores limpio, ordenado y con temperatura correcta.~ Temperatura correcta de cuarto frío y contar con bitácora de registro de temperaturas diaria.~ Mobiliario en buenas condiciones (barras de trabajo, mueble porta TC70 y sillas)~ Cuarto de consumos limpio y ordenado~ Revisar excedentes de consumos para controlar compras~ Revisa que esté aplicado el programa 5S en el cuarto de consumos para mejor control&4|MANTENIMIENTO!¡Limpiar y ordenar espacio de trabajo.~ Cuarto de limpieza limpio, funcionando al 100 por ciento y con insumos completos ~ Eliminar equipos en desuso que se tengan en área de trabajo~ Acomodo correcto de  herramienta y equipo~Revisar funcionamiento correcto de Sanitarios de clientes y asociados (WC, mingitorios lavamanos, secadores)~  Asientos de WC y tapas al 100 por ciento~ Papeleras de higiénico completas~ Jaboneras de sanitarios completas y llenas~ Botes de basura completos y con tapa~ Cambiador de Bebé funcionando y limpio~ Secadores de manos funcionando~ Lavamanos funcionando con tapete antiderrapante bajo el secador de manos~ Iluminación en baños adecuada y extractores funcionando~ Rejillas de salida de aire en techo limpias y en buen estado~ Espejos limpios y en buen estado~Revisar equipo en desuso que se tenga al exterior y realizar listado para su venta&5|RH (Lockers, comedor y sala de juntas)!¡Área de lockers limpia y despejada~Locker´s sin asignar debidamente cerrados y relacionados en R.H~Mobiliario de comedor en buenas condiciones, limpios y con separadores completos.~Iluminación en área de comedor correcta~Horno Microondas y despachador de agua limpio y funcionando~Pantalla de  TV con señal~CBL/Recursos Humanos limpio y ordenado. Equipo funcionando al 100 por ciento~Revisar y actualizar pizarrones de información para asociados~Sala de capacitación limpia y sin artículos ajenos (Art. Para la venta, insumos, etc.)~ Pantalla de sala de juntas funcionando y con señal Walmart TV.&6|PROGRAMA 5s: Trastienda, Consumos Internos, Bodega Materia Prima Perecederos!¡Asociados conocen el significado del programa 5 S  (Separar, Situar, Sanitizar, Sistematizar y Seguir mejorando) Contar con Acta difusión de todos los involucrados~Se cuentan con los insumos correctos para implementación del Programa 5 S:  Etiquetas de Identificación, Identificador por color,  micas protectoras.~Revisa que cuentes con las etiquetas de identificación requisitadas correctamente: Código de barras escaneable, máximos y mínimos señalizados, mica protectora con imán y  señalizada con colores.~Muebles, escalera y carritos de Bodega perfectamente limpios y operando en condiciones seguras~Posters impresos del programa 5 S y responsables del área.~Se cuenta con Bitácora de limpieza diaria firmada por encargados de área y subgerente de Perecederos~Se tiene una constancia visual de que el programa tiene continuidad sobre su implementación diariamente~En caso de contar con excedentes, Realizar acciones#2|PERIODO 2&ACTIVIDADES DEL 16 AL 22 DE ENERO&1|PANADERÍA!¡Revisión de limpieza en muebles y mesas de exhibición~Revisar calidad y caducidad de productos~Revisión de precios, señalización y programas vigentes~Vitrina de pasteles  de acuerdo a COMAC actual~Cabeceras vigentes~Revisar que asociados lleven acabo  las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&2|CARNES!¡Revisión de limpieza del área (vitrina baja y multideck)~Revisar listas de producción / programas mínimos y máximos (planta de carnes/inventario perpetuo correcto)~Surtido y Acomodo de la mercancía~Retirar de exhibición productos con desjugue~Revisión de precios, COMAC vigente y señalización~Revisión de cortes de acuerdo a ficha técnica~Revisar que asociados lleven acabo las medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.~Sin mal olor y plagas&3|FRUTAS Y VERDURAS!¡Revisa frescura de la fruta y verdura (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~Revisar que los porta rollo cuenten con suficiente bolsa para mejor atención al cliente.~Surtido suficiente para la venta del día~Revisar RPC´s limpios y sanitizadas~Revisar la limpieza de muebles (panteras), piso mopeado y trapeado~Revisar apuestas comerciales y precios vigentes~Sin mal olor y plagas&4|SALCHICHONERÍA Y LÁCTEOS!¡Revisa frescura y calidad de producto (retira de exhibición y corrige inmediatamente en caso de encontrar oportunidad.)~Revisa el abasto de la mercancía~Revisión del COMAC y caducidades~Revisa precios, señalización de programas vigentes~Sin mal olor y plagas~Promotoría cumpla con uniforme, gafete, medidas de seguridad e higiene (uso de cofia y cubre bocas), atendiendo amablemente a los clientes.&5|REVISIÓN CÁMARAS Y ÁREAS DE PRODUCCIÓN!¡Limpieza profunda en cámaras de perecederos (Paredes, piso, Techo, puertas, picaportes y marcos)~Asociados uniformados y cumpliendo con las medidas de seguridad e higiene correspondientes.~Revisión y señalización de PEPS~Revisión de equipo (si se encuentra alguna falla inmovilizar y leventar OT inmediatamente)~Revisa que las áreas de proceso cumplan con las normas de seguridad alimentaria~Asegurar un espacio mínimo de 15 cm entre la pared y el producto, así como 20 cm de separación de mercancía contra piso para poder realizar limpieza y evitar concentración de plagas~Identificar mercancía no apta para exhibición y venta. (En caso de encontrar oportunidad llevar acabo proceso captura de merma)#3|PERIODO 3&ACTIVIDADES DEL 23 AL 29 DE ENERO&1|FRENTE DE TIENDA!¡Área de servicio al cliente limpia y ordenada, revisa que cuentes sólo con señalización autorizada (Consulta La Forma Correcta, en Comunica)~Carritos, Canastillas y portabebes limpios, alineados, portabebes con cinturón completo~Sillas de ruedas en buen estado y limpios~Lockers limpios y funcionando de manera correcta.~Entrada de clientes limpia y ordenada con señalización autorizada~Buzón de Sugerencias limpio, con cuadernillo y pluma ~Los asociados saludan a los clientes? (Aplicar Regla de los 3 metros).~Módulo de facturación limpio y ordenado, con señalización vigente autorizada.~Protocolo de Servicio y Seguridad (Voceo constante de nuestros protocolos de seguridad y Servicio).~Pizarrón promocional limpio y ordenado con señalización autorizada, vigente.~Licencias y permisos completos, exhibidos a la vista~Locales comerciales y módulos limpios, con orden y con señalización en buen estado.~Estacionamiento limpio, eliminar grasa de autos y gravilla suelta&2|OFICINA ADMINISTRATIVA!¡Oficina Limpia y ordenada con señalización autorizada y contar con bitacora de acceso con registro diario.~Cuarto de valores limpio y ordenado&3|OMNICANAL!¡Kiosko limpio y ordenado, eliminar equipo innecesario.~Eliminar papelería y archivo muerto, contar con lo necesario para la operación~Área de Despensa a tu casa, limpia y ordenada, libre de equipo ajeno al módulo~Eliminar señalización vencida en el interior de la tienda, kiosko y módulo.~Revisar PC´s, Tabletas y TPV´s que estén en buen estado&4|CAJAS!¡Cajas y basculas limpias y funcionando correctamente~Check Out con funcionamiento correcto, ejecución de planogramas vigentes.~Bodega sección 82 Ordenada, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.~Pizarrón indicadores desempeño de cajas, actualizado y con el cajero del mes.~Protocolo de Servicio: Los asociados saludan a los clientes y Aplican Regla de 3 Metros? Funciona Tablet IEC? (Indice de Experiencia de la Clienta)&5|PISO DE VENTAS MG Y PRICHOS!¡Pasillos despejados, libre de basura y cajas (revisar debajo de los muebles y detrás de cabeceras y refigeradores)~Muebles Limpios, cambio de etiquetas maltratadas (no mayor a 1 mes), Libre de residuos de etiquetas, banderas actualizadas y ejecución del planograma vigente.~Islas de pasillo entrada, salida y área flex con tarimas limpias alineadas de acuerdo a centro de excelencia.~Señalización aérea, Campañas vigentes, sembrado de MSI, limpios, alineados y con letra legible~Piso de ventas libre de derrames, sin basura debajo de muebles, Islas y cabeceras, Con estaciones de limpieza completas y abastecidas, Cierra pasillos en buenas condiciones~Bodegas ordenadas, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.~Limpieza debajo de tarimas de islas y cabeceras~Auditar montaje de planogramas&6|ELECTRÓNICA, LINEA BLANCA Y TELEFONÍA!¡Cabeceras con mercadeo correcto y Exhibición de Pantallas encendidas(Tv Wall), proyectando promociones vigentes.~Montaje de mesa de Tabletas y computo, vitrina de telefonía de acuerdo a carta de Instrucción vigente. Ejecucion de planograma de accesorios usb, cámaras y pilas.~Se cuenta con Promotoria presente en isla de telefonía?~Auditar montaje de planogramas&7|ABARROTES Y CONSUMIBLES!¡Pasillos despejados, libre de mercancía, escaleras, sin basura debajo de muebles y cabeceras.~Muebles limpios, cambio de etiquetas maltratadas (no mayor a 1 mes), libre de residuos de etiquetas, banderas actualizadas y ejecución del planograma vigente.~Islas de pasillo entrada, salida y área flex con tarimas limpias alineadas de acuerdo a centro de excelencia.~eñalización aérea, Campañas vigentes, sembrado de MSI, limpios, alineados y con letra legible~Piso de ventas libre de derrames, sin basura debajo de mueble, Islas y cabeceras~Bodegas ordenadas, programa Ninja ejecutado, estibas seguras con una altura de 1.20m máximo.Reimprimir etiquetas blancas de BIN LOCATOR y etiquetas amarillas de AISLE LOCATION que se encuentren dañadas o despintadas.(Incluye MG)~Limpieza debajo de tarimas de islas y cabeceras~Auditar montaje de planogramas&8|CERTIFICACIÓN!¡Realizar presentación con fotografias del antes y despues~Añadir presentación al directorio <font color=blue><p onclick=" +
  '"' +
  "enlace(1)" +
  '"' +
  "><u>Enlace</u></p></font>";
var id_semana = "";
var id_subtema = "";

function inicio(vf, vp, vk) {
  if (vf == 1) {
    var salida =
      "<font face=arial style='font-size:20px;color:white'>¡Aún no has cargado un checklist!</font>" +
      "<br><br>" +
      "<font face=arial style='font-size:16px;color:white'>Selecciona el icono rojo del menú y carga una checklist según la determinante deseada</font>";
    document.getElementById("contenido").innerHTML = salida;
  }
  //-------------------------------------------------------------------------------------------------------------------
  if (vf == 2) {
    var base_items_1 = base_items.split("#");
    var salida_semanas = "";
    for (var i = 0; i < base_items_1.length; i++) {
      //alert(base_items_1[i])
      var det_salida = base_items_1[0];
      var nom_det_salida = base_items_1[1];
      var nom_formato_salida = base_items_1[2];
      if (i > 2) {
        var semanas = base_items_1[i].split("&");
        var id_semana_1 = semanas[0].split("|");
        id_semana = id_semana_1[0];
        salida_semanas =
          salida_semanas +
          "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=25x align=center bgcolor=#f67c00>" +
          "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=30x align=center>" +
          "<a href='#' onclick='inicio(3," +
          id_semana +
          ");' style='text-decoration:none' ><font face=arial style='font-size:12px' color='black'>" +
          id_semana_1[1] +
          "&nbsp;( " +
          semanas[1] +
          " ) " +
          "</font></a>" +
          "</td>" +
          "<td width=20% height=25x align=center>" +
          "<div id='monitor_semana_" +
          id_semana +
          "'>" +
          regreso_semana_dat_monitor(id_semana, "s", "r") +
          "</div>" +
          "</td>" +
          "</tr>" +
          "</table>" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td width=80% height=20px align=center>nbsp;</td></tr>" +
          "</table>";
      }
      var salida =
        "<table cellpadding=0 cellspacing=0  width=90%  border=0 style='font-size: 1px;' >" +
        "<tr>" +
        "<td width=90% colspan=2 height=20px align=center>" +
        "&nbsp;" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td width=86% height=40px align=center>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_determinante_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_formato_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_tienda_tpps +
        "&nbsp;" +
        "</font>" +
        "<br>" +
        "<div id='monitor_a'></div>" +
        "</td>" +
        "<td width=14% height=40px align=center>" +
        "<!--<img src='images/ico_impresora.png'>-->" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td width=90% colspan=2 height=20px align=center>" +
        "&nbsp;" +
        "</td>" +
        "</tr>" +
        "</table>" +
        salida_semanas;
    }
    document.getElementById("contenido").innerHTML = salida;
  }
  //-------------------------------------------------------------------------------------------------------------------
  if (vf == 3) {
    //alert(vp)
    var base_items_1 = base_items.split("#");
    var salida_semanas = "";
    for (var i = 0; i < base_items_1.length; i++) {
      //alert(base_items_1[i])
      var det_salida = base_items_1[0];
      var nom_det_salida = base_items_1[1];
      var nom_formato_salida = base_items_1[2];
      if (i > 2) {
        var semanas = base_items_1[i].split("&");
        var salida_subtemas = "";
        var id_semana_1 = semanas[0].split("|");
        id_semana = id_semana_1[0];
        for (var j = 0; j < semanas.length; j++) {
          if (j > 1) {
            var subaspectos = semanas[j].split("!¡");
            var id_subaspectos_1 = subaspectos[0].split("|");
            id_subtema = id_subaspectos_1[0];
            if (vp == id_semana) {
              salida_subtemas =
                salida_subtemas +
                "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
                "<tr>" +
                "<td width=80% height=10px align=center bgcolor=#f8e0c7>" +
                "&nbsp;" +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td width=80% height=10px align=center bgcolor=#fab877>" +
                "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
                "<tr>" +
                "<td width=80% height=25px align=center >" +
                "<a href='#' onclick='inicio(4," +
                id_semana +
                "," +
                id_subtema +
                ");' style='text-decoration:none' >" +
                "<font face=arial style='font-size:12px' color='black'>" +
                id_subaspectos_1[1] +
                "</font>" +
                "</a>" +
                "</td>" +
                "<td width=20% height=25x align=center>" +
                "<div id='monitor_semana_" +
                id_semana +
                "_" +
                id_subtema +
                "'>" +
                regreso_semana_dat_monitor(id_semana, id_subtema, "r") +
                "</div>" +
                "</td>" +
                "</tr>" +
                "</table>" +
                "</td>" +
                "</tr>";
              if (j == semanas.length - 1) {
                salida_subtemas =
                  salida_subtemas +
                  "<tr>" +
                  "<td width=80% height=10px align=center bgcolor=#f8e0c7>" +
                  "&nbsp;" +
                  "</td>" +
                  "</tr>";
              }
              salida_subtemas = salida_subtemas + "</table>";
            }
          }
        }
        salida_semanas =
          salida_semanas +
          "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=20px align=center bgcolor=#0cb12b>" +
          "&nbsp;" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td width=80% height=25px align=center bgcolor=#f67c00>" +
          "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=30x align=center>" +
          "<a href='#' onclick='inicio(3," +
          id_semana +
          ");' style='text-decoration:none' ><font face=arial style='font-size:12px' color='black'>" +
          id_semana_1[1] +
          "&nbsp;( " +
          semanas[1] +
          " ) " +
          "</font></a>" +
          "</td>" +
          "<td width=20% height=25x align=center>" +
          "<div id='monitor_semana_" +
          id_semana +
          "'>" +
          regreso_semana_dat_monitor(id_semana, "s", "r") +
          "</div>" +
          "</td>" +
          "</tr>" +
          "</table>" +
          "</td>" +
          "</tr>" +
          "</table>" +
          salida_subtemas;
      }
      var salida =
        "<table cellpadding=0 cellspacing=0  width=90%  border=0 style='font-size: 1px;' >" +
        "<tr>" +
        "<td width=90% colspan=2 height=20px align=center>" +
        "&nbsp;" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td width=86% height=40px align=center>" +
        "<a href='#' onclick='inicio(2,0);' style='text-decoration:none' ><font face=arial style='font-size:16px' color='white'>" +
        carga_determinante_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_formato_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_tienda_tpps +
        "&nbsp;" +
        "</font></a>" +
        "<br>" +
        "<div id='monitor_a'></div>" +
        "</td>" +
        "<td width=14% height=40px align=center>" +
        "<!--<img src='images/ico_impresora.png'>-->" +
        "</td>" +
        "</tr>" +
        "</table>" +
        salida_semanas;
      if (i == base_items_1.length - 1) {
        salida =
          salida +
          "<table cellpadding=0 cellspacing=0  width=90%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=90% colspan=2 height=20px align=center>" +
          "&nbsp;" +
          "</td>" +
          "</tr>" +
          "</table>";
      }
    }
    document.getElementById("contenido").innerHTML = salida;
  }
  //-----------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------
  if (vf == 4) {
    //alert(vp+"|"+vk)
    var base_items_1 = base_items.split("#");
    var salida_semanas = "";
    var contador_items = 0;
    for (var i = 0; i < base_items_1.length; i++) {
      //alert(base_items_1[i])
      var det_salida = base_items_1[0];
      var nom_det_salida = base_items_1[1];
      var nom_formato_salida = base_items_1[2];
      if (i > 2) {
        var semanas = base_items_1[i].split("&");
        var salida_subtemas = "";
        var id_semana_1 = semanas[0].split("|");
        id_semana = id_semana_1[0];
        for (var j = 0; j < semanas.length; j++) {
          if (j > 1) {
            var subaspectos = semanas[j].split("!¡");
            var id_subaspectos_1 = subaspectos[0].split("|");
            id_subtema = id_subaspectos_1[0];
            var itemcs_a = subaspectos[1].split("~");
            var salida_items = "";
            for (var h = 0; h < itemcs_a.length; h++) {
              contador_items = contador_items + 1;
              if (vk == id_subtema) {
                var pongocheckeos = regresacheckeos(
                  id_semana + "." + id_subtema + "checv" + contador_items
                );
                salida_items =
                  salida_items +
                  "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
                  "<tr>" +
                  "<td colspan=8 width=80% height=10px align=center bgcolor=#f8e0c7>" +
                  "&nbsp;" +
                  "</td>" +
                  "</tr>" +
                  '<tr style="cursor: pointer;background-color:#f8e0c7" onmouseover="this.style.backgroundColor=' +
                  "'#fab877'" +
                  ';"  onmouseout="this.style.backgroundColor=' +
                  "'#f8e0c7'" +
                  ';" >' +
                  "<td width=3% height=20px align=center  >" +
                  "<font face=arial style='font-size:11px' color='black'>" +
                  contador_items +
                  "</font>" +
                  "</td>" +
                  "<td width=2% height=20px align=center >" +
                  "&nbsp;" +
                  "</td>" +
                  "<td width=68% height=20px align=left >" +
                  "<font face=arial style='font-size:11px' color='black'>" +
                  itemcs_a[h] +
                  "</font>" +
                  "</td>" +
                  "<td width=3% height=20px align=center >" +
                  "&nbsp;" +
                  "</td>" +
                  "<td width=10% height=20px align=center >" +
                  "<div style='width:20px;height:20px;background-color:#68d91b'>" +
                  "<input type='checkbox' onclick='uncheckar(" +
                  '"' +
                  id_semana +
                  "." +
                  id_subtema +
                  "checr" +
                  contador_items +
                  '"' +
                  "); checkar(" +
                  '"' +
                  id_semana +
                  "." +
                  id_subtema +
                  "checv" +
                  contador_items +
                  '"' +
                  "); envia_datos_monitor_a(); regreso_semana_dat_monitor(" +
                  id_semana +
                  ',"s","m"' +
                  "); regreso_semana_dat_monitor(" +
                  id_semana +
                  "," +
                  id_subtema +
                  ',"m"' +
                  ");'  id='" +
                  id_semana +
                  "." +
                  id_subtema +
                  "checv" +
                  contador_items +
                  "' name='" +
                  id_semana +
                  "." +
                  id_subtema +
                  "checv" +
                  contador_items +
                  "' " +
                  pongocheckeos +
                  " />" +
                  "</div>" +
                  "</td>" +
                  "<td width=2% height=20px align=center >" +
                  "&nbsp;" +
                  "</td>" +
                  "<td width=10% height=20px align=center >" +
                  "<div style='width:20px;height:20px;background-color:#f97f7f'>" +
                  "<input type='checkbox' onclick='abrir_ventana(1," +
                  '"' +
                  contador_items +
                  "|" +
                  itemcs_a[h] +
                  '"' +
                  ");uncheckar(" +
                  '"' +
                  id_semana +
                  "." +
                  id_subtema +
                  "checv" +
                  contador_items +
                  '"' +
                  ");resta_checks(" +
                  '"' +
                  id_semana +
                  "." +
                  id_subtema +
                  "checv" +
                  contador_items +
                  '"' +
                  ");envia_datos_monitor_a();regreso_semana_dat_monitor(" +
                  id_semana +
                  ',"s","m"' +
                  "); '  id='" +
                  id_semana +
                  "." +
                  id_subtema +
                  "checr" +
                  contador_items +
                  "' name='" +
                  id_semana +
                  "." +
                  id_subtema +
                  "checr" +
                  contador_items +
                  "' />" +
                  "</div>" +
                  "</td>" +
                  "<td width=2% height=20px align=center >" +
                  "&nbsp;" +
                  "</td>" +
                  "</tr>";
                if (h == itemcs_a.length - 1) {
                  salida_items =
                    salida_items +
                    "<tr>" +
                    "<td colspan=8 width=80% height=10px align=center bgcolor=#f8e0c7>" +
                    "&nbsp;" +
                    "</td>" +
                    "</tr>";
                }
                salida_items = salida_items + "</table>";
              }
            }
            if (vp == id_semana) {
              salida_subtemas =
                salida_subtemas +
                "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
                "<tr>" +
                "<td width=80% height=10px align=center bgcolor=#f8e0c7>" +
                "&nbsp;" +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td width=80% height=10px align=center bgcolor=#fab877>" +
                "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
                "<tr>" +
                "<td width=80% height=25px align=center >" +
                "<a href='#' onclick='inicio(4," +
                id_semana +
                "," +
                id_subtema +
                ");' style='text-decoration:none' >" +
                "<font face=arial style='font-size:12px' color='black'>" +
                id_subaspectos_1[1] +
                "</font>" +
                "</a>" +
                "</td>" +
                "<td width=20% height=25x align=center>" +
                "<div id='monitor_semana_" +
                id_semana +
                "_" +
                id_subtema +
                "'>" +
                regreso_semana_dat_monitor(id_semana, id_subtema, "r") +
                "</div>" +
                "</td>" +
                "</tr>" +
                "</table>" +
                "</td>" +
                "</tr>";
              /*if (j==semanas.length-1)
                                                  {
                                                      salida_subtemas = salida_subtemas +"<tr>" +
                                                          "<td width=80% height=10px align=center bgcolor=#f8e0c7>"+
                                                              "&nbsp;"+
                                                          "</td>"+
                                                      "</tr>"
               
                                                  }*/
              salida_subtemas = salida_subtemas + "</table>";
              var boton_guardar = "";
              if (vk == id_subtema) {
                boton_guardar =
                  "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
                  "<tr>" +
                  "<td  width=80% height=20px align=left bgcolor=#fab877 style='padding-left:20px'>" +
                  "<table cellpadding=0 cellspacing=0 border=0 style='font-size: 1px;' >" +
                  "<tr>" +
                  "<td>" +
                  "<a href='#' onclick='pres_actualizar_cadena_checks(" +
                  '"' +
                  carga_id_registro_ttps +
                  '"' +
                  ")'>" +
                  "<img src='images/ico_guardar.png'>" +
                  "</a>" +
                  "</td>" +
                  "<td width=5px>" +
                  "&nbsp;" +
                  "</td>" +
                  "<td valign=top>" +
                  "<a href='#' onclick='pres_actualizar_cadena_checks(" +
                  '"' +
                  carga_id_registro_ttps +
                  '"' +
                  ")'>" +
                  "<font face=arial style='font-size:11px' color='black'>" +
                  "Guardar" +
                  "</font>" +
                  "</a>" +
                  "</td>" +
                  "</tr>" +
                  "</table>" +
                  "</td>" +
                  "<tr>" +
                  "</table>";
              }
              salida_subtemas = salida_subtemas + boton_guardar + salida_items;
            }
          }
        }
        salida_semanas =
          salida_semanas +
          "<table cellpadding=0 cellspacing=0  width=80%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=20px align=center bgcolor=#0cb12b>" +
          "&nbsp;" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td width=80% height=25x align=center bgcolor=#f67c00>" +
          "<table cellpadding=0 cellspacing=0  width=100%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=80% height=30x align=center>" +
          "<a href='#' onclick='inicio(3," +
          id_semana +
          ");' style='text-decoration:none' ><font face=arial style='font-size:12px' color='black'>" +
          id_semana_1[1] +
          "&nbsp;( " +
          semanas[1] +
          " ) " +
          "</font></a>" +
          "</td>" +
          "<td width=20% height=25x align=center>" +
          "<div id='monitor_semana_" +
          id_semana +
          "'>" +
          regreso_semana_dat_monitor(id_semana, "s", "r") +
          "</div>" +
          "</td>" +
          "</tr>" +
          "</table>" +
          "</td>" +
          "</tr>" +
          "</table>" +
          salida_subtemas;
      }
      var salida =
        "<table cellpadding=0 cellspacing=0  width=90%  border=0 style='font-size: 1px;' >" +
        "<tr>" +
        "<td width=90% colspan=2 height=20px align=center>" +
        "&nbsp;" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td width=86% height=40px align=center>" +
        "<a href='#' onclick='inicio(2,0);' style='text-decoration:none' ><font face=arial style='font-size:16px' color='white'>" +
        carga_determinante_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_formato_tpps +
        "&nbsp;" +
        "</font>" +
        "<font face=arial style='font-size:16px' color='white'>" +
        carga_tienda_tpps +
        "&nbsp;" +
        "</font></a>" +
        "<br>" +
        "<div id='monitor_a'></div>" +
        "</td>" +
        "<td width=14% height=40px align=center>" +
        "<!--<<img src='images/ico_impresora.png'>-->" +
        "</td>" +
        "</tr>" +
        "</table>" +
        salida_semanas;
      if (i == base_items_1.length - 1) {
        salida =
          salida +
          "<table cellpadding=0 cellspacing=0  width=90%  border=0 style='font-size: 1px;' >" +
          "<tr>" +
          "<td width=90% colspan=2 height=20px align=center>" +
          "&nbsp;" +
          "</td>" +
          "</tr>" +
          "</table>";
      }
    }
    document.getElementById("contenido").innerHTML = salida;
  }
  //-----------------------------------------------------------------------------------------------------
  if (vf != 1) {
    envia_datos_monitor_a();
  }
}
//-----------------------------------------------------------------------------------------------------
function envia_datos_monitor_a() {
  var conteos_items_s = 0;
  var conteos_marcados_s = 0;
  var base_items_a1 = base_items.split("#");
  for (var h = 0; h < base_items_a1.length; h++) {
    if (h > 2) {
      var base_items_a2 = base_items_a1[h].split("&");
      for (var j = 0; j < base_items_a2.length; j++) {
        if (j > 1) {
          var base_items_a3 = base_items_a2[j].split("¡!");
          for (var z = 0; z < base_items_a3.length; z++) {
            var base_items_a4 = base_items_a3[z].split("~");
            for (var i = 0; i < base_items_a4.length; i++) {
              conteos_items_s = conteos_items_s + 1;
            }
          }
        }
      }
    }
  }
  //----------------------------------------------------------------------
  if (cadena_checks != "") {
    var cadena_checks_1 = cadena_checks.split("|");
    for (var i = 0; i < cadena_checks_1.length - 1; i++) {
      conteos_marcados_s = conteos_marcados_s + 1;
    }
  }
  var salida_porcentaje = conteos_marcados_s / conteos_items_s * 100;
  var salida_datos_monitor =
    "<font face=arial style='font-size:16px' color='white'>" +
    redondear(salida_porcentaje, 0) +
    "% ( " +
    conteos_marcados_s +
    "/" +
    conteos_items_s +
    " )" +
    "</font>";
  document.getElementById("monitor_a").innerHTML = salida_datos_monitor;
}
//----------------------------------------------------------------------
function redondear(numero, digitos) {
  let base = Math.pow(10, digitos);
  let entero = Math.round(numero * base);
  return entero / base;
}
//----------------------------------------------------------------------
function regreso_semana_dat_monitor(ta, tb, tc) {
  //alert(ta+"|"+tb+"|"+tc)
  var conteos_totales_semanas = 0;
  var conteos_checks_semanas = 0;
  var conteos_totales_subtemas = 0;
  var conteos_checks_subtemas = 0;
  var base_items_a1 = base_items.split("#");
  for (var h = 0; h < base_items_a1.length; h++) {
    if (h > 2) {
      var base_items_a2 = base_items_a1[h].split("&");
      var tipo_semana = base_items_a2[0].split("|");
      var tipo_semana_final = tipo_semana[0];
      for (var j = 0; j < base_items_a2.length; j++) {
        if (j > 1) {
          var base_items_a3 = base_items_a2[j].split("¡!");
          var tipo_subtema = base_items_a3[0].split("|");
          var tipo_subtema_final = tipo_subtema[0];
          for (var z = 0; z < base_items_a3.length; z++) {
            var base_items_a4 = base_items_a3[z].split("~");
            for (var i = 0; i < base_items_a4.length; i++) {
              if (tipo_semana_final == ta) {
                conteos_totales_semanas = conteos_totales_semanas + 1;
              }
              if (tipo_subtema_final == tb && tipo_semana_final == ta) {
                conteos_totales_subtemas = conteos_totales_subtemas + 1;
              }
            }
          }
        }
      }
    }
  }
  //----------------------------------------------------------------------
  if (cadena_checks != "") {
    var cadena_checks_1 = cadena_checks.split("|");
    for (var i = 0; i < cadena_checks_1.length - 1; i++) {
      var cadena_checks_2 = cadena_checks_1[i].split(".");
      var cadena_checks_3 = cadena_checks_2[1].split("checv");
      if (cadena_checks_2[0] == ta) {
        conteos_checks_semanas = conteos_checks_semanas + 1;
      }
      if (cadena_checks_3[0] == tb && cadena_checks_2[0] == ta) {
        conteos_checks_subtemas = conteos_checks_subtemas + 1;
      }
    }
  }
  //-----------------------------------------------------------------------------------
  if (tb == "s") {
    var salida_porcentaje_semanas =
      conteos_checks_semanas / conteos_totales_semanas * 100;
    var salida_datos_monitor_semanas =
      "<font face=arial style='font-size:12px' color='black'>" +
      redondear(salida_porcentaje_semanas, 0) +
      "% ( " +
      conteos_checks_semanas +
      "/" +
      conteos_totales_semanas +
      " )" +
      "</font>";
  } else {
    var salida_porcentaje_semanas =
      conteos_checks_subtemas / conteos_totales_subtemas * 100;
    var salida_datos_monitor_semanas =
      "<font face=arial style='font-size:12px' color='black'>" +
      redondear(salida_porcentaje_semanas, 0) +
      "% ( " +
      conteos_checks_subtemas +
      "/" +
      conteos_totales_subtemas +
      " )" +
      "</font>";
  }
  if (tc == "r") {
    return salida_datos_monitor_semanas;
  }
  if (tc == "m") {
    if (tb != "s") {
      var id = "monitor_semana_" + ta + "_" + tb;
    } else {
      var id = "monitor_semana_" + ta;
    }
    document.getElementById(id).innerHTML = salida_datos_monitor_semanas;
  }
  //alert(conteos_checks_semanas+"/"+conteos_totales_semanas)
}
//--------------------------------------------------------------------------------------------------
function menu_mostrar(vc) {
  if (vc == 1) {
    document.getElementById("submenu").style.display = "block";
  }
  if (vc == 0) {
    document.getElementById("submenu").style.display = "none";
  }
}

function valida_det() {
  var id_asociado = document.getElementById("ID_ASOCIADO").value;
  if (id_asociado == "") {
    document.getElementById("ID_ASOCIADO").focus();
    abrir_ventana(0, "AVISO|El campo del número de asociado esta vacío");
    return;
  }
  if (isNaN(id_asociado)) {
    document.getElementById("ID_ASOCIADO").focus();
    abrir_ventana(0, "AVISO|El número de asociado es inválido");
    return;
  }
  var tam_n_id_asociado = id_asociado.length;
  if (tam_n_id_asociado <= 4) {
    document.getElementById("ID_ASOCIADO").focus();
    abrir_ventana(0, "AVISO|El número de asociado es incorrecto");
    return;
  }
  ID_ASOCIADO_IMP = id_asociado;
  buscar_id_asociado(id_asociado);
}
//-------------------------------------------------------------------------------------------
function getListItemsTodos2010(webUrl, listName, success, failure) {
  var url = webUrl + "/_vti_bin/listdata.svc/" + listName;
  $.ajax({
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json; odata=verbose"
    },
    dataType: "json",
    success: function(data) {
      success(data.d);
    },
    error: function(data) {
      failure(data.responseJSON.error);
    }
  });
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
var cadena_larga_datos = "";

function buscar_id_asociado(datfiltro) {
  txt_filtro = "?$filter=ID_ASOCIADO%20eq%20%27" + datfiltro + "%27";
  //alert(txt_filtro)
  getListItemsTodos2010(
    "https://teams.wal-mart.com/sites/TrainTheTrainners",
    "CHECKER_B3" + txt_filtro,
    function(data) {
      var items = data.results;
      // Add all the new items
      for (var i = 0; i < items.length; i++) {
        cadena_larga_datos = cadena_larga_datos + items[i].ID_ASOCIADO + "#|#";
        cadena_larga_datos = cadena_larga_datos + items[i].DATA_NOMBRE + "#|#";
        cadena_larga_datos =
          cadena_larga_datos + items[i].DATA_APELLIDO + "#|#";
        cadena_larga_datos =
          cadena_larga_datos + items[i].DATA_DETERMINANTE + "#|#";
        cadena_larga_datos = cadena_larga_datos + items[i].DATA_TIENDA + "#|#";
        cadena_larga_datos = cadena_larga_datos + items[i].ID_FORMATO + "#|#";
        cadena_larga_datos = cadena_larga_datos + items[i].DATA_FORMATO + "#|#";
        cadena_larga_datos =
          cadena_larga_datos + items[i].CADENA_CHECKER_TPP + "#|#";
        cadena_larga_datos = cadena_larga_datos + items[i].FECHA_ULTIMA + "#|#";
        cadena_larga_datos =
          cadena_larga_datos + items[i].INCIDENTES_CHECKER + "#|#";
        cadena_larga_datos =
          cadena_larga_datos + items[i].Identificador + "-|-";
        NOMBRE_MOSTRAR = items[i].DATA_NOMBRE + " " + items[i].DATA_APELLIDO;
        ID_ASOCIADO_IMP = items[i].ID_ASOCIADO;
      }
      //alert(cadena_larga_datos)
      if (cadena_larga_datos == "") {
        document.getElementById("pantalla_uno").style.display = "none";
        document.getElementById("pantalla_dos").style.display = "block";
      } else {
        cargar_pantalla_cuatro();
      }
      cadena_larga_datos = "";
      txt_filtro = "";
      console.log(data.results);
    },
    function(error) {
      console.log(JSON.stringify(error));
    }
  );
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cancelar_id_asociado() {
  document.getElementById("pantalla_uno").style.display = "block";
  document.getElementById("pantalla_dos").style.display = "none";
  document.getElementById("ID_ASOCIADO").value = "";
  document.getElementById("ID_ASOCIADO").focus();
}

function mostrar_registro() {
  document.getElementById("pantalla_dos").style.display = "none";
  document.getElementById("pantalla_tres").style.display = "block";
}
var base_tiendas_tpp =
  "1|BA|2225|TIJUANA SUR#1|BA|2665|SANTA FE#1|BA|2919|EL ÁGUILA#1|BA|2948|JIBARITO#1|BA|3100|QUINTAS DEL REFUGIO#1|BA|3144|DEL PRADO II#1|BA|3231|VILLA DEL CAMPO#1|BA|3400|DELICIAS#1|BA|3485|OTAY#1|BA|5661|LOMAS DE LA PRESA#1|BA|1417|MEXICALI SUR#1|BA|1419|NUEVO MEXICALI#1|BA|1421|MEXICALI SURESTE#1|BA|3226|ENSENADA#1|BA|3233|MEXICALI VILLAS#1|BA|3406|PUERTO PEÑASCO#1|BA|3526|AEROPUERTO RIO COLORADO#1|BA|4199|SAN LUIS RIO COLORADO#1|BA|4785|LOS PORTALES#1|BA|1034|HERMOSILLO NORTE#1|BA|1667|CABORCA#1|BA|2073|NOGALES#1|BA|3514|SAHUARO#1|BA|4068|AGUA PRIETA#1|BA|4646|PUEBLITOS#1|BA|4726|BOULEVARD LIBERTAD#1|BA|4815|CAMINO A CANANEA#1|BA|5119|CABORCA NORTE#1|BA|5163|NOGALES SUR#1|BA|1028|BOURLOUG#1|BA|1103|PERIFÉRICO SUR#1|BA|1341|ESPERANZA#1|BA|2243|NAVOJOA#1|BA|2371|GUAYMAS PONIENTE#1|BA|2586|RODOLFO ELÍAS CALLES#1|BA|2899|HERMOSILLO ORIENTE#1|BA|3613|EL SERI#1|BA|4158|OBREGÓN PONIENTE#1|BA|4669|MÚSARO#1|BA|4778|400 CAJEME#1|BA|1006|HOSPITAL GENERAL#1|BA|1049|ESTADIO#1|BA|1471|NAVOLATO#1|BA|1660|GUAMÚCHIL#1|BA|1824|LOS CABOS#1|BA|2106|LAS PALMAS#1|BA|2352|MOCHICAHUI#1|BA|3401|CENTRAL DE ABASTOS#1|BA|4126|BLVD. ZACATECAS#1|BA|4703|CABO MIRAMAR#1|BA|5465|AV. DE LAS TORRES CULIACÁN#1|BA|1467|INDEPENDENCIA SUR#1|BA|1590|NVO. CASAS GRANDES#1|BA|1690|AEROPUERTO#1|BA|1763|TORRES DEL REY#1|BA|1767|PUERTO DE PALOS#1|BA|2224|JILOTEPEC#1|BA|2740|TALAMAS CAMANDARI#1|BA|2787|INDUSTRIAS NORTE#1|BA|3146|CHAVENAS#1|BA|3196|MELCHOR GUASPE#1|BA|3560|PANAMERICANA#1|BA|2996|SALIDA A SANALONA#1|BA|4066|BARRANCOS#1|BA|4076|AEROPUERTO ZAPATA#1|BA|1051|LAS BRISAS#1|BA|2111|AGUAMILPA#1|BA|2112|AV. MÉXICO II#1|BA|4143|INSURGENTES TEPIC#1|BA|1931|LERDO#1|BA|2544|PRIMO DE VERDAD#1|BA|2661|DURANGO NORTE#1|BA|3019|RINCÓN SAN ANTONIO#1|BA|3072|CENTRAL GÓMEZ PALACIOS#1|BA|3561|DURANGO#1|BA|5134|MILENIO ORIENTE#1|BA|1517|STA. ROSALÍA DE CAMARGO#1|BA|1560|JOSE MARIANO JIMENEZ#1|BA|2138|DELICIAS SUR#1|BA|2000|MAZATLÁN#1|BA|3102|CD. CONSTITUCIÓN#1|BA|3119|CAMINO REAL#1|BA|3734|EL CONCHI#1|BA|4639|MIRAMAR#1|BA|5658|MONUMENTO A COLOSIO#1|BA|1234|APODACA SUR#1|BA|1900|DOS RÍOS#1|BA|2097|PUEBLO NUEVO#1|BA|1582|MONTEMORELOS#1|BA|3537|LINARES#1|BA|194|LOS PUERTOS#1|BA|1033|CADEREYTA#1|BA|1105|VILLA JUAREZ#1|BA|1235|LOMAS DE SANTA MÓNICA#1|BA|3932|CARRETERA REYNOSA#1|BA|3713|RUIZ CORTINES#1|BA|5624|VALLE SOLEADO#1|BA|1561|VALLE HERMOSO#1|BA|1611|REYNOSA CENTRO#1|BA|1867|FÉLIX GALVÁN#1|BA|2223|REYNOSA#1|BA|2810|LAS FUENTES#1|BA|3103|LAURO VILLAR#1|BA|1823|JARDINES DE LA PRIMAVERA#1|BA|2869|ZUAZUA#1|BA|4028|SANTA ROSA N.L#1|BA|4902|SAN JUAN ZUAZUA #1|BA|3623|LOS FRESNOS#1|BA|3625|DIAZ BERLANGA#1|BA|3801|SANTO DOMINGO#1|BA|5081|CALZADA DEL SOL #1|BA|1927|PUERTA DEL SOL#1|BA|2505|ANILLO PERIFÉRICO#1|BA|2738|MITRAS#1|BA|3362|TOPOCHICO#1|BA|3443|CLOUTHIER#1|BA|3298|ESCOBEDO#1|BA|3692|VALLE DE LINCOLN#1|BA|4067|VILLA GARCIA#1|BA|1498|PLAN DE GUADALUPE#1|BA|5712|SOLIDARIDAD#1|BA|5087|REAL DE LINCOLN#1|BA|4568|RIO RAMOS ARIZPE#1|BA|1557|CD. ACUNA#1|BA|1576|HAROLD PAPE MONCLOVA#1|BA|3083|SAN ANDRES#1|BA|3189|VILLARREAL#1|BA|3807|SALTILLO#1|BA|4045|LOMAS DEL BOSQUE#1|BA|4136|FRONTERA#1|BA|4196|SABINAS#1|BA|5659|LA LADRILLERA#1|BA|5731|PIEDRAS NEGRAS#1|BA|5792|LOURDES#1|BA|2027|ZACATECAS#1|BA|3285|ENRIQUE ESTRADA#1|BA|3626|FRESNILLO#1|BA|2077|REFORMA SAN LUIS POTOSÍ#1|BA|2098|EL SAUCITO#1|BA|2355|RIO MEZQUITE#1|BA|3066|ANTONIO ROCHA#1|BA|3691|RIO ESPAÑITA#1|BA|3887|RIO VERDE#1|BA|3919|NICOLÁS ZAPATA#1|BA|5181|SOLEDAD DE GRACIANO SUR#1|BA|5657|SOLEDAD DE GRACIANO#1|BA|5851|CONSTITUCIÓN#1|BA|1046|CD. VALLES#1|BA|1753|PERIFÉRICO ORIENTE#1|BA|2009|ACCESO NORTE#1|BA|2078|MATEHUALA#1|BA|2509|RICARDO B. ANAYA#1|BA|3068|CIUDAD RIO VERDE#1|BA|3444|VENCEDOR#1|BA|3432|HACIENDA LA HUASTECA#1|BA|1553|HUINALA#1|BA|3628|SAN MIGUEL#1|BA|1470|SAN PEDRO#1|BA|2529|MIELERAS#1|BA|2741|OTILIO GONZALEZ#1|BA|2920|SALTILLO SUR#1|BA|3018|LIBRAMIENTO#1|BA|3228|MANTO DE LA VIRGEN#1|BA|3683|ESTADIO ANTIGUO#1|BA|3729|FUNDADORES#1|BA|4044|SATÉLITE SALTILLO#1|BA|2457|ALTAMIRA SUR#1|BA|2591|TAMPICO#1|BA|3038|LUIS ECHEVERRÍA#1|BA|3073|MULTIPLAZA REAL#1|BA|5464|ALTAMIRA CENTRO#1|BA|2548|AVENIDA UNIVERSIDAD#1|BA|2956|SALIDA A SAUCEDA DE LA BORDA#1|BA|4042|GARCIA SALINAS#1|BA|4716|BD BLVD VILLA DE GUADALUPE#1|BA|1494|ACÁMBARO#1|BA|1661|PÉNJAMO#1|BA|2099|CORTÁZAR#1|BA|2358|EMILIO CARRANZA#1|BA|2459|SOLIDARIDAD IRAPUATO#1|BA|2543|EJE NORPONIENTE#1|BA|3291|SALAMANCA SUR#1|BA|3867|IRAPUATO#1|BA|3913|PROF. FRANCISCO JUAREZ#1|BA|3914|CONSTITUYENTES#1|BA|3918|SALAMANCA#1|BA|4881|HACIENDAS NOROESTE #1|BA|5463|CELAYA ORIENTE#1|BA|5734|MOROLEÓN#1|BA|1026|LAS AMÉRICAS#1|BA|1253|PENAFLOR#1|BA|1422|ALFREDO JIMENEZ#1|BA|1691|UNIVERSIDAD, SAN JUAN DEL RIO#1|BA|3039|SAN MIGUEL DE ALLENDE#1|BA|3148|SAN LUIS DE LA PAZ#1|BA|3187|CAMINO A TLACOTE#1|BA|3733|SATÉLITE#1|BA|3875|QUERÉTARO#1|BA|3889|SAN JUAN DEL RIO#1|BA|3922|TINTERO#1|BA|5711|SAN PABLO#1|BA|4962|ITURBIDE PONIENTE #1|BA|5214|BALVANERA #1|BA|1024|VILLA DE ALVAREZ#1|BA|2868|JARDINES COLON#1|BA|2999|TALA RUISEÑORES#1|BA|3099|COLIMA CENTRO#1|BA|3524|SALAGUA#1|BA|3536|MANZANILLO#1|BA|3665|CANUTILLO#1|BA|3866|ARBOLEDAS#1|BA|3920|8 DE JULIO#1|BA|5732|TECOMÁN#1|BA|5798|SANTA MARGARITA#1|BA|4825|TESISTAN CENTRO#1|BA|460|PASEO LAS TORRES#1|BA|1086|DELTA#1|BA|1181|LEÓN ECHEVESTE#1|BA|1373|CANTADOR#1|BA|2038|SILAO#1|BA|2136|BOULEVARD MORELOS#1|BA|2424|ARISTÓTELES#1|BA|2851|HILAMAS#1|BA|2994|DUARTE#1|BA|3409|ADOLFO LOPEZ MATEOS#1|BA|3804|HILARIO MEDINA#1|BA|4776|LEÓN CENTRO#1|BA|5710|SAN FRANCISCO DEL RINCÓN#1|BA|5771|CERVANTES#1|BA|58|SANTA MÓNICA#1|BA|1068|LAGOS DE MORENO#1|BA|1975|PRIMER ANILLO#1|BA|3056|SIGLO XXI#1|BA|3216|JESUS MARIA#1|BA|3714|MARIANO HIDALGO#1|BA|3744|OJO CALIENTE#1|BA|3802|CONVENCIÓN#1|BA|3865|VILLASUNCIÓN#1|BA|3905|SANTA ANITA#1|BA|4632|EL LLANITO#1|BA|5130|LAS NORIAS#1|BA|1019|SAN PEDRITO#1|BA|1176|SAN JUAN DE LOS LAGOS#1|BA|1465|TEPATITLÁN#1|BA|2028|CONCEPCIÓN DEL VALLE#1|BA|2135|BO CLÍNICA UNIÓN DEL CUATRO#1|BA|3042|SANTA PAULA#1|BA|3360|TOLUQUILLA#1|BA|3402|MARIANO OTERO#1|BA|3557|CHULAVISTA#1|BA|3780|ATEMAJAC#1|BA|3789|REVOLUCIÓN#1|BA|5011|CAMINO ARANDAS #1|BA|5750|MIRAMAR#1|BA|1073|OCOTLÁN#1|BA|1555|PARQUE SOLIDARIDAD#1|BA|1588|SAN GASPAR#1|BA|1633|MATATLÁN#1|BA|1692|JOSE MARIA IGLESIAS#1|BA|2953|EL VERDE#1|BA|3143|LOS AGAVES#1|BA|3238|LAS AZUCENAS#1|BA|3781|INDEPENDENCIA#1|BA|3930|LAS PINTAS#1|BA|5740|BELISARIO DOMÍNGUEZ#1|BA|5309|GLORIETA AUTLAN#1|BA|1055|ORIZABA#1|BA|1420|14 ORIENTE#1|BA|1923|AMALUCAN#1|BA|2066|REFORMA SUR#1|BA|2222|SAN JERÓNIMO#1|BA|2769|HERMANOS SERDÁN#1|BA|2993|CAMINO A TLALTEPANGO#1|BA|3001|AV. 11 CÓRDOBA#1|BA|3297|RIO BLANCO#1|BA|3754|PLAZA LORETO#1|BA|3903|TEHUACÁN#1|BA|3923|XONACA#1|BA|4577|SANTA ANA#1|BA|4730|LAS PLAZAS AMALUCAN#1|BA|5124|CD MENDOZA#1|BA|1025|ATLIXCO#1|BA|1035|FORJADORES#1|BA|1579|CALLE DE LOS PINOS#1|BA|1768|EL REFUGIO#1|BA|2423|ATLIXCO CENTRO#1|BA|2768|AGUSTIN LARA#1|BA|2788|AV. DE LAS TORRES#1|BA|2808|CUAUTLANCINGO#1|BA|2952|SAN FRANCISCO TOTIMEHUACAN#1|BA|3004|HUAUCHINANGO#1|BA|3191|OUTLET PUEBLA#1|BA|3796|MAYORAZGO#1|BA|3901|XILOTZINGO#1|BA|4002|PUEBLA SUR#1|BA|4065|IZÚCAR DE MATAMOROS#1|BA|5376|HUEJOTZINGO#1|BA|1143|TEZIUTLÁN#1|BA|1426|COYOL#1|BA|2024|EJERCITO MEXICANO#1|BA|2664|COATEPEC SUR#1|BA|2809|MEDELLÍN II#1|BA|2908|TIERRA BLANCA#1|BA|2921|MATA DE PITA#1|BA|2932|LAS TRANCAS#1|BA|2951|VERACRUZ NORTE#1|BA|3173|TEJERÍA#1|BA|3666|XALAPA#1|BA|3898|DIAZ MIRÓN#1|BA|4194|MARTINEZ DE LA TORRE#1|BA|1174|MINATITLÁN#1|BA|1252|INSTITUTO TECNOLÓGICO#1|BA|2008|SAN ANDRES TUXTLA#1|BA|2597|COSOLEACAQUE#1|BA|3041|TRANSISTMICA#1|BA|5812|COATZACOALCOS#1|BA|3773|VÍA CAPU#1|BA|3788|MARGARITAS#1|BA|3793|11 SUR#1|BA|3880|PLAZA DORADA#1|BA|3227|TUXPAN CENTRO#1|BA|1151|CHIAUTEMPAN#1|BA|1399|LOMA FLORIDA#1|BA|3442|GLORIETA APIZACO#1|BA|5713|TLAXCALA#1|BA|5194|ZARAGOZA HUAMANTLA#1|BA|2528|FLORES MAGÓN#1|BA|2767|DOCTORES#1|BA|3415|AZCAPOTZALCO LA VILLA#1|BA|3755|TACUBAYA#1|BA|3759|SAN RAFAEL#1|BA|3763|MARIANO ESCOBEDO#1|BA|3769|INSURGENTES NORTE#1|BA|3774|FERROCARRIL HIDALGO#1|BA|3808|BOLIVAR#1|BA|1821|SAN LORENZO#1|BA|2737|ETZATLÁN#1|BA|3757|SAN JUAN DE ARAGÓN#1|BA|3764|IZTAPALAPA#1|BA|3766|LA VIGA#1|BA|3770|PANTITLÁN#1|BA|3771|PLAZA CHURUBUSCO#1|BA|3797|CABEZA DE JUAREZ#1|BA|3799|ANGELES IZTAPALAPA#1|BA|3860|ZARAGOZA#1|BA|3916|IZTAPALAPA NORTE#1|BA|3751|INSURGENTES SUR#1|BA|3760|LOMAS ESTRELLA#1|BA|3761|TULYEHUALCO#1|BA|3768|VILLA COAPA#1|BA|3778|XOCHIMILCO#1|BA|3782|CENTENARIO#1|BA|3786|SANTA FE#1|BA|3803|OBSERVATORIO#1|BA|3805|SANTA LUCIA#1|BA|3874|CANTIL#1|BA|3897|LA VIRGEN#1|BA|1058|CIUDAD HIDALGO#1|BA|1179|MORELIA NORTE#1|BA|1401|LOS SAUCES#1|BA|3142|CAMINO A QUIROGA#1|BA|3361|LA MANGANA#1|BA|3870|MORELIA#1|BA|4542|MORELIA TRES PUENTES#1|BA|5827|MORELIA ESTE#1|BA|5850|ZITÁCUARO#1|BA|1056|ALTAMIRANO#1|BA|2410|PERIFÉRICO NORTE IGUALA#1|BA|2666|JOJUTLA#1|BA|3000|LIBRAMIENTO TAXCO#1|BA|3911|IGUALA#1|BA|1497|EL CARACOL#1|BA|2026|ACAPULCO UNIVERSIDAD#1|BA|2228|LA POLAR#1|BA|2340|PIE DE LA CUESTA#1|BA|3779|ACAPULCO COSTERA#1|BA|3806|RENACIMIENTO#1|BA|3907|COLOSO II#1|BA|5600|LA CAÑADA#1|BA|1057|CHILPANCINGO#1|BA|2667|TLAPA DE COMONFORT#1|BA|3230|CHILPANCINGO NORTE#1|BA|3902|LÁZARO CARDENAS#1|BA|4743|LÁZARO CÁRDENAS AEROPUERTO#1|BA|5799|ZIHUATANEJO#1|BA|1018|TEMIXCO#1|BA|1345|LAS BRISAS CUAUTLA#1|BA|1841|PLAN DE AYALA#1|BA|3121|YAUTEPEC#1|BA|3785|CUAUTLA#1|BA|3823|MORELOS#1|BA|3869|CUERNAVACA#1|BA|1087|SAHUAYO#1|BA|3486|SAN FRANCISCO URUAPAN#1|BA|3890|LA PIEDAD#1|BA|4195|ZACAPU#1|BA|4687|JACONA DE PLANCARTE#1|BA|5843|URUAPAN#1|BA|5844|ZAMORA#1|BA|1132|PÁTZCUARO#1|BA|1468|APATZINGÁN#1|BA|1199|TEPOJACO#1|BA|1559|SAN MATEO NOPALA#1|BA|1930|EL ORO#1|BA|2525|RIO HONDO#1|BA|3074|VILLAS DE LA HACIENDA#1|BA|3679|NICOLÁS ROMERO#1|BA|3752|VALLEJO#1|BA|3756|TLALNEPANTLA#1|BA|3772|PLAZA ATIZAPÁN#1|BA|3784|1° DE MAYO#1|BA|3798|SANTA CECILIA#1|BA|4198|EL TENAYO#1|BA|5013|COLINA DE MONTE BELLO#1|BA|5768|CD LABOR#1|BA|1150|HUEHUETOCA#1|BA|1558|LA PALMA#1|BA|1870|TEPOTZOTLÁN#1|BA|2922|TEPEJI DEL RIO#1|BA|3167|SANTA INÉS#1|BA|3743|TULA#1|BA|3750|AUTOPISTA QUERÉTARO#1|BA|3787|CUAUTITLÁN#1|BA|3871|PLAZA CUAUTITLÁN#1|BA|3883|MELCHOR OCAMPO#1|BA|3924|COFRADÍAS#1|BA|4907|PASEO DEL REY#1|BA|5182|BICENTENARIO #1|BA|1400|JOYAS DE COACALCO#1|BA|1664|MEXIQUENSE#1|BA|1830|ARBOLADA LOS SAUCES#1|BA|1899|SAN JUAN DE LA LABOR#1|BA|2386|AVENIDA DALIAS#1|BA|2954|EL DORADO#1|BA|3065|BOSQUES DEL VALLE#1|BA|3141|SAN PABLO TULTITLÁN#1|BA|3765|ECATEPEC#1|BA|3791|FUENTES DEL VALLE#1|BA|5770|ZUMPANGO#1|BA|1008|HÉROES TECÁMAC#1|BA|1233|TECALCO#1|BA|1828|ACOLMAN#1|BA|2054|TERRANOVA#1|BA|2871|VIENTO NUEVO#1|BA|3098|GUADALUPANA#1|BA|3214|CHINAMPA#1|BA|3910|PALOMAS#1|BA|4029|AV. NACIONAL#1|BA|4558|TECÁMAC#1|BA|1110|PLAZA ECATEPEC#1|BA|1201|SAN AGUSTIN ECATEPEC#1|BA|3020|XALOSTOC#1|BA|3026|GOBERNADORA#1|BA|3213|LA PRESA#1|BA|3753|PLAZA ARAGÓN#1|BA|3777|VALLE DE ARAGÓN#1|BA|3783|SANTA CLARA#1|BA|3792|SAN JUANICO#1|BA|3888|VÍA MORELOS#1|BA|3892|AV. CENTRAL#1|BA|2736|CHIMALHUACÁN PEÑÓN#1|BA|3668|REAL DE COSTITLAN#1|BA|3762|CHIMALHUACÁN#1|BA|3775|LA AURORA#1|BA|3776|SOR JUANA#1|BA|3795|TEXCOCO#1|BA|3891|LOS REYES#1|BA|4128|ARCA DE NOÉ#1|BA|5730|CHICOLOAPAN#1|BA|5733|PLAZA CHIMALHUACÁN#1|BA|5813|LA PAZ#1|BA|1001|SAN BUENAVENTURA#1|BA|1109|AYOTLA#1|BA|1161|VALLE DE CHALCO#1|BA|1634|CUAUTZINGO#1|BA|2072|PORTAL CHALCO#1|BA|3294|NICOLÁS BRAVO#1|BA|3296|VILLAS DE AYOTLA#1|BA|3884|CHALCO 2000#1|BA|4541|IXTAPALUCA#1|BA|1177|SANTIAGO TIANGUISTENCO#1|BA|1428|SAN MATEO ATENCO#1|BA|2221|ALPINISMO#1|BA|2873|DIMAS#1|BA|3043|ZINACANTEPEC#1|BA|3725|TOLUCA PILARES#1|BA|4017|TOLUCA AZTECAS#1|BA|5662|TENANCINGO#1|BA|1002|TEOTIHUACÁN#1|BA|1104|TIZAYUCA#1|BA|1111|ÁLAMO#1|BA|1663|EL MANANTIAL#1|BA|2387|HACIENDAS DE TIZAYUCA#1|BA|2421|SANTIAGO TULANTEPEC#1|BA|3147|MATILDE#1|BA|3547|PACHUQUILLA#1|BA|3722|TULANCINGO#1|BA|3727|TULIPANES#1|BA|3767|PACHUCA#1|BA|4824|CAMINO A CALERA#1|BA|5735|BONFIL#1|BA|2213|HUICHAPAN#1|BA|5118|IXMIQUILPAN CARDONAL #1|BA|1142|TOTOLTEPEC#1|BA|1236|ATLACOMULCO#1|BA|1829|ALMOLOYA#1|BA|2141|XONACATLÁN#1|BA|2240|SANTA CRUZ#1|BA|1088|COMITÁN#1|BA|1342|PLAZA LAS FLORES#1|BA|1387|5TA. PONIENTE#1|BA|1689|REAL DEL BOSQUE#1|BA|1897|SAN CRISTÓBAL#1|BA|2452|PASO LIMÒN#1|BA|3002|SUMIDERO#1|BA|3304|CARRETERA VILLAFLORES#1|BA|3904|TUXTLA ORIENTE#1|BA|3917|TUXTLA CENTRO#1|BA|4125|TERÁN#1|BA|4694|INTERNACIONAL CHIAPA DE CORZO#1|BA|1023|PERIFÉRICO SUR#1|BA|1029|COMALCALCO#1|BA|1101|CIUDAD INDUSTRIAL#1|BA|1526|PARAÍSO#1|BA|1693|JALPA DE MENDEZ#1|BA|1728|SARAGUATO#1|BA|2142|REFORMA MACUSPANA#1|BA|3558|CARRETERA DE NACAJUCA#1|BA|4113|CIUDAD DEL CARMEN#1|BA|5736|CARDENAS#1|BA|1004|TALLERES#1|BA|1005|KABAH#1|BA|1038|CHETUMAL#1|BA|1124|CORALES#1|BA|1388|NICHUPTE#1|BA|1665|VILLAS OTOCH#1|BA|2062|PLAYA DEL CARMEN NORTE#1|BA|2476|NAHIL#1|BA|3399|COZUMEL#1|BA|3527|CHETUMAL NORTE#1|BA|3670|PLAYA MAYA#1|BA|4016|PLAYA DEL CARMEN#1|BA|5043|CHAC MOOL #1|BA|1089|SANTA ROSA#1|BA|1133|SANTA ANITA OAXACA#1|BA|1180|TUXTEPEC#1|BA|1765|MONTOYA#1|BA|2006|JUCHITÁN#1|BA|2362|HUAJUAPAN 2 DE ABRIL#1|BA|2390|OAXACA AEROPUERTO#1|BA|3023|HUAJUAPAN#1|BA|3067|SALINA CRUZ#1|BA|3548|TEHUANTEPEC#1|BA|3669|NARANJOS#1|BA|5660|SAN SEBASTIÁN TUTLA#1|BA|1017|QUETZALCÓATL#1|BA|1036|MÉRIDA MONTEJO#1|BA|1037|CAMPECHE ESTE#1|BA|1943|FRACC. MÉRIDA LAS AMÉRICAS#1|BA|2029|MÉRIDA ITZAES#1|BA|2108|KALA#1|BA|2945|VALLADOLID#1|BA|3022|PROGRESO#1|BA|3040|JUAN PABLO LL#1|BA|3295|GLORIETA CAUCEL#1|BA|3523|NUEVA KUKULCAN#1|BA|4075|PATRICIO TRUEBA#1|BA|5083|LOS HEROES#1|BA|5120|CHAMPOTÓN#1|BA|2910|CHUBURNA#1|BA|4777|PIEDRA DE AGUA#1|BA|1082|TAPACHULA NORTE#1|BA|1754|TAPACHULA BUENOS AIRES#1|BA|2070|SOCONUSCO#1|BA|3908|TAPACHULA#1|BA|5122|CD. HIDALGO SUR#2|BAE|1744|SAN LUIS#2|BAE|2490|PRADERAS DEL REY#2|BAE|2522|ÁLVARO OBREGÓN#2|BAE|2580|COSMOS#2|BAE|2609|NATIVIDAD MACÍAS#2|BAE|3237|LOMAS SAN ISIDRO#2|BAE|5099|BAE CEDIS CULIACÁN#2|BAE|5486|EJERCITO DE OCCIDENTE#2|BAE|5487|EULOGIO PARRA#2|BAE|5488|GALAXIA#2|BAE|5628|BRISAS DE HUMAYA#2|BAE|5629|LOS ÁNGELES#2|BAE|2500|ÁLAMOS#2|BAE|2501|REAL DE VILLA#2|BAE|2502|LAS CEREZAS#2|BAE|2503|TOLEDO CORRO#2|BAE|2613|BOSQUES DEL PEDREGAL#2|BAE|2614|DIAMANTE#2|BAE|2615|AVENIDA JIQUILPAN#2|BAE|5413|NUEVO HORIZONTE#2|BAE|5489|BLVD. CENTENARIO MOCHIS#2|BAE|1572|PLAZA MATATIPAC#2|BAE|2534|EL NARANJAL#2|BAE|2535|BRASIL#2|BAE|2536|LOS SAUCES#2|BAE|2641|LOS ROBLES#2|BAE|1741|SAMUEL SALAZAR#2|BAE|2493|ESTERO#2|BAE|2531|INFONAVIT JABALINES#2|BAE|2532|GARDENIA#2|BAE|2584|NÁJERA#2|BAE|2585|PLAYA AZUL#2|BAE|2660|LAS TINAJAS#2|BAE|2980|VENADOS#2|BAE|5631|JOAQUÍN ESCOBAR#2|BAE|5633|AV. SANTA ANA#2|BAE|1298|MEZQUITAL#2|BAE|2485|PAPAGAYO#2|BAE|2553|SANTA CRISTINA#2|BAE|2610|MONTECILLO#2|BAE|2973|VALENTIN AMADOR#2|BAE|3700|MORALES SAUCITO#2|BAE|3704|UNIDAD PAVON#2|BAE|3706|EL SAUCE#2|BAE|5696|POTOSÍ RIO VERDE#2|BAE|1297|FRACCIONAMIENTO PRIMAVERA#2|BAE|2552|FLEMING#2|BAE|2970|FRACCIONAMIENTO ESPANOL#2|BAE|3702|SAN LUIS REY#2|BAE|3703|VALLE DE LAS DALIAS#2|BAE|3927|SALK SALVADOR NAVA#2|BAE|3984|LOMA DEL PEDREGAL#2|BAE|3985|CONSTITUCIÓN#2|BAE|3987|ESTADIO ALFONSO LASTRAS#2|BAE|1263|GÁLVEZ#2|BAE|2484|FRACC. LA VIRGEN#2|BAE|2838|EL PORTAL#2|BAE|2939|SEMINARIO#2|BAE|2972|POZOS#2|BAE|3952|MISIÓN SAN PEDRO#2|BAE|3986|CACTUS#2|BAE|3988|RICARDO B ANAYA#2|BAE|1255|SECTOR LA FAMA#2|BAE|2209|MANUEL ORDOÑEZ#2|BAE|2226|PROTEXA#2|BAE|2750|ALFONSO MARTINEZ#2|BAE|2763|PERIMETRAL NORTE#2|BAE|3268|SAN FRANCISCO#2|BAE|3309|LOMAS ALTAS#2|BAE|3455|PRADOS SAN JORGE#2|BAE|3582|LOS VIÑEDOS#2|BAE|5187|COLINAS SANTA CATARINA#2|BAE|1568|HACIENDA DE SAN JUAN#2|BAE|1736|LOS PARQUES#2|BAE|2337|SANTA MARIA LINCOLN REP#2|BAE|2781|CABEZADA NORTE#2|BAE|3112|VALLE DE SAN FRANCISCO#2|BAE|3163|18 DE OCTUBRE#2|BAE|3269|CIUDAD SAN MARCOS#2|BAE|3958|BARRIO ESTRELLA#2|BAE|4851|PORTAL DE LOS VALLES#2|BAE|5480|SAN MARTIN ESCOBEDO#2|BAE|1250|CAPELLANÍA#2|BAE|1372|PRIVALIA GARCIA#2|BAE|1994|SOR JUANA#2|BAE|2556|HACIENDA LOS LEONES#2|BAE|3384|ARROYO MARAVILLAS#2|BAE|3640|ALCALI#2|BAE|3992|URBI VILLA DEL PRADO#2|BAE|4773|VILLAS ALCALLI II#2|BAE|4857|BALCONES DE GARCÍA#2|BAE|5406|HACIENDA SAN ANGEL#2|BAE|1269|GIRASOL#2|BAE|1271|TORRE MAGNOLIAS#2|BAE|1363|VALENCIA#2|BAE|2917|LIBERTAD SANTIAGO#2|BAE|3644|ALFREDO BONFIL#2|BAE|3645|VILLAS DE SAN LORENZO#2|BAE|3688|PORTALES DEL PEDREGAL#2|BAE|3954|LA GUAYULERA#2|BAE|5073|LOMAS DEL SUR#2|BAE|5619|AMPLIACION 23 DE NOVIEMBRE#2|BAE|5648|JARDIN DE LOS PINOS#2|BAE|5649|AVENIDA LAS TERESITAS#2|BAE|1059|PASEO DE MINAS#2|BAE|1330|ICAMOLE#2|BAE|1534|VALLE DE SAN BLAS#2|BAE|1885|FRAILE LINCOLN#2|BAE|2192|RENACIMIENTO GARCIA#2|BAE|2311|PORTAL LINCOLN#2|BAE|3288|VALLE DE LINCOLN#2|BAE|4931|MINAS VALLE DE LINCOLN#2|BAE|4933|GARCIA VILLAZUL#2|BAE|5144|VISTA BELLA#2|BAE|5676|SAN JOSE LINCOLN#2|BAE|1451|TULIPÁN APODACA#2|BAE|2367|LOS AMARANTOS#2|BAE|2630|ESTELARIS#2|BAE|2836|ANTARES APODACA#2|BAE|3266|EBANOS#2|BAE|3353|ANDROMEDA TERCER SECTOR#2|BAE|3461|ALCANFOR#2|BAE|3518|METROPLEX#2|BAE|3991|VENTURA DE SANTA ROSA#2|BAE|5266|COSMOPOLIS#2|BAE|1270|LA FUENTE#2|BAE|1875|GABINO BARREDA#2|BAE|2245|MISIÓN CERRITOS#2|BAE|2339|FRACCIONAMIENTO MORELOS#2|BAE|3170|ARMADILLO#2|BAE|3396|URDINOLA CENTRO#2|BAE|3646|JUAN NAVARRO#2|BAE|3647|VILLAS DE MIRASIERRA#2|BAE|3648|AMPLIACION GUERRERO#2|BAE|3953|TOREO SALTILLO#2|BAE|5126|CONQUISTADORES#2|BAE|5485|COLONIA BONANZA#2|BAE|5699|COLONIA LOS GONZALEZ#2|BAE|6257|VISTAS DE PEÑA#2|BAE|1268|ESCORIAL#2|BAE|1272|FRACCIONAMIENTO AZTECA#2|BAE|1364|VILLASOL#2|BAE|1666|AV. MARIANO MORALES#2|BAE|2518|LA HACIENDA#2|BAE|5289|VILLASOL II - RAMOS ARIZPE#2|BAE|5328|PINO REAL - RAMOS ARIZPE#2|BAE|5423|LAS TORRES MONCLOVA#2|BAE|5424|DEL RIO#2|BAE|5425|HIPODROMO#2|BAE|5437|BRISAS#2|BAE|5447|GALEANA#2|BAE|1886|CASA BLANCA CADEREYTA#2|BAE|2338|MIRADOR SAN ANTONIO#2|BAE|3208|JARDINES DE CADEREYTA#2|BAE|3335|AVENIDA DEL OLMO#2|BAE|3337|VALLE DEL ROBLE#2|BAE|4751|MIRADOR SAN ANTONIO II#2|BAE|4893|ALBEROS CADEREYTA#2|BAE|4916|HUIZACHE VALLE DEL ROBLE#2|BAE|5141|CADEREYTA#2|BAE|5149|MIRADOR DEL PARQUE JUÁREZ#2|BAE|1992|COLINAS DEL SOL#2|BAE|2398|VAQUERÍAS#2|BAE|2563|PASEO DE GUADALUPE#2|BAE|2576|AV. SANTA CRUZ#2|BAE|2915|REYES SAN ROQUE#2|BAE|3383|VILLA ALEGRE#2|BAE|3450|31 DE DICIEMBRE#2|BAE|3460|PRIVADA DE SAN CARLOS#2|BAE|3471|PASEOS DE SANTA FE#2|BAE|3638|BARRIO LA SCOP#2|BAE|4720|HECTOR CABALLERO#2|BAE|5030|FRACCIONAMIENTO VILLALUZ#2|BAE|5389|LOMAS DE CORDOBA#2|BAE|6336|ZIRANDARO JUAREZ #2|BAE|2479|ACUEDUCTO DE JUAREZ#2|BAE|2659|ARCADIA#2|BAE|2762|FATIMA#2|BAE|2902|AV. MONTE KRISTAL#2|BAE|3259|RESIDENCIAL SANTA MÓNICA#2|BAE|3429|LOS COMETAS#2|BAE|3462|JARDINES DE LA SILLA#2|BAE|3522|MISIÓN LA SILLA#2|BAE|4499|FRACCIONAMIENTO BUGAMBILIAS #2|BAE|4583|SAN FRANCISCO JUÁREZ#2|BAE|4839|FRACCIONAMIENTO MAGDALENA#2|BAE|5035|HACIENDA MADRID#2|BAE|5227|SAN FRANCISCO JUÁREZ#2|BAE|1628|EL MANANTIAL DE GUADALUPE#2|BAE|1856|HUINALA#2|BAE|2631|CENTRO DE HUINALA#2|BAE|2835|PRIVADA DOMINIO#2|BAE|2882|RODESIA#2|BAE|2949|BOSQUE BOREAL#2|BAE|3472|MISIÓN SAN PABLO#2|BAE|3579|MISIÓN DE HUINALA#2|BAE|3685|ZARAGOZA APODACA#2|BAE|3993|RIO ORINOCO#2|BAE|4772|MISION REAL APODACA#2|BAE|4892|SANTA SOFÍA#2|BAE|1473|PARAÍSO REYNOSA#2|BAE|1878|INDUSTRIAL DEL NORTE#2|BAE|2678|SAN JOSE REYNOSA#2|BAE|4030|CALLE TAMAULIPAS#2|BAE|4661|ARECAS#2|BAE|4710|ORIENTE 2#2|BAE|4712|PUERTA GRANDE#2|BAE|4735|SAN VALENTIN#2|BAE|1809|BOULEVARD ACAPULCO#2|BAE|1872|BARRIO SAN RAFAEL#2|BAE|2883|CENTRO AMERICA#2|BAE|2900|RODRIGO DE LLANO#2|BAE|2918|PLAZA VIOLETA#2|BAE|2963|NUEVA LINDAVISTA#2|BAE|3349|CAMINO A SAN PEDRO#2|BAE|3427|PLAZA AVANTE#2|BAE|3453|SAN MIGUELITO#2|BAE|4675|LIBANESES#2|BAE|4844|FUENTES DEL SEMINARIO#2|BAE|5225|LOS CANTAROS JUAREZ#2|BAE|1446|JARDINES DEL CAÑADA#2|BAE|1918|JUAN PABLO II#2|BAE|2756|MONTES BERNESES#2|BAE|2757|SAN NICOLÁS#2|BAE|2854|CONSTITUCIÓN LA HACIENDA#2|BAE|2855|SAN GENARO#2|BAE|2857|VILLAS DE ESCOBEDO#2|BAE|3289|VALLE DE LAS PALMAS#2|BAE|3513|CONCEPCIÓN BARRAGÁN#2|BAE|4713|LAS PALMAS APODACA#2|BAE|4783|RINCÓN LERMA#2|BAE|5366|VALLE DE PALMAS#2|BAE|2418|AV. CANAL DE RODHE#2|BAE|2677|LA JOYA REYNOSA#2|BAE|2692|VALLE SOLEADO#2|BAE|2693|EL CAMPANARIO#2|BAE|3166|RINCÓN DE LAS FLORES#2|BAE|4681|PASEO DE LAS FLORES#2|BAE|4753|BALCONES DE ALCALÁ#2|BAE|4769|VENTURA#2|BAE|4997|PICO BROAD#2|BAE|5157|RIO BRAVENSE#2|BAE|5189|AZTECA RIO BRAVO#2|BAE|5251|RIVERAS DEL BRAVO #2|BAE|1447|LOS PUERTOS DE JUAREZ#2|BAE|2021|TOSCANA#2|BAE|2404|HACIENDA LAS MARGARITAS#2|BAE|2513|SAN MIGUEL HUINALA#2|BAE|2714|AV. GIRASOL#2|BAE|3172|AV. SAN FERNANDO#2|BAE|3350|DULCES NOMBRES#2|BAE|3405|SEGUNDA SECCION LOS PUERTOS#2|BAE|3596|AV. DEL COLECTOR#2|BAE|3989|VALLE SANTA MARIA#2|BAE|4798|4TA SECCIÓN LOS PUERTOS#2|BAE|5211|ROMA SANTA MARIA - PESQUERIA#2|BAE|1464|VILLA FLORIDA#2|BAE|1469|PUNTA ARENAS#2|BAE|1474|LA CIMA#2|BAE|1926|REYNOSA BUGAMBILIAS#2|BAE|4676|JARACHINAS SUR#2|BAE|4677|REYNOSA COLORINES#2|BAE|4709|COLONIA OBRERA#2|BAE|5419|RESIDENCIAL COLORINES#2|BAE|1131|COLONIA MIRASOL#2|BAE|1908|RUIZ CORTINEZ#2|BAE|2270|SAN JORGE RUIZ CORTINES#2|BAE|2628|MISIÓN LINCOLN#2|BAE|2713|BANCO DE FOMENTO#2|BAE|2901|MARTIRES DE RIO BLANCO#2|BAE|3179|REYES Y SANTIAGO#2|BAE|3382|HACIENDA MITRAS#2|BAE|3641|LOMAS DE CUMBRES#2|BAE|3643|MITRA DORADA#2|BAE|4758|LAS ROCAS#2|BAE|499|FRACCIONAMIENTO BUENA VISTA#2|BAE|1274|VILLAS DE SAN FRANCISCO#2|BAE|2480|COLONIA FOMERREY#2|BAE|2481|REAL ALIANZA#2|BAE|2629|PRADERAS DE SAN FRANCISCO#2|BAE|3164|EL CARMEN#2|BAE|3165|FRACCIONAMIENTO SAN MIGUEL#2|BAE|3595|LADERAS DE SAN MIGUEL#2|BAE|5125|VILLAS BUENAVISTA #2|BAE|5155|HACIENDA LA PROVIDENCIA#2|BAE|5156|PRIVADAS DE SAN FRANCISCO#2|BAE|5321|VISTAS DEL CARMEN NUEVO LEON#2|BAE|2189|SANTA ROSA DE LIMA#2|BAE|2635|AV NUEVO LEON#2|BAE|2933|FUERTE LORETO#2|BAE|3139|LA PLAYA#2|BAE|3260|ARTEAGA#2|BAE|3267|HACIENDA LOS LERMAS#2|BAE|3351|RIVERAS DE RIO#2|BAE|3452|JULIO CESAR#2|BAE|3458|RIO DE LA SILLA#2|BAE|3459|POLANCO ORIENTE#2|BAE|3530|INFONAVIT LA JOYA#2|BAE|3709|PAJAROS AZULES#2|BAE|4737|ELOY CAVAZOS#2|BAE|1524|VILLAREAL ESCOBEDO#2|BAE|2227|EX HACIENDA EL CAÑADA#2|BAE|2403|PASEO DE LOS ROBLES#2|BAE|2749|PASEO DE LA AMISTAD#2|BAE|2853|BALCONES DEL NORTE#2|BAE|2884|PLINIO ORDOÑEZ#2|BAE|3385|REAL DEL SOL#2|BAE|3520|MONTES PIRINEOS#2|BAE|3686|HACIENDA LOS AYALA#2|BAE|5053|BAE CEDIS MONTERREY#2|BAE|5057|SANTA LUCÍA #2|BAE|5146|MIRAVISTA ESCOBEDO#2|BAE|2369|TRIANA#2|BAE|2601|3RA SECCIÓN LOMAS DE SAN MARTÍN#2|BAE|2861|2A. SECCION LOMAS DE SAN MARTIN#2|BAE|2916|LOMAS DE SAN MARTIN#2|BAE|3184|LAS HACIENDAS#2|BAE|3580|COLINAS DEL AEROPUERTO#2|BAE|3673|VILLAS REGINA#2|BAE|3957|AV. MONTERREY#2|BAE|4750|SANTA ENGRACIA#2|BAE|5031|CANTORAL LOMAS DE SAN MARTIN#2|BAE|5093|PESQUERIA CENTRO #2|BAE|5137|CIUDAD NATURA#2|BAE|5204|CENTRAL PESQUERIA#2|BAE|6334|VISTAS DE ANACUA II#2|BAE|1482|LECHUGUILLA#2|BAE|1527|LA UNIÓN ESCOBEDO#2|BAE|1726|ENRIQUE RANGEL#2|BAE|2030|EPICALIA#2|BAE|2125|SAN BERNABÉ#2|BAE|2652|VALLE MORELOS#2|BAE|2730|UNIDAD MODELO II#2|BAE|2780|TITANIO#2|BAE|2856|TIERRA Y LIBERTAD#2|BAE|3193|SAN ISIDRO ESCOBEDO#2|BAE|3210|TALLERES SAN BERNABÉ#2|BAE|3451|SUBESTACION TOPOCHICO#2|BAE|4680|PROVILEON#2|BAE|1355|LOS HUERTOS JUAREZ#2|BAE|3290|CIUDADELA II#2|BAE|3354|VISTAS DEL RIO#2|BAE|3457|PORTAL DE JUAREZ#2|BAE|3521|COLINAS DE LA MORENA#2|BAE|3532|PRADERAS DE SAN JUAN#2|BAE|3597|AV. SIERRA NEGRA#2|BAE|4797|OCAÑIA JUÁREZ#2|BAE|4869|SANTA ISABEL JUÁREZ#2|BAE|4894|ROTONDA SANTA ISABEL#2|BAE|5168|FATIMA APODACA#2|BAE|5203|AVENIDA VISTAS DEL NORTE#2|BAE|5207|PRADERAS DE ORIENTE#2|BAE|5318|VALLE DE SANTA ISABEL#2|BAE|1723|AV. LOS RUISEÑORES#2|BAE|1217|AV. SAN REMO#2|BAE|3489|CERRO ARACAR#2|BAE|2166|LA CONQUISTA#2|BAE|4928|PINO SANTA ELENA#2|BAE|2312|PORTAL DE LAS SALINAS#2|BAE|2482|REAL DE PALMAS#2|BAE|4714|REAL DE PALMAS II#2|BAE|3155|VALLE DE SANTA ELENA#2|BAE|5072|VALLE DEL CARRIZAL#2|BAE|5308|ZUAZUA SAN PATRICIO#2|BAE|3183|VILLAS DE ALCALA#2|BAE|4867|ZUAZUA SANTA ELENA#2|BAE|1448|NUEVO AMANECER#2|BAE|2715|LOS MORALES#2|BAE|2771|CASA BLANCA#2|BAE|3339|JARDINES DEL MEZQUITAL#2|BAE|3519|QUINTA MONTECARLO#2|BAE|3955|ROBERTO ESPINOZA#2|BAE|4701|PENA GUERRA#2|BAE|4840|CAMINO AL MEZQUITAL#2|BAE|5094|SANTA CECILIA APODACA #2|BAE|5104|BORNEO #2|BAE|5392|PLAZA CASA BLANCA#2|BAE|1811|HILARIO MARTINEZ#2|BAE|1857|NINO ARTILLERO#2|BAE|2157|PIO X#2|BAE|2712|LUIS G. URBINA#2|BAE|2748|SAN ANGEL#2|BAE|3131|MARIA CURIE#2|BAE|3149|RIO NAZAS#2|BAE|3209|PROGRESO#2|BAE|3352|INDEPENDENCIA#2|BAE|5620|LA ESTANZUELA#2|BAE|1331|VILLAS DEL ARCO#2|BAE|1384|VILLAS DEL JARAL#2|BAE|1889|GEO CERRO DE LA SILLA#2|BAE|2022|BOSQUES DE LOS NOGALES#2|BAE|2845|HACIENDA DE LA MAGDALENA#2|BAE|3159|VALLE DEL NORTE#2|BAE|3687|GEO LOS CAVAZOS#2|BAE|4915|EL JARAL#2|BAE|4925|BOSQUES DE CASTILLA#2|BAE|5092|PRIVADAS DEL ARCO#2|BAE|5160|VALLE DEL JARAL#2|BAE|6035|PASEO EL CARMEN#2|BAE|2216|VALLE DE LOS SABINOS#2|BAE|2313|FRACCIONAMIENTO CAMPO BELLO#2|BAE|2564|EL SALTO CENTRO#2|BAE|3947|VALLE DE LOS OLIVOS#2|BAE|3948|PARQUES DEL CASTILLO#2|BAE|4655|CIMA SERENA#2|BAE|4715|2DA. SECCION LAS AZUCENAS#2|BAE|4722|LILAS#2|BAE|4842|HUERTA VIEJA#2|BAE|5079|GLORIETA CIMA SERENA #2|BAE|2624|SABINOS II#2|BAE|1296|JARDINES DEL FRESNO#2|BAE|1912|PARAÍSOS DEL COLLÍ#2|BAE|2195|TORRES BODET#2|BAE|3137|PUERTO MAZATLÁN#2|BAE|3310|LONGINOS CADENA#2|BAE|3470|LOMA BONITA EJIDAL#2|BAE|3499|JARDIN LAS AGUILAS#2|BAE|4943|ALBEREDA #2|BAE|5080|PASEO ALBEREDA #2|BAE|5681|PLAZA EL CAPRICHO#2|BAE|1216|HACIENDA LA NORIA#2|BAE|1332|ANTONIO RAMÍREZ#2|BAE|2863|LOMAS DE SAN AGUSTIN#2|BAE|3111|HACIENDA EUCALIPTO#2|BAE|3275|BAHIA DE COLON#2|BAE|3512|SAN SEBASTIÁN EL GRANDE#2|BAE|3576|MATAMOROS#2|BAE|4171|ABEDULES#2|BAE|4754|HACIENDA SAN MIGUEL#2|BAE|5051|CEDIS GUADALAJARA #2|BAE|5069|BELCANTO#2|BAE|1536|VILLAS TERRANOVA#2|BAE|1702|LOMAS DEL SUR#2|BAE|1990|CHULAVISTA#2|BAE|2405|VALLE TEJEDA#2|BAE|2438|ENCINOS GUADALAJARA#2|BAE|3422|CHULAVISTA II#2|BAE|4683|HONDURAS#2|BAE|4870|VISTA SUR #2|BAE|4930|FORTUNA#2|BAE|5614|FRACC. REAL DEL SOL#2|BAE|5697|HACIENDA LOS FRESNOS#2|BAE|1262|LOMAS DEL MIRADOR#2|BAE|2005|FONTANA#2|BAE|2399|BOLONIA#2|BAE|2566|ARVENTO#2|BAE|2567|PASEO DE LOS AGAVES#2|BAE|2577|PASEOS DEL VALLE#2|BAE|3974|SILOS#2|BAE|3975|LOS CANTAROS#2|BAE|3976|PLAZA LOS CANTAROS#2|BAE|4895|2DA SECCIÓN ARVENTO#2|BAE|2194|BUENOS AIRES#2|BAE|2439|VALLE DE LA MISERICORDIA#2|BAE|3120|VILLAS SANTA CRUZ#2|BAE|3136|PARQUES DE SANTA CRUZ#2|BAE|3346|ESPANA#2|BAE|3380|VALLE DE SAN VICTOR#2|BAE|3419|POLANQUITO II#2|BAE|3609|BALCONES DE SANTA MARIA#2|BAE|3972|VILLA FONTANA#2|BAE|4682|JESUS REYES HEROLES#2|BAE|1703|OLÍMPICA#2|BAE|1802|CUCEI#2|BAE|2248|CARLOS CARRILLO#2|BAE|2514|LAS JUNTAS#2|BAE|2707|COLONIA INFONAVIT#2|BAE|3256|TLAQUEPAQUE#2|BAE|3332|TERRALTA#2|BAE|3347|18 DE MARZO#2|BAE|3607|PARQUES DE LA VICTORIA#2|BAE|5679|CAPULIN#2|BAE|5386|ÁLAMO TLAQUEPAQUE #2|BAE|1991|VALLE DE ATEMAJAC#2|BAE|2173|SABINO DELGADO#2|BAE|2331|JARDINES DEL VALLE#2|BAE|2691|ARCOS GUADALAJARA#2|BAE|2862|AV. TESISTAN#2|BAE|2886|LOS RUISEÑORES#2|BAE|3421|SAN JUAN DE OCOTAN#2|BAE|3424|FELIPE RUVALCABA#2|BAE|3469|PLAZA CLOUTHIER#2|BAE|1292|CANDILES#2|BAE|1294|LUIS PASTEUR#2|BAE|2581|EL MARQUES#2|BAE|3404|MISIÓN QUERÉTARO#2|BAE|3982|GEO LA PRADERA#2|BAE|3983|GEO LA CRUZ#2|BAE|4752|FUENTES DE BALVANERA#2|BAE|4775|2A SECCIÓN PREDERA#2|BAE|5127|LA VIDA#2|BAE|5128|LOS OLVERA#2|BAE|5316|RESIDENCIAL REAL SOLARE#2|BAE|5202|SOLARE QUERETARO - EL MARQUES#2|BAE|4495|BOULEVARD LAS AMERICAS#2|BAE|848|PLAZA ARIEL#2|BAE|2010|SANTUARIOS#2|BAE|2368|PASEO DE LA PIRÁMIDE#2|BAE|2401|PAMES#2|BAE|2912|HACIENDA SANTA ROSA#2|BAE|3637|LOARCA#2|BAE|4736|RANCHO BELLAVISTA#2|BAE|5028|CAMINO AL PUEBLITO#2|BAE|5096|MIRADOR VÍA LÁCTEA#2|BAE|5438|POPOCATEPETL#2|BAE|5208|PLAN DE SAN LUIS#2|BAE|642|PLAZA BELÉN#2|BAE|2185|LOMAS DEL MARQUÉS#2|BAE|2329|SAN JOSE EL ALTO#2|BAE|2400|CUARZO#2|BAE|2554|BELÉN#2|BAE|2639|AV. SOMBRERETE#2|BAE|3610|VILLAS DE SANTIAGO#2|BAE|3611|LOMAS DE SAN PEDRITO#2|BAE|3635|QUERÉTARO CENTRO#2|BAE|5139|PASEO DE LA CONSTITUCIÓN#2|BAE|5345|JESÚS MARÍA#2|BAE|1293|CIUDAD DEL SOL#2|BAE|1671|BERNARDO QUINTANA#2|BAE|1678|FRACCIONAMIENTO LOMA ALTA#2|BAE|2370|VALLE DE SANTIAGO#2|BAE|2619|GANDHI#2|BAE|2620|SIERRA MADRE#2|BAE|2978|RANCHO SAN PEDRO#2|BAE|3636|PUERTA DEL SOL#2|BAE|3978|GEOPLAZAS#2|BAE|4494|BANTHI#2|BAE|5388|HACIENDA ESMERALDA#2|BAE|1175|CAMELIA#2|BAE|1178|FRACC. LAS MARGARITAS#2|BAE|1415|CELAYA CENTRO#2|BAE|1416|LOS PIRULES DE SILVA#2|BAE|1739|CELAYA NOROESTE#2|BAE|1895|SAN ANTONIO CELAYA#2|BAE|3559|ESTANCIA#2|BAE|4774|VILLAS LA ESTANCIA#2|BAE|5420|EL PERUL#2|BAE|5444|ABRAHAM GONZALEZ#2|BAE|5445|AV. DEL TRABAJO#2|BAE|5097|VILLAS DEL REY#2|BAE|2486|LOMAS DEL CHAPULÍN#2|BAE|2489|INFONAVIT MORELOS#2|BAE|2549|MUJERES ILUSTRES#2|BAE|4873|VILLAS SAN MARCOS#2|BAE|4942|VIÑEDOS DEL SUR#2|BAE|5421|EL CIRINEO#2|BAE|5422|GEOVILLAS LOS LAGOS#2|BAE|5446|PASEOS DE LA MONTANA#2|BAE|5641|JULIAN MEDINA#2|BAE|5642|PASEO DE LA ASUNCION#2|BAE|2604|FRACC. EL RIEGO#2|BAE|2913|UNIDAD LOS VOLCANES#2|BAE|4861|AGUASCALIENTES CENTRO#2|BAE|5034|CULTURA NAZCA#2|BAE|5409|FRACC. DEL VALLE#2|BAE|5412|COLINAS DE SAN IGNACIO#2|BAE|5639|ESFUERZO NACIONAL#2|BAE|5643|VISTAS DE ORIENTE#2|BAE|5682|PASEO DE LA CRUZ#2|BAE|5684|RODOLFO LANDEROS#2|BAE|5638|EL COBANO#2|BAE|5640|POZO BRAVO#2|BAE|2605|PASEOS DE AGUASCALIENTES#2|BAE|2914|GÓMEZ PORTUGAL#2|BAE|4845|VILLAS AGUASCALIENTES#2|BAE|4896|VILLA MONTAÑA#2|BAE|5200|PASEOS DE LA PROVIDENCIA#2|BAE|5224|MONTE VERDE AGS #2|BAE|5411|REFUGIO ESPARZA#2|BAE|5440|VILLA NATURA#2|BAE|5637|BOULEVARD GUADALUPANO#2|BAE|5683|GONZALEZ GARCIA#2|BAE|5221|ASUNCIÓN#2|BAE|5257|LA RIVERA#2|BAE|2892|BLVD GUADALUPANO LA FLORIDA#2|BAE|1213|MOLINOS#2|BAE|2437|VISTAS DE TESISTAN#2|BAE|2690|TRÉBOLES#2|BAE|2941|JARDIN VALLE MOLINOS#2|BAE|3333|SAN FRANCISCO TESISTAN#2|BAE|3334|PARQUES DE TESISTAN#2|BAE|4770|OROZCO GUTIÉRREZ#2|BAE|4799|MIRADOR DEL BOSQUE#2|BAE|5435|LA PERIQUERA#2|BAE|5436|LUCIO BLANCO#2|BAE|5678|VALLE MOLINOS#2|BAE|5394|RIO BLANCO TESISTAN #2|BAE|2161|LUIS ALCARAZ#2|BAE|2364|ESPERANZA GUADALAJARA#2|BAE|2515|JUAN ALVAREZ#2|BAE|2790|MUCEL#2|BAE|2792|SOTO Y GAMA#2|BAE|3192|BALCONES DE HUENTITAN#2|BAE|3377|EXPERIENCIA#2|BAE|3395|AV. ARTESANOS GUADALAJARA#2|BAE|3466|PARQUE REHILETE#2|BAE|3973|HUENTITAN EL ALTO#2|BAE|5210|RANCHO NUEVO#2|BAE|5698|PARQUE EL RETIRO#2|BAE|1214|MERCADO BOLA#2|BAE|1701|DIAZ DE LEÓN#2|BAE|1855|VALDEPEÑAS#2|BAE|2196|CARPINTEROS#2|BAE|2729|ALBERTO MORA#2|BAE|3251|TABACHINES#2|BAE|3258|VILLA DE GUADALUPE#2|BAE|3336|PASEO DE LAS AVES#2|BAE|3467|FEDERALISMO NORTE#2|BAE|3684|PLAZA HOGARES#2|BAE|5169|INDÍGENA #2|BAE|1700|AVENIDA DEL PARQUE#2|BAE|1854|ESTEBAN ALATORRE#2|BAE|1911|MEDRANO#2|BAE|2102|FRANCISCO SARABIA#2|BAE|2791|PRESA OSORIO#2|BAE|3161|PABLO MORENO#2|BAE|3286|JAVIER MINA II#2|BAE|3463|ADRIAN PUGA#2|BAE|3465|JADE#2|BAE|3468|LA TALPITA#2|BAE|4771|CAIRO FT#2|BAE|1988|VISTAS DEL PEDREGAL#2|BAE|2249|CELIS#2|BAE|3138|HACIENDA REAL#2|BAE|3425|BALCONES EL ROSARIO#2|BAE|3577|UNIDAD TONALTECAS#2|BAE|3949|JARDINES DE SANTIAGO#2|BAE|4678|LOMAS TONALÁ#2|BAE|4684|LAS PALMAS TONALÁ#2|BAE|4721|NUEVO VERGEL#2|BAE|4843|VALLE DE TONANTZIN #2|BAE|5680|TONALÁ#2|BAE|5359|MISIÓN ACUEDUCTO#2|BAE|5323|VILLA CAMPO #2|BAE|4998|LOMA REAL #2|BAE|1219|PRADERA#2|BAE|1256|CALÍOPE#2|BAE|1257|LOS CASTILLOS#2|BAE|1283|ATOTONILCO LEÓN#2|BAE|3601|MENORCA#2|BAE|3602|LOS NARANJOS#2|BAE|3690|CUENCA FLORIDA#2|BAE|3969|VALLE DE LEÓN#2|BAE|3971|BRISAS DEL LAGO#2|BAE|5205|FRACCIONAMIENTO LA PERA#2|BAE|1218|PARQUES DEL SUR#2|BAE|3600|VILLA SUR#2|BAE|3603|CEFERINO ORTIZ#2|BAE|3963|CONDESA#2|BAE|3966|VILLAS DE SAN JUAN#2|BAE|3968|JOYAS DE LA CASTILLA#2|BAE|3970|PASEO DE LA JOYA#2|BAE|5154|OMEGA#2|BAE|5170|DE LA MORADA #2|BAE|5690|10 DE MAYO#2|BAE|5145|BLVD EPSILON#2|BAE|5186|SAN CARLOS#2|BAE|1281|ALONSO DE TORRES#2|BAE|1282|ASTURIAS#2|BAE|1551|DEL CARMEN RINCÓN#2|BAE|1552|PURÍSIMA RINCÓN#2|BAE|1653|CONCEPCIÓN RINCÓN#2|BAE|1654|ANGELES GUANAJUATO#2|BAE|3689|BOSCO#2|BAE|5091|PERIODISTAS MEXICANOS #2|BAE|5148|PUERTA DORADA#2|BAE|5150|LOMA DORADA#2|BAE|1573|MAGISTERIAL IRAPUATO#2|BAE|2036|RENOVACIÓN#2|BAE|5414|PUNTO VERDE#2|BAE|5441|EL MILAGRO IRAPUATO#2|BAE|5443|SAN JUAN IRAPUATO#2|BAE|1220|FRANCISCO VILLA NORTE II#2|BAE|1285|PALOMARES#2|BAE|2935|GUANAJUATO ORIENTE#2|BAE|5254|JARDINES DEL RIO #2|BAE|5159|TORREMOLINOS #2|BAE|5252|RAMAL DE GUANAJUATO #2|BAE|1751|CAMINO A LÁZARO CARDENAS#2|BAE|1752|SAN JOSE TECOMÁN#2|BAE|1827|AV. MANZANILLO#2|BAE|1869|MARIMAR#2|BAE|1892|LA RESERVA#2|BAE|2014|TECOMÁN REAL DEL VALLE#2|BAE|2617|GENERAL NUNEZ#2|BAE|2618|JARDINES DE LA ESTANCIA#2|BAE|5475|EL YAQUI#2|BAE|5476|PABLO SILVA#2|BAE|5496|VILLAS DE BUGAMBILIAS#2|BAE|1291|TEMOXTITLAN#2|BAE|1807|BUGAMBILIAS#2|BAE|1913|PERIPLAZA#2|BAE|2416|SANTA LUCIA#2|BAE|2420|GUADALUPE HIDALGO#2|BAE|2633|RANCHO XAXALPA#2|BAE|3375|HÉROES PUEBLA#2|BAE|3376|SANTA CLARA#2|BAE|3482|JARDINES DEL SUR#2|BAE|3494|CONSTITUCIÓN PUEBLA#2|BAE|1289|AGUSTIN MELGAR#2|BAE|1290|BLVD. CLAVIJERO#2|BAE|1808|JARRITOS#2|BAE|1909|PLAZA BOSQUES#2|BAE|2124|90 PONIENTE#2|BAE|2417|BOSQUES DE CHAPULTEPEC#2|BAE|2603|AMALUQUILLA#2|BAE|2934|BOSQUES DE MANZANILLA#2|BAE|3599|SANTA ROSA PUEBLA#2|BAE|5287|DIAGONAL BENITO JUAREZ#2|BAE|5306|CANAL DE LA ROSA#2|BAE|5319|ALTO REFUGIO#2|BAE|5344|REAL DIAMANTE #2|BAE|5474|ARENAL CHACHAPA#2|BAE|1484|BENITO JUAREZ NORTE#2|BAE|1632|ESPERANZA AZCÓN#2|BAE|1658|DANTE#2|BAE|2494|PARAÍSO LAS DUNAS#2|BAE|2495|CIUDAD OLMECA#2|BAE|2967|COATZACOALCOS#2|BAE|2968|EL OLVIDO VILLA ALLENDE#2|BAE|2969|PLAYA SOL#2|BAE|1265|PLAYA LINDA#2|BAE|1266|COSTA DORADA#2|BAE|1267|RIO MEDIO#2|BAE|1937|PASEO DE OASIS#2|BAE|2637|POCITOS Y RIVERA#2|BAE|2907|ROMAIN#2|BAE|2936|CALLE 3#2|BAE|3708|DOS CAMINOS#2|BAE|3710|COLINAS DE SANTA FE#2|BAE|3960|FLOR DE MAYO#2|BAE|5408|RINCÓN VILLA LOS PINOS#2|BAE|5651|TARIMOYA#2|BAE|1859|CHOLULA#2|BAE|1910|25 PONIENTE#2|BAE|1971|LIBERTAD#2|BAE|1999|ROMERO VARGAS#2|BAE|2188|VALLE REAL ATLIXCO#2|BAE|2547|PUEBLA MOMOXPAN#2|BAE|3252|BELLO HORIZONTE#2|BAE|3493|CAMINO REAL A PUEBLA#2|BAE|4858|BOSQUES SANCTORUM#2|BAE|5023|LOS SAUCES #2|BAE|5100|LA SANTISIMA #2|BAE|5226|GRANJAS PUEBLA #2|BAE|5432|CALLE TLAXCALA #2|BAE|5537|VILLAS PUEBLA#2|BAE|5969|LAS TROJES CUAUTLANCINGO#2|BAE|1158|COLONIA VASCONCELOS#2|BAE|1226|CÁNDIDO AGUILAR#2|BAE|1227|CALLE 20#2|BAE|1228|ESTEBAN MORALES#2|BAE|1279|LAS VEGAS#2|BAE|1280|CAMINO A COATEPEC#2|BAE|2634|MANUEL NIETO#2|BAE|3959|YANEZ#2|BAE|5417|SUMIDERO#2|BAE|5494|ATENAS VERACRUZANAS#2|BAE|5650|BEETHOVEN#2|BAE|1537|CLAUVILLE#2|BAE|1680|CAFETALES DE CÓRDOBA#2|BAE|2012|SAN ROMÁN#2|BAE|2013|COLONIA ESPINAL#2|BAE|2557|VALSEQUILLO#2|BAE|2558|EJERCITO MEXICANO#2|BAE|2559|JUAN DE DIOS PEZA#2|BAE|2616|LAS PALMAS#2|BAE|5151|GARCICRESPO#2|BAE|5497|SANTA ISABEL CÓRDOBA#2|BAE|5498|SAN JOSE#2|BAE|1805|LA GUADALUPANA#2|BAE|1806|ORIÓN 2#2|BAE|1860|PARQUE ECOLÓGICO#2|BAE|1861|16 PONIENTE#2|BAE|1904|ORIÓN 1#2|BAE|2330|LA ACOCOTA#2|BAE|2440|ZONA MILITAR#2|BAE|3544|UNIDAD MILITAR#2|BAE|3584|SANTA CRUZ LOS ANGELES#2|BAE|3593|13 NORTE#2|BAE|5129|VILLA UNIVERSITARIA#2|BAE|5325|ANTIGUA CEMENTERA#2|BAE|1224|MADERO CENTRO#2|BAE|1258|CARRETERA A ATECUARO#2|BAE|1259|LOMAS DEL DURAZNO#2|BAE|1260|MICHOACÁN LA MARGARITA#2|BAE|1286|GUADALUPE MORELIA#2|BAE|2520|ARRIAGA MORELIA#2|BAE|3998|VILLAS DEL SOL MATEOS#2|BAE|3999|ARCOS DE MORELIA#2|BAE|5693|LOMAS DE GUAYANGAREO#2|BAE|5694|CALZADA JUAREZ#2|BAE|1221|ACAPULCO LA CAÑADA#2|BAE|1222|CUMBRES#2|BAE|1223|LAGUNA CHICA#2|BAE|1273|REFORMA ACAPULCO#2|BAE|1275|PALENQUE SAN AGUSTIN#2|BAE|2903|SINAI#2|BAE|3694|ACAPULCO BAJA CALIFORNIA#2|BAE|3994|LA ARENA VELADERO#2|BAE|3995|LA VENTA#2|BAE|3997|RENACIMIENTO CORREOS#2|BAE|1733|EXHIBIMEX#2|BAE|1777|LAGO MICHIGAN#2|BAE|2169|POPOTLA#2|BAE|2184|OBSERVATORIO#2|BAE|2206|MAR MEDITERRÁNEO#2|BAE|2255|PANTEÓN FRANCES#2|BAE|2321|COLEGIO MILITAR#2|BAE|4622|PLAZA LEGARIA#2|BAE|4662|SANTA MARÍA LA RIBERA#2|BAE|4674|JOSE MARTI#2|BAE|5636|RIVERA DE SAN COSME#2|BAE|1604|FERROCARRIL DE CINTURA#2|BAE|1635|BALDERAS#2|BAE|1641|GUERRERO#2|BAE|1668|CORREGIDORA#2|BAE|1669|DOCTORES#2|BAE|1734|FERNANDO RAMÍREZ#2|BAE|1738|LAGUNILLA#2|BAE|2134|DR. NAVARRO#2|BAE|4178|DR. VELASCO#2|BAE|4698|PINO SUAREZ#2|BAE|4740|LECUMBERRI#2|BAE|1730|AGRÍCOLA ORIENTAL#2|BAE|1949|CALLE 6#2|BAE|2129|CENTENO#2|BAE|2207|PLUTARCO ELÍAS CALLES#2|BAE|2229|AV. GUADALUPE#2|BAE|2265|CANAL DE SAN JUAN#2|BAE|2296|AZAFRÁN#2|BAE|2327|SANTIAGO IZTACALCO#2|BAE|3186|BARRIO SAN PEDRO#2|BAE|3497|METRO SANTA ANITA#2|BAE|4794|VIADUCTO PIEDAD#2|BAE|1229|SAN FELIPE DE JESUS#2|BAE|1504|GABRIEL HERNANDEZ#2|BAE|1563|PLAZA SAN JUAN#2|BAE|1643|PARQUE TEPEYAC#2|BAE|1843|PLATINO#2|BAE|1873|VICTORIA#2|BAE|2911|CITLALMINA#2|BAE|2990|GARRIDO LA VILLA#2|BAE|3106|ROMERO RUBIO EGIPTO#2|BAE|3318|CUAUHTÉMOC CENTENARIO#2|BAE|3662|GENERAL CARRERA#2|BAE|1535|CONGRESO DE LA UNIÓN#2|BAE|1640|FRAY SERVANDO#2|BAE|2158|IZTACCÍHUATL#2|BAE|2175|EJE 1 NORTE#2|BAE|3319|ALMEJA#2|BAE|3416|TRONCOSO#2|BAE|4759|PLAZA MIXHUCA FT#2|BAE|4846|CALLE 71 F#2|BAE|1503|AHUACATITLA#2|BAE|1787|LAS ARMAS#2|BAE|1836|CALZADA SAN ISIDRO#2|BAE|1942|TEZOZOMOC#2|BAE|2190|PASTEROS#2|BAE|2191|BARRIO LOS REYES#2|BAE|2777|EMILIANO ZAPATA#2|BAE|3328|SAN JUAN BAUTISTA#2|BAE|3388|GRIJALVA SAN ISIDRO#2|BAE|4623|XOCHINAHUAC#2|BAE|1499|PROHOGAR#2|BAE|1610|EJE CENTRAL#2|BAE|1673|MARTE#2|BAE|1907|GLORIETA CUITLÁHUAC#2|BAE|2237|PLAZA LA RAZA#2|BAE|2266|LOS GALLOS#2|BAE|2700|TOLNAHUAC#2|BAE|2893|LAS GRANJAS#2|BAE|3331|COSMOPOLITA#2|BAE|3414|PERALVILLO#2|BAE|4690|GLORIETA CAMARONES#2|BAE|1506|ROBERTO ESQUERRA#2|BAE|1796|VILLAS DE CUAUTEPEC#2|BAE|2118|CUAUTEPEC MADERO#2|BAE|2294|LA PATERA#2|BAE|2761|PONIENTE 140#2|BAE|2833|SANTA BARBARA#2|BAE|2844|CUAUTEPEC LA PASTORA#2|BAE|3317|CENTAURO DEL NORTE#2|BAE|4766|TEPANTONGO#2|BAE|4864|CALZADA TICOMÁN#2|BAE|2153|MIGUEL HIDALGO#2|BAE|2292|HÉROES DE PADIERNA#2|BAE|2722|PEDREGAL DE SAN NICOLÁS#2|BAE|2742|LOS TULIPANES#2|BAE|3343|CHICOASEN#2|BAE|3681|PICACHO AJUSCO#2|BAE|3695|TIZIMÍN#2|BAE|4660|ARROYO ENCINAL#2|BAE|4739|FUENTES BROTANTES#2|BAE|1674|TLÁHUAC CHALCO#2|BAE|1737|LA TURBA#2|BAE|2322|TLÁHUAC SANTA CATARINA#2|BAE|2708|JUAN BRETEL#2|BAE|2724|BARRIO LA GUADALUPITA#2|BAE|2889|CENICIENTA#2|BAE|2997|SAN JOSE TLAHUAC#2|BAE|3130|FRANCISCO JIMENEZ#2|BAE|3248|SAN LORENZO TEZONCO#2|BAE|4621|ZACATENCO#2|BAE|4767|LOS REYES TLÁHUAC#2|BAE|1644|PORTALES#2|BAE|1699|XOLA#2|BAE|2109|EJE 10#2|BAE|2170|DEL VALLE#2|BAE|2174|MIRAFLORES#2|BAE|2202|LA PURÍSIMA#2|BAE|3156|NINOS HÉROES DE CHAPULTEPEC#2|BAE|3190|PORTALES II#2|BAE|3261|ANGEL URRAZA#2|BAE|4624|MUNICIPIO LIBRE#2|BAE|1637|SANTA ISABEL#2|BAE|1987|NAUTLA#2|BAE|2177|EL MANTO#2|BAE|2232|VILLAS ESTRELLA#2|BAE|2277|ARNESES#2|BAE|2287|XOCHIQUETZAL#2|BAE|3573|SAN LUCAS#2|BAE|4579|SAN NICOLÁS TOLENTINO#2|BAE|1480|VERGEL#2|BAE|1569|LA ERMITA#2|BAE|1696|COLONIAL IZTAPALAPA#2|BAE|1822|XALPA IZTAPALAPA#2|BAE|1903|GUADALUPE VICTORIA#2|BAE|2132|PLAN DE AYALA#2|BAE|2701|VILLAS FELICHE#2|BAE|2703|OJITO DE AGUA#2|BAE|2719|LA HERA#2|BAE|4782|REFORMA POLITICA#2|BAE|1784|GABRIEL GONZALEZ#2|BAE|1964|ACATITLA NORTE#2|BAE|2147|CARRIÓN#2|BAE|2149|HIDALGO MONROY#2|BAE|2256|PARAJE ZACATEPEC#2|BAE|2258|SASATRAS#2|BAE|2770|11 DE AGOSTO#2|BAE|4019|ESCUTIA DEL MORAL#2|BAE|1790|SANTA ÚRSULA#2|BAE|1853|PEDRO RAMÍREZ#2|BAE|1996|POPOCATÉPETL#2|BAE|2150|KENNEDY#2|BAE|2721|NATIVITAS#2|BAE|2834|LA CEBADA XOCHIMILCO#2|BAE|2878|CEDRAL#2|BAE|3306|EL MIRADOR#2|BAE|4889|EJIDO COAPA FT#2|BAE|1533|OLIVAR DEL CONDE#2|BAE|1888|COLINAS DEL SUR#2|BAE|2183|CERRO DEL JUDÍO#2|BAE|2394|LA MALINCHE#2|BAE|2804|VASCO DE QUIROGA#2|BAE|2841|PUENTE COLORADO#2|BAE|3160|CAMINO ANTIGUO A TOLUCA#2|BAE|3265|PLAZA DE LOS DINAMOS#2|BAE|4189|CAMINO A SANTA FE#2|BAE|1225|PLAZA CUAHUNAHUAC#2|BAE|1264|LOMAS DEL CARRIL#2|BAE|2406|ALTAVISTA#2|BAE|2607|SINALOA MORELOS#2|BAE|3389|SUMIYA#2|BAE|3391|INSURGENTES JIUTEPEC#2|BAE|3650|AZTECA TEMIXCO#2|BAE|4847|PLAZA ACTORES#2|BAE|4921|EUFEMIO#2|BAE|5024|PUNTA VERDE#2|BAE|5449|PERPETUO SOCORRO#2|BAE|5479|CARITINO MALDONADO#2|BAE|1278|LA BARONA#2|BAE|2441|ANTONIO BARONA#2|BAE|2658|HERMENEGILDO GALEANA#2|BAE|3133|10 DE ABRIL#2|BAE|3386|MORELOS JIUTEPEC#2|BAE|3387|CIVAC#2|BAE|3392|AHUATLAN#2|BAE|3649|PLAZA CIVAC#2|BAE|3663|CUERNAVACA UNIVERSIDAD#2|BAE|4768|SONORA#2|BAE|5426|CARRETERA CUERNAVACA#2|BAE|1047|SAN RAFAEL ZAMORA#2|BAE|1287|METRÓPOLIS MORELIA#2|BAE|1288|MISIÓN DEL VALLE#2|BAE|1475|AV. LÁZARO CARDENAS#2|BAE|3696|HACIENDA DEL SOL#2|BAE|5452|ALICANTE#2|BAE|5453|AV. DEL ARBOL#2|BAE|5499|CENTRAL LINDAVISTA#2|BAE|5647|PRADOS VERDES#2|BAE|1543|PLAN DE SAN LUIS#2|BAE|1638|INDEPENDENCIA URUAPAN#2|BAE|1865|CONSTITUCIÓN 1814#2|BAE|1868|CARDENAS APATZINGÁN#2|BAE|3010|CAMPONUBES#2|BAE|3697|VILLAS DEL PEDREGAL#2|BAE|3698|VILLA MAGNA#2|BAE|5455|EL VERGEL#2|BAE|5457|PALITO VERDE#2|BAE|5695|TENENCIA DE MORELOS#2|BAE|1881|IGNACIO COMONFORT TOLUCA#2|BAE|2478|TOLUCA UNIVERSIDAD#2|BAE|2569|IZCALLI TOLUCA#2|BAE|2904|FEDERACION SANTA ANA#2|BAE|2906|TEPALTITLAN#2|BAE|2961|SAN PEDRO TOTOLTEPEC#2|BAE|2979|ANDRES QUINTANA ROO#2|BAE|3652|LAGO DEL OSO#2|BAE|4860|COLINAS DEL SOL#2|BAE|5615|TOLUCA AVENIDA MORELOS#2|BAE|1277|SAN LUIS TLATILCO#2|BAE|1711|LOS REMEDIOS#2|BAE|1887|GLORIETA MORELOS#2|BAE|1906|MINAS PALACIO#2|BAE|2295|CERROS DE GUANAJUATO#2|BAE|2747|LUIS DONALDO COLOSIO#2|BAE|3180|SAN RAFAEL CHAMAPA II#2|BAE|3205|NOPALA#2|BAE|3344|AVENIDA LAS HUERTAS#2|BAE|3345|FERROCARRILES NACIONALES#2|BAE|3495|LOMA COLORADA#2|BAE|1645|SAN MATEO#2|BAE|1707|VIVEROS DE ASÍS#2|BAE|1781|CALACOAYA#2|BAE|1967|LOMA NEVADA#2|BAE|2198|LOMAS DE ATIZAPÁN#2|BAE|3185|PALACIO ATIZAPÁN#2|BAE|3323|EL ROSARIO#2|BAE|3369|PINGÜICA#2|BAE|3510|PENITAS CEDROS#2|BAE|4707|AV. UNO#2|BAE|1595|PLAZA EL CAMINO TLALNEPANTLA#2|BAE|1599|PLAZA EL CAMINO CUAUTITLÁN#2|BAE|1600|PLAZA EL CAMINO LECHERÍA#2|BAE|1602|PLAZA EL CAMINO TULTITLÁN#2|BAE|1800|EL OLIVO#2|BAE|1849|PLAZA COVADONGA#2|BAE|2753|IZCALLI PIRÁMIDE#2|BAE|3449|CHALMA TLALNEPANTLA#2|BAE|4738|SAN LUCAS PATONI#2|BAE|5655|INDECO#2|BAE|240|RINCONADA DEL LAGO DE GUADALUPE#2|BAE|1839|LA COLMENA#2|BAE|1914|JUAREZ BARRÓN#2|BAE|1915|MIRADOR DEL CONDE#2|BAE|2231|SAN IDELFONSO#2|BAE|2253|HACIENDA DEL PEDREGAL II#2|BAE|2298|UNIDAD MAGISTERIAL#2|BAE|2755|NICOLÁS ROMERO#2|BAE|3052|CASA BLANCA JUAREZ#2|BAE|3374|INDEPENDENCIA ROMERO#2|BAE|1454|AV. ZACATECAS#2|BAE|2758|CLAUSTROS#2|BAE|2775|TEPOJACO#2|BAE|2818|QUETZALCÓATL#2|BAE|2842|AZALEA#2|BAE|3129|PRIVADA ZAPATA#2|BAE|3162|TEPALCATLI#2|BAE|3543|INFONAVIT IZCALLI#2|BAE|3944|JOYAS DEL ALBA#2|BAE|4641|SAN MARTIN OBISPO#2|BAE|1000|HUEHUETOCA PASEO DEL REY#2|BAE|1129|CITARA#2|BAE|1740|RANCHO SAN ANTONIO#2|BAE|1936|PEGASO#2|BAE|2139|PIRACANTO#2|BAE|2575|EL DORADO#2|BAE|2942|PASEOS DE HUEHUETOCA#2|BAE|4190|PASEOS DE EUROPA#2|BAE|5077|PASEO DE LA MANZANA#2|BAE|5147|PASEOS DE ASIA#2|BAE|5360|DORADO#2|BAE|6173|SANTA TERESA#2|BAE|1998|VILLAS DE SAN JOSE#2|BAE|2130|LA MARISCALA#2|BAE|2187|EL TESORO#2|BAE|2217|TULTITLÁN#2|BAE|2235|VÍA LOPEZ PORTILLO#2|BAE|2274|REAL DEL BOSQUE#2|BAE|3105|BENITO JUAREZ#2|BAE|3305|IZCALLI DEL VALLE TULTITLÁN#2|BAE|3372|AMPLIACION EL TESORO#2|BAE|3528|AMPLIACION BUENAVISTA#2|BAE|1182|EJE 3#2|BAE|1261|JARDINES DE LOS CLAUSTROS#2|BAE|1530|LAS FLORES#2|BAE|1565|SAN RAFAEL II#2|BAE|1735|HACIENDA SAN PABLO#2|BAE|2238|CANOSAS#2|BAE|2273|PASEOS DE TULTEPEC#2|BAE|2307|RESIDENZA COACALCO#2|BAE|2308|JUAN DIEGO COACALCO#2|BAE|4119|SAN PABLO#2|BAE|4192|EJE 8#2|BAE|1126|LEANDRO VALLE#2|BAE|1646|VISITACIÓN#2|BAE|1722|PARQUE SAN MATEO#2|BAE|1944|HACIENDA DE CUAUTITLÁN#2|BAE|1945|LA ALBORADA#2|BAE|1947|JOYAS DE CUAUTITLÁN#2|BAE|1968|MELCHOR OCAMPO#2|BAE|2100|GALAXIA CUAUTITLÁN#2|BAE|2251|AV. TOLUCA#2|BAE|3262|UNIDAD MORELOS 3A SECC#2|BAE|5071|TEOLOYUCAN CENTRO#2|BAE|1771|LA TRINIDAD GEO#2|BAE|1948|SANTA INÉS#2|BAE|2365|HACIENDA NEXTLALPAN#2|BAE|2477|LOS ENCINOS#2|BAE|2727|HACIENDA SANTA INÉS#2|BAE|2985|NUEVO VILLAS DE LA LAGUNA#2|BAE|3204|LAS PLAZAS ZUMPANGO#2|BAE|5002|VILLAS NORTE ZUMPANGO#2|BAE|5033|LOS OLIVOS#2|BAE|5635|NUEVO PASEO DE ZUMPANGO#2|BAE|1547|MÉXICO TUXPAN#2|BAE|1548|MITLA#2|BAE|2442|HÉROES EL PEDREGAL#2|BAE|2443|HÉROES TIZAYUCA#2|BAE|2571|EL SAUCILLO#2|BAE|4578|MARTINICA TIZAYUCA#2|BAE|4853|PASEOS DE CHAVARRÍA#2|BAE|4863|ESMERALDA SAN ALFONSO#2|BAE|4874|SANTA JULIA#2|BAE|4918|LA MINAS CHAVARRIA#2|BAE|4919|VILLAS DE PACHUCA#2|BAE|5103|NUEVO PEDREGAL #2|BAE|5269|PASEOS DE LA PLATA #2|BAE|5326|BOSQUES DEL PEÑAR#2|BAE|5616|JOSE LUIS MORA#2|BAE|5617|LOS TUZOS#2|BAE|1697|GRANJAS INDEPENDENCIA#2|BAE|1698|SAN JUAN IXHUATEPEC#2|BAE|1965|AMAPOLA#2|BAE|2268|TEPIC XALOSTOC#2|BAE|2323|TEPETATES#2|BAE|2759|DURAZNO#2|BAE|2773|LA CONCHA#2|BAE|2849|JUCAR#2|BAE|3104|ALTAVILLA#2|BAE|3158|LOURDES SUR 34#2|BAE|1505|JARDINES DE MORELOS#2|BAE|1564|5 DE FEBRERO#2|BAE|1709|GRIETA ECATEPEC#2|BAE|1748|VÍA MORELOS II#2|BAE|1786|PUERTO RICO#2|BAE|2203|NORTE 8#2|BAE|2275|REAL DEL VALLE#2|BAE|2279|LAS AMÉRICAS#2|BAE|2702|QUERÉTARO ECATEPEC#2|BAE|4644|AMÉRICAS INDEPENDENCIA#2|BAE|1455|CENTRO ECATEPEC#2|BAE|1566|BOSQUES DE MÉXICO#2|BAE|1567|JARDINES DE TECÁMAC#2|BAE|1636|ORQUÍDEAS#2|BAE|1789|LOS CHOPOS#2|BAE|1847|HÉROES ECATEPEC IV#2|BAE|2165|FIDEPAR#2|BAE|2272|PACIFICO ECATEPEC#2|BAE|3169|FRANCISCO VILLA REP#2|BAE|3448|ESCULTORICOS#2|BAE|5095|BOULEVARD JARDINES#2|BAE|1837|TECÁMAC CENTRO#2|BAE|1882|AHUEHUETE#2|BAE|1884|CIPRÉS#2|BAE|1985|CERVANTES DEL RIO#2|BAE|2152|LOMAS DE SAN PEDRO#2|BAE|2159|VALLE SAN RAFAEL#2|BAE|2160|VALLE DE SAN GABRIEL#2|BAE|2280|OZUMBILLA#2|BAE|2728|HACIENDA OJO DE AGUA#2|BAE|3572|REAL DEL CID#2|BAE|5039|SAN AGUSTIN TECAMAC#2|BAE|1362|ACUITLAPILCO#2|BAE|1531|COSTITLAN#2|BAE|1782|HÉROES ECATEPEC III#2|BAE|1838|JOSE MA MORELOS#2|BAE|1851|TEXCOCO CENTRO#2|BAE|1940|RANCHO SAN MIGUEL#2|BAE|2760|LA MORENITA#2|BAE|2984|LOS REYES CHICOLOAPAN#2|BAE|3491|VIOLETA#2|BAE|1742|CIELITO LINDO#2|BAE|1946|HOMBRES ILUSTRES#2|BAE|2119|RIVA PALACIO#2|BAE|2200|AMANECER RANCHERO#2|BAE|2234|MONUMENTO NEZAHUALCÓYOTL#2|BAE|2257|RAUL ROMERO#2|BAE|2822|VICENTE VILLADA#2|BAE|2832|MARAVILLAS#2|BAE|4699|SOR JUANA INÉS DE LA CRUZ#2|BAE|1905|ARTESANOS#2|BAE|1935|EL PUERTO CHIMALHUACÁN#2|BAE|1969|PESCADORES#2|BAE|2233|LA PERLA#2|BAE|2704|MANANTIALES#2|BAE|2802|RANCHO GRANDE#2|BAE|3181|CIRUELOS#2|BAE|3182|ESPERANZA#2|BAE|3282|SINDICALISMO#2|BAE|1200|CHIMALPA#2|BAE|1357|DEL CANAL#2|BAE|2131|LOS REYES#2|BAE|2172|VALLE DE LOS REYES#2|BAE|2260|VALLE VERDE#2|BAE|2723|TLALPIZAHUAC#2|BAE|2793|ACAQUILPAN#2|BAE|2796|CAMINO REAL A CANUTILLO#2|BAE|3314|ARIES#2|BAE|4176|AMPLIACION LAS AGUILAS#2|BAE|1358|TLAPALA CHALCO#2|BAE|1779|LAS PALMAS III#2|BAE|1995|PASEOS DE CHALCO#2|BAE|2396|LOS HÉROES CHALCO#2|BAE|2560|BOULEVARD CHALCO#2|BAE|3254|VILLAS DE SAN MARTIN#2|BAE|4795|ÁLAMOS CHALCO#2|BAE|5401|VIENTOS IXTAPALUCA#2|BAE|5032|CEDIS CHALCO#2|BAE|1732|SOLIDARIDAD CHALCO#2|BAE|2278|AXAYACATL#2|BAE|2752|GUADALUPE POSADAS#2|BAE|3202|CUAUHTÉMOC IL#2|BAE|3255|CRISANTEMOS#2|BAE|3273|EX HACIENDA XICO#2|BAE|3277|NORTE 12#2|BAE|3278|SUR 14#2|BAE|3516|PROVIDENCIA CHALCO#2|BAE|4148|ALFREDO DEL MAZO#2|BAE|2241|REAL DEL PARQUE#2|BAE|2663|NUEVO TABASCO#2|BAE|2975|GAVIOTAS SUR#2|BAE|2976|PALMITAS#2|BAE|5098|CEDIS VILLAHERMOSA #2|BAE|5271|PALMA AFRICANA#2|BAE|5272|OTOCH BUGAMBILIAS #2|BAE|5273|CIELO NUEVO#2|BAE|5275|VILLAS DEL MAR#2|BAE|5276|VILLAS DEL REY#2|BAE|5279|PASEO DE JACARANDAS#2|BAE|5280|PASEO EL CIRUELO#2|BAE|5283|PASEO EL LAUREL#2|BAE|5307|PARAISO MAYA#2|BAE|5322|MISIÓN DE LAS FLORES #2|BAE|5390|LOS TULES#2|BAE|5439|LEONA VICARIO #2|BAE|1520|TIXCACAL#2|BAE|1639|BARRIO SAN ROMÁN#2|BAE|2254|PACABTUN#2|BAE|2583|SAMULA#2|BAE|2592|ITZIMNA#2|BAE|2608|JUAN PABLO SUR#2|BAE|2642|MÉRIDA CALLE 41#2|BAE|5223|CEDIS MÉRIDA - KANASIN#2|BAE|5274|CAUCEL 114#2|BAE|5278|UMAN PIEDRA DE AGUA#2|BAE|5314|LOS ALMENDROS#2|BAE|5320|PALMERAS CAUCEL#2|BAE|5327|CAUCEL 69#2|BAE|5391|NUEVA MULSAY#2|BAE|1461|CUARTA SUR ORIENTE#2|BAE|2497|JARDINES DEL GRIJALVA#2|BAE|2498|QUINTA ORIENTE NORTE#2|BAE|2499|LOS TULIPANES TUXTLA#2|BAE|2964|FIDEL VELAZQUEZ#2|BAE|5482|LA HORMIGA#2|BAE|5484|PERIFÉRICO NORTE#3|MB|1583|SAN QUINTÍN#3|MB|3367|MANEADERO#3|MB|4963|CAMALÚ#3|MB|5675|JAVIER MINA#3|MB|1953|SONOYTA#3|MB|3300|CUERVOS#3|MB|3368|GUADALUPE VICTORIA ROMO#3|MB|5400|MAR DE CORTES#3|MB|1478|MAGDALENA DE KINO#3|MB|1710|SANTA ANA#3|MB|2247|LÁZARO GUTIÉRREZ#3|MB|2924|LA DOCE#3|MB|2450|PUEBLO YAQUI#3|MB|4744|ASCENSIÓN#3|MB|2363|CRUZ DE ELOTA#3|MB|2449|JUAN JOSE RÍOS#3|MB|2594|VILLA JUÁREZ#3|MB|2694|LOS MOCHIS CENTRO#3|MB|2866|VIÑEDOS#3|MB|2983|GUASAVE CENTRO SALTILLO#3|MB|3678|HUATABAMPO#3|MB|3737|EL FUERTE#3|MB|4717|VILLA JUÁREZ CENTRO#3|MB|4883|SINALOA DE LEYVA#3|MB|5674|ESCUINAPA#3|MB|1587|LAS VARAS - COMPOSTELA#3|MB|1863|XALISCO#3|MB|2061|IXTLÁN DEL RIO#3|MB|2455|SAN BLAS BATALLÓN#3|MB|3549|SAN VICENTE LAS PALMAS#3|MB|3550|SAN JOSE DEL VALLE#3|MB|4813|PLAYA PEÑITA#3|MB|5667|COMPOSTELA#3|MB|1349|CUENCAMÉ#3|MB|1440|NUEVO IDEAL#3|MB|1718|SANTIAGO PAPASQUIARO#3|MB|1960|GUADALUPE VICTORIA#3|MB|2144|VICENTE GUERRERO#3|MB|2341|CANATLÁN#3|MB|2982|VILLA UNIÓN POANAS#3|MB|3403|PALADIO#3|MB|4572|EL SALTO PUEBLO NUEVO#3|MB|5183|PLAZA PAPASQUIARO#3|MB|5398|BERMEJILLO#3|MB|1472|MEOQUI#3|MB|1606|SAUCILLO#3|MB|1766|MADERA#3|MB|2212|OJINAGA#3|MB|2300|VICENTE  #3|MB|2588|BOSQUES DE ALDAMA#3|MB|2710|GUACHOCHI#3|MB|4629|SAN JUANITO#3|MB|1437|RUIZ#3|MB|1955|NOPOLO#3|MB|2698|PRADERA DORADA#3|MB|3570|VILLA NAYARIT#3|MB|3712|TECUALA#3|MB|4101|ACAPONETA#3|MB|4115|SANTIAGO IXCUINTLA#3|MB|5668|TUXPAN NAYARIT#3|MB|1761|ALLENDE#3|MB|4057|ALLENDE#3|MB|4058|MÚZQUIZ#3|MB|4704|ZARAGOZA COAHUILA#3|MB|3085|RIO GRANDE#3|MB|3153|SOMBRERETE#3|MB|3219|JUAN ALDAMA#3|MB|3564|JALPA#3|MB|3659|TLALTENANGO DE SANCHEZ ROMÁN#3|MB|4172|CALERA CENTRO#3|MB|4650|JUCHIPILA NORTE#3|MB|4664|RÍO GRANDE SUR#3|MB|5610|VALPARAÍSO#3|MB|2928|SANTA MARÍA CENTRO#3|MB|5114|VILLA DE REYES#3|MB|5248|CD SATELITE #3|MB|1120|DR. ARROYO#3|MB|2470|TAMUIN#3|MB|2587|CARDENAS#3|MB|2927|CERRITOS#3|MB|3464|CD. DEL MAÍZ BARRAGÁN#3|MB|4834|CHARCAS#3|MB|5108|DR. ARROYO HOSPITAL#3|MB|5215|CARDENAS CENTRO#3|MB|1246|SALINAS VICTORIA#3|MB|1541|MIGUEL ALEMAN#3|MB|1586|CIÉNEGA DE FLORES#3|MB|1706|DIAZ ORDAZ#3|MB|4047|SABINAS HIDALGO#3|MB|3979|CERRALVO#3|MB|4094|SAN FERNANDO#3|MB|4564|CAMARGO#3|MB|4733|CHINA NL#3|MB|4763|VILLAS DEL ARCO II#3|MB|5302|MEZQUITAL#3|MB|5665|ANÁHUAC#3|MB|5666|HIDALGO#3|MB|1820|PARRAS#3|MB|3563|SAN BUENAVENTURA#3|MB|4046|FRANCISCO I. MADERO#3|MB|4816|HÉRCULES#3|MB|1071|XILITLA#3|MB|1121|AXTLA#3|MB|1242|EBANO#3|MB|1374|GONZALEZ MANTE#3|MB|1819|TAMAZUNCHALE#3|MB|3021|XICOTÉNCATL#3|MB|4706|TANQUIAN DE ESCOBEDO#3|MB|4836|EL NARANJO NORTE#3|MB|4904|TAMAZUNCHALE NORTE#3|MB|5242|SOTO LA MARINA #3|MB|5602|ALDAMA#3|MB|1245|NOCHISTLÁN DE MEJÍA#3|MB|1651|OJO CALIENTE#3|MB|2508|SALINAS HIDALGO#3|MB|3048|JEREZ#3|MB|3937|VILLANUEVA#3|MB|4574|LORETO CENTRO#3|MB|4786|LUIS MOYA SUR#3|MB|5106|SALINAS NORTE#3|MB|5246|PINOS ZACATECAS #3|MB|1168|TEQUISQUIAPAN#3|MB|1244|PEDRO ESCOBEDO#3|MB|1479|SANTA ELENA#3|MB|1729|PLUTARCO ELÍAS CALLES#3|MB|2086|APASEO EL ALTO#3|MB|2850|JALPAN CENTRO#3|MB|3244|CADEREYTA#3|MB|4080|APASEO EL GRANDE#3|MB|4167|SANTA ROSA JÁUREGUI#3|MB|4708|LOS ENCINOS EL MARQUÉS #3|MB|4748|VIÑEDOS QUERÉTARO#3|MB|5059|EZEQUIEL MONTES#3|MB|5060|GLORIETA PEDRO ESCOBEDO #3|MB|5109|APASEO EL GRANDE SUR #3|MB|5088|TOLIMAN#3|MB|1412|VILLAGRÁN#3|MB|2017|VALLE DE SANTIAGO#3|MB|2018|SALVATIERRA#3|MB|2058|COMONFORT#3|MB|2593|SAN FELIPE#3|MB|2595|TARIMORO#3|MB|2826|JERÉCUARO#3|MB|3716|JARAL DEL PROGRESO#3|MB|4168|JUVENTINO ROSAS#3|MB|5116|JUVENTINO ROSAS SUR #3|MB|5131|EMPALME ESCOBEDO #3|MB|5340|PLAZA YURIRIA#3|MB|2461|TAMAYO#3|MB|3431|PLAZA SAN DIEGO#3|MB|5397|CIRUELO#3|MB|1162|TEQUILA#3|MB|1190|AMECA PATRIA#3|MB|1438|ACATLÁN DE JUAREZ#3|MB|1591|SAN MARTIN HIDALGO#3|MB|1647|TALA OESTE#3|MB|1648|COCULA#3|MB|1812|LIENZO#3|MB|1409|IXTAPA#3|MB|4630|TECOLOTLÁN LIENZO CHARRO#3|MB|4093|JOCOTEPEC#3|MB|5608|MAGDALENA#3|MB|5669|AHUALULCO DE MERCADO#3|MB|2510|TIZAPÁN#3|MB|1716|TLAJOMULCO#3|MB|1113|PUERTECITO DE LA VIRGEN#3|MB|1719|VILLA TEXTIL#3|MB|2067|ENCARNACIÓN#3|MB|2113|PABELLÓN LIBRAMIENTO#3|MB|2815|CALVILLO#3|MB|3009|RINCÓN DE ROMOS#3|MB|3220|ROMITA#3|MB|3407|SAN FRANCISCO DE LOS ROMOS#3|MB|4180|TEOCALTICHE#3|MB|4649|RINCÓN DE ROMOS PLAZA#3|MB|3538|CUERÁMARO#3|MB|4130|ABASOLO#3|MB|3676|MANUEL DOBLADO#3|MB|5303|CAÑAVERAL#3|MB|5195|ABASOLO PONIENTE#3|MB|1122|CAPILLA DE GUADALUPE#3|MB|1154|ARANDAS#3|MB|1163|ATOTONILCO#3|MB|1614|JAMAY#3|MB|1715|JUAN DE LA BARRERA#3|MB|2244|LA BARCA#3|MB|4179|ZAPOTLANEJO#3|MB|4829|NUEVA ANDALUCÍA#3|MB|5042|AGUA BLANCA#3|MB|5430|PONCITLÁN#3|MB|4083|SAN MIGUEL EL ALTO#3|MB|2925|COLOTLÁN#3|MB|4747|VALLE DE LOS MOLINOS#3|MB|4570|YAHUALICA#3|MB|1411|TUXPAN#3|MB|1449|TAMAZULA DE GORDIANO#3|MB|2019|AUTLÁN DE NAVARRO#3|MB|2059|SAYULA#3|MB|2958|ARMERÍA#3|MB|3154|BRAVO#3|MB|3197|EL GRULLO OESTE#3|MB|3575|UNIÓN DE TULA#3|MB|4164|CIHUATLÁN#3|MB|4645|SAN PATRICIO MELAQUE#3|MB|5603|CUAUHTÉMOC#3|MB|1589|ZACOALCO#3|MB|1166|AGUA DULCE#3|MB|2020|LAS CHOAPAS#3|MB|2114|CATEMACO#3|MB|3935|SANTIAGO TUXTLA#3|MB|1240|GUTIERREZ ZAMORA CENTRO#3|MB|1539|ÁLAMO#3|MB|1607|PUEBLO VIEJO#3|MB|1982|BLVD. JUAREZ#3|MB|2039|TANTOYUCA#3|MB|2040|PANUCO#3|MB|2088|XICOTEPEC#3|MB|2875|COATZINTLA#3|MB|3013|TEMPOAL DE SANCHEZ#3|MB|3594|LA UNO#3|MB|4146|VILLA AVILA CAMACHO#3|MB|4182|NARANJOS#3|MB|5048|SAN RAFAEL#3|MB|5234|PLATON DE SANCHEZ#3|MB|1077|TECAMACHALCO#3|MB|1276|ACAJETE CENTRO#3|MB|1864|5 DE MAYO#3|MB|1893|LIBRES#3|MB|1977|AMOZOC#3|MB|2285|HUEJOTZINGO#3|MB|3124|TLATLAUQUITEPEC#3|MB|3301|TEPEACA#3|MB|4145|ACATZINGO#3|MB|4162|ZACAPOAXTLA#3|MB|4749|CHOLULA MBU#3|MB|4884|CUACNOPALAN#3|MB|4908|TECAMACHALCO UNIVERSIDAD#3|MB|5198|CALPAN SAN ANDRES CALPAN#3|MB|1165|HUATUSCO#3|MB|1241|TRES VALLES#3|MB|1477|CIUDAD SERDÁN#3|MB|1596|EL SECO SAN SALVADOR#3|MB|2085|PEROTE#3|MB|2812|AJALPAN#3|MB|2814|CUITLÁHUAC#3|MB|2876|IXTACZOQUITLÁN#3|MB|2929|PASO DEL MACHO#3|MB|3366|COSCOMATEPEC#3|MB|4144|ALTOTONGA#3|MB|4673|ESPERANZA INDEPENDENCIA#3|MB|5009|ARCOS TLACHICHUCA#3|MB|5673|FORTÍN DE LAS FLORES#3|MB|1167|TLAPACOYAN#3|MB|1193|ISLA VERACRUZ#3|MB|1783|PLAYA VICENTE#3|MB|1814|CARDEL#3|MB|2411|PIEDRAS NEGRAS#3|MB|2471|LERDO DE TEJADA#3|MB|2739|CARLOS A. CARRILLO#3|MB|3008|MISANTLA#3|MB|3174|BANDERILLA#3|MB|3672|XICO#3|MB|3934|SOLEDAD DE DOBLADO#3|MB|4689|JUAN RODRÍGUEZ CLARA#3|MB|1410|PAPALOTLA#3|MB|1418|CALPULALPAN#3|MB|1540|ACATLÁN#3|MB|1954|HUAMANTLA#3|MB|2055|ZACATLÁN#3|MB|2145|NORTE CHIGNAHUAPAN#3|MB|2427|TEOLOCHOLCO#3|MB|3232|TLAXCO#3|MB|3240|SAN PABLO DEL MONTE#3|MB|3565|CONTLA#3|MB|4147|NANACAMILPA#3|MB|4169|ZACATELCO#3|MB|4635|ZACATLÁN NORTE#3|MB|5244|TETELA DE OCAMPO#3|MB|4905|ATANA LINDAVISTA#3|MB|1780|CUITZEO#3|MB|3046|MARAVATÍO#3|MB|3938|ZINAPÉCUARO#3|MB|5178|ALVARO OBREGON #3|MB|1444|TELOLOAPAN#3|MB|1721|ARCELIA#3|MB|1818|HUETAMO#3|MB|1980|XOCHITEPEC#3|MB|2898|CIUDAD DE HUITZUCO#3|MB|3126|PUENTE DE IXTLA#3|MB|3736|LIBRAMIENTO XOXOCOTLA#3|MB|1593|SAN MARCOS#3|MB|3675|AYUTLA DE LOS LIBRES#3|MB|4731|SAN LUIS ACALTAN#3|MB|1978|CHILAPA DE ALVAREZ#3|MB|2096|ZUMPANGO DEL RIO#3|MB|2413|FLAMINGOS#3|MB|2786|TIXTLA#3|MB|3739|COYUCA DE BENÍTEZ#3|MB|4129|TÉCPAN#3|MB|1901|OAXTEPEC#3|MB|2811|AXOCHIAPAN#3|MB|1191|LOS REYES SALGADO#3|MB|1231|PURÉPERO DE ECHAIZ#3|MB|1243|PERIBÁN DE RAMOS#3|MB|1431|COTIJA#3|MB|2015|PURUÁNDIRO#3|MB|2955|TANGANCÍCUARO#3|MB|3088|YURÉCUARO#3|MB|4882|CARRANZA SUR#3|MB|1123|TEPALCATEPEC#3|MB|1708|COALCOMÁN#3|MB|2069|NUEVA ITALIA#3|MB|2316|BUENAVISTA TOMATLÁN#3|MB|3243|TACÁMBARO#3|MB|3660|QUIROGA#3|MB|3677|ARIO DE ROSALES#3|MB|4124|LOMBARDÍA#3|MB|4787|TARETÁN#3|MB|1030|AMECAMECA#3|MB|1069|CUAUHTÉMOC#3|MB|1501|OZUMBA#3|MB|1519|TLALMANALCO#3|MB|3940|JUCHITEPEC#3|MB|1714|16 DE SEPTIEMBRE#3|MB|1979|TENANGO#3|MB|2669|SANTIAGUITO#3|MB|2783|VILLA GUERRERO#3|MB|3150|CAPULTITLAN#3|MB|3363|TLALCILALCALPAN#3|MB|3411|COATEPEC HARINAS#3|MB|3738|SANTA CRUZ ATIZAPÁN#3|MB|1081|CIUDAD SAHAGÚN#3|MB|1125|IXMIQUILPAN#3|MB|1502|CUAUTEPEC#3|MB|1759|ZIMAPÁN#3|MB|2087|ACTOPAN#3|MB|2434|TEPEAPULCO#3|MB|2820|ATOTONILCO SUR#3|MB|2824|APAN#3|MB|3050|VALLE DEL MEZQUITAL#3|MB|3089|ZACUALTIPÁN#3|MB|3234|TEZONTEPEC DE ALDAMA#3|MB|4835|JUAREZ TEPATEPEC #3|MB|5049|TECOZAUTLA SUR #3|MB|5132|REAL DEL MONTE#3|MB|5245|SAN FELIPE ORIZATLAN#3|MB|5670|TLAHUELILPAN#3|MB|1713|AURORA#3|MB|1755|APAXCO#3|MB|1813|OTUMBA#3|MB|2210|ACAMBAY#3|MB|2281|JESUS CHAPARRO#3|MB|2785|TENERIA#3|MB|2823|EL ORO DE HIDALGO#3|MB|3047|JILOTEPEC#3|MB|3122|NEXTLALPAN#3|MB|3487|TEQUIXQUIAC#3|MB|3654|VILLA DEL CARBON#3|MB|4081|TLAXCOAPAN#3|MB|4718|CAMINO RECURSOS HIDRAULICOS #3|MB|4976|MOLINA ENRIQUEZ #3|MB|5010|ATITALAQUIA#3|MB|1194|IXTLAHUACA#3|MB|1921|SAN MATEO ATARASQUILLO#3|MB|1961|VILLA VICTORIA#3|MB|2507|RANCHO SAN JUAN#3|MB|2683|JOCOTITLÁN#3|MB|2782|OCOYOACAC#3|MB|3012|TEMOAYA#3|MB|3151|SAN ANDRES CUEXCONTITLAN#3|MB|3152|SAN PABLO AUTOPAN#3|MB|3364|TEJUPILCO CRISTÓBAL#3|MB|5304|LA CRESPA #3|MB|1650|CIUDAD IXTEPEC#3|MB|5427|MATÍAS ROMERO#3|MB|1377|PINOTEPA PLAZA#3|MB|1615|LOMA BONITA#3|MB|1758|PINOTEPA NACIONAL#3|MB|1816|MIAHUATLÁN#3|MB|1922|PUERTO ESCONDIDO#3|MB|2816|PUTLA#3|MB|3125|POCHUTLA#3|MB|3175|SAN ANTONINO#3|MB|3408|VILLA DE ETLA#3|MB|3545|EJUTLA DE CRESPO#3|MB|3674|ZIMATLÁN#3|MB|4732|RÍO GRANDE CENTRO#3|MB|5299|NOCHISTLAN#3|MB|1239|PICHUCALCO#3|MB|1762|CUNDUACÁN#3|MB|1951|VILLA PARRILLA#3|MB|1963|ZARAGOZA#3|MB|2332|TECOLUTILLA#3|MB|3049|TEAPA#3|MB|3084|HUIMANGUILLO#3|MB|3571|ZAPATA MONTECRISTO#3|MB|3658|BALANCÁN#3|MB|3693|PLAYAS#3|MB|3711|BENITO JUAREZ#3|MB|4035|TENOSIQUE DE PINO SUAREZ#3|MB|4060|REFORMA CHIAPAS#3|MB|4670|YAJALÓN#3|MB|1435|UMÁN CENTRO#3|MB|1919|OXKUTZCAB#3|MB|1952|KANASÍN#3|MB|1983|TICUL#3|MB|2469|TIXKOKOB#3|MB|2817|TEKAX#3|MB|3109|HALACHÓ#3|MB|3551|IZAMAL#3|MB|4061|TIZIMÍN#3|MB|4131|HUNUCMÁ#3|MB|4132|MOTUL#3|MB|4636|MAXCANÚ NORTE#3|MB|4993|CALLE 50#3|MB|2104|ESCÁRCEGA#3|MB|2286|COBA - TULUM#3|MB|2289|FELIPE CARRILLO PUERTO#3|MB|2877|CALKINÍ#3|MB|2950|SEYBAPLAYA#3|MB|3656|HECELCHAKÁN#3|MB|1434|TONALÁ HIELERA#3|MB|1894|CENTRAL SUR#3|MB|2828|SUCHIAPA SUR#3|MB|2926|PIJIJIAPAN#3|MB|2943|OCOZOCOAUTLA SUR#3|MB|2977|TONALÁ PLAZA#3|MB|3568|BERRIOZÁBAL SUR#3|MB|3585|SAN FERNANDO CHIAPAS#3|MB|4032|CINTALAPA#3|MB|4826|TAPANATEPEC #3|MB|1230|TUXTLA CHICO#3|MB|1450|CIUDAD HIDALGO#3|MB|1649|CACAHOATÁN#3|MB|2115|MAPASTEPEC#3|MB|2825|MOTOZINTLA DE MENDOZA#3|MB|4079|HUIXTLA#3|MB|4161|COMALAPA#3|MB|4672|MAZATÁN#3|MB|5604|ESCUINTLA#3|MB|5605|ESTACIÓN HUEHUETÁN#3|MB|1237|BOCHIL#3|MB|1254|ACALA#3|MB|1424|SIMOJOVEL#3|MB|1432|OCOSINGO#3|MB|1655|JALTENANGO#3|MB|2143|TEOPISCA#3|MB|2246|LAS MARGARITAS#3|MB|2492|DEL CERRILLO#3|MB|4761|EL PARRAL#";

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createListItem(webUrl, listName, itemProperties, success, failure) {
  $.ajax({
    url: webUrl + "/_vti_bin/listdata.svc/" + listName,
    type: "POST",
    processData: false,
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(itemProperties),
    headers: {
      Accept: "application/json;odata=verbose"
    },
    success: function(data) {
      success(data.d);
      //alert("LISTO")
    },
    error: function(data) {
      failure(data.responseJSON.error);
    }
  });
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function obtener_adicionales_basetiendas(ingresa) {
  var base_tiendas_tpp_1 = base_tiendas_tpp.split("#");
  var bnd = "|||";
  for (var i = 0; i < base_tiendas_tpp_1.length; i++) {
    var base_tiendas_tpp_2 = base_tiendas_tpp_1[i].split("|");
    if (ingresa == base_tiendas_tpp_2[2]) {
      bnd =
        base_tiendas_tpp_2[0] +
        "|" +
        base_tiendas_tpp_2[1] +
        "|" +
        base_tiendas_tpp_2[3];
    }
  }
  return bnd;
}
//--------------------------------------------------------------
var conteos_registro = 0;
var max_tam_conteo = 0;
var FINAL_DATA_DETERMINANTE = "";

function previo_registros() {
  max_tam_conteo = DATA_DETERMINANTE_IMP.length - 1;
  conteos_registro = conteos_registro + 1;
  var previo_det = obtener_adicionales_basetiendas(
    DATA_DETERMINANTE_IMP[conteos_registro]
  );
  var previo_det_1 = previo_det.split("|");
  DATA_TIENDA_IMP = previo_det_1[2];
  ID_FORMATO_IMP = previo_det_1[0];
  DATA_FORMATO_IMP = previo_det_1[1];
  FINAL_DATA_DETERMINANTE = DATA_DETERMINANTE_IMP[conteos_registro];
  guardar_datos_base();
}
//--------------------------------------------------------------
function guardar_datos_base() {
  NOMBRE_MOSTRAR = DATA_NOMBRE_IMP + " " + DATA_APELLIDO_IMP;
  var taskProperties = {
    ID_ASOCIADO: ID_ASOCIADO_IMP,
    DATA_NOMBRE: DATA_NOMBRE_IMP,
    DATA_APELLIDO: DATA_APELLIDO_IMP,
    DATA_DETERMINANTE: FINAL_DATA_DETERMINANTE,
    DATA_TIENDA: DATA_TIENDA_IMP,
    ID_FORMATO: ID_FORMATO_IMP,
    DATA_FORMATO: DATA_FORMATO_IMP,
    CADENA_CHECKER_TPP: "",
    FECHA_ULTIMA: cadena_hora_fecha,
    INCIDENTES_CHECKER: ""
  };
  createListItem(
    "https://teams.wal-mart.com/sites/TrainTheTrainners",
    "CHECKER_B3",
    taskProperties,
    function(task) {
      console.log(
        "Moduloentrenamiento_clinica" + task.TaskName + " has been created"
      );
      if (conteos_registro < max_tam_conteo) {
        previo_registros();
      } else {
        buscar_id_asociado(ID_ASOCIADO_IMP);
      }
    },
    function(error) {
      console.log(JSON.stringify(error));
    }
  );
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
var NOMBRE_MOSTRAR = "";

function cargar_pantalla_cuatro() {
  document.getElementById("pantalla_cuatro").style.display = "block";
  document.getElementById("pantalla_tres").style.display = "none";
  document.getElementById("pantalla_dos").style.display = "none";
  document.getElementById("pantalla_uno").style.display = "none";
  document.getElementById("mm_mostrar_nombre").innerHTML = NOMBRE_MOSTRAR;
  document.cookie = "idusuario=" + ID_ASOCIADO_IMP;
  //alert(cadena_larga_datos);
  mostrar_nombres_tiendas_carga();
  inicio(1);
  if (lotomo == 1) {
    var vas_tas = readCookie("cadenas");
    cargar_determinante_checker(vas_tas);
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
var transferencia_cache_determinante = "";

function mostrar_nombres_tiendas_carga() {
  var salida =
    '<table cellpadding=0 cellspacing=0  width=200  border=0 style="font-size: 1px;" >';
  var cadena_larga_datos_1 = cadena_larga_datos.split("-|-");
  for (var i = 0; i < cadena_larga_datos_1.length - 1; i++) {
    var cadena_larga_datos_2 = cadena_larga_datos_1[i].split("#|#");
    var transferencia_datos_det =
      cadena_larga_datos_2[3] +
      "~" +
      cadena_larga_datos_2[4] +
      "~" +
      cadena_larga_datos_2[5] +
      "~" +
      cadena_larga_datos_2[6] +
      "~" +
      cadena_larga_datos_2[7] +
      "~" +
      cadena_larga_datos_2[8] +
      "~" +
      cadena_larga_datos_2[9] +
      "~" +
      cadena_larga_datos_2[10];
    transferencia_cache_determinante = transferencia_datos_det;
    salida =
      salida +
      "<tr>" +
      "<td width=200 height=20px align=left>" +
      '<a href="#" onclick="cargar_determinante_checker(' +
      "'" +
      transferencia_datos_det +
      "'" +
      ')"><font face=arial style="font-size:12px;color:black">' +
      cadena_larga_datos_2[3] +
      " " +
      cadena_larga_datos_2[4] +
      " </font></a>" +
      " </td>" +
      "</tr>" +
      "<tr>" +
      "<td width=200 height=3px align=center>" +
      "&nbsp;";
    " </td>" + "</tr>";
  }
  salida = salida + "</table>";
  document.getElementById("tppdeterminantes_car").innerHTML = salida;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
var carga_determinante_tpps = "";
var carga_formato_tpps = "";
var carga_tienda_tpps = "";
var carga_id_registro_ttps = "";
var previo_carga_id_registro_ttps = "";

function cargar_determinante_checker(vcarg) {
  //alert("COOKIES:"+transferencia_cache_determinante)
  document.cookie = "cadenas=" + vcarg;
  var vcarg_1 = vcarg.split("~");
  if (bnd_primera_vez != 0) {
    previo_carga_id_registro_ttps = carga_id_registro_ttps;
  }
  carga_id_registro_ttps = vcarg_1[7];
  if (bnd_primera_vez == 0) {
    previo_carga_id_registro_ttps = vcarg_1[7];
  }
  buscar_cadena_checs(carga_id_registro_ttps, vcarg);
}
var bnd_primera_vez = 0;

//---------------------------------------------------------------------------------------------------------------------
function actualizar_cadena_checks(fnda, updcadena) {
  // alert(fnda)
  //alert(updcadena)
  var url =
    "https://teams.wal-mart.com/sites/TrainTheTrainners/_vti_bin/listdata.svc/CHECKER_B3(" +
    fnda +
    ")";
  var mods = {
    CADENA_CHECKER_TPP: updcadena
  };
  var body = JSON.stringify(mods);
  //update, another example
  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    processData: false,
    headers: {
      "If-Match": "*",
      "X-HTTP-Method": "MERGE"
    },
    url: url,
    data: body,
    dataType: "json",
    success: function() {
      console.log("success");
      alert("Los cambios de esa tienda ha sido guardados correctamente");
    },
    error: function() {
      console.log("error");
    }
  });
}
//---------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function buscar_cadena_checs(datfiltro, vcarg) {
  var previo_cadena_check_tpp_u = "";
  txt_filtro = "?$filter=Identificador%20eq%20" + datfiltro + "";
  //alert(txt_filtro)
  getListItemsTodos2010(
    "https://teams.wal-mart.com/sites/TrainTheTrainners",
    "CHECKER_B3" + txt_filtro,
    function(data) {
      var items = data.results;
      // Add all the new items
      for (var i = 0; i < items.length; i++) {
        previo_cadena_check_tpp_u = items[i].CADENA_CHECKER_TPP;
      }
      continuar_cargar_checks(previo_cadena_check_tpp_u, vcarg);
      txt_filtro = "";
      console.log(data.results);
    },
    function(error) {
      console.log(JSON.stringify(error));
    }
  );
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function continuar_cargar_checks(tsss, vcarg) {
  var previo_cadena_check_tpp_u = tsss;
  //alert("entro333"+previo_cadena_check_tpp_u)
  var vcarg_1 = vcarg.split("~");
  var previo_cadena_checks = previo_cadena_check_tpp_u;
  if (bnd_primera_vez != 0) {
    var opcion = confirm(
      "Se guardará los cambios de la tienda, antes de cargar la nueva. ¿Estás de acuerdo?"
    );
    if (opcion == true) {
      menu_mostrar(0);
      actualizar_cadena_checks(previo_carga_id_registro_ttps, cadena_checks);
    } else {
      menu_mostrar(0);
      return;
    }
  }
  carga_determinante_tpps = vcarg_1[0];
  carga_formato_tpps = vcarg_1[3];
  carga_tienda_tpps = vcarg_1[1];
  menu_mostrar(0);
  //alert(vcarg)
  //alert (vcarg_1[4])
  if (previo_cadena_checks == "null") {
    previo_cadena_checks = "";
  }
  if (previo_cadena_checks == null) {
    previo_cadena_checks = "";
  }
  cadena_checks = previo_cadena_checks;
  //alert("mas+"+carga_formato_tpps)
  if (carga_formato_tpps == "BA") {
    base_items = base_items_BA;
  } else {
    if (carga_formato_tpps == "BAE") {
      base_items = base_items_BAE;
    } else {
      base_items = base_items_MB;
      //alert(base_items)
    }
  }
  inicio(2);
  bnd_primera_vez = 1;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function pres_actualizar_cadena_checks(prelis) {
  actualizar_cadena_checks(prelis, cadena_checks);
}

function guardar_incidencia(fguar) {
  var datos_evidencia =
    eval('document.getElementById("inc_' + fguar + '").value') + "*|*" + fguar;
  var texto = datos_evidencia.replace(/\n/g, " ");
  buscar_cadena_incidencia(carga_id_registro_ttps, texto);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function buscar_cadena_incidencia(datfiltro, vcarg) {
  var previo_cadena_check_tpp_u = "";
  txt_filtro = "?$filter=Identificador%20eq%20" + datfiltro + "";
  //alert(txt_filtro)
  getListItemsTodos2010(
    "https://teams.wal-mart.com/sites/TrainTheTrainners",
    "CHECKER_B3" + txt_filtro,
    function(data) {
      var items = data.results;
      // Add all the new items
      for (var i = 0; i < items.length; i++) {
        previo_cadena_check_tpp_u = items[i].INCIDENTES_CHECKER;
      }
      continuar_cargar_incidencias(datfiltro, previo_cadena_check_tpp_u, vcarg);
      txt_filtro = "";
      console.log(data.results);
    },
    function(error) {
      console.log(JSON.stringify(error));
    }
  );
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
function continuar_cargar_incidencias(fnda, updcadena, vcarg) {
  // alert(fnda)
  //alert(updcadena)
  var salida_inc = vcarg + "$#$" + updcadena;
  var url =
    "https://teams.wal-mart.com/sites/TrainTheTrainners/_vti_bin/listdata.svc/CHECKER_B3(" +
    fnda +
    ")";
  var mods = {
    INCIDENTES_CHECKER: salida_inc
  };
  var body = JSON.stringify(mods);
  //update, another example
  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    processData: false,
    headers: {
      "If-Match": "*",
      "X-HTTP-Method": "MERGE"
    },
    url: url,
    data: body,
    dataType: "json",
    success: function() {
      console.log("success");
      alert(
        "La incidencia se ha guardado correctamente, ya puedes cerrar la ventana"
      );
    },
    error: function() {
      console.log("error");
    }
  });
}
//---------------------------------------------------------------------------------------------------------------------

function salir_tpp() {
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  document.cookie = "idusuario=SALIR";
  document.cookie = "cadenas=SALIR";
  location.href = "inicio.aspx";
}

function readCookie(name) {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
            name.replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ),
        "$1"
      )
    ) || null
  );
}

var lotomo = 0;

function iniciar_carga() {
  //alert(ID_FORMATO_IMP)
  var lectura_coki = readCookie("idusuario");
  var lectura_coki_1 = readCookie("cadenas");
  if (lectura_coki == null) {
    document.getElementById("pantalla_uno").style.display = "block";
  } else {
    if (lectura_coki == "SALIR") {
      document.getElementById("pantalla_uno").style.display = "block";
    } else {
      //alert(lectura_coki_1)
      if (lectura_coki_1 == null) {
        buscar_id_asociado(lectura_coki);
      } else {
        if (lectura_coki_1 == "SALIR") {
          buscar_id_asociado(lectura_coki);
        } else {
          lotomo = 1;
          buscar_id_asociado(lectura_coki);
        }
      }
    }
  }
}

function enlace(y) {
  if (y == 1) {
    window.open(
      "https://teams.wal-mart.com/sites/TrainTheTrainners/PRUEBAS_B3",
      "_blank"
    );
  }
  //window.open("https://teams.wal-mart.com/sites/TrainTheTrainners/CHECKER_B3_2023_MB_BA_BAE", '_blank');
  if (y == 2) {
    window.open(
      "https://teams.wal-mart.com/sites/TrainTheTrainners/sco/sitioweb/index.aspx#nav-logo-menu-social",
      "_blank"
    );
  }
}

function registro_datos_det() {
  /* var n_id_asociado =  document.getElementById("N_ID_ASOCIADO").value
                    if (n_id_asociado=="")
                       {
                           
                           document.getElementById("N_ID_ASOCIADO").focus();
                           abrir_ventana(0,"AVISO|El campo del número de asociado esta vacío")
                       
                           return
                       }
  
                       
                       if (isNaN(n_id_asociado))
                       {
                       
                           document.getElementById("N_ID_ASOCIADO").focus();
                           abrir_ventana(0,"AVISO|El número de asociado es inválido")   
                       
                           return 
  
                        }
  
  
                   var tam_n_id_asociado = n_id_asociado.length 
                   
                   if (tam_n_id_asociado<=4)
                       {
                       
                           document.getElementById("N_ID_ASOCIADO").focus();
                           abrir_ventana(0,"AVISO|El número de asociado es incorrecto")   
                       
                           return 
  
                        }*/
  var n_data_nombre = document.getElementById("DATA_NOMBRE").value;
  if (n_data_nombre == "") {
    document.getElementById("DATA_NOMBRE").focus();
    abrir_ventana(0, "AVISO|El campo de nombre esta vacío");
    return;
  }
  var n_data_apellido = document.getElementById("DATA_APELLIDO").value;
  if (n_data_apellido == "") {
    document.getElementById("DATA_APELLIDO").focus();
    abrir_ventana(0, "AVISO|El campo de apellido esta vacío");
    return;
  }
  var num_tiendas_asig = document.getElementById("NUMERO_DETERMINANTE").value;
  if (num_tiendas_asig == "0") {
    document.getElementById("NUMERO_DETERMINANTE").focus();
    abrir_ventana(0, "AVISO|Selecciona el número de tiendas asignadas");
    return;
  }
  var tnt = 0;
  var cad_det_asignadas_im = "";
  if (num_tiendas_asig != "0") {
    for (var i = 0; i < num_tiendas_asig; i++) {
      eval(
        "var num_tiendas_asig_data_" +
          (i + 1) +
          ' =document.getElementById("DATA_DET_' +
          (i + 1) +
          '").value'
      );
      eval(
        "var truedet" +
          (i + 1) +
          " =validar_determinante(num_tiendas_asig_data_" +
          (i + 1) +
          ")"
      );
      eval(
        "if (truedet" +
          (i + 1) +
          '==""){  abrir_ventana(0,"AVISO|El campo de número de determinante ' +
          (i + 1) +
          ' está vacío") ; tnt=1; }'
      );
      eval(
        "if (truedet" +
          (i + 1) +
          '==-1){  abrir_ventana(0,"AVISO|El número de determinante ' +
          (i + 1) +
          ' no exíste o es una determinante no considerada para este checker") ;tnt=1; }'
      );
      eval(
        "cad_det_asignadas_im = cad_det_asignadas_im+num_tiendas_asig_data_" +
          (i + 1) +
          '+"|"'
      );
    }
  }
  if (tnt == 0) {
    var cad_det_asignadas_im_1 = cad_det_asignadas_im.split("|");
    cad_det_asignadas_im_1.sort();
    var bds = 0;
    for (var i = 1; i < cad_det_asignadas_im_1.length; i++) {
      if (cad_det_asignadas_im_1[i] == cad_det_asignadas_im_1[i + 1]) {
        bds = 1;
      }
    }
    if (bds == 1) {
      abrir_ventana(0, "AVISO|Ingresaste determinantes repetidas");
      return;
    }
    DATA_NOMBRE_IMP = n_data_nombre.toUpperCase();
    DATA_APELLIDO_IMP = n_data_apellido.toUpperCase();
    DATA_DETERMINANTE_IMP = cad_det_asignadas_im_1;
    FECHA_ULTIMA_IMP = cadena_hora_fecha;
    previo_registros();
    document.getElementById("loader_1").style.display = "block";
    document.getElementById("bt_reg").style.display = "none";
  }
}
//----------------------------------------------------------
var ID_ASOCIADO_IMP = "";
var DATA_NOMBRE_IMP = "";
var DATA_APELLIDO_IMP = "";
var DATA_DETERMINANTE_IMP = "";
var DATA_TIENDA_IMP = "";
var ID_FORMATO_IMP = "";
var DATA_FORMATO_IMP = "";
var FECHA_ULTIMA_IMP = "";
//----------------------------------------------------------
var cadena_hora_fecha = "";
var hoy = new Date();
var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
var fecha =
  hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
cadena_hora_fecha = fecha + "|" + hora;
//----------------------------------------------------------
function validar_determinante(ingresa) {
  var base_tiendas_tpp_1 = base_tiendas_tpp.split("#");
  var bnd = -1;
  for (var i = 0; i < base_tiendas_tpp_1.length; i++) {
    var base_tiendas_tpp_2 = base_tiendas_tpp_1[i].split("|");
    if (ingresa == base_tiendas_tpp_2[2]) {
      bnd = 1;
    }
  }
  return bnd;
}

function cambio_dets() {
    var num_tiendas_asig = document.getElementById("NUMERO_DETERMINANTE").value;
    var salida_dd =
      "<table cellpadding=0 cellspacing=0 width=290 border=0 style='font-size: 1px;' bgcolor='#7fd818'>" +
      "<tr>" +
      "<td width=290 height=20px align=left valign=middle style='padding-left:20px;'>" +
      "<font face=arial style='font-size:16px;color:black'>";
  
    if (num_tiendas_asig == 1) {
      salida_dd += "Confirma la determinante";
    } else {
      salida_dd += "Confirma las determinantes";
    }
  
    salida_dd +=
      "</font>" +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td width=290 height=10px>&nbsp;</td>" +
      "</tr>";
  
    for (var i = 0; i < num_tiendas_asig; i++) {
      salida_dd +=
        "<tr>" +
        '<td width=250 height=20px align=left valign=middle style="padding-left:20px;">' +
        '<input id="DATA_DET_' +
        (i + 1) +
        '" name="DATA_DET_' +
        (i + 1) +
        '" maxlength="5" type="text" style="font-size:12px;width:250px;height:20px; outline:none;border:0;">' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td width=290 height=10px>&nbsp;</td>" +
        "</tr>";
    }
  
    if (num_tiendas_asig != 0) {
      document.getElementById("mas_det1").innerHTML = salida_dd;
    } else {
      document.getElementById("mas_det1").innerHTML = "";
    }
  }
  
  // Carga dinámica de opciones
  function cargarOpcionesTiendas() {
    var selectElement = document.getElementById("NUMERO_DETERMINANTE");
    var dat_periodo = 13; // Número máximo de opciones
  
    for (var i = 1; i < dat_periodo; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.textContent = i + " tienda(s)";
      selectElement.appendChild(option);
    }
  }
  
  // Ejecutar la función de carga de opciones al cargar la página
  window.onload = function () {
    cargarOpcionesTiendas();
  };
  