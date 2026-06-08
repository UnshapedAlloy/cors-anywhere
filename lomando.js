const proxyUrl = 'https://lomando-cors-proxy.onrender.com'; 
const targetUrl = 'https://lomando.com';

fetch(proxyUrl + targetUrl)
  .then(response => response.text())
  .then(html => {
    console.log("Successfully fetched HTML via private proxy!");
    console.log(html);
  })
  .catch(err => console.error('Proxy Error: ', err));
