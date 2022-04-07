const fs = require('fs/promises')


// const movies = async () => {
//   return moviesArr
// }
const moviesArr = fs.readFileSync('./films.txt', 'utf-8')
console.log(moviesArr)
//movies().then((data) => console.log(data))