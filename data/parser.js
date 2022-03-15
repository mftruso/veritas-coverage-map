/**
 * Use this function to parse the KVM file text and obtain the coordinates
 *
 * @param text
 * @returns {*}
 */
export function textToRings(text) {
    const rings = text.split('\n').map((line) => {
        let coords = line.substring(line.indexOf('> ') + 2)
        coords = coords.slice(0, -2)
        return coords.split(',').map((it) => Number(it))
    })

    return rings
}