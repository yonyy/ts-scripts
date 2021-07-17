import TreeNode from "./node";

class Tree<Type> {
	private root!: TreeNode<Type> | null;
	private total: number = 0;

	constructor() {}

	addItem(item: Type): boolean {
		let added = false;
		if (!this.root) {
			this.root = new TreeNode<Type>(item);
			added = true;
		} else {
			added = this.root.addItem(item);
		}

		if (added)
			this.total++;

		return added;
	}

	removeItem(item: Type): boolean {
		let removed = false;
		if (!this.root)
			return false;
		
		const node = this.root.getNode(item);

		if (node === this.root)
			this.root = node.delete();
		else
			node?.delete();

		return node !== null;
	}

	exists(item: Type): boolean {
		if (!this.root)
			return false;
		
		const node = this.root.getNode(item);
		return node !== null;
	}

	getTotal(): number {
		return this.total;
	}

	print(): void {
		if (!this.root)
			return;
		
		this.root.print();
	}
}

export default Tree;