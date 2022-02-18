

function addPlayer(){
        const playersContainer=document.getElementById('players')

        // const player
        const player=document.createElement('div');
        player.classList.add('player')
        // console.log(player)

        player.innerHTML=`
        <h4 class="player-name">New player</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reprehenderit ad fugiat accusamus a nulla dolorum animi voluptatem dolores sint?</p>
        `

        console.log(player);
        playersContainer.appendChild(player);

//         const players=document.getElementsByClassName('player');

// for(const player of players){

//         console.log(player)
//         player.style.border='2px solid red'
//         player.style.borderRadius='5%';
//         player.style.margin='10px';
//         player.style.padding='10px';
// }
styleadd();
}

// document.querySelector(#players)

function styleadd(){

function setPlayerStyle(player){
        console.log(player)
        player.style.border='2px solid red'
        player.style.borderRadius='5%';
        player.style.margin='10px';
        player.style.padding='10px';
}        
const players=document.getElementsByClassName('player');

for(const player of players){

        setPlayerStyle(player) ;
      
        // player.addEventListener('click',function(e){
        //         player.style.backgroundColor='yellow'}) \  
        document.getElementById('players').addEventListener('click',function(event){
                console.log(event.target.tagName.toLowerCase());

                if(event.target.tagName.toLowerCase()=='div'){
                        event.target.style.backgroundColor='yellow';
                }

                else{
                        event.target.parentNode.style.backgroundColor='white';
                        
                }
                
               
                })
          
}




}

styleadd();



