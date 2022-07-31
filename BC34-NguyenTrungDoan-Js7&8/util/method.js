function demSinhVienGioi(arrDiem,diemGioi) {
    //so luong SV gioi
    var soLuongSinhVienGioi = 0;

    for (var index =0; index < arrDiem.length; index++) {
       if (arrDiem[index] >= diemGioi) {
        soLuongSinhVienGioi +=1 ;
       }
    }


    return soLuongSinhVienGioi;
}
/**
 * ham nhan vao arrDiem = [1,2,5,7,8,9] va arrTen = ['a','b','c','d','e']
 * @param {*} arrDiem arrDiem: mang chu cac diem sinh vien
 * @param {*} arrTen arrTen mang chua cac ten sinh vien
 * @returns tra ve html cac the p noi tiep nhau
 */

function layDanhSachSinhVienHon5(arrDiem,arrTen) {
    var html = "";

     for (var index = 0; index < arrDiem.length; index++) {
         if (arrDiem[index] >= 5) {
            html += '<p>' + arrTen[index] + '</p>'
         }
     }


    return html;
}


function sortTheoSo(arrNumber) {
    var result = arrNumber.sort(function (num,numTruoc) {
        return num - numTruoc
        
    })
    return result;
}