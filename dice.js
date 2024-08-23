const { trace } = require('@opentelemetry/api');

const tracer = trace.getTracer('dice-lib');

function rollOnce(i, min, max) {
  return tracer.startActiveSpan(`rollOnce:${i}`, (span) => {
    const result = Math.floor(Math.random() * (max - min) + min);
    span.end();
    return result;
  });
}

function rollTheDice(rolls, min, max) {
  // Create a span. A span must be closed.
  return tracer.startActiveSpan('rollTheDice', (parentSpan) => {
    const result = [];
    console.log('rolling this many dice', rolls)
    for (let i = 0; i < rolls; i++) {
      if (i == 11) {
        console.log('eleven')
        // Helper function to compute arctan(x) using Taylor series
        function arctan(x, iterations) {
          return tracer.startActiveSpan('arctan', (span) =>{
            let result = 0;
            let term = x;
            let power = x * x;
            for (let i = 1; i <= iterations; i += 2) {
              result += term / i;
              term *= -power;
              result += term / (i + 2);
              term *= -power;
            }
            span.end();
            return result;

          })

        }

        // Calculate pi to 30 decimal places
        function calculatePi() {
          const iterations = 2000000000; // Number of iterations for precision
          const arctan1_5 = arctan(1 / 5, iterations);
          const arctan1_239 = arctan(1 / 239, iterations);

          // Machin-like formula for pi
          const pi = 4 * (4 * arctan1_5 - arctan1_239);
          return pi.toFixed(30);
        }
        const pi = calculatePi();
        console.log(`Pi to 30 decimal places: ${pi}`);
        result.push(rollOnce(i, min, max));
      } else {
        result.push(rollOnce(i, min, max));


      }
    }
    // Be sure to end the span!
    parentSpan.end();
    return result;
  });
}

module.exports = { rollTheDice };