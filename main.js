

let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
// planet array
// planets.forEach(function(e){
//     console.log(e);
// const forEachPlanet = document.getElementById("planets");

// })
// let forEachPlanet2 = `
//  <section class="planets">
//     <h2>
//         ${planets}
//     </h2>
   
//  </div>

// `;document.body.innerHTML = planets
// },)



// mapping the universe
const myPlanets = planets.map( 
    anyPlanet => {
        return `${anyPlanet.charAt().toUpperCase()}${anyPlanet.slice(1)}`
    }
)
console.log(myPlanets)

//filter method
const myPlanets2 = planets.filter(planet => planet.includes('e'))
console.log(myPlanets2)


const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let myWords = words.reduce(
    (word1, word2) => {
        return word1 + ' ' + word2
    }
)
myWords += '.'
console.log(myWords)