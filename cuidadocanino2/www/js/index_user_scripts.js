/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #regis */
    
    
        /* button  #sesion */
    
    
        /* button  #regreg */
    $(document).on("click", "#regreg", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #Ineta */
    
    
        /* button  #Ineta */
    
    
        /* button  #IniciRaz1 */
    
    
        /* button  #IniciRaz1 */
    $(document).on("click", "#IniciRaz1", function(evt)
    {
         /*global activate_page */
         activate_page("#razas2"); 
         return false;
    });
    
        /* button  #Ra1sig */
    $(document).on("click", "#Ra1sig", function(evt)
    {
         /*global activate_page */
         activate_page("#razas2"); 
         return false;
    });
    
        /* button  #InicRa1 */
    $(document).on("click", "#InicRa1", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #AnteRaza2 */
    $(document).on("click", "#AnteRaza2", function(evt)
    {
         /*global activate_page */
         activate_page("#razas"); 
         return false;
    });
    
        /* button  #SuguienteRaz2 */
    $(document).on("click", "#SuguienteRaz2", function(evt)
    {
         /*global activate_page */
         activate_page("#razas3"); 
         return false;
    });
    
        /* button  #SiguienteEnfer */
    $(document).on("click", "#SiguienteEnfer", function(evt)
    {
         /*global activate_page */
         activate_page("#Enfermedades2"); 
         return false;
    });
    
        /* button  #AnteriEnf */
    $(document).on("click", "#AnteriEnf", function(evt)
    {
         /*global activate_page */
         activate_page("#Enfermedades"); 
         return false;
    });
    
        /* button  #InicLoca */
    $(document).on("click", "#InicLoca", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #InicioCon */
    $(document).on("click", "#InicioCon", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #regis */
    
    
        /* button  #regis */
    
    
        /* button  #sesion */
    $(document).on("click", "#sesion", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #Ineta */
    $(document).on("click", "#Ineta", function(evt)
    {
         /*global activate_page */
         activate_page("#Etapas"); 
         return false;
    });
    
        /* button  #InRaz */
    $(document).on("click", "#InRaz", function(evt)
    {
         /*global activate_page */
         activate_page("#razas"); 
         return false;
    });
    
        /* button  #Inenf */
    $(document).on("click", "#Inenf", function(evt)
    {
         /*global activate_page */
         activate_page("#Enfermedades"); 
         return false;
    });
    
        /* button  #Incons */
    $(document).on("click", "#Incons", function(evt)
    {
         /*global activate_page */
         activate_page("#Consejos"); 
         return false;
    });
    
        /* button  #InLo */
    $(document).on("click", "#InLo", function(evt)
    {
         /*global activate_page */
         activate_page("#LocalesRecomendados"); 
         return false;
    });
    
        /* button  #inieta */
    $(document).on("click", "#inieta", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #InicioEnferme */
    $(document).on("click", "#InicioEnferme", function(evt)
    {
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* button  #regis */
    $(document).on("click", "#regis", function(evt)
    {
         /*global activate_page */
         activate_page("#modregistro"); 
         return false;
    });
    
        /* button  #regis23 */
    $(document).on("click", "#regis23", function(evt)
    {
        //aqui
        var LNombre = $("#txtnombre").val();
                    var LApellidos = $("#txtapellidos").val();
                    var LCorreo_Electronico= $("#txtcorreo").val();
                    var LContrasena = $("#txtcontrasena").val();
                    var LMunicipio = $("#mun").val();
                    
	   				
					
		    $("#txtnombre").val(" ");
                    $("#txtApellidos").val(" ");
                    $("#txtCorreo_Electronico").val(" ");
                    $("#txtcontrasena").val(" ");
                    $("#txtmun").val(" ");
	    			
					
			 $.ajax({type: "POST", 
			  url: "http://localhost/cc2/agregar3.php",
	                      	data: ({Nombre: LNombre,Apellidos: LApellidos,Correo_Electronico: LCorreo_Electronico,contrasena: LContrasena, Municipio: LMunicipio}),
	                      cache: false,
	                      dataType: "text",
	                      success: Enviamos
	                    });
        
        
        function Enviamos(data){       
						alert(data+"Registrado con exito!!");
						
					}
         /*global activate_page */
         activate_page("#Inicio"); 
         return false;
    });
    
        /* graphic button  #BeagleRa */
    $(document).on("click", "#BeagleRa", function(evt)
    {
         /*global activate_page */
         activate_page("#Beagle"); 
         return false;
    });
    
        /* button  #ChiiAnte */
    $(document).on("click", "#ChiiAnte", function(evt)
    {
         /*global activate_page */
         activate_page("#razas"); 
         return false;
    });
    
        /* button  #AntBeag */
    $(document).on("click", "#AntBeag", function(evt)
    {
         /*global activate_page */
         activate_page("#razas"); 
         return false;
    });
    
        /* button  #RestLocal */
    $(document).on("click", "#RestLocal", function(evt)
    {
         /*global activate_page */
         activate_page("#Dalmata"); 
         return false;
    });
    
        /* button  #InicioLo */
    $(document).on("click", "#InicioLo", function(evt)
    {
         /*global activate_page */
         activate_page("#LocalesRecomendados"); 
         return false;
    });
    
        /* button  #EstLocal */
    $(document).on("click", "#EstLocal", function(evt)
    {
         /*global activate_page */
         activate_page("#Veterinaria"); 
         return false;
    });
    
        /* button  #EstInic */
    $(document).on("click", "#EstInic", function(evt)
    {
         /*global activate_page */
         activate_page("#LocalesRecomendados"); 
         return false;
    });
    
        /* button  #IniEst */
    $(document).on("click", "#IniEst", function(evt)
    {
         /*global activate_page */
         activate_page("#LocalesRecomendados"); 
         return false;
    });
    
        /* button  #VeteLocal */
    $(document).on("click", "#VeteLocal", function(evt)
    {
         /*global activate_page */
         activate_page("#Veterinariasi"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
