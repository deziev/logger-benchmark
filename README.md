# logger-benchmark
Benchmarks for nodejs loggers 

## Usage

1. Install dependencies
`npm i`
2. Start benchmark
`npm start`

## Last benchmark result
Tested with node v6.9.1
```
console.info x 11,488,273 ops/sec ±2.53% (77 runs sampled)
winston.info x 50,383 ops/sec ±5.75% (68 runs sampled)
intel.info x 102,757 ops/sec ±2.31% (76 runs sampled)
pino.info x 889,824 ops/sec ±1.50% (79 runs sampled)
Fastest is console.info
```