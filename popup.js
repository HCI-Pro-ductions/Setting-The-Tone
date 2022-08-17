// i think this might be better possibly you can take the parts that you think are cool
let haveFetched = false;

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
	finalArr = [];
	try{
		let arr = Array.from(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o"));
		const newArr = arr.map(e=>{
			return e.children[2].innerText;
		})
		finalArr = finalArr.concat(newArr);
	}
	catch{
		console.log("Nope");
	}
	try{
		let arr2 = Array.from(document.querySelectorAll("div._a9zs"));
		const newArr2 = arr2.map(e=>{
			return e.children[0].innerText;
		})
		finalArr = finalArr.concat(newArr2);
	}
	catch{
		console.log("Nope");
	}
	try{
		let arr3 = Array.from(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0"));
		const newArr3 = arr3.map(e=>{
			return e.innerText;
		})
		finalArr = finalArr.concat(newArr3);
	}
	catch{
		console.log("Nope");
	}
	try{
		let arr4 = Array.from(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0"));
		const newArr4 = arr4.map(e=>{
			return e.innerText;
		})
		finalArr = finalArr.concat(newArr4);
	}
	catch{
		console.log("Nope");
	}
	/*
	try{
		console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		let arr5 = Array.from(document.querySelector("h1._eYtD2XCVieq6emjKBH3m"));
		const newArr5 = arr5.map(e=>{
			return e.innerText;
		})
		finalArr = finalArr.concat(newArr5);
	}
	catch{
		console.log("Nope");
	}
	*/
	/*
	try{
		let arr6 = Array.from(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m"));
		const newArr6 = arr6.map(e=>{
			return e.innerText;
		})
		finalArr = finalArr.concat(newArr6);
	}
	catch{
		console.log("Nope");
	}
	*/
	try{
		let arr7 = Array.from(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM"));
		const newArr7 = arr7.map(e=>{
			return e.innerText;
		})
		finalArr = finalArr.concat(newArr7);
	}
	catch{
		console.log("Nope");
	}
	return finalArr;
}

//if we're using my toggle func then we dont need 2 buttons
function toggleSarcasm(){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not

	//postIsSarcastic = true; //postIsSarcastic is whatever condition we'll be using
	
	//for own posts
	for(let i=0;i<(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")).length;i++){
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		/*
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		*/
		document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
	}
	for(let i=0;i<(document.querySelectorAll("div._a9zs")).length;i++){
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		/*
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		*/ 
		document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
	}
	for(let i=0;i<document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM").length;i++){
		console.log(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].textContent);
		document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].lastElementChild.classList.toggle('invis');
	}

	for(let i=0;i<document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0").length;i++){
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0").lastElementChild.classList.toggle('invis');
	}

	for(let i=0;i<document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0").length;i++){
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0").lastElementChild.classList.toggle('invis');
	}
	/*
	try{
		document.querySelector("h1._eYtD2XCVieq6emjKBH3m").lastElementChild.classList.toggle('invis');
	}
	catch{
		console.log("Not on reddit");
	}
	*/
	/*
	for(let i=0;i<document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m").length;i++){
		console.log(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].textContent);
		document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m").lastElementChild.classList.toggle('invis');
	}
	*/
}
function checkSarcasm(postIsSarcastic, i){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not

	//postIsSarcastic = true; //postIsSarcastic is whatever condition we'll be using
	
	//for own posts
	console.log(i);
	try{
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 1");
	}
	
	try{
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 2");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 3");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 4");
	}
	/*
	try{
		console.log(document.querySelector("h1._eYtD2XCVieq6emjKBH3m").textContent);
		if(document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 5");
	}
	*/

	/*
	try{
		console.log(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].textContent);
		if(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 6");
	}
	*/
	try{
		console.log(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].textContent)
		if(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML.slice(-12)!="</indicator>"){
			if(postIsSarcastic){
				document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML+="<indicator> /s</indicator>";
			}
			else{ 
				document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML+="<indicator> /srs</indicator>";
			}
		}
	}
	catch{
		console.log("not this 7")
	}
	/*
	if(divType == 1){
		console.log("Testing");
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
		}
	}
	else{
		console.log(i);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(postIsSarcastic);
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
		}
	}
	*/
}

function checkPos(tones, i){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not

	//postIsSarcastic = true; //postIsSarcastic is whatever condition we'll be using
	
	//for own posts
	console.log(i);
	try{
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 1");
	}
	
	try{
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 2");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-1blvdjr.r-16dba41.r-vrz42v.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 3");
	}
	
	try{
		console.log(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].textContent);
		if(document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0")[i].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 4");
	}
	
	/*
	try{
		console.log(document.querySelector("h1._eYtD2XCVieq6emjKBH3m").textContent);
		if(document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelector("h1._eYtD2XCVieq6emjKBH3m").innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 5");
	}
	*/

	/*
	try{
		console.log(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].textContent);
		if(document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("h3._eYtD2XCVieq6emjKBH3m")[i].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 6");
	}
	*/
	try{
		console.log(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].textContent)
		if(document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML.slice(-12)!="</indicator>"){
			if(tones==0){
				document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML+="<indicator> /neg</indicator>";
			}
			else if(tones==1){
				document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML+="<indicator> /neu</indicator>";
			}
			else{ 
				document.querySelectorAll("p._1qeIAgB0cPwnLhDF9XSiJM")[i].innerHTML+="<indicator> /pos</indicator>";
			}
		}
	}
	catch{
		console.log("not this 7")
	}
	/*
	if(divType == 1){
		console.log("Testing");
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
		}
	}
	else{
		console.log(i);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(postIsSarcastic);
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		if(postIsSarcastic){ 
			document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
		}
	}
	*/
}
changeColor.addEventListener("click", e=>{
	changeColor.style.backgroundColor = 'rgb(40, 0, 0)';
	chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
		const tabId = resp[0];
		//console.log(tabId['id']);
		console.log(document.querySelectorAll("span").length);
		//let x = -1;
		let urlThing = ""
		if(document.getElementById('tone').value=="pos"){
			urlThing = "http://34.97.97.204/Setting-The-Tone/NegNeuPosTester.php?";
		}
		else{
			urlThing = "http://34.97.97.204/Setting-The-Tone/tester.php?";
		}
		let lengthFix = 0;
		for(i=0; i<document.querySelectorAll("span").length; i++){
			console.log(i, document.querySelectorAll("span").length);
			//divType=2;
			if(document.querySelectorAll("span")[i].innerText.includes("&")){
				document.querySelectorAll("span")[i].innerText=document.querySelectorAll("span")[i].innerText.replace(/&/g, 'and');
			}
			if(document.querySelectorAll("span")[i].innerText.includes("\n")){
				document.querySelectorAll("span")[i].innerText=document.querySelectorAll("span")[i].innerText.replace(/\n/g, ' ');
			}
			if(document.querySelectorAll("span")[i].innerText.includes("\"")){
				document.querySelectorAll("span")[i].innerText=document.querySelectorAll("span")[i].innerText.replace(/"/g, ' ');
			}
			if(document.querySelectorAll("span")[i].innerText.includes("#")){
				document.querySelectorAll("span")[i].innerText=document.querySelectorAll("span")[i].innerText.replace(/#/g, ' ');
			}
			let temp = urlThing + "&amp;sentence" + i.toString() + "=" + document.querySelectorAll("span")[i].innerText;
			if(temp.length < 4750){
				if(i==0){
					urlThing += "sentence" + i.toString() + "=" + document.querySelectorAll("span")[i].innerText;
				}
				else{
					urlThing += "&amp;sentence" + i.toString() + "=" + document.querySelectorAll("span")[i].innerText;
				}
			}
			else{
				lengthFix = i;
				break
			}
		}
		console.log(urlThing);
		
		if(lengthFix > 0){
			var element = document.getElementsByTagName("span"), index;

			for (index = element.length - 1; index >= lengthFix; index--) {
				element[index].parentNode.removeChild(element[index]);
			}
		}

		if(haveFetched==false){
			if(document.getElementById('tone').value=="pos"){
				fetch(urlThing).then(resp=>resp.text())
				.then(data=>{
					console.log(data);
					console.log(data.slice(-document.querySelectorAll("span").length));
					haveFetched=true;
					booleanValues = data.slice(-document.querySelectorAll("span").length);
					for(count=0; count<document.querySelectorAll("span").length; count++){
						let postTone = booleanValues.charAt(count);
						chrome.scripting.executeScript(
							{
								target: {tabId: tabId['id']},
								func: checkPos,
								args: [postTone, count],
							},
							() => {});
					}
				})
			}
			else{
				fetch(urlThing).then(resp=>resp.text())
				.then(data=>{
					console.log(data);
					console.log(data.slice(-document.querySelectorAll("span").length));
					haveFetched=true;
					booleanValues = data.slice(-document.querySelectorAll("span").length);
					for(count=0; count<document.querySelectorAll("span").length; count++){
						let postIsSarcastic = true;
						if(booleanValues.charAt(count)=="0"){
							postIsSarcastic = false;
						}
						chrome.scripting.executeScript(
							{
								target: {tabId: tabId['id']},
								func: checkSarcasm,
								args: [postIsSarcastic, count],
							},
							() => {});
					}
				})
			}
		}
		else{
			chrome.scripting.executeScript(
				{
					target: {tabId: tabId['id']},
					func: toggleSarcasm,
				},
				() => {});
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
					//console.log(e);
					document.querySelector("div").innerHTML+=`
					<span class="invis">${e}</span>`;
				})
			}
	});
});

/*
function toggleSarcasm(){
	//adds /s to post/comment (i think) if not already present, else toggles whether the /s displays for the sarcastic posts/comments
	//id say we shld leave the adding indicator here in case theres a thing that the extension didnt previously see or was newly loaded in or smth
	//but say the /s is visible and you load more comments and you press the button again you end up with the new "/s"s visible but the old ones not
	//postIsSarcastic is whatever condition we'll be using
	let postIsSarcastic = true;
	//for own posts
	for(let i=0;i<(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")).length;i++){
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent);
		console.log(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2));
		if(document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		
		urlThing="http://34.97.97.204/Setting-The-Tone/tester.php?sentence=" + document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].innerText;
		console.log(urlThing);
		fetch(urlThing).then(resp=>resp.text())
		.then(data=>{
			//console.log(data);
			console.log(data.slice(-1));
			if(data.slice(-1)=="0"){
				postIsSarcastic = true;
			}
			else{
				postIsSarcastic = false;
			}
			if(postIsSarcastic){ 
				document.querySelectorAll("div._ab8x._ab94._ab99._ab9f._ab9m._ab9o")[i].children[2].lastElementChild.classList.toggle('invis');
			}
		})
	}
	for(let i=0;i<(document.querySelectorAll("div._a9zs")).length;i++){
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent);
		console.log(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2));
		if(document.querySelectorAll("div._a9zs")[i].children[0].textContent.slice(-2)!="/s"){
			document.querySelectorAll("div._a9zs")[i].children[0].innerHTML+="<indicator class='invis'> /s</indicator>";
		}
		
		urlThing="http://34.97.97.204/Setting-The-Tone/tester.php?sentence=" + document.querySelectorAll("div._a9zs")[i].children[0].innerText;
		console.log(urlThing);
		fetch(urlThing).then(resp=>resp.text())
		.then(data=>{
			//console.log(data);
			console.log(data.slice(-1));
			if(data.slice(-1)=="0"){
				postIsSarcastic = true;
			}
			else{
				postIsSarcastic = false;
			}
			if(postIsSarcastic){ 
				document.querySelectorAll("div._a9zs")[i].children[0].lastElementChild.classList.toggle('invis');
			}
		})
	}
}
*/
