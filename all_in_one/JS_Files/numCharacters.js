/*
    what we need:
    -maxlength
    -location of textarea (document.getelementbyid...)
    -length of the value in textarea
    -text displays
*/

// getTextarea is now the element with the specified id
var getTextArea = document.getElementById("characters_left")
var getLength
var remainingChar
var description = document.getElementById("charCap")
// var getForm = document.getElementById("checkReset")

function resetVars()
{
    description.classList.remove("warningText");
    getLength = 0;
    remainingChar = getTextArea.maxLength;
    description.innerHTML = "";
}


function numChar()
{
    // gets the current length of text inside the textarea element live
    getLength = getTextArea.value.length

    // will be used to display the number of characters still available
    // before running out of space
    remainingChar = getTextArea.maxLength - getLength

    description.innerHTML = remainingChar + " of 64 characters left."

    if (remainingChar == 0)
    {
        if (!description.className.includes("warningText"))
            getTextArea.addEventListener("keypress", () => description.classList.add("warningText"))
    }
    else
    {
        description.classList.remove("warningText")
    }
}

function hideDisplay()
{
    description.innerHTML = ""
}


// fires this function immediately...or we can just call numChar() by itself (either way works)
// window.onload = numChar()

getTextArea.addEventListener("keyup", numChar)
getTextArea.addEventListener("keydown", numChar)

