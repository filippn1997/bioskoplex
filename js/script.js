$(document).ready(function() {
    popuniVesti();
    $(".sakriven").hide();
    $(".dugme").on("click", function(){
        $(this).parent().find(".sakriven:first").slideToggle('slow');
        
        if($(this).attr("value")=="Procitaj vise")
            $(this).attr("value","Umanji");
        else $(this).attr("value","Procitaj vise");

        
    });
    //slajder
    var index=0;
   slajder(index);
document.addEventListener('keydown', function(e){
    if(e.keyCode== 37) {
        slajder(--index);
    }
    if(e.keyCode == 39) {
        slajder(++index);
    }
    });
    document.getElementById("nazad").addEventListener("click", function(){
        slajder(--index);
        
    });
    document.getElementById("napred").addEventListener("click", function(){
        slajder(++index);
        
    });
    
    var tajmer = setInterval(function(){slajder(++index);}, 8500);    
    $(".tacka").on("click",function(){
       index= $(this).attr("data-vrednost");
       
       slajder(index);
    });
    function slajder(broj)
    {
        var slajd = document.querySelectorAll(".slajd");
        var tacke = document.getElementsByClassName("tacka");
        
        if(broj<0)
        {
            
            index=slajd.length-1;
        }
        
        if(broj>slajd.length-1)
        {
            index=0;
        }
        for(var i=0; i< slajd.length;i++)
        {
            slajd[i].style.display="none";
            slajd[i].classList.remove("fade");
            tacke[i].classList.remove("aktivna");
            
        }
        
        slajd[index].style.display="block";
        slajd[index].classList.add("fade");
        tacke[index].classList.add("aktivna");
        
    }
$(".link").hover(
function(){
    $(this).css("background-color","rgba(34, 17, 16, 1)");
},
function(){
    $(this).css("background-color","rgba(34, 17, 16, 0.781)");
},
);

});

var vesti= [
	{
		naslov:"3D tehnologije",
		text1:"RealD je predvodnik 3D tehnologije i najrašireniji svetski 3D sistem. U potpunosti je digitalizovan tako da se pomoću njega doživljava zapanjujuće realistično i osvajajuće iskustvo.",
		text:"Svako oko vidi malo drugačiju sliku, a naš mozak ih spaja u jednu savršenu. Razlika u slikama pomaže mozgu da određuje dubinu i udaljenost. RealD koristi te karakteristike ljudske percepcije kako bi stvorio 3D sliku. "
	},
	{
		naslov:"Festival fotografije",
		text1:"Festival je prilika za okupljanje medijskih fotografa i publike širom zemlje. Kroz debate i otvoren razgovor sa medijima, stručnjacima i predstavnicima iz različitih oblasti, tribine i radionice biće svojevrstan način povezivanja i komunikacije sa publikom.",
		text:"Fotografija je moćno izražajno sredstvo, vizuelna umetnost i socijalni fenomen koji društvu i svojoj svrsi najbolje služi u okvirima profesionalne i etičke atmosfere rada. A za najbolje slede i nagrade."
	},
	{
		naslov:"Projekcija starih filmova",
		text1:"Sada i kod nas u bioskopu, najbolji domaci i strani stari filmovi. Od domacih klasika, sve do crno-belih filmova svetske kinematografije.",
		text:"Ulaz bice po promo ceni od 100 dinara, a za najmladje besplatan uz mnostvo dodatnih iznenadjenja."
	},
	{
		naslov:"Zvucne tehnologije",
		text1:"Najsavremeniji Dolby Digital Surround EX procesori zvuka, u kombinaciji sa JBL zvučnim sistemima, profesionalno su optimizovani kako bi publici obezbedili novi nivo zvuka.",
		text:" Ne samo da ćete gledati film, već ćete biti potpuno uživljeni u akciju na platnu!"
	}
];
function popuniVesti()
{
	var ispis="";
	for(var index=0;index<2;index++)
	{
		ispis+='<div class="vest"><h3>'+vesti[index].naslov+'</h3><p>'+vesti[index].text1+'</p><p class="sakriven">'+vesti[index].text+'</p><input type="button" class="dugme" value="Procitaj vise"/>';
    }
    document.getElementsByClassName("drzacVest")[0].innerHTML=ispis;
    ispis="";
	for(var index=2;index<4;index++)
	{
		ispis+='<div class="vest"><h3>'+vesti[index].naslov+'</h3><p>'+vesti[index].text1+'</p><p class="sakriven">'+vesti[index].text+'</p><input type="button" class="dugme" value="Procitaj vise"/>';
	}
    document.getElementsByClassName("drzacVest")[1].innerHTML=ispis;
}

