var btn = document.getElementById('btn');
    btn.addEventListener('click', function (e){
        e.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var body = 'name' + '<br/> email:' + email + '<br/> message:' + message 
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ojos7756@gmail.com",
            Password : "swlgykehuwpybqow",
            To : 'ojos7756@gmail.com',
            From :  'you@isp.com' ,
            Subject : 'New Contact From Enquiry',
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    })