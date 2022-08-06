let pronoun = ["the", "My", "your"];
let adj = ["great", "big", "awesome"];
let noun = ["trick", "site", "sus"];
let dom = [".com", ".net", ",io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      for (let z = 0; z < dom.length; z++) {
        console.log(pronoun[i] + adj[x] + noun[y] + dom[z]);
      }
    }
  }
}
