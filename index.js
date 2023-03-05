//programamos los botones para redirigir a una url
document.getElementById('linkedin').addEventListener('click',function(){
    window.location.href="https://ar.linkedin.com/"
})
document.getElementById('gmail').addEventListener('click',function(){
    window.location.href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiZwZmFtu_8AhWtT0gAHc4lBsUYABAAGgJjZQ&ohost=www.google.com&cid=CAASJeRobXqOzW_dWLH1ll72WiikCNG_7TAy5nGwbAzC-Rn2P43gzUM&sig=AOD64_07-Z39UfhdN5NftE2jvSSezZCYUA&q&adurl&ved=2ahUKEwiO55KFtu_8AhVSqJUCHe4_Bq0Q0Qx6BAgIEAE"
})
document.getElementById('personalweb').addEventListener('click',function(){
    window.location.href="https://www.google.com/search?q=www.reallysite.com&rlz=1C1ALOY_esAR1023AR1023&ei=L83XY7iTLtOq1sQPhs6isA0&ved=0ahUKEwj45pf1ue_8AhVTlZUCHQanCNYQ4dUDCBA&uact=5&oq=www.reallysite.com&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQHhANMggIABAeEA0QDzIICAAQCBAeEA0yCAgAEAgQHhANMggIABAIEB4QDTIICAAQCBAeEA0yCAgAEAgQHhANMggIABAIEB4QDTIICAAQCBAeEA0yCAgAEAgQHhANOgkIABAeEA0QsAM6CwgAEB4QDRAPELADOgsIABAIEB4QDRCwA0oECEEYAUoECEYYAFCpA1jKCWDWDmgBcAB4AIABrQKIAdUEkgEFMi0xLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp"
})
// creamos una API con fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: 'kian graham',
    linkedin: 'linkedin.com/in/kian graham',
    gmail:'kigraham@gmail.com',
    phone: '+123-456-7890',
    personal_web:'www.reallysite.com',
    job:'flight attendant',
    picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2022_Steward_w_samolocie_Wizz_Air.jpg/255px-2022_Steward_w_samolocie_Wizz_Air.jpg',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
//utilizamos la API en el documento html   
document.getElementById("name").innerHTML=json.name
document.getElementById("linkedin").innerHTML=json.linkedin
document.getElementById("gmail").innerHTML=json.gmail
document.getElementById("phone").innerHTML=json.phone
document.getElementById("personalweb").innerHTML=json.personal_web
document.getElementById("job").innerHTML=json.job
document.getElementById("picture").src=json.picture})
// lista de ids de elementos a ocultar o visualizar segun sea el caso
let id_list1=['works_picture','work_title','working_duration','activities_list'];
let id_list2=['educations_picture','education_title','place_of_education','achievement_list'];
let id_list3=['certifications_picture','title_of_certifications','obtaining_certificates1','obtaining_certificates2'];
let x
// en funcion del boton presionado, se oculta o visualiza los anteriores elementos
document.getElementById('work_experiencie').addEventListener('click',function(){
  for (x in id_list1){
    document.getElementById(id_list1[x]).style.display='block'
   }
  for (x in id_list2){
    document.getElementById(id_list2[x]).style.display='none'
  } 
  for (x in id_list3){
    document.getElementById(id_list3[x]).style.display= 'none'
  }
})

document.getElementById('education_history').addEventListener('click',function(){
  for (x in id_list2){
    document.getElementById(id_list2[x]).style.display='block'
   }
  for (x in id_list1){
    document.getElementById(id_list1[x]).style.display='none'
  } 
  for (x in id_list3){
    document.getElementById(id_list3[x]).style.display= 'none'
  }
})

document.getElementById('certifications').addEventListener('click',function(){
  for (x in id_list3){
    document.getElementById(id_list3[x]).style.display='block'
   }
  for (x in id_list1){
    document.getElementById(id_list1[x]).style.display='none'
  } 
  for (x in id_list2){
    document.getElementById(id_list2[x]).style.display= 'none'
  }
})
//creamos 3 observer para vigilar a 3 imagenes y modificar el paddinbottom en funcion de cada imagen
const imagen_educacion= document.getElementById('educations_picture');
const imagen_certificado= document.getElementById('certifications_picture');
const imagen_trabajo= document.getElementById('works_picture');

const cargarImagen1 = (entradas, observador1) => {
    
    if(entradas[0].isIntersecting){
      document.getElementById('aside').style.paddingBottom='11%'
      console.log(entradas)
    }}

const observador1= new IntersectionObserver(cargarImagen1,{
  root: document.getElementById('aside'),
  rootMargin:'0px',
  threshold:0,
})

observador1.observe(imagen_trabajo);


const cargarImagen2 = (entradas, observador2) => {
    
  if(entradas[0].isIntersecting){
    document.getElementById('aside').style.paddingBottom='24%'
    console.log(entradas)
  }}

const observador2= new IntersectionObserver(cargarImagen2,{
root: document.getElementById('aside'),
rootMargin:'0px',
threshold:0,
})

observador2.observe(imagen_educacion);


const cargarImagen3 = (entradas, observador3) => {
    
  if(entradas[0].isIntersecting){
    document.getElementById('aside').style.paddingBottom='17.8%'
    console.log(entradas)
  }}

const observador3= new IntersectionObserver(cargarImagen3,{
root: document.getElementById('aside'),
rootMargin:'0px',
threshold:0,
})

observador3.observe(imagen_certificado);



