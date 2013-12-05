// exploration of modular maths

// party involved in a Diffie Helman exchange
// g is base
// m is modulus
function DHParty(g,m) {
  var seed = Math.floor(Math.random()*16),
    // (g^n) mod function
    process = function(n) { return Math.pow(g,n)%m; },
    secret = process(seed);

    this.getSecret = function () {
      return secret;
    }

}

var g=2,
    m=11, // or some other prime
//  dh=new DH(g,m);
  A = new DHParty(g,m),
  B = new DHParty(g,m);

console.log("SECRETS", A.getSecret(), B.getSecret());
