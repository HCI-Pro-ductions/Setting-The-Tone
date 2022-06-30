// i think this might be better possibly you can take the parts that you think are cool

//hopefully runs when the extension is first pressed or smth
function addIndicator(){
	document.querySelector("style").innerHTML+=`
		indicator{
			color:red;
		}
		.invis{
			display:none;
		}`
}

//if we're using my toggle func then we dont need 2 buttons
function toggleSarcasm(){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	for(let i=0;i<(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")).length;i++){
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerText.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerText.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s<\indicator>";
		}
		if(postIsSarcastic){ //postIsSarcastic is whatever condition we'll be using
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].firstElementChild.classList.toggle('invis');
		}
	}
	for(let i=0;i<(document.querySelectorAll("div._a9zs")).length;i++){
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].innerText.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].innerText.slice(-2)!="\\s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> \\s<\indicator>";
		}
		if(postIsSarcastic){ //postIsSarcastic is whatever condition we'll be using
			document.querySelectorAll("div._a9zs")[i].children[0].firstElementChild.classList.toggle('invis');
		}
	}
}

changeColor.addEventListener("click", e=>{
	changeColor.style.backgroundColor = 'rgb(40, 0, 0)';
	chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
		const tabId = resp[0];
		console.log(tabId['id']);
		chrome.scripting.executeScript(
			{
				target: {tabId: tabId['id']},
				func: toggleSarcasm,
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

chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
	const tabId = resp[0];
	console.log(tabId['id']);
	chrome.scripting.executeScript(
		{
			target: {tabId: tabId['id']},
			func: addIndicator,
		},
		() => {});
});
