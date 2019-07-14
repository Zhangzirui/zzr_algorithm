/*
* @Author: zhangzirui
* @Description: test
* @Date: 2019-07-14 14:40:59
 * @Last Modified by: zhangziruii
 * @Last Modified time: 2019-07-14 14:43:466
*/

const util = require('../util/tree');
const traverse = require('./traverse');

const demoTree = new util.BinarySearchTree(11, [7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]);

console.log(demoTree);
console.log('pre traverse: ', traverse.preOrder(demoTree));
console.log('mid traverse: ', traverse.midOrder(demoTree));
console.log('mid traverse: ', traverse.postOrder(demoTree));
