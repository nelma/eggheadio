/**
 * 
 * Mike Sherov
 */


let setOps = 0;

class InstrumentedSet extends Set {
  has(value) {
    setOps++;
    return super.has(value);
  }

  add(value) {
    setOps++;
    return super.add(value);
  }
}

let set = new InstrumentedSet();

for (let i = 0; i < 1000; i++) {
  set.add(i);
}

for (let i = 0; i < 1000; i++) {
  set.has(i);
}

console.log(`setOps: ${setOps}`);