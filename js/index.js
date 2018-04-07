$(document).ready(function(){

    //store the inputs from user to calculate late
    var inputs=[""];

    //string to store current input string
    var totalString;
    
    //operators arrat for validation without dot
    var operators1=["+","-","/","*","%",""];

    //operators array with dot for valid..
    var operators2=["."];

    //numbers for validation
    var nums = [0,1,2,3,4,5,6,7,8,9];
    
    function getValue(input){
        if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
            console.log("duplicate '.' ");
        }
        else if(inputs.length===1 && operators1.includes(input)===false){
            inputs.push(input);
        }else if(operators1.includes(inputs[inputs.length-1])===false){
            inputs.push(input);
        }
        else if(nums.includes(Number(input))){
            inputs.push(input);
        }
        update();
    }

    function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }

    function update(){
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getTotal(){
        totalString = inputs.join("");
        var result= eval(totalString);
        result= precisionRound(result,2);
        inputs=[`${result}`];
        $("#steps").html(result);
    }

    $("a").on("click", function(){
        console.log(inputs.length);
        if(this.id==="deleteAll"){
            inputs=[""];
            update();
            $("#steps").html(0);
        }else if(this.id==="backOne"){
            inputs.pop();
            update();
        }else if(this.id==="sqrt"){
            totalString = inputs.join("");
            totalString= eval(totalString);
            if(totalString!==undefined && totalString!==undefined){
            totalString = Math.sqrt(Number(totalString));
            totalString = precisionRound(totalString,3);
            inputs=[`${totalString}`];
            update();
            }
        }else if(this.id==="pow"){
            totalString = inputs.join("");
            totalString= eval(totalString);
            if(totalString!==undefined && totalString!==undefined){
                totalString = Math.pow(Number(totalString),2);
                totalString = precisionRound(totalString,3);
                inputs=[`${totalString}`];
                update();
            }
        }else if(this.id==="total"){
            window.navigator.vibrate(200); 
            getTotal();
        }else{
                getValue(this.id); 
            }
    });

  });