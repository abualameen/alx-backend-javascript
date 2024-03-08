import Building from './5-building.js';

const b = new Building(100);
console.log(b);

try {
    Building.evacuationWarningMessage();
} catch(err) {
    console.error(`Error: ${err.message}`);
}
