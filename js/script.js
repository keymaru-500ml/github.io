$(function() {
  const headerHeight = 88; // ヘッダーの高さを設定

  // ハンバーガーボタンの開閉
  $("#js-button-drawer").on("click", function(){
      $(this).toggleClass("is-checked");
      $("#js-drawer").slideToggle();
      $("body").toggleClass("is-fixed");
  });

  // メニュー内リンクをクリックしたとき
  $("#js-drawer .header__nav-link").on("click", function(e){
      // メニューを閉じる
      $("#js-button-drawer").removeClass("is-checked");
      $("#js-drawer").slideUp();
      $("body").removeClass("is-fixed");

      const target = $(this).attr("href");

      // ページ内リンクの場合はスムーズスクロール
      if(target.startsWith("#")) {
          e.preventDefault(); // デフォルト遷移を防ぐ
          const top = $(target).offset().top - headerHeight; // ヘッダー分を引く
          $("html, body").animate({ scrollTop: top }, 500);
      }
      // 外部リンクはそのまま遷移
  });
});
