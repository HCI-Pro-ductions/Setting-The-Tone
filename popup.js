// i think this might be better possibly you can take the parts that you think are cool


function addIndicatorStyles(){
	document.querySelector("style").innerHTML+=`
		indicator{
			color:red;
		}
		.invis{
			display:none;
		}`
}

function getText(){
	let arr = Array.from(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o"));
	const newArr = arr.map(e=>{
		return e.children[2].innerText;
	})
	let arr2 = Array.from(document.querySelectorAll("div._a9zs"));
	const newArr2 = arr2.map(e=>{
		return e.children[0].innerText;
	})
	let finalArr = newArr.concat(newArr2)
	return finalArr;
}

//if we're using my toggle func then we dont need 2 buttons
function toggleSarcasm(){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not

	postIsSarcastic = true; //postIsSarcastic is whatever condition we'll be using
	
	//for own posts
	for(let i=0;i<(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")).length;i++){
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
		}
	}
	for(let i=0;i<(document.querySelectorAll("div._a9zs")).length;i++){
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
		}
	}
}

function checkSarcasm(postIsSarcastic, i){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not

	//postIsSarcastic = true; //postIsSarcastic is whatever condition we'll be using
	
	//for own posts
	try{
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
	
	try{
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent)
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0").textContent.slice(-2)!="/s"){
			document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0").innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0").lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent)
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0").textContent.slice(-2)!="/s"){
			document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0").innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0").lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
	
	try{
		if(document.querySelectorAll("h1._eYtD2XCVieq6emjKBH3m")[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("h1._eYtD2XCVieq6emjKBH3m")[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("h1._eYtD2XCVieq6emjKBH3m")[2].lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
	
	try{
		if(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m").textContent.slice(-2)!="/s"){
			document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m").lastElementChild.classList.toggle('invis');
		}
	}
	catch{
		console.log("not this");
	}
}

changeColor.addEventListener("click", e=>{
	changeColor.style.backgroundColor = 'rgb(40, 0, 0)';
	chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
		const tabId = resp[0];
		console.log(tabId['id']);
		console.log(document.querySelectorAll("span").length);
		let x = -1;
		for(i=0; i<document.querySelectorAll("span").length; i++){
			console.log(i, document.querySelectorAll("span").length);
			//divType=2;
			let urlThing = "http://34.97.97.204/Setting-The-Tone/tester.php?sentence=" + document.querySelectorAll("span")[i].innerText
			fetch(urlThing).then(resp=>resp.text())
			.then(data=>{
				console.log(data);
				console.log(data.slice(-1));
				if(data.slice(-1)=="1"){
					postIsSarcastic = true;
				}
				else{
					postIsSarcastic = false;
				}
				x+=1;
				chrome.scripting.executeScript(
					{
						target: {tabId: tabId['id']},
						func: checkSarcasm,
						args: [postIsSarcastic, x],
					},
					() => {});
			})
		}
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
			func: addIndicatorStyles,
		},
		() => {});
	

	chrome.scripting.executeScript(
		{
			target: {tabId: tabId['id']},
			func: getText,
		},
			(injectionResults) => {
			for (const frameResult of injectionResults){
				console.log('Frame Title: ' + frameResult.result);
				let detectTheText = frameResult.result;
				document.querySelector("div").innerHTML="";
				detectTheText.forEach(e=>{
					console.log(e);
					document.querySelector("div").innerHTML+=`
					<span class="invis">${e}</span>`;
				})
			}
	});
});
