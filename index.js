/**
 * think about superman
 * name"Superman
 * powers:flight
 * costumecolor:blue
 * 
 */

var superman = {
  name: "superman",
  power: "flight",
  costumeColor: "blue",
  strength: 10000,
  stealth: 0,
  intelligence: 100
}

var batman = {
  name: "batman",
  power: "mart ial arts",
  costumeColor:"black",
  strength: 100,
  stealth: 100,
  intelligence: 1000
}

console.log(superman.strength)
console.log(batman.strength)
//dot(.) accesses the property of superman and batman

console.log(superman.strength > batman.strength);

console.log(superman.stealth)
console.log(batman.stealth)
console.log(superman.stealth > batman.stealth);