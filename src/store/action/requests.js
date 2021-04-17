let baseUrl = 'https://salesman-back.herokuapp.com/';

export function getRequest(endPoint) {
  let url = baseUrl + endPoint;
  fetch(url, {
    method: 'GET',
  }).then((data) => {
    data.json().then((response) => {
      console.log(response.data);
    });
  });
}

export function postRequest(endPoint, body) {
  let url = baseUrl + endPoint;
  fetch(url, {
    method: 'Post',
    body: JSON.stringify(body),
  }).then((data) => {
    data.json().then((response) => {
      return response;
    });
  });
}
