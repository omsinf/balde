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
            "lyr-3-37": 185,
            "lyr-3-38": 186,
            "lyr-3-39": 188,
            "lyr-3-40": 190,
            "lyr-3-41": 191,
            "lyr-3-42": 192,
            "lyr-3-43": 194,
            "lyr-3-44": 195,
            "lyr-3-45": 196,
            "lyr-3-46": 199,
            "lyr-3-47": 200,
            "lyr-3-48": 203,
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
            "lyr-3-37": 172,
            "lyr-3-38": 173,
            "lyr-3-39": 175,
            "lyr-3-40": 177,
            "lyr-3-41": 177,
            "lyr-3-42": 178,
            "lyr-3-43": 180,
            "lyr-3-44": 181,
            "lyr-3-45": 182,
            "lyr-3-46": 185,
            "lyr-3-47": 186,
            "lyr-3-48": 189,
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
            "lyr-3-36": 187,
            "lyr-3-37": 188,
            "lyr-3-38": 189,
            "lyr-3-39": 190,
            "lyr-3-40": 192,
            "lyr-3-41": 193,
            "lyr-3-42": 194,
            "lyr-3-43": 196,
            "lyr-3-44": 197,
            "lyr-3-45": 198,
            "lyr-3-46": 201,
            "lyr-3-47": 202,
            "lyr-3-48": 205,
        }
    },
    "lyrica_1805": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608714/manifest",
        "pages": {
            "lyr-3-15": 155,
            "lyr-3-17": 158,
            "lyr-3-20": 160,
            "lyr-3-21": 162,
            "lyr-3-24": 164,
            "lyr-3-25": 165,
            "lyr-3-27": 166,
            "lyr-3-31": 167,
            "lyr-3-32": 170,
            "lyr-3-33": 174,
            "lyr-3-34": 175,
            "lyr-3-35": 179,
            "lyr-3-36": 183,
            "lyr-3-37": 185,
            "lyr-3-43": 186,
            "lyr-3-44": 188,
            "lyr-3-45": 189,
            "lyr-3-47": 194,
            "lyr-3-48": 198,
        }
    },
    "lyrica_1844": {
        "manifest": "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10608720/manifest",
        "pages": {
            "lyr-3-31": 276,
            "lyr-3-32": 279,
            "lyr-3-33": 282,
            "lyr-3-34": 284,
            "lyr-3-35": 287,
            "lyr-3-36": 290,
            "lyr-3-37": 292,
            "lyr-3-38": 293,
            "lyr-3-39": 296,
            "lyr-3-40": 298,
            "lyr-3-41": 299,
            "lyr-3-42": 301,
            "lyr-3-43": 304,
            "lyr-3-44": 306,
            "lyr-3-45": 307,
            "lyr-3-46": 311,
            "lyr-3-47": 314,
            "lyr-3-48": 319,
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

const tifys = {}
tifys["lyrica_1643"] = tifyLyrica1643;
tifys["lyrica_1660"] = tifyLyrica1660;
tifys["lyrica_1729"] = tifyLyrica1729;
tifys["lyrica_1805"] = tifyLyrica1805;
tifys["lyrica_1844"] = tifyLyrica1844;

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
    if (textToShow) {
        textToShow.classList.remove("display-none");
    } else {
        console.debug("Not available: '" + textId + "' for Lyrica edd. Baldeani");
        document.getElementById("edition-placeholder")?.classList.remove("display-none");
    }
}

function synchroniseScans(textId) {
    setPageIfAvailable("lyrica_1643", textId);
    setPageIfAvailable("lyrica_1660", textId);
    setPageIfAvailable("lyrica_1729", textId);
    setPageIfAvailable("lyrica_1805", textId);
    setPageIfAvailable("lyrica_1844", textId);
}

function setPageIfAvailable(edition, textId) {
    let tify = tifys[edition]
    let page = iiifRefs[edition]?.pages[textId]
    if (tify && page) {
        tify.ready.then(() =>
        tify.setPage(page))
    } else {
        console.debug("Not available: '" + textId + "' for '" + edition + "'")
    }
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