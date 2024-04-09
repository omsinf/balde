// @ts-check
import { iiifRefs } from "./iiifRefs/iiifRefs.mjs";
import { tifys } from "./tifyAdapter.mjs";

/**
 * @param {string} textId
 */
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

/**
 * @param {string} edition
 * @param {string} textId
 */
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

/**
 * @param {string} editionId
 */
export function toggleEdition(editionId) {
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

/**
 * @param {string} editionId
 */
export function initLinksToScans(editionId) {
    const container = document.getElementById(`${editionId}_content`)
    if (container == null) {
        console.warn(`Element with id '${editionId}_content' not found.`)
    } else {
        const pages = iiifRefs[editionId]["pages"]
        for (const key in pages) {
            if (Object.hasOwnProperty.call(pages, key)) {
                const link = document.createElement("span")
                link.setAttribute("class", "dropdown-item option")
                link.addEventListener("click", () => setPageIfAvailable(editionId, key))
                link.appendChild(document.createTextNode(key
                    .replace("lyr-1-", "Ode I ")
                    .replace("lyr-2-", "Ode II ")
                    .replace("lyr-3-", "Ode III ")
                    .replace("lyr-4-", "Ode IV ")
                    .replace("epod-", "Epode ")))
                container.appendChild(link)
            }
        }
    }
}

export function initLinksToTexts() {
    const container = document.getElementById("lyrica_baldeani_content")
    if (container == null) {
        console.warn(`Element with id 'lyrica_baldeani_content' not found.`)
    } else {
        lyrica_baldeani.forEach(key => {
            const link = document.createElement("span")
            link.setAttribute("class", "dropdown-item option")
            link.addEventListener("click", () => selectText(key))
            link.appendChild(document.createTextNode(key
                .replace("lyr-1-", "Ode I ")
                .replace("lyr-2-", "Ode 2 ")
                .replace("lyr-3-", "Ode III ")
                .replace("lyr-4-", "Ode IV ")
                .replace("epod-", "Epode ")))
            container.appendChild(link)
        })
    }
}

const lyrica_baldeani = [
    "lyr-3-31",
    "lyr-3-32",
    "lyr-3-33",
    "lyr-3-34",
]