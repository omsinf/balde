//@ts-check
import { iiifRefs } from "./iiifRefs.mjs";

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

// set event listeners (functions of a module not available to HTML inline listeners)
document.getElementById("hf_lyrica_1643")?.addEventListener('click', () => toggleEdition('lyrica_1643'));
document.getElementById("hf_lyrica_1660")?.addEventListener('click', () => toggleEdition('lyrica_1660'));
document.getElementById("hf_lyrica_1729")?.addEventListener('click', () => toggleEdition('lyrica_1729'));
document.getElementById("hf_lyrica_1805")?.addEventListener('click', () => toggleEdition('lyrica_1805'));
document.getElementById("hf_lyrica_1844")?.addEventListener('click', () => toggleEdition('lyrica_1844'));
document.getElementById("hf_lyrica_baldeani")?.addEventListener('click', () => toggleEdition('lyrica_baldeani'));

document.onload = initialLoad;

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