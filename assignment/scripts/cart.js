console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}

function listItems(){
    for(let i=0; i<basket.length; i++){
        console.log('removing: ' + basket[i])
    }

}


console.log('Basket list is now '+ basket);
console.log('Adding apples, outcome should return true: ' + addItem('apples'));
console.log('Basket is now ' + basket );
console.log('Cleared basket list, list now should be undefined: ' + listItems())




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
