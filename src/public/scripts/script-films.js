
function send(e){
    let body = {
        name:document.querySelector('input[name=name]').value,
        title:document.querySelector('input[name=title]').value,
        author:document.querySelector('input[name=author]').value,
        gender:document.querySelector('input[name=gender]').value
    }
    fetch('/api/films',{
            method:'POST',
            body:JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        }).then((res=>{
        console.log(res)
        if(res.status){
            getFilms()
        } else {
            console.log('err')
        }
        
    }))
   
}
function getFilms(){
   
    fetch('/api/films').then(res=>res.json()).then(res=>{
        if(res.status){
            let str = ``
            res.data.forEach(element => {
                str+=`<li data-author="${element.author}" 
                data-name="${element.name}" 
                data-title="${element.title}" 
                data-gender=${element.gender}>
                    <span>${element.name}</span> 
                    <span>${element.title}</span>   
                    <span>${element.author}</span> 
                    <span>${element.gender}</span>
                    <span data-name="${element.name}">
                        <img class='remove' src="/public/images/remove.svg">
                    </span>
                </li> `
            });
            document.querySelector('.list').innerHTML = str;
            document.querySelectorAll('ul li span').forEach(el=>{
                el.addEventListener('click',()=>remove(el))
            })
            document.querySelectorAll('ul li').forEach(el=>{
                el.addEventListener('click',()=>edit(el))
            })
        } else {
            document.querySelector('.list').innerHTML = `EMPTY`;
        }

    })
}
function clearFields(){
    document.querySelector('input[name=name]').value = ``;
    document.querySelector('input[name=gender]').value = ``;
    document.querySelector('input[name=title]').value = ``;
    document.querySelector('input[name=author]').value = ``;
    document.querySelector('input[name=name]').disabled = false;
    document.querySelector('.send').classList.remove('dn');
    document.querySelector('.update').classList.add('dn');
}
function remove(element){
    
    fetch(`/api/films/${element.dataset.name}`,{
        method:"DELETE",

    }).then(res=>{
        clearFields()
        getFilms();
        
    })
}
function edit(element){
   
    document.querySelector('input[name=name]').disabled = true
    document.querySelector('input[name=name]').value = element.dataset.name;
    document.querySelector('input[name=gender]').value = element.dataset.gender;
    document.querySelector('input[name=title]').value = element.dataset.title;
    document.querySelector('input[name=author]').value = element.dataset.author;
    document.querySelector('.send').classList.add('dn');
    document.querySelector('.update').classList.remove('dn');
}
function update(){
    let body = {
        name:document.querySelector('input[name=name]').value,
        title:document.querySelector('input[name=title]').value,
        author:document.querySelector('input[name=author]').value,
        gender:document.querySelector('input[name=gender]').value
    }
    fetch(`/api/films`,{
            method:"PUT",
            body:JSON.stringify(body),
            headers: {
            "Content-Type": "application/json",
        },
    }).then(res=>{
       
        getFilms()
    })
}
