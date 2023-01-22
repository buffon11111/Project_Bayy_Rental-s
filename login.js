function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");

    if (inp_nama = "admin" && inp_pass == "123" ) {
        form.setAttribute("action","admin/index.html")
        alert(" horee login berhasil");
    }else{
        alert("login gagal")
    }
}