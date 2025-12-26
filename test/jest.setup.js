/* eslint-disable no-undef */
// Jest v23 + Node 18: polyfill WHATWG TextEncoder/TextDecoder for dependencies.
const { TextDecoder, TextEncoder } = require('util');

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
