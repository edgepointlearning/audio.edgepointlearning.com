// AUDIO PLAYER
$(document).ready(function(){
	'use strict';
	var myPlaylist = new jPlayerPlaylist({
			jPlayer: '#jquery_jplayer',
			cssSelectorAncestor: '#jp_container'
		}, [
			{
				title: 'Adam',
				mp3: 'audio/adam.mp3'
			},
			{
				title: 'Arielle',
				mp3: 'audio/arielle.mp3'
			},
			{
				title: 'Bill',
				mp3: 'audio/bill.mp3'
			},
			{
				title: 'Bodrero',
				mp3: 'audio/bodrero.mp3'
			},
			{
				title: 'Hartmann',
				mp3: 'audio/hartmann.mp3'
			},
			{
				title: 'Janet',
				mp3: 'audio/janet.mp3'
			},
			{
				title: 'Jim',
				mp3: 'audio/jim.mp3'
			},
			{
				title: 'John',
				mp3: 'audio/edmondson.mp3'
			},
			{
				title: 'Larisa',
				mp3: 'audio/larisa.mp3'
			},
			{
				title: 'Mark',
				mp3: 'audio/mark.mp3'
			},
			{
				title: 'Rachel',
				mp3: 'audio/rachel.mp3'
			},
			{
				title: 'Tim',
				mp3: 'audio/tim.mp3'
			}
		], {
			supplied: 'mp3'
		});

		$('.jp-next').click(function() {
			myPlaylist.next();
		});
		$('.jp-previous').click(function() {
			myPlaylist.previous();
		});
		$('.jp-play').click(function() {
			myPlaylist.play();
		});
		$('.jp-pause').click(function() {
			myPlaylist.pause();
		});
});
