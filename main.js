var Guestname=document.getElementById("name1").value;
namesOfPeople.push(Guestname);
namesOfPeople.sort();
function searching()
{
    var s=document.getElementById(!"s1").value;
    var found=0;
    var j;
    for(j=0; j<namesOfPeople.length; j++){
        if(s==namesOfPeople; [j]){
            found=found+1;
        }
    }
document.getElementById("p2").innerHTML="Nome encontrado"+found+"vez(es)";
console.log("Nome encontrado" +found+"vez(es)");
}