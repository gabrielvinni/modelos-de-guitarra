function txt(){
    let slide = document.getElementsByName("slide")
    let tex = document.getElementById('texto')

    if(slide[0].checked){
        tex.innerHTML = "Strato é um guitarra legal"
    }else if(slide[1].checked){
        tex.innerHTML = "Telecaster é legal também"
    }else if(slide[2].checked){
        tex.innerHTML = "Les Paul é legal também"
    }else if(slide[3].checked){
        tex.innerHTML = "Soloist é legal também"
    }else if(slide[4].checked){
        tex.innerHTML = "Explorer é legal também"
    }else if(slide[5].checked){
        tex.innerHTML = "Flying V é legal também"
    }else if(slide[6].checked){
        tex.innerHTML = "Warlock é legal também"
    }
}