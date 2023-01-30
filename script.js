let productinfo = document.querySelector('.products-info');
let productpage = productinfo.querySelectorAll('.info');
document.querySelectorAll('.section .product-container .products .box .name').forEach(name => {
    name.onclick = () => {
        productinfo.style.display = 'flex';
        let name = name.getAttribute('data-name');
        productpage.forEach(info => {
            let target = info.getAttribute('data-target');
            if (name == target) {
                console.log("done");
                info.classList.add('active');
            }
        });
    };
});