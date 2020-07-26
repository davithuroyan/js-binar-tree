var printBinarTree = function (node) {
    var tree_str = '';
    function printNode(queue) {
        var newQueue = [];

        queue.forEach(function (node) {
            tree_str += node.value + ' ';
            node.left && newQueue.push(node.left);
            node.right && newQueue.push(node.right);
        });

        tree_str += '\r\n';
        newQueue.length && printNode(newQueue);
    }

    printNode([node]);

    return tree_str;
};
var tree = { value: 4, left: { value: 2, left: { value: 1, left: null, right: null }, right: { value: 3, left: null, right: null } }, right: { value: 6, left: { value: 5, left: null, right: null }, right: { value: 7, left: null, right: null } } };

console.log(printBinarTree(tree));