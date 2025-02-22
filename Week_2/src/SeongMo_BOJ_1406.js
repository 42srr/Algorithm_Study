const [str, M, ...commands] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map((el, index) => index === 1 ? Number(el) : el);
;

class Node {
	constructor(data) {
		this.data = data;
		this.before = null;
		this.next = null;
	}
}

class Cursor {
	constructor() {
		this.left = null;
		this.right = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.cursor = new Cursor();
	}

	append(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.before = this.tail;
			this.tail = newNode;
		}
	}

	init(str) {
		for (const char of str) {
			this.append(char);
		}
		this.cursor.left = this.tail;
	}

	moveLeft() {
		if (!this.cursor.left)
			return ;
		this.cursor.right = this.cursor.left;
		this.cursor.left = this.cursor.left.before;
	}

	moveRight() {
		if (!this.cursor.right)
			return ;
		this.cursor.left = this.cursor.right;
		this.cursor.right = this.cursor.right.next;
	}

	delete() {
		if (!this.cursor.left)
			return;
		let before = this.cursor.left.before;
		let next = this.cursor.right;

		if (before)
			before.next = next;
		if (next)
			next.before = before;

		if (this.cursor.left === this.head)
			this.head = next;
		if (this.cursor.left === this.tail)
			this.tail = before;

		this.cursor.left = before;
	}

	add(char) {
		let before = this.cursor.left;
		let next = this.cursor.right;
		let newNode = new Node(char);
		newNode.before = before;
		newNode.next = next;

		if (before)
			before.next = newNode;
		if (next)
			next.before = newNode;

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else if (!this.cursor.left) {
			this.head = newNode;
		} else if (!this.cursor.right) {
			this.tail = newNode;
		}

		this.cursor.left = newNode;
	}

	print() {
		let cur = this.head;
		let ans = '';

		while (cur) {
			if (cur.data)
				ans += cur.data;
			cur = cur.next;
		}
		console.log(ans);
	}
}

let list = new LinkedList();
list.init(str);

for (let i = 0; i < M; i++) {
	command = commands[i];
	if (command === 'L') {
		list.moveLeft();
	}
	else if (command === 'D') {
		list.moveRight();
	}
	else if (command === 'B') {
		list.delete();
	}
	else {
		list.add(command[2]);
	}
}

list.print();
