

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
