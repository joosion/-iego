$(document).ready(function () {
    var b = ("body")

    $('#fullpage').fullpage({
        navigation: true,
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
        
    
        if($(b).hasClass("fp-viewing-0")){
            
                $('.leftc1').animate({opacity:"0","bottom":"0px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"00x"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
                $(".trigger svg").removeClass("active")
            
        }

        // con1
        if($(b).hasClass("fp-viewing-1")){


                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
                $(".trigger svg").removeClass("active")
            
        }
        // con2
        if($(b).hasClass("fp-viewing-2")){
            
            $('.leftc1').animate({opacity:"1","top":"130px"},1800);
            $('.leftc2').animate({opacity:"1","top":"210px"},1300);
            $('.leftc3').animate({opacity:"0.5","top":"330px"},900);
            $('.leftc4').animate({opacity:"0.5","top":"410px"},200);
            $('.rightc1').animate({opacity:"1","top":"185px"},1800);
            $('.rightc2').animate({opacity:"1","top":"235px"},1300);
            $('.rightc3').animate({opacity:"0.5","top":"335px"},900);
            $('.rightc4').animate({opacity:"0.5","top":"395px"},200);
            $(".left1").stop().animate({"height":"300px"},1800)
            $(".left2").stop().animate({"height":"220px"},1300)
            $(".left3").stop().animate({"height":"100px"},900)
            $(".left4").stop().animate({"height":"20px"},200)
            $(".right1").stop().animate({"height":"250px"},1800)
            $(".right2").stop().animate({"height":"200px"},1300)
            $(".right3").stop().animate({"height":"100px"},900)
            $(".right4").stop().animate({"height":"40px"},200)
            $('.counter1').counterUp({time: 1500});
            $('.counter2').counterUp({time: 1200});
            $('.counter3').counterUp({time: 800});
            $('.counter4').counterUp({time: 100});
            $('.counter5').counterUp({time: 1450});
            $('.counter6').counterUp({time: 1100});
            $('.counter7').counterUp({time: 800});
            $('.counter8').counterUp({time: 100});

                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $(".trigger svg").removeClass("active");
                $('.con17payment').stop().animate({opacity:"0"});
                $(".trigger svg").removeClass("active")
            
        }
        // con3
        if($(b).hasClass("fp-viewing-3")){



                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $(".trigger svg").removeClass("active")
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
            
        }
        // con4
        if($(b).hasClass("fp-viewing-4")){

                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $(".trigger svg").removeClass("active")
                $('.con17payment').stop().animate({opacity:"0"});
        }
        // con5
        if($(b).hasClass("fp-viewing-5")){
                $(".trigger svg").addClass("active")

            $('.line').delay(2900).animate({"width":"450px"},400);
            $('.p1').delay(3300).animate({opacity:"1"},400);
            $('.line2').delay(2900).animate({"width":"450px"},400);
            $('.p2').delay(3300).animate({opacity:"1"},400);
            

                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        }
        // con6
        if($(b).hasClass("fp-viewing-6")){

                $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        }
        // con7
        if($(b).hasClass("fp-viewing-7")){

            $('.con8-1').stop().animate({opacity:"1"},400);
            $('.s1').stop().delay(400).animate({"width":"390px"},400);
            $('.s4').stop().delay(400).animate({"width":"15px"},400);
            $('.s2').stop().delay(800).animate({"height":"150px"},400);
            $('.s3').stop().delay(800).animate({"height":"150px"},400);
            $('.con8-2').stop().delay(1200).animate({opacity:"1"},400);
            $('.s5').stop().delay(1600).animate({"height":"7.5px"},400);
            $('.s6').stop().delay(2000).animate({"width":"495px"},400);
            $('.s7').stop().delay(2400).animate({"height":"10px"},400);
            $('.con8-3').stop().delay(2800).animate({opacity:"1"},400);
            $('.s8').stop().delay(3200).animate({"height":"19px"},400);
            $('.con8-4').stop().delay(3600).animate({opacity:"1"},400);
            $('.s9').stop().delay(4000).animate({"height":"19px"},400);
            $('.con8-5').stop().delay(4400).animate({opacity:"1"},400);
            $('.s10').stop().delay(4800).animate({"height":"17px"},400);
            $('.con8-6').stop().delay(5200).animate({opacity:"1"},400);

            $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        }
        // con8
        
        if($(b).hasClass("fp-viewing-8")){
            
                $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});}
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});

        // con9

        if($(b).hasClass("fp-viewing-9")){
            
                $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});}
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});

        // con10
        if($(b).hasClass("fp-viewing-10")){
            
                $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});}
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});

        // con11
        if($(b).hasClass("fp-viewing-11")){
            $('.line3').stop().animate({"width":"480px"},500);
            $('.con12sear').stop().delay(500).animate({opacity:"1"},500);
            $('.line4').stop().delay(1000).animate({"width":"480px"},500);
            $('.con12supp').stop().delay(1500).animate({opacity:"1"},500);

            
            $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});};
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
       

        // con12
        if($(b).hasClass("fp-viewing-12")){
         $('.images-2').stop().animate({"left":"430px"},500);
         $('.con13bounce2').stop().delay(500).animate({opacity:"1"},500);  
         $('.line5').stop().delay(500).animate({"width":"480px"},500);
         $('.con13my').stop().delay(1000).animate({opacity:"1"},500);
         $('.line6').stop().delay(1500).animate({"width":"470px"},500);
         $('.con13ex').stop().delay(2000).animate({opacity:"1"},500);

         $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"0px"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"})
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});};
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});

        // con13

        if($(b).hasClass("fp-viewing-13")){
        $('.line7').stop().animate({"width":"480px"},500);
        $('.con14tar').stop().delay(500).animate({opacity:"1"},500);
        $('.line8').stop().delay(1000).animate({"width":"480px"},500);
        $('.con14acc').stop().delay(1500).animate({opacity:"1"},500);
            
        $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"00x"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        //con14
        }
        if($(b).hasClass("fp-viewing-14")){
        $('.con15images-2').stop().animate({"right":"450px"},500);
        $('.con15bounce2').stop().delay(500).animate({opacity:"1"},500);  
        $('.line9').stop().delay(500).animate({"width":"480px"},500);
        $('.con15room').stop().delay(1000).animate({opacity:"1"},500);
        $('.line10').stop().delay(1500).animate({"width":"470px"},500);
        $('.con15list').stop().delay(2000).animate({opacity:"1"},500);
    
            
        $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"00x"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        // con15
        }
        if($(b).hasClass("fp-viewing-15")){
        $('.con16images-2').stop().animate({"left":"430px"},500);
        $('.con16bounce2').stop().delay(500).animate({opacity:"1"},500);  
        $('.line11').stop().delay(500).animate({"width":"480px"},500);
        $('.con16pre').stop().delay(1000).animate({opacity:"1"},500);
        $('.line12').stop().delay(1500).animate({"width":"470px"},500);
        $('.con16de').stop().delay(2000).animate({opacity:"1"},500);
            
        $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"00x"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
                $('.line13').stop().animate({"width":"0px"});
                $('.con17pay').stop().animate({opacity:"0"});
                $('.line14').stop().animate({"width":"0px"});
                $('.con17payment').stop().animate({opacity:"0"});
        
    }
    // con16
        if($(b).hasClass("fp-viewing-16")){
            
        $('.line13').stop().animate({"width":"370px"},500);
        $('.con17pay').stop().delay(500).animate({opacity:"1"},500);
        $('.line14').stop().delay(1000).animate({"width":"370px"},500);
        $('.con17payment').stop().delay(1500).animate({opacity:"1"},500);
      

        $(".trigger svg").removeClass("active")
                $('.leftc1').animate({opacity:"0","top":"500px"});
                $('.leftc2').animate({opacity:"0","top":"500px"});
                $('.leftc3').animate({opacity:"0","top":"500px"});
                $('.leftc4').animate({opacity:"0","top":"500px"});
                $('.rightc1').animate({opacity:"0","top":"500px"});
                $('.rightc2').animate({opacity:"0","top":"500px"});
                $('.rightc3').animate({opacity:"0","top":"500px"});
                $('.rightc4').animate({opacity:"0","top":"500px"});
                $(".left1").stop() .animate({"height":"0px"})
                $(".left2").stop() .animate({"height":"0px"})
                $(".left3").stop() .animate({"height":"0px"})
                $(".left4").stop() .animate({"height":"0px"})
                $(".right1").stop() .animate({"height":"0px"})
                $(".right2").stop() .animate({"height":"0px"})
                $(".right3").stop() .animate({"height":"0px"})
                $(".right4").stop() .animate({"height":"0px"})
                $('.line').animate({"width":"0px"});
                $('.p1').animate({opacity:"0"});
                $('.line2').animate({"width":"0px"});
                $('.p2').animate({opacity:"0"});
                $('.s1').stop().animate({"width":"0px"});
                $('.s4').stop().animate({"width":"0px"});
                $('.s2').stop().animate({"height":"0px"});
                $('.s3').stop().animate({"height":"0px"});
                $('.con8-2').stop().animate({opacity:"0"});
                $('.s5').stop().animate({"height":"0px"});
                $('.s6').stop().animate({"width":"0px"});
                $('.s7').stop().animate({"height":"0px"});
                $('.con8-3').stop().animate({opacity:"0"});
                $('.s8').stop().animate({"height":"0px"});
                $('.con8-4').stop().animate({opacity:"0"});
                $('.s9').stop().animate({"height":"0px"});
                $('.con8-5').stop().animate({opacity:"0"});
                $('.s10').stop().animate({"height":"0px"});
                $('.con8-6').stop().animate({opacity:"0"});
                $('.line3').stop().animate({"width":"00x"});
                $('.con12sear').stop().animate({opacity:"0"});
                $('.line4').stop().animate({"width":"0px"});
                $('.con12supp').stop().animate({opacity:"0"});
                $('.images-2').stop().animate({"left":"200px"});
                $('.con13bounce2').stop().animate({opacity:"0"});  
                $('.line5').stop().animate({"width":"0px"});
                $('.con13my').stop().animate({opacity:"0"});
                $('.line6').stop().animate({"width":"0px"});
                $('.con13ex').stop().animate({opacity:"0"});
                $('.line7').stop().animate({"width":"0px"});
                $('.con14tar').stop().animate({opacity:"0"});
                $('.line8').stop().animate({"width":"0px"});
                $('.con14acc').stop().animate({opacity:"0"});
                $('.con16images-2').stop().animate({"left":"200px"});
                $('.con16bounce2').stop().animate({opacity:"0"});  
                $('.line11').stop().animate({"width":"0px"});
                $('.con16pre').stop().animate({opacity:"0"});
                $('.line12').stop().animate({"width":"0px"});
                $('.con16de').stop().animate({opacity:"0"});
                $('.con15images-2').stop().animate({"right":"200px"});
                $('.con15bounce2').stop().animate({opacity:"0"});  
                $('.line9').stop().animate({"width":"0px"});
                $('.con15room').stop().animate({opacity:"0"});
                $('.line10').stop().animate({"width":"0px"});
                $('.con15list').stop().animate({opacity:"0"});
        
    }
    // con16
    }  
    })
})