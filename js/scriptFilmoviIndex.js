$(document).ready(function(){
    $(".filtriranje").on("click", prikaziFilmove);
    dohvatiFilmove("uskoro");
    $(".link").on("click", function(){
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
   
});
function prikaziFilmove()
{
    var tip = $(this).attr("data-klik");
    dohvatiFilmove(tip);
    $(".filtriranje")[0].classList.remove("aktiv");
    $(".filtriranje")[1].classList.remove("aktiv");
    
    if(tip=="uskoro")
        $(".filtriranje")[0].classList.add("aktiv");
    else if(tip=="aktuelno")
        $(".filtriranje")[1].classList.add("aktiv");


}
function dohvatiFilmove(tip)
{
    $("#filmovi").html("");
    $.ajax({
        url: "js/json/filmovi.json",
		type: "get",
		dataType: "json",
		success: function(podaci){

            var ispis="";
    var broj=0;
    for(var i = 0; i<podaci.length;i++)
    {
        if(tip==podaci[i].tip)
        {
            ispis+=' <div class="film"><div class="slika"> <img src="'+podaci[i].slika+'" alt="'+podaci[i].naziv+'"/></div><div class="nazivFilma"><table><tr><td>Naziv: </td><td>'+podaci[i].naziv+'</td></tr><tr><td>Imdb: </td><td>'+podaci[i].imdb+'</td></tr><tr><td>Zanr: </td><td>';
            for(var j in podaci[i].zanr)
            {
                ispis+=podaci[i].zanr[j]+" ";
            }
            ispis+=' </td></tr></table></div></div>';
            broj++;
         }
       
       if(broj>3) break;

    }
    ispis+='<div class="cleaner"></div>';
    $("#filmovi").html(ispis);
    }
		
    }); 
}
