document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log("ID from URL:", id);

  const apiUrl =
    "https://vjryvamlgusmreoodpep.supabase.co/rest/v1/ved_vandet?id=eq." + id;
  const apikey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnl2YW1sZ3VzbXJlb29kcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Mjc1MzMsImV4cCI6MjAxMDAwMzUzM30.T6BZvQ2ePLItikIPZVluc1nJaH1jxnuG6YHtgaFnUNY";

  fetch(apiUrl, {
    method: "GET",
    headers: {
      apikey: apikey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const info = data[0];
        console.log(info);
        const item_name = document.getElementById("item_name");
        item_name.textContent = info.item_name;
        const itemTitle = document.getElementById("itemTitle");
        itemTitle.textContent = info.item_title;
        const itemKategori = document.getElementById("itemKategori");
        itemKategori.textContent = info.kategori;
        const itemLandskab = document.getElementById("itemLandskab");
        itemLandskab.textContent = info.landskab;
        const itemSeason = document.getElementById("itemSeason");
        itemSeason.textContent = info.season;
        const itemSubLandskab = document.getElementById("itemSubLandskab");
        itemSubLandskab.textContent = info.sub_landskab;
        document.querySelector("#itemImg").src = info.landskab_billede; 
      } else {
        console.error(`Item with ID ${id} not found.`);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// funktion der toggler mellem like og liked-states mht. en råvare.
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
