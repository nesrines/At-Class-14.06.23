//Task-1
let buttons = document.querySelectorAll("button");
for (let btn of buttons) {
    btn.addEventListener("click", () => {
        document.querySelector("div").style.width = btn.innerHTML;
        document.querySelector(".btn-success").classList.replace("btn-success", "btn-warning");
        btn.classList.replace("btn-warning", "btn-success")
    })
}

//Task-2
let func = array => {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] > array[j+1]) {
                    let n = array[j];
                    array[j] = array[j+1];
                    array[j+1] = n;
                }
            }
        }
        console.log(array);
    }
}
func([45, 87, 6, 7, 2, 3])