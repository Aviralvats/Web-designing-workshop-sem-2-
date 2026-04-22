
document.getElementById('button').addEventListener("click",function(){
    let number_subjects=parseInt(document.getElementById('number').value)
    let total=0
    document.getElementById('show_result').textContent=` number of subjects ${number_subjects}`
    
    
    
    
})

document.getElementById('calculate').addEventListener("click",function(){
    let number_subjects=parseInt(document.getElementById('number').value)
    let total=0
    for(let i=1;i<=number_subjects;i++){
        let mark=parseFloat(prompt(`enter marks for subject ${i}`))
        total=total+mark
    }
    let average=total/number_subjects
    let grade=""
    let result=""
    if(average>=90){
        grade="A+"
    }
    else if(80<=average<90){
        grade="B"
    }
    else if(70<=average<80){
        grade="C"
    }
    else{
        grade="D"
        
    }
    
    if(average>=33){
        result='pass'
    }else{
        result='fail'
    }
    document.getElementById('show_result').textContent=`average is ${average} \n result is ${result}  \ntotal ${total}  \n grade ${grade}`
})