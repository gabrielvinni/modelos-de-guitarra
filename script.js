function texto() {
    setTimeout(function (){
        let butão = document.getElementsByName("slide")
        let tex = document.getElementById("texto")
    
        if (butão[0].checked) {
            tex.innerText = "Strato"
        }else if (butão[1].checked){
            tex.innerText = "Telecaster"
        }else if (butão[2].checked){
            tex.innerText = "Les Paul"
        }else if (butão[3].checked){
            tex.innerText = "Soloist"
        }else if (butão[4].checked){
            tex.innerText = "Explorer"
        }else if (butão[5].checked){
            tex.innerText = "Flying-V"
        }else if (butão[6].checked){
            tex.innerText = "Warlock"
        }
    }, 1)
}