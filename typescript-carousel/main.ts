// 获取所有轮播项（图片）
const slides: HTMLCollectionOf<Element> =
  document.getElementsByClassName('carousel-item');
console.log(slides);
// 获取“下一个”按钮
const nextButton: HTMLElement | null = document.getElementById(
  'carousel-button-next'
);
// 获取“上一个”按钮
const prevButton: HTMLElement | null = document.getElementById(
  'carousel-button-prev'
);
// 获取所有指示点（小圆点）
const dots: HTMLCollectionOf<Element> = document.getElementsByClassName('dot');
console.log('dots', dots);
// 初始化当前显示的轮播项位置
let position: number = 0;
// 获取轮播项的总数
const numberOfSlides: number = slides.length;
// 隐藏所有轮播项的函数
function hideAllSlides(): void {
  // 遍历所有轮播项
  for (const slide of Array.from(slides)) {
    // 移除“可见”类，隐藏当前轮播项
    slide.classList.remove('carousel-item-visible');
    // 添加“隐藏”类，确保轮播项不可见
    slide.classList.add('carousel-item-hidden');
  }
}
// 处理切换到下一张轮播项的函数
const handleMoveToNextSlide = (): void => {
  hideAllSlides();
  // 检查是否到达最后一张轮播项
  if (position === numberOfSlides - 1) {
    position = 0; // 如果是，回到第一张轮播项
  } else {
    position++; // 否则，移动到下一张轮播项
  }
  // 让当前轮播项可见
  slides[position].classList.add('carousel-item-visible');
  // 更新指示点，表示当前轮播项
  updateDots(position);
};

// 处理切换到上一张轮播项的函数
const handleMoveToPrevSlide = (): void => {
  hideAllSlides();

  // 检查是否在第一张轮播项
  if (position === 0) {
    position = numberOfSlides - 1; // 如果是，跳到最后一张轮播项
  } else {
    position--; // 否则，移动到上一张轮播项
  }
  // 让当前轮播项可见
  slides[position].classList.add('carousel-item-visible');
  // 更新指示点，表示当前轮播项
  updateDots(position);
};

// 更新指示点的函数
function updateDots(index: number): void {
  // 遍历所有指示点
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      // 当前选中的指示点
      (dots[i] as HTMLElement).classList.add('selected-dot');
      (dots[i] as HTMLInputElement).checked = true;
    } else {
      // 其他指示点
      (dots[i] as HTMLElement).classList.remove('selected-dot');
      (dots[i] as HTMLInputElement).checked = false;
    }
  }
}

// 处理指示点点击的函数
const handleDotClick = (index: number) => (): void => {
  hideAllSlides();
  position = index; // 跳转到对应的轮播项
  slides[position].classList.add('carousel-item-visible');
  updateDots(position); // 更新指示点状态
  // 重置自动切换定时器
  resetAutoSlideTimer();
};
// 启动自动切换定时器
function startAutoSlide(): void {
  autoSlideInterval = window.setInterval(handleMoveToNextSlide, 3000); // 3 秒切换一次
}
// 重置自动切换定时器
function resetAutoSlideTimer(): void {
  // 清除之前的定时器
  clearInterval(autoSlideInterval);
  // 启动新的定时器
  startAutoSlide();
}
// 为“下一个”按钮添加点击事件监听器
if (nextButton) {
  nextButton.addEventListener('click', handleMoveToNextSlide);
}

// 为“上一个”按钮添加点击事件监听器
if (prevButton) {
  prevButton.addEventListener('click', handleMoveToPrevSlide);
}

// 为每个指示点添加点击事件监听器
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', handleDotClick(i));
}
