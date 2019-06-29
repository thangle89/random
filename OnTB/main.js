const parser = require('./jobParser/dist/index').default;

const args = process.argv.slice(2);
const input = args.join('');
console.log('Your input is: ', input);
const result = parser(input);
console.log('result: ', result);