"use strict";

console.log("main.js, YO");

$.ajax({
    url: "data/cohort.json"
  }).done(cohortMembers)
  .fail(function (error) {
    console.log("error", error);
  });

function cohortMembers(list) {
  let data = list.cohort;
  data.forEach(function (item) {
    document.getElementById("cohort").innerHTML += `<div class="col-md-3 cohortMems">
          <img class="card-img-top" src="${item.proimg}" alt="${item.fname} ${item.lname}">
          <div class="card-body">
            <h4 class="card-title">${item.fname} ${item.lname}</h4>
            <p class="card-text">${item.reelthemin}</p>
            <center><button type="button" class="btn btn-primary bottom" data-toggle="modal" data-target="#cohortMember${item.id}">
           Meet ${item.fname}!
          </button></center>
          </div>
        </div>
        <div class="modal fade" id="cohortMember${item.id}" tabindex="-1" role="dialog" aria-labelledby="cohortMember${item.id}Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
           <h5 class="modal-title" id="cohortMember${item.id}Label">${item.fname} ${item.lname}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <center><img src="${item.funimg}" /></center><br>
            ${item.copy}
            </div>
            <div class="modal-footer">
            <h4>Contact ${item.fname}</h4>
            <a href="${item.portfolio}" target= "_blank"><img src="assets/images/portfolio.png"></a>
              <a href="${item.github}"target= "_blank"><img src="assets/images/github.png"></a>
              <a href="${item.linkedin}" target= "_blank"><img src="assets/images/linkedin.png"></a>
              <a href="mailto:${item.email}" target= "_blank"><img src="assets/images/email.png"></a>
            </div>
          </div>
        </div>
      </div>`;

  });
};

$.ajax({
    url: "data/techs.json"
  }).done(techs)
  .fail(function (error) {
    console.log("error", error);
  });

function techs(list) {
  let data = list.techs;
  data.forEach(function (item) {
    document.getElementById("techs").innerHTML +=
      `<div class="col-sm-3 technologies">
      <center><img class="techs" src="${item.image}"><br>
      ${item.name}</center>
      </div>`;

  });
};
