$(document).ready(function(){
    $("#submit").click(function(){
        var secretPwd = "TIENGEMDIU"
        var pwd = $("#typePassword").val();
        if (pwd == "") {
            pwdError = "Hãy nhập câu trả lời của bạn.";
            $("#error").text(pwdError)
            $('input[type="password"]').focus();
        } else if (pwd != secretPwd){
            invalidError = "Câu trả lời sai rồi.";
            $("#error").text(invalidError)
            $('input[type="password"]').focus();
        } else {
            messageSuccess = "Chính xác.";
            $("#error").text("")
            $("#success").text(messageSuccess)
            $("#key").text("[3]-[1]-[9] Có 1 số đúng nhưng đặt sai vị trí")

            document.getElementById("submit").disabled = true;
            document.getElementById("typePassword").disabled = true;
        }
    });

    $("#showPwd").click(function(){
      var input = document.getElementById("typePassword");
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
});