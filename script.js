// load by category start
const loadByCategory = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=> res.json())
    .then(data => displayByCategory(data.plants))
}

const displayByCategory = (plants) => {
    const plantCardContainer = document.getElementById("plant-card-container")
    plantCardContainer.innerHTML = ""

    plants.forEach(plant => {

        const plantParentDiv = document.createElement("div")
        plantParentDiv.innerHTML=`
            <div class="p-4 rounded-2xl bg-white shadow-xl">
                <div class="rounded-2xl mb-4">
                    <img src="${plant.image}" loading="lazy" alt="photo" class="rounded-2xl h-[30vh] w-full object-cover transition duration-300 ease-in-out">
                </div>
                <div>
                <div class="mb-3">
                        <h1 class="text-2xl font-semibold mb-3">${plant.name}</h1>
                        <p class="text-[1rem]">${plant.description}</p>
                </div>
                    <div class="flex justify-between items-center">
                        <h1 class="text-[1rem] text-[#15803D] font-[Geist] font-medium py-2 px-3 bg-[#DCFCE7] rounded-full">${plant.category}</h1>
                        <p class="text-xl text-[#1F2937] font-semibold">৳ <span>${plant.price}</span></p>
                    </div>
                    <button class="btn btn-soft btn-warning mt-5 h-12 rounded-full border-none bg-[#15803D] text-[1rem] text-white w-full">Add to Cart</button>
                </div>
            </div>
        `
        plantCardContainer.append(plantParentDiv)
    });
}

// load by category end




// load categorie start

const loadCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML = ""
    for(category of categories){
        const categoryDiv = document.createElement("div")
        categoryDiv.innerHTML = `
            <button onclick="loadByCategory(${category.id})" class="btn border-none outline-none px-4 text-[1rem] text-[#1F2937]/80 font-normal focus:text-white focus:bg-[#15803D] md:px-2 md:btn-wide text-center md:text-left justify-center md:justify-start">${category.category_name}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}
loadCategories()
// load categorie start

// load all trees start

const loadPlants = () =>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(plants => displayPlanst(plants.plants))
}

const displayPlanst = (plants) =>{

    const plantCardContainer = document.getElementById("plant-card-container")
    plantCardContainer.innerHTML = ""

    plants.forEach(plant => {

        const plantParentDiv = document.createElement("div")
        plantParentDiv.innerHTML=`
            <div class="p-4 rounded-2xl bg-white shadow-xl">
                <div class="rounded-2xl mb-4">
                    <img src="${plant.image}" loading="lazy" alt="photo" class="rounded-2xl h-[30vh] w-full object-cover transition duration-300 ease-in-out">
                </div>
                <div>
                <div class="mb-3">
                        <h1 class="text-2xl font-semibold mb-3">${plant.name}</h1>
                        <p class="text-[1rem]">${plant.description}</p>
                </div>
                    <div class="flex justify-between items-center">
                        <h1 class="text-[1rem] text-[#15803D] font-[Geist] font-medium py-2 px-3 bg-[#DCFCE7] rounded-full">${plant.category}</h1>
                        <p class="text-xl text-[#1F2937] font-semibold">৳ <span>${plant.price}</span></p>
                    </div>
                    <button class="btn btn-soft btn-warning mt-5 h-12 rounded-full border-none bg-[#15803D] text-[1rem] text-white w-full">Add to Cart</button>
                </div>
            </div>
        `
        plantCardContainer.append(plantParentDiv)
    });
}



loadPlants()

// load all trees end
