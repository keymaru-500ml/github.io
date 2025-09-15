$(function() {
  const headerHeight = 88; // ヘッダー高さ（SP・TB用）
  const pcWidth = 1021;    // PC判定

  // ハンバーガーボタンの開閉
  $("#js-button-drawer").on("click", function(){
      $(this).toggleClass("is-checked");
      $("#js-drawer").slideToggle();
      $("body").toggleClass("is-fixed");
  });

  // メニュー内リンクをクリックしたとき
  $("#js-drawer .header__nav-link").on("click", function(e){
      const target = $(this).attr("href");

      // ページ内リンクの場合はスムーズスクロール
      if (target.startsWith("#")) {
          e.preventDefault();

          let top;
          if ($(window).width() < pcWidth) {
              // SP・TB → ヘッダー高さ分ずらす
              top = $(target).offset().top - headerHeight;

              // メニューを閉じる
              $("#js-button-drawer").removeClass("is-checked");
              $("#js-drawer").slideUp();
              $("body").removeClass("is-fixed");
          } else {
              // PC → ヘッダー高さ考慮なし
              top = $(target).offset().top;
          }

          $("html, body").animate({ scrollTop: top }, 500);
      }
      // 外部リンクはそのまま遷移
  });
});
