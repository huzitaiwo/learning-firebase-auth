const guideList = document.querySelector('.guidez');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if(user) {
        // toggle UI elements
        loggedInLinks.forEach(link => link.style.display = 'block');
        loggedOutLinks.forEach(link => link.style.display = 'none');
    } else {
         // toggle UI elements
        loggedInLinks.forEach(link => link.style.display = 'none');
        loggedOutLinks.forEach(link => link.style.display = 'block');
    }
}

// setup guidez
const setupGuidez = (data) => {
    
    if(data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
                <li>
                    <div class="collapsible-header grey lighten-4">${guide.title}</div>
                    <div class="collapsible-body white">${guide.content}</div>
                </li>
            `;
            html += li;
        });
        guideList.innerHTML = html;
    } else {
        guideList.innerHTML = '<h5 class="center-align">Login to view guidez</h5>'
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});