// JavaScript source code
function JTrim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}
function TTS() {
    var tex = document.getElementById('tex').value.replace("+", "%2B");
    var options = document.getElementsByName('options');
    var model_index;
    for(var i = 0; i < options.length; i++)
    {
        if(options[i].checked)
        {
            model_index = i;
        }
    }
    if (JTrim(tex).length == 0) {
        alert("please input text");
    }
    else {
        url = "http://10.13.34.16:1234/tts" + "?tex=" + tex + "&model_index=" + model_index;
        var x = document.getElementById("player");
        x.setAttribute("src", url);
        x.play();
    }
}
