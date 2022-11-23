window.addEventListener('load', () => {
    loadData();
});
function reloadpage() {
    loadData();
}
function loadData() {
    var res;
    var pal = document.getElementById('pal');
    var yiyal = document.getElementById('yiyal');
    var athikaram = document.getElementById('athikaram');
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');
    var exp = document.getElementById('kural-exp');
    var num = Math.floor(Math.random() * (1330 - 1 + 1)) + 1;
    var url = "https://api-thirukkural.vercel.app/api?num=" + num;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            res = data;
        })
        .then(() => {
            pal.innerText = res.sect_tam;
            yiyal.innerText = res.chapgrp_tam;
            athikaram.innerText = res.chap_tam;
            line1.innerText = res.line1;
            line2.innerText = res.line2;
            exp.innerText = res.tam_exp;
        });
}