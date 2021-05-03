import Queue from './queue.js';

const list = [1, 2, 3];
let queue = new Queue();

console.assert(queue.toString() === `[]`, `should equal []`);

for (let index in list) {
  queue.enqueue(list[index]);
}

console.assert(queue.toString() === `[1, 2, 3]`, `should equal [1, 2, 3]`);
console.assert(queue.dequeue() === 1, `dequeue should equal 1`);
console.assert(queue.toString() === `[2, 3]`, `should equal [2, 3]`);
queue.enqueue(4)
console.assert(queue.toString() === `[2, 3, 4]`, `should equal [2, 3, 4]`);
