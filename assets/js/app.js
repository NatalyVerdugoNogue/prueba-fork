window.onload = function () {
    var buttonName = document.getElementById('enterName');
    var welcome = document.getElementById('userName');

    buttonName.addEventListener('click', function () {
        var name = document.getElementById('nameLoad').value
        document.getElementById('userName').innerHTML = 'Bienvenid@ ' + name;
    })

}