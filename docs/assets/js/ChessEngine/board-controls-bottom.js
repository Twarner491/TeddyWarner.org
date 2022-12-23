// Promotion popup ui

$('#game-promotion span').on('click', function () {

  $('#game-promotion span').removeClass('active');
  $(this).addClass('active');

  promotionFigure = $(this).attr('figure');
  promotionEvent = true;

  $('#game-promotion').addClass('hidden');

  makePromotion(moveSource, moveTarget, promotionFigure);

  opponentTurn();

});

// close popup on Esc key

$(document).on("keyup", function (e) {
  var code = e.keyCode || e.which;
  if (code == 27) {
    $('#board-load-pgn-area, #board-load-fen-area, #board-save-pgn-area').addClass('hidden');
  }
});
