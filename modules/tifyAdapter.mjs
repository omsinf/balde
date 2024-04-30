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
// @ts-ignore
const tifyHerderTerp = new Tify({
    manifestUrl: iiifRefs.herder_terp.manifest,
});
// @ts-ignore
const tifyNeubigLyr1 = new Tify({
    manifestUrl: iiifRefs.neubig_lyr1.manifest,
});
// @ts-ignore
const tifyNeubigLyr2 = new Tify({
    manifestUrl: iiifRefs.neubig_lyr2.manifest,
});
// @ts-ignore
const tifyNeubigLyr3 = new Tify({
    manifestUrl: iiifRefs.neubig_lyr3.manifest,
});
// @ts-ignore
const tifyAignerOden = new Tify({
    manifestUrl: iiifRefs.aigner_oden.manifest,
});

export const tifys = {}
tifys["lyrica_1643"] = tifyLyrica1643;
tifys["lyrica_1660"] = tifyLyrica1660;
tifys["lyrica_1729"] = tifyLyrica1729;
tifys["lyrica_1805"] = tifyLyrica1805;
tifys["lyrica_1844"] = tifyLyrica1844;
tifys["herder_terp"] = tifyHerderTerp;
tifys["neubig_lyr1"] = tifyNeubigLyr1;
tifys["neubig_lyr2"] = tifyNeubigLyr2;
tifys["neubig_lyr3"] = tifyNeubigLyr3;
tifys["aigner_oden"] = tifyAignerOden;

export function mountTifys() {
    tifyLyrica1643.mount("#tify_lyrica_1643");
    tifyLyrica1660.mount("#tify_lyrica_1660");
    tifyLyrica1729.mount("#tify_lyrica_1729");
    tifyLyrica1805.mount("#tify_lyrica_1805");
    tifyLyrica1844.mount("#tify_lyrica_1844");
    tifyHerderTerp.mount("#tify_herder_terp");
    tifyNeubigLyr1.mount("#tify_neubig_lyr1");
    tifyNeubigLyr2.mount("#tify_neubig_lyr2");
    tifyNeubigLyr3.mount("#tify_neubig_lyr3");
    tifyAignerOden.mount('#tify_aigner_oden');
}
