# ts-scripts
Random scripts written in ts

## Binary Tree
Simple binary tree implementation for finding and adding nodes

```typescript
import Tree from "./tree";

const t = new Tree<String>();

t.getTotal(); // 0

t.addItem('a');
t.addItem('e');
t.addItem('d');
t.addItem('c');
t.addItem('b');

t.getTotal(); // 5

t.exists('a');  // true
t.exists('e');  // true
t.exists('f');  // false
```

## Functions
Random function scripts

## DAG
DAG with weights

```typscript
	const g = new Graph<string>();
	const aId = g.add('a');
	const bId = g.add('b');
	const cId = g.add('c');
	const dId = g.add('d');

	g.addEdge(aId, bId, 10);
	g.addEdge(aId, cId, 11);
	g.addEdge(bId, dId, 12);
	g.addEdge(cId, dId, 13);

	g.getTotalWeight(); // 45
```
