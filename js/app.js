//Variables Globales
var tweetButton= document.getElementById("tweet-button");

//Eventos agregados a mis variables globales
tweetButton.addEventListener("click", getText);

//funciones creadas
function getText (){
    //Crear elementos que me guarden lo del Text Area
    var main= document.getElementById("main");
    var parentText= document.createElement("div");
        parentText.id= "parent-text";
    var textArea= document.getElementById("cont-text").value;
    var paragraphs= document.createElement('p');
        paragraphs.id= "paragraph";
    var childrenText= document.createTextNode(textArea);


    //Definir lugar
    paragraphs.appendChild(childrenText);
    parentText.appendChild(paragraphs);
    main.appendChild(parentText);
    

    //limpiar textArea
    document.getElementById("cont-text").value= "";
};
