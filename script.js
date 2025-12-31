//your JS code here. If required.
const c = document.querySelector("#level")
var n = 0;
while (c.parentElement==null) {
	n += 1;
}
alert("The level of the element is: n");