setTimeout(() => {
  const style = document.querySelector('body').style;
  style.display = 'block';
  setTimeout(() => {
    style.opacity = 1;
  });
}, 200);

// Hack to fix Randomly Appearing Extension popup position issue -
// https://bugs.chromium.org/p/chromium/issues/detail?id=428044