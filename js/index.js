console.log(
	`%c
#####   ####  #    #       ####   ####   ####  #
#    # #    # #    #      #    # #    # #    # #
#    # #    # #    #      #      #    # #    # #
#####  #    # # ## #      #      #    # #    # #
#      #    # ##  ##  ##  #    # #    # #    # #
#       ####  #    #  ##   ####   ####   ####  ######`,
	'background: #222; color: #ff69b4'
);
console.log('%c♥️coucou@pow.cool♥️', 'color: #222; background: #ff69b4');
bodymovin.loadAnimation({
	container: document.querySelector('#anim'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: '../data/data.json',
});
