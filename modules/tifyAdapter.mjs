// @ts-check
import { iiifRefs } from "./iiifRefs/iiifRefs.mjs";

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

export const tifys = {}
tifys["lyrica_1643"] = tifyLyrica1643;
tifys["lyrica_1660"] = tifyLyrica1660;
tifys["lyrica_1729"] = tifyLyrica1729;
tifys["lyrica_1805"] = tifyLyrica1805;
tifys["lyrica_1844"] = tifyLyrica1844;

export function mountTifys() {
    tifyLyrica1643.mount("#tify_lyrica_1643");
    tifyLyrica1660.mount("#tify_lyrica_1660");
    tifyLyrica1729.mount("#tify_lyrica_1729");
    tifyLyrica1805.mount("#tify_lyrica_1805");
    tifyLyrica1844.mount("#tify_lyrica_1844");
}
