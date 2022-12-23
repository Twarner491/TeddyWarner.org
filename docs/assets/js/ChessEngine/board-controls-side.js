// Right panel control buttons logic

// Reset board to classic starting position

$('#btn-new-game').click(function() {

  console.log('Making new game.');

  gameStarted = false;
  gameEnd = false;

  stopTimer();

  $('#game-settings').removeClass('hidden');
  $('#btn-choose-white-side, #btn-choose-black-side').removeClass('locked');

  $('#btn-choose-black-side').removeClass('selected');
  $('#btn-choose-white-side').addClass('selected');

  playerSide = 'w';
  opponentSide = 'b';
  firstTurn = 'player';

  $('#btn-undo-move').addClass('hidden');
  $('#game-state').addClass('hidden');

  document.getElementById("btn-switch-sides").disabled = false;
  $('#btn-switch-sides').removeClass('disabled');

  document.getElementById("btn-show-hint").disabled = false;
  $('#btn-show-hint').removeClass('disabled');

  // setBoard();

  game = new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  board.position('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

  if (playerSide == 'b') {
    game = new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1');
    board.position('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1');

    opponentTurn();

  } else {
    game = new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    board.position('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

    // unlock if locked
    $('#board').removeClass('locked');

    // reset turns history
    $('#game-turns-history ol').html('');
  }

});

$('#btn-choose-white-side').click(function() {
  if ($(this).hasClass('locked')) return;
  $('#game-settings .btn').removeClass('selected');
  $(this).addClass('selected');
  playerSide = 'w';
  opponentSide = 'b';
  if (typeof board.setOrientation == 'function') {
    board.setOrientation(playerSide);
  } else {
    board.orientation('white');
  }
  $('#game-settings .btn').addClass('locked');
});

$('#btn-choose-black-side').click(function() {
  if ($(this).hasClass('locked')) return;
  $('#game-settings .btn').removeClass('selected');
  $(this).addClass('selected');
  playerSide = 'b';
  opponentSide = 'w';
  if (typeof board.setOrientation == 'function') {
    board.setOrientation(playerSide);
  } else {
    board.orientation('black');
  }
  opponentTurn();
  $('#game-settings .btn').addClass('locked');
});

$('#btn-resign').click(function() {
  $('#board-resign-game-area').toggleClass('hidden');
});

$('#board-resign-game-area .close').click(function() {
  $('#board-resign-game-area').addClass('hidden');
});

$('#board-resign-game-area .yes').click(function() {
  gameEnd = true;
  stopTimer();
  $('#game-state').text('Game ended.').removeClass('hidden');
  $('#game-timer').addClass('hidden');
  $('#board').addClass('locked');
  $('#board-resign-game-area').addClass('hidden');
});

$('#board-resign-game-area .no').click(function() {
  $('#board-resign-game-area').addClass('hidden');
});
