$(document).ready(function(){
    $("#btnLogin").click(function () {
        var username = $("#userNam").val();
        var password = $("#userPass").val();
        if (username == "")
        {
            alert("Please input username.");  
        }
        else if (password == "")
        {
            alert("Please input password.");  
        }
        else if (username != "admin")
        {
            alert("Invalid username or password.");   
            document.getElementById('userNam').value = "";
            document.getElementById('userPass').value = "";         
        }
        else if (password != "admin")
        {
            alert("Invalid username.");  
            document.getElementById('userNam').value = "";
            document.getElementById('userPass').value = "";          
        }
        else {
            alert("Success.");  
            window.location.href = "mulanay.html";
        }                
    });
});