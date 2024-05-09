const words = document.querySelectorAll('.word');
let currentIndex = 0;
let currentLetter = 0;

function rotateWords() {
    const currentWord = words[currentIndex];
    const letters = currentWord.textContent.trim();
    const lettersArray = letters.split('');

    words.forEach((word, index) => {
        if (index === currentIndex) {
            word.style.opacity = '1';
        } else {
            word.style.opacity = '0';
        }
    });

    currentWord.innerHTML = lettersArray.map((letter, index) => {
        const delay = index * 80; // Adjust the delay as needed
        return `<span style="animation: fadeIn ${delay}ms ease-in-out">${letter}</span>`;
    }).join('');

    currentIndex = (currentIndex + 1) % words.length;
}

rotateWords(); // Start the animation immediately

setInterval(rotateWords, 3000); // Rotate every 2 seconds




  //Redirection to linkedin
  function redirectToPage(url) {
    // Redirect to the specified URL
    window.location.href = url;
  }




//Card toggling
function toggleCard() {
    var card = document.getElementById("Demo");
    if (card.style.display === "block") {
        card.classList.add("zoom-out");
        card.classList.remove("show");
        setTimeout(function() {
            card.style.display = "none";
            card.classList.remove("zoom-out");
        }, 300);
    } else {
        card.style.display = "block";
        card.classList.add("zoom-in");
        card.classList.add("show");
        setTimeout(function() {
            card.classList.remove("zoom-in");
        }, 300);
    }
}

function closeCard() {
    var card = document.getElementById("Demo");
    card.classList.add("zoom-out");
    card.classList.remove("show");
    setTimeout(function() {
        card.style.display = "none";
        card.classList.remove("zoom-out");
    }, 300);
}



//Smooth scrolling function
/*function smoothScroll(target) {
    var targetElement = document.getElementById(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Intercept link clicks and scroll smoothly to the target
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        var target = event.target.getAttribute('href').slice(1); // Remove the '#' from the href
        smoothScroll(target);
    }
});*/




// Smooth scrolling function
function smoothScroll(target) {
    const targetElement = document.getElementById(target);
    if (targetElement) {
        const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }
}

// Intercept link clicks and scroll smoothly to the target
document.addEventListener('click', function(event) {
    const targetLink = event.target.closest('a[href^="#"]');
    if (targetLink) {
        event.preventDefault();
        const targetId = targetLink.getAttribute('href').slice(1); // Remove the '#' from the href
        smoothScroll(targetId);
    }
});





///PHONE HEADER
function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }


//TABLET
function openRightMenu2() {
    document.getElementById("rightMenu2").style.display = "block";
  }
  
  function closeRightMenu2() {
    document.getElementById("rightMenu2").style.display = "none";
  }


  //For over on work experience in the phone dispaly

  function toggleCard1() {
    var card = document.getElementById("Demo6");
    if (card.style.display === "block") {
        card.classList.add("zoom-out");
        card.classList.remove("show");
        setTimeout(function() {
            card.style.display = "none";
            card.classList.remove("zoom-out");
        }, 300);
    } else {
        card.style.display = "block";
        card.classList.add("zoom-in");
        card.classList.add("show");
        setTimeout(function() {
            card.classList.remove("zoom-in");
        }, 300);
    }
}

function closeCard1() {
    var card = document.getElementById("Demo6");
    card.classList.add("zoom-out");
    card.classList.remove("show");
    setTimeout(function() {
        card.style.display = "none";
        card.classList.remove("zoom-out");
    }, 300);
}


 //For over on work experience in the TABLET dispaly

 function toggleCard2() {
    var card = document.getElementById("Demo7");
    if (card.style.display === "block") {
        card.classList.add("zoom-out");
        card.classList.remove("show");
        setTimeout(function() {
            card.style.display = "none";
            card.classList.remove("zoom-out");
        }, 300);
    } else {
        card.style.display = "block";
        card.classList.add("zoom-in");
        card.classList.add("show");
        setTimeout(function() {
            card.classList.remove("zoom-in");
        }, 300);
    }
}

function closeCard2() {
    var card = document.getElementById("Demo7");
    card.classList.add("zoom-out");
    card.classList.remove("show");
    setTimeout(function() {
        card.style.display = "none";
        card.classList.remove("zoom-out");
    }, 300);
}



// Define the animation properties bouncing effect Phone
const bounceAnimation = anime({
    targets: '#icon78',
    translateY: [
      { value: '-10px', duration: 500 },
      { value: '0px', duration: 800, easing: 'easeOutBounce' }
    ],
    loop: true // Loop the animation
  });