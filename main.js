"use strict"

console.log("main.js, YO");

let cohort = [];
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});
cohort.push({
	title: 'PERSONS NAME',
    copy: 'I like to cook, eat, code, coffee, and Star Wars. This is filler text so that I can add some stuff here!',
    github: 'http://www.google.com',
    linkedin: 'http://www.google.com',
    portfolio: 'http://www.google.com',
    img: 'assets/images/avatar-1577909_960_720.png',
});

cohort.forEach(function(item){
	document.getElementById("cohort").innerHTML += `<div class="col-sm-4">
        <img class="card-img-top" src="${item.img}" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${item.title}</h4>
          <p class="card-text">${item.copy}</p>
          <a href="${item.github}" target= "_blank" class="btn btn-primary">Github</a>
          <a href="${item.linkedin}" target= "_blank" class="btn btn-primary">LinkedIn</a>
          <a href="${item.portfolio}" target= "_blank" class="btn btn-primary">Portfolio</a>
        </div>
      </div>`;
	
});