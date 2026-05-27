// Usamos o * para dizer que estamos
// importando TUDO de um arquivo 
// o termo "as" permite criar apelido 

import * petShop from "./gato-mod.js"

console.log(petShop.banhoGato('frajola', 'Banho de espuma'))
console.log(petShop.tosaGato('sphinx', 'Tosa higiênica'))
console.log(petShop.alimentarGato('vira-lata', 'Ração premium'))