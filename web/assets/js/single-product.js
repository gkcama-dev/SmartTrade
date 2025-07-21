async function loadData() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        const productId = searchParams.get("id");
        console.log(productId);

        const response = await fetch("LoadSingleProduct?id=" + productId);
        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                console.log(json);

                document.getElementById("image1").src = "product-images\\" + json.product.id + "\\image1.png";
                document.getElementById("image2").src = "product-images\\" + json.product.id + "\\image2.png";
                document.getElementById("image3").src = "product-images\\" + json.product.id + "\\image3.png";

                document.getElementById("thumb-image1").src = "product-images\\" + json.product.id + "\\image1.png";
                document.getElementById("thumb-image2").src = "product-images\\" + json.product.id + "\\image2.png";
                document.getElementById("thumb-image3").src = "product-images\\" + json.product.id + "\\image3.png";

                document.getElementById("product-title").innerHTML = json.product.title;
                document.getElementById("published-on").innerHTML = json.product.created_at;
                document.getElementById("product-price").innerHTML = new Intl.NumberFormat(
                    "en-US",
                    { minimumFractionDigits: 2 })
                    .format(json.product.price);

                document.getElementById("brand-name").innerHTML = json.product.model.brand.name;
                document.getElementById("model-name").innerHTML = json.product.model.name;
                document.getElementById("product-quality").innerHTML = json.product.quality.value;
                document.getElementById("product-stock").innerHTML = json.product.qty;

                //product color
                document.getElementById("color-border").style.borderColor = json.product.color.value;
                document.getElementById("color-background").style.background = json.product.color.value;
                //product storage
                document.getElementById("product-storage").innerHTML = json.product.storage.value;
                //product description
                document.getElementById("product-description").innerHTML = json.product.description;

                //add-to-cart-main-button-end

                const addToCartMain = document.getElementById("add-to-cart-main");
                addToCartMain.addEventListener(
                    "click", (e) => {
                        addToCart(json.product.id, document.getElementById("add-to-cart-qty").value);
                        e.preventDefault();
                    }
                )

                //add-to-cart-main-button-end

                //similer-products

                

                //similer-products

                $('.recent-product-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 479,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    ]
                });

            } else {
               window.location = "index.html";
            }
        } else {
             window.location = "index.html";
        }
    } else {

    }
}



function addToCart(productId, qty) {

    console.log(productId + "" + qty);



}

