'use strict';
var expect = require('chai').expect;
var parse = require('./dist/index.js').default;

describe('module parser', () => {
    it('should parse "a=>" correctly', () => {
        expect(parse("a=>")).to.eq('a');
    })

    it('should parse "a=> b=> c=>" correctly', () => {
        expect(parse("a=> b=> c=>")).to.eq('abc');
    });

    it('should parse "a=> b=>c c=>" correctly', () => {
        expect(parse("a=> b=>c c=>")).to.eq('acb');
    })

    // a =>
    // b => c
    // c => f
    // d => a
    // e => b
    // f =>
    it('should parse "a=> b=>c c=>f d=>a e=>b f=>" correctly', ()=> {
        expect(parse("a=> b=>c c=>f d=>a e=>b f=>")).to.eq('afcbde');
    })

    // a =>
    // b =>
    // c => c
    it('should throw error when job depend on itself', () => {
        expect(() => parse("a=> b=> c=>c")).to.throw("job cannot depend on itself: c");
    })

    // a =>
    // b => c
    // c => f
    // d => a
    // e =>
    // f => b
    it('should throw error when has circular dependency', () => {
        expect(() => parse("a=> b=>c c=>f d=>a e=> f=>b")).to.throw("Circular dependency of job: b")
    })
})