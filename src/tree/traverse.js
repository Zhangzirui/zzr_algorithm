/*
* @Author: zhangzirui
* @Description: 树的遍历
* @Date: 2019-07-14 14:34:27
 * @Last Modified by: zhangzirui
 * @Last Modified time: 2019-07-14 16:35:42
*/

function preOrder(tree) {
    const res = [];

    _preOrder(tree.root, res);
    return res;
}

function _preOrder(node, res) {
    if (!node) {
        return;
    }
    res.push(node.value);
    _preOrder(node.left, res);
    _preOrder(node.right, res);
}


function midOrder(tree) {
    const res = [];

    _midOrder(tree.root, res);
    return res;
}

function _midOrder(node, res) {
    if (node === null) {
        return;
    }
    _midOrder(node.left, res);
    res.push(node.value);
    _midOrder(node.right, res);
}

function postOrder(tree) {
    const res = [];

    _postOrder(tree.root, res);
    return res;
}

function _postOrder(node, res) {
    if (node === null) {
        return null;
    }

    _postOrder(node.left, res);
    _postOrder(node.right, res);
    res.push(node.value);
}

module.exports = {
    preOrder,
    midOrder,
    postOrder
};
