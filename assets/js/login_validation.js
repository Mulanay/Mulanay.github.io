$(document).ready(function(){
    $("#btnLogin").click(function () {
        var username = $("#userNam").val();
        var password = $("#userPass").val();
        if (username == "")
        {
            Swal.fire
            (
                'Invalid username',
                'Please input username.',
                'warning'
            )
            //alert("Please input username.");  
        }
        else if (password == "")
        {
            Swal.fire
            (
                'Invalid password',
                'Please input password.',
                'warning'
            )
            //alert("Please input password.");  
        }
        else if (username != "admin")
        {
            Swal.fire 
            (
                'Invalid username or password.',
                'Please input correct username and password.',
                'warning'
            )
            //alert("Invalid username or password.");   
            document.getElementById('userNam').value = "";
            document.getElementById('userPass').value = "";         
        }
        else if (password != "admin")
        {
            Swal.fire 
            (
                'Invalid username or password.',
                'Please input correct username and password.',
                'warning'
            )
            //alert("Invalid username.");  
            document.getElementById('userNam').value = "";
            document.getElementById('userPass').value = "";          
        }
        else {
            Swal.fire
            ({
                title: 'Success!',
                icon: 'success',
                html:
                  'Successfully log-in.',
                focusConfirm: false,
                confirmButtonText:
                    '<a href="mulanay.html" class="text-white" style="text-decoration:none"> ' +
                        '<i class="fa fa-thumbs-up"></i> Great! ' +
                    '</a>',
                confirmButtonAriaLabel: 'Thumbs up, great!'
              })
            //alert("Success.");  
            //window.location.href = "mulanay.html";
        }                
    });
});