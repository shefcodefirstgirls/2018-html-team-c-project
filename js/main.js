var slideIndex = 0;

function showSlides() {

      var images = ['Photos/img1.jpg', 'Photos/img2.jpg', 'Photos/img3.jpg'];
      var titleElement = document.getElementsByClassName('title')[0];

      titleElement.style.backgroundImage = "url('" + images[slideIndex]  + "')";

      if (slideIndex == images.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
}

setInterval(showSlides, 5000);
