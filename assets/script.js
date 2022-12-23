var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = [];
for (var i = 0; i < 10; i++){
    number.push(i);
}
var symbol = "~`!@#$%^&*()_+{}|:<>\\?/.,;'\"][=-".split("");
var submit = document.getElementById("generate");
var display = document.getElementById("display");

function submitPassword(){
    var numberChars = prompt("Please enter how many characters would you like to generate from 8-128?");

    if (numberChars === null){
        return;
    }
    if ((numberChars < 8 || numberChars > 128) || numberChars !== Number.isNan){
        alert("Please try again!");
        return submitPassword();
    } else {
        var includeLower = confirm("Would you like to include lowercases?");
        var includeUpper = confirm("Would you like to include uppercases?");
        var includeNumbers = confirm("Would you like to include numbers?");
        var includeSymbols = confirm("Would you like to include symbols?");

        if ((includeLower === false && includeUpper === false && includeNumbers === false && includeSymbols === false)){
            alert("Please try again! Please choose 1 character type!");
            return submitPassword();
        }

        var passwordCombination = [];
        
        if (includeLower){
             passwordCombination = passwordCombination.concat(lowercase);
        }     
        if (includeUpper){
            passwordCombination = passwordCombination.concat(uppercase);
        }    
        if (includeNumbers){
                passwordCombination = passwordCombination.concat(number);
        }        
        if (includeSymbols){
            passwordCombination = passwordCombination.concat(symbol);
        }    
        
        var passwordGenerated = "";
        
        for (var i = 0; i < numberChars; i++){
            passwordGenerated += passwordCombination[Math.floor(Math.random() * passwordCombination.length)];
        }
        
        alert(passwordGenerated);
        display.innerText = passwordGenerated;
    }
}

submit.addEventListener("click", submitPassword);