function makeid(l) {
  // write your code here
	 let s = "";
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < l; i++) {
    let index = Math.floor(Math.random() * str.length);
    s += str[index]; // Fix: use += to append the character
  }
  return s;
}

	
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

