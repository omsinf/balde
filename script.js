// @ts-check
import { initLinksToScans, initLinksToTexts, toggleEdition } from "./modules/navigation.mjs";
import { mountTifys } from "./modules/tifyAdapter.mjs";

document.getElementById('hf_lyrica_1643')?.addEventListener("click", () => toggleEdition('lyrica_1643'))
document.getElementById('hf_lyrica_1660')?.addEventListener("click", () => toggleEdition('lyrica_1660'))
document.getElementById('hf_lyrica_1729')?.addEventListener("click", () => toggleEdition('lyrica_1729'))
document.getElementById('hf_lyrica_1805')?.addEventListener("click", () => toggleEdition('lyrica_1805'))
document.getElementById('hf_lyrica_1844')?.addEventListener("click", () => toggleEdition('lyrica_1844'))
document.getElementById('hf_herder_terp')?.addEventListener("click", () => toggleEdition('herder_terp'))
document.getElementById('hf_neubig_lyr1')?.addEventListener("click", () => toggleEdition('neubig_lyr1'))
document.getElementById('hf_neubig_lyr2')?.addEventListener("click", () => toggleEdition('neubig_lyr2'))
document.getElementById('hf_neubig_lyr3')?.addEventListener("click", () => toggleEdition('neubig_lyr3'))
document.getElementById('hf_aigner_oden')?.addEventListener("click", () => toggleEdition('aigner_oden'))
document.getElementById('hf_lyrica_baldeani')?.addEventListener("click", () => toggleEdition('lyrica_baldeani'))

initLinksToScans("lyrica_1643")
initLinksToScans("lyrica_1660")
initLinksToScans("lyrica_1729")
initLinksToScans("lyrica_1805")
initLinksToScans("lyrica_1844")
initLinksToScans("herder_terp")
initLinksToScans("neubig_lyr1")
initLinksToScans("neubig_lyr2")
initLinksToScans("neubig_lyr3")
initLinksToScans("aigner_oden")
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
