const apiUrl = "https://vjryvamlgusmreoodpep.supabase.co/rest/v1/ved_vandet";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnl2YW1sZ3VzbXJlb29kcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Mjc1MzMsImV4cCI6MjAxMDAwMzUzM30.T6BZvQ2ePLItikIPZVluc1nJaH1jxnuG6YHtgaFnUNY";

fetch(apiUrl, {
  method: "GET",
  headers: {
      'apikey': apikey
  },
})
.then((response) => response.json())
.then((data) => {
  showData(data);
})
.catch((error) => {
  console.error("Error fetching data:", error);
});

function showData(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist");

  // Clear the existing items in the grid
  gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          gridItemlist.appendChild(copy);
      }
  });

}

