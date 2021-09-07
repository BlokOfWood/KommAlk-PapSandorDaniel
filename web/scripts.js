function generateSequence()
{
    var elsoElem = parseInt(document.getElementById("elsoelem").value);
    var differencia = parseInt(document.getElementById("differencia").value);
    var generáltSzámokSzáma = parseInt(document.getElementById("number").value);

    let jelenlegiSzám = elsoElem;

    document.getElementById("output").innerHTML = "";

    for(let i = 0; i < generáltSzámokSzáma; i++)
    {
        document.getElementById("output").innerHTML += "<p> " + (i+1) + ".szám: " + jelenlegiSzám + "</p>";
        jelenlegiSzám += differencia;
    }
}