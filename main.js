const modalOpen = document.querySelectorAll('.modal-open');
const modal = document.querySelectorAll('.modal');
const modalCover = document.querySelectorAll('.modal-cover');

// 変数の値が未定義の手法をとっている
// （変数宣言に値の代入は「任意」だから。代入するのであれば、それが初期化という意味）
// → コンストラクターの処理の中でletを使用すれば、クロージャを使用しなくてもプライベートメンバー（関数やClassメソッドなど）を結びつけることが可能
// → ★ Classにこの課題は書き換えができそう
let modalClose;
let dataModalOpen;

for (let i = 0; i < modalOpen.length; i++) {
    //モーダルを閉じる処理
    modalClose = (e) => {
      let targetModal = e.currentTarget.closest('.modal');
      targetModal.classList.add('is-close');

      setTimeout(() => {
        targetModal.classList.remove('is-open');
        targetModal.classList.remove('is-close');
      }, 500);
    };

    // 外の範囲クリックでmodalを閉じる
    const closeOuter = () => {
      modalCover[i].addEventListener('click', (e) => modalClose(e));
    };

    // モーダル開くボタンクリックでmodalを開く
    const modalWrapOpen = (e) => {
      dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
      for (let j = 0; j < modal.length; j++) {

        if (modal[j].getAttribute('data-modal') === dataModalOpen) {
          modal[j].classList.add('is-open');
          console.log(modal[j]);
          return closeOuter();
        }
      }
    };

    modalOpen[i].addEventListener('click', (e) => modalWrapOpen(e));
}

// グレーのcloseボタンクリックでmodalを閉じる
const closeBtn = document.querySelectorAll('.btn-close');
for (let n = 0; n < closeBtn.length; n++) {
    closeBtn[n].addEventListener('click', (e) => {
      modalClose(e);
    });
}