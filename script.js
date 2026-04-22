let employee=[]


document.getElementById('add_employee').addEventListener('click',()=>{
    let name=document.getElementById('name').value
    let Id=document.getElementById('empID').value
    let salary=parseFloat(document.getElementById('salary').value)
    
    
    let deptName=document.getElementById('department').value
    let emp={
        "name":name,
        "id":Id,
        "salary":salary,
        "department":deptName,

    }
    employee.push(emp)
    alert('employee added')
})
document.getElementById('display').addEventListener('click',()=>{
    let all='all employess : \n'
    employee.forEach(i=>{
        all+=`${i.name}  | ${i.id} | ${i.salary} | ${i.department} \n`

    })
    document.getElementById('output').textContent=all;

})
document.getElementById('salary_50k').addEventListener('click',()=>{
  
   let show='salary > 50000: \n'
   let filtered=employee.filter(i=>i.salary>50000)
   
   
   if(filtered.length===0){
    show='no employee has salary greater than 50k'

   }else{
        filtered.forEach(j=>{
        show+=`${j.name}\n`
        document.getElementById('output').textContent=show
        
    } )
    
  }

})

document.getElementById('total').addEventListener('click',()=>{
    let total=0;
    employee.forEach(i=>{
        total=total+i.salary
    })
    document.getElementById('output').textContent=`total salary is ${total}`
})

document.getElementById('average').addEventListener('click',()=>{
    let total=0;
    employee.forEach(i=>{
        total=total+i.salary
    })
    if(employee.length!=0){
        let average=total/employee.length
        document.getElementById('output').textContent=`average salary is ${average}`
    }else{
        average=0
        document.getElementById('output').textContent=`average salary is ${average}`
    }
})

document.getElementById('department_button').addEventListener('click',()=>{
    
    let deptName=document.getElementById('department').value.trim().toLowerCase()
    let count=employee.filter(i=>i.department.trim().toLowerCase()===deptName).length
    document.getElementById('output').textContent=`employees in ${document.getElementById('department').value} :${count}`
})