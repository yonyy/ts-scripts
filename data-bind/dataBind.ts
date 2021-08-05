function createDataBind<T>(data: T): T {
	
	const keyStack: string[] = [];

	function createProxy(target: {[key: string]: any }) {
		const clone = {...target};

		Object.keys(target)
			.filter(k => typeof target[k] === 'object')
			.forEach(k => {
				clone[k] = createProxy(target[k]);
			});

		return new Proxy(clone, {
			get(t: any, p: string, r: any) {
				keyStack.push(p);
				console.log(keyStack);
				const val = Reflect.get(t, p, r);
				keyStack.pop();
				return val;
			},
	
			set(t: any, p: string, v: any, r: any) {
				return Reflect.set(t, p, v, r);
			}
			
		})

	}

	const proxyData = createProxy(data);

	return proxyData;
}

const obj = {
	foo: 1,
	far: 'Hello',
	bar: function() {
		return 'function call!'
	},
	baz: {
		child: {
			grandChild: 2
		}
	}
}

const objProxy =  createDataBind(obj);
console.log(objProxy.foo);
console.log(objProxy.far);
console.log(objProxy.bar());
console.log(objProxy.baz.child.grandChild);
