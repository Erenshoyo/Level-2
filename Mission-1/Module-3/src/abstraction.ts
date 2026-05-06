//? OOP -> Abstraction

//! Two ways to use abstraction -> 1.Interface and 2.Abstract class.

//? Interface

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//* Implementation - used 'implements' keyword
class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log(`Playing music...`);
  }

  pause(): void {
    console.log(`Music paused...`);
  }

  stop(): void {
    console.log(`Music stopped...`);
  }
}

const BackPlayer = new MusicPlayer();
BackPlayer.play();
BackPlayer.pause();
BackPlayer.stop();

//? Abstract class - cannot create instances directly from abstract class.

abstract class MediaPlayer2 {
  abstract pause(): void;
  abstract play(): void;
  abstract stop(): void;
}

class MusicPlayer2 extends MediaPlayer2 {
  play(): void {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log(`Paused music...`);
  }
  stop(): void {
    console.log(`Stopped music...`);
  }
}

const frontPlayer = new MusicPlayer2();

frontPlayer.play();
frontPlayer.pause();
frontPlayer.stop();
