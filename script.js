let productinfo = document.querySelector('.product-info')
let productpage = productinfo.querySelectorAll('.info');
document.querySelectorAll('.section .product-container .product .box').forEach(box => {
    box.onclick = () => {
        let name = box.getAttribute('data-name');
        productpage.forEach(info => {
            let target = info.getAttribute('data-target');
            if (name == target) {
                console.log("done");
                info.classList.add('active');
            }
        });
    };
});