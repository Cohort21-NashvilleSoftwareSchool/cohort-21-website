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
          <img class="card-img-top" src="${item.proimg}" alt="${item.fname} ${item.lname}" data-toggle="modal" data-target="#cohortMember${item.id}" style="cursor:pointer;">
          <div class="card-body">
            <h4 class="card-title title-font">${item.fname} ${item.lname}</h4>
            <p class="card-text">${item.reelthemin}</p>
            <center><button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#cohortMember${item.id}">
           Meet ${item.fname}!
          </button></center>
          </div>
        </div>
        <div class="modal fade" id="cohortMember${item.id}" tabindex="-1" role="dialog" aria-labelledby="cohortMember${item.id}Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
           <h5 class="modal-title title-font" id="cohortMember${item.id}Label">${item.fname} ${item.lname}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <center><img src="${item.funimg}" /></center><br>
            ${item.copy}
            </div>
            <div class="modal-footer">
            <h4 class="title-font">Contact ${item.fname}</h4>
              ${createLink(item.portfolio, 'portfolio')}
              ${createLink(item.github, 'github')}
              ${createLink(item.linkedin, 'linkedin')}
              ${createMailto(item.email, 'email')}
              <p><button type="button" data-dismiss="modal" class="btn btn-outline-primary title-font bottom" style="margin-top:20px" aria-label="Close">
              Close
            </button></p>
            </div>
          </div>
        </div>
      </div>`;

  });
};

//checks to see if url string is empty, if not, creates specified image
function createLink(urlString, img, mail) {
  let link = urlString !== '' ? `<a href="${urlString}" target= "_blank"><img src="assets/images/${img}.png"></a>` : '<!-- -->';
  return link
};

function createMailto(urlString, img) {
  let link = urlString !== '' ? `<a href="mailto:${urlString}" target="_blank"><img src="assets/images/${img}.png"></a>` : '<!-- -->'
  return link
}

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
