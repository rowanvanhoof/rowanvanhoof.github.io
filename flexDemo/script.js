const switch1Elements = ["outer-container"];
const switch1Styles = ["block", "flex"];

const switch2Elements = ["row1", "row2", "row3"];
const switch2Styles = ["block", "flex"];


switchControls("switch1", switch1Elements, switch1Styles);
switchControls("switch2", switch2Elements, switch2Styles);


//This function allows any checkbox to control the styles
//of any set of elements. The paramters are as follows 
//switchControls(ID of checkbox, ID of element being controlled, styles)
function switchControls (controlId, elementId, styles) {
	const controlIdAlt = "#" + controlId;
	const sw = document.querySelector(controlIdAlt);
   
    var state = sw.dataset.switchState;
    sw.setAttribute(state, "off" );
    
    sw.onclick = () => {
		const result = sw.value;
		var switch1 = document.getElementById(controlId);
		
		if(switch1.getAttribute(state) == "off"){
			for (var i = 0; i < elementId.length; i++) {
			document.getElementById(elementId[i]).style.display = styles[1];
			switch1.setAttribute(state, "on" );
			//return 1;

			}

			

		}else {
			for (var i = 0; i < elementId.length; i++) {
			document.getElementById(elementId[i]).style.display = styles[0];	
			switch1.setAttribute(state, "off" );	
			}

			
		}

		
	}
}
