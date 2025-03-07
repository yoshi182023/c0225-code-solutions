'use strict';
// 获取所有轮播项（图片）
const slides = document.getElementsByClassName('carousel-item');
console.log(slides);
const nextButton = document.getElementById('carousel-button-next');
const prevButton = document.getElementById('carousel-button-prev');
const dots = document.getElementsByClassName('dot');
let position = 0; // 初始化当前显示的轮播项位置
const numberOfSlides = slides.length; // 获取轮播项的总数
// 隐藏所有轮播项的函数
function hideAllSlides() {
  // 遍历所有轮播项
  for (const slide of Array.from(slides)) {
    console.log(slide);
    // 移除“可见”类，隐藏当前轮播项
    slide.classList.remove('carousel-item-visible');
    console.log(slide.classList);
    // 添加“隐藏”类，确保轮播项不可见
    slide.classList.add('carousel-item-hidden');
    console.log(slide.classList);
  }
}
// 处理切换到下一张轮播项的函数
const handleMoveToNextSlide = () => {
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
  dots[position].classList.add('selected-dot');
  dots[position].checked = true; // 选中对应的指示点
};
// 处理切换到上一张轮播项的函数
const handleMoveToPrevSlide = () => {
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
  dots[position].classList.add('selected-dot');
  dots[position].checked = true; // 选中对应的指示点
};
// 更新指示点的函数
function updateDots(index) {
  // 遍历所有指示点
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      // 当前选中的指示点
      dots[i].classList.add('selected-dot');
      dots[i].checked = true;
    } else {
      // 其他指示点
      dots[i].classList.remove('selected-dot');
      dots[i].checked = false;
    }
  }
}
// 处理指示点点击的函数
const handleDotClick = (index) => (e) => {
  hideAllSlides();
  position = index; // 跳转到对应的轮播项
  slides[position].classList.add('carousel-item-visible');
  updateDots(position); // 更新指示点状态
};
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
