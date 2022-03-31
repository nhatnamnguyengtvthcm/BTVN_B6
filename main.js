

/* Bai 1 
    
*/

function getEle(id){
    return document.getElementById(id);
}

function smallestNum(max) {
    var smalest_num;
    var sum = 0;
    for (var i = 1; i < max; i ++){
        sum += i;
        if (sum >= max){
            smalest_num = i;
            break;
        }
    }
    return smalest_num;
}


getEle("b1_btn").addEventListener("click", function(){
    var max = parseInt(getEle("b1_num").value);
    var smalest_num = smallestNum(max);
    getEle("b1_footer").innerHTML = "Số nguyên dương nhỏ nhất:" + smalest_num;
});


/* Bai 2
    
*/

function sumSquare(x, n){
    var sum = 0;
    for (var i = 1; i <= n; i ++){
        sum += Math.pow(x,i);
    }
    return sum;
}

getEle("b2_btn").addEventListener("click", function(){
    var x = parseInt(getEle("b2_num_1").value);
    var n = parseInt(getEle("b2_num_2").value);
    var sum = sumSquare(x, n);
    getEle("b2_footer").innerHTML = "Tổng:" + sum;
})

/* Bai 3
    
*/


function factorial(n){
    var sum = 1;
    for(var i = 1; i <= n; i ++){
        sum = sum * i;
    }
    return sum;
}

getEle("b3_btn").addEventListener("click", function(){
    var sum = 0;
    var n = parseInt(getEle("b3_num").value);
    sum = factorial(n);
    getEle("b3_footer").innerHTML =  "Tồng giai thừa: "  + sum ;
})



/* Bai 4
    
*/


function createDiv(n){
    var content=document.createElement("div");
    
    for( var i = 0; i<n; i ++){
        var tag = document.createElement("div");
        var text = document.createTextNode("Thẻ div thứ: " + i);
        tag.appendChild(text);
        if(i%2 == 0){
            tag.style.backgroundColor = "red";
        }
        else{
            tag.style.backgroundColor = "blue";
        }
        content.appendChild(tag);
    }
    return content;
    getEle("b4_footer").innerHTML =  content;
}


getEle("b4_btn").addEventListener("click", function(){
    getEle("b4_footer").innerHTML = "";
    var sum = 0;
    var n = parseInt(getEle("b4_num").value);
    var content = createDiv(n);
    getEle("b4_footer").appendChild(content);
})

getEle("b5_btn").addEventListener("click", function(){
    var num = getEle("b5_num").value * 1;
    var content = "";
    if (num < 2) {
        content = "khong có số nguyên tố nhỏ hơn 2";
    
    }
    else if (num == 2){
        content = "2";
    }
    else {
        for(var i=3; i < num;i++){
            var haft = i / 2;
            var is_snt = true;
            for(var j=2; j <= haft; j++){
                if (i % j == 0){
                    is_snt = false; 
                    break;
                    
                }
               
            }
            if (is_snt == true){
                var temp = i + ";";
                content += temp;
            }
            
        }
    
    }
    getEle("b5_footer").innerHTML = content;

});
