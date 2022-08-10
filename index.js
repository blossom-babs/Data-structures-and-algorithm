function* generatorFunction() {
  index = 0
  while (true) {
    yield index
    index += 1
  }
}

let gen = generatorFunction()


for (let value of gen) {
  console.log(value)
}