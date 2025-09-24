$(document).ready(function() {
  // ==============================
  //  Hamburger Menu
  // ==============================
  const $hamburger = $('.hamburger-menu');
  const $nav = $('.header-cta');

  $hamburger.on('click', function() {
    $hamburger.toggleClass('active');
    $nav.toggleClass('active');
  });
  $nav.on('click', 'a', function() {
    $hamburger.removeClass('active');
    $nav.removeClass('active');
  });
});

// ==============================
          //  header
// ==============================
$(".fv-container").ripples({
  dropRadius: 30, // 波紋の半径
  perturbance: 0.1,
  resolution: 200,
});

// ==============================
          //  check
// ==============================
$(document).ready(function() {
  // 診断結果のデータ
  const drinks = {
    tired_warm: { name: "カモミールジンジャーティー", tags: ["リラックス", "温活"], desc: "カモミールの安らぐ香りとジンジャーの温かさで、心と体の芯から疲れを癒します。", img: "img/chamomile.png" },
    tired_fresh: { name: "フレッシュミントティー", tags: ["リフレッシュ", "疲労回復"], desc: "爽やかなミントの香りが頭をすっきりさせ、疲れた心に活力を与えてくれます。", img: "img/mint.png" },
    tired_sweet: { name: "ハニーミルク", tags: ["安眠", "やさしい甘さ"], desc: "温かいミルクとはちみつの自然な甘さが、緊張をほぐし、安らかな眠りへと誘います。", img: "img/honey.png" },
    tired_aroma: { name: "ラベンダーティー", tags: ["アロマ", "鎮静"], desc: "ラベンダーの豊かな香りが心を落ち着かせ、深いリラクゼーションをもたらします。", img: "img/lavender.png" },
    anxious_warm: { name: "ほうじ茶ラテ", tags: ["安心感", "温かい"], desc: "ほうじ茶の香ばしい香りとミルクのまろやかさが、不安な気持ちを優しく包み込みます。", img: "img/hojicha.png" },
    anxious_fresh: { name: "レモングラスティー", tags: ["気分転換", "すっきり"], desc: "レモングラスの爽やかな酸味が、もやもやした気持ちを晴らし、前向きな気分にさせてくれます。", img: "img/lemon.png" },
    anxious_sweet: { name: "ココア", tags: ["幸福感", "甘い"], desc: "心を満たす甘いココアは、まるで優しいハグのよう。不安を和らげ、幸せな気持ちにしてくれます。", img: "img/cocoa.png" },
    anxious_aroma: { name: "ジャスミンティー", tags: ["優雅な香り", "リラックス"], desc: "ジャスミンの甘くエキゾチックな香りが、高ぶった神経を鎮め、穏やかな心を取り戻します。", img: "img/jasmine.png" },
    low_warm: { name: "スパイスチャイ", tags: ["活気", "温まる"], desc: "様々なスパイスが体を内側から温め、沈んだ心にエネルギーと活気を与えてくれます。", img: "img/chai.png" },
    low_fresh: { name: "シトラスウォーター", tags: ["元気", "爽やか"], desc: "レモンやオレンジの柑橘系の香りが気分を引き上げ、心に太陽のような明るさをもたらします。", img: "img/citrus.png" },
    low_sweet: { name: "キャラメルマキアート", tags: ["ご褒美", "甘美"], desc: "甘くて香ばしいキャラメルの風味が、自分へのご褒美に。落ち込んだ気分を優しく持ち上げます。", img: "img/caramel.png" },
    low_aroma: { name: "ローズヒップティー", tags: ["美容", "フルーティーな香り"], desc: "ビタミン豊富なローズヒップの甘酸っぱい香りが、心に彩りと潤いを与えてくれます。", img: "img/rose.png" },
    calm_warm: { name: "ホットミルク", tags: ["シンプル", "内省"], desc: "何も加えない温かなミルクが、体を静かに温め、思考をクリアにし、深い落ち着きへと導きます。", img: "img/milk.png" },
    calm_fresh: { name: "ルイボスティー", tags: ["清涼感", "デトックス"], desc: "クセが少なくすっきりした味わいで、心身を浄化して静かな状態を保ちます。", img: "img/rooibos.png" },
    calm_sweet: { name: "黒豆茶", tags: ["香ばしい", "ほんのり甘い"], desc: "黒豆の香ばしさとほのかな甘みが、心を穏やかにし、静かな時間をより豊かなものにします。", img: "img/beans.png" },
    calm_aroma: { name: "甘酒", tags: ["瞑想", "深い香り"], desc: "甘酒の自然な甘みとやさしい発酵の香りが、疲れた心と体にそっと寄り添い、内側からじんわりと癒してくれます。", img: "img/rice.png" }
  };

  // ステップを切り替え
  function switchStep(hideStep, showStep) {
    $(hideStep).removeClass('active');
    $(showStep).addClass('active');
  }

  // STEP1：選択肢を選んだら「次へ」ボタンを有効化
  $('input[name="mood"]').on('change', function() {
    $('#toStep2').prop('disabled', false);
  });

  // STEP1：「次へ」ボタンを押したらSTEP2へ
  $('#toStep2').on('click', function() {
    switchStep('#step1', '#step2');
  });

  // STEP2：選択肢を選んだら「結果を見る」ボタンを有効化
  $('input[name="need"]').on('change', function() {
    $('#showResult').prop('disabled', false);
  });

  // STEP2：「戻る」ボタンを押したらSTEP1へ
  $('#back1').on('click', function() {
    switchStep('#step2', '#step1');
  });

  // RESULT：「結果を見る」ボタンを押したら結果を表示
  $('#showResult').on('click', function() {
    // ユーザーの選択を取得
    const mood = $('input[name="mood"]:checked').val();
    const need = $('input[name="need"]:checked').val();
    const key = `${mood}_${need}`;
    const resultDrink = drinks[key] || { name: "特別な一杯", tags: ["ミステリー"], desc: "あなたのための特別なブレンドです。どんな味がするかは、飲んでからのお楽しみ。", img: "img/default.jpg" };

    // 結果をカードに反映
    $('#drinkName').text(resultDrink.name);
    $('#drinkDesc').text(resultDrink.desc);

    // #タグ
    const tagsContainer = $('#tags');
    tagsContainer.empty(); // 前回のタグをクリア
    resultDrink.tags.forEach(tag => {
      tagsContainer.append(`<span class="pill">${tag}</span>`);
    });

    // 画像を追加（すでにあれば削除してから追加）
    $('#drinkCard .drink-img').remove();
    $('#drinkCard').prepend(`<img src="${resultDrink.img}" alt="${resultDrink.name}" class="drink-img">`);

    // 結果カードを表示
    $('#drinkCard').removeAttr('hidden');
    switchStep('#step2', '#result');
  });

  // RETRY：「もう一度診断する」ボタンで最初から
  $('#retry').on('click', function() {
    switchStep('#result', '#step1');
    // フォームをリセット
    $('input[type="radio"]').prop('checked', false);
    $('#toStep2').prop('disabled', true);
    $('#showResult').prop('disabled', true);
    // 結果カードを隠す
    $('#drinkCard').attr('hidden', true);
  });
});

// ==============================
          //  space
// ==============================
const video = document.getElementById("bg-video");
const soundToggle = document.getElementById("sound-toggle");
const radios = document.querySelectorAll("input[name='bg']");

// BGMのオン/オフ切り替え
soundToggle.addEventListener("change", () => {
  video.muted = soundToggle.checked;
});

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const selected = radio.value;
    let videoSrc = "";
    switch (selected) {
      case "sea":
        videoSrc = "img/sea.mp4";
        break;
      case "stars":
        videoSrc = "img/stars.mp4";
        break;
      case "river":
        videoSrc = "img/river.mp4";
        break;
    }
    video.setAttribute("src", videoSrc);
    video.load();
    video.play();
    // ラジオボタン選択時にミュートを解除
    video.muted = false;
    soundToggle.checked = false;
  });
});

// ==============================
          //  menu
// ==============================
$(document).ready(function() {
  const $flipbook = $("#flipbook");
  const $pages = $flipbook.find('.page');
  const totalPages = $pages.length;
  let currentPage = 1;
  let isTurnJsActive = false;

  function setupMenu() {
    if (window.innerWidth > 650) {
      // 画面幅が650pxより大きい -> turn.jsを有効化
      if (!isTurnJsActive) {
        // SPモードで非表示にされたページを表示に戻し、turn.jsが認識できるようにする
        $pages.show();

        if ($flipbook.turn('is')) {
          $flipbook.turn('destroy');
        }
        $flipbook.turn({
          display: 'single',
          width: 600,
          height: 400,
          page: currentPage, // 現在のページを維持
          when: {
            turned: function(event, page, view) {
              // ページがめくられたらcurrentPageを更新
              currentPage = page;
            }
          }
        });
        isTurnJsActive = true;
      }
    } else {
      // 画面幅が650px以下 -> シンプルなスライダーに
      if (isTurnJsActive) {
        $flipbook.turn('destroy');
        isTurnJsActive = false;
      }
      showSimplePage(currentPage);
    }
  }

  // シンプルスライダー用のページ表示関数
  function showSimplePage(page) {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    $pages.hide();
    $pages.eq(currentPage - 1).show();
  }

  $("#next-button").on('click', (e) => { e.preventDefault(); isTurnJsActive ? $flipbook.turn("next") : showSimplePage(currentPage + 1); });
  $("#prev-button").on('click', (e) => { e.preventDefault(); isTurnJsActive ? $flipbook.turn("previous") : showSimplePage(currentPage - 1); });

  setupMenu();
  $(window).on('resize', setupMenu);
});

// ==============================
          //  News Pagination
// ==============================
$(document).ready(function() {
  const totalPages = $('.news-page').length;
  if (totalPages > 0) {
    let currentPage = 1;

    function showPage(page) {
      $('.news-page').hide();
      $(`.news-page[data-page="${page}"]`).show();
      // ページネーション
      $('.pagination .page-num').removeClass('active');
      $(`.pagination .page-num[data-page="${page}"]`).addClass('active');
      currentPage = page;
    }
    // 数字ボタンのクリック動作
    $('.pagination .page-num').on('click', function(e) {
      e.preventDefault();
      const page = $(this).data('page');
      if (page !== currentPage) {
        showPage(page);
      }
    });
    // 初期表示
    showPage(1);
  }
});

// ==============================
//  Space Slider (800px以下の場合)
// ==============================
$(document).ready(function() {
  const $boxes = $('.space .box');
  if ($boxes.length === 0) return;

  const $prevBtn = $('#space-prev');
  const $nextBtn = $('#space-next');
  let currentIndex = 0;
  let autoSlideInterval = null; // 自動スライド用のタイマー変数

  function showBox(index) {
    if (window.innerWidth <= 800) {
      $boxes.removeClass('is-visible');
      $boxes.eq(index).addClass('is-visible');
    }
  }
  function nextBox() {
    currentIndex = (currentIndex + 1) % $boxes.length;
    showBox(currentIndex);
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(nextBox, 4500); 
  }

  $nextBtn.on('click', function() {
    nextBox();
    startAutoSlide(); 
  });

  $prevBtn.on('click', function() {
    currentIndex = (currentIndex - 1 + $boxes.length) % $boxes.length;
    showBox(currentIndex);
    startAutoSlide(); 
  });

  function handleResize() {
    if (window.innerWidth <= 800) {
      showBox(currentIndex);
      startAutoSlide(); 
    } else {
      clearInterval(autoSlideInterval); 
      autoSlideInterval = null;
      $boxes.removeClass('is-visible'); 
      $boxes.css('display', ''); 
    }
  }

  handleResize();
  $(window).on('resize', handleResize);
});
