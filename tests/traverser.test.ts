import traverser from "../traverser"
import TreeNode from "../types"
describe('traverser',()=>{

    it('traverses',()=> {
        const sample = new Node(3);
        sample.left = new Node(4);
        sample.right = new Node(5);

        let t = traverser(sample)
        expect(t).toBeTruthy();
    })
})

class Node  {
    public left;
    public right;
    public value;

    constructor(value?){
        this.value = value
    }
}