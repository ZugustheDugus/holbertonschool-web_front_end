const createElement = (data) => {
  let par = document.createElement('p');
  par.innerHTML = data;
  document.body.append(par);
}

const queryWikipedia = (callback) => {
  var rqst = new XMLHttpRequest();
  rqst.load = function () {
    callback(rqst.response);
  }
  rqst.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Ove');
  rqst.send();
}

let indirectcall = createElement();

queryWikipedia(indirectcall);