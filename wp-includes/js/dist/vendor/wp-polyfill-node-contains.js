<<<<<<< HEAD
=======

// Node.prototype.contains
>>>>>>> master
(function() {

	function contains(node) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		do {
			if (this === node) {
				return true;
			}
<<<<<<< HEAD
=======
		// eslint-disable-next-line no-cond-assign
>>>>>>> master
		} while (node = node && node.parentNode);

		return false;
	}

	// IE
<<<<<<< HEAD
	if ('HTMLElement' in this && 'contains' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.contains;
		} catch (e) {}
	}

	if ('Node' in this) {
=======
	if ('HTMLElement' in self && 'contains' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.contains;
		// eslint-disable-next-line no-empty
		} catch (e) {}
	}

	if ('Node' in self) {
>>>>>>> master
		Node.prototype.contains = contains;
	} else {
		document.contains = Element.prototype.contains = contains;
	}

}());
