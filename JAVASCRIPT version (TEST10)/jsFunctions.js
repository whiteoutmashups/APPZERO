//finds button on html page and runs auth function when clicked.

document.addEventListener('DOMContentLoaded', function() {
document.getElementById("auth_button").addEventListener("click", function(){
authorize();

});
}, false);  
 
// stuff for auth function
this.hostName = window.location.host.replace(/.safenet$/g, '');
this.LOCAL_STORAGE_TOKEN_KEY = SAFE_TOKEN_${this.hostName};
this.app = {
name: window.location.host,
id: 'SUCCESS!!!!!!!!'
version: '0.0.00000001'
vendor: 'SUCCESSFULSAFEAPPCREATOR!!'
permissions: [
'LOW_LEVEL_API', "SAFE_DRIVE_ACCESS"
]
}
// for future dns use
this.user = {};

// auth function
function authorize() {
console.log('Authorising application');
console.log(hostName);

//authenticates with this.app and this.localblabla as payload
window.safeAuth.authorise(this.app, this.LOCAL_STORAGE_TOKEN_KEY)
  .then((res) => {
      //success! save res.token
      console.log(res);
      // redirect to new page
      window.location = "welcome.html";
  }, (err) => {
    // this is denied
    console.error(err);
    // auth failed popup
    alert("Authentication Failed")
  });
};