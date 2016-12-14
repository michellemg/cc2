/*
$(function() {
		 $("#regi23s").click(function() {
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
					
					});
					
					function Enviamos(data){       
						alert(data+"Registrado con exito!!");
						
					}
				
				});*/ 