
    function randomNumber(min, max) {
        min = parseInt(min)
        max = parseInt(max)
        let rand =  Math.floor(Math.random() * ((max - min) + 1) + min);
        return rand
    }

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
let base = "https://wcstrickland.github.io/improvtoolkit/"