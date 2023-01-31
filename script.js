function showDetails() {
    let name = document.getElementsByClassName("box");
    for (var i = 0; i < name.length; i++) {
        let product_name = name[i].getAttribute("data-name");
        if (product_name == "hydro") {
            location.href = "singleproduct.html";
        }
    }
}