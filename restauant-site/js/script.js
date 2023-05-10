$('.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    controls: false,//次の画像に行く矢印をOFF。
    pager: false,//下の丸をoff。
    //bxslider.jsからコピペして変更。
    touchEnabled: false,//タッチアクションを無効にしてスマホでスワイプできるようにする。
}); //命令はキャメルケース。

//外部ファイルを呼び出す。
$('#news-list').load('news.txt');

//ハンバーガーメニュー
$('#g-nav').hide(); //disply: none;の代わり。
$('#ham-btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#g-nav').fadeToggle(200);
});

//ナビボタンを押したらナビを消す。
$('#g-nav a').on('click',function(){
    $('#g-nav').hide(); //g-navを隠す。displey:none;の代わり。showだと表示。
    $('#ham-btn').removeClass('is-active'); //is-activeで×になっていたのを三本線に戻す。
});

$(function(){
    let fullYear = new Date().getFullYear();
    //2024年以降は2023-2024と表示させたい。
    if(fullYear > 2023){
        $('#this-year').text('2023-'+fullYear);
    }else{$('#this-year').text(fullYear);
    }
});