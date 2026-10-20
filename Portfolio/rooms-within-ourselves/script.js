let enterbuttons = document.querySelectorAll(".enterRoom");
enterbuttons.forEach((button) => {
    button.addEventListener("click", () =>{
        let roomname = button.dataset.room;
        document.querySelector("#" + roomname).style.display ="block";
    });
});
let closebuttons = document.querySelectorAll(".closeroom");
closebuttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.style.display="none"
    });
});
let mirrorform = document.querySelector("#mirrorform");
let mirrorResult = document.querySelector("#mirrorResult");
mirrorform.addEventListener("submit", (event) => {
    event.preventDefault();
    let message = document.querySelector("#message").value;
    let lowermessage = message.toLowerCase();
    if (lowermessage.includes("happy") || lowermessage.includes("excited") || lowermessage.includes("laugh") ||
        lowermessage.includes("grateful") || lowermessage.includes("hopeful") || lowermessage.includes("alive")
        || lowermessage.includes("cheerful") || lowermessage.includes("glad") || lowermessage.includes("fun")){
            mirrorResult.textContent = "Perhaps you're feeling the joy. I would recommend you visit room I";
        }
    else if (lowermessage.includes("loss") || lowermessage.includes("lost") || lowermessage.includes("death") ||
            lowermessage.includes("died") || lowermessage.includes("death") || lowermessage.includes("miss") ||
            lowermessage.includes("mourn") || lowermessage.includes("ache") || lowermessage.includes("let go")){
                mirrorResult.textContent = "Perhaps you're feeling grief. I would recommend you visit room II";
            } 
    else if (lowermessage.includes("sad") || lowermessage.includes("sadness") || lowermessage.includes("lonely") ||
            lowermessage.includes("loneliness") || lowermessage.includes("empty") || lowermessage.includes("emptiness") ||
            lowermessage.includes("tired") || lowermessage.includes("meaningless") || lowermessage.includes("exhausted")){
                mirrorResult.textContent = "Perhaps you're feeling deep sadness. I would recommend you visit room III";
            }           
    else if (lowermessage.includes("past") || lowermessage.includes("remember") || lowermessage.includes("memory") ||
            lowermessage.includes("memories") || lowermessage.includes("childhood") || lowermessage.includes("used to") ||
            lowermessage.includes("back") || lowermessage.includes("ago") || lowermessage.includes("flashback") ){
                mirrorResult.textContent = "Perhaps you're feeling nostalgia. I would recommend you visit room IV";
            }
    else if (lowermessage.includes("angry") || lowermessage.includes("anger") || lowermessage.includes("mad") || 
            lowermessage.includes("furious") || lowermessage.includes("rage") || lowermessage.includes("raging") ||
            lowermessage.includes("hate") || lowermessage.includes("angry") || lowermessage.includes("annoyed") ||
            lowermessage.includes("unfair") || lowermessage.includes("revenge") || lowermessage.includes("shout") || lowermessage.includes("scream") ){
                mirrorResult.textContent = "Perhaps you're feeling wrath. I would recommend you visit room V";
            }
    else{
            mirrorResult.textContent = "We are so sorry, but it seems like we don't have a room for this feeling yet. That surely doesn't mean that it isn't real.";
    }
});