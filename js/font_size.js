function resize_text(m)
{
    if (document.body.style.fontSize == "") document.body.style.fontSize = "1.0em";
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (m * 0.2) + "em";

}

function reset_text()
{
    document.body.style.fontSize = "1.2em";
}