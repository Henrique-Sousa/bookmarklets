Array.from(document.querySelectorAll("[type='checkbox']")).filter(x=> x.checked).forEach(x=>x.click());
Array.from(document.querySelectorAll("button")).filter(x=> x.textContent == "Save").forEach(x=>x.click());
