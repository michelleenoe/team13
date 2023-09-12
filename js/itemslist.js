const apiUrl = "https://vjryvamlgusmreoodpep.supabase.co/rest/v1/ved_vandet";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnl2YW1sZ3VzbXJlb29kcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Mjc1MzMsImV4cCI6MjAxMDAwMzUzM30.T6BZvQ2ePLItikIPZVluc1nJaH1jxnuG6YHtgaFnUNY";

  fetch("https://vjryvamlgusmreoodpep.supabase.co/rest/v1/ved_vandet", {
    method: "GET",
    headers: {
      apikey:apikey
    },
  })
        
  function showData(items) {
    console.log(items);

    items.forEach(element => {
        const copy = template.content.cloneNode(true);

    
    });
}    
            // const article = document.querySelector(".items1");
            article.querySelector(".img").src = element.landskab_billede;
            article.querySelector(".navn").textContent = element.item_name;
            article.querySelector(".kategori").textContent = element.kategori;
            article.querySelector(".landskab").textContent = element.landskab;
            article.querySelector(".months").textContent = element.months;
            
            if (element.months) {
                article.querySelector(".months").textContent = JSON.parse(element.season).join(", ");
            
            artikel.querySelector(".sub_landskab").textContent = element.sub_landskab;
            septemberSection.querySelector(".grid_itemlist").appendChild(copy);

        };
        