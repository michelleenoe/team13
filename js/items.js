const apikey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdGFwbGJsZnVwZWF5b2RkY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjc1NTQsImV4cCI6MjAwOTYwMzU1NH0.O3umb3fFmlNXgonHwOyOc6fWXqfzWkqEfA2YApmWdjI";
const url ="https://zotaplblfupeayoddcpu.supabase.co/rest/v1/ved_vandet";
fetch=(url, {
    headers: {
    apikey:key
}

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdGFwbGJsZnVwZWF5b2RkY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjc1NTQsImV4cCI6MjAwOTYwMzU1NH0.O3umb3fFmlNXgonHwOyOc6fWXqfzWkqEfA2YApmWdjI";

const url = "https://zotaplblfupeayoddcpu.supabase.co/rest/v1/ved_vandet";

fetch = (url,
{
  headers: {
    apikey: key,
  },
})

  .then((res) => res.json())
  .then(showNavne);

function showNavne(navne) {
    //looper og kalder showNavn
    navne.forEach(showNavn);
  }

function showNavn(navn) {
  console.log(navn);
}
const template = document.querySelector("#Template").content;
//lav en kopi
const copy = template.cloneNode(true);
//ændre indhold

copy.querySelector("h2").textContent = navn.productdisplayname;
copy.querySelector(".landskab").innerHTML = navn.landskab;
copy.querySelector(".season").textContent = navn.season;

document.querySelector("main").appendChild(copy);
