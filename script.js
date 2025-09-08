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
                        <p class="text-[1rem] text-[#1F2937]/80">${plant.description}</p>
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


// load plant detail start
const loadPlantDetail = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data => displayPlantDetail(data.plants))
}

const displayPlantDetail = (plant) => {
    const plantDetailBox = document.getElementById("plant-detail-container")
    plantDetailBox.innerHTML = `
            <div class="p-3">
                <h1 class="text-2xl font-semibold mb-3">${plant.name}</h1>
                <div>
                    <img src="${plant.image}" alt="photo" class="rounded-2xl h-[30vh] w-full object-cover ">
                </div>
                <div class="mt-3">
                    <h1 class="text-lg font-semibold">Catecory: <span class="font-normal text-[#1F2937]/80">${plant.category}</span></h1>
                    <p class="text-lg font-semibold">Price: <span class="font-normal text-[#1F2937]/80">৳ ${plant.price}</span></p>
                    <p class="text-lg font-semibold">Description: <span class="font-normal text-[#1F2937]/80">${plant.description}</span></p>
                </div>
            </div>
    `
    document.getElementById("plant_detail_modal").showModal()
}

// load plant detail end



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
    .then(plants => displayPlants(plants.plants))
}

const displayPlants = (plants) =>{

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
                        <h1 onclick="loadPlantDetail(${plant.id})" class="text-2xl font-semibold mb-3 cursor-pointer">${plant.name}</h1>
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
