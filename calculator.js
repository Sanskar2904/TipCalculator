function caltip() {
    var totalAmount = document.getElementById('billamount').value;
    var Quality=document.getElementById('QualityService').value;
    var num=document.getElementById('numPeople').value;


    var tipperPerson=(totalAmount*Quality)/num;
    document.getElementById("resAmt").innerHTML='Tip Amount :<br>'+'$'+tipperPerson+'<br>Per person';
}