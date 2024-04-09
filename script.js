// @ts-check
import { initLinksToScans, initLinksToTexts, toggleEdition } from "./modules/navigation.mjs";
import { mountTifys } from "./modules/tifyAdapter.mjs";

document.getElementById('hf_lyrica_1643')?.addEventListener("click", () => toggleEdition('lyrica_1643'))
document.getElementById('hf_lyrica_1660')?.addEventListener("click", () => toggleEdition('lyrica_1660'))
document.getElementById('hf_lyrica_1729')?.addEventListener("click", () => toggleEdition('lyrica_1729'))
document.getElementById('hf_lyrica_1805')?.addEventListener("click", () => toggleEdition('lyrica_1805'))
document.getElementById('hf_lyrica_1844')?.addEventListener("click", () => toggleEdition('lyrica_1844'))
document.getElementById('hf_lyrica_baldeani')?.addEventListener("click", () => toggleEdition('lyrica_baldeani'))

initLinksToScans("lyrica_1643")
initLinksToScans("lyrica_1660")
initLinksToScans("lyrica_1729")
initLinksToScans("lyrica_1805")
initLinksToScans("lyrica_1844")
initLinksToTexts()

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
