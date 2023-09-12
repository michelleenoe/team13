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

// funktion der toggler mellem like og liked mht. en råvare.
// fetch er udkommenteret - men her kunne man indsætte kode, der leverer noget info til databasen om at denne råvare er liked.
// For at denne tilstand huskes (og ikke forsvinder ved et reload fx), ville man så oppe i starten af .js skulle have et onload Event, der henter den aktuelle tilstand frem.

async function like() {
  try {
    // await fetch('et_eller_andet_url')
    document.querySelector("#like").classList.toggle("like");
    document.querySelector("#like").classList.toggle("liked");
  } catch (e) {
    console.error(e);
  }
}
