function generateRanNum(){
    //generates random number between 1-9
    
    return Math.floor(Math.random() * 10);
}

function generateRanAlph(){
    //generates random letter A-Z

    //length is 52
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    letterPos = Math.floor(Math.random() * 52);

    return characters[letterPos]
}

function startGenerating(isLetter){
    var passwordChar = "";
    var addThisToPassword = "";

    if(isLetter){
        //0-10 letters if the password should start with a letter
        alphaLength = Math.floor(Math.random() * 11)

        //go to generateRanAlph and add the 1-10 amount to the password
        for(let i = 0;i < alphaLength;i++){
            passwordChar = generateRanAlph();
            addThisToPassword = addThisToPassword + passwordChar;
        }
    }
    else if(!isLetter){
        //0-5 numbers if the password doesnt start with a letter
        numLength = Math.floor(Math.random() * 6)

        for(let i = 0;i < numLength;i++){
            passwordChar = generateRanNum();
            addThisToPassword = addThisToPassword + passwordChar;
        }
    }

    return addThisToPassword;
}

function initializeWebsite(){
    //changes the text to white, makes it look better
    document.getElementById("passwordText").style.color = "white";

    //clears the text
    document.getElementById("passwordText").innerHTML = "";
}

function generatePassword(){
    initializeWebsite();
        
    var password = ""; 
    //WHEN USING MATH.FLOOR REMEMBER THAT IT WILL NOT GO ABOVE 1 MINUS THE NUMBER YOU HAVE INPUTTED EXAMPLE math.floor 3 will ONLY return 0,1,2
    var passwordLength = Math.floor(Math.random() * 101);

    var startWithLetter = Math.floor(Math.random() * 2);
    var addALetter = 999;

    var addToPassword = "";

    //this determines the first couple of letters/numbers in the password
    if(startWithLetter == 1){
        password = startGenerating(true)
    }
    else{
        password = startGenerating(false)
    }

    //add the rest of the password to 
    for(let i = 0; i < passwordLength;i++){
        addALetter = Math.floor(Math.random() * 2);

        if(addALetter == 1){
            addToPassword = startGenerating(true);
            password = password + addToPassword;
        }
        else{
            addToPassword = startGenerating(false);
            password = password + addToPassword;
        }
    }
    
    document.getElementById("passwordText").innerHTML = password;
}