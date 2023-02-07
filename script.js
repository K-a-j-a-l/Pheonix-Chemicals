function showDetails() {
    let names = document.getElementsByClassName("box");
    let target = document.getElementsByClassName("products-info product");
    console.log(target);
    for (var i = 0; i < names.length; i++) {
        let product_name = names[i].getAttribute("data-name");
        console.log(product_name);
        for (var j = 0; j < target.length; j++) {
            let target_name = target[j].getAttribute("data");
            console.log(target_name);
            if (product_name == target_name) {
                target_name.style.display = 'block';
            }
        }
    }
}