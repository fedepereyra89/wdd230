const new_year = new Date();
const year = new_year.getFullYear();
document.querySelector('#year').textContent = year

const modi = document.lastModified;
const lastupdate = new Date(modi);  
const formtdate = lastupdate.toLocaleString('es-ES');



document.getElementById('date').textContent =  formtdate;