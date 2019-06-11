/* 实现移动端轮播图手指滑动前进后退效果 */
/* e.targetTouches[0].clientX记录触摸起点位置
e.changedTouches.clientX记录触摸结束位置 */

// 修改轮播时间
var carousel_inner = $(".carousel-inner")[0]
$('.carousel').carousel({
    interval: 2000
  })
//绑定事件
var startX, endX
carousel_inner.addEventListener("touchstart", function (e) {
    startX = e.targetTouches[0].clientX
    console.log(startX);
})
carousel_inner.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX
    // 上一张
    if (endX - startX > 0) {
        $(".carousel").carousel('prev')
    } else if (endX - startX < 0) {
        $(".carousel").carousel('next')
    }
})

$('[data-toggle="tooltip"]').tooltip()
//实现产品信息选项卡滑动
//获取每个选项卡的宽度，根据选项可的宽度设置ul的宽度
//每一个li的宽度不一样
var ulWidth=0
$(".wjs_product .nav-tabs").find("li").each(function (indexInArray, valueOfElement) {
    ulWidth+=$(this).outerWidth(true);
});
console.log(ulWidth);
$(".wjs_product .nav-tabs").width(ulWidth)
var myScroll = new IScroll('.wrapper',{
    scrollX: true,
    scrollY: false
});