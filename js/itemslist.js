const urlParams = new URLSearchParams(window.location.search);

const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdGFwbGJsZnVwZWF5b2RkY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjc1NTQsImV4cCI6MjAwOTYwMzU1NH0.O3umb3fFmlNXgonHwOyOc6fWXqfzWkqEfA2YApmWdjI";
const url ="https://zotaplblfupeayoddcpu.supabase.co/rest/v1/ved_vandet"; 

fetch=(url, {
    headers: {
    apikey:key
}
})

.then((res) => res.json())
.then(showKategorier)

 function showKategorier (Kategorier) {
    kategorier.forEach(showKategori)
 }

 function showKategori(kategori) {
//fanger templ
const template = document.querySelector("template").content;

//kloner
const clone = template.cloneNode(true);
//ændrer indhold
clone.querySelector("a").textContent = kategori.kategori;
clone.querySelector("a").href= `itemslist.html?kategori=${kategori.kategori}`;
//appender
document.querySelector(".kategori-grid").appendChild(clone);

 }
