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
console.info x 19,393,958 ops/sec ±0.25% (95 runs sampled)
winston.info x 76,738 ops/sec ±1.99% (86 runs sampled)
intel.info x 192,236 ops/sec ±0.49% (91 runs sampled)
pino.info x 1,515,001 ops/sec ±0.76% (93 runs sampled)
log4js.info x 77,307 ops/sec ±1.66% (85 runs sampled)
Fastest is console.info
```