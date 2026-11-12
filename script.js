// カテゴリフィルタ：ボタンで記事カードを絞り込む
document.getElementById('filters').addEventListener('click', function (e) {
  if (e.target.tagName !== 'BUTTON') return;
  var f = e.target.dataset.filter;
  document.querySelectorAll('#filters button').forEach(function (b) {
    b.classList.toggle('active', b === e.target);
  });
  document.querySelectorAll('#grid .card').forEach(function (card) {
    card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
  });
});
