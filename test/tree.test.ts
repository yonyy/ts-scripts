import Tree from '../tree';

test('tree is properly initialized', () => {
	const t = new Tree();
	expect(t.getTotal()).toBe(0);
});

test('items are added', () => {
	const t = new Tree();

	t.addItem(1);
	t.addItem(2);
	t.addItem(3);

	expect(t.getTotal()).toBe(3);
});

test('existing item are found', () => {
	const t = new Tree();

	t.addItem(1);
	t.addItem(2);
	t.addItem(3);

	expect(t.exists(1)).toBe(true);	
	expect(t.exists(2)).toBe(true);
	expect(t.exists(3)).toBe(true);
});

test('non-existing item are not found', () => {
	const t = new Tree();

	t.addItem(1);
	t.addItem(2);
	t.addItem(3);

	expect(t.exists(4)).toBe(false);
});

test('in-order traversal', () => {
	const t = new Tree();
	console.log = jest.fn();

	t.addItem(4);
	t.addItem(3);
	t.addItem(5);
	t.addItem(1);
	t.addItem(2);
	t.addItem(7);
	t.addItem(6);

	t.print();

	expect(console.log).toHaveBeenCalledTimes(7);
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
	expect(console.log).toHaveBeenCalledWith(3)
	expect(console.log).toHaveBeenCalledWith(4)
	expect(console.log).toHaveBeenCalledWith(5)
	expect(console.log).toHaveBeenCalledWith(6)
	expect(console.log).toHaveBeenCalledWith(7)
})