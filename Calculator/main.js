let outputScreen =document.getElementById("output-screen");

//text box//
        function display(num){
            outputScreen.value += num;
        }

//equal//
        function calculate(){
            try{
                outputScreen.value = eval(outputScreen.value);
            }
            catch(err){
                alert("Invalid input")
            }
        }

        //clear//

       function Clear() {
              outputScreen.value ="";
       }


       //delete//
        function del(){
            outputScreen.value=outputScreen.value.slice(0,-1);
        }
 
        //toggletheme//
        function toggleTheme() {
        document.body.classList.toggle("dark-mode");
      }


       //   KEYBOARD ACTIONS//
       document.addEventListener("keydown", function (event) {
        let key = event.key;
        if (!isNaN(key) || "+-*/.".includes(key)) {
          outputscreen.value += key;
        } else if (key == "Enter") {
          Calculate();
        } else if (key === "Backspace") {
          del();
        }
      });

