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
  var secretKey = Math.floor(Math.random()*16);// secret seed is a secret between 0 and 15
 secretKey = (i++==0)?6:15 // redefine for testing
    var
    // (g^n) mod function
    process = function(g,n,p) {
      console.log('computing g to the n mod p', g, n, p)
      return Math.pow(g,n)%p; },
    publicKey = process(g,secretKey,p); // public key g^secret mod p

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
log("(exposed here for illustration)");
log('secret keys', A.getSecretKey(), B.getSecretKey());
log('public keys', A.getPublicKey(), B.getPublicKey());
log('bases (must be the same)', A.getBase(), B.getBase());
log('moduli (must be the same)', A.getModulus(), B.getModulus());
log('shared secrets (will be the same)', A.getSharedSecret(B.getPublicKey()), B.getSharedSecret(A.getPublicKey()));
