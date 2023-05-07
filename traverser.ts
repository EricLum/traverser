import TreeNode from "./types"

const log = (arg:any) => {
    console.log(arg)
} 

const traverser = (node: TreeNode): boolean => {
    if (node.value){
        log(node.value)
    }
    if (node.left){
        traverser(node.left)
    }
    if (node.right){
        traverser(node.right)
    }
    return true;
}

export default traverser;
