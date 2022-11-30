//builds out the engineer section to put into output.html

const generateEngineerHTML = (eng_obj) => {
  return `
     <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${eng_obj.getrole()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${eng_obj.getName()}</h6>
          <div>
         <p class="card-text"> ID: ${eng_obj.getid()}</p>
         <p class="card-text"> GitHub: <a href="${eng_obj.getgitHub()}">${eng_obj.getgitHub()}</a></p>
          </div>
          <div>email: <a href="mailto: ${eng_obj.getemail()}">${eng_obj.getemail()}</a></div>
        </div> 
        </div>
    `;
};

module.exports = generateEngineerHTML;


