/**
 * @param {Number} seconds 
 * @returns 
 */
function humanReadable (seconds) {
    const pre = num => num < 10 ? "0" + num : num;
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60);
    const ss = seconds % 60;
    return `${pre(hh)}:${pre(mm)}:${pre(ss)}`;
}

console.log(humanReadable(1000));
console.log(humanReadable(0));
console.log(humanReadable(1));
console.log(humanReadable(2));
console.log(humanReadable(359999));