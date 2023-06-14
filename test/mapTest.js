const map = require('../map');
const assertEqual = require('../assertEqual');

const words = ["ground", "control", "to", "major", "tom"];
const expectedOutput = ['g', 'c', 't', 'm', 't'];

const results = map(words, word => word[0]);
assertEqual(results, expectedOutput);


