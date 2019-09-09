document.getElementById("formulario").addEventListener('submit',BuscaPalavra);



function BuscaPalavra(e){
    var palavra = document.getElementById("palavra").value;
    console.log(palavra);
    e.preventDefault();
    if(palavra in Array){
        
    }
}