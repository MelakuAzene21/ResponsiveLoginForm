const ShowHide = document.getElementById("show-hide");
const passwordShow=document.getElementById("password");
ShowHide.addEventListener("click",function(){
    ShowHide.classList.toggle("show");
    if(ShowHide.classList.contains("show")){
        ShowHide.classList.remove("fa-eye-slash");
        ShowHide.classList.add("fa-eye");
        passwordShow.setAttribute("type","text");
    }else{
        ShowHide.classList.add("fa-eye-slash");
        ShowHide.classList.remove("fa-eye");
        passwordShow.setAttribute("type","password");
    }
});