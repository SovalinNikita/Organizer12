if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
{
document.write('<link  rel="stylesheet" href="mobilestyle.css">');
} 

else 
{
document.write('<link  rel="stylesheet" href="computerstyle.css">');
} 

shoptext01.value = localStorage.getItem('shop0108');
shoptext02.value = localStorage.getItem('shop0208');
shoptext03.value = localStorage.getItem('shop0308');
shoptext04.value = localStorage.getItem('shop0408');
shoptext05.value = localStorage.getItem('shop0508');
shoptext06.value = localStorage.getItem('shop0608');
shoptext07.value = localStorage.getItem('shop0708');
shoptext08.value = localStorage.getItem('shop0808');
shoptext09.value = localStorage.getItem('shop0908');
shoptext10.value = localStorage.getItem('shop1008');
shoptext11.value = localStorage.getItem('shop1108');
shoptext12.value = localStorage.getItem('shop1208');


if (localStorage.getItem('sstest') == null)
{
localStorage.setItem('stest', 5);
localStorage.setItem('sstest', 0);

localStorage.setItem('shop0101', 0);
localStorage.setItem('shop0102', 0);
localStorage.setItem('shop0103', 0);
localStorage.setItem('shop0104', 0);
localStorage.setItem('shop0105', 0);
localStorage.setItem('shop0106', 0);
localStorage.setItem('shop0107', 0);
localStorage.setItem('shop0108', "");
localStorage.setItem('shop0109', "");

localStorage.setItem('shop0201', 0);
localStorage.setItem('shop0202', 0);
localStorage.setItem('shop0203', 0);
localStorage.setItem('shop0204', 0);
localStorage.setItem('shop0205', 0);
localStorage.setItem('shop0206', 0);
localStorage.setItem('shop0207', 0);
localStorage.setItem('shop0208', "");
localStorage.setItem('shop0209', "");

localStorage.setItem('shop0301', 0);
localStorage.setItem('shop0302', 0);
localStorage.setItem('shop0303', 0);
localStorage.setItem('shop0304', 0);
localStorage.setItem('shop0305', 0);
localStorage.setItem('shop0306', 0);
localStorage.setItem('shop0307', 0);
localStorage.setItem('shop0308', "");
localStorage.setItem('shop0309', "");

localStorage.setItem('shop0401', 0);
localStorage.setItem('shop0402', 0);
localStorage.setItem('shop0403', 0);
localStorage.setItem('shop0404', 0);
localStorage.setItem('shop0405', 0);
localStorage.setItem('shop0406', 0);
localStorage.setItem('shop0407', 0);
localStorage.setItem('shop0408', "");
localStorage.setItem('shop0407', "");

localStorage.setItem('shop0501', 0);
localStorage.setItem('shop0502', 0);
localStorage.setItem('shop0503', 0);
localStorage.setItem('shop0504', 0);
localStorage.setItem('shop0505', 0);
localStorage.setItem('shop0506', 0);
localStorage.setItem('shop0507', 0);
localStorage.setItem('shop0508', "");
localStorage.setItem('shop0509', "");

localStorage.setItem('shop0601', 0);
localStorage.setItem('shop0602', 0);
localStorage.setItem('shop0603', 0);
localStorage.setItem('shop0604', 0);
localStorage.setItem('shop0605', 0);
localStorage.setItem('shop0606', 0);
localStorage.setItem('shop0607', 0);
localStorage.setItem('shop0608', "");
localStorage.setItem('shop0609', "");

localStorage.setItem('shop0701', 0);
localStorage.setItem('shop0702', 0);
localStorage.setItem('shop0703', 0);
localStorage.setItem('shop0704', 0);
localStorage.setItem('shop0705', 0);
localStorage.setItem('shop0706', 0);
localStorage.setItem('shop0707', 0);
localStorage.setItem('shop0708', "");
localStorage.setItem('shop0709', "");

localStorage.setItem('shop0801', 0);
localStorage.setItem('shop0802', 0);
localStorage.setItem('shop0803', 0);
localStorage.setItem('shop0804', 0);
localStorage.setItem('shop0805', 0);
localStorage.setItem('shop0806', 0);
localStorage.setItem('shop0807', 0);
localStorage.setItem('shop0808', "");
localStorage.setItem('shop0809', "");

localStorage.setItem('shop0901', 0);
localStorage.setItem('shop0902', 0);
localStorage.setItem('shop0903', 0);
localStorage.setItem('shop0904', 0);
localStorage.setItem('shop0905', 0);
localStorage.setItem('shop0906', 0);
localStorage.setItem('shop0907', 0);
localStorage.setItem('shop0908', "");
localStorage.setItem('shop0909', "");

localStorage.setItem('shop1001', 0);
localStorage.setItem('shop1002', 0);
localStorage.setItem('shop1003', 0);
localStorage.setItem('shop1004', 0);
localStorage.setItem('shop1005', 0);
localStorage.setItem('shop1006', 0);
localStorage.setItem('shop1007', 0);
localStorage.setItem('shop1008', "");
localStorage.setItem('shop1009', "");

localStorage.setItem('shop1101', 0);
localStorage.setItem('shop1102', 0);
localStorage.setItem('shop1103', 0);
localStorage.setItem('shop1104', 0);
localStorage.setItem('shop1105', 0);
localStorage.setItem('shop1106', 0);
localStorage.setItem('shop1107', 0);
localStorage.setItem('shop1108', "");
localStorage.setItem('shop1109', "");

localStorage.setItem('shop1201', 0);
localStorage.setItem('shop1202', 0);
localStorage.setItem('shop1203', 0);
localStorage.setItem('shop1204', 0);
localStorage.setItem('shop1205', 0);
localStorage.setItem('shop1206', 0);
localStorage.setItem('shop1207', 0);
localStorage.setItem('shop1208', "");
localStorage.setItem('shop1209', "");
}

if (localStorage.getItem('shop0107') == 1)
{
document.getElementById('shopchbx1').checked = true;
}
if (localStorage.getItem('shop0107') == 0)
{
document.getElementById('shopchbx1').checked = false;
}

if (localStorage.getItem('shop0207') == 1)
{
document.getElementById('shopchbx2').checked = true;
}
if (localStorage.getItem('shop0207') == 0)
{
document.getElementById('shopchbx2').checked = false;
}

if (localStorage.getItem('shop0307') == 1)
{
document.getElementById('shopchbx3').checked = true;
}
if (localStorage.getItem('shop0307') == 0)
{
document.getElementById('shopchbx3').checked = false;
}

if (localStorage.getItem('shop0407') == 1)
{
document.getElementById('shopchbx4').checked = true;
}
if (localStorage.getItem('shop0407') == 0)
{
document.getElementById('shopchbx4').checked = false;
}

if (localStorage.getItem('shop0507') == 1)
{
document.getElementById('shopchbx5').checked = true;
}
if (localStorage.getItem('shop0507') == 0)
{
document.getElementById('shopchbx5').checked = false;
}

if (localStorage.getItem('shop0607') == 1)
{
document.getElementById('shopchbx6').checked = true;
}
if (localStorage.getItem('shop0607') == 0)
{
document.getElementById('shopchbx6').checked = false;
}

if (localStorage.getItem('shop0707') == 1)
{
document.getElementById('shopchbx7').checked = true;
}
if (localStorage.getItem('shop0707') == 0)
{
document.getElementById('shopchbx7').checked = false;
}

if (localStorage.getItem('shop0807') == 1)
{
document.getElementById('shopchbx8').checked = true;
}
if (localStorage.getItem('shop0807') == 0)
{
document.getElementById('shopchbx8').checked = false;
}

if (localStorage.getItem('shop0907') == 1)
{
document.getElementById('shopchbx9').checked = true;
}
if (localStorage.getItem('shop0907') == 0)
{
document.getElementById('shopchbx9').checked = false;
}

if (localStorage.getItem('shop1007') == 1)
{
document.getElementById('shopchbx10').checked = true;
}
if (localStorage.getItem('shop1007') == 0)
{
document.getElementById('shopchbx10').checked = false;
}

if (localStorage.getItem('shop1107') == 1)
{
document.getElementById('shopchbx11').checked = true;
}
if (localStorage.getItem('shop1107') == 0)
{
document.getElementById('shopchbx11').checked = false;
}

if (localStorage.getItem('shop1207') == 1)
{
document.getElementById('shopchbx12').checked = true;
}
if (localStorage.getItem('shop1207') == 0)
{
document.getElementById('shopchbx12').checked = false;
}

var plan1 = localStorage.getItem('shop0105');
var plan2 = localStorage.getItem('shop0205');
var plan3 = localStorage.getItem('shop0305');
var plan4 = localStorage.getItem('shop0405');
var plan5 = localStorage.getItem('shop0505');
var plan6 = localStorage.getItem('shop0605');
var plan7 = localStorage.getItem('shop0705');
var plan8 = localStorage.getItem('shop0805');
var plan9 = localStorage.getItem('shop0905');
var plan10 = localStorage.getItem('shop1005');
var plan11 = localStorage.getItem('shop1105');
var plan12 = localStorage.getItem('shop1205');

var shopres = parseFloat(plan1) + parseFloat(plan2) + parseFloat(plan3) + parseFloat(plan4) + parseFloat(plan5) + parseFloat(plan6) + parseFloat(plan7) + parseFloat(plan8) + parseFloat(plan9) + parseFloat(plan10) + parseFloat(plan11) + parseFloat(plan12);

planned.value = shopres;

plannedamount1.value = localStorage.getItem('shop0101');
plannedamount2.value = localStorage.getItem('shop0201');
plannedamount3.value = localStorage.getItem('shop0301');
plannedamount4.value = localStorage.getItem('shop0401');
plannedamount5.value = localStorage.getItem('shop0501');
plannedamount6.value = localStorage.getItem('shop0601');
plannedamount7.value = localStorage.getItem('shop0701');
plannedamount8.value = localStorage.getItem('shop0801');
plannedamount9.value = localStorage.getItem('shop0901');
plannedamount10.value = localStorage.getItem('shop1001');
plannedamount11.value = localStorage.getItem('shop1101');
plannedamount12.value = localStorage.getItem('shop1201');

function shop_change(ntv)
	{
	localStorage.setItem('shopswitch', ntv);
	switch (ntv)
	{
	case 1:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0101'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0102'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0103'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0104'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0105'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0106'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0107'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0108'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0109'));
	break;

	case 2:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0201'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0202'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0203'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0204'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0205'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0206'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0207'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0208'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0209'));
	break;

	case 3:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0301'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0302'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0303'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0304'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0305'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0306'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0307'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0308'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0309'));
	break;

	case 4:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0401'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0402'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0403'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0404'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0405'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0406'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0407'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0408'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0409'));
	console.log("ubdifgrkg");
	break;

	case 5:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0501'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0502'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0503'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0504'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0505'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0506'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0507'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0508'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0509'));
	break;

	case 6:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0601'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0602'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0603'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0604'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0605'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0606'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0607'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0608'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0609'));
	break;

	case 7:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0701'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0702'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0703'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0704'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0705'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0706'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0707'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0708'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0709'));
	break;

	case 8:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0801'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0802'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0803'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0804'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0805'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0806'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0807'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0808'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0809'));
	break;

	case 9:
	localStorage.setItem('shoploc01', localStorage.getItem('shop0901'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop0902'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop0903'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop0904'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop0905'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop0906'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop0907'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop0908'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop0909'));
	break;

	case 10:
	localStorage.setItem('shoploc01', localStorage.getItem('shop1001'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop1002'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop1003'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop1004'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop1005'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop1006'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop1007'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop1008'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop1009'));
	break;

	case 11:
	localStorage.setItem('shoploc01', localStorage.getItem('shop1101'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop1102'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop1103'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop1104'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop1105'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop1106'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop1107'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop1108'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop1109'));
	break;

	case 12:
	localStorage.setItem('shoploc01', localStorage.getItem('shop1201'));
	localStorage.setItem('shoploc02', localStorage.getItem('shop1202'));
	localStorage.setItem('shoploc03', localStorage.getItem('shop1203'));
	localStorage.setItem('shoploc04', localStorage.getItem('shop1204'));
	localStorage.setItem('shoploc05', localStorage.getItem('shop1205'));
	localStorage.setItem('shoploc06', localStorage.getItem('shop1206'));
	localStorage.setItem('shoploc07', localStorage.getItem('shop1207'));
	localStorage.setItem('shoploc08', localStorage.getItem('shop1108'));
	localStorage.setItem('shoploc09', localStorage.getItem('shop1209'));
	break;
	}
	window.location.href = 'shopping2.html';
	}
function shop_save2()
	{
	localStorage.setItem('shopswitch', ntv);
	window.location.href = 'shopping2.html';
	}
function shopreal()
	{
	var rlsm = 0;

	if (document.getElementById('shopchbx1').checked == true)
		{
		var sum1 = localStorage.getItem('shop0106');
		rlsm = parseFloat(rlsm) + parseFloat(sum1);
		}

	if (document.getElementById('shopchbx2').checked == true)
		{
		var sum2 = localStorage.getItem('shop0206');
		rlsm = parseFloat(rlsm) + parseFloat(sum2);
		}

	if (document.getElementById('shopchbx3').checked == true)
		{
		var sum3 = localStorage.getItem('shop0306');
		rlsm = parseFloat(rlsm) + parseFloat(sum3);
		}

	if (document.getElementById('shopchbx4').checked == true)
		{
		var sum4 = localStorage.getItem('shop0406');
		rlsm = parseFloat(rlsm) + parseFloat(sum4);
		}

	if (document.getElementById('shopchbx5').checked == true)
		{
		var sum5 = localStorage.getItem('shop0506');
		rlsm = parseFloat(rlsm) + parseFloat(sum5);
		}

	if (document.getElementById('shopchbx6').checked == true)
		{
		var sum6 = localStorage.getItem('shop0606');
		rlsm = parseFloat(rlsm) + parseFloat(sum6);
		}

	if (document.getElementById('shopchbx7').checked == true)
		{
		var sum7 = localStorage.getItem('shop0706');
		rlsm = parseFloat(rlsm) + parseFloat(sum7);
		}

	if (document.getElementById('shopchbx8').checked == true)
		{
		var sum8 = localStorage.getItem('shop0806');
		rlsm = parseFloat(rlsm) + parseFloat(sum8);
		}

	if (document.getElementById('shopchbx9').checked == true)
		{
		var sum9 = localStorage.getItem('shop0906');
		rlsm = parseFloat(rlsm) + parseFloat(sum9);
		}

	if (document.getElementById('shopchbx10').checked == true)
		{
		var sum10 = localStorage.getItem('shop1006');
		rlsm = parseFloat(rlsm) + parseFloat(sum10);
		}

	if (document.getElementById('shopchbx11').checked == true)
		{
		var sum11 = localStorage.getItem('shop1106');
		rlsm = parseFloat(rlsm) + parseFloat(sum11);
		}

	if (document.getElementById('shopchbx12').checked == true)
		{
		var sum12 = localStorage.getItem('shop1206');
		rlsm = parseFloat(rlsm) + parseFloat(sum12);
		}
	real.value = rlsm;
	}
shopreal();
function chbx_change1()
	{
	var scb;
	scb = document.getElementById('shopchbx1');

	if (scb.checked)
		{
		localStorage.setItem('shop0107', 1);
		}
	else 
		{
		localStorage.setItem('shop0107', 0);
		}
	shopreal();
	}
function chbx_change2()
	{
	var scb;
	scb = document.getElementById('shopchbx2');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0207', 1);
		}
	else 
		{
		localStorage.setItem('shop0207', 0);
		}
	shopreal();
	}

function chbx_change3()
	{
	var scb;
	scb = document.getElementById('shopchbx3');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0307', 1);
		}
	else 
		{
		localStorage.setItem('shop0307', 0);
		}
	shopreal();
	}

function chbx_change4()
	{
	var scb;
	scb = document.getElementById('shopchbx4');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0407', 1);
		}
	else 
		{
		localStorage.setItem('shop0407', 0);
		}
	shopreal();
	}

function chbx_change5()
	{
	var scb;
	scb = document.getElementById('shopchbx5');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0507', 1);
		}
	else 
		{
		localStorage.setItem('shop0507', 0);
		}
	shopreal();
	}

function chbx_change6()
	{
	var scb;
	scb = document.getElementById('shopchbx6');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0607', 1);
		}
	else 
		{
		localStorage.setItem('shop0607', 0);
		}
	shopreal();
	}
function chbx_change7()
	{
	var scb;
	scb = document.getElementById('shopchbx7');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0707', 1);
		}
	else 
		{
		localStorage.setItem('shop0707', 0);
		}
	shopreal();
	}
function chbx_change8()
	{
	var scb;
	scb = document.getElementById('shopchbx8');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0807', 1);
		}
	else 
		{
		localStorage.setItem('shop0807', 0);
		}
	shopreal();
	}
function chbx_change9()
	{
	var scb;
	scb = document.getElementById('shopchbx9');
	
	if (scb.checked)
		{
		localStorage.setItem('shop0907', 1);
		}
	else 
		{
		localStorage.setItem('shop0907', 0);
		}
	shopreal();
	}
function chbx_change10()
	{
	var scb;
	scb = document.getElementById('shopchbx10');
	
	if (scb.checked)
		{
		localStorage.setItem('shop1007', 1);
		}
	else 
		{
		localStorage.setItem('shop1007', 0);
		}
	shopreal();
	}
function chbx_change11()
	{
	var scb;
	scb = document.getElementById('shopchbx11');
	
	if (scb.checked)
		{
		localStorage.setItem('shop1107', 1);
		}
	else 
		{
		localStorage.setItem('shop1107', 0);
		}
	shopreal();
	}
function chbx_change12()
	{
	var scb;
	scb = document.getElementById('shopchbx12');
	
	if (scb.checked)
		{
		localStorage.setItem('shop1207', 1);
		}
	else 
		{
		localStorage.setItem('shop1207', 0);
		}
	shopreal();
	}
function shop_clearall()
	{
	var alrt = confirm("Are you sure? All your notes will be deletet!");
	if (alrt == true)
		{
		localStorage.setItem('shop0101', 0);
		localStorage.setItem('shop0102', 0);
		localStorage.setItem('shop0103', 0);
		localStorage.setItem('shop0104', 0);
		localStorage.setItem('shop0105', 0);
		localStorage.setItem('shop0106', 0);
		localStorage.setItem('shop0107', 0);
		localStorage.setItem('shop0108', "");
		localStorage.setItem('shop0109', "");

		localStorage.setItem('shop0201', 0);
		localStorage.setItem('shop0202', 0);
		localStorage.setItem('shop0203', 0);
		localStorage.setItem('shop0204', 0);
		localStorage.setItem('shop0205', 0);
		localStorage.setItem('shop0206', 0);
		localStorage.setItem('shop0207', 0);
		localStorage.setItem('shop0208', "");
		localStorage.setItem('shop0209', "");

		localStorage.setItem('shop0301', 0);
		localStorage.setItem('shop0302', 0);
		localStorage.setItem('shop0303', 0);
		localStorage.setItem('shop0304', 0);
		localStorage.setItem('shop0305', 0);
		localStorage.setItem('shop0306', 0);
		localStorage.setItem('shop0307', 0);
		localStorage.setItem('shop0308', "");
		localStorage.setItem('shop0309', "");

		localStorage.setItem('shop0401', 0);
		localStorage.setItem('shop0402', 0);
		localStorage.setItem('shop0403', 0);
		localStorage.setItem('shop0404', 0);
		localStorage.setItem('shop0405', 0);
		localStorage.setItem('shop0406', 0);
		localStorage.setItem('shop0407', 0);
		localStorage.setItem('shop0408', "");
		localStorage.setItem('shop0407', "");

		localStorage.setItem('shop0501', 0);
		localStorage.setItem('shop0502', 0);
		localStorage.setItem('shop0503', 0);
		localStorage.setItem('shop0504', 0);
		localStorage.setItem('shop0505', 0);
		localStorage.setItem('shop0506', 0);
		localStorage.setItem('shop0507', 0);
		localStorage.setItem('shop0508', "");
		localStorage.setItem('shop0509', "");

		localStorage.setItem('shop0601', 0);
		localStorage.setItem('shop0602', 0);
		localStorage.setItem('shop0603', 0);
		localStorage.setItem('shop0604', 0);
		localStorage.setItem('shop0605', 0);
		localStorage.setItem('shop0606', 0);
		localStorage.setItem('shop0607', 0);
		localStorage.setItem('shop0608', "");
		localStorage.setItem('shop0609', "");

		localStorage.setItem('shop0701', 0);
		localStorage.setItem('shop0702', 0);
		localStorage.setItem('shop0703', 0);
		localStorage.setItem('shop0704', 0);
		localStorage.setItem('shop0705', 0);
		localStorage.setItem('shop0706', 0);
		localStorage.setItem('shop0707', 0);
		localStorage.setItem('shop0708', "");
		localStorage.setItem('shop0709', "");

		localStorage.setItem('shop0801', 0);
		localStorage.setItem('shop0802', 0);
		localStorage.setItem('shop0803', 0);
		localStorage.setItem('shop0804', 0);
		localStorage.setItem('shop0805', 0);
		localStorage.setItem('shop0806', 0);
		localStorage.setItem('shop0807', 0);
		localStorage.setItem('shop0808', "");
		localStorage.setItem('shop0809', "");

		localStorage.setItem('shop0901', 0);
		localStorage.setItem('shop0902', 0);
		localStorage.setItem('shop0903', 0);
		localStorage.setItem('shop0904', 0);
		localStorage.setItem('shop0905', 0);
		localStorage.setItem('shop0906', 0);
		localStorage.setItem('shop0907', 0);
		localStorage.setItem('shop0908', "");
		localStorage.setItem('shop0909', "");

		localStorage.setItem('shop1001', 0);
		localStorage.setItem('shop1002', 0);
		localStorage.setItem('shop1003', 0);
		localStorage.setItem('shop1004', 0);
		localStorage.setItem('shop1005', 0);
		localStorage.setItem('shop1006', 0);
		localStorage.setItem('shop1007', 0);
		localStorage.setItem('shop1008', "");
		localStorage.setItem('shop1009', "");

		localStorage.setItem('shop1101', 0);
		localStorage.setItem('shop1102', 0);
		localStorage.setItem('shop1103', 0);
		localStorage.setItem('shop1104', 0);
		localStorage.setItem('shop1105', 0);
		localStorage.setItem('shop1106', 0);
		localStorage.setItem('shop1107', 0);
		localStorage.setItem('shop1108', "");
		localStorage.setItem('shop1109', "");

		localStorage.setItem('shop1201', 0);
		localStorage.setItem('shop1202', 0);
		localStorage.setItem('shop1203', 0);
		localStorage.setItem('shop1204', 0);
		localStorage.setItem('shop1205', 0);
		localStorage.setItem('shop1206', 0);
		localStorage.setItem('shop1207', 0);
		localStorage.setItem('shop1208', "");
		localStorage.setItem('shop1209', "");

		document.getElementById('shopchbx1').checked = false;
		document.getElementById('shopchbx2').checked = false;
		document.getElementById('shopchbx3').checked = false;
		document.getElementById('shopchbx4').checked = false;
		document.getElementById('shopchbx5').checked = false;
		document.getElementById('shopchbx6').checked = false;
		document.getElementById('shopchbx7').checked = false;
		document.getElementById('shopchbx8').checked = false;
		document.getElementById('shopchbx9').checked = false;
		document.getElementById('shopchbx10').checked = false;
		document.getElementById('shopchbx11').checked = false;
		document.getElementById('shopchbx12').checked = false;

		shoptext01.value = "";
		shoptext02.value = "";
		shoptext03.value = "";
		shoptext04.value = "";
		shoptext05.value = "";
		shoptext06.value = "";
		shoptext07.value = "";
		shoptext08.value = "";
		shoptext09.value = "";
		shoptext10.value = "";
		shoptext11.value = "";
		shoptext12.value = "";
		planned.value = 0;
		real.value = 0;

		plannedamount1.value = 0;
		plannedamount2.value = 0;
		plannedamount3.value = 0;
		plannedamount4.value = 0;
		plannedamount5.value = 0;
		plannedamount6.value = 0;
		plannedamount7.value = 0;
		plannedamount8.value = 0;
		plannedamount9.value = 0;
		plannedamount10.value = 0;
		plannedamount11.value = 0;
		plannedamount12.value = 0;
		}
	}
function shop_clear(cs)
	{
	switch (cs)
		{
		case 1:
		localStorage.setItem('shop0101', 0);
		localStorage.setItem('shop0102', 0);
		localStorage.setItem('shop0103', 0);
		localStorage.setItem('shop0104', 0);
		localStorage.setItem('shop0105', 0);
		localStorage.setItem('shop0106', 0);
		localStorage.setItem('shop0107', 0);
		localStorage.setItem('shop0108', "");
		localStorage.setItem('shop0109', "");
		shoptext01.value = "";
		plannedamount1.value = 0;
		document.getElementById('shopchbx1').checked = false;
		break;

		case 2:
		localStorage.setItem('shop0201', 0);
		localStorage.setItem('shop0202', 0);
		localStorage.setItem('shop0203', 0);
		localStorage.setItem('shop0204', 0);
		localStorage.setItem('shop0205', 0);
		localStorage.setItem('shop0206', 0);
		localStorage.setItem('shop0207', 0);
		localStorage.setItem('shop0208', "");
		localStorage.setItem('shop0209', "");
		shoptext02.value = "";
		plannedamount2.value = 0;
		document.getElementById('shopchbx2').checked = false;
		break;

		case 3:
		localStorage.setItem('shop0301', 0);
		localStorage.setItem('shop0302', 0);
		localStorage.setItem('shop0303', 0);
		localStorage.setItem('shop0304', 0);
		localStorage.setItem('shop0305', 0);
		localStorage.setItem('shop0306', 0);
		localStorage.setItem('shop0307', 0);
		localStorage.setItem('shop0308', "");
		localStorage.setItem('shop0309', "");
		shoptext03.value = "";
		plannedamount3.value = 0;
		document.getElementById('shopchbx3').checked = false;
		break;

		case 4:
		localStorage.setItem('shop0401', 0);
		localStorage.setItem('shop0402', 0);
		localStorage.setItem('shop0403', 0);
		localStorage.setItem('shop0404', 0);
		localStorage.setItem('shop0405', 0);
		localStorage.setItem('shop0406', 0);
		localStorage.setItem('shop0407', 0);
		localStorage.setItem('shop0408', "");
		localStorage.setItem('shop0409', "");
		shoptext04.value = "";
		plannedamount4.value = 0;
		document.getElementById('shopchbx4').checked = false;
		break;

		case 5:
		localStorage.setItem('shop0501', 0);
		localStorage.setItem('shop0502', 0);
		localStorage.setItem('shop0503', 0);
		localStorage.setItem('shop0504', 0);
		localStorage.setItem('shop0505', 0);
		localStorage.setItem('shop0506', 0);
		localStorage.setItem('shop0507', 0);
		localStorage.setItem('shop0508', "");
		localStorage.setItem('shop0509', "");
		shoptext05.value = "";
		plannedamount5.value = 0;
		document.getElementById('shopchbx5').checked = false;
		break;

		case 6:
		localStorage.setItem('shop0601', 0);
		localStorage.setItem('shop0602', 0);
		localStorage.setItem('shop0603', 0);
		localStorage.setItem('shop0604', 0);
		localStorage.setItem('shop0605', 0);
		localStorage.setItem('shop0606', 0);
		localStorage.setItem('shop0607', 0);
		localStorage.setItem('shop0608', "");
		localStorage.setItem('shop0609', "");
		shoptext06.value = "";
		plannedamount6.value = 0;
		document.getElementById('shopchbx6').checked = false;
		break;

		case 7:
		localStorage.setItem('shop0701', 0);
		localStorage.setItem('shop0702', 0);
		localStorage.setItem('shop0703', 0);
		localStorage.setItem('shop0704', 0);
		localStorage.setItem('shop0705', 0);
		localStorage.setItem('shop0706', 0);
		localStorage.setItem('shop0707', 0);
		localStorage.setItem('shop0708', "");
		localStorage.setItem('shop0709', "");
		shoptext07.value = "";
		plannedamount7.value = 0;
		document.getElementById('shopchbx7').checked = false;
		break;

		case 8:
		localStorage.setItem('shop0801', 0);
		localStorage.setItem('shop0802', 0);
		localStorage.setItem('shop0803', 0);
		localStorage.setItem('shop0804', 0);
		localStorage.setItem('shop0805', 0);
		localStorage.setItem('shop0806', 0);
		localStorage.setItem('shop0807', 0);
		localStorage.setItem('shop0808', "");
		localStorage.setItem('shop0809', "");
		eigthnotetext.value = "";
		shoptext08.value = 0;
		document.getElementById('shopchbx8').checked = false;
		break;

		case 9:
		localStorage.setItem('shop0901', 0);
		localStorage.setItem('shop0902', 0);
		localStorage.setItem('shop0903', 0);
		localStorage.setItem('shop0904', 0);
		localStorage.setItem('shop0905', 0);
		localStorage.setItem('shop0906', 0);
		localStorage.setItem('shop0907', 0);
		localStorage.setItem('shop0908', "");
		localStorage.setItem('shop0909', "");
		shoptext09.value = "";
		plannedamount9.value = 0;
		document.getElementById('shopchbx9').checked = false;
		break;

		case 10:
		localStorage.setItem('shop1001', 0);
		localStorage.setItem('shop1002', 0);
		localStorage.setItem('shop1003', 0);
		localStorage.setItem('shop1004', 0);
		localStorage.setItem('shop1005', 0);
		localStorage.setItem('shop1006', 0);
		localStorage.setItem('shop1007', 0);
		localStorage.setItem('shop1008', "");
		localStorage.setItem('shop1009', "");
		shoptext10.value = "";
		plannedamount10.value = 0;
		document.getElementById('shopchbx10').checked = false;
		break;

		case 11:
		localStorage.setItem('shop1101', 0);
		localStorage.setItem('shop1102', 0);
		localStorage.setItem('shop1103', 0);
		localStorage.setItem('shop1104', 0);
		localStorage.setItem('shop1105', 0);
		localStorage.setItem('shop1106', 0);
		localStorage.setItem('shop1107', 0);
		localStorage.setItem('shop1108', "");
		localStorage.setItem('shop1109', "");
		shoptext11.value = "";
		plannedamount11.value = 0;
		document.getElementById('shopchbx11').checked = false;
		break;

		case 12:
		localStorage.setItem('shop1201', 0);
		localStorage.setItem('shop1202', 0);
		localStorage.setItem('shop1203', 0);
		localStorage.setItem('shop1204', 0);
		localStorage.setItem('shop1205', 0);
		localStorage.setItem('shop1206', 0);
		localStorage.setItem('shop1207', 0);
		localStorage.setItem('shop1208', "");
		localStorage.setItem('shop1209', "");
		shoptext12.value = "";
		plannedamount12.value = 0;
		document.getElementById('shopchbx12').checked = false;
		break;
		}
	var plan1 = localStorage.getItem('shop0105');
	var plan2 = localStorage.getItem('shop0205');
	var plan3 = localStorage.getItem('shop0305');
	var plan4 = localStorage.getItem('shop0405');
	var plan5 = localStorage.getItem('shop0505');
	var plan6 = localStorage.getItem('shop0605');
	var plan7 = localStorage.getItem('shop0705');
	var plan8 = localStorage.getItem('shop0805');
	var plan9 = localStorage.getItem('shop0905');
	var plan10 = localStorage.getItem('shop1005');
	var plan11 = localStorage.getItem('shop1105');
	var plan12 = localStorage.getItem('shop1205');
	var shopres = parseFloat(plan1) + parseFloat(plan2) + parseFloat(plan3) + parseFloat(plan4) + parseFloat(plan5) + parseFloat(plan6) + parseFloat(plan7) + parseFloat(plan8) + parseFloat(plan9) + parseFloat(plan10) + parseFloat(plan11) + parseFloat(plan12);
	planned.value = shopres;
	}















