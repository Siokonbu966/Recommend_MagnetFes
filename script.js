'use strict';

const result_button = document.getElementById('result_button');

function drawPlan() {
  console.log('debug: おみくじを引く関数が呼び出されました。');
  /**
   * オンライン企画の結果を表示する変数
   * @type {Array[]} online_results - オンライン企画の配列
   */
  const online_plan = ['ストリートファイター6超交流会~プロゲーマーからの挑戦状~', '【twasummit!】共同制作同好会_twas-creation 総集編', '演奏してみた〜いくつものONEが重なる瞬間〜', '歌ってみた　〜ZEROからその名を轟かせろ〜', 'バーチャル磁石祭ZERO Networked Space', '【オリジナル曲】繋がりの彼方で / SHIRASU×GOHAN']; 

  /**
   * オンライン企画のURLを表示する変数
   * @type {Array[]} online_urls - オンライン企画のURLの配列
   */
  const online_urls = ['https://nnn.ed.jp/school_festival/plan/#ex-j1f99n5n1ut', 'https://nnn.ed.jp/school_festival/plan/#ex-eg01nmgye', 'https://nnn.ed.jp/school_festival/plan/#ex-4offpt42sjzz', 'https://nnn.ed.jp/school_festival/plan/#ex-v8ne0jgsno', 'https://nnn.ed.jp/school_festival/plan/#ex-8abd1h8grp1', 'https://nnn.ed.jp/school_festival/plan/#ex-nx62bnz7hr2f'];

  /**
   * オフライン企画の結果を表示する変数
   * @type {Array[]} offline_results - オフライン企画の配列
   */
  const offline_plan = ['ものづくり発表会 〜Create to Change〜', '量子コンピュータが創る未来～量子×SFプロトタイピング発表会～', '自衛隊に入隊体験！磁石祭限定、自衛隊×生徒会コラボブース', 'Youは何しに磁石祭へ？', 'あなたの隣に声優さん！松本梨香さんと特別対談！【スキマグネットTV】', 'ZEN人未到！ 〜夏野氏×伴氏が語るZEN大学の未来とは〜'];

  /**
   * オフライン企画のURLを表示する変数
   * @type {Array[]} offline_urls - オフライン企画のURLの配列
   */
  const offline_urls = ['https://nnn.ed.jp/school_festival/plan/#ex-83vv-rm3nx5i', 'https://nnn.ed.jp/school_festival/plan/#ex-rcj_q2stvjxw', 'https://nnn.ed.jp/school_festival/plan/#ex-fc_e-ie9j', 'https://nnn.ed.jp/school_festival/plan/#ex-v-c9454f9', 'https://nnn.ed.jp/school_festival/plan/#ex-tc_aezklz7h', 'https://nnn.ed.jp/school_festival/plan/#ex-h6d_tocovr'];

  /**
   * @type {string} user - ユーザー名を取得
   */
  let user = document.getElementById('name').value;
  console.log('debug: ユーザー名:', user);
  if (!user) {
    user = '山田太郎'; // デフォルトのユーザー名
  }

  /**
   * @type {boolean} isOnline - オンライン企画かオフライン企画かを判定
   */
  const isOnline = document.getElementById('radio_online').checked;

  // ランダムなインデックスを生成
  const randomIndex = Math.floor(Math.random() * online_plan.length);

  // ランダムな企画とURLを取得
  const result_plan_online = online_plan[randomIndex];
  const result_url_online = online_urls[randomIndex];
  const result_plan_offline = offline_plan[randomIndex];
  const result_url_offline = offline_urls[randomIndex];

  console.log('debug: オンライン企画の結果:', result_plan_online);
  console.log('debug: オンライン企画のURL:', result_url_online);

  // オンライン企画かの判定
  if (isOnline) {
    console.log('debug: オンライン企画が選択されました。');
    displayResult(user, result_plan_online, result_url_online, isOnline); // 結果を表示する関数を呼び出す
  } else {
    console.log('debug: オフライン企画が選択されました。');
    displayResult(user, result_plan_offline, result_url_offline, isOnline); // 結果を表示する関数を呼び出す
  }
}

// 結果を表示する関数
function displayResult(user, result_plan, result_url, isOnline) {
  // 結果を表示する要素を取得
  const result_planElement = document.getElementById('result_plan');
  const result_urlElement = document.getElementById('result_link');
  if (result_planElement && result_urlElement) {
    // debug
    // console.log(`debug: ユーザー: ${user}`);
    // console.log(`debug: 結果: ${result_plan}`);
    // console.log(`debug: URL: ${result_url}`);

    const result = `${ user }さんにおすすめの企画は「<span class="fw-bold mag25_blue_text"> ${ result_plan } </span>」です！`;
    const share_result = `${ user }さんにおすすめの企画は「${ result_plan }」です！`;

    const tweetDivision = document.getElementById('tweet_area');
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const pageUrl =  encodeURIComponent(window.location.href);
    const text = encodeURIComponent(share_result);
    const share_url = `https://twitter.com/intent/tweet?text=${ text }&url=${ pageUrl }&button_hashtag=磁石祭ZERO`;

    anchor.setAttribute('href', share_url);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', share_result);
    anchor.setAttribute('data-size', 'large');
    anchor.innerText = 'Tweet #磁石祭ZERO';

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
    // debug
    console.log('debug: Twitterシェアボタンがクリックされました。');

    // 結果を表示
    result_planElement.innerHTML = result;
    //result_urlElement.textContent = `URL: ${ result_url }`;
    result_urlElement.innerHTML = `<a href="${ result_url }" target="_blank" class="btn btn-primary px-5 py-3 m-2"><i class="fas fa-external-link-alt"></i>企画の詳細はこちら</a>`;
    document.getElementById("result-area").style.display = "block";
  } else {
    console.error('Error: 要素 "result" が見つかりません。');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  result_button.addEventListener('click', () => {
    console.log('ボタンがクリックされました。');
    drawPlan(); 
  });
});