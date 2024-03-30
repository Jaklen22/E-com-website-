
$(".loginbtn , .already-account").click(function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});
$(".sign-up-btn").click(function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});
$(".form-cancel").click(function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});