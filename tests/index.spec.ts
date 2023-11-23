import 'mocha';
import { assert } from 'chai';
import { helloWorld } from '../src';

describe('helloWorld function', () => {
    it('should be an function', () => {
        assert.isFunction(helloWorld);
    });

    it('should return the hello world message', () => {
        const expected = "hello world";
        const actual = helloWorld();
        assert.equal(actual, expected);
    });
});
