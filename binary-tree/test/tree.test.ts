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
	const mockLog = jest.spyOn(console, 'log');
	mockLog.mockImplementation(() => {});

	t.addItem(4);
	t.addItem(3);
	t.addItem(5);
	t.addItem(1);
	t.addItem(2);
	t.addItem(7);
	t.addItem(6);

	t.print();

	expect(mockLog).toHaveBeenCalledTimes(7);
	expect(mockLog.mock.calls[0][0]).toBe(1)
	expect(mockLog.mock.calls[1][0]).toBe(2)
	expect(mockLog.mock.calls[2][0]).toBe(3)
	expect(mockLog.mock.calls[3][0]).toBe(4)
	expect(mockLog.mock.calls[4][0]).toBe(5)
	expect(mockLog.mock.calls[5][0]).toBe(6)
	expect(mockLog.mock.calls[6][0]).toBe(7)
});

// test('removeItem', () => {
// 	const t = new Tree();
// 	console.log = jest.fn();

// 	t.addItem(4);
// 	t.addItem(3);
// 	t.addItem(5);
// 	t.addItem(1);
// 	t.addItem(2);
// 	t.addItem(7);
// 	t.addItem(6);

// 	t.removeItem(4);

// 	expect(t.getTotal()).toBe(6);
	
// 	t.print();

// 	expect(console.log).toHaveBeenCalledTimes(6);
// 	expect(console.log).toHaveBeenCalledWith(1)
// 	expect(console.log).toHaveBeenCalledWith(2)
// 	expect(console.log).toHaveBeenCalledWith(3)
// 	expect(console.log).toHaveBeenCalledWith(5)
// 	expect(console.log).toHaveBeenCalledWith(6)
// 	expect(console.log).toHaveBeenCalledWith(7)
// });