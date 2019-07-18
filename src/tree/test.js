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

const preOrder = traverse.preOrder(demoTree);
const midOrder = traverse.midOrder(demoTree);
const postOrder = traverse.postOrder(demoTree);
const newTree = traverse.getTree(preOrder, midOrder);
const newTree2 = traverse.getTree2(midOrder, postOrder);
console.log('pre traverse: ', preOrder);
console.log('mid traverse: ', midOrder);
console.log('post traverse: ', postOrder);
console.log('post traverse: ', traverse.postOrder({root: newTree}));
console.log('pre traverse: ', traverse.preOrder({root: newTree2}));
