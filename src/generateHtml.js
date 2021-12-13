function generateHtml(data) {
console.log('data in generate:', data)

var github = '';
var officeNum = '';
var internSchool = '';

return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>
  <body>
  <div class="bg-danger text-center text-light py-4">
  <h1>My Team</h1>
</div>

<div class="container mt-5">`

  for (var i = 0; i <= data.length; i++) {
        return `<div class="col">
        <div class="card" style="width: 18rem;">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body bg-primary text-light">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text"></p>
          </div>
          <div class="bg-light">
          <ul class="list-group my-4 px-2">
            <li class="list-group-item">Employee ID: ${data[i].employeeID}</li>
            <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>  
            </ul>
          </div>
        </div>
        </div>`  
  }
  
`</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  </body>
</html>
`
}
    
module.exports = generateHtml;