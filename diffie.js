// exploration of modular maths and the diffie-helman key exchange

// functions
var log = console.log;

/*
* Alice and Bob agree on agree on a group of integers modulo p,
*   where p is prime and ge is the primitive root mod p.
*/
var p=23, g=5;

// test
var i=0;

// party involved in a Diffie Helman exchange
// g is base
// p is modulus
function DHParty(p,g) {
  var secretKey = Math.floor(Math.random()*16),// secret seed is a secret between 0 and 15
    // (g^n) mod function
    process = function(g,n,p) { return Math.pow(g,n)%p; },
    publicKey = process(g,secretKey,p); // public key g^secret mod p

  console.log('DHParty instantiated', 'secretKey, publickey :', secretKey, ',', publicKey);

  this.getSecretKey = function () {
    return secretKey;
  }

  this.getPublicKey = function () {
    return publicKey;
  }

  this.getBase = function () {
    return g;
  }

  this.getModulus = function () {
    return p;
  }

  this.getSharedSecret = function (publicKey) {
    return process(publicKey,secretKey,p);
  }

}

var g=23,
    m=5, // or some other prime
//  dh=new DH(g,m);
  A = new DHParty(g,m),
  B = new DHParty(g,m);


log("we've made two parties with different secrets");
log('here is the magic - shared secrets will be the same!', A.getSharedSecret(B.getPublicKey()), B.getSharedSecret(A.getPublicKey()));
