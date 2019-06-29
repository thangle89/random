'use strict';
var expect = require('chai').expect;
var parse = require('./dist/index.js').default;

describe('module parser', () => {
    it('should parse "a=>b" correctly', () => {
        expect(parse("a=>b")).to.eq('ba');
    })

    it('should parse "a=>b b=>c a=>b" correctly', ()=> {
        expect(parse("a=>b b=>c a=>b")).to.eq('cba');
    })
})