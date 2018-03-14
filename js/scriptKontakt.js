window.onload=function(){

    document.getElementById("submit").addEventListener("click",provera);
    document.getElementById("reset").addEventListener("click",resetuj);
    
    document.getElementById("ime").focus();
}
function provera(){
    var reIme=/^[A-ZČĆĐŠŽ][a-zčćšđž]{2,13}$/;
    var rePrezime=/^([A-ZČĆĐŠŽ][a-zčćšđž]{2,13})+$/;
    var reMail=/^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
    var ime = document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var email = document.getElementById("email").value;
    var textPolje = document.getElementById("textPolje");

    var greske = [];

    if(!reIme.test(ime))
        {
            greske.push("Ime");
            document.getElementById("imePoruka").style.visibility="visible";
            document.getElementById("ime").style.border="1px solid red";
        }
        else
    {
       document.getElementById("imePoruka").style.visibility="hidden";
       document.getElementById("ime").style.border="1px solid green";
    }
    if(!rePrezime.test(prezime))
    {
        greske.push("Prezime");
        document.getElementById("prezimePoruka").style.visibility="visible";
        document.getElementById("prezime").style.border="1px solid red";
    }
    else
    {
       document.getElementById("prezimePoruka").style.visibility="hidden";
       document.getElementById("prezime").style.border="1px solid green";
    }
    if(!reMail.test(email))
    {
        greske.push("mail");
        document.getElementById("emailPoruka").style.visibility="visible";
        document.getElementById("email").style.border="1px solid red";
    }
    else
    {
       document.getElementById("emailPoruka").style.visibility="hidden";
       document.getElementById("email").style.border="1px solid green";
    }
    if(textPolje.length==0)
    {
        greske.push("textPolje");
        document.getElementById("textPoruka").style.visibility="visible";
    }
    else
    {
       document.getElementById("textPoruka").style.visibility="hidden";
    }
    if(greske.length==0)
    {
        alert("Vasa poruka je uspesno poslata!");
    }
}
function resetuj()
{
    document.getElementById("ime").value="";
    document.getElementById("prezime").value="";
    document.getElementById("email").value="";
    document.getElementById("textPolje").value="";

}
