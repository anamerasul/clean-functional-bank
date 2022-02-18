document.getElementById('login-submit').addEventListener('click', function(e){
        console.log('login')

        const userEmail=document.getElementById('user-email');
        const EmailValue=userEmail.value;

        console.log(EmailValue);

        const userPassWord=document.getElementById('user-password');
        const passwordValue=userPassWord.value;
        console.log(passwordValue)

        if(EmailValue=='sontan@baap.com' &&passwordValue=='secret' ){
                console.log("valid user")

                window.location.href="./banking.html"
        }

        else{
                console.log("invalid user")

                alert("Invalid user")
        }
});

