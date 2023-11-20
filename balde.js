document.onload = initialLoad();

function initialLoad() {
    var checkboxes = document.getElementsByTagName("input");
    for (c of checkboxes) {
        c.checked = false;
    }
    var frames = document.getElementsByClassName("iiif");
    for (f of frames) {
        f.classList.add("display-none");
    }
}

function selectText(textId) {
    var texts = document.getElementsByClassName("text");
    for (tx of texts) {
        tx.style.display = "none";
    }
    var textToShow = document.getElementById(textId);
    textToShow.style.display = "block";
}

function toggleEdition(editionId) {
    const frame = document.getElementById(editionId);
    frame.classList.toggle("display-none");
}