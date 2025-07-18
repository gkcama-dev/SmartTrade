
var modelList;//global variable to store model list

async function loadProductData() {

    const response = await fetch("LoadProductData");

    if (response.ok) {

        const json = await response.json();

        if (json.status) { //if status is true

            //call loadSelect function to load the select options
            loadSelect("brand", json.brandList, "name");
            modelList = json.modelList; //store model list in global variable
            // loadSelect("model",json.modelList,"name");
            loadSelect("storage", json.storageList, "value");
            loadSelect("color", json.colorList, "value");
            loadSelect("condition", json.qualityList, "value");

        } else { //if status is false
            document.getElementById("message").innerHTML = "Unable to get product data!. Please try again.";
        }

    } else {

        document.getElementById("message").innerHTML = "Unable to get product data!. Please try again.";
    }

}

// replace the following code with the loadSelect function
//load brands
//     const brandSelect = document.getElementById("brand");
//  json.brandList.forEach(item => {
//     const brandOption = document.createElement("option");
//     brandOption.value =item.id;
//     brandOption.innerHTML = item.name;
//     brandSelect.appendChild(brandOption);
//  });
//load brands
// replace the following code with the loadSelect function

//loadSelect function to load the select options
function loadSelect(selectId, list, property) {

    const select = document.getElementById(selectId);

    list.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerHTML = item[property]; // Use the specified property for the option text (item.name is wrong item["name"] is correct)
        select.appendChild(option);
    });
}

//when brand is selected, load models
function loadModels() {

    const brandId = document.getElementById("brand").value;

    const modelSelect = document.getElementById("model");
    modelSelect.length = 1; //clear the model select options except the brand option

    //get the models for the selected brand
    modelList.forEach(item => { //check all models
        // Check if the item belongs to the selected brand
        if (item.brand.id == brandId) { //item.brand.id is the brand id of the model
            const option = document.createElement("option");
            option.value = item.id;
            option.innerHTML = item.name;
            modelSelect.appendChild(option);
        }
    });
}

async function saveProduct() {

    const brandId = document.getElementById("brand").value;
    const modelId = document.getElementById("model").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const storageId = document.getElementById("storage").value;
    const colorId = document.getElementById("color").value;
    const conditionId = document.getElementById("condition").value;
    const price = document.getElementById("price").value;
    const qty = document.getElementById("qty").value;

    const image1 = document.getElementById("img1").files[0];
    const image2 = document.getElementById("img2").files[0];
    const image3 = document.getElementById("img1").files[0];

    const form = new FormData();
    form.append("brandId", brandId);
    form.append("modelId", modelId);
    form.append("title", title);
    form.append("description", description);
    form.append("storageId", storageId);
    form.append("colorId", colorId);
    form.append("conditionId", conditionId);
    form.append("price", price);
    form.append("qty", qty);
    form.append("image1", image1);
    form.append("image2", image2);
    form.append("image3", image3);

    const response = await fetch(
        "SaveProduct",
        {
            method: "POST",
            body: form
        }
    );
}
