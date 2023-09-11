const url ="https://vjryvamlgusmreoodpep.supabase.co"
const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnl2YW1sZ3VzbXJlb29kcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Mjc1MzMsImV4cCI6MjAxMDAwMzUzM30.T6BZvQ2ePLItikIPZVluc1nJaH1jxnuG6YHtgaFnUNY"

fetch("https://vjryvamlgusmreoodpep.supabase.co/rest/v1/ved_vandet", {
    method:"GET",
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnl2YW1sZ3VzbXJlb29kcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0Mjc1MzMsImV4cCI6MjAxMDAwMzUzM30.T6BZvQ2ePLItikIPZVluc1nJaH1jxnuG6YHtgaFnUNY"
    }
})

.then(res=>res.json())
.then(showData)

function showData(ved_vandet) {
console.log(ved_vandet);
}

    



// const apikey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdGFwbGJsZnVwZWF5b2RkY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjc1NTQsImV4cCI6MjAwOTYwMzU1NH0.O3umb3fFmlNXgonHwOyOc6fWXqfzWkqEfA2YApmWdjI";
// const url ="https://zotaplblfupeayoddcpu.supabase.co/rest/v1/ved_vandet"; 
// fetch=(url, {
//     headers: {
//         Accept: 'application/json',
//         Content: 'application/json',
//     apikey: apikey
// }
// })

// .then(response => response.json())
// .then((response) => updateResponse(response))
// .catch(error => console.error(error));