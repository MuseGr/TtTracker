const button = document.querySelector('.toggle_btn')
const buttonBox = document.querySelector('.toggle_box')

const body = document.querySelector('body')

button.style.left = 0
let btnPossition = 0


const changeMode = () => {
    switch(btnPossition){
        case 0:
            //Make animation
            button.style.removeProperty('left')
            button.style.right = 0
            
            //Switch mode to light
            switchToLight()
            
            btnPossition = 1
            break
            case 1:
                //Make animation
                button.style.removeProperty('right')
                button.style.left = 0
                
                //Switch mode to dark
                switchToDark()
                
                btnPossition = 0
                break
    }
}

const switchToLight = () => {
    buttonBox.style.background = "#f7f7f7"
    button.style.background = "#1d1d1d"
    body.style.background = "#c9c9c9"
}
const switchToDark = () => {
    buttonBox.style.background = "#1d1d1d"
    button.style.background = "#f7f7f7" 
    body.style.background = "#292828"
}

buttonBox.addEventListener("click", changeMode)