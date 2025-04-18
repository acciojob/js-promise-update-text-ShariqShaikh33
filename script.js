//your JS code here. If required.

let promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000);
});

promise1.then((e)=>{
	let output = document.getElementById("output");
	output.innerText = e;
})
