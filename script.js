let input_area = document.getElementById("text");
let total_c = document.getElementById("total_count");
let remaining_c = document.getElementById("remainig_count");

input_area.addEventListener("keyup", () =>{
    CharCount();
})
function CharCount(){
    let len = input_area.value.length;
    // console.log(len);
    total_c.innerText = len;
    remainig_count.innerText = input_area.getAttribute('maxLength') - len;
} 