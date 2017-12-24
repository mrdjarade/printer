$(document).ready(function() {


	var naslovi=["SVE VRSTE PEČATA I VIZIT KARTI","REGISTRACIJA I PREREGISTRACIJA FIRMI",
	"SVETLEĆE REKLAME I REKLAMNI BANERI", "SVE VRSTE ŠTAMPE I FOTOKOPIRANJA"];
	var opisi=["U najkraćem vremenskom roku", "SZR, STR, SR, SUR i preduzeća - d.o.o., o.d., sportska društva, itd.",
	"Naziv firme, radno vreme, otvoreno-zatvoreno, vuci-guraj...", "Kolor i express crno-bela štampa na različitim formatima"];
	var current = 0;

	setInterval (function() {
		
			$('.naslov').animate({'opacity': 0}, 1000, function () {
   				 $(this).text(naslovi[current]);
			}).animate({'opacity': 1}, 1000);

			$('.opis').animate({'opacity': 0}, 1000, function () {
   				 $(this).text(opisi[current]);
   				 current++
			}).animate({'opacity': 1}, 1000);
		
			if (current === naslovi.length) {
				current=0;
			}

	}, 4000);

        var changeText=false;

		$(".toggle").click(function()	{
  			$('nav ul').slideToggle(400);
            if(!changeText) {
                $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
                changeText = true;
            } else { 
                $(this).html("<i class='fa fa-bars menu' aria-hidden='true'></i>");
                changeText = false;
                }
  		});


        $(".dugme-click").click(function() {
            $("#objasnjenje").slideToggle(200);
            if(!changeText) {
                $(this).text("PRIKAŽI MANJE");
                changeText = true;
            } else { 
                $(this).text("PRIKAŽI VIŠE");
                changeText = false;
                }
        });

        $(".dugme-click1").click(function(){
            $("#objasnjenje1").slideToggle(200);
            if(!changeText) {
                $(this).text("PRIKAŽI MANJE");
                changeText = true;
            } else { 
                $(this).text("PRIKAŽI VIŠE");
                changeText = false;
                }
        });

        $(".dugme-click2").click(function(){
            $("#objasnjenje2").slideToggle(200);
            if(!changeText) {
                $(this).text("PRIKAŽI MANJE");
                changeText = true;
            } else { 
                $(this).text("PRIKAŽI VIŠE");
                changeText = false;
                }
        });

        $(".dugme-click3").click(function(){
            $("#objasnjenje3").slideToggle(200);
            if(!changeText) {
                $(this).text("PRIKAŽI MANJE");
                changeText = true;
            } else { 
                $(this).text("PRIKAŽI VIŠE");
                changeText = false;
                }
        });



}); ///// document ready closing

