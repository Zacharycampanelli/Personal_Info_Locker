document.querySelectorAll('[data-toggle="password"]').forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      
      var target = el.dataset.target;
      document.querySelector(target).focus();
  
      if (document.querySelector(target).getAttribute('type') == 'password') {
        document.querySelector(target).setAttribute('type', 'text');
      } else {
        document.querySelector(target).setAttribute('type', 'password');
      }
  
      if (el.dataset.classActive) el.classList.toggle(el.dataset.classActive);
    });
  });