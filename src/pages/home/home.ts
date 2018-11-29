import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private streamingMedia: StreamingMedia, private youtube: YoutubeVideoPlayer) {
  	// this.launchVideo();
  	this.youtube.openVideo('eo362o5XEhw');
  }

startVideo() {
	let options: StreamingVideoOptions = {
  successCallback: () => { console.log('Video played') },
  errorCallback: (e) => { console.log('Error streaming') },
  orientation: 'portrait',
  shouldAutoClose: true,
  // controls: false
};

this.streamingMedia.playVideo('https://www.youtube.com/watch?v=eo362o5XEhw', options);
}

}
