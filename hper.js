function getStuff () {
    document.querySelector('#top_menu').onclick=talk;
}
function talk() {
    alert('the site is under development, will come with all features soon');
}
window.onload=getStuff;
