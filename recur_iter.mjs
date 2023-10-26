export function fibRecur( n ) {
  return  n === 0
          ? 0
          : n === 1
          ? 1
          : fibRecur( n - 1 )  + fibRecur( n - 2 );
}

export function fibIter( n ) {
  function _iter( a, b, i ) {
    return i === 0
      ? b 
      : _iter( a + b, a, i - 1 );
  }
  return _iter( 1, 0, n );
}

export function factorialRecur ( n ) {
  return n === 1 
  ? 1
  : n * factorialRecur( --n )
}

// This one is buggy, figure out why...
// Clue: It always returns 0

export function factorialIter( n ) {
  function iter( i, acc ) {
    return  i === 0
            ? acc
            : iter( i - 1, i * acc )
  }
  return iter( n, 1 );
}