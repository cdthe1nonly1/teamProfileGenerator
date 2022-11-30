//builds out the intern section to put into output.html

const generateInternHTML = (intern_obj) => {
  return `    
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${intern_obj.getrole()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern_obj.getName()}</h6>
          <div>
         <p class="card-text"> ID: ${intern_obj.getid()}</p>
         <p class="card-text"> School: ${intern_obj.getschool()}</p>
          </div>
          <div>email: <a href="mailto: ${intern_obj.getemail()}">${intern_obj.getemail()}</a></div>
        </div>
        </div>`;
};

module.exports = generateInternHTML;

//  <div class="card" style="width: 18rem">
//         <div class="card-body">
//           <h5 class="card-title">${intern_obj.getName()}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//           <p class="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <div>
//          <p> Email: ${intern_obj.getemail()}</p>
//           </div>
//           <div>
//             <a href="#" class="card-link">Another link</a>
//           </div>
//         </div>
