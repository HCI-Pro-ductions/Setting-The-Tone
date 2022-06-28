function addSarcasm(){
	for(let i=0;i<(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")).length;i++){
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerText.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerText.slice(-2)!="\\s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> \\s<\indicator>";
		}
	}


	for(let i=0;i<(document.querySelectorAll("div._a9zs")).length;i++){
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].innerText.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].innerText.slice(-2)!="\\s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> \\s<\indicator>";
		}

	}

	document.querySelector("style").innerHTML+=`
	indicator{
		color:red;
	}`
}

changeColor.addEventListener("click", e=>{
	changeColor.style.backgroundColor = 'rgb(40, 0, 0)';
	chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
		const tabId = resp[0];
		console.log(tabId['id']);
		chrome.scripting.executeScript(
			{
			target: {tabId: tabId['id']},
			func: addSarcasm,
			},
			() => {});
	});
})

changeColor.addEventListener("mouseenter", e=>{
	changeColor.style.backgroundColor = 'rgb(255, 0, 0)';
})

changeColor.addEventListener("mouseleave", e=>{
	changeColor.style.backgroundColor = 'rgb(150, 170, 255)';
})
