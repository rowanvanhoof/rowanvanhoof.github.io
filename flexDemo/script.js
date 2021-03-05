const switch1Elements = ["outer-container"];
const switch1CodeBlock = ["outer-containerDispBlock", "outer-containerDispFlex"];

const switch2Elements = ["row1", "row2", "row3"];
const switch2CodeBlock = ["rowDispBlock", "rowDispFlex"];


switchControls("#switch1", switch1Elements, switch1CodeBlock);

switchControls("#switch2", switch2Elements, switch2CodeBlock);


function switchControls (controlId, elementId, codeBlockId) {
	const cb = document.querySelector(controlId);
    var count1 = 0;
    
    cb.onclick = () => {
		const result = cb.value;
		count1++;
		
		for(var i = 0; i < elementId.length; i++){
			if(count1 % 2 == 1){
				document.getElementById(elementId[i]).style.display = "flex";

				document.getElementById(codeBlockId[0]).style.visibility = "hidden";
				document.getElementById(codeBlockId[1]).style.visibility = "visible";
			}else {
				document.getElementById(elementId[i]).style.display = "block";
				
				document.getElementById(codeBlockId[1]).style.visibility = "hidden";
				document.getElementById(codeBlockId[0]).style.visibility = "visible";

			}
		}	
	}
}