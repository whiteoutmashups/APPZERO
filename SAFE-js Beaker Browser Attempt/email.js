import * as safe from 'safe-js';
import packageData from '../package.json'

const LOCAL_STORAGE_TOKEN_KEY = 'BOOM';

var token = localStorage["token"];
// THIS JS LISTENER IS ONLY REQUIRED CUZ MAIDSAFE'S CSP HEADER'S BLOCK HTML <button onClick!!!!
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("auth_button").addEventListener("click", function(){
    authorize();
  });
}, false);


function authorize() {
const app =
{
    name: "name",
    id: "id",
    version: "v",
    vendor: "vendor_name",
    permissions: ["SAFE_DRIVE_ACCESS"]
};

safe.utils.authorise( app );
