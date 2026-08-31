 const lightbox = document.getElementById('lightbox');
 const lightboxImg = document.getElementById('lightbox-img');
 const closeBtn = document.querySelector('.close-btn');
 const galleryImages = document.querySelectorAll('.gallery-img');

 galleryImages.forEach(img => {
     img.addEventListener('click', () => {
         lightboxImg.src = img.src;
         lightbox.classList.add('active');
     });
 });

 closeBtn.addEventListener('click', () => {
     lightbox.classList.remove('active');
 });

 lightbox.addEventListener('click', (e) => {
     if (e.target !== lightboxImg) {
         lightbox.classList.remove('active');
     }
 });

 document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && lightbox.classList.contains('active')) {
         lightbox.classList.remove('active');
     }
 });

 function switchTab(event, tabId) {
      document.querySelectorAll('.tab-content').forEach(tab => {
          tab.classList.remove('active');
      });

      document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
      });

      document.getElementById(tabId).classList.add('active');
      event.currentTarget.classList.add('active');
  }

