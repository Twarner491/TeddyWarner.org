function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};
function loadCss(cssId, cssHref) {
    $('#' + cssId).attr('href', cssHref);
}
var mobileLibs = 8;
var desktopLibs = 8;
var isMobile = is_touch_device();
if (isMobile == true) {
    var chess, board;
    loadCss('chessboard-css', '../../assets/css/projects/ChessEngine/caustique-chessboard.css');
    $.getScript('../../assets/js/ChessEngine/chessboard-caustique-min.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-controls-side.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-controls-bottom.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-sets.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-time.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-actions.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-actions-mobile.js', initGameBoard('mobile'));
    $.getScript('../../assets/js/ChessEngine/board-init.js', initGameBoard('mobile'));
} else {
    loadCss('chessboard-css', '../../assets/css/projects/ChessEngine/chessboard.css');
    $.getScript('../../assets/js/ChessEngine/chessboard.min.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-controls-side.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-controls-bottom.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-sets.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-time.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-actions.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-actions-desktop.js', initGameBoard('desktop'));
    $.getScript('../../assets/js/ChessEngine/board-init.js', initGameBoard('desktop'));

}
function initGameBoard(lib = false) {
    if (lib == 'mobile') {
        mobileLibs--;
        if (mobileLibs == 0) {
            console.log('Mobile loaded');
            setTimeout(function() {
                setMobileBoard();
            }, 1000);
        }
    }
    if (lib == 'desktop') {
        desktopLibs--;
        if (desktopLibs == 0) {
            console.log('Desktop loaded');
            setTimeout(function() {
                setDesktopBoard();
            }, 1000);
        }
    }
}