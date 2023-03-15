document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select').onchange = function() {
        document.querySelector('#hello').style.color = this.value;
    }
});