const button = document.querySelector('.toggle_btn')
const buttonBox = document.querySelector('.toggle_box')

button.style.left = 0
let btnPossition = 0


const changeMode = () => {
    switch(btnPossition){
        case 0:
            button.style.removeProperty('left')
            button.style.rigt = 0
            btnPossition = 1
            break
            case 1:
                button.style.removeProperty('right')
                button.style.left = 0
                btnPossition = 0
                break 
            }
    }
        
buttonBox.addEventListener("click", changeMode)