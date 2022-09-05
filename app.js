const input = document.querySelector('.text02');
        const januari = document.querySelector('.januari');
        const februari = document.querySelector('.februari');
        const maret = document.querySelector('.maret');
        const april = document.querySelector('.april');
        const mei = document.querySelector('.mei');
        const juni = document.querySelector('.juni');
        const juli = document.querySelector('.juli');
        const agustus = document.querySelector('.agustus');
        const september = document.querySelector('.september');
        const oktober = document.querySelector('.oktober');
        const november = document.querySelector('.november');
        const desember = document.querySelector('.desember');

        januari.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Januari");
        })
        februari.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Februari");
        })
        maret.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Maret");
        })
        april.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","April");
        })
        mei.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Mei");
        })
        juni.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Juni");
        })
        juli.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Juli");
        })
        agustus.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Agustus");
        })
        september.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","September");
        })
        oktober.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Oktober");
        })
        november.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","November");
        })
        desember.addEventListener('mouseover', function(){
            input.setAttribute("placeholder","Desember");
        })

        let dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', function(){
            dropdown.classList.toggle('active');
        });