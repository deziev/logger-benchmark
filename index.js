'use strict';

const Console = require('console').Console;
const EE = require('events').EventEmitter;

const winston = require('winston');
const intel = require('intel');
const pino = require('pino');

var stdout = new EE();
stdout.write = function (out, encoding, cb) {
  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }
  cb && cb();
  return true;
};

winston.add(winston.transports.File, {stream: stdout, timestamp: true});
winston.remove(winston.transports.Console);

intel.addHandler(new intel.handlers.Stream(
    { 
        level: intel.TRACE,
        stream: stdout, 
        formatter: new intel.Formatter({
            'format': '[%(date)s] %(name)s.%(levelname)s: %(message)s'
        })
    }
));

const plog = pino(
    {
        level: 'trace',
        name: 'root'
    }, 
    stdout
);

var _console = new Console(stdout, stdout);


process.stdout.write = function(msg, enc, callback) {
  if(typeof enc === 'function' && !callback) callback = enc;

  callback && callback();
  return true;
}

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite('logging.info()');

suite
  .add('console.info', function() {
    _console.info('bench');
  })
  .add('winston.info', function() {
    winston.info('bench');
  })
  .add('intel.info', function() {
    intel.info('bench');
  })
  .add('pino.info', function() {
    plog.info('bench');
  })

suite
// add listeners
  .on('cycle', function (event) {
    console.warn(String(event.target));
  })
  .on('complete', function () {
    console.warn('Fastest is ' + this.filter('fastest').map('name'));
  })
// run async
  .run({ 'async': true });
