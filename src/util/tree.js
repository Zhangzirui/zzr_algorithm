/*
 * @Author: zhangzirui
 * @Date: 2019-07-13 17:39:25
 * @Last Modified by: zhangzirui
 * @Last Modified time: 2019-07-14 15:17:00
 */

class TreeNode {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 二叉搜索树
 *
 * @class BinarySearchTree
 */
class BinarySearchTree {
    constructor(rootValue, valArr = []) {
        this.root = new TreeNode(rootValue);
        valArr.forEach((item) => {
            this.insert(item);
        });
    }

    insert(value) {
        const node = new TreeNode(value);

        this._insert(node, this.root);
    }

    _insert(node, parentNode) {
        const {value} = node;
        const {value: parentValue} = parentNode;

        if (value < parentValue) {
            if (parentNode.left === null) {
                parentNode.left = node;
            } else {
                this._insert(node, parentNode.left);
            }
        } else {
            if (parentNode.right === null) {
                parentNode.right = node;
            } else {
                this._insert(node, parentNode.right);
            }
        }
    }
};

module.exports = {
    BinarySearchTree
};
