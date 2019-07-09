let contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'marcela' + '.' + 'hdez' + '.' + '1801' + '@' + 'gmail' + '.' + 'com');


$(document).ready(function() {
    $(".validForm").click(function(event){
        console.log("click buttom");

        let email = $(".email").val()
        let subject = $(".subject").val()
        let message = $(".message").val()
        let status = $(".status")
        status.empty()

        if(email.length > 5 && email.includes("@") && email.includes(".")){
            // status.append("<div>Email is valid</div>")
            console.log("email is valid");    
        }else{
            event.preventDefault()
            .alert("Ingrese nombre")
            // status.append("<div>Email is not valid</div>")
            console.log("email not valid");            
        }

        if(subject.length >= 2){
            console.log("subject is valid");
            // status.append("<div>Subject is valid</div>")
        }else{
            event.preventDefault()
            console.log("subject is not valid");
            // status.append("<div>Subject is not valid</div>")
        }

        if(message.length >= 10){
            console.log("message is valid");
            // status.append("<div>message is valid</div>")
        }else{
            event.preventDefault()
            console.log("message is not valid");
            // status.append("<div>message is not valid</div>")
        }
    })
})