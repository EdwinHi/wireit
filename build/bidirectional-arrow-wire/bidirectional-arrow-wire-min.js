YUI.add("bidirectional-arrow-wire",function(d,c){d.BidirectionalArrowWire=function(e){d.BidirectionalArrowWire.superclass.constructor.apply(this,arguments);};d.BidirectionalArrowWire.NAME="bidirectionalarrowwire";d.extend(d.BidirectionalArrowWire,d.WireBase,{_draw:function(){var F=7;var f=F+3;var s=[4+f,4+f];var k=this.get("src").getXY();var y=this.get("tgt").getXY();var i=Math.sqrt(Math.pow(k[0]-y[0],2)+Math.pow(k[1]-y[1],2));this.moveTo((k[0]+6),(k[1]+6));this.lineTo((y[0]+6),(y[1]+6));var n=k;var m=y;var l=[0,0];var j=20;var p=(i===0)?0:1-(j/i);l[0]=Math.abs(n[0]+p*(m[0]-n[0]));l[1]=Math.abs(n[1]+p*(m[1]-n[1]));var h=n[0]-m[0];var r=n[1]-m[1];var q=n[0]*m[1]-n[1]*m[0];if(h!==0){a=r/h;b=q/h;}else{a=0;}if(a===0){aProst=0;}else{aProst=-1/a;}bProst=l[1]-aProst*l[0];var w=1+Math.pow(aProst,2);var v=2*aProst*bProst-2*l[0]-2*l[1]*aProst;var u=-2*l[1]*bProst+Math.pow(l[0],2)+Math.pow(l[1],2)-Math.pow(F,2)+Math.pow(bProst,2);var G=Math.pow(v,2)-4*w*u;if(G<0){return;}var E=(-v+Math.sqrt(G))/(2*w);var D=(-v-Math.sqrt(G))/(2*w);var g=aProst*E+bProst;var e=aProst*D+bProst;if(n[1]==m[1]){var x=(n[0]>m[0])?1:-1;E=m[0]+x*j;D=E;g-=F;e+=F;}this.moveTo(m[0]+6,m[1]+6);this.lineTo(E+6,g+6);this.moveTo(m[0]+6,m[1]+6);this.lineTo(D+6,e+6);n=y;m=k;var l=[0,0];var j=20;var p=(i==0)?0:1-(j/i);l[0]=Math.abs(n[0]+p*(m[0]-n[0]));l[1]=Math.abs(n[1]+p*(m[1]-n[1]));var h=n[0]-m[0];var r=n[1]-m[1];var q=n[0]*m[1]-n[1]*m[0];if(h!==0){a=r/h;b=q/h;}else{a=0;}if(a==0){aProst=0;}else{aProst=-1/a;}bProst=l[1]-aProst*l[0];var w=1+Math.pow(aProst,2);var v=2*aProst*bProst-2*l[0]-2*l[1]*aProst;var u=-2*l[1]*bProst+Math.pow(l[0],2)+Math.pow(l[1],2)-Math.pow(F,2)+Math.pow(bProst,2);var G=Math.pow(v,2)-4*w*u;if(G<0){return;}var E=(-v+Math.sqrt(G))/(2*w);var D=(-v-Math.sqrt(G))/(2*w);var g=aProst*E+bProst;var e=aProst*D+bProst;if(n[1]==m[1]){var x=(n[0]>m[0])?1:-1;E=m[0]+x*j;D=E;g-=F;e+=F;}this.moveTo(m[0]+6,m[1]+6);this.lineTo(E+6,g+6);this.moveTo(m[0]+6,m[1]+6);this.lineTo(D+6,e+6);this.end();}});d.BidirectionalArrowWire.ATTRS=d.merge(d.WireBase.ATTRS,{});},"@VERSION@",{"requires":["wire-base"]});