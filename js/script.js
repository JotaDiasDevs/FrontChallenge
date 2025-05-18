document.addEventListener("DOMContentLoaded", function () {
    
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";

    const header = document.querySelector("header");
    header.style.backgroundColor = "#f64905ef";
    header.style.color = "#000";
    header.style.padding = "20px";
    header.style.textAlign = "center";
    header.style.position = "relative";

    const logo = document.querySelector(".logo-header");
    logo.style.width = "80px";
    logo.style.position = "center";
    logo.style.top = "20px";
    logo.style.left = "20px";


    const navList = document.querySelector("nav ul");
    navList.style.listStyle = "none";
    navList.style.display = "flex";
    navList.style.justifyContent = "center";
    navList.style.padding = "0";

    const faqContainer = document.querySelector(".faq");
    faqContainer.style.maxWidth = "800px";
    faqContainer.style.margin = "30px auto";
    faqContainer.style.backgroundColor = "#fff";
    faqContainer.style.padding = "20px";
    faqContainer.style.borderRadius = "8px";
    faqContainer.style.boxShadow = "4 6px 10px rgba(0, 0, 0, 0.1)";

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.style.padding = "15px 0";
    });

    const h3s = document.querySelectorAll(".faq-item h3");
    h3s.forEach(h3 => {
        h3.style.color = "#004080";
    });

    const main = document.querySelector("main");
    main.style.padding = "20px";

    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "#000";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";
    footer.style.padding = "10px";
    footer.style.marginTop = "40px";
});
