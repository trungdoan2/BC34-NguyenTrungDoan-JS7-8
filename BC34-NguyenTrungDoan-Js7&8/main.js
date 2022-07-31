var listNumber = [];
document.getElementById ('btnThemSo').onclick = function () {
    var number =  document.getElementById('number').value *1;
    listNumber.push(number);
    console.log(listNumber);
    var content = "";
    for (i = 0; i < listNumber.length; i++) {
    content  += listNumber[i] + " ";
    }
    document.getElementById('showInfo').innerHTML = content;
}

document.getElementById('btnTinhTong').onclick = function () {
    var sum = 0;
    for (var i =0; i < listNumber.length; i++) {
      if (listNumber[i] > 0) {
    sum += listNumber[i];
      }
    }
    document.getElementById('showInfo').innerHTML = "Tổng số dương:" + sum;
}

document.getElementById ('btnDemSo').onclick = function () {
    var demSo = 0;
    for (var i =0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
             demSo++;
        }
    }
    document.getElementById('showInfo').innerHTML = "Số dương: " + demSo;
}

document.getElementById ('btnNhoNhat').onclick = function () {
    var min = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
        }
    }
    document.getElementById('showInfo').innerHTML = "Số nhỏ nhất là: " + min;
}
function check_odd_even(n){
   
    var flag = 1;
    if( n % 2 == 0 ) flag= 0;
    return flag;  
}

function find_last_odd(listNumber){
    for (var i = listNumber.length - 1; i >=0; i--) {
        if ( check_odd_even(listNumber[i])==0) {
            return listNumber[i];
        }
        }
}

document.getElementById ('btnSoChan').onclick = function () {
   
    document.getElementById('showInfo').innerHTML = "Số chẵn cuối cùng  là: " + find_last_odd(listNumber);
}

document.getElementById('btnDoiCho').onclick = function () {
    var number1 = document.getElementById('number1').value *1;
    var number2 = document.getElementById('number2').value *1;
   
  var tmp  = listNumber[number1] ;
  listNumber[number1] = listNumber[number2];
  listNumber[number2] = tmp ;
  listNumber[number1,number2] = array[number2,number1]

}

document.querySelector('#btnSapXep').onclick = function () {
    var output = sortTheoSo(listNumber);

    for (var index = 0; index < output.length; index++) {
        document.querySelector('#showInfo').innerHTML += '<p>' + output[index]+ '</p>'
    }
}

function ktnt(k) {
    var dem = 0;
    for(var i=1;i<=k;i++)
	{
		if(k%i==0)
		{
			dem=dem+1; //dem++
		}
	}
	if(dem==2)
	{
		return 1;
	}
	return 0;
}
function NguyenToDau(listNumber) {
    for (var i =0; i < listNumber.length; i++) {
      if (ktnt(listNumber[i]) == 1) {
        var lc = listNumber[i];
        return lc;
      }
    }
    return -1;
}

document.getElementById('btnTim').onclick = function () {
    document.getElementById('showInfo').innerHTML =   NguyenToDau(listNumber);
}



var listNumber1 = [];
document.getElementById ('btnThemSo1').onclick = function () {
    var number3 =  document.getElementById('number3').value *1;
    listNumber1.push(number3);
    console.log(listNumber1);
    var content = "";
    for (i = 0; i < listNumber1.length; i++) {
    content  += listNumber1[i] + " ";
    }
    document.getElementById('showInfo1').innerHTML = content;
}

document.getElementById('btnDemSoNguyen').onclick = function () {
    demSoNguyen = 0;
    for (var i = 0; i < listNumber1.length; i++) {
        if (Number.isInteger(listNumber1[i])) {
            demSoNguyen++;
        }
    }
    document.getElementById('showInfo1').innerHTML =   "Số Nguyên: " + demSoNguyen;
}

function check_negative_positive_number(n){
    //flag = -1 => số âm
    //flag =  0 =>  số 0
    //flag =  1 => số dương

    let flag = 0;
    if (n >0 ) flag = 1;
    else if (n<0) flag = -1;
    return flag;
}

document.querySelector('#btnSoSanh').onclick = function () {
    demSoDuong = 0;
    demSoAm= 0;
   for (var i=0; i < listNumber.length; i++) {
       if (check_negative_positive_number(listNumber[i]) == 1) {
        demSoDuong++;
       }else if (check_negative_positive_number(listNumber[i]) == -1) {
        demSoAm++;
       }
   }

   if (demSoDuong > demSoAm) {
    ketQua = "<p> Số dương > Số Âm</p>"
   }else {
    ketQua = "<p> Số dương < Số Âm</p>"
   }
   document.getElementById('showInfo').innerHTML = ketQua;
}
