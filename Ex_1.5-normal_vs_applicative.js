function p() { return p() };

function test( x, y ) {
  return x === 0 ? 0 : y();
}

console.log( test( 0, p() ) )
