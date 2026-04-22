let input_box=document.getElementById('input_box')
let main=document.getElementById('main_heading')
let para_graph=document.getElementById('para')
document.getElementById('heading').addEventListener('click',()=>{
    main.textContent=input_box.value || 'default heading';

})
document.getElementById('background').addEventListener('click',()=>{
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16)

})
document.getElementById('font_size').addEventListener('click',()=>{
    main.style.fontSize="40px"

})
document.getElementById('show_hide').addEventListener('click',()=>{
    if(para_graph.style.display==='none'){
        para_graph.style.display='block'
    }else{
        para_graph.style.display='none'
    }
})
document.getElementById('reset').addEventListener('click',()=>{
    main.textContent='this is heading'
    document.body.style.backgroundColor='white'
    main.style.fontSize='32px'
    para_graph.style.display='block'
    input_box.value=""
    

})