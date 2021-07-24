window.document.body.addEventListener('keyup', (event) => {
    playSound(event.key.toLowerCase())
        
    
})

function play(){
    const input = window.document.getElementById('input')
    if(input != ''){
       const iArray = input.value.split('');
       playComposition(iArray)
    }
}

function playComposition(array){
    let wait = 0
    for(let key of array){
        setTimeout(()=>{
            playSound(key)
        },wait)
        wait+=250
    }
}

function playSound(key){
    let aElement = window.document.getElementById(`s_key${key}`)
    let keyElement = window.document.querySelector(`div[data-key=key${key}]`)
    if(aElement){
        aElement.currentTime = 0;
        aElement.play()
    }
    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=> {
            keyElement.classList.remove('active')
        },500)
    }


}