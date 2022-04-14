/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    
    let maxStr = s[0],
        maxLength = 1,
		fl=false
	console.log(`before everting ${s[0]}`)
    
    for(let index = 1; index < s.length; index += 1) {
	    console.log(`here is index ${index} and the s: ${s} and the max ${maxLength} amnd the ${maxStr}`) 
        const character = s[index]
        const indexOfRepeatCharacter = maxStr.indexOf(character)
	    console.log(`here is chracter:${character} and the indexo:${indexOfRepeatCharacter} `) 

        if (indexOfRepeatCharacter > -1) {
	console.log(`here is the reality of there being a char', ${maxStr.slice(indexOfRepeatCharacter + 1)}`)
            maxStr = `${maxStr.slice(indexOfRepeatCharacter + 1)}${character}`
		console.log(`here is ${indexOfRepeatCharacter} and maxsttr ${maxStr}`)
        } else {
		fl = true
            maxStr += character
           maxLength = Math.max(maxLength, maxStr.length)
		console.log(`hre is ${maxStr} and ${maxLength}`);
        }

    }
    
    return maxLength
};

const onlyUnique = (val, index, self) => {
	return self.indexOf(val) === index; 
}
const findAllOccurrences = (str, substr) => {
  str = str.toLowerCase();
  
  let result = [];

  let idx = str.indexOf(substr)
	let x = [];
	for(let i =0; i < str.length; i++) {
		let ele = str.charAt(i)
		if(ele === substr) {
			x.push(i)
		}
	}
	return x 
}
/*
var lengthOfLongestSubstring = function(s) {
	let d = false
    for (let i = 0; i < s.length; i++) {
	if(!d) { 
        const c = s.charAt(i) 
		console.log(`here is a ${c}`)
        const arrC = findAllOccurrences(s, c)
		console.log(`here is ${arrC}`)
		let j = 0, bb = []
		while(j + 1 <= arrC.length) {
		let st = ''
		if(j === 0) { 
		  st = s.substring(j, arrC[j+1]) 
			const myst = st.split("");
			st = myst.filter(onlyUnique).join() 
	
		} else if(j=== arrC.length -1) {
			console.log(`here is j ${j} ${arrC[j]} ${arrC[arrC.length-1]}true `);
			console.log('s:', s)
			st = s.substring(arrC[j], s.length)
			const myst = st.split("");
			st = myst.filter(onlyUnique).join() 
	
		} else { 
			st = s.substring(arrC[j], arrC[j+1]); 
			const myst = st.split("");
			st = myst.filter(onlyUnique).join() 
		}
		j++
		bb.push(st)
	}
		console.log(bb)
		
	} 
	    d=true;
    }

};
lengthOfLongestSubstring('bbbbbbb')
lengthOfLongestSubstring('pwwkew')
*/
console.log(lengthOfLongestSubstring('pwwkew'))
