const darkMode = document.getElementById('input-dark-mode')

darkMode.addEventListener('click',()=>{
    const counter = document.querySelector('.counter')
    const table = document.querySelector('.table')
    if(darkMode.checked){
        console.log('dark mode on')
        // document.body.classList.add('')
        document.body.style.backgroundColor='black'
        counter.classList.add('text-light')
        table.classList.add('table-dark')
        document.querySelector('.table thead tr').style.color='#7B7D83'

    }
    else{
        
        document.body.style.backgroundColor='#ECD9BA'
        counter.classList.remove('text-light')
        table.classList.remove('table-dark')
        table.style.backgroundColor='white'
        document.querySelector('.table thead tr').style.color='black'

    }
})