// JavaScript source code

let song_title = document.getElementById("title");
let song_singer = document.getElementById("singer");
let song_play = document.getElementById("play");
let song_prev = document.getElementById("prev");
let song_next = document.getElementById("next");
let song_img = document.getElementById("songig");
let songt = document.getElementById("titlle");
let songs = document.getElementById("sinnger");
let songi= document.getElementById("imgg");
//let usernamesign= document.getElementById("signup-username").value
//let emailsign= document.getElementById("signup-email").value
//let passsign= document.getElementById("signup-password").value
//let pass= document.getElementById("signin-password").value
//let email= document.getElementById("signin-email").value
var audio = document.getElementById("myvideo");
audio.controls = true;

console.log(song_play)

let songs_list = [

{
        name : 'Exodus',
        img : 'images/song-img/reg1.jpg',
        Song : 'videos/bob_marley/13._Exodus__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
 
    {
        name : 'No woman no cry',
         img : 'images/song-img/reg3.jpg',
        Song : 'videos/bob_marley/02._No_Woman,_No_Cry__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
    {
        name : 'Could you be loved',
         img : 'images/song-img/reg2.jpg',
        Song : 'videos/bob_marley/03._Could_you_Be_Loved__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
 

    {
        name : 'Get up Stand up',
        img : 'images/song-img/reg1.jpg',
        Song : 'videos/bob_marley/06._Get_Up,_Stand_Up.__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
  
    {
        name : 'One love',
         img : 'images/song-img/reg3.jpg',
        Song : 'videos/bob_marley/08._One_Love__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
    {
        name : 'I shot the sheriff',
         img : 'images/song-img/reg2.jpg',
        Song : 'videos/bob_marley/09._I_Shot_The_Sheriff__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
    {
        name : 'Redemption song',
  img : 'images/song-img/reg1.jpg',
        Song : 'videos/bob_marley/11._Redemption_Song__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },
    {
        name : 'Stir it up',
   img : 'images/song-img/reg3.jpg',
         Song: 'videos/bob_marley/07_Stir_It_Up__-_(Bob_Marley)_-_[Legend](0).mp4',
        Singer : 'Bob Marley'
    },

    
  
    {
        name : 'A sky full of stars',
    img : 'images/song-img/cold2.jpg',
        Song : 'videos/coldplay/Coldplay_-_A_Sky_Full_Of_Stars_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },
 
    {
        name : 'Charlie Brown',
        img : 'images/song-img/cold1.jpg',
        Song : 'videos/coldplay/Coldplay_-_Charlie_Brown_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'clocks',
        img : 'images/song-img/cold3.jpg',
        Song : 'videos/coldplay/Coldplay_-_Clocks_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'fix you',
  img : 'images/song-img/cold2.jpg',
        Song : 'videos/coldplay/Coldplay_-_Fix_You_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },

    {
        name : 'viva la vida',
        img : 'images/song-img/cold1.jpg',
        Song : 'videos/coldplay/Coldplay_-_Viva_La_Vida_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },
  
    {
        name : 'yellow',
        img : 'images/song-img/cold2.jpg',
        Song : 'videos/coldplay/Coldplay_-_Yellow_(Official_Video)(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'Paradise',
        img : 'images/song-img/cold3.jpg',
        Song : 'videos/coldplay/Coldplay_-_Paradise_(Live_2012_from_Paris)(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'the scientist',
  img : 'images/song-img/cold2.jpg',
        Song : 'videos/coldplay/Coldplay_-_The_Scientist_(Official_4K_Video)(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'We never change',
   img : 'images/song-img/cold3.jpg',
         Song: 'videos/coldplay/Coldplay_-_We_Never_Change(0).mp4',
        Singer : 'Coldplay'
    },
    {
        name : 'Pray for me',
   img : 'images/song-img/w1.png',
        Song : 'videos/weeknd/The_Weeknd,_Kendrick_Lamar_-_Pray_For_Me_(Official_Lyric_Video)(0).mp4',
        Singer : 'The Weeknd'
    },
 
    {
        name : 'After hours',
           img : 'images/song-img/w2.webp',
        Song : 'videos/weeknd/The_Weeknd_-_After_Hours_(Short_Film)(0).mp4',
        Singer : 'The Weeknd'
    },
    {
        name : 'Blinding lights',
           img : 'images/song-img/w1.png',
        Song : 'videos/weeknd/The_Weeknd_-_Blinding_Lights_(Official_Audio)(0).mp4',
        Singer : 'The Weeknd'
    },
    {
        name : 'call out my name',
     img : 'images/song-img/w3.jpg',
        Song : 'videos/weeknd/The_Weeknd_-_Call_Out_My_Name_(Official_Video)(0).mp4',
        Singer : 'The Weeknd'
    },

    {
        name : 'heartless',
          img : 'images/song-img/w2.webp',
        Song : 'videos/weeknd/The_Weeknd_-_Heartless_(Official_Video)(0).mp4',
        Singer : 'The Weeknd'
    },
  
    {
        name : 'often',
            img : 'images/song-img/w1.png',
        Song : 'videos/weeknd/The_Weeknd_-_Often_(NSFW)_(Official_Video)(0).mp4',
        Singer : 'The Weeknd'
    },
    {
        name : 'reminder',
          img : 'images/song-img/w3.jpg',
        Song : 'videos/weeknd/The_Weeknd_-_Reminder_(Official_Video)(0).mp4',
        Singer : 'The Weeknd'
    },
    {
        name : 'save your tears',
                img : 'images/song-img/w1.png', 
        Song : 'videos/weeknd/The_Weeknd_-_Save_Your_Tears_(Official_Music_Video)(0).mp4',
        Singer : 'The Weeknd'
    },
    {
        name : 'Starboy',
      img : 'images/song-img/w2.webp',
         Song: 'videos/weeknd/The_Weeknd_-_Starboy_ft._Daft_Punk_(Official_Video)(0).mp4',
        Singer : 'The Weeknd'
    }
    ,
    {
        name : 'The real slim shady',
     img : 'images/song-img/e3.jpg',
        Song : 'videos/eminem/Eminem_-_The_Real_Slim_Shady_(Official_Video_-_Clean_Version)(0).mp4',
        Singer : 'Eminem'
    },
 
    {
        name : 'Without me',
             img : 'images/song-img/e1.jpg',
        Song : 'videos/eminem/Eminem_-_Without_Me_(Official_Music_Video)(0).mp4',
        Singer : 'Eminem'
    },
    {
        name : 'Drop the world',
             img : 'images/song-img/e2.jpg',
        Song : 'videos/eminem/Lil_Wayne_-_Drop_The_World_ft._Eminem_(Official_Music_Video)_ft._Eminem(0).mp4',
        Singer : 'Eminem & Lil Wayne'
    },
    {
        name : 'Mockingbird',
    img : 'images/song-img/e3.jpg',
        Song : 'videos/eminem/Eminem_-_Mockingbird_[Official_Music_Video](0).mp4',
        Singer : 'Eminem'
    },

    {
        name : 'My name is',
             img : 'images/song-img/e2.jpg',
        Song : 'videos/eminem/Eminem_-_My_Name_Is_(Official_Music_Video)(0)(2).mp4',
        Singer : 'Eminem'
    },
  
    {
        name : 'Stan',
          img : 'images/song-img/e3.jpg',
        Song : 'videos/eminem/Eminem_-_Stan_(Long_Version)_ft._Dido(0).mp4',
        Singer : 'Eminem & Dido'
    },
    {
        name : 'I need a doctor',
        img : 'images/song-img/e1.jpg',
        Song : 'videos/eminem/Dr._Dre_-_I_Need_A_Doctor_(Explicit)_ft._Eminem,_Skylar_Grey(0)(1).mp4',
        Singer : 'Eminem & Dr.Dre'
    },
    {
        name : 'Smack that',
    img : 'images/song-img/e3.jpg',
        Song : 'videos/eminem/Akon_-_Smack_That_(Official_Music_Video)_ft._Eminem(0).mp4',
        Singer : 'Akon & Eminem'
    },
    {
        name : 'Hittman',
     img : 'images/song-img/e2.jpg',
         Song: 'videos/eminem/Dr._Dre_-_Forgot_About_Dre_ft._Eminem,_Hittman(0).mp4',
        Singer : 'Eminem & Dr.Dre'
    }

    
]


   
/*class account{
    cnstructor(username,email,password){
        this.username= name;
        this.email = '123@gmail.com';
        this.password= '12345678';
        this.rock=0;
        this.pop=0;
        this.reg=0;
        this.hip=0;
    }}
    
    
let accounts = 1;
var administrator = new account('admin','adminuser@gmail.com','adminpass');*/
class free{
    cnstructor(){
        this.rock=0;
        this.pop=0;
        this.reg=0;
        this.hip=0;
    }}

        
var freea = new free(0,0,0,0);
function selector(){
       let total = active.rock+active.hip+active.pop+active.reg;
       let tmreg=(active.reg/total)*8;
       let tmpop=(active.pop/total)*8;
       let tmrock=(active.rock/total)*8;
       let tmhip=(active.hip/total)*8;
       let ids,idi,idp;
       for(let i=0;i<Math.round(tmreg);i++){
           ids=i+"s";
           document.getElementById("ids").innerHTML=songs_list[i].name;
               idi=i+"i";
           document.getElementById("idi").src=songs_list[i].Song;
              ids=i+"p";
           document.getElementById("idp").innerHTML=songs_list[i].Singer;
       }
       for(let i=Math.round(tmreg);i<(Math.round(tmreg)+Math.round(tmrock));i++){
           ids=i+"s";
           document.getElementById("ids").innerHTML=songs_list[i+9].name;
               idi=i+"i";
           document.getElementById("idi").src=songs_list[i+9].Song;
              ids=i+"p";
           document.getElementById("idp").innerHTML=songs_list[i+9].Singer;
       }
       for(let i=(Math.round(tmreg)+Math.round(tmrock));i<(Math.round(tmreg)+Math.round(tmrock)+Math.round(tmpop));i++){
           ids=i+"s";
           document.getElementById("ids").innerHTML=songs_list[i+18].name;
               idi=i+"i";
           document.getElementById("idi").src=songs_list[18].Song;
              ids=i+"p";
           document.getElementById("idp").innerHTML=songs_list[18].Singer;
       }
       for(let i=(Math.round(tmreg)+Math.round(tmrock)+Math.round(tmpop));i<(Math.round(tmreg)+Math.round(tmrock)+Math.round(tmpop)+Math.round(tmhip));i++){
           ids=i+"s";
           document.getElementById("ids").innerHTML=songs_list[i+27].name;
               idi=i+"i";
           document.getElementById("idi").src=songs_list[i+27].Song;
              ids=i+"p";
           document.getElementById("idp").innerHTML=songs_list[i+27].Singer;
       }
    }
/*
   function creator(){
       accounts+=1;
        var acc = [];
        acc[accounts] = new account(uernamesign,emailsign,passwordsign);
        window.location = "playlist-screen.html"
         active = acc[accounts];
         location.reload();
    }
   function signin(email,pass){
        for(let x=1;x<=acc.length; x++ ){ 
 if(acc[x].email == email){
 if(acc[x].password == pass){

    alert("Thank you for signing in!");
window.location = "playlist-screen.html"
 active = acc[x-1];
 location.reload();
 break;
       }
 else return "username/password incorrect";
}}
 if(x>acc.length) return "account doesn't exist";

            }
   function signout(){
        location.reload();
    active=freea;
        }*/

        var active=new free();
active= freea;
      let i=0;
let flag=false;


song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer
song_img.src = songs_list[i].img
audio.src = songs_list[i].Song;
song_play.addEventListener("click", function(){
    
    var pl=0;
    while(pl<1){    if(i<9) active.reg+=1;
    if(i<18 || i>8) active.rock+=1;
    if(i<27 || i>17) active.pop+=1;
    if(i<36|| i>26) active.hip+=1;
    pl++;}
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }

    selector();
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    if(i<9)active.reg+=1;
    if(i<18 || i>8)active.rock+=1;
    if(i<27 || i>17)active.pop+=1;
    if(i<36|| i>26)active.hip+=1;
        console.log("total"+ active.total);
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    song_img.src = songs_list[i].img
    audio.src = songs_list[i].Song;
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    selector();
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<0){
        i=songs_list.length-1;
        console.log(i)
    }

    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    song_img.src = songs_list[i].img
  audio.src = songs_list[i].Song;
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
})

audio.addEventListener('ended', function(e) {
  // update the new active video index

  // update the video source and play
  audio.src = songs_list[i+1].Song;
   song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    song_img.src = songs_list[i].img
  audio.play();
  selector();
});
function list(){
    let g=0;
    for(let i=0; i<36; i+3){
        g++;
        document.getElementById("num").innerHTML= "<h2>g</h2>";
        document.getElementById("imgi").innerHTML= "<img src=songs_list[i].img></img>";
        document.getElementById("sngn").innerHTML= "<p>songs_list[i].name</p>";
        document.getElementById("snga").innerHTML= "<p>songs_list[i].Singer<br></p>";
    }
}
list();




