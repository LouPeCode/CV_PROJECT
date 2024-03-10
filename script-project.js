document.addEventListener("DOMContentLoaded", () => {
    
    /*** Local Storage ***/
    let yourName = localStorage.getItem('yourname');
        
    let welcome = document.querySelector('.welcome');
    welcome.innerHTML = `<h2>Dobrý den, <span>${yourName}!</span> Vítejte na mém CV projektu.</h2>`;

    /***** Tab navigation *****/
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    for (const tabLink of tabLinks) {
        tabLink.addEventListener("click", () => {
            const targetId = tabLink.getAttribute("data-target");

            for (const tabContent of tabContents) {
                tabContent.style.display = "none";
            }

            for (const link of tabLinks) {
                link.classList.remove("active");
            }

            document.getElementById(targetId).style.display = "block";
            tabLink.classList.add("active");
        });
    }

    document.getElementById("0").style.display = "block";

    /***** Accordion *****/
    const accordions = document.querySelectorAll(".accordion");

    for (const accordion of accordions) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

    /***** Gallery *****/
    let images = document.querySelectorAll(".image img");
    let captions = document.querySelectorAll(".caption");
    let modal = document.querySelector(".modal");
    let modalImage = document.querySelector(".modal-image");
    let modalCaption = document.querySelector(".modal-caption");
    let modalCount = document.querySelector(".modal-count");
    let close = document.querySelector(".close");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let currentIndex = 0;

    function updateModalContent(index) {
        modalImage.src = images[index].parentNode.href; 
        modalCaption.textContent = captions[index].textContent;
        modalCount.textContent = (index + 1) + " / " + images.length;
    }

    images.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            updateModalContent(currentIndex);
            modal.style.display = "block";
        });
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    /*prev*/
    prev.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = currentIndex - 1;
        }
        updateModalContent(currentIndex);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            if (currentIndex === 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = currentIndex - 1;
            }
            updateModalContent(currentIndex);
        }
    });

    /*next*/
    next.addEventListener('click', () => {
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        updateModalContent(currentIndex);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            if (currentIndex === images.length - 1) {
            currentIndex = 0;
            } else {
            currentIndex = currentIndex + 1;
            }
            updateModalContent(currentIndex);
        }
    });

    /***** Set-Up *****/

    /*** Desk-color ***/
    const deskButton = document.getElementById("desk-button");
    
    deskButton.addEventListener("click", (e) => {
        e.preventDefault();

        let colorDesk = document.getElementById("color-desk").value;
        
        box.style.border = "20px solid " + colorDesk;
        
    });

    /*** Wide and Tall set-up ***/
    const wideButton = document.getElementById("wide-button");
    const box = document.querySelector(".box");
    
    wideButton.addEventListener("click", (e) => {
        e.preventDefault();

        let wider = document.getElementById("wider").value;
        box.style.width = wider + "%";
    })
    
    const tallerButton = document.getElementById("tall-button");
    
    tallerButton.addEventListener("click", (e) => {
        e.preventDefault();

        let taller = document.getElementById("taller").value;
        box.style.height = taller + "vh";
    });

    /*** Default-settings ***/
    const defaultButton = document.getElementById("default-button");

    defaultButton.addEventListener("click", (e) => {
        e.preventDefault();

        let colorDesk = document.getElementById("color-desk");
        let wider = document.getElementById("wider");
        let taller = document.getElementById("taller");
        
        box.style.border = "20px solid black";
        box.style.width = "33%";
        box.style.height = "80vh";

        colorDesk.value = "black";
        wider.value = 33;
        taller.value = 80;
    });

    /*** Dark-mode ***/
    const switchDark = document.getElementById("dark");
    let mode = document.querySelector(".body-project");

    switchDark.addEventListener("click", () => {
        
        if (switchDark.getAttribute("src") == "image/switch_off.png") {
            switchDark.src = "image/switch_on.png";
            mode.classList.add("dark-mode");
        } else {
            switchDark.src = "image/switch_off.png";
            mode.classList.remove("dark-mode");
        }
    })

    /*** Bulb-light switch ***/
    const bulb = document.getElementById("bulb");
    const switchBulb = document.getElementById("switch");

    function light() {
        if (bulb.getAttribute("src") == "image/bulb_off.png" && switchBulb.getAttribute("src") == "image/switch_off.png") {
		    bulb.src = "image/bulb_on.png";
		    bulb.classList.add("shadow");
            switchBulb.src = "image/switch_on.png"
	    } else {
		    bulb.src = "image/bulb_off.png";
		    bulb.classList.remove("shadow");
            switchBulb.src = "image/switch_off.png"
	    }
    }
    
    bulb.addEventListener("click", () => {
	    light();
    });
    switchBulb.addEventListener("click", () => {
	    light();
    });

    /*** Bulb-remove ***/
    const bulbRemove = document.getElementById("bulb-remove");

    bulbRemove.addEventListener("click", () => {
        
        if (bulbRemove.getAttribute("src") == "image/switch_off.png") {
            bulbRemove.src = "image/switch_on.png";
            bulb.style.display = "none";
        } else {
            bulbRemove.src = "image/switch_off.png";
            bulb.style.display = "block";
        }
    })

    /*** Grabing-Bulb ***/
    const grab = document.querySelector(".grab");
    let isGrabing = false;
    let offsetX, offsetY;

    grab.addEventListener("mousedown", (event) => {
        isGrabing = true;
        offsetX = event.clientX - grab.getBoundingClientRect().left;
        offsetY = event.clientY - grab.getBoundingClientRect().top;
        grab.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (event) => {
        if (isGrabing) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            grab.style.left = x + "px";
            grab.style.top = y + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isGrabing = false;
        grab.style.cursor = "grab";
    });

    /*** Fullscreen ***/
    const fullButton = document.getElementById("fullscreen");

    fullButton.addEventListener("click", () => {
        
        if (fullButton.getAttribute("src") == "image/switch_off.png") {
            fullButton.src = "image/switch_on.png";
            box.style.width = "100%";
            box.style.height = "90vh";
            box.style.margin = 0 + "px";
            welcome.style.display = "none";
        } else {
            fullButton.src = "image/switch_off.png";
            box.style.width = "90%";
            box.style.height = "70vh";
            box.style.margin = 40 + "px auto";
            welcome.style.display = "block";
        }
    })

    /*** Log-out ***/
    const logoutButton = document.getElementById("logoutButton");
    const boxOut = document.querySelector(".box-out");
    
    logoutButton.addEventListener("click", () => {
        logoutButton.style.display = "none";
        bulb.style.display = "none";
        box.style.display = "none";
        welcome.style.display = "none";
        boxOut.style.display = "block";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 30000);
    })

});