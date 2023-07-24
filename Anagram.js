function isAnagram ( str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }
    let counter = {}
    for (let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter)
    }
    for (let iteam of str2) {
        if (!counter[iteam]) {
            return false;
        }
        counter [iteam]-=1.
    }
    return true;
}

const check = isAnagram('hello' , 'lleoh');
console.log(check)