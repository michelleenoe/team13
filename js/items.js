// databse //

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
  .then(showProducts);

function showProduct(product) {
  console.log(product);
}
