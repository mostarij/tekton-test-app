console.log('Running tests...');

// Simple test suite
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${description}`);
    console.log(`  Error: ${error.message}`);
    failed++;
  }
}

function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected} but got ${actual}`);
  }
}

// Run tests
test('Addition works correctly', () => {
  assertEquals(2 + 2, 4, 'Basic addition');
});

test('String concatenation works', () => {
  assertEquals('Hello' + ' ' + 'World', 'Hello World');
});

test('Array length is correct', () => {
  const arr = [1, 2, 3];
  assertEquals(arr.length, 3, 'Array should have 3 elements');
});

console.log('\n-------------------');
console.log(`Tests passed: ${passed}`);
console.log(`Tests failed: ${failed}`);
console.log('-------------------\n');

if (failed > 0) {
  process.exit(1);
}

console.log('All tests passed! ✓');
