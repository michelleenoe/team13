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
  showAutumn(data);
  showWinter(data);
  showFall(data);
  showSummer(data);
})
.catch((error) => {
  console.error("Error fetching data:", error);
});

function showData(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist");

  // Clear the existing items in the grid
  // gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
      (element.season.toLowerCase().includes("september")) 
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          copy.querySelector("a").href = `items.html?id=${element.id}`;
          gridItemlist.appendChild(copy);
      }
  });

}


function showAutumn(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist.autumn");

  // Clear the existing items in the grid
  // gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
        if (element.season.toLowerCase().includes("efterår")) {
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          copy.querySelector("a").href = `items.html?id=${element.id}`;
          gridItemlist.appendChild(copy);
      }
    }
  });

}
function showWinter(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist.winter");

  // Clear the existing items in the grid
  // gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
        if (element.season.toLowerCase().includes("sommer")) {
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          copy.querySelector("a").href = `items.html?id=${element.id}`;
          gridItemlist.appendChild(copy);
      }
    }
  });

}
function showFall(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist.fall");

  // Clear the existing items in the grid
  // gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
        if (element.season.toLowerCase().includes("forår")) {
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          copy.querySelector("a").href = `items.html?id=${element.id}`;
          gridItemlist.appendChild(copy);
      }
    }
  });

}
function showSummer(items) {
  const template = document.querySelector("#itemsTemplate");
  const gridItemlist = document.querySelector(".grid_itemlist.summer");

  // Clear the existing items in the grid
  // gridItemlist.innerHTML = "";

  items.forEach((element) => {
      if (element.kategori.toLowerCase().includes("strand")) {
        if (element.season.toLowerCase().includes("sommer")) {
          const copy = template.content.cloneNode(true);
          copy.querySelector(".img").src = element.landskab_billede;
          copy.querySelector(".navn").textContent = element.item_name;
          copy.querySelector("a").href = `items.html?id=${element.id}`;
          gridItemlist.appendChild(copy);
      }
    }
  });

}