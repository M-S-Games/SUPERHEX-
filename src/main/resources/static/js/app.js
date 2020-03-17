var app = (function () {
    function showCreateRoom() {
        document.getElementById("central").innerHTML = "<form class=\"login100-form validate-form\">\n" +
            "\t\t\t\t\t<span class=\"login100-form-title p-b-34 p-t-27\">\n" +
            "\t\t\t\t\t\tCreate Room\n" +
            "\t\t\t\t\t</span>\n" +
            "\n" +
            "\t\t\t\t\t<div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n" +
            "\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"room\" placeholder=\"Room name\">\n" +
            "\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n" +
            "\t\t\t\t\t</div>\n" +
            "\n" +
            "\t\t\t\t\t<div class=\"container-login100-form-btn\">\n" +
            "\t\t\t\t\t\t<button class=\"login100-form-btn\">\n" +
            "\t\t\t\t\t\t\tCreate \n" +
            "\t\t\t\t\t\t</button>\n" +
            "\t\t\t\t\t</div>\n" +
            "\n" +
            "\t\t\t\t\t<div class=\"container-login100-form-btn\">\n" +
            "\t\t\t\t\t\t<button class=\"login100-form-btn\">\n" +
            "\t\t\t\t\t\t\tBack\n" +
            "\t\t\t\t\t\t</button>\n" +
            "\t\t\t\t\t</div>\n" +
            "\n" +
            "\t\t\t\t</form>";
    }
    return{
        showCreateRoom:showCreateRoom
    }
    
})();