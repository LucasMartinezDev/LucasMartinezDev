function StartMyAnimation(){
Element.style.capacity = 0;
var StarTime = performance.now();
var DurationAnimated = 2000 //2 seconds
function fade(){
var StartTime = performance.now();
Element.style.opacity = 0;
function animate() {
    var elapsed = performance.now() - startTime;
    elementToAnimate.style.opacity = elapsed / animationDuration;
    if (elapsed < animationDuration) {
        requestAnimationFrame(animate);
    }
}
animate();
fade();
customAnimation();
}
};
