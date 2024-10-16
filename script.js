// i am going to struggle while making this - 3pm

// --- VARIABLES ---

var elements = []
var states = {}

// --- CODE ---

// hey now that i think about it its actually super difficult-

const script = document.createElement('script');
script.src = 'presets.js';
document.head.appendChild(script);

function addMod(modname) {
    const script = document.createElement('script');
    script.src = 'mods/'+ modname +'/otherFile.js';
    document.head.appendChild(script);
}