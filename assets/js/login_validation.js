$(document).ready(function(){
    $("#btnLogin").click(function () {
        var username = $("#userNam").val();
        var password = $("#userPass").val();
        if (username == "")
        {
            Swal.fire
            ({
                title: 'Invalid username!',
                icon: 'warning',
                html:
                  'Please input username.',
                focusConfirm: false,
                showConfirmButton: true,
                confirmButtonColor: '#aa2c22'
              })
            //alert("Please input username.");  
        }
        else if (password == "")
        {
            Swal.fire
            ({
                title: 'Invalid password!',
                icon: 'warning',
                html:
                  'Please input password.',
                focusConfirm: false,
                showConfirmButton: true,
                confirmButtonColor: '#aa2c22'
              })
            //alert("Please input password.");  
        }
        else if (username != "admin")
        {
            Swal.fire
            ({
                title: 'Invalid username or password!',
                icon: 'warning',
                html:
                  'Please input correct username and password.',
                focusConfirm: false,
                showConfirmButton: true,
                confirmButtonColor: '#aa2c22'
              })
            //alert("Invalid username or password.");   
            document.getElementById('userNam').value = "";
            document.getElementById('userPass').value = "";         
        }
        else if (password != "admin")
        {
            Swal.fire 
            ({
                title: 'Invalid username or password!',
                icon: 'warning',
                html:
                  'Please input correct username and password.',
                focusConfirm: false,
                showConfirmButton: true,
                confirmButtonColor: '#aa2c22'
              })
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
                  'You are logged in now.',
                focusConfirm: false,
                confirmButtonColor: '#4ba938',
                confirmButtonText:
                    '<a id="validButton" href="mulanay.html" class="text-white" style="text-decoration:none"> ' +
                        'Ok' +
                    '</a>'
              })
            //alert("Success.");  
            //window.location.href = "mulanay.html";
        }                
    });
});