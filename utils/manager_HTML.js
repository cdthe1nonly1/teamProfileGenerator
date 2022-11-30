//builds out the manager section to put into output.html

const generateManagerHTML = (manager_obj) => {
  return `
  <div class="card-deck">
     <div class="card text-bg-info mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${manager_obj.getrole()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager_obj.getName()}</h6>
          <div>
         <p class="card-text"> ID: ${manager_obj.getid()}</p>
         <p class="card-text"> Office Number: ${manager_obj.getsofficeNumber()}</p>
          </div>
          <div>email: <a href="mailto: ${manager_obj.getemail()}">${manager_obj.getemail()}</a></div>
        </div>
        </div>
    `;
};

module.exports = generateManagerHTML;
