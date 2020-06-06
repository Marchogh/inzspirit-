let mobileBtn = document.querySelector('.mobile-menu'); 
let menu = document.querySelector('.menu');

    mobileBtn.addEventListener('click', () => {
        menu.classList.toggle('open');

        if (menu.classList.contains('open')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }

      });

