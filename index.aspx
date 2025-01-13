<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BA - DISPONIBILIDAD TOTAL</title>

    <!-- Estilos CSS -->
    <link rel="stylesheet" href="CSS/estilos.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Script personalizado -->
    <script src="js/index.js"></script>
</head>

<body onload="iniciar_carga();">
    <!-- Contenedor principal -->
    <table cellpadding="0" cellspacing="0" width="100%" height="100%" border="0">
        <tr>
            <td width="100%" height="100%" valign="middle" align="center">

                <!-- Pantalla Uno -->
                <div id="pantalla_uno" style="display:none">
                    <table cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tr>
                            <td class="top-left-corner"></td>
                            <td class="top-bar"></td>
                            <td class="top-right-corner"></td>
                        </tr>
                        <tr>
                            <td class="left-space"></td>
                            <td class="center-content">
                                <!-- Imagen del logo -->
                                <img src="images/logoomnicheckerb31.png" alt="Logo">
                            </td>
                            <td class="right-space"></td>
                        </tr>
                        <tr>
                            <td class="left-space"></td>
                            <td class="form-container">
                                <!-- Formulario de entrada -->
                                <table class="input-form">
                                    <tr>
                                        <td class="form-title">
                                            Ingresa tu número de asociado
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="form-input">
                                            <input type="text" id="ID_ASOCIADO" name="ID_ASOCIADO" maxlength="7"
                                                placeholder="Número de asociado">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="form-actions">
                                            <button onclick="valida_det();" type="button" class="btn btn-warning">
                                                Aceptar
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="right-space"></td>
                        </tr>
                    </table>
                </div>

                <!-- Pantalla Dos -->
                <div id="pantalla_dos" style="display:none">
                    <!-- Contenido de la pantalla dos -->
                </div>

                <!-- Pantalla Tres -->
                <div id="pantalla_tres" style="display:none">
                    <!-- Contenido de la pantalla tres -->
                </div>

                <!-- Pantalla Cuatro -->
                <div id="pantalla_cuatro" style="display:none">
                    <!-- Contenido de la pantalla cuatro -->
                </div>

            </td>
        </tr>
    </table>

    <!-- Modal -->
    <div id="tvesModal" class="modalContainer">
        <div class="modal-content">
            <span class="close" onclick="cerrarModal()">X</span>
            <div id="modal_contenido">
                <!-- Contenido dinÃ¡mico del modal -->
            </div>
        </div>
    </div>

</body>

<!-- Scripts -->
<script>
    // FunciÃ³n para cerrar el modal
    function cerrarModal() {
        document.getElementById("tvesModal").style.display = "none";
    }
</script>

</html>
