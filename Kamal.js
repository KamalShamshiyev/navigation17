const sections = document.getElementsByClassName('sec')
console.log(sections[0])


for(let i = 0; i < sections.length; i++){
    sections[i].addEventListener('click', function(){
        this.nextElementSibling.style.display = 'block'
    })

    sections[i].addEventListener('dblclick', function(){
        this.nextElementSibling.style.display = 'none'
    })

}