const switch1Elements = ["outer-container"];
const switch1CodeBlock = ["outer-containerDispBlock", "outer-containerDispFlex"];

const switch2Elements = ["row1", "row2", "row3"];
const switch2CodeBlock = ["rowDispBlock", "rowDispFlex"];


switchControls("switch1", switch1Elements, switch1CodeBlock);
switchControls("switch2", switch2Elements, switch2CodeBlock);

function switchControls (controlId, elementId, codeBlockId) {
	const controlIdAlt = "#" + controlId;
	const cb = document.querySelector(controlIdAlt);
   
    var state = cb.dataset.switchState;
    cb.setAttribute(state, "off" );
    
    cb.onclick = () => {
		const result = cb.value;
		var switch1 = document.getElementById(controlId);
		
		if(switch1.getAttribute(state) == "off"){
			for (var i = 0; i < elementId.length; i++) {
				document.getElementById(elementId[i]).style.display = "flex";
				switch1.setAttribute(state, "on" );
			}
		}else {
			for (var i = 0; i < elementId.length; i++) {
				document.getElementById(elementId[i]).style.display = "block";
				switch1.setAttribute(state, "off" );
			}
		}

		
	}
}