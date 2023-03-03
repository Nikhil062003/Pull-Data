let input=document.getElementById("input");
let name=document.getElementById("name");
let login=document.getElementById("login");
let followers=document.getElementById("followers");
let following=document.getElementById("following");
let respo=document.getElementById("respo");
let pull=document.getElementById("pull");
let ro=document.getElementById("repo");
let count=0;



pull.addEventListener("click",function(){
  if(input.value==""){
  alert("PROVIDE USERNAME");
  
}
else{
  let request=new XMLHttpRequest();
  request.open("GET",`https://api.github.com/users/${input.value}`,true);
  request.addEventListener("load",function(){
    let obj=JSON.parse(request.responseText);
   
      img.setAttribute("src",obj.avatar_url);
      img.setAttribute("style","width:200px;")
      login.innerHTML=`${obj.name} @${obj.login}`;
      following.innerHTML="following:- "+obj.following;
      followers.innerHTML="followers:- "+obj.followers;
     
    
  })
  request.send();

let rrequest=new XMLHttpRequest();
  rrequest.open("GET",`https://api.github.com/users/${input.value}/repos`,true);
  rrequest.addEventListener("load",function(){
     let obj=JSON.parse(rrequest.responseText);
    
    obj.forEach(function(repo){
      let span=document.createElement("p");
      span.setAttribute("style","background-color:orange;width:200px");
      span.innerHTML=repo.name;
     
      respo.appendChild(span);
       count++;
       
    })
   ro.innerHTML="repo:- " +count;
  })
  
  rrequest.send();
}
})
