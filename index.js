const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    return cats.push("Ralph")
}
function destructivelyPrependCat(){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop(-1)
}
function destructivelyRemoveFirstCat(){
    return cats.shift(0)
}
function appendCat(){
    const newCats = [...cats, "Broom"]
    return newCats
}
function prependCat(){
    const newCats2 = ["Arnold",...cats]
    return newCats2
}
function removeLastCat(){
    const newCats3 = cats.slice(0,2)
    return newCats3
}
function removeFirstCat(){
    const newCats4 = cats.slice(1)
    return newCats4
}