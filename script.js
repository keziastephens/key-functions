$(document).ready(function(){
    
    function master(){

        // function keyPress(key){
        //     if(key.keyCode == "13"){
        //         // alert('enter has been pressed');
        //         $('body').css('background-color','salmon')
        //     }
        //     if(key.keyCode =="84"){
        //         // alert('t has been pressed');                
        //         $("body").css("background-color", "yellow");
        //     }
        // }
        // function keyLifted(key){
        //     if(key.keyCode == "76"){
        //         alert('l key has been lifted');
        //         $("body").css("background-color", "yellowgreen");

        //     }
        // }

        function padsDown(key){
            const beatPad = document.querySelectorAll('.pad')
            const beatPadText = document.querySelectorAll('.pad p');
            console.log(beatPad);
            if(key.keyCode == '81'){
                beatPad[0].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/kick-808.wav');
                audio.play();
                console.log(audio);
            }
            if(key.keyCode == '87'){
                beatPad[1].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/kick-classic.wav');
                audio.play();
            }
            if(key.keyCode == '69'){
                beatPad[2].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/snare-vinyl02.wav');
                audio.play();
            }
            if(key.keyCode == '82'){
                beatPad[3].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/snare-808.wav');
                audio.play();

            }
            if(key.keyCode == '84'){
                beatPad[4].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/kick-softy.wav');
                audio.play();
            }
            if(key.keyCode == '89'){
                beatPad[5].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
                let audio = new Audio('./sounds/hihat-808.wav');
                audio.play();
            }

        }


        function padsUp(key){
            const beatPad = document.querySelectorAll('.pad');
            if(key.keyCode == '81'){
                beatPad[0].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
            if(key.keyCode == '87'){
                beatPad[1].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
            if(key.keyCode == '69'){
                beatPad[2].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
            if(key.keyCode == '82'){
                beatPad[3].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
            if(key.keyCode == '84'){
                beatPad[4].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
            if(key.keyCode == '89'){
                beatPad[5].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08), -2px -2px 10px 0 rgba(255,255,255,1)";
            }
        }


        // window event listener so the DOM knows that we want to listen for a key press or key up
        // we set the boolean value to false so the DOM registers when a key press or key up is true and runs what ever code we specify
        // window.addEventListener("keydown", keyPress, false);
        // window.addEventListener("keyup", keyLifted, false);
        window.addEventListener("keydown", padsDown, false);
        window.addEventListener("keyup",padsUp,false);

    
    }
    master();
 
});