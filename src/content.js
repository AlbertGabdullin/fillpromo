const flashSaleData = {
    name: "Test name",
    startDate: "2022-02-11",
    endDate: "2022-02-22",
    priceCriteria: "All",
    minimumDiscountValue: 10,
    maximumDiscountValue: 80,
    minimumPromotionPrice: 19,
    maximumPromotionPrice: 25,
}


const fillInFlashSale = () => {
    const { name, startDate, endDate, priceCriteria, minimumDiscountValue, maximumDiscountValue, minimumPromotionPrice, maximumPromotionPrice  } = flashSaleData
    document.querySelector('[data-test="name"]').setAttribute("value", name);

    document.querySelector('[data-test="startDate"]').setAttribute("value", startDate);
    document.querySelector('[data-test="endDate"]').setAttribute("value", endDate);

    document.querySelector('[data-test="priceCriteria"]').setAttribute("value", priceCriteria);


    const discountType = document.querySelector('[data-test="discountType"]').value;

    if(discountType && discountType.toLowerCase() === "percentage") {

        document.querySelector('[data-test="minimumDiscountValue"]',).setAttribute("value", minimumDiscountValue);
        document.querySelector('[data-test="maximumDiscountValue"]',).setAttribute("value", maximumDiscountValue);
    }

    if(discountType && discountType.toLowerCase() === "fixed") {
        document.querySelector('[data-test="minimumPromotionPrice"]').setAttribute("value", minimumPromotionPrice);
        document.querySelector('[data-test="maximumPromotionPrice"]').setAttribute("value", maximumPromotionPrice);
    }
}


const execute = (type) => {
    console.log('execute');
    switch (type) {
        case "flashSale": {
            fillInFlashSale.call(this);
            break;
        }
        case "cartRule": {
            // fill cart rule;
            break;
        }
        case "voucherCode": {
            // fill voucher code
            break;
        }
        default:
            break;
    }
}

// get the message from background js.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('execute');
    execute(message.value);
});
