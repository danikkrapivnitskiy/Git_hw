function word(wordSet) {
    let word = wordSet.toLocaleLowerCase()
vowels = "aeiou"
vowels_count = 0
consonants_count = 0
for(i of word){
    if(vowels.includes(i)){
        vowels_count++;
        }
   else {
    consonants_count++;
        }
}
console.log(`word contains vowels: ${vowels_count}, and  consonants: ${consonants_count}`);
}

word("ljsdfabe")

//2
const str = 'aAbZzyZ';    // 'bBcAazA' for +1 and 'zZaYyxY' for -1
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const offset = 1;
let newString = '';
let newIndex;

for (let i = 0; i < str.length; i++) {
	let index = alphabet.indexOf(str[i].toLowerCase());
	if (offset === 1) {
		newIndex = index + offset - alphabet.length;
	} else if (offset === -1) {
		newIndex = index + offset;
	}

	if (alphabet.includes(str[i].toLowerCase())) {
		if (str[i].toUpperCase() === str[i]) {
			newString += alphabet.at(newIndex).toUpperCase();
		} else {
			newString += alphabet.at(newIndex);
		}
	}
}
console.log(newString);