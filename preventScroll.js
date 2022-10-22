function disableScroll(event) {
    event.preventDefault();
  }
  
  // イベントと関数を紐付け
  document.addEventListener('touchmove', disableScroll, { passive: false });