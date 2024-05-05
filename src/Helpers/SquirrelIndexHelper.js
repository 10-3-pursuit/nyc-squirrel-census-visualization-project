
export function getRegion(location) {
    // Parse the input string
    // captures the digits and assigns it to hectare (\d+) and ([A-Za-z]+) matches one or more lerrters A-Z
    const [, hectare, letter] = location.match(/(\d+)([A-Za-z]+)/);

    // Determine the region based on the criteria
    let region = '';
    const number = parseInt(hectare);
    const letterUpperCase = letter.toUpperCase();

    // Determine vertical position
    if (number >= 1 && number <= 14) {
        region += 'South';
    } else if (number >= 15 && number <= 28) {
        region += 'Center';
    } else if (number >= 29 && number <= 42) {
        region += 'North';
    }

    // Determine horizontal position
    if (['A', 'B', 'C'].includes(letterUpperCase)) {
        region += 'East';
    } else if (['D', 'E', 'F'].includes(letterUpperCase)) {
        region += 'Center';
    } else if (['G', 'H', 'I'].includes(letterUpperCase)) {
        region += 'West';
    }

    // If the region is Center both vertically and horizontally
    if (region === 'CenterCenter') {
        return 'Center';
    }

    // Determine final region
    if (region === '') {
        region = 'Unknown';
    } else {
        region = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase();
    }

    return region;
}

