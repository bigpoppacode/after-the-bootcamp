// Generated by MambaScript 0.5.5 
var present = console.log; 
// Generated by MambaScript 0.5.5 
void function () {
  var email, name, subscribeForm;
  if (window.location.pathname === '/') {
    subscribeForm = document.getElementById('subscribeForm');
    name = document.getElementById('name');
    email = document.getElementById('email');
    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      return fetch('/addLead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          name: name.value
        })
      }).then(function (response) {
        email.value = '';
        name.value = '';
        return response.json();
      }).then(function (data) {
        if (data.msg === 'lead created')
          subscribeForm.innerHTML = '<h3 id="subscribeFormHeading">\n  Thanks for Subscribing We\'ll Keep You Notified about updates\n</h3>';
        return data;
      })['catch'](function (err) {
        return present(err);
      });
    });
  }
}.call(this);