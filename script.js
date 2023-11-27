document.onload = initialLoad();

function initialLoad() {
    var checkboxes = document.getElementsByTagName("input");
    for (c of checkboxes) {
        c.checked = false;
    }
    var frames = document.getElementsByClassName("edition-container");
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
    const optionField = document.getElementById(`hf_${editionId}`);
    optionField.classList.toggle("option-selected");
    const frame = document.getElementById(editionId);
    frame.classList.toggle("display-none");
    if (numberOfEditionsAtDisplay() > 0) {
        const placeholder = document.getElementById("placeholder");
        placeholder.classList.add("display-none");
    } else {
        const placeholder = document.getElementById("placeholder");
        placeholder.classList.remove("display-none");
    }
    // hide placeholder if there is at least one edition selected
}

function numberOfEditionsAtDisplay() {
    const editionContainers = document.getElementsByClassName('edition-container');
    var n = editionContainers.length;
    for (ec of editionContainers) {
        if (ec.classList.value.includes("display-none")) {
            n -= 1;
        }
    }
    return n;
}

function goToText(editionId, textId) {
    if (iiifRefs[editionId]) {
        const refs = iiifRefs[editionId]
        if (refs[textId]) {
            const url = uvBaseUrl + refs["manifest"] + uvCanvas + refs[textId]
            console.log(url)
            document.getElementById(`iframe_${editionId}`).src = url;
        } else {
            console.error(`No textId found in editionId ${editionId} for textId ${textId}`)
        }
    } else {
        console.error(`No refs found for editionId ${editionId}`)
    }
}

const uvBaseUrl = "https://universalviewer.io/uv.html?manifest="
const uvCanvas = "#&c=0&m=0&s=0&cv="

const iiifRefs = {
    "lyrica_1643": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11270675/manifest",
        "lyr_3_1": "135"
    }
}