let locInputElem, locAdd, locArray, locFind;
let i = 0;
let array;
let index_1, index_2;
let max;

window.onload = init();

function init(){
    locInputElem = document.getElementById("inputElem");
    locAdd = document.getElementById("add");
    locArray = document.getElementById("array");
    locFind = document.getElementById("find");
    array = [];
}

function add(elem){
    array.push(elem);
    showArray(array);
    locInputElem.value = "";
}

function showArray(arr){
    let arrayStr = "[";
    for(let i = 0; i < arr.length; i++){
        if(i !== arr.length - 1) {
            arrayStr += arr[i] + ", ";
        }else{
            arrayStr += arr[i]
        }
    }
    arrayStr += "]";

    locArray.innerHTML = arrayStr;
}

locAdd.addEventListener("click", function(){
    add(parseFloat(locInputElem.value))
}, false);

function recursion(array){

    if(array.length === 1){
        alert("Mảng chỉ có 1 phần tử nên không tính tích 2 số được, hãy nhập thêm ít nhất 2 phần tử nữa");
        return;
    }else if(array.length === 2){
        alert("Mảng chí có 2 phần tử nên không thể so sánh tích của 2 cặp phần tử liền kề được hãy nhập ít nhất 3 phần tử");
        return;
    }else {
        let value1 = array[i], value2 = array[i + 1];
        let test = array[i] * array[i + 1];
        if (max < (array[i] * array[i + 1])) {
            max = array[i] * array[i + 1];
            index_1 = i;
            index_2 = i + 1;
            i++;
            if (i === array.length - 1) {
                alert("Tích lớn nhất của 2 phần từ liền kề bằng: " + max + " tại chỉ số: [i =" + index_1 + " và i + 1 = " + index_2 + "]");
                return 1;
            }
            return recursion(array);
        } else {
            i++;
            if (i === array.length - 1) {
                alert(max);
                return 1;
            }
            return recursion(array);
        }
    }
}

locFind.addEventListener("click", function(){
    max = array[i] * array[i + 1];
    i++;
    recursion(array);
}, false);
