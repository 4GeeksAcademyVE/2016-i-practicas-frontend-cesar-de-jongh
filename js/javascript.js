$('.bxslider').bxSlider();

function validarForm(){
	var flag = true;
	if($('#nombre').val()!=""){
		var pregMatch = /^[a-zA-Z\s]*$/;
		var nombre = $('#nombre').val();
		if(!nombre.match(pregMatch)){
			alert("El nombre no puede contener numeros");
			$('#nombre').val("");
			$('#nombre').focus();
			flag = false;
		}else{
			flag = true;
		}
	}
		if($('#apellido').val()!=""){
		var pregMatch = /^[a-zA-Z\s]*$/;
		var apellido = $('#apellido').val();
		if(!apellido.match(pregMatch)){
			alert("El apellido no puede contener numeros");
			$('#apellido').val("");
			$('#apellido').focus();
			flag = false;
		}else{
			flag = true;
		}
	}
		if($('#email').val()!=""){
		var pregMatch = /^[a-zA-Z@\s]*$/;
		var email = $('#email').val();
		if(!email.match(pregMatch)){
			alert("Debe ingresar un email valido");
			$('#email').val("");
			$('#email').focus();
			flag = false;
		}else{
			flag = true;
		}
	}
		if($('#telefono').val()!=""){
		var pregMatch = /^[0-9]*$/;
		var telefono = $('#telefono').val();
		if(!telefono.match(pregMatch)){
			alert("El telefono solo debe contener numeros");
			$('#telefono').val("");
			$('#telefono').focus();
			flag = false;
		}else{
			flag = true;
		}
	}


	return flag;
	
}

