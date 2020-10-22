/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundscore,activeplayer,gameplaying;

init();



document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gameplaying){

        // 1.  Number on the dice changes
        var dice=Math.floor(Math.random()*6)+1;

        //2. display the result
        var diceDom= document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src='img/dice-'+dice+'.png';




            //3.Update the score of the rolled number was not 1
            if(dice!==1){
            //Add score

            roundscore+=dice;
            document.querySelector('#current-'+activeplayer).textContent=roundscore;
            }
            else{
            //next player
            nextplayer();
            }

    }


    

});

    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(gameplaying){
            //Add current score to the global score
        score[activeplayer]+=roundscore;

        //update UI
        document.querySelector('#score-'+activeplayer).textContent=score[activeplayer];


        //check if player won the game
        if(score[activeplayer]>=100){
            document.querySelector('#name-'+activeplayer).textContent='Winner';
            document.querySelector('.dice').style.display='block';
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
            gameplaying=false;
        }
        else{
            //next player
        nextplayer();

        }

        }
        
        



    });     
    function nextplayer(){
        activeplayer===0?activeplayer=1:activeplayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';

    }
    document.querySelector('.btn-new').addEventListener('click',init);//Not using init() as this would imidiatly call the function when javascript is read.But we what to call the function when we click on new btn only so we use init in eventlistener
    function init(){
        score=[0,0];
        roundscore=0;
        activeplayer=0;
        gameplaying=true;



//document.querySelector('#current-'+ activeplayer).textContent = dice;
    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent='player 1'
    document.getElementById('name-1').textContent='player 2'

    document.querySelector('.player-0-panel').classList.remove('winner');  //Removing the winner and active style after  a player has won
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');

 }

