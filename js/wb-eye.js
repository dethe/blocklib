(function(xtag){
'use strict';

/* wb-eye */
xtag.addFrameHandler(function(){
	xtag.query(document, 'wb-eye').forEach(function(eye){
		eye.lookAtPoint(xtag.mouseX, xtag.mouseY);
	});
});

xtag.register('wb-eye', {
	lifecycle: {
		created: function(){
			var SVGNS = 'http://www.w3.org/2000/svg';
			var eyeball, orb, pupil;
			pupil = xtag.svg('circle', {
				r: 10,
				cx: 0,
				cy: 0,
				fill: '#2F4F4F'
			});
			orb = xtag.svg('circle', {
				r: 25,
				cx: 0,
				cy: 0,
				fill: '#FFFFF0' 
			});
			eyeball = xtag.svg('svg', {
				width: '100%',
				height: '100%',
				viewBox: '-25 -25 50 50'
			}, [orb, pupil]);
			eyeball.appendChild(orb);
			eyeball.appendChild(pupil);
			this.xtag.eyeball = eyeball;
			this.xtag.orb = orb;
			this.xtag.pupil = pupil;
			this.appendChild(eyeball);
		},
		inserted: function(){

		},
		removed: function(){

		},
		attributeChanged: function(){

		}
	},
	methods: {
		lookAtPoint: function(x,y){
			var cx, cy;
			var rect = this.xtag.orb.getBoundingClientRect();
			cx = rect.left + rect.width/2;
			cy = rect.top + rect.height/2;
			var angle = Math.atan2(y-cy,x-cx);
			var dx = Math.cos(angle) * 15;
			var dy = Math.sin(angle) * 15;
			this.xtag.pupil.setAttribute('cx', dx);
			this.xtag.pupil.setAttribute('cy', dy);
		}
	}
});
})(xtag);