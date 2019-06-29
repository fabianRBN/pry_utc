var modal;

var dataAll = [];

dataAll.push( {
    "id":"0",
    "nombre":"TRIANGULISMO",
    "detalle":"Técnica en donde se sobreponen triángulos sobre una imagen, el resultadofinal es en vector",
    "tecnica":"Triangulismo",
    "Anio":"2015",
    "Autor":"Paúl Valenzuela",
    "Docente":"Lenín Tamayo",
    "Software":"Adobe Ilustrator",
    "Semestre":" Tercero",
    "path":"./public/img/TRIANGULISMO.jpg"
});
dataAll.push( {
    "id":"1",
    "nombre":"DIBUJO ARTÍSTICO",
    "detalle":"Proyecto análogo realizado a mano con lápices y carboncillo sobre un soporte de cartón de ilustración.",
    "tecnica":"Carboncillo",
    "Anio":"2018",
    "Autor":"Gallegos Jennyfer",
    "Docente":" Sergio Chango",
    "Software":"Cartón de Ilustración ",
    "Semestre":" Tercero",
    "path":"./public/img/DIBUJO ARTISTICO.jpg"
});
dataAll.push( {
    "id":"2",
    "nombre":"CIRCULISMO",
    "detalle":"La mama negra detallada con círculos a su alrededor, técnica utilizada en  base a círculos.",
    "tecnica":"Circulismo",
    "Anio":"2015",
    "Autor":"Paúl Valenzuela",
    "Docente":"Lenín Tamayo",
    "Software":"Adobe Ilustrator",
    "Semestre":" Tercero",

    "path":"./public/img/CIRCULISMO.jpg"
});
dataAll.push( {
    "id":"3",
    "nombre":"COMPOSICION",
    "detalle":"La mama negra detallada con círculos a su alrededor, técnica utilizada en  base a círculos.",
    "tecnica":"Composición",
    "Anio":"2015",
    "Autor":"Paúl Valenzuela",
    "Docente":"Lenín Tamayo",
    "Software":"Adobe Ilustrator",
    "Semestre":" Tercero",

    "path":"./public/img/COMPOSICION.jpg"
});
dataAll.push( {
    "id":"4",
    "nombre":"MATT PAINTING",
    "detalle":"Elementos que conforma una imagen realista o surrealista, mediante la fusión de varias imágenes en uno.",
    "tecnica":"Matt Painting",
    "Anio":"2015",
    "Autor":"Cesar Solorzano",
    "Docente":"Hipatia Galarza",
    "Software":"Adobe Photoshop",
    "Semestre":" Cuarto",
    "path":"./public/img/MATT PAINTING.jpg"
});
dataAll.push( {
    "id":"5",
    "nombre":"IMAGEN DIGITAL",
    "detalle":"Pinceles y varias capas de Photoshop sobre una imagen, la utilización de colores y trazos.",
    "tecnica":"Circulismo",
    "Anio":"2015",
    "Autor":"Paúl Valenzuela",
    "Docente":"Jorge Freire",
    "Software":"Adobe Ilustrator",
    "Semestre":" Cuarto",
    "path":"./public/img/IMAGEN DIGITAL.jpg"
});

dataAll.push( {
    "id":"6",
    "nombre":"DIBUJO ARTÍSTICO",
    "detalle":"Proyecto análogo realizado a mano con lápices y carboncillo sobre un  soporte de cartón de ilustración.",
    "tecnica":"Carboncillo",
    "Anio":"2018",
    "Autor":"Gallegos Jennyfer",
    "Docente":"Sergio Chango",
    "Software":"Cartón de Ilustración ",
    "Semestre":" Tercero",
    "path":"./public/img/DIBUJO ARTISTICO 1.jpg"
});
dataAll.push( {
    "id":"7",
    "nombre":"MATT PAINTING",
    "detalle":"Elementos que conforma una imagen realista o surrealista, mediante la fusión de varias imágenes en uno.",
    "tecnica":"Matt Painting",
    "Anio":"2015",
    "Autor":"Cesar Solorzano",
    "Docente":"Hipatia Galarza",
    "Software":"Adobe Photoshop ",
    "Semestre":" Tercero",
    "path":"./public/img/MATT PAINTING 1.jpg"
});


document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    modalshow();
  })
function modalshow(){
    // Get the modal
    modal = document.getElementById("modal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
}

function showmodal(data){
    var img = document.getElementById("imgModal");
    img.src=dataAll[data].path;
    var objt;
    dataAll.forEach(e=>{
        if(e.id  == data){
            objt = e;
        }
    })
    console.log(objt);
    document.getElementById("nombre").innerHTML ="Nombre: "+objt.nombre+ "<br>";
    document.getElementById("tecnica").innerHTML ="Tecnica: "+ objt.tecnica+ "<br>";
    document.getElementById("anio").innerHTML = "Año: "+ objt.Anio+ "<br>";
    document.getElementById("autor").innerHTML = "Author: "+objt.Autor+ "<br>";
    document.getElementById("docente").innerHTML ="Docente:"+ objt.Docente+ "<br>";
    document.getElementById("software").innerHTML ="Software:"+ objt.Software+ "<br>";
    document.getElementById("semestre").innerHTML ="Semestre:"+ objt.Semestre+ "<br>";
    console.log(data);
    modal.style.display = "block";
    
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


function buscar(){
    document.getElementById("proyectos").innerHTML="";

    var query = document.getElementById('txtBuscar');
    query = query.value.toUpperCase();
    var cardhtml = ``;
    dataAll.forEach( data =>{
        var nombre = data.nombre.toUpperCase();
    
        
        if( nombre.indexOf(query)>-1){
            console.log(data)
            cardhtml = cardhtml + `
            <div class="col-3" onclick="showmodal('`+data.id+`')">
                    <img class="imgCardview" src="`+data.path+`" />
                    <div class="col-12">
                        <div class="card-title">`+data.nombre+`</div>
                        <p class="card-container">`+data.detalle+`</p>
                    </div>
                </div>
            `;

        }
    });

    document.getElementById("proyectos").innerHTML=cardhtml;
}