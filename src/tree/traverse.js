/*
* @Author: zhangzirui
* @Description: 树的遍历
* @Date: 2019-07-14 14:34:27
 * @Last Modified by: zhangzirui
 * @Last Modified time: 2019-07-18 19:32:23
*/
const tree = require('../util/tree');


/**
 * 前序遍历
 * @param {*} tree
 * @returns
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


/**
 * 中序遍历
 * @param {*} tree
 * @returns
 */
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

/**
 * 后序遍历
 * @param {*} tree
 * @returns
 */
function postOrder(tree) {
    const res = [];

    _postOrder(tree.root, res);
    return res;
}

function _postOrder(node, res) {
    if (node === null) {
        return;
    }

    _postOrder(node.left, res);
    _postOrder(node.right, res);
    res.push(node.value);
}


/**
 *
 * 根据前序和中序生成二叉树
 * @param {*} preOrder
 * @param {*} midOrder
 * @returns
 */
function getTree(preOrder, midOrder) {
    const value = preOrder[0];
    const idx = midOrder.indexOf(value);
    const node = new tree.TreeNode(value);

    if (preOrder.length === 1 && midOrder.length === 1) {
        return node;
    }

    if (idx > 0) {
        const leftMid = midOrder.slice(0, idx);
        const leftPre = preOrder.slice(1, leftMid.length + 1);

        node.left = getTree(leftPre, leftMid);
    } else {
        node.left = null;
    }

    if (idx + 1 < midOrder.length) {
        const rightMid = midOrder.slice(idx + 1);
        const rightPre = preOrder.slice(-rightMid.length);

        node.right = getTree(rightPre, rightMid);
    } else {
        node.right = null;
    }

    return node;
}


/**
 * 根据后序和中序生成二叉树
 * @param {*} midOrder
 * @param {*} postOrder
 * @returns
 */
function getTree2(midOrder, postOrder) {
    const value = postOrder.slice(-1)[0];
    const node = new tree.TreeNode(value);

    if (midOrder.length === 1 && postOrder.length === 1) {
        return node;
    }
    const idx = midOrder.indexOf(value);

    if (idx > 0) {
        const leftMid = midOrder.slice(0, idx);
        const leftPost = postOrder.slice(0, leftMid.length);

        node.left = getTree2(leftMid, leftPost);
    } else {
        node.left = null;
    }

    if (idx + 1 < midOrder.length) {
        const rightMid = midOrder.slice(idx + 1);
        const rightPost = postOrder.slice(-rightMid.length - 1, -1);

        node.right = getTree2(rightMid, rightPost);
    } else {
        node.right = null;
    }

    return node;
}

module.exports = {
    preOrder,
    midOrder,
    postOrder,
    getTree,
    getTree2
};
