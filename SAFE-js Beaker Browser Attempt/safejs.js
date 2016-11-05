import * as safe from 'safe-js';
import packageData from '../package.json'

// THIS JS LISTENER IS ONLY REQUIRED CUZ MAIDSAFE'S CSP HEADER'S BLOCK HTML <button onClick!!!!
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("auth_button").addEventListener("click", function(){
    authorize();
  });
}, false);


function authorize() {
const app =
{
    name: "SUCCESS!!!!!!!",
    id: "id",
    version: "0.0.0.0.0.0.0.0.1",
    vendor: "SUCCESSFULMAN!!!",
    permissions: ["SAFE_DRIVE_ACCESS"]
};

window.safeAuth.authorise( app );

};