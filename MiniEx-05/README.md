The README is not done yet. I'm still updating stuff :)

# Word of warning

Firstly, I want to warn you that this program uses a lot of memory. Depending on your computer’s capabilities, the program might lag a little (or a lot) when you initialize it. I have tried to remedy this by making the first level the least intensive of the levels, so that you might still be able to experience the program as was intended. 

There are also a lot of files being loaded (some pictures and five songs), so be patient with the loading times, please. 

I am also aware of some bugs in the game. From my testing, this occurs mostly on less powerful machines where the bullets from the spaceship will pass over the blocks coming towards you, making the game close to impossible in some levels. This was a problem on my laptop throughout my coding process, but stopped the moment I moved to a computer with more memory. 

I believe this to be cause by the many objects flying across the screen at the same time and the framerate going jumpy as a result. Locking the program’s framerate to 60 seemed to solve this, but I cannot guarantee that it is flawless, so I apologize if your experience is lessened by this :( 

# Controls

You fly using the mouse and fire the cannon by holding down the left mouse button. You respawn the ship by hitting spacebar (or any other key). 

## The Game and Game Design

In [Song Invaders](https://cdn.rawgit.com/AnnesFlashBack/Mini-Exercises/35383eaa/MiniEx-05/ex-05/index.html) you control a little spaceship flying across a dark canvas. A song plays in the background and for a few seconds, nothing will really happen. Then blocks will start appearing at the right side of the screen and will fly towards the spaceship. These blocks are dangerous and will crash your ship! You must clear them away using your ship’s cannon to clear the blocks before they make it to you, or use the mobility of your ship to avoid the flying space blocks. There are multiple levels, increasing in difficulty as you go along, adding more blocks to the canvas. 

There is text on the screen to guide the user as to how it is used, but no guide to how to control the ship. Assumed most people would quickly figure it out, since it is a pretty standard control scheme, but I realize now I should probably have included some sort of “tutorial.” If you couldn’t figure it out (or it bugged out or something) you are supposed to control the ship with the mouse and fire by clicking the left mouse button. 

Your score and highscore are both updated as you go through. I was inspired on how to do this by fellow student, Mark something’s MiniEx-04, where he also utilized a score and highscore system. His program can be found here. 

I also wanted to add an “auto-play” feature, meaning that when one level ended, it would automatically play the next song, but I could not make this work. Instead, you have to pick the next level yourself at the bottom of the screen. 

#### Sprites and p5.play

I utilized many of the methods found in the p5.play library, exactly because it has what is called the Sprite class. This is a little different from what we have been talking about in class, and is a class with many different methods, and functions tied to it. The Group() function proved tremendously effective! For instance, whenever a new bullet is spawned that bullet is automatically added to a group named bullets. The same for the blocks. Whenever a new block was spawned, it was likewise added to a group, either named blocks or tinyBlocks depending on its size. So, instead of keeping track of individual bullets or blocks, the program was able to detect if anything within the group bullets touched anything from the groups blocks or tinyBlocks, and react accordingly. 

#### Objects Generated Through Music

I knew that I wanted to work with music. Again. I think it adds so much more to a program when more of your senses can interact with it. It immerses you much more; especially when talking about games. The soundtracks from video games are crucial to setting the mood and feel of the scene taking place, as well as translating the feel of fun. Here, the music works in tandem with the music, since each level is generated based on data gathered from the music playing. 

For the big blocks, I used peakDetect() found in the p5.sound library. When the program detected a beat in the song playing, it would spawn a large block just off the canvas. This block was given properties by its Sprite class. 
(code)

The same was the case for the small blocks, except their spawn rate was not tied to the beats, but instead to the volume. The louder the song was, the more small blocks would appear, making the later levels quite crazy. 
(code) 

#### The Standard Class

Because everything in the actual game only utilizes the Sprite class and not the class we were taught, I wanted to experiment with combining the two. I very quickly found out that this is much easier said than done, as I could not get the two to work together. Instead of pulling my hair out over it, I instead used the standard class to make the background graphics. 

I didn’t like how static the dark background looked and wanted to add some movement to it. I made a class for an ellipse with a constructor and a few methods to go across the background in the same direction as the blocks. The width of these circles is determined by the volume of the song playing, and the speed as well as the color of the circles are randomly chosen. 

This made sort of a pseudo-3D effect, I felt. With the small blocks on top of the big blocks, and the moving dark circles in the background, it gave the program some much needed depth. 

## Objects, Blocks, and Generation 
