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