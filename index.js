let divElem = document.createElement("div");
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
let val = localStorage.getItem("text");
let text;
if(val == null){
    text = document.createTextNode("Click here to edit");
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);
let container = document.querySelector(".container");
container.appendChild(divElem);
console.log(divElem,container);

//adding eventlistener to div element
divElem.addEventListener("click", function() {
    let noOfTextArea = document.getElementsByClassName("textarea").length;
    if(noOfTextArea==0){
        let html = elem.innerHTML;
        divElem.innerHTML =  `<textarea class="textarea" id="textarea" placeholder="Click here to edit." rows="6">${html}</textarea>`;
    }
    let textarea = document.getElementById("textarea");
    textarea.addEventListener("blur", function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem("text",textarea.value);
    });
});