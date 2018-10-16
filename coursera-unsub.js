checkboxes = document.querySelectorAll("[type='checkbox']"); 
checked = Array.from(checkboxes).filter(x=> x.checked); 
for(let item of checked){     
    item.click() 
}
