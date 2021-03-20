function Change_CRIvalue(){
	document.getElementById("originCRI").value = parseFloat(document.getElementById("CRI_slider").value);
}

function Change_MAXvalue(){
	document.getElementById("originMAX").value = parseFloat(document.getElementById("MAX_slider").value);
}

function Change_CRIslidervalue(){
	document.getElementById("CRI_slider").value = parseFloat(document.getElementById("originCRI").value);
}

function Change_MAXslidervalue(){
	document.getElementById("MAX_slider").value = parseFloat(document.getElementById("originMAX").value);
}



function Add_CRIslider(){
	document.getElementById("CRI_slider").value = parseFloat(document.getElementById("CRI_slider").value) + 0.1;
	document.getElementById("originCRI").value = parseFloat(document.getElementById("CRI_slider").value);
}

function Dec_CRIslider(){
	document.getElementById("CRI_slider").value = parseFloat(document.getElementById("CRI_slider").value) - 0.1;
	document.getElementById("originCRI").value = parseFloat(document.getElementById("CRI_slider").value);
}



function Add_MAXslider(){
	document.getElementById("MAX_slider").value = parseFloat(document.getElementById("MAX_slider").value) + 0.1;
	document.getElementById("originMAX").value = parseFloat(document.getElementById("MAX_slider").value);
}

function Dec_MAXslider(){
	document.getElementById("MAX_slider").value = parseFloat(document.getElementById("MAX_slider").value) - 0.1;
	document.getElementById("originMAX").value = parseFloat(document.getElementById("MAX_slider").value);
}