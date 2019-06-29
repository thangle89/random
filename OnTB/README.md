# Solution for exercise from OnTB

## Installation
You need to install Nodejs to run the sample `main.js` file.

## Usage
The function can be run with command 
```javascript
node main.js "a=> b=>c c=>f d=>a e=>b f=>"
```
```sh
Output should be 'afcbde'
```
### Support
`jobParser` supports normal javascript and typescript

## Implementation and Testing 
To change the implementation, go to `jobParser`, then update the `index.ts` 
Then run 
```sh
    npm install
    npm run build
```
Then run the tests by: 
```sh
npm run test
```