function find() {
    let bt = document.getElementById("button");

    var eb = document.getElementById("eb").value;
    var gb = document.getElementById("gb").value;
    var ob = document.getElementById("ob").value;
    var km = document.getElementById("km").value;
    var a4 = document.getElementById("a4").value;
    var ag = document.getElementById("ag").value;

    var reb = 105 * parseInt(eb);
    var rgb = 105 * parseInt(gb);
    var rob = 113 * parseInt(ob);
    var rkm = 0.79 * parseInt(km);
    var ra4 = 1100 * parseInt(a4);
    var rag = 4400 * parseInt(ag);
    var tot = reb + rgb + rob + rkm + a4 + ag;

    const news = document.querySelector('input[name="newsp"]:checked');
    if (news.value == 'yes') {
        tot = tot + 184;
    }

    const met = document.querySelector('input[name="mesc"]:checked');
    if (met.value == 'yes') {
        tot = tot + 166;
    }

    // console.log(tot);
    document.getElementById("ans").innerHTML = tot;
}