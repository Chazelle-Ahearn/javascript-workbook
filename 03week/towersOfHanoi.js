'use strict';

let stacks = {
  tower1: [a, b, c, d],
  tower2: [],
  tower3: []
};

function printStacks(){
  console.log("tower1: " + stacks.tower1);
  console.log("tower2: " + stacks.tower2);
  console.log("tower3: " + stacks.tower3);

}


let a = document.getElementById('a');
let tower1 = document.getElementById('container');

function movePiece(){

}




//---------------------------------------given code-----------------

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let stacks = {
//   a: [4, 3, 2, 1],
//   b: [],
//   c: []
// };

// function printStacks() {
//   console.log("a: " + stacks.a);
//   console.log("b: " + stacks.b);
//   console.log("c: " + stacks.c);
// }

// function movePiece() {
//   // Your code here

// }

// function isLegal() {
//   // Your code here

// }

// function checkForWin() {
//   // Your code here

// }

// function towersOfHanoi(startStack, endStack) {
//   // Your code here

// }

// function getPrompt() {
//   printStacks();
//   rl.question('start stack: ', (startStack) => {
//     rl.question('end stack: ', (endStack) => {
//       towersOfHanoi(startStack, endStack);
//       getPrompt();
//     });
//   });
// }

// // Tests

// if (typeof describe === 'function') {

//   describe('#towersOfHanoi()', () => {
//     it('should be able to move a block', () => {
//       towersOfHanoi('a', 'b');
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });

//   describe('#isLegal()', () => {
//     it('should not allow an illegal move', () => {
//       stacks = {
//         a: [4, 3, 2],
//         b: [1],
//         c: []
//       };
//       assert.equal(isLegal('a', 'b'), false);
//     });
//     it('should allow a legal move', () => {
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: []
//       };
//       assert.equal(isLegal('a', 'c'), true);
//     });
//   });
//   describe('#checkForWin()', () => {
//     it('should detect a win', () => {
//       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
//       assert.equal(checkForWin(), true);
//       stacks = { a: [1], b: [4, 3, 2], c: [] };
//       assert.equal(checkForWin(), false);
//     });
//   });

// } else {

//   getPrompt();

// }

//----------------------------------------------------------
// 'use strict';

// $(document).ready(function() {
//   let towers =[[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]],
//   moves = 0;
//   discs = null;
//   hold = null;

//   function clear(){
//     towers[0][1].empty();
//     towers[1][1].empty();
//     towers[2][1].empty();
//   }

//   function drawdiscs() {
//     clear();
//     for (let i = 0; i < 3; i++) {
//       if (!jQuery.isEmptyObject(towers[i][0])) {
//         for (let j = 0; j < towers[i][0].length; j++) {
//           towers[i][1].append(
//             $(
//               "<li id='disc" +
//                towers[i][0][j] +
//                "' value='" +
//                towers[i][0][j] +
//                "'></li>"
//             )
//           );
//         }
//       }
//     }
//   }

//   function init() {
//     clear();
//     towers = [[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]];
//     discs = document.getElementById("box").value;
//     moves = 0;
//     hold = null;
//     for (let i = discs; i > 0; i--) towers [0][0].push(i);
//     drawdiscs();
//     $(".moves").text(moves + " moves");
//   }

//   function handle(tower) {
//     if (hold === null) {
//       if (!jQuery.isEmptyObject(towers[towers][0])){
//         hold = tower;
//         towers[hold][1]
//         .children()
//         .last()
//         .css("margin-top", "-170px");
//       }
//     } else {
//       let move = moveDisc(hold, tower);
//       moves += 1;
//       $(".moves").text(moves + " moves");
//       if (move == 1) {
//         drawdiscs();
//       } else {
//         alert("You can't place a bigger disc on a smaller one");
//       }
//       hold = null;
//       }
//       if (solved()) $(".moves").text("Solved with " + moves + " moves!");
//     }

//     funtion moveDisc(a, b) {
//       let from = towers[a][0];
//       let to = towers[b][0];
//       if (from.length === 0) return 0;
//       else if (to.length === 0) {
//         to.push(from.pop());
//         return 1;
//       } else if (from[from.length -1] > to[to.length -1]){
//         return 0;
//       } else {
//         to.push(from.pop());
//         return 1;
//       }
//     }

//     function solved() {
//       if (
//         jQuery.isEmptyObject(towers[0][0]) &&
//         jQuery.isEmptyObject(tower[0][0]) &&
//         towers[2][0].lenth == discs
//       )
//       return 1;
//       else return 0;
//     }

//     $(".t").click(function() {
//       handle($(this).attr("value"));
//     });

//     $("#restart").click(function() {
//       var discs = document.getElementById("box").value;
//       init();
//     });
// }
