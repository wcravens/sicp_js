function fibRecur( n ) {
  return  n === 0
          ? 0
          : n === 1
          ? 1
          : fibRecur( n - 1 )  + fibRecur( n - 2 )
}

function fibIter( n ) {
  function _iter( a, b, i ) {
    return i === 0
      ? b 
      : _iter( a + b, a, i - 1 )
  }
  return _iter( 1, 0, n )
}
console.log( fibRecur(0) )
console.log( fibRecur(5) )
console.log( fibIter(0) )
console.log( fibIter(5) )

function factorialRecur ( n ) {
  return n * factorialRecur( n - 1 )
}

function factorialIter( n ) {
  function iter( i, acc ) {
    return  i === n
            ? acc
            : iter( ++i, i * acc )
  }
  return iter( n , 1 );
}