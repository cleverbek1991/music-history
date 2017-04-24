console.log('test');
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push('Nobody can save me - by Linkin Park on the album One More Light');
songs.unshift('Sweet Sacrifice - by Evanescence on the album The Open Door');

for (var i = 0; i < songs.length; i++) {
	var replaceSong = songs[i];
	replaceSong = replaceSong.replace('>', '-');
	replaceSong = replaceSong.replace(/[*\@\!\(]/g, '');
	console.log(replaceSong);
	var divClassMain = document.querySelector('.main');
	divClassMain.innerHTML += '<p>' + replaceSong + '</p>';
}