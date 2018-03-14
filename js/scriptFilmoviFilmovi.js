$(document).ready(function(){
    
    $("#btnPretrazi").on("click", pretrazi);

    dohvatiJsonFilmove();
    $("#1").on("click",function() {
       
            $(".dodatak1").attr("class","detaljno dodatak1");
            $(".dodatak2").attr("class","slikaDetaljno dodatak2");
            $(".dodatakDesno").attr("class","detalji dodatakDesno");
            $(".nevidljiv").css("display","block");
            $("#2").attr("class","prikaz");
            $("#1").attr("class","prikaz aktiv");
        
    });

    $("#2").on("click",function() {
       
        $(".dodatak1").attr("class","Ffilm dodatak1");
        $(".dodatak2").attr("class","dodatak2");
        $(".dodatakDesno").attr("class","dodatakDesno nazivFilma");
        $(".nevidljiv").css("display","none");
        $("#2").attr("class","prikaz aktiv");
        $("#1").attr("class","prikaz");
    });

    $("#ddlAZ").on("change",function(){
        var tip = Number($(this).val());
        var nizFilmova = $(".dodatak1");
        if(tip==1)
        {
            nizFilmova.sort(function(a,b){
                a=($(a).find(".naziv").text());
                b=($(b).find(".naziv").text());
                if(a>b) return 1;
                else if(a<b) return -1;
                else return 0;
            });
        }
        else
        {
            nizFilmova.sort(function(a,b){
                a=($(a).find(".naziv").text());
                b=($(b).find(".naziv").text());
                if(a>b) return -1;
                else if(a<b) return 1;
                else return 0;
            });
        }
        
        $("#ispisFilmova").html(nizFilmova);
        document.getElementById("ispisFilmova").innerHTML+='<div class="cleaner"></div>';
    });
    $("#ddl19").on("change",function(){
        var tip = Number($(this).val());
        var nizFilmova = $(".dodatak1");
        if(tip==1)
        {
            nizFilmova.sort(function(a,b){
                a=Number($(a).find(".ocena").text());
                b=Number($(b).find(".ocena").text());
                if(a>b) return 1;
                else if(a<b) return -1;
                else return 0;
            });
        }
        else
        {
            nizFilmova.sort(function(a,b){
                a=Number($(a).find(".ocena").text());
                b=Number($(b).find(".ocena").text());
                if(a>b) return -1;
                else if(a<b) return 1;
                else return 0;
            });
        }
        
        $("#ispisFilmova").html(nizFilmova);
        document.getElementById("ispisFilmova").innerHTML+='<div class="cleaner"></div>';
    });

    

});








function dohvatiJsonFilmove()
{
    $.ajax(
        {
        url: "js/json/filmovi.json",
		type: "get",
		dataType: "json",
        success: function(podaci)
        {
            generisiFilmove(podaci);
           
        }
        });
}

function generisiFilmove(podaci)
{
    document.getElementById("ispisFilmova").innerHTML="";
    var ispis="";
    for(var i = 0; i<podaci.length;i++)
    {
        
        ispis+=' <div class="detaljno dodatak1"><div class="slikaDetaljno dodatak2"> <img src="'+podaci[i].slika+'"   alt="'+podaci[i].naziv+'"/></div><div class="detalji dodatakDesno"><table><tr><td>Naziv: </td><td><p class="naziv">'+podaci[i].naziv+'</p></td></tr><tr><td>Imdb: </td><td><p class="ocena">'+podaci[i].imdb+'</p></td></tr><tr><td>Zanr: </td><td><p class="zanr">';
        for(var j in podaci[i].zanr)
        {
            ispis+=podaci[i].zanr[j]+" ";
        }
        ispis+='<tr><td><p class="nevidljiv"> Opis:</p></td><td><p class="nevidljiv">'+podaci[i].opis+'</p></td></tr> </td></tr></table></div></div>';
        

    }
    ispis+='<div class="cleaner"></div>';
    $("#ispisFilmova").html(ispis);
}
function pretrazi()
{
    var divovi = $(".dodatak1");
    var zanr= $("#zanr").val();
    $.ajax({
        url:'js/json/filmovi.json',
        type:'GET',
        dataType:'json',
        success: function(podaci){
            if(zanr==0)
                    {
                        generisiFilmove(podaci);
                        return;
                    }
                    document.getElementById("ispisFilmova").innerHTML="";
                    var ispis="";
                    var broj=0;
                    for(var i = 0; i<podaci.length;i++)
                    {
                        broj=0;
                        for(var j in podaci[i].zanr)
                        {
                            if(zanr==podaci[i].zanr[j])
                                {
                                    broj++;
                                    break
                                }
                        }
                        if(broj==1)
                        {
                        ispis+=' <div class="detaljno dodatak1"><div class="slikaDetaljno dodatak2"> <img src="'+podaci[i].slika+'"   alt="'+podaci[i].naziv+'"/></div><div class="detalji dodatakDesno"><table><tr><td>Naziv: </td><td><p class="naziv">'+podaci[i].naziv+'</p></td></tr><tr><td>Imdb: </td><td><p class="ocena">'+podaci[i].imdb+'</p></td></tr><tr><td>Zanr: </td><td><p class="zanr">';
                        for(var j in podaci[i].zanr)
                        {
                            ispis+=podaci[i].zanr[j]+" ";
                        }
                        ispis+='<tr><td><p class="nevidljiv"> Opis:</p></td><td><p class="nevidljiv">'+podaci[i].opis+'</p></td></tr> </td></tr></table></div></div>';
                         }
        
                    }
                    ispis+='<div class="cleaner"></div>';
                    $("#ispisFilmova").html(ispis);
}});
}