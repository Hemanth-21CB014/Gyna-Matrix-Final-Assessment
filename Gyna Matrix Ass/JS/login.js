function load() {
    var u = document.getElementById("mail").value;
    console.log(u+"+++"+typeof u)
    var p = document.getElementById("pass").value;
    console.log(u + "****" +p);
    var val=[{"l":{
            "pass":"Hemanth@123",
            "user":"Hemanth"
          }}]
  var pass = val[0].l.pass;
  var user = val[0].l.user;
  if(u===user && p===pass)
        {
          console.log("---------")
          alert("LogIn success");
          window.open("student.html","_self")
          return
        }
        else{
          document.getElementById("chk").style.display="block"
    }
  console.log(pass+"---"+user)
}