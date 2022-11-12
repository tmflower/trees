/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let depth = 0;
    const queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node.left || node.right) {
        if (node.right) {
          depth++;
          queue.push(node.right);
        }
        if (node.left) {
          depth++;
          queue.push(node.left);
        }
      }
      return depth;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let depth = 1;
    const stack = [this.root];
    while (stack.length) {
      let current = stack.pop();
      if (current) {
        if (current.left || current.right) {
          depth++;
          stack.push(current.right);
          stack.push(current.left);
        }
      }
    }   
    return depth; 
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

maxSum() {
  if (!this.root) return 0;

  const queueL = [this.root.left];
  const queueR = [this.root.right];
  let sumL = 0;
  let sumR = 0;
  while (queueL.length) {
      let current = queueL.shift();
      sumL += current.val;
      if (current.left && current.right) {          
        if (current.left.val > current.right.val) {
          queueL.push(current.left);
        }
        if (current.left.val < current.right.val) {
          queueL.push(current.right);
        }
      }
    }  
    
    while (queueR.length) {
      let current = queueR.shift();
      sumL += current.val;
      if (current.left && current.right) {          
        if (current.left.val > current.right.val) {
          queueR.push(current.left);
        }
        if (current.left.val < current.right.val) {
          queueR.push(current.right);
        }
      }
    }
    let sum = this.root.val + (Math.max(sumL, sumR))
  return sum; 
}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    const stack = [this.root];
    let allVals = [];
    let lowestVal;
    if (this.root.val > lowerBound) {
      lowestVal = this.root.val
    }
    else {
      lowestVal = lowerBound;
    }
    while (stack.length) {
      let current = stack.pop();
      allVals.push(current.val);
      if (current.val > lowerBound && current.val < lowestVal) {
        lowestVal = current.val;      
      }
      if (current.left || current.right) {
        stack.push(current.left);
        stack.push(current.right);
      }
    }
    if (!(lowestVal > lowerBound)) return null;
    return lowestVal;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
