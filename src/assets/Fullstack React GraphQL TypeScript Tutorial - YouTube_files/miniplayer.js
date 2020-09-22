(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},L:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},L:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.M().da("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},L:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},L:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.X.call(this,{D:"button",ca:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},L:[d]});this.H=a;this.ia("click",this.onClick,this);this.ka("title",g.BO(a,e,"i"));g.Zf(this,g.oP(b.xb(),this.element))},P5=function(a){g.X.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.Bg=!1;this.player=a;this.K(a,"minimized",this.Ai);this.K(a,"onStateChange",this.pP)},Q5=function(a){g.pN.call(this,a);
this.o=new P5(this.player);this.o.hide();g.dN(this.player,this.o.element,4);a.app.N.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(O5,g.X);O5.prototype.onClick=function(){this.H.la("onExpandMiniplayer")};g.u(P5,g.X);g.k=P5.prototype;
g.k.show=function(){this.jd=new g.pn(this.Ko,null,this);this.jd.start();if(!this.Bg){this.tooltip=new g.vS(this.player,this);g.E(this,this.tooltip);g.dN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ab=new g.hP(this.player);g.E(this,this.Ab);this.Ij=new g.X({D:"div",I:"ytp-miniplayer-scrim"});g.E(this,this.Ij);this.Ij.Z(this.element);this.K(this.Ij.element,"click",this.tD);var a=new g.X({D:"button",ca:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},L:[g.TN()]});
g.E(this,a);a.Z(this.Ij.element);this.K(a.element,"click",this.Cm);a=new O5(this.player,this);g.E(this,a);a.Z(this.Ij.element);this.gk=new g.X({D:"div",I:"ytp-miniplayer-controls"});g.E(this,this.gk);this.gk.Z(this.Ij.element);this.K(this.gk.element,"click",this.tD);var b=new g.X({D:"div",I:"ytp-miniplayer-button-container"});g.E(this,b);b.Z(this.gk.element);a=new g.X({D:"div",I:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Z(this.gk.element);var c=new g.X({D:"div",I:"ytp-miniplayer-button-container"});
g.E(this,c);c.Z(this.gk.element);this.QD=new g.gR(this.player,this,!1);g.E(this,this.QD);this.QD.Z(b.element);b=new g.dR(this.player,this);g.E(this,b);b.Z(a.element);this.nextButton=new g.gR(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Z(c.element);this.Zg=new g.kS(this.player,this);g.E(this,this.Zg);this.Zg.Z(this.Ij.element);this.Gc=new g.pR(this.player,this);g.E(this,this.Gc);g.dN(this.player,this.Gc.element,4);this.Gr=new g.X({D:"div",I:"ytp-miniplayer-buttons"});g.E(this,this.Gr);
g.dN(this.player,this.Gr.element,4);a=new g.X({D:"button",ca:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},L:[g.TN()]});g.E(this,a);a.Z(this.Gr.element);this.K(a.element,"click",this.Cm);a=new g.X({D:"button",ca:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},L:[g.gO()]});g.E(this,a);a.Z(this.Gr.element);this.K(a.element,"click",this.tN);this.K(this.player,"presentingplayerstatechange",this.Lb);this.K(this.player,"appresize",this.Na);this.K(this.player,
"fullscreentoggled",this.Na);this.Na();this.Bg=!0}0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Gc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.jd&&(this.jd.dispose(),this.jd=void 0);g.X.prototype.hide.call(this);this.player.app.N.o||(this.Bg&&this.Gc.hide(),this.player.loadModule("annotations_module"))};
g.k.W=function(){this.jd&&(this.jd.dispose(),this.jd=void 0);g.X.prototype.W.call(this)};
g.k.Cm=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.k.tN=function(){this.player.playVideo()};
g.k.tD=function(a){if(a.target===this.Ij.element||a.target===this.gk.element)g.P(this.player.M().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.cI(g.MM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.k.Ai=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.N.o)};
g.k.Bd=function(){this.Gc.zc();this.Zg.zc()};
g.k.Ko=function(){this.Bd();this.jd&&this.jd.start()};
g.k.Lb=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Na=function(){this.Gc.setPosition(0,g.NM(this.player).getPlayerSize().width,!1);this.Gc.Wx()};
g.k.pP=function(a){this.player.app.N.o&&(0===a?this.hide():this.show())};
g.k.xb=function(){return this.tooltip};
g.k.pd=function(){return!1};
g.k.Ef=function(){return!1};
g.k.Dg=function(){return!1};
g.k.sx=function(){};
g.k.jk=function(){};
g.k.En=function(){};
g.k.uk=function(){return null};
g.k.Xl=function(){return new g.dg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Im=function(a,b,c,d,e){var f=0,h=d=0,l=g.Cg(a);if(b){c=g.yn(b,"ytp-prev-button")||g.yn(b,"ytp-next-button");var m=g.yn(b,"ytp-play-button"),n=g.yn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ag(b,this.element),h=b.x,f=b.y-12):n&&(h=g.yn(b,"ytp-miniplayer-button-top-left"),f=g.Ag(b,this.element),b=g.Cg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.NM(this.player).getPlayerSize().width;e=f+(e||0);l=g.Zd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Gi=function(){};
g.k.bi=function(){return!1};g.u(Q5,g.pN);Q5.prototype.create=function(){};
Q5.prototype.Vg=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.AN.miniplayer=Q5;})(_yt_player);
