// Create button
const btn = document.getElementById('btnLogin');
const elementI = document.getElementsByClassName('fa fa-lock');

// Set some properties
//btn.className = 'animated-button';
//btn.innerText  = 'Save';

// Add an event listener
btn.addEventListener('click', () => {
    // Add animation
    btn.classList.add('animate');
    btn.innerHTML = 'Loading...';
    setTimeout(function() {
        elementI.innerHTML = "<i class='fa fa-lock text-white'></i>&nbsp;";
        btn.innerHTML = elementI.innerHTML + 'Secure login';

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
            //window.location.href = "mulanay.html";
        } 
}, 3000);
});

// Add the button to the DOM
//document.body.appendChild(btn);