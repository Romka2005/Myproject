document.querySelectorAll(".accordion__header").forEach((item) =>
    item.addEventListener("click", ()=>{
        const parent = item.parentNode;
        if(parent.classList.contains("accordion__item__active")){
            parent.classList.remove("accordion__item__active")
        }
        else{
            document
                .querySelectorAll(".accordion__item")
                .forEach((child) => child.classList.remove("accordion__item__active"))
            parent.classList.add("accordion__item__active");
        }
        
    })
)