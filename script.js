// @ts-check
import { initLinksToScans, initLinksToTexts, toggleEdition } from "./modules/navigation.mjs";
import { mountTifys } from "./modules/tifyAdapter.mjs";

Array.from(document.getElementsByClassName('switch-lyrica_1643')).forEach(element => element.addEventListener("click", () => toggleEdition('lyrica_1643')))
Array.from(document.getElementsByClassName('switch-lyrica_1660')).forEach(element => element.addEventListener("click", () => toggleEdition('lyrica_1660')))
Array.from(document.getElementsByClassName('switch-lyrica_1729')).forEach(element => element.addEventListener("click", () => toggleEdition('lyrica_1729')))
Array.from(document.getElementsByClassName('switch-lyrica_1805')).forEach(element => element.addEventListener("click", () => toggleEdition('lyrica_1805')))
Array.from(document.getElementsByClassName('switch-lyrica_1844')).forEach(element => element.addEventListener("click", () => toggleEdition('lyrica_1844')))
Array.from(document.getElementsByClassName('switch-herder_terp')).forEach(element => element.addEventListener("click", () => toggleEdition('herder_terp')))
Array.from(document.getElementsByClassName('switch-neubig_lyr1')).forEach(element => element.addEventListener("click", () => toggleEdition('neubig_lyr1')))
Array.from(document.getElementsByClassName('switch-neubig_lyr2')).forEach(element => element.addEventListener("click", () => toggleEdition('neubig_lyr2')))
Array.from(document.getElementsByClassName('switch-neubig_lyr3')).forEach(element => element.addEventListener("click", () => toggleEdition('neubig_lyr3')))
Array.from(document.getElementsByClassName('switch-aigner_oden')).forEach(element => element.addEventListener("click", () => toggleEdition('aigner_oden')))
Array.from(document.getElementsByClassName('switch-ed_baldeani')).forEach(element => element.addEventListener("click", () => toggleEdition('ed_baldeani')))

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
    var texts = document.getElementsByClassName("edition");
    for (var tx of texts) {
        tx.classList.add("display-none");
    }
    mountTifys();
}
