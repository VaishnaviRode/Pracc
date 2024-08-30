

function submitForm(){

    const n = document.getElementById("name").value;
    const e = document.getElementById("email").value;
    const a = document.getElementById("age").value;

    console.log(n,e,a);

    let body = document.getElementById("tableBody");
    let row = document.createElement("tr");
    
    row.innerHTML= `<td>${n}</td><td>${e}</td><td>${a}</td>`

    console.log(row);

    body.appendChild(row);


    // data.textContent=e;
    // row.appendChild(data);

    // data.textContent=a;
    // row.appendChild(data);

    


}






const states = {
    "India": ["Maharashtra", "Karnataka", "Delhi"],
    "USA": ["California", "Texas", "New York"],
    "Australia": ["Victoria", "Queensland", "New South Wales"]
};


function showStates(){
     let s = document.getElementById("country").value;
     let selS = document.getElementById("state")

     //const state = states[s];
     
     selS.innerHTML='<option value="">Select State</option>';

     for(state of states[s]){


        const opt = document.createElement("option");

        opt.value=state;
        opt.text=state;
        selS.appendChild(opt);
        console.log(opt);

     }
     
    
}