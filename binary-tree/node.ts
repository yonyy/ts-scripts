class TreeNode<Type> {
	protected left!: TreeNode<Type>;
	protected right!: TreeNode<Type>;
	protected parent!: TreeNode<Type>;
	protected value: Type;


	constructor(value: Type, parent?: TreeNode<Type>) {
		this.value = value;

		if (parent)
			this.parent = parent;
	}

	addItem(item: TreeNode<Type> | Type): boolean {
		let node: TreeNode<Type> | null = !(item instanceof TreeNode) ? new TreeNode<Type>(item) : item;

		if (this.isValue(node.getValue())) {
			return false;
		}

		if (node.getValue() < this.value) {
			if (!this.left)
				this.left = node;
			else
				return this.left.addItem(item);
		} else {
			if (!this.right)
				this.right = node;
			else
				return this.right.addItem(item);
		}

		return true;
	}

	delete(): TreeNode<Type> | null {
		if (!this.right && !this.left)
			return null;

		const newRoot = this.right ? this.right : this.left;
		const subTree = newRoot.left;
		newRoot.left = this.left;
		
		// if (subTree)
		// 	newRoot.left.addItem();

		return newRoot;
	}

	getValue(): Type {
		return this.value;
	}

	getNode(item: Type): TreeNode<Type> | null {
		if (this.isValue(item))
			return this;

		if (item < this.value) {
			if (this.left)
				return this.left.getNode(item);
		} else {
			if (this.right)
				return this.right.getNode(item);
		}

		return null;
	}

	isValue(item: Type): boolean {
		return item === this.value;
	}

	print() {
		if (this.left)
			this.left.print();

		console.log(this.getValue());

		if (this.right)
			this.right.print();
	}
}

export default TreeNode;