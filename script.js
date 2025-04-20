'use strict';

const result_button = document.getElementById('result_button');

function drawOmikuji() {
  /**
   * オンライン企画の結果を表示する変数
   * @type {Array[]} online_results - オンライン企画の配列
   */
  const online_results = ['ストリートファイター6超交流会~プロゲーマーからの挑戦状~', '【twasummit!】共同制作同好会_twas-creation 総集編', '演奏してみた〜いくつものONEが重なる瞬間〜', '歌ってみた　〜ZEROからその名を轟かせろ〜', 'バーチャル磁石祭ZERO Networked Space', '【オリジナル曲】繋がりの彼方で / SHIRASU×GOHAN']; 

  /**
   * オンライン企画のURLを表示する変数
   * @type {Array[]} online_urls - オンライン企画のURLの配列
   */
  const online_urls = ['https://nnn.ed.jp/school_festival/plan/#ex-j1f99n5n1ut', 'https://nnn.ed.jp/school_festival/plan/#ex-eg01nmgye', 'https://nnn.ed.jp/school_festival/plan/#ex-4offpt42sjzz', 'https://nnn.ed.jp/school_festival/plan/#ex-v8ne0jgsno', 'https://nnn.ed.jp/school_festival/plan/#ex-8abd1h8grp1', 'https://nnn.ed.jp/school_festival/plan/#ex-nx62bnz7hr2f'];

  /**
   * オフライン企画の結果を表示する変数
   * @type {Array[]} offline_results - オフライン企画の配列
   */
  const offline_results = ['ものづくり発表会 〜Create to Change〜', '量子コンピュータが創る未来～量子×SFプロトタイピング発表会～', '自衛隊に入隊体験！磁石祭限定、自衛隊×生徒会コラボブース', 'Youは何しに磁石祭へ？', 'あなたの隣に声優さん！松本梨香さんと特別対談！【スキマグネットTV】', 'ZEN人未到！ 〜夏野氏×伴氏が語るZEN大学の未来とは〜'];

  /**
   * オフライン企画のURLを表示する変数
   * @type {Array[]} offline_urls - オフライン企画のURLの配列
   */
  const offline_urls = ['https://nnn.ed.jp/school_festival/plan/#ex-83vv-rm3nx5i', 'https://nnn.ed.jp/school_festival/plan/#ex-rcj_q2stvjxw', 'https://nnn.ed.jp/school_festival/plan/#ex-fc_e-ie9j', 'https://nnn.ed.jp/school_festival/plan/#ex-v-c9454f9', 'https://nnn.ed.jp/school_festival/plan/#ex-tc_aezklz7h', 'https://nnn.ed.jp/school_festival/plan/#ex-h6d_tocovr'];

  const randomIndex = Math.floor(Math.random() * results.length);
  const result_plan_online = online_results[randomIndex];
  const result_url_online = online_urls[randomIndex];
  const result_plan_offline = offline_results[randomIndex];
  const result_url_offline = offline_urls[randomIndex];
  displayResult_online(result_plan_online, result_url_online); // 結果を表示する関数を呼び出す
}

function displayResult_online(online_results, online_urls) {
  // 結果を表示する要素を取得
  const online_result_planElement = document.getElementById('result_plan_area');
  const online_result_urlElement = document.getElementById('result_url_area');
  console.log('test');
  if (online_result_planElement) {
    online_result_planElement.textContent = 'あなたにおすすめの企画は「' + online_results + '」です！';
    online_result_urlElement.textContent = 'URL: ' + online_urls;
  } else {
    console.error('Error: 要素 "result" が見つかりません。');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  result_button.addEventListener('click', () => {
    console.log('ボタンがクリックされました。');
    displayResult_online(result_plan_online, result_url_online); // 結果を表示する関数を呼び出す
  });
});
// 必要に応じて、ページ読み込み時などに初期化処理を追加できます
// 例：
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('omikujiButton');
//   if (button) {
//     button.addEventListener('click', drawOmikuji);
//   } else {
//     console.error('Error: 要素 'omikujiButton' が見つかりません。');
//   }
// });
