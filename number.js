function myFunction(){
    var inputobject = document.getElementById("id1");
    if(!inputobject.checkValidity()) {
        document.getElementById("demo").innerHTML = inputobject.validationMessage;
    }
    else {
        document.getElementById("demo").innerHTML = "Input Ok";
    }
}