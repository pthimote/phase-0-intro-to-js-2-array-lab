// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
} 

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   const SpreadOperator = [...cats, name];
   return SpreadOperator
}

function prependCat(name) {
    const SpreadOperator = [name, ...cats];
    return SpreadOperator
}

function removeLastCat(name) {
    const SpreadOperator = (cats.slice(0, -1));
    return SpreadOperator
}

function removeFirstCat() {
    const SpreadOperator = (cats.slice(1));
    return SpreadOperator
}