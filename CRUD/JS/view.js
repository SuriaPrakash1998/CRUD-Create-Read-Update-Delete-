const url = 'https://64d4790fb592423e46942683.mockapi.io/USERS'
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
let myform = document.forms["createForm"]

myform.addEventListener('submit',async(e)=>{
    e.preventDefault()
    
    let data = {
        name:myform.name.value,
        email:myform.email.value,
        mobile:myform.mobile.value,
        gender:myform.gender.value,
        city:myform.city.value
    }

    let res = await fetch(`${url}/${id}`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify(data)
    })

    // alert(data)
    window.location.href='/'

})

async function getData(){
    if(id)
    {
        let res = await fetch(`${url}/${id}`)
        let data = await res.json()

        if(data)
        {
            document.getElementById('name').value = data.name
            document.getElementById('email').value = data.email
            document.getElementById('mobile').value = data.mobile
            document.getElementById('gender').value = data.gender
            document.getElementById('city').value = data.city
        }
    }
    else
    {
        window.location.href = '/'
    }
}

getData()
