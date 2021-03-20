let _CRI_pushback_stage = [0.0, 40.0, 68.0, 86.0, 100.0];
let _CRI_cal_stage = [0.0, 40.0, 75.0, 105.0, 140.0];

let _MAX_pushback_stage = [0.0, 40.0, 70.0, 90.0, 100.0];
let _MAX_cal_stage = [0.0, 40.0, 80.0, 120.0, 160.0];


function CalCRI() {
	var originCRI = parseFloat(document.getElementById("originCRI").value);
	var decDelCRI = parseFloat(document.getElementById("decDelCRI").value);
	var unDecDelCRI = parseFloat(document.getElementById("unDecDelCRI").value);
	var multCRI = 1.0 + parseFloat(document.getElementById("multCRI").value) / 100.0;
	var partyCRI = 1.0 + parseFloat(document.getElementById("partyCRI").value) / 100.0;

	var result = CRI_CaldecDel(CRI_Pushback(originCRI) + decDelCRI) * multCRI * partyCRI + unDecDelCRI;

	document.getElementById("resultCRI").value = result.toFixed(3);
}

function CalMAX() {
	var originMAX = parseFloat(document.getElementById("originMAX").value);
	var decDelMAX = parseFloat(document.getElementById("decDelMAX").value);
	var unDecDelMAX = parseFloat(document.getElementById("unDecDelMAX").value);
	var multMAX = 1.0 + parseFloat(document.getElementById("multMAX").value) / 100.0;
	var partyMAX = 1.0 + parseFloat(document.getElementById("partyMAX").value) / 100.0;

	var result = MAX_CaldecDel(MAX_Pushback(originMAX) + decDelMAX) * multMAX * partyMAX + unDecDelMAX;

	document.getElementById("resultMAX").value = result.toFixed(3);
}

function CRI_Pushback(origin) {
	var stage = GetStage(origin, _CRI_pushback_stage);
	var decDel = 0;
	switch (stage) {
		case 0:
			decDel = origin;
			break;
		case 1:
			decDel = 1.25 * origin - 10;
			break;
		case 2:
			decDel = (5 * origin - 115) / 3;
			break;
		case 3:
			decDel = 2.5 * origin - 110;
			break;
	}
	return decDel;
}

function CRI_CaldecDel(allDecDel) {
	var stage = GetStage(allDecDel, _CRI_cal_stage);
	var decDel = 0;
	if (allDecDel > 140)
		allDecDel = 140;
	switch (stage) {
		case 0:
			decDel = allDecDel;
			break;
		case 1:
			decDel = 0.8 * allDecDel + 8;
			break;
		case 2:
			decDel = 0.6 * allDecDel + 23;
			break;
		case 3:
			decDel = 0.4 * allDecDel + 44;
			break;
	}
	return decDel;
}

function MAX_Pushback(origin) {
	var stage = GetStage(origin, _MAX_pushback_stage);
	var decDel = 0;
	switch (stage) {
		case 0:
			decDel = origin;
			break;
		case 1:
			decDel = (4 * origin - 40) / 3;
			break;
		case 2:
			decDel = 2 * origin - 60;
			break;
		case 3:
			decDel = 4 * origin - 240;
			break;
	}
	return decDel;
}

function MAX_CaldecDel(allDecDel) {
	var stage = GetStage(allDecDel, _MAX_cal_stage);
	var decDel = 0;
	if (allDecDel > 160)
		allDecDel = 160;
	switch (stage) {
		case 0:
			decDel = allDecDel;
			break;
		case 1:
			decDel = 0.75 * allDecDel + 10;
			break;
		case 2:
			decDel = 0.5 * allDecDel + 30;
			break;
		case 3:
			decDel = 0.25 * allDecDel + 60;
			break;
	}
	return decDel;
}


function GetStage(value, _Arr) {
	var stage = 0;

	for (var i = 0; i < _Arr.length; i++) {
		if (value >= _Arr[i]) {
			stage = i;
		}
	}

	if (stage == 4)
		stage = 3;

	return stage;
}