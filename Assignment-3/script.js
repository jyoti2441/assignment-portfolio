// function verifyStudent() {

// const idInput = document.getElementById("identifier");
// const id = idInput.value.trim();

// const resultBox = document.getElementById("result");

// if (!id) {
// alert("Please enter Email or Student ID");
// return;
// }
// showSpinner(true);

// setTimeout(() => {

// const student = {

// name: "Jyoti Agrawal",
// email: "agrwljyoti2414@gmail.com",
// mobile: "9876543210",
// domain: "Web Development",
// college: "GLA University",
// start: "01 June 2024",
// duration: "1 Month",
// photo: "jyoti.png",
// assignments: [true, false, true, true],
// certificate: "#"

// };

// resultBox.innerHTML = `

// <div class="card">

// <img src="${student.photo}" alt="Student">

// <h3>${student.name}</h3>

// <p><strong>Email:</strong> ${student.email}</p>
// <p><strong>Mobile:</strong> ${student.mobile}</p>
// <p><strong>Domain:</strong> ${student.domain}</p>
// <p><strong>College:</strong> ${student.college}</p>
// <p><strong>Start Date:</strong> ${student.start}</p>
// <p><strong>Duration:</strong> ${student.duration}</p>

// <h4>Assignment Status</h4>

// <div class="assignment-status">

// ${student.assignments
// .map((done,i)=>
// `<span>A${i+1}: ${done ? '✅' : '❌'}</span>`
// ).join('')}

// </div>

// <p><strong>Status:</strong> Completed</p>

// <button onclick="window.open('${student.certificate}','_blank')">
// View Certificate
// </button>

// </div>
// `;

// showSpinner(false);

// showToast("✅ Student Record Found");

// },1200);

// }

// function showToast(message){

// const toast=document.getElementById("toast");

// toast.innerText=message;

// toast.className="toast show";

// setTimeout(()=>{
// toast.className="";
// },3000);

// }

// function showSpinner(show){

// document.querySelector(".spinner").style.display=
// show ? "block" : "none";

// }






function verifyStudent() {

const idInput = document.getElementById("identifier");
const id = idInput.value.trim();

const resultBox = document.getElementById("result");

if (!id) {
    alert("Please enter Email or Student ID");
    return;
}

showSpinner(true);

setTimeout(() => {

const student = {
    name: "Jyoti Agrawal",
    email: "agrwljyoti2414@gmail.com",
    mobile: "9876543210",
    domain: "Web Development",
    college: "GLA University",
    start: "01 June 2024",
    duration: "1 Month",
    photo: "jyoti.png",
    certificate: "certificate.png",
    assignments: [true, false, true, true]
};

resultBox.innerHTML = `

<div class="card">

<img src="${student.photo}" alt="Student">

<h3>${student.name}</h3>

<p><strong>Email:</strong> ${student.email}</p>
<p><strong>Mobile:</strong> ${student.mobile}</p>
<p><strong>Domain:</strong> ${student.domain}</p>
<p><strong>College:</strong> ${student.college}</p>
<p><strong>Start Date:</strong> ${student.start}</p>
<p><strong>Duration:</strong> ${student.duration}</p>

<h4>Assignment Status</h4>

<div class="assignment-status">

${student.assignments
.map((done,i)=>
`<span>A${i+1}: ${done ? '✅' : '❌'}</span>`
).join('')}

</div>

<p><strong>Status:</strong> Completed</p>

<button onclick="window.open('${student.certificate}','_blank')">
View Certificate
</button>

</div>
`;

showSpinner(false);

showToast("✅ Student Record Found");

},1200);

}

function showToast(message){

const toast = document.getElementById("toast");

toast.innerText = message;

toast.className = "toast show";

setTimeout(() => {
    toast.className = "";
},3000);

}

function showSpinner(show){

document.querySelector(".spinner").style.display =
show ? "block" : "none";
}




