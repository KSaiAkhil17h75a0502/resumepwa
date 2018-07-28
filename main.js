// function Loadjson(file,callback) {
  // var xhr = new XMLHttpRequest();
  // xhr.overrideMimeType("application/json")
  // xhr.open("GET",file,true)
  // xhr.onreadystatechange = function() {
    // if(xhr.readyState === 4 && xhr.status == "200") {
      // callback(xhr.responseText);
    // }
  // };
  // xhr.send(null);
// }

// Loadjson("data.json", function(text)
// {
  // var data = JSON.parse(text);
  // console.log(data);
  // basics(data.details);
  // rig(data.carrer);
  // edu(data.Education);

  // tss(data.TechnicalSkills);
  // ach(data.Achievements);
// })

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var nf = loadjson("data.json");
nf.then(data=>{
  console.log(data);
  basics(data.details);
  rig(data.carrer);
  edu(data.Education);
  tss(data.TechnicalSkills);
  ach(data.Achievements);
})

var ch1 = document.querySelector(".child1")
function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  ch1.appendChild(image);
  var name = document.createElement("h4");
  name.textContent = det.name;
  ch1.appendChild(name);

  var phone = document.createElement("h4");
  phone.textContent = det.phoneno;
  ch1.appendChild(phone);

  var mail = document.createElement("a");
  mail.href= "mailto:saiakhilkuntamukkala@gmail.com";
  mail.textContent = det.email;
  ch1.appendChild(mail);

  var add = document.createElement("h2");
  add.textContent = "Address:";
  ch1.appendChild(add);

  var hr = document.createElement("hr");
  ch1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent=det.Address;
  ch1.appendChild(p);
}

var ch2 = document.querySelector(".child2");
function rig(car) {
  var care = document.createElement("h1");
  care.textContent = "Carrer Objective:";
  ch2.appendChild(care);

  var hr = document.createElement("hr");
  ch2.appendChild(hr);

  var tex = document.createElement("p");
  tex.textContent = car.text;
  ch2.appendChild(tex);
}

function edu(e){
  var ed = document.createElement("h2");
  ed.textContent = "Educational Qualification:";
  ch2.appendChild(ed);

  var hr = document.createElement("hr");
  ch2.appendChild(hr);

  var tab1 = document.createElement("table");
  tab1.border = "1";
  ch2.appendChild(tab1);

  tabledata="<tr><td>"+"Qualification"+"</td><td>"+"Institute"+"</td><td>"+"Branch"+"</td><td>"+"YearofPassing"+"</td><td>"+"Percentage"+"</td></tr>";
  for(i=0;i<e.length;i++){
    tabledata+="<tr><td>"+e[i].Qualification+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Branch+"</td><td>"+e[i].YearofPassing +"</td><td>"+e[i].Percentage+"</td></tr>";
  }
  tab1.innerHTML=tabledata;

}

function tss(t){

var ts = document.createElement("h2");
ts.textContent = "Technical Skills:";
ch2.appendChild(ts);

var hr = document.createElement("hr");
ch2.appendChild(hr);

for(i=0;i<t.length;i++){
  var title = document.createElement("h4");
  title.textContent=t[i].title;
  ch2.appendChild(title);

  var eduul = document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent=t[i].info;
  eduul.appendChild(eduli);
  ch2.appendChild(eduul);
}
}

function ach(a){

  var ac = document.createElement("h2");
  ac.textContent = "Achievements:";
  ch2.appendChild(ac);

  var hr = document.createElement("hr");
  ch2.appendChild(hr);

  for(i=0;i<a.length;i++){
    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.type = "circle";
    eduli.textContent = a[i].text;
    ch2.appendChild(eduli);
  }
}

function openpage(){
  window.open("pwaresume.html","_self",true)
}
