function selectText(textId) {
    var texts = document.getElementsByClassName("text");
    for (tx of texts) {
        tx.style.display = "none";
    }
    var textToShow = document.getElementById(textId);
    textToShow.style.display = "block";
}