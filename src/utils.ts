const comparableTypes = ['string', 'number', 'boolean', 'undefined'];

function isObject(obj: any) {
	return (
		typeof obj === 'object' &&
		obj instanceof Object &&
		!Array.isArray(obj) &&
		obj.constructor !== Date
	);
}

function isEqualArrays(arr1: any[], arr2: any[]): boolean {
	if (!Array.isArray(arr1) || !Array.isArray(arr2))
		throw Error('parameters must be arrays');
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		const obj1item = arr1[i];
		const obj2item = arr2[i];

		if (typeof obj1item !== typeof obj2item) return false;

		if (comparableTypes.includes(typeof obj1item)) {
			if (!Object.is(obj1item, obj2item)) return false;
		} else if (Array.isArray(obj1item)) {
			if (!isEqualArrays(obj1item, obj2item)) return false;
		} else if (isObject(obj1item) && isObject(obj2item)) {
			if (!isEqualObjects(obj1item, obj2item)) return false;
		} else if (!Object.is(obj1item, obj2item)) {
			return false;
		}
	}
	return true;
}

function isEqualObjects(obj1: object, obj2: object): boolean {
	if (!isObject(obj1) || !isObject(obj2))
		throw Error('parameters must be key-value-like objects');
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	const keysAreEqual =
		keys1.length === keys2.length &&
		keys1.every((item) => keys2.includes(item));
	if (!keysAreEqual) return false;
	const values1 = Object.values(obj1);
	const values2 = Object.values(obj2);
	return isEqualArrays(values1, values2);
}

export { isEqualArrays, isEqualObjects, isObject };
