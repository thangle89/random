'use strict';
var expect = require('chai').expect;
var parse = require('./dist/index.js').default;

describe('module parser', () => {
    it('should parse "a=>" correctly', () => {
        expect(parse("a=>")).to.eq('a');
    })

    it('should parse "a=> b=> c=>" correctly', () => {
        expect(parse("a=> b=> c=>")).to.eq('cba');
    });

    it('should parse "a=> b=>c c=>" correctly', () => {
        expect(parse("a=> b=>c c=>")).to.eq('cba');
    })

    // a =>
    // b => c
    // c => f
    // d => a
    // e => b
    // f =>
    it('should parse "a=> b=>c c=>f d=>a e=>b f=>" correctly', ()=> {
        expect(parse("a=> b=>c c=>f d=>a e=>b f=>")).to.eq('fcbead');
    })
})