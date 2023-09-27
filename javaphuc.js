
const listele = document.querySelectorAll('div.col-md-4');
function createListProduct(list) {
    let products = [];
    for (let i = 0; i < listele.length; i++) {
        const id = i + 1;
        const imgsrc = listele[i].querySelector('.img')?.getAttribute('style').replace('background-image: url(', 'https://preview.colorlib.com/theme/liquorstore/').replace(');', '');
        const brand = listele[i].querySelector('span.category')?.textContent;
        const ten = listele[i].querySelector('div h2')?.textContent;
        const pricesale = listele[i].querySelector('span.price')?.textContent.replace("$", "");

        products.push({
            id, imgsrc,
            brand,
            ten,
            pricesale: parseInt(pricesale),
        })
    }
    return products;
}
const listProduct = createListProduct(listele)

console.log('listProduct', listProduct)


const products = [
    {
        "id": 1,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-1.jpg",
        "brand": "Brandy",
        "ten": "Bacardi 151",
        "pricesale": 69
    },
    {
        "id": 2,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-2.jpg",
        "brand": "Gin",
        "ten": "Jim Beam Kentucky Straight",
        "pricesale": 69
    },
    {
        "id": 3,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-3.jpg",
        "brand": "Rum",
        "ten": "Citadelle",
        "pricesale": 69
    },
    {
        "id": 4,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-4.jpg",
        "brand": "Rum",
        "ten": "The Glenlivet",
        "pricesale": 69
    },
    {
        "id": 5,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-5.jpg",
        "brand": "Whiskey",
        "ten": "Black Label",
        "pricesale": 69
    },
    {
        "id": 6,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-6.jpg",
        "brand": "Tequila",
        "ten": "Macallan",
        "pricesale": 69
    },
    {
        "id": 7,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-7.jpg",
        "brand": "Vodka",
        "ten": "Old Monk",
        "pricesale": 69
    },
    {
        "id": 8,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-8.jpg",
        "brand": "Whiskey",
        "ten": "Jameson Irish Whiskey",
        "pricesale": 69
    },
    {
        "id": 9,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-9.jpg",
        "brand": "Whiskey",
        "ten": "Screwball",
        "pricesale": 69
    },
    {
        "id": 10,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-10.jpg",
        "brand": "Whiskey",
        "ten": "Screwball",
        "pricesale": 69
    },
    {
        "id": 11,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-11.jpg",
        "brand": "Whiskey",
        "ten": "McClelland's",
        "pricesale": 69
    },
    {
        "id": 12,
        "imgsrc": "https://preview.colorlib.com/theme/liquorstore/images/prod-12.jpg",
        "brand": "Whiskey",
        "ten": "Plantation",
        "pricesale": 69
    }
]

// Render lên HTMl

function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

// function getNewPrice(pro) {
//     if (pro.sale) {
//         return `<del>${formatCurrency(pro.price)}</del>
//                <ins>${formatCurrency(pro.price * ((100 - pro.sale) / 100))}</ins>`
//     } else {
//         return formatCurrency(pro.price)
//     }
// }

function createProductElement(pro) {

    return `<div class="col-md-3 d-flex">
    
        <div class="img d-flex align-items-center justify-content-center custom-img" style="background-image: url(${pro.imgsrc})">
        </div>
        <div class="text text-center">
            <span class="category">${pro.brand}</span>
            <h2 class="h2custom"><a href="#">${pro.ten}</a></h2>
            <p class="mb-0"><span class="price price-sale">$${pro.pricesale}.00</span></p>
        </div>
    </div>`
}


function renderList(products) {
    const elProducts = document.getElementById("list-product")

    let stringProducts = ''

    products.forEach(product => {
        stringProducts += createProductElement(product)
    })

    elProducts.innerHTML = stringProducts
}

renderList(products)

{/* <div class="product ftco-animate fadeInUp ftco-animated"> </div>*/ }