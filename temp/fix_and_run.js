// This script will be copied to the slides dir and run there
const fs = require('fs');
const path = require('path');

const failed = [9,10,11,12,13,14,32,34,35,37,39,40,41,50,58,61,68,73,79];

console.log('=== Fixing quotes ===');

failed.forEach(n => {
  const fname = 'slide-' + n + '.js';
  if (!fs.existsSync(fname)) { 
    console.log('NOT FOUND:', fname); 
    return; 
  }
  
  let content = fs.readFileSync(fname, 'utf8');
  const original = content;
  
  // Replace ''text'' with `text`
  content = content.replace(/\{ text: ''/g, '{ text: \`');
  content = content.replace(/'' \}/g, '\` }');
  content = content.replace(/'' \)/g, '\`)');
  content = content.replace(/'', options/g, '\`, options');
  
  if (content !== original) {
    fs.writeFileSync(fname, content);
    console.log('Fixed:', fname);
  } else {
    console.log('No change:', fname);
  }
});

console.log('=== Done ===');
