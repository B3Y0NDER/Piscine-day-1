function calculateSandwiches() {
 
    const hamSandwiches = Math.min(Math.floor(breadCount / 2), hamCount);
    

    breadCount -= hamSandwiches * 2;
    hamCount -= hamSandwiches;

    const tunaSandwiches = Math.min(Math.floor(breadCount / 2), tunaCount, Math.floor(saladCount / 2));

    breadCount -= tunaSandwiches * 2;
    tunaCount -= tunaSandwiches;
    saladCount -= tunaSandwiches * 2;

    const vegetarianSandwiches = Math.min(Math.floor(breadCount / 2), Math.floor(saladCount / 1), Math.floor(tomatoCount / 2));

    breadCount -= vegetarianSandwiches * 2;
    saladCount -= vegetarianSandwiches;
    tomatoCount -= vegetarianSandwiches * 2;
  
    console.log(`Nombre de sandwichs au jambon que l'on peut faire : ${hamSandwiches}`);
    console.log(`Nombre de sandwichs au thon que l'on peut faire : ${tunaSandwiches}`);
    console.log(`Nombre de sandwichs végétariens que l'on peut faire : ${vegetarianSandwiches}`);
}

function displayIngredients() {
    console.log(`Ingrédients restants :`);
    console.log(`Tranches de pain : ${breadCount}`);
    console.log(`Tranches de jambon : ${hamCount}`);
    console.log(`Boîtes de thon : ${tunaCount}`);
    console.log(`Tranches de tomate : ${tomatoCount}`);
    console.log(`Feuilles de salade : ${saladCount}`);
}
calculateSandwiches();
displayIngredients();

