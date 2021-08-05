/**
 *            A
 *         4/   \1
 *        B       C
 */
interface Edge {
	weight: number;
	node: GraphNode<any>
}

class GraphNode<T> {
	value: T;
	id: number;
	edges: Edge[];

	constructor(value: T) {
		this.value = value;
		this.id = new Date().getMilliseconds();
		this.edges = [];
	}

	addEdge(toNode: GraphNode<T>, weight: number) {
		this.edges.push({
			node: toNode,
			weight
		});
	}

	printEdges() {
		this.edges.forEach(
			e => console.log(`${this.id} edge to ${e.node.id} with weight ${e.weight}`)
		);
	}

	getTotalEdges() {
		return this.edges.length;
	}

	getTotalWeight() {
		return this.edges.reduce((t, e) => t + e.weight, 0);
	}
}

type GraphNodeType<T> = GraphNode<T> | null;

class Graph<T> {
	nodes:GraphNode<T>[] = [];
	root?: GraphNode<T>;

	constructor() {}

	add(val: T): number {
		const node = new GraphNode(val);
		this.nodes.push(node);

		return node.id;
	}


	addEdge(fromNodeId: number, toNodeId: number, weight: number) {
		let fromNode: GraphNodeType<T>;
		let toNode: GraphNodeType<T>;
		if (!(fromNode = this.getNode(fromNodeId)) ||
			!(toNode = this.getNode(toNodeId)))
			throw new Error(`${fromNodeId} or ${toNodeId} does not exist`);
		
		fromNode.addEdge(toNode, weight);
	}


	getNode(id: number): GraphNodeType<T> {
		return this.nodes.reduce((targetNode: GraphNodeType<T>, node) => {
			return targetNode ? targetNode : (node.id === id ? node : null);
		}, null);
	}

	getTotalNodes() {
		return this.nodes.length;
	}

	getTotalWeight() {
		return this.nodes.reduce((t, n) => t + n.getTotalWeight(), 0);
	}

	printGraph() {
		this.nodes.forEach(n => n.printEdges());
	}
}

export default Graph;