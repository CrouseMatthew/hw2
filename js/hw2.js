// Crouse Matthew
// Js Assignment 2
// May 26, 2014

/**
 * setup of some basic variables that contain strings to make the console output
 * easier to read.
 * @type {String}
 */
var startQuestion = '\n' + "========================================== " + '\n';
console.log("1)" + startQuestion);

/**
 * The node function  contains the data for our pseudo-array and points to
 *  the next element
 */
function node() {
	this.data = null;
	this.next = null;
}


/**
 * Array is our Sulu array object.It contains a set of  properties that
 * set the foundation  for the construction  of a array. The array object also
 * contains  3 methods: push, pop, join, display.  That mimic the standard
 * functions and JavaScript by the same name.
 ** @type {Object}
 */
var array = {
	head: null,
	tail: null,
	length: 0,

	push: function (data) {
		var newNode = new node();
		newNode.data = data;

		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
			console.log("Pushed " + this.head.data);
		}
		else {
			this.tail.next = newNode;
			this.tail = this.tail.next;
			console.log("Pushed " + this.tail.data);
		}

		this.length++;
	},

	pop: function () {
		console.log("popped " + this.tail.data);
		var current = this.head;
		while(current.next !== this.tail) {
			current= current.next;
		}
		delete this.tail;
		this.tail = current;
		this.length -=1;
	},

	join: function(toJoin) {
		var current = this.head;
		var myString = "";
		var output = "Our joined array = ";
		while(current !== this.tail) {
			myString += current.data += toJoin;
			current = current.next;
		}
		console.log(output += myString += current.data);
	},

	display: function() {
		var current = this.head;
		var myString = "";
		var output = "Our psudo array = ";
		while(current !== this.tail) {
			myString += current.data;
			current = current.next;
		}
		console.log(output += myString += current.data);
	}
};

/**
 * The following commands test are pseudo-array and output strings to the
 * consule.
 * @type {String}
 */
console.log("Our psudo array length = " + array.length);
array.push('a');
array.push('b');
array.push('c');
array.display();
console.log("Our psudo array length = " + array.length);
array.pop();
array.pop();
console.log("Our psudo array length = " + array.length);

array.push('w'); array.push('e'); array.push('s'); array.push('o');
	array.push('m'); array.push('e');

array.join('|');



console.log('\n'+"2)" + startQuestion);

function copy(dest, src){
	for(var property in src){
		dest[property]={};
		if(typeof src[property] === 'object' && src[property] !== null){
			copy(dest[property], src[property]);
		} else {
			dest[property] = src [property];
		}
	}
}



Object.prototype.equals = function(obj)
{
	var property;
	for(property in this) {
		if(typeof(obj[property])=='undefined') {

console.log("ONE");

			return false;}
	}

	for(property in this) {
		if (this[property]) {
			if(typeof(this[property])==="object") {
				if (! this[property].equals(obj[property])) {

console.log("two");

					return false;
				}
			}
			if(typeof(this[property])==="function") {
				if (typeof(obj[property])=='undefined' ||
 					(property != 'equals' && this[property].toString() != obj[property].toString())){

 console.log("three");

					return false;
				}
			}
			if (this[property] != obj[property]) {
console.log("four");
			return false;
			}
		}
		else {
			if (obj[property]){

console.log("five");

				return false;
			}
		}
	}

	for(property in obj) {
		if(typeof(this[property])=='undefined') {

console.log("six");

			return false;
		}
	}

console.log("seven");
return true;
};


var myClone={};
copy(myClone, array);
console.log("Original object: "+ Object.keys(array));
console.log("Original object length: "+ array.length + '\n');
console.log("New object:      "+ Object.keys(myClone));
console.log("New object length:      "+myClone.length + '\n');

console.log(myClone.equals(array));


