import React from 'react'

const Dvla = () => {
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Origin", "https://driver-vehicle-licensing.api.gov.uk");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Encoding", "gzip, deflate");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-api-key", "1LSyf8XdXW6FjayERxczr7GEqo8m4Hpda4tIbiXv");
  
  var raw = JSON.stringify({
    "registrationNumber": "LB14TVY"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let result = ""; 
  console.log('Dvla fetch ----------------------------');
  fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('hello error', error));
  return (
    <p> {JSON.stringify(result)}</p>
  )
}

export default Dvla