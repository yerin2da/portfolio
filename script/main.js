$(document).ready(function(){

    //새로고침시 스크롤탑값 0되게 하기
    $('html,body').animate({'scrollTop':'0'},10);

    // 인트로
    setTimeout(function(){
        //5초동안 스크롤 금지하기
        $('body').removeClass('no-scroll');

        //인트로 화면 사라지게 하기
        $('.intro').css('opacity','0');

        //로고 화면 보이게 하기
        $('.logo').css('opacity','1');  
        $('.lg>img').css('transform','scale(1.5)');
        },5500);



    setTimeout(function(){
    //인트로 제목 사라지게 하기
    $('.intro>p').css('display','none');
    $('.intro>h2').css('opacity','0');

    },4500);
    
    setTimeout(function(){
    //서클 사라지게 하기
    $('.circle').css('display','none');
    },4500);

    setTimeout(function(){
    //원형 사진 나타나게 하기
    $('.circle0').css('opacity','1');
    },3770);

    setTimeout(function(){
    //원형 사진 사라지게 하기
    $('.circle0').css('opacity','0');
    },4350);
    
    

        
    //로고 아이콘 움직이게 하기
        let icon1 = $('.icon_img>li:first-child');
        let icon2 = $('.icon_img>li:nth-child(2)');
        let icon3 = $('.icon_img>li:nth-child(3)');
        let icon4 = $('.icon_img>li:nth-child(4)');
        let icon5 = $('.icon_img>li:nth-child(5)');
        let icon6 = $('.icon_img>li:nth-child(6)');
        let icon7 = $('.icon_img>li:last-child');

        function iconUpDown(){
            //다운로드
            icon1.animate({'top':'10vh'},3000).animate({'top':'15vh'},3000);

            //화살표
            icon2.delay(500).animate({'left':'10%'},3000).animate({'left':'15%'},3000);

            //폴더
            icon3.animate({'top':'80vh'},3000).animate({'left':'20%'},3000).animate({'top':'75vh'},3000).animate({'left':'25%'},3000);

            //연습장
            icon4.animate({'top':'75vh'},3000).animate({'top':'80vh'},3000);

            //키보드
            icon5.animate({'top':'13vh'},3000).animate({'top':'10vh'},3000);

            //노트북
            icon6.animate({'left':'70%'},3000).animate({'left':'65%'},3000).animate({'top':'20vh'},3000).animate({'top':'25vh'},3000);

            //파일
            icon7.animate({'top':'70vh'},3000).animate({'top':'45vh'},3000).animate({'left':'80%'},3000).animate({'left':'75%'},3000);
        }
        let Timer = setInterval(iconUpDown,500);



        
        $(window).scroll(function(){
            let sPos = $(window).scrollTop();
            console.log(sPos);
        //내비게이션 섹션2(프로필)에서 나오게 하기
        if(sPos>=820){
            $('.gnb').css('display','flex');
        }else{
            $('.gnb').css('display','none');
        }

        //프로필 스킬 프로그레스
            if(600<=sPos){
                $('.pro1').stop().animate({'top':'55px'});
                $('.pro2').stop().animate({'top':'80px'});
                $('.pro3').stop().animate({'top':'140px'});
                $('.pro4').stop().animate({'top':'80px'});
                $('.pro5').stop().animate({'top':'95px'});
                $('.pro6').stop().animate({'top':'120px'});
                $('.pro7').stop().animate({'top':'120px'});
                $('.r_wrap>.skill> li>span').delay(300).animate({'color':'#000'}).animate({'color':'#fff'},500);
            }else if(sPos>1000){
                $('.pro1').stop().animate({'top':'55px'});
                $('.pro2').stop().animate({'top':'80px'});
                $('.pro3').stop().animate({'top':'140px'});
                $('.pro4').stop().animate({'top':'80px'});
                $('.pro5').stop().animate({'top':'95px'});
                $('.pro6').stop().animate({'top':'120px'});
                $('.pro7').stop().animate({'top':'120px'});
                $('.r_wrap>.skill> li>span').delay(300).animate({'color':'#fff'}).animate({'color':'#000'},500);
            }
            else{
                $('.pro1').stop().animate({'top':'390px'});
                $('.pro2').stop().animate({'top':'390px'});
                $('.pro3').stop().animate({'top':'390px'});
                $('.pro4').stop().animate({'top':'390px'});
                $('.pro5').stop().animate({'top':'390px'});
                $('.pro6').stop().animate({'top':'390px'});
                $('.pro7').stop().animate({'top':'390px'});

            }

        // 바이크 움직이기
            if(sPos>=900){
                $('.bike').addClass('bike_act')
            }else{
                $('.bike').removeClass('bike_act')
            }


        //섹션3 제목 나오게 하기
            if(sPos>=400){
                $('.profile h3').addClass('sec2h3');
            }else{
                $('.profile h3').removeClass('sec2h3');
            }

            if(sPos>=1600){
                $('.sec3_l>p').addClass('sec3h3');
            }else{
                $('.sec3_l>p').removeClass('sec3h3');
            }

            if(sPos>=2000){
                $('#sec4 > h2').addClass('sec4h2');
            }else{
                $('#sec4 > h2').removeClass('sec4h2');
            }

            if(sPos>=3300){
                $('.sec5_wrap>h3').addClass('sec5_h3');
            }else{
                $('.sec5_wrap>h3').removeClass('sec5_h3');
            }
            
        });

        //섹션3 모달창
        $('.modal').hide();
        
        $('.modal1').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/samyang_modal.jpg');
            $('#link').show();
            $('#link').attr('href','http://yerin2da.github.io/samyang');
            $('#mo_1').show();
            $('#mo_2').hide();
            $('#mo_3').hide();
            $('#mo_4').hide();
            return false;
        });

        $('.modal2').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/jejumasil_modal.jpg');
            $('#link').show();

            $('#link').attr('href','http://yerin2da.github.io/jejumasil/mindex.html');
            $('#mo_2').show();
            $('#mo_1').hide();
            $('#mo_3').hide();
            $('#mo_4').hide();
            return false;
        });
        $('.modal3').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/micro_modal.jpg');
            $('#link').show();

            $('#link').attr('href','http://yerin2da.github.io/micro_LED');
            $('#mo_3').show();
            $('#mo_2').hide();
            $('#mo_1').hide();
            $('#mo_4').hide();
            return false;
        });
        $('.modal4').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/oralb_modal.jpg');
            $('#link').show();
            $('#link').attr('href','http://yerin2da.github.io/oralB');
            $('#mo_4').show();
            $('#mo_2').hide();
            $('#mo_3').hide();
            $('#mo_1').hide();
            return false;
        });

        
        // 모달창 안의 웹 접근성, 유효성...
            //1. 삼양
            $('#mo_1>li').click(function(){
                $(this).addClass('font_wc1');
                $(this).siblings().removeClass('font_wc1');
            });
            $('#mo_1>.web_1').click(function(){
                $('#modalimg').attr('src','./images/markup_1.jpg');
                $('.modal_wrap > img').addClass('modal8_img');
                $('.modal').css('height','100vh');
            });
            $('#mo_1>.web_2').click(function(){
                $('#modalimg').attr('src','./images/validator_1.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_1>.web_3').click(function(){
                $('#modalimg').attr('src','./images/accessibility_1.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_1>.web_4').click(function(){
                $('#modalimg').attr('src','./images/cross_1.jpg');
            });
            $('#mo_1>.web_5').click(function(){
                $('#modalimg').attr('src','./images/optimization_1.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_1>.web_6').click(function(){
                $('#modalimg').attr('src','./images/samyang_wire.jpg');
            });


            // 2. 제주마실
            $('#mo_2>li').click(function(){
                $(this).addClass('font_wc2');
                $(this).siblings().removeClass('font_wc2');
            });
            $('#mo_2>.web_1').click(function(){
                $('#modalimg').attr('src','./images/markup_2.jpg');
            });
            $('#mo_2>.web_2').click(function(){
                $('#modalimg').attr('src','./images/validator_2.jpg');
                $('.modal').css('height','100vh');
                $('.modal_wrap > img').addClass('modal8_img');
            });
            $('#mo_2>.web_3').click(function(){
                $('#modalimg').attr('src','./images/accessibility_2.jpg');
                $('.modal').css('height','100vh');
                $('.modal_wrap > img').addClass('modal8_img');
            });
            $('#mo_2>.web_4').click(function(){
                $('#modalimg').attr('src','./images/cross_2.jpg');
            });
            $('#mo_2>.web_5').click(function(){
                $('#modalimg').attr('src','./images/optimization_2.jpg');
                $('.modal').css('height','100vh');
                $('.modal_wrap > img').addClass('modal8_img');
            });
            $('#mo_2>.web_6').click(function(){
                $('#modalimg').attr('src','./images/jeju_wire.jpg');
            });



            // 3. 마이크로
            $('#mo_3>li').click(function(){
                $(this).addClass('font_wc3');
                $(this).siblings().removeClass('font_wc3');
            });
            $('#mo_3>.web_1').click(function(){
                $('#modalimg').attr('src','./images/markup_3.jpg');
                $('.modal_wrap > img').addClass('modal8_img');
                $('.modal').css('height','100vh');
            });
            $('#mo_3>.web_2').click(function(){
                $('#modalimg').attr('src','./images/validator_3.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_3>.web_3').click(function(){
                $('#modalimg').attr('src','./images/accessibility_3.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_3>.web_4').click(function(){
                $('#modalimg').attr('src','./images/cross_3.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_3>.web_5').click(function(){
                $('#modalimg').attr('src','./images/optimization_3.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_3>.web_6').click(function(){
                $('#modalimg').attr('src','./images/micro_wire.jpg');
            });



            // 4. 오랄비
            $('#mo_4>li').click(function(){
                $(this).addClass('font_wc4');
                $(this).siblings().removeClass('font_wc4');
            });
            $('#mo_4>.web_1').click(function(){
                $('#modalimg').attr('src','./images/markup_4.jpg');
                $('.modal_wrap > img').addClass('modal8_img');
                $('.modal').css('height','100vh');
            });
            $('#mo_4>.web_2').click(function(){
                $('#modalimg').attr('src','./images/validator_4.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_4>.web_3').click(function(){
                $('#modalimg').attr('src','./images/accessibility_4.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_4>.web_4').click(function(){
                $('#modalimg').attr('src','./images/cross_4.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_4>.web_5').click(function(){
                $('#modalimg').attr('src','./images/optimization_4.jpg');
                $('.modal').css('height','100vh');
            });
            $('#mo_4>.web_6').click(function(){
                $('#modalimg').attr('src','./images/oralb_wire.jpg');
            });

        // 4 디자인 모달
        $('.modal5').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/wunda_modal.jpg');
            $('#link').hide();
            return false;
        });
        $('.modal6').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/jejulogo_modal.jpg');
            $('#link').hide();
            return false;
        });
        $('.modal7').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/iphone_modal.jpg');
            $('#link').hide();
            return false;
        });
        $('.modal8').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/scrunch_modal.jpg');
            $('.modal').css('height','100vh');
            $('.modal_wrap > img').addClass('modal8_img');
            $('#link').hide();
            return false;
        });
        $('.modal9').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/banner_modal.jpg');
            $('#link').hide();
            return false;
        });
        $('.modal10').click(function(){
            $('.modal').show();
            $('#modalimg').attr('src','./images/back_modal.jpg');
            $('#link').hide();
            return false;
        });
        $('i.fa-times').click(function(){
        $('.modal').hide();
        
        });



        //섹션4 디자인
        $('#sec4 >ul>li').hover(function(){
            $(this).animate({'top':'10px'},300).animate({'top':'0px'},300);
        },function(){
            $(this).animate({'top':'0'});
        });




});