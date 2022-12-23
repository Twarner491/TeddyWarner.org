---
title: Von Niemann Probe
hide:
  - navigation
  - tags
template: comments.html
tags:
  - 
---

<link rel="stylesheet" href="../../assets/css/projects/vnp.css">
<link rel="stylesheet" id="chessboard-css" href="../../assets/css/projects/ChessEngine/chessboard.css" />
<link rel="stylesheet" href="../../assets/css/projects/ChessEngine/board.css" />

<script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
<script src="../../assets/js/ChessEngine/jquery-3.6.0.min.js"></script>
<script src="../../assets/js/ChessEngine/chess.min.js"></script>
<script src="../../assets/js/ChessEngine/ltpgnviewer.js"></script>
<script src="../../assets/js/vnp.js"></script> 

# Von Niemann Probe

<!--- Social Links

HTML Link Generator - https://www.websiteplanet.com/webtools/sharelink/

<span class="share" style=" color: inherit;">
<a class="fb" title="Share on Facebook" href="FACEBOOK-URL"><i class="fab fa-facebook-square"></i></a>
<a class="twitter" title="Share on Twitter" href="TWITTER-URL"><i class="fab fa-twitter"></i></a>
<a class="pin" title="Share on Pinterest" href="PINTEREST-URL"><i class="fab fa-pinterest"></i></a>
<a class="ln" title="Share on LinkedIn" href="LINKEDIN-URL"><i class="fab fa-linkedin"></i></a>
<a class="email" title="Share via Email" href="EMAIL-URL"><i class="fas fa-paper-plane"></i></a>
</span>

-->

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><a href="https://teddywarner.org/About-Me/about/"><img src="https://avatars.githubusercontent.com/u/48384497" alt="Profile Picture" class="profilepic"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Teddy Warner</a><span style="font-weight: 300;"> & </span><a href="http://fabacademy.org/2021/labs/charlotte/students/jack-hollingsworth/about/"><img src="https://avatars.githubusercontent.com/u/101671669?v=4" alt="Profile Picture" class="profilepic2"><span class="abt" style="font-weight: 300; padding-left: 6px;"> Jack Hollingsworth</a><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Fall, 2022 </span>| <i class="far fa-clock"></i> X-X minutes</span></span></span>
  <span class="share" style=" color: inherit;">
  <a class="fb" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://teddywarner.org/Projects/VonNiemannProbe/"><i class="fab fa-facebook-square"></i></a>
  <a class="twitter" title="Share on Twitter" href="https://twitter.com/intent/tweet?url=https://teddywarner.org/Projects/VonNiemannProbe/&text=Check%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fab fa-twitter"></i></a>
  <a class="pin" title="Share on Pinterest" href="https://pinterest.com/pin/create/button/?url=https://teddywarner.org/Projects/VonNiemannProbe/&media=&description=Check%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fab fa-pinterest"></i></a>
  <a class="ln" title="Share on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https://teddywarner.org/Projects/VonNiemannProbe/"><i class="fab fa-linkedin"></i></a>
  <a class="email" title="Share via Email" href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://teddywarner.org/Projects/VonNiemannProbe/%0ACheck%20out%20the%20Von%20Niemann%20Probe%20on%20teddywarner.org!"><i class="fas fa-paper-plane"></i></a>
  </span>
</div>

---

<center>

**A AVR based bluetooth telegraph inlayed in a parametric shoe insole.**

[Von Niemann Probe Repository :fontawesome-brands-github:](https://github.com/Twarner491/VonNiemannProbe){: align=right .md-button .md-button--primary }

</center>
    
## Telegraph Design

### Parametric Shoe Insole

<center>
  <iframe src="https://myhub.autodesk360.com/ue2cecd93/shares/public/SH9285eQTcf875d3c53962a650b709446403?mode=embed" width="100%" height="650" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
</center>

### PCB Design & Integration

<center>
  <iframe src="https://myhub.autodesk360.com/ue2cecd93/shares/public/SH9285eQTcf875d3c5397659f14ec98ed3cb?mode=embed" width="100%" height="650" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
</center>

## Chess Engine

<div class="content">
  <div class="chess-area">
    <div class="board-table">
      <div id="board-top-controls" class="top-controls">
        <div id="game-promotion" class="promotion hidden">
          <span figure="q">Queen</span>
          <span figure="b">Bishop</span>
          <span figure="n">Knight</span>
          <span figure="r">Rook</span>
        </div>
        <div id="board-resign-game-area" class="popup hidden">
          <span class="close"></span>
          <label>Do you want to resign?</label>
          <button class="yes">Yes</button>
          <button class="no">No</button>
        </div>
      </div>
      <div id="board" class="board"></div>
        <div id="board-controls" class="controls">
          <div id="board-messages" class="messages hidden" style="display: none !important;"></div>
        </div>
      </div>
      <div class="board-settings">
        <div class="apex">
          <span class="label-history">Play Stockfish!</span>
          <div style="display: none;" class="game-level" id="game-difficulty-option" title="Choose The Engine's Skill Level">
            <span class="label"></span>
            <span class="value" id="game-difficulty-skill-value"></span>
          </div>
        </div>
        <div class="game-difficulty hidden" id="game-difficulty-skill-settings">
          <span class="label">Select Engine's Level:</span>
          <span class="close"></span>
          <div class="values">
            <span class="1">1</span>
            <span class="2">2</span>
            <span class="3">3</span>
            <span class="4">4</span>
            <span class="5">5</span>
            <span class="6">6</span>
            <span class="7">7</span>
            <span class="8">8</span>
            <span class="9">9</span>
            <span class="10 selected">10</span>
            <span class="11">11</span>
            <span class="12">12</span>
            <span class="13">13</span>
            <span class="14">14</span>
            <span class="15">15</span>
            <span class="16">16</span>
            <span class="17">17</span>
            <span class="18">18</span>
            <span class="19">19</span>
            <span class="20">20</span>
          </div>
        </div>
        <div class="turns-history" id="game-turns-history">
          <ol></ol>
        </div>
        <div class="game-analyze hidden" id="game-analyze-string"></div>
        <div class="game-menu hidden" id="game-settings">
          <span class="label-choose-side">Select Side</span>
          <span class="btn game-white-side selected" id="btn-choose-white-side"></span>
          <span class="btn game-black-side" id="btn-choose-black-side"></span>
        </div>
        <div class="tunes">
          <span id="btn-new-game" title="Start New Game" class="btn-new-game">
            <span class="icon"></span>
            <span class="label">New Game</span>
          </span>
          <span style="display: none;" id="btn-settings" title="Choose The Engine's Skill Level" class="btn settings"></span>
          <span id="btn-resign" title="Resign" class="btn resign"></span>
          <span style="display: none;" id="btn-analyze" title="Request Engine Evaluation" class="btn analyze">
            <i class="icon"></i>
          </span>
        </div>
        <div class="params">
          <div class="cell side" id="game-player-side" style="display: none;">
            <label>Your Side:</label>
              <span class="white active">White</span>
              <span class="black">Black</span>
          </div>
          <div class="cell first-turn" id="game-first-turn" style="display: none;">
            <label>First Turn:</label>
              <span class="player active">Player</span>
              <span class="computer">Computer</span>
          </div>
        </div>
      </div>
    </div>
  <div class="chess-log"></div>
</div>

``` py linenums="1" title="Bluetooth Interfacing Chess Engine"
    #(c) Teddy Warner & Jack Hollingsworth - 2022

    #This work may be reproduced, modified, distributed, performed, and displayed
    #for any purpose, but must acknowledge Teddy Warner  & Jack Hollingsworth.
    #Copyright is retained and must be preserved. The work is provided as is;
    #no warranty is provided, and users accept all liability.

    #download stockfish from https://stockfishchess.org/files/stockfish_15_win_x64_avx2.zip

    from stockfish import Stockfish #pip install stockfish
    import chess #pip install python-chess
    import time
    import serial
    import re #pip install regex

    global board; global fish
    global legal; global legalMoves
    global moveAdjusted; global badChars
    global isMate; global morseDict
    global morseMove; global port 
    global stockfishPath

    port = "COM10" #set bluetooth port

    stockfishPath = "C:/Users/jackh/Downloads/stockfish_15_win_x64_avx2/stockfish_15_win_x64_avx2/stockfish_15_x64_avx2.exe" #replace with the path to your Stockfish exe. Note - the path may only contain forward slashes, no backslashes.

    morseDict = { 'a':'.-', 'b':'-...',
      'c':'-.-.', 'd':'-..', 'e':'.',
      'f':'..-.', 'g':'--.', 'h':'....',
      '1':'.----', '2':'..---', '3':'...--',
      '4':'....-', '5':'.....', '6':'-....',
      '7':'--...', '8':'---..'} #morse dict for all chars in chess moves, other characters not needed here

    board = chess.Board(); #create chess board object

    badChars = ["i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "9", "0"] #chars that can't be in a legal chess move

    morseMove = "" #placeholder for morse code move, filled later

    fish = Stockfish(r"{0}".format(stockfishPath), 
    depth=18, parameters={"Threads": 4, "Hash": 256, "UCI_LimitStrength": "false"}) #stockfish object declaration, can regulate strength
    print("WDL Accepted " + str(fish.does_current_engine_version_have_wdl_option()))
    print("Board State " + fish.get_board_visual()) #prints unicode image of current board state

    ser = serial.Serial(port, 9600, timeout = 1) #open com port of hc-06 receiving, set to 9600 baud
    print("serial opened")

    def playGame(side):
        global legal; global legalMoves
        global board; global isMate; global morseMove; 
        mate = False #checkmate state declaration
        turns = 0; i = 0 #these could be the same, but easier to keep sep = SPAGHETTIOLI CODE MOMENT
        board = chess.Board(); #declare chess board object in pychess module, for checking legality of moves
        print("fish playing as " + side)
        if side == "white":
            while mate == False: #if game not over, play continues
                bestMove = fish.get_best_move(1000) #stockfish get best current move
                fish.make_moves_from_current_position([bestMove]); 
                chessMove = chess.Move.from_uci(bestMove) #create chessMove object in pychess, push it to board on next line
                board.push_san(bestMove) #make move in pychess to keep up with stockfish game
                print("whitefish plays " + bestMove)
                morseMove = toMorse(bestMove) #call morse conversion of fish move
                sendMove(morseMove) #call to move sending function, arg is stockfish best move
                mate = board.is_checkmate() #returns state of checkmate
                print("Checkmate: " + str(mate)) #prints state of checkmate after every fish move
                if mate == True:
                    print("checkmate, stockfish victory!")
                    return
                turns += 1
                legalMoves = str(board.legal_moves) #convert list to string
                print("black move:") #request player move
                move = input()
                getPlayerMove(move)
                mate = board.is_checkmate() #check if player has won
                if mate == True:
                  print("checkmate, player victory")
                  return
                turns += 1
                print("board after " + str(turns) + " moves:")
                print(fish.get_board_visual(False)) #shows board from player perspective (white)
            print("")
            return #return to infinite loop
        if side == "black":
            legalMoves = str(board.legal_moves) #convert list to string
            while mate == False:
                print("white move:")
                move = input()
                getPlayerMove(move)
                mate = board.is_checkmate() #check if player has won
                if mate == True:
                  print("checkmate, player victory")
                  return
                bestMove = fish.get_best_move(1000) #stockfish get best current move
                fish.make_moves_from_current_position([bestMove]); 
                chessMove = chess.Move.from_uci(bestMove)
                board.push_san(bestMove)
                print("blackfish plays " + bestMove)
                morseMove = toMorse(bestMove) #get string of morse-converted move, not in use
                sendMove(morseMove) #send morse move via bluetooth
                mate = board.is_checkmate() #returns state of checkmate
                print("Checkmate: " + str(mate)) #prints state of checkmate after every fish move
                if mate == True:
                    print("checkmate, stockfish victory!")
                    return
                turns += 1
                print("board after " + str(turns) + " moves:")
                print(fish.get_board_visual()) #shows board from player perspective (black)
            print("")
            return #return to infinite loop

    def getPlayerMove(move):
        global board; global moveAdjusted; global badChars; global morseMove
        noBadChars = True #reset no bad chars bool
        legal = False #reset illegal bool
        charCount = 0; numCount = 0
        for char in move: #check if badChars exist in move
            i = 0 #reset iterating var
            while i < len(badChars):
                badChar = badChars[i]
                if char == badChar:
                    print(char + ' is ILLEGAL')
                    noBadChars = False #set bool to reflect bad char
                if char.isalpha() == True:
                    charCount += 1 #reflect that at least 1 char in string
                if char.isdigit() == True:
                    numCount += 1 #reflect that at least one number in string
                i += 1
                #print(char + "is legal") #debug bad chars function
        if len(move) != 4 and len(move) != 5: #solve edge case where small string doesn't break other rules
            noBadChars = False;
        if charCount == 0 or numCount == 0:
            print("numbers: " + str(numCount))
            print("chars " + str(charCount))
            noBadChars = False #change bool to reflect bad formatting
        if noBadChars == True: #only creative move objects if correct formatting
            print(move + " is good format")
            myMove = chess.Move.from_uci(move) #create move object frmo current player move, used to check legality
            legal = board.is_legal(myMove) #checks legality of desired move
            print("Legal? " + str(legal))
        if legal and noBadChars: #move can only happen if legal and doesn't contain illegal chars
            fish.make_moves_from_current_position([move])#plays legal player move in STOCKFISH
            chessMove = chess.Move.from_uci(move) #load legal player move
            board.push_san(move) #send player move to board tracker
            print("player plays " + move)
            return #back to game loop
        else:
            print("illegal move, input new move:")
            newMove = input()
            getPlayerMove(newMove)
            return #back to game loop

    def toMorse(move): #convert move to morse code
        ret = "" #empty morse conversion
        newConvert = "" #empty mid-conversion string
        for char in move:
            #print("converting " + char) #debug print
            newConvert = morseDict[char] #take key of char index in morse dict
            ret += newConvert + ' ' #add morse for new char to morse string
        print("Morse-Converted Move: " + ret)
        return ret

    def sendMove(morse):
        morse = re.sub("[ ]", "9", morse)
        print(morse) #print morse move with spaces replaced with 9 - easier to parse on arduino side as empty bytes hard to work with
        for char in morse:
            tempChar = char.encode() #temporary placeholder set to current char in morse move
            ser.write(tempChar) #send individual character of final morse message encoded in utf-8
        print("sent move")
        return

    while True: #enables playing of inifinite games, playGame() returns to here after checkmate, resets all local values
        isMate = False
        print("good chess speaks for itself, welcome to Von Niemann Probe")
        print("side of stockfish:") #request side of stockfish player
        fishSide = input() #which side is hans niemann on?
        playGame(fishSide) #initiate game with advantage player's side receiving hints based on other player's moves
```

??? example "Bluetoothless Implemetation"

    ``` py linenums="1" title="Chess Engine"
    #(c) Teddy Warner & Jack Hollingsworth - 2022

    #This work may be reproduced, modified, distributed, performed, and displayed
    #for any purpose, but must acknowledge Teddy Warner  & Jack Hollingsworth.
    #Copyright is retained and must be preserved. The work is provided as is;
    #no warranty is provided, and users accept all liability.

    #complete implementation without bluetooth sending, everything else works though so can easily be iterated upon

    #download stockfish from https://stockfishchess.org/files/stockfish_15_win_x64_avx2.zip

    from stockfish import Stockfish
    import chess
    import time

    global board; global fish
    global legal; global legalMoves
    global moveAdjusted; global badChars
    global isMate; global morseDict
    global morseMove; global stockfishPath

    stockfishPath = "C:/Users/jackh/Downloads/stockfish_15_win_x64_avx2/stockfish_15_win_x64_avx2/stockfish_15_x64_avx2.exe" #replace URL with the path to your Stockfish exe. Note - the path may only contain forward slashes, no backslashes.

    morseDict = { 'a':'.-', 'b':'-...',
      'c':'-.-.', 'd':'-..', 'e':'.',
      'f':'..-.', 'g':'--.', 'h':'....',
      '1':'.----', '2':'..---', '3':'...--',
      '4':'....-', '5':'.....', '6':'-....',
      '7':'--...', '8':'---..'} #morse dict for all chars in chess moves

    board = chess.Board(); #create chess board object

    badChars = ["i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "9", "0"] #chars that can't be in a legal chess move

    morseMove = "" #placeholder for morse code move, filled later

    fish = Stockfish(r"{0}".format(stockfishPath), 
    depth=18, parameters={"Threads": 4, "Hash": 256, "UCI_LimitStrength": "false"}) #stockfish object declaration, can regulate strength
    print("WDL Accepted " + str(fish.does_current_engine_version_have_wdl_option()))
    print("Board State " + fish.get_board_visual())

    def playGame(side):
        global legal; global legalMoves
        global board; global isMate; global morseMove; 
        mate = False #checkmate state declaration
        turns = 0; i = 0 #these could be the same, but easier to keep sep = SPAGHETTIOLI CODE MOMENT
        board = chess.Board(); #declare chess board object in chess module
        print("fish playing as " + side)
        if side == "white":
            while mate == False: #if game not over, play continues
                bestMove = fish.get_best_move(1000) #stockfish get best current move
                fish.make_moves_from_current_position([bestMove]); 
                chessMove = chess.Move.from_uci(bestMove)
                board.push_san(bestMove)
                print("whitefish plays " + bestMove)
                morseMove = toMorse(bestMove) #call morse conversion of fish move
                mate = board.is_checkmate() #returns state of checkmate
                print("Checkmate: " + str(mate)) #prints state of checkmate after every fish move
                if mate == True:
                    print("checkmate, stockfish victory!")
                    return
                turns += 1
                legalMoves = str(board.legal_moves) #convert list to string
                print("black move:") #request player move
                move = input()
                getPlayerMove(move)
                turns += 1
                print("board after " + str(turns) + " moves:")
                print(fish.get_board_visual(False)) #shows board from player perspective (white)
            print("checkmate, stockfish victory")
            return #return to infinite loop
        if side == "black":
            legalMoves = str(board.legal_moves) #convert list to string
            while mate == False:
                print("white move:")
                move = input()
                getPlayerMove(move)
                bestMove = fish.get_best_move(1000) #stockfish get best current move
                fish.make_moves_from_current_position([bestMove]); 
                chessMove = chess.Move.from_uci(bestMove)
                board.push_san(bestMove)
                print("blackfish plays " + bestMove)
                morseMove = toMorse(bestMove) #get string of morse-converted move, not in use
                mate = board.is_checkmate() #returns state of checkmate
                print("Checkmate: " + str(mate)) #prints state of checkmate after every fish move
                if mate == True:
                    print("checkmate, stockfish victory!")
                    return
                turns += 1
                print("board after " + str(turns) + " moves:")
                print(fish.get_board_visual()) #shows board from player perspective (black)
            print("checkmate, stockfish victory!")
            print("")
            return #return to infinite loop

    def getPlayerMove(move):
        global board; global moveAdjusted; global badChars; global morseMove
        noBadChars = True #reset no bad chars bool
        legal = False #reset illegal bool
        charCount = 0; numCount = 0
        for char in move: #check if badChars exist in move
            i = 0 #reset iterating var
            while i < len(badChars):
                badChar = badChars[i]
                if char == badChar:
                    print(char + ' is ILLEGAL')
                    noBadChars = False #set bool to reflect bad char
                if char.isalpha() == True:
                    charCount += 1 #reflect that at least 1 char in string
                if char.isdigit() == True:
                    numCount += 1 #reflect that at least one number in string
                i += 1
                #print(char + "is legal") #debug bad chars function
        if len(move) != 4 and len(move) != 5: #solve edge case where small string doesn't break other rules
            noBadChars = False;
        if charCount == 0 or numCount == 0:
            print("numbers: " + str(numCount))
            print("chars " + str(charCount))
            noBadChars = False #change bool to reflect bad formatting
        if noBadChars == True: #only creative move objects if correct formatting
            print(move + " is good format")
            myMove = chess.Move.from_uci(move) #create move object frmo current player move, used to check legality
            legal = board.is_legal(myMove) #checks legality of desired move
            print("Legal? " + str(legal))
        if legal and noBadChars: #move can only happen if legal and doesn't contain illegal chars
            fish.make_moves_from_current_position([move])#plays legal player move in STOCKFISH
            chessMove = chess.Move.from_uci(move) #load legal player move
            board.push_san(move) #send player move to board tracker
            print("player plays " + move)
            return #back to game loop
        else:
            print("illegal move, input new move:")
            newMove = input()
            getPlayerMove(newMove)
            return #back to game loop

    def toMorse(move): #convert move to morse code
        ret = "" #empty morse conversion
        newConvert = "" #empty mid-conversion string
        for char in move:
            #print("converting " + char) #debug print
            newConvert = morseDict[char] #take key of char index in morse dict
            ret += newConvert + ' ' #add morse for new char to morse string
        print("Morse-Converted Move: " + ret)
        return ret

    while True: #enables playing of inifinite games, playGame() returns to here after checkmate
        isMate = False
        print("good chess speaks for itself, welcome to Von Niemann Probe")
        print("side of stockfish:") #request side of stockfish player
        fishSide = input() #laptop user input
        playGame(fishSide)
    ```

## Embedded Programming & Networking

``` c++ linenums="1" title="Telegraph Reciving"
    //(c) Teddy Warner & Jack Hollingsworth - 2022

    //This work may be reproduced, modified, distributed, performed, and displayed
    //for any purpose, but must acknowledge Teddy Warner  & Jack Hollingsworth.
    //Copyright is retained and must be preserved. The work is provided as is;
    //no warranty is provided, and users accept all liability.

    #include <Arduino.h> //Arduino Parent Lib
    #include <SoftwareSerial.h> //software serial library, native in base installation of ide

    SoftwareSerial HC06(0, 1); //HC06-TX Pin 10, HC06-RX to Arduino Pin 11

    int buzzerPin = 2; //pin of buzzer/vibrator
    String fullString = ""; // 
    int dotLength = 1000; //establish length of 1 dot
    int dashLength = 3 * dotLength; //establish proportion of dots to dashes

    void setup() {
      HC06.begin(9600); //Baudrate 9600 , Choose your own baudrate 
      pinMode(buzzerPin, OUTPUT);
    }

    void loop(){

      if(HC06.available() > 0) //When HC06 receive something
      {
        char receive = HC06.read(); //Read from Serial Communication
        if(receive =='.'){
          digitalWrite(buzzerPin, HIGH);
          delay(dotLength); //delay for dotlength
          digitalWrite(buzzerPin, LOW);
          delay(dotLength); //dotlength delay between next character
        }
        if(receive == '-')
        {
        digitalWrite(buzzerPin, HIGH);
        delay(dashLength);
        digitalWrite(buzzerPin, LOW);
        delay(dotLength); //dot length delay between next character
        }
        if(receive =='9'){
          digitalWrite(buzzerPin, LOW);
          delay(dotLength * 2); //delay for another 2 seconds if space, gives 3 seconds total division between letters - make proportional to actual thing
        }
        else {
          digitalWrite(buzzerPin, LOW);
          delay(5);
        }
      }

    }
```

## Learning Morse Code

``` c++ linenums="1" title="Morse Pratice"
    //(c) Teddy Warner & Jack Hollingsworth - 2022

    //This work may be reproduced, modified, distributed, performed, and displayed
    //for any purpose, but must acknowledge Teddy Warner  & Jack Hollingsworth.
    //Copyright is retained and must be preserved. The work is provided as is;
    //no warranty is provided, and users accept all liability.

    //only for learning a-h and 1-8 of morse

    #include <Arduino.h> //Arduino Parent Lib

    int outputPin = 13; //pin of whatever output does morse
    int index;
    String letters = "abcdefgh";
    String numbers = "12345678";
    String randomString = ""; //placeholder string to be filled with morse
    String morseString = ""; //placeholder for morse converted string


    void setup(){
        pinMode(outputPin, OUTPUT);
        Serial.begin(9600); //initizalize serial at 9600 baud
        Serial.print("morse code practice");
    }

    void loop(){
        randomString = "";
        index = random(0, 7); //takes random value between indexes 0 and 7 of numbers and letters strings
        randomString += letters.substring(index, index); //take one char from letters string add to random string
        index = random(0,7);
        randomString += numbers.substring(index, index);
        index = random(0,7);
        randomString += letters.substring(index,index);
        index = random(0,7);
        randomString += letters.substring(index, index);
    }

    char receive = HC06.read(); //Read from Serial Communication
        if(receive =='.'){
          digitalWrite(buzzerPin, HIGH);
          delay(dotLength); //delay for dotlength
          digitalWrite(buzzerPin, LOW);
          delay(dotLength); //dotlength delay between next character
        }
        if(receive == '-')
        {
        digitalWrite(buzzerPin, HIGH);
        delay(dashLength);
        digitalWrite(buzzerPin, LOW);
        delay(dotLength); //dot length delay between next character
        }
        if(receive =='9'){
          digitalWrite(buzzerPin, LOW);
          delay(2000); //delay for another 2 seconds if space, gives 3 seconds total division between letters
        }
        else {
          delay(5);
        }
```

``` c++ linenums="1" title="String to Morse"
    //(c) Teddy Warner & Jack Hollingsworth - 2022

    //This work may be reproduced, modified, distributed, performed, and displayed
    //for any purpose, but must acknowledge Teddy Warner  & Jack Hollingsworth.
    //Copyright is retained and must be preserved. The work is provided as is;
    //no warranty is provided, and users accept all liability.

    /*

      Morse Code Project
      
      This code will loop through a string of characters and convert these to morse code.  
      It will blink two LED lights and play audio on a speaker.  
    */

    #include <Arduino.h> //Arduino Parent Lib
    
    //**************************************************//
    //   Type the String to Convert to Morse Code Here  //
    //**************************************************//
    char stringToMorseCode[] = "teddy is cool";

    int morseOutput = 13;      //pin of morse output
    int led6 = 6;        
    int audio8 = 8;     
    int note = 1200;   

    int dotLen = 1000;  
    int dashLen = dotLen * 3;   
    int elemPause = dotLen; 
    int Spaces = dotLen * 3;     
    int wordPause = dotLen * 7;  

    int index;
    String letters = "abcdefgh";
    String numbers = "12345678";
    String randomString = ""; //placeholder string to be filled with morse
    String morseString = ""; //placeholder for morse converted string


    void setup() {                
      pinMode(morseOutput, OUTPUT);
      Serial.begin(9600); //initizalize serial at 9600 baud
      Serial.print("morse code practice");
    }


    void loop()
    { 
        randomString = "";
        index = random(0, 7); //takes random value between indexes 0 and 7 of numbers and letters strings
        randomString += letters.substring(index, index); //take one char from letters string add to random string
        index = random(0,7);
        randomString += numbers.substring(index, index);
        index = random(0,7);
        randomString += letters.substring(index,index);
        index = random(0,7);
        randomString += letters.substring(index, index);
        Serial.println(randomString);

      // Loop through the string and get each character one at a time until the end is reached
      for (int i = 0; i < sizeof(stringToMorseCode) - 1; i++)
      {
        // Get the character in the current position
      char tmpChar = stringToMorseCode[i];
      // Set the case to lower case
      tmpChar = toLowerCase(tmpChar);
      // Call the subroutine to get the morse code equivalent for this character
      GetChar(tmpChar);
      Serial.print(stringToMorseCode);
      }
      
      // At the end of the string long pause before looping and starting again
      LightsOff(8000);			
    }

    // DOT
    void MorseDot()
    {
      digitalWrite(morseOutput, HIGH);  	// turn the LED on 
      delay(dotLen);             	// hold in this position
    }

    // DASH
    void MorseDash()
    {
      digitalWrite(morseOutput, HIGH);  	// turn the LED on 
      digitalWrite(led6, HIGH);
      tone(audio8, note, dashLen);	// start playing a tone
      delay(dashLen);               // hold in this position
    }

    // Turn Off
    void LightsOff(int delayTime)
    {
      digitalWrite(morseOutput, LOW);    	// turn the LED off  	
      digitalWrite(led6, LOW);
      noTone(audio8);	       	   	// stop playing a tone
      delay(delayTime);            	// hold in this position
    }

    // *** Characters to Morse Code Conversion *** //
    void GetChar(char tmpChar)
    {
      // Take the passed character and use a switch case to find the morse code for that character
      switch (tmpChar) {
        case 'a':	
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'b':
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'c':
          MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'd':
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'e':
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'f':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'g':
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'h':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'i':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'j':
          MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
          case 'k':
          MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'l':
          MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
          case 'm':
          MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'n':
          MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'o':
          MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'p':
          MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 'q':
          MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'r':
          MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 's':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        case 't':
          MorseDash();
        LightsOff(elemPause);
        break;
        case 'u':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'v':
          MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'w':
          MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'x':
          MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'y':
          MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        break;
        case 'z':
          MorseDash();
        LightsOff(elemPause);
        MorseDash();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        MorseDot();
        LightsOff(elemPause);
        break;
        default: 
        // If a matching character was not found it will default to a blank space
        LightsOff(Spaces);			
      }
    }
```

## Fabrication & Testing



*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[Baudrate]: Measurement of Symbol Rate
*[ETA]: Estimated Time of Arrival
*[GCode]: A software programming language used to control a CNC machine
*[Git]: Software for tracking changes in any set of files
*[GUI]: Graphical User Interface
*[Parametric]: Parametric design is a process based on algorithmic thinking that enables the expression of parameters and rules that, together, define, encode and clarify the relationship between design intent and design response.
*[ISO]: International Organization for Standardization
*[Kreg-Jig]: A Pocket-Hole Jig
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[programmer]: A piece of electronic equipment that arranges written software to configure programmable non-volatile integrated circuits
*[jtag]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory