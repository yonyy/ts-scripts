import Graph from "../dag";

test('Proper initialization', () => {
	const g = new Graph();
	expect(g.getTotalNodes()).toBe(0);
});

test('Nodes are added', () => {
	const g = new Graph<string>();
	g.add('a');
	g.add('b');
	g.add('c');

	expect(g.getTotalNodes()).toBe(3);
});

test('Existing nodes are found', () => {
	const g = new Graph<string>();
	const aId = g.add('a');
	const bId = g.add('b');
	const cId = g.add('c');

	const aNode = g.getNode(aId);
	expect(aNode).not.toBe(null);
	expect(aNode?.id).toBe(aId);

	const bNode = g.getNode(bId);
	expect(bNode).not.toBe(null);
	expect(bNode?.id).toBe(bId);

	const cNode = g.getNode(cId);
	expect(cNode).not.toBe(null);
	expect(cNode?.id).toBe(cId);
});

test('Edges are added for existing nodes', () => {
	const g = new Graph<string>();
	const aId = g.add('a');
	const bId = g.add('b');
	const cId = g.add('c');
	const dId = g.add('d');

	g.addEdge(aId, bId, 10);
	g.addEdge(aId, cId, 11);
	g.addEdge(bId, dId, 12);
	g.addEdge(cId, dId, 13);

	expect(g.getTotalWeight()).toBe(46);

	const spy = jest.spyOn(console, 'log').mockImplementation();
	g.printGraph();
	expect(console.log).toHaveBeenCalledTimes(4);
	spy.mockRestore();
});

test('Error thrown for invalid edges', () => {
	const g = new Graph<string>();
	const aId = g.add('a');
	g.add('b');
	const cId = g.add('c');

	expect(() => g.addEdge(aId + aId, cId, 11)).toThrowError();
	expect(() => g.addEdge(aId, cId + aId, 11)).toThrowError();
});