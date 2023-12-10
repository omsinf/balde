const iiifRefs = {
    "lyrica_1643": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11270675/manifest",
        "pages": {
            "lyr_3_1": 135,
            "lyr_3_31": 175,
            "lyr_3_32": 176,
            "lyr_3_33": 179,
            "lyr_3_34": 180,
            "lyr_3_35": 182,
            "lyr_3_36": 184,
        }
    },
    "lyrica_1660": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10609929/manifest",
        "pages": {
            "lyr_3_1": 123,
            "lyr_3_31": 162,
            "lyr_3_32": 163,
            "lyr_3_33": 166,
            "lyr_3_34": 167,
            "lyr_3_35": 169,
            "lyr_3_36": 171,
        }
    },
    "lyrica_1729": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10712436/manifest",
        "pages": {}
    },
    "lyrica_1805": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608714/manifest",
        "pages": {}
    },
    "lyrica_1844": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608720/manifest",
        "pages": {}
    }
}

const tifyLyrica1643 = new Tify({
    manifestUrl: iiifRefs.lyrica_1643.manifest,
});
const tifyLyrica1660 = new Tify({
    manifestUrl: iiifRefs.lyrica_1660.manifest,
});
const tifyLyrica1729 = new Tify({
    manifestUrl: iiifRefs.lyrica_1729.manifest,
});
const tifyLyrica1805 = new Tify({
    manifestUrl: iiifRefs.lyrica_1805.manifest,
});
const tifyLyrica1844 = new Tify({
    manifestUrl: iiifRefs.lyrica_1844.manifest,
});

document.onload = initialLoad();

function initialLoad() {
    var checkboxes = document.getElementsByTagName("input");
    for (c of checkboxes) {
        c.checked = false;
    }
    var frames = document.getElementsByClassName("content-field");
    for (f of frames) {
        f.classList.add("display-none");
    }
    var texts = document.getElementsByClassName("edition");
    for (tx of texts) {
        tx.classList.add("display-none");
    }
    mountTifys();
}

function mountTifys() {
    tifyLyrica1643.mount("#tify_lyrica_1643");
    tifyLyrica1660.mount("#tify_lyrica_1660");
    tifyLyrica1729.mount("#tify_lyrica_1729");
    tifyLyrica1805.mount("#tify_lyrica_1805");
    tifyLyrica1844.mount("#tify_lyrica_1844");
}

function selectText(textId) {
    var texts = document.getElementsByClassName("edition");
    for (tx of texts) {
        tx.classList.add("display-none");
    }
    var textToShow = document.getElementById(textId);
    textToShow.classList.remove("display-none");
}

function synchroniseScans(textId) {
    tifyLyrica1643.ready.then(() =>
        tifyLyrica1643.setPage(iiifRefs.lyrica_1643.pages[textId]));
    tifyLyrica1660.ready.then(() =>
        tifyLyrica1660.setPage(iiifRefs.lyrica_1660.pages[textId]));
    tifyLyrica1729.ready.then(() =>
        tifyLyrica1729.setPage(iiifRefs.lyrica_1729.pages[textId]));
    tifyLyrica1805.ready.then(() =>
        tifyLyrica1805.setPage(iiifRefs.lyrica_1805.pages[textId]));
    tifyLyrica1844.ready.then(() =>
        tifyLyrica1844.setPage(iiifRefs.lyrica_1844.pages[textId]));
}

function toggleEdition(editionId) {
    const optionField = document.getElementById(`hf_${editionId}`);
    optionField.classList.toggle("header-field-selected");
    const frame = document.getElementById(editionId);
    frame.classList.toggle("display-none");
    if (numberOfFieldsAtDisplay() > 0) {
        const placeholder = document.getElementById("placeholder");
        placeholder.classList.add("display-none");
    } else {
        const placeholder = document.getElementById("placeholder");
        placeholder.classList.remove("display-none");
    }
}

function numberOfFieldsAtDisplay() {
    const editionContainers = document.getElementsByClassName('content-field');
    var n = editionContainers.length;
    for (var ec of editionContainers) {
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
