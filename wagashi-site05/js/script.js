$(function(){
        //ハンバーガーメニュー
            $('#ham-btn').on('click',function(){
                $(this).toggleClass('is-active');
                $('#g-nav').fadeToggle(200);
            });
            //ナビボタンをクリックしたらナビを非表示に
            $('#g-nav a').on('click',function(){
            $('#g-nav').fadeOut(200);
            $('#ham-btn').removeClass('is-active');
            });
        });
