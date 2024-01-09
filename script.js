// @ts-check
const iiifRefs = {
    "lyrica_1643": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11270675/manifest",
        "pages": {
            "lyr-3-1": 135,
            "lyr-3-31": 175,
            "lyr-3-32": 176,
            "lyr-3-33": 179,
            "lyr-3-34": 180,
            "lyr-3-35": 182,
            "lyr-3-36": 184,
        }
    },
    "lyrica_1660": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10609929/manifest",
        "pages": {
            "lyr-3-1": 123,
            "lyr-3-31": 162,
            "lyr-3-32": 163,
            "lyr-3-33": 166,
            "lyr-3-34": 167,
            "lyr-3-35": 169,
            "lyr-3-36": 171,
        }
    },
    "lyrica_1729": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10712436/manifest",
        "pages": {
            "lyr-3-31": 177,
            "lyr-3-32": 179,
            "lyr-3-33": 181,
            "lyr-3-34": 182,
            "lyr-3-35": 184,
        }
    },
    "lyrica_1805": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608714/manifest",
        "pages": {}
    },
    "lyrica_1844": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608720/manifest",
        "pages": {
            "lyr-3-35": 287
        }
    }
}

// Tify script is declared in HTML file.
// @ts-ignore
const tifyLyrica1643 = new Tify({
    manifestUrl: iiifRefs.lyrica_1643.manifest,
});
// @ts-ignore
const tifyLyrica1660 = new Tify({
    manifestUrl: iiifRefs.lyrica_1660.manifest,
});
// @ts-ignore
const tifyLyrica1729 = new Tify({
    manifestUrl: iiifRefs.lyrica_1729.manifest,
});
// @ts-ignore
const tifyLyrica1805 = new Tify({
    manifestUrl: iiifRefs.lyrica_1805.manifest,
});
// @ts-ignore
const tifyLyrica1844 = new Tify({
    manifestUrl: iiifRefs.lyrica_1844.manifest,
});

document.addEventListener("DOMContentLoaded", initialLoad);

function initialLoad() {
    var checkboxes = document.getElementsByTagName("input");
    for (var c of checkboxes) {
        c.checked = false;
    }
    var frames = document.getElementsByClassName("content-field");
    for (var f of frames) {
        f.classList.add("display-none");
    }
    var texts = document.getElementsByClassName("edition");
    for (var tx of texts) {
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

function synchroniseAll(textId) {
    selectText(textId)
    synchroniseScans(textId)
}

function selectText(textId) {
    var texts = document.getElementsByClassName("edition");
    for (var tx of texts) {
        tx.classList.add("display-none");
    }
    var textToShow = document.getElementById(textId);
    textToShow?.classList.remove("display-none");
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
    optionField?.classList.toggle("header-field-selected");
    const frame = document.getElementById(editionId);
    frame?.classList.toggle("display-none");
    if (numberOfFieldsAtDisplay() > 0) {
        const placeholder = document.getElementById("placeholder");
        placeholder?.classList.add("display-none");
    } else {
        const placeholder = document.getElementById("placeholder");
        placeholder?.classList.remove("display-none");
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

function editionAtDisplay() {
    const editions = document.getElementsByClassName('edition')
    for (var e of editions) {
        if (!e.classList.value.includes("display-none")) {
            return e.id;
        }
    }
}