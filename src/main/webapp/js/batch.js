window.Raphael=(function(){var AS=/[, ]+/,L=document,AD=window,AJ={was:"Raphael" in AD,is:AD.Raphael},K=function(){if(K.is(arguments[0],"array")){var E=arguments[0],R=P[AO](K,E.splice(0,3+K.is(E[0],AH))),AU=R.set();for(var AT=0,AV=E[Z];AT<AV;AT++){var e=E[AT]||{};({circle:1,rect:1,path:1,ellipse:1,text:1,image:1}[H](e.type))&&AU[AE](R[e.type]().attr(e))}return AU}return P[AO](K,arguments)},D={},g=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup"],W="",H="hasOwnProperty",V="prototype",F="setAttribute",C="appendChild",AO="apply",Z="length",T="join",h="split",k="concat",AE="push",B=parseFloat,U=parseInt,m=Math.pow,v=Math.min,Q=Math.max,AI=Math.round,y=/^(?=[\da-f]$)/,AH="number",I="toString",a={"clip-rect":"0 0 10e9 10e9",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},f={"clip-rect":"csv",cx:AH,cy:AH,fill:"colour","fill-opacity":AH,"font-size":AH,height:AH,opacity:AH,path:"path",r:AH,rotation:"csv",rx:AH,ry:AH,scale:"csv",stroke:"colour","stroke-opacity":AH,"stroke-width":AH,translation:"csv",width:AH,x:AH,y:AH},r="replace";K.version="1.1";K.type=(AD.SVGAngle||L.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");K.svg=!(K.vml=K.type=="VML");K.idGenerator=0;K.fn={};K.is=function(R,E){E=(E+W).toLowerCase();if((E=="object"||E=="undefined")&&typeof R==E){return true}if(R==null&&E=="null"){return true}return Object[V][I].call(R)[r](/^\[object\s+|\]$/gi,W).toLowerCase()==E};K.setWindow=function(E){AD=E;L=AD.document};K.hsb2rgb=AR(function(AY,AW,Ac){if(K.is(AY,"object")&&"h" in AY&&"s" in AY&&"b" in AY){Ac=AY.b;AW=AY.s;AY=AY.h}var AT,AU,Ad;if(Ac==0){return{r:0,g:0,b:0,hex:"#000"}}if(AY>1||AW>1||Ac>1){AY/=255;AW/=255;Ac/=255}var AV=~~(AY*6),AZ=(AY*6)-AV,e=Ac*(1-AW),R=Ac*(1-(AW*AZ)),Ae=Ac*(1-(AW*(1-AZ)));AT=[Ac,R,e,e,Ae,Ac,Ac][AV];AU=[Ae,Ac,Ac,R,e,e,Ae][AV];Ad=[e,e,Ae,Ac,Ac,R,e][AV];AT*=255;AU*=255;Ad*=255;var Aa={r:AT,g:AU,b:Ad},E=(~~AT)[I](16),AX=(~~AU)[I](16),Ab=(~~Ad)[I](16);E=E[r](y,"0");AX=AX[r](y,"0");Ab=Ab[r](y,"0");Aa.hex="#"+E+AX+Ab;return Aa},K);K.rgb2hsb=AR(function(E,R,AW){if(K.is(E,"object")&&"r" in E&&"g" in E&&"b" in E){AW=E.b;R=E.g;E=E.r}if(K.is(E,"string")){var AY=K.getRGB(E);E=AY.r;R=AY.g;AW=AY.b}if(E>1||R>1||AW>1){E/=255;R/=255;AW/=255}var AV=Q(E,R,AW),e=v(E,R,AW),AT,i,AU=AV;if(e==AV){return{h:0,s:0,b:AV}}else{var AX=(AV-e);i=AX/AV;if(E==AV){AT=(R-AW)/AX}else{if(R==AV){AT=2+((AW-E)/AX)}else{AT=4+((E-R)/AX)}}AT/=6;if(AT<0){AT+=1}if(AT>1){AT-=1}}return{h:AT,s:i,b:AU}},K);K._path2string=function(){var e=W,AV;for(var R=0,AT=this[Z];R<AT;R++){for(var E=0,AU=this[R][Z];E<AU;E++){e+=this[R][E];E&&E!=AU-1&&(e+=",")}R!=AT-1&&(e+=" ")}return e[r](/,(?=-)/g,W)};function AR(i,R,E){function e(){var AT=Array[V].splice.call(arguments,0,arguments[Z]),AU=AT[T]("\u25ba");e.cache=e.cache||{};e.count=e.count||[];if(AU in e.cache){return E?E(e.cache[AU]):e.cache[AU]}if(e.count[Z]>=1000){delete e.cache[e.count.shift()]}e.count[AE](AU);e.cache[AU]=i[AO](R,AT);return E?E(e.cache[AU]):e.cache[AU]}return e}K.getRGB=AR(function(E){var AY={none:"none",aliceblue:"#f0f8ff",amethyst:"#96c",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#789",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#f0f",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"},AU;E=AY[(E+W).toLowerCase()]||E;if(!E){return{r:-1,g:-1,b:-1,hex:"none",error:1}}if(E=="none"){return{r:-1,g:-1,b:-1,hex:"none"}}var e,i,AX,AV=(E+W).match(/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgb\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|rgb\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i);if(AV){if(AV[2]){AX=U(AV[2].substring(5),16);i=U(AV[2].substring(3,5),16);e=U(AV[2].substring(1,3),16)}if(AV[3]){AX=U(AV[3].substring(3)+AV[3].substring(3),16);i=U(AV[3].substring(2,3)+AV[3].substring(2,3),16);e=U(AV[3].substring(1,2)+AV[3].substring(1,2),16)}if(AV[4]){AV=AV[4][h](/\s*,\s*/);e=B(AV[0]);i=B(AV[1]);AX=B(AV[2])}if(AV[5]){AV=AV[5][h](/\s*,\s*/);e=B(AV[0])*2.55;i=B(AV[1])*2.55;AX=B(AV[2])*2.55}if(AV[6]){AV=AV[6][h](/\s*,\s*/);e=B(AV[0]);i=B(AV[1]);AX=B(AV[2]);return K.hsb2rgb(e,i,AX)}if(AV[7]){AV=AV[7][h](/\s*,\s*/);e=B(AV[0])*2.55;i=B(AV[1])*2.55;AX=B(AV[2])*2.55;return K.hsb2rgb(e,i,AX)}AV={r:e,g:i,b:AX};var R=(~~e)[I](16),AT=(~~i)[I](16),AW=(~~AX)[I](16);R=R[r](y,"0");AT=AT[r](y,"0");AW=AW[r](y,"0");AV.hex="#"+R+AT+AW;AU=AV}else{AU={r:-1,g:-1,b:-1,hex:"none",error:1}}return AU},K);K.getColor=function(R){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:R||0.75},E=this.hsb2rgb(e.h,e.s,e.b);e.h+=0.075;if(e.h>1){e.h=0;e.s-=0.2;if(e.s<=0){this.getColor.start={h:0,s:1,b:e.b}}}return E.hex};K.getColor.reset=function(){delete this.start};K.parsePathString=AR(function(E){if(!E){return null}var e={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},R=[];if(K.is(E,"array")&&K.is(E[0],"array")){R=d(E)}if(!R[Z]){(E+W)[r](/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,function(AT,i,AW){var AV=[],AU=i.toLowerCase();AW[r](/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,function(AY,AX){AX&&AV[AE](+AX)});while(AV[Z]>=e[AU]){R[AE]([i][k](AV.splice(0,e[AU])));if(!e[AU]){break}}})}R[I]=K._path2string;return R});var t=AR(function(AZ){if(!AZ){return{x:0,y:0,width:0,height:0}}AZ=AG(AZ);var AW=0,AV=0,e=[],R=[];for(var AT=0,AY=AZ[Z];AT<AY;AT++){if(AZ[AT][0]=="M"){AW=AZ[AT][1];AV=AZ[AT][2];e[AE](AW);R[AE](AV)}else{var AU=AB(AW,AV,AZ[AT][1],AZ[AT][2],AZ[AT][3],AZ[AT][4],AZ[AT][5],AZ[AT][6]);e=e[k](AU.min.x,AU.max.x);R=R[k](AU.min.y,AU.max.y)}}var E=v[AO](0,e),AX=v[AO](0,R);return{x:E,y:AX,width:Q[AO](0,e)-E,height:Q[AO](0,R)-AX}}),d=function(AV){var e=[];if(!K.is(AV,"array")||!K.is(AV&&AV[0],"array")){AV=K.parsePathString(AV)}for(var R=0,AT=AV[Z];R<AT;R++){e[R]=[];for(var E=0,AU=AV[R][Z];E<AU;E++){e[R][E]=AV[R][E]}}e[I]=K._path2string;return e},G=AR(function(AT){if(!K.is(AT,"array")||!K.is(AT&&AT[0],"array")){AT=K.parsePathString(AT)}var AZ=[],Ab=0,Aa=0,Ae=0,Ad=0,e=0;if(AT[0][0]=="M"){Ab=AT[0][1];Aa=AT[0][2];Ae=Ab;Ad=Aa;e++;AZ[AE](["M",Ab,Aa])}for(var AW=e,Af=AT[Z];AW<Af;AW++){var E=AZ[AW]=[],Ac=AT[AW];if(Ac[0]!=Ac[0].toLowerCase()){E[0]=Ac[0].toLowerCase();switch(E[0]){case"a":E[1]=Ac[1];E[2]=Ac[2];E[3]=Ac[3];E[4]=Ac[4];E[5]=Ac[5];E[6]=+(Ac[6]-Ab).toFixed(3);E[7]=+(Ac[7]-Aa).toFixed(3);break;case"v":E[1]=+(Ac[1]-Aa).toFixed(3);break;case"m":Ae=Ac[1];Ad=Ac[2];default:for(var AV=1,AX=Ac[Z];AV<AX;AV++){E[AV]=+(Ac[AV]-((AV%2)?Ab:Aa)).toFixed(3)}}}else{E=AZ[AW]=[];if(Ac[0]=="m"){Ae=Ac[1]+Ab;Ad=Ac[2]+Aa}for(var AU=0,R=Ac[Z];AU<R;AU++){AZ[AW][AU]=Ac[AU]}}var AY=AZ[AW][Z];switch(AZ[AW][0]){case"z":Ab=Ae;Aa=Ad;break;case"h":Ab+=+AZ[AW][AY-1];break;case"v":Aa+=+AZ[AW][AY-1];break;default:Ab+=+AZ[AW][AY-2];Aa+=+AZ[AW][AY-1]}}AZ[I]=K._path2string;return AZ},0,d),j=AR(function(AT){if(!K.is(AT,"array")||!K.is(AT&&AT[0],"array")){AT=K.parsePathString(AT)}var AY=[],Aa=0,AZ=0,Ad=0,Ac=0,e=0;if(AT[0][0]=="M"){Aa=+AT[0][1];AZ=+AT[0][2];Ad=Aa;Ac=AZ;e++;AY[0]=["M",Aa,AZ]}for(var AW=e,Ae=AT[Z];AW<Ae;AW++){var E=AY[AW]=[],Ab=AT[AW];if(Ab[0]!=(Ab[0]+W).toUpperCase()){E[0]=(Ab[0]+W).toUpperCase();switch(E[0]){case"A":E[1]=Ab[1];E[2]=Ab[2];E[3]=Ab[3];E[4]=Ab[4];E[5]=Ab[5];E[6]=+(Ab[6]+Aa);E[7]=+(Ab[7]+AZ);break;case"V":E[1]=+Ab[1]+AZ;break;case"H":E[1]=+Ab[1]+Aa;break;case"M":Ad=+Ab[1]+Aa;Ac=+Ab[2]+AZ;default:for(var AV=1,AX=Ab[Z];AV<AX;AV++){E[AV]=+Ab[AV]+((AV%2)?Aa:AZ)}}}else{for(var AU=0,R=Ab[Z];AU<R;AU++){AY[AW][AU]=Ab[AU]}}switch(E[0]){case"Z":Aa=Ad;AZ=Ac;break;case"H":Aa=E[1];break;case"V":AZ=E[1];break;default:Aa=AY[AW][AY[AW][Z]-2];AZ=AY[AW][AY[AW][Z]-1]}}AY[I]=K._path2string;return AY},null,d),J=function(R,i,E,e){return[R,i,E,e,E,e]},l=function(R,i,AV,AT,E,e){var AU=1/3,AW=2/3;return[AU*R+AW*AV,AU*i+AW*AT,AU*E+AW*AV,AU*e+AW*AT,E,e]},b=function(Ae,A8,An,Al,Af,AZ,AU,Ad,A7,Ag){var AT=Math.PI,Ak=AT*120/180,E=AT/180*(+Af||0),Ar=[],Ao,A4=AR(function(A9,BC,i){var BB=A9*Math.cos(i)-BC*Math.sin(i),BA=A9*Math.sin(i)+BC*Math.cos(i);return{x:BB,y:BA}});if(!Ag){Ao=A4(Ae,A8,-E);Ae=Ao.x;A8=Ao.y;Ao=A4(Ad,A7,-E);Ad=Ao.x;A7=Ao.y;var R=Math.cos(AT/180*Af),Ab=Math.sin(AT/180*Af),At=(Ae-Ad)/2,As=(A8-A7)/2;An=Q(An,Math.abs(At));Al=Q(Al,Math.abs(As));var e=An*An,Aw=Al*Al,Ay=(AZ==AU?-1:1)*Math.sqrt(Math.abs((e*Aw-e*As*As-Aw*At*At)/(e*As*As+Aw*At*At))),Ai=Ay*An*As/Al+(Ae+Ad)/2,Ah=Ay*-Al*At/An+(A8+A7)/2,AY=Math.asin((A8-Ah)/Al),AX=Math.asin((A7-Ah)/Al);AY=Ae<Ai?AT-AY:AY;AX=Ad<Ai?AT-AX:AX;AY<0&&(AY=AT*2+AY);AX<0&&(AX=AT*2+AX);if(AU&&AY>AX){AY=AY-AT*2}if(!AU&&AX>AY){AX=AX-AT*2}}else{AY=Ag[0];AX=Ag[1];Ai=Ag[2];Ah=Ag[3]}var Ac=AX-AY;if(Math.abs(Ac)>Ak){var Aj=AX,Am=Ad,Aa=A7;AX=AY+Ak*(AU&&AX>AY?1:-1);Ad=Ai+An*Math.cos(AX);A7=Ah+Al*Math.sin(AX);Ar=b(Ad,A7,An,Al,Af,0,AU,Am,Aa,[AX,Aj,Ai,Ah])}Ac=AX-AY;var AW=Math.cos(AY),A6=Math.sin(AY),AV=Math.cos(AX),A5=Math.sin(AX),Au=Math.tan(Ac/4),Ax=4/3*An*Au,Av=4/3*Al*Au,A3=[Ae,A8],A2=[Ae+Ax*A6,A8-Av*AW],A1=[Ad+Ax*A5,A7-Av*AV],Az=[Ad,A7];A2[0]=2*A3[0]-A2[0];A2[1]=2*A3[1]-A2[1];if(Ag){return[A2,A1,Az][k](Ar)}else{Ar=[A2,A1,Az][k](Ar)[T](",")[h](",");var Ap=[];for(var A0=0,Aq=Ar[Z];A0<Aq;A0++){Ap[A0]=A0%2?A4(Ar[A0-1],Ar[A0],E).y:A4(Ar[A0],Ar[A0+1],E).x}return Ap}},p=AR(function(R,E,Ah,Af,AU,AT,AW,AV,Ab){var AZ=m(1-Ab,3)*R+m(1-Ab,2)*3*Ab*Ah+(1-Ab)*3*Ab*Ab*AU+m(Ab,3)*AW,AX=m(1-Ab,3)*E+m(1-Ab,2)*3*Ab*Af+(1-Ab)*3*Ab*Ab*AT+m(Ab,3)*AV,Ad=R+2*Ab*(Ah-R)+Ab*Ab*(AU-2*Ah+R),Ac=E+2*Ab*(Af-E)+Ab*Ab*(AT-2*Af+E),Ag=Ah+2*Ab*(AU-Ah)+Ab*Ab*(AW-2*AU+Ah),Ae=Af+2*Ab*(AT-Af)+Ab*Ab*(AV-2*AT+Af),Aa=(1-Ab)*R+Ab*Ah,AY=(1-Ab)*E+Ab*Af,i=(1-Ab)*AU+Ab*AW,e=(1-Ab)*AT+Ab*AV;return{x:AZ,y:AX,m:{x:Ad,y:Ac},n:{x:Ag,y:Ae},start:{x:Aa,y:AY},end:{x:i,y:e}}}),AB=AR(function(R,E,i,e,Af,Ae,Ab,AY){var Ad=(Af-2*i+R)-(Ab-2*Af+i),Aa=2*(i-R)-2*(Af-i),AX=R-i,AV=(-Aa+Math.sqrt(Aa*Aa-4*Ad*AX))/2/Ad,AT=(-Aa-Math.sqrt(Aa*Aa-4*Ad*AX))/2/Ad,AZ=[E,AY],Ac=[R,Ab],AW=p(R,E,i,e,Af,Ae,Ab,AY,AV>0&&AV<1?AV:0),AU=p(R,E,i,e,Af,Ae,Ab,AY,AT>0&&AT<1?AT:0);Ac=Ac[k](AW.x,AU.x);AZ=AZ[k](AW.y,AU.y);Ad=(Ae-2*e+E)-(AY-2*Ae+e);Aa=2*(e-E)-2*(Ae-e);AX=E-e;AV=(-Aa+Math.sqrt(Aa*Aa-4*Ad*AX))/2/Ad;AT=(-Aa-Math.sqrt(Aa*Aa-4*Ad*AX))/2/Ad;AW=p(R,E,i,e,Af,Ae,Ab,AY,AV>0&&AV<1?AV:0);AU=p(R,E,i,e,Af,Ae,Ab,AY,AT>0&&AT<1?AT:0);Ac=Ac[k](AW.x,AU.x);AZ=AZ[k](AW.y,AU.y);return{min:{x:v[AO](0,Ac),y:v[AO](0,AZ)},max:{x:Q[AO](0,Ac),y:Q[AO](0,AZ)}}}),AG=AR(function(Ae,AZ){var AT=j(Ae),Aa=AZ&&j(AZ),Ab={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},E={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},AV=function(Af,Ag){var i,Ah;if(!Af){return["C",Ag.x,Ag.y,Ag.x,Ag.y,Ag.x,Ag.y]}!(Af[0] in {T:1,Q:1})&&(Ag.qx=Ag.qy=null);switch(Af[0]){case"M":Ag.X=Af[1];Ag.Y=Af[2];break;case"A":Af=["C"][k](b[AO](0,[Ag.x,Ag.y][k](Af.slice(1))));break;case"S":i=Ag.x+(Ag.x-(Ag.bx||Ag.x));Ah=Ag.y+(Ag.y-(Ag.by||Ag.y));Af=["C",i,Ah][k](Af.slice(1));break;case"T":Ag.qx=Ag.x+(Ag.x-(Ag.qx||Ag.x));Ag.qy=Ag.y+(Ag.y-(Ag.qy||Ag.y));Af=["C"][k](l(Ag.x,Ag.y,Ag.qx,Ag.qy,Af[1],Af[2]));break;case"Q":Ag.qx=Af[1];Ag.qy=Af[2];Af=["C"][k](l(Ag.x,Ag.y,Af[1],Af[2],Af[3],Af[4]));break;case"L":Af=["C"][k](J(Ag.x,Ag.y,Af[1],Af[2]));break;case"H":Af=["C"][k](J(Ag.x,Ag.y,Af[1],Ag.y));break;case"V":Af=["C"][k](J(Ag.x,Ag.y,Ag.x,Af[1]));break;case"Z":Af=["C"][k](J(Ag.x,Ag.y,Ag.X,Ag.Y));break}return Af},R=function(Af,Ag){if(Af[Ag][Z]>7){Af[Ag].shift();var Ah=Af[Ag];while(Ah[Z]){Af.splice(Ag++,0,["C"][k](Ah.splice(0,6)))}Af.splice(Ag,1);Ac=Q(AT[Z],Aa&&Aa[Z]||0)}},e=function(Aj,Ai,Ag,Af,Ah){if(Aj&&Ai&&Aj[Ah][0]=="M"&&Ai[Ah][0]!="M"){Ai.splice(Ah,0,["M",Af.x,Af.y]);Ag.bx=0;Ag.by=0;Ag.x=Aj[Ah][1];Ag.y=Aj[Ah][2];Ac=Q(AT[Z],Aa&&Aa[Z]||0)}};for(var AX=0,Ac=Q(AT[Z],Aa&&Aa[Z]||0);AX<Ac;AX++){AT[AX]=AV(AT[AX],Ab);R(AT,AX);Aa&&(Aa[AX]=AV(Aa[AX],E));Aa&&R(Aa,AX);e(AT,Aa,Ab,E,AX);e(Aa,AT,E,Ab,AX);var AW=AT[AX],Ad=Aa&&Aa[AX],AU=AW[Z],AY=Aa&&Ad[Z];Ab.x=AW[AU-2];Ab.y=AW[AU-1];Ab.bx=B(AW[AU-4])||Ab.x;Ab.by=B(AW[AU-3])||Ab.y;E.bx=Aa&&(B(Ad[AY-4])||E.x);E.by=Aa&&(B(Ad[AY-3])||E.y);E.x=Aa&&Ad[AY-2];E.y=Aa&&Ad[AY-1]}return Aa?[AT,Aa]:AT},null,d),X=AR(function(AY){var AX=[];for(var AU=0,AZ=AY[Z];AU<AZ;AU++){var E={},AW=AY[AU].match(/^([^:]*):?([\d\.]*)/);E.color=K.getRGB(AW[1]);if(E.color.error){return null}E.color=E.color.hex;AW[2]&&(E.offset=AW[2]+"%");AX[AE](E)}for(var AU=1,AZ=AX[Z]-1;AU<AZ;AU++){if(!AX[AU].offset){var R=B(AX[AU-1].offset||0),e=0;for(var AT=AU+1;AT<AZ;AT++){if(AX[AT].offset){e=AX[AT].offset;break}}if(!e){e=100;AT=AZ}e=B(e);var AV=(e-R)/(AT-AU+1);for(;AU<AT;AU++){R+=AV;AX[AU].offset=R+"%"}}}return AX}),x=function(){var e,R,AT,i,E;if(K.is(arguments[0],"string")||K.is(arguments[0],"object")){if(K.is(arguments[0],"string")){e=L.getElementById(arguments[0])}else{e=arguments[0]}if(e.tagName){if(arguments[1]==null){return{container:e,width:e.style.pixelWidth||e.offsetWidth,height:e.style.pixelHeight||e.offsetHeight}}else{return{container:e,width:arguments[1],height:arguments[2]}}}}else{if(K.is(arguments[0],AH)&&arguments[Z]>3){return{container:1,x:arguments[0],y:arguments[1],width:arguments[2],height:arguments[3]}}}},A=function(E,e){var R=this;for(var i in e){if(e[H](i)&&!(i in E)){switch(typeof e[i]){case"function":(function(AT){E[i]=E===R?AT:function(){return AT[AO](R,arguments)}})(e[i]);break;case"object":E[i]=E[i]||{};A.call(this,E[i],e[i]);break;default:E[i]=e[i];break}}}};if(K.svg){D.svgns="http://www.w3.org/2000/svg";D.xlink="http://www.w3.org/1999/xlink";var AI=function(E){return +E+(~~E===E)*0.5};var o=function(AU){for(var R=0,e=AU[Z];R<e;R++){if(AU[R][0].toLowerCase()!="a"){for(var E=1,AT=AU[R][Z];E<AT;E++){AU[R][E]=AI(AU[R][E])}}else{AU[R][6]=AI(AU[R][6]);AU[R][7]=AI(AU[R][7])}}return AU};var q=function(e,E){if(E){for(var R in E){if(E[H](R)){e[F](R,E[R])}}}else{return L.createElementNS(D.svgns,e)}};K[I]=function(){return"Your browser supports SVG.\nYou are running Rapha\u00ebl "+this.version};var AQ=function(E,i){var R=q("path");i.canvas&&i.canvas[C](R);var e=new S(R,i);e.type="path";w(e,{fill:"none",stroke:"#000",path:E});return e};var AF=function(e,Ac,E){var AZ="linear",AW=0.5,AU=0.5,Ae=e.style;Ac=(Ac+W)[r](/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,function(Af,i,Ag){AZ="radial";if(i&&Ag){AW=B(i);AU=B(Ag);if(m(AW-0.5,2)+m(AU-0.5,2)>0.25){AU=Math.sqrt(0.25-m(AW-0.5,2))+0.5}}return W});Ac=Ac[h](/\s*\-\s*/);if(AZ=="linear"){var AV=Ac.shift();AV=-B(AV);if(isNaN(AV)){return null}var AT=[0,0,Math.cos(AV*Math.PI/180),Math.sin(AV*Math.PI/180)],Ab=1/(Q(Math.abs(AT[2]),Math.abs(AT[3]))||1);AT[2]*=Ab;AT[3]*=Ab;if(AT[2]<0){AT[0]=-AT[2];AT[2]=0}if(AT[3]<0){AT[1]=-AT[3];AT[3]=0}}var AY=X(Ac);if(!AY){return null}var R=q(AZ+"Gradient");R.id="r"+(K.idGenerator++)[I](36);AZ=="radial"?q(R,{fx:AW,fy:AU}):q(R,{x1:AT[0],y1:AT[1],x2:AT[2],y2:AT[3]});E.defs[C](R);for(var AX=0,Ad=AY[Z];AX<Ad;AX++){var Aa=q("stop");q(Aa,{offset:AY[AX].offset?AY[AX].offset:!AX?"0%":"100%","stop-color":AY[AX].color||"#fff"});R[C](Aa)}q(e,{fill:"url(#"+R.id+")",opacity:1,"fill-opacity":1});Ae.fill=W;Ae.opacity=1;Ae.fillOpacity=1;return 1};var c=function(R){var E=R.getBBox();q(R.pattern,{patternTransform:K.format("translate({0},{1})",E.x,E.y)})};var w=function(Aa,Aj){var Ad={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},Af=Aa.node,Ab=Aa.attrs,AX=Aa.attr("rotation"),AU=function(Aq,Ap){Ap=Ad[(Ap+W).toLowerCase()];if(Ap){var An=Aq.attrs["stroke-width"]||"1",Al={round:An,square:An,butt:0}[Aq.attrs["stroke-linecap"]||Aj["stroke-linecap"]]||0,Ao=[];var Am=Ap[Z];while(Am--){Ao[Am]=Ap[Am]*An+((Am%2)?1:-1)*Al}q(Af,{"stroke-dasharray":Ao[T](",")})}};B(AX)&&Aa.rotate(0,true);for(var Ae in Aj){if(Aj[H](Ae)){if(!(Ae in a)){continue}var Ac=Aj[Ae];Ab[Ae]=Ac;switch(Ae){case"href":case"title":case"target":var Ah=Af.parentNode;if(Ah.tagName.toLowerCase()!="a"){var i=q("a");Ah.insertBefore(i,Af);i[C](Af);Ah=i}Ah.setAttributeNS(Aa.paper.xlink,Ae,Ac);break;case"clip-rect":var R=(Ac+W)[h](AS);if(R[Z]==4){Aa.clip&&Aa.clip.parentNode.parentNode.removeChild(Aa.clip.parentNode);var e=q("clipPath"),Ag=q("rect");e.id="r"+(K.idGenerator++)[I](36);q(Ag,{x:R[0],y:R[1],width:R[2],height:R[3]});e[C](Ag);Aa.paper.defs[C](e);q(Af,{"clip-path":"url(#"+e.id+")"});Aa.clip=Ag}if(!Ac){var Ai=L.getElementById(Af.getAttribute("clip-path")[r](/(^url\(#|\)$)/g,W));Ai&&Ai.parentNode.removeChild(Ai);q(Af,{"clip-path":W});delete Aa.clip}break;case"path":if(Ac&&Aa.type=="path"){Ab.path=o(j(Ac));q(Af,{d:Ab.path})}break;case"width":Af[F](Ae,Ac);if(Ab.fx){Ae="x";Ac=Ab.x}else{break}case"x":if(Ab.fx){Ac=-Ab.x-(Ab.width||0)}case"rx":if(Ae=="rx"&&Aa.type=="rect"){break}case"cx":Af[F](Ae,Ac);Aa.pattern&&c(Aa);break;case"height":Af[F](Ae,Ac);if(Ab.fy){Ae="y";Ac=Ab.y}else{break}case"y":if(Ab.fy){Ac=-Ab.y-(Ab.height||0)}case"ry":if(Ae=="ry"&&Aa.type=="rect"){break}case"cy":Af[F](Ae,Ac);Aa.pattern&&c(Aa);break;case"r":if(Aa.type=="rect"){q(Af,{rx:Ac,ry:Ac})}else{Af[F](Ae,Ac)}break;case"src":if(Aa.type=="image"){Af.setAttributeNS(Aa.paper.xlink,"href",Ac)}break;case"stroke-width":Af.style.strokeWidth=Ac;Af[F](Ae,Ac);if(Ab["stroke-dasharray"]){AU(Aa,Ab["stroke-dasharray"])}break;case"stroke-dasharray":AU(Aa,Ac);break;case"rotation":AX=Ac;Aa.rotate(Ac,true);break;case"translation":var AV=(Ac+W)[h](AS);Aa.translate((+AV[0]+1||2)-1,(+AV[1]+1||2)-1);break;case"scale":var AV=(Ac+W)[h](AS);Aa.scale(+AV[0]||1,+AV[1]||+AV[0]||1,+AV[2]||null,+AV[3]||null);break;case"fill":var AT=(Ac+W).match(/^url\(['"]?([^\)]+)['"]?\)$/i);if(AT){var e=q("pattern"),AZ=q("image");e.id="r"+(K.idGenerator++)[I](36);q(e,{x:0,y:0,patternUnits:"userSpaceOnUse"});q(AZ,{x:0,y:0});AZ.setAttributeNS(Aa.paper.xlink,"href",AT[1]);e[C](AZ);var Ak=L.createElement("img");Ak.style.cssText="position:absolute;left:-9999em;top-9999em";Ak.onload=function(){q(e,{width:this.offsetWidth,height:this.offsetHeight});q(AZ,{width:this.offsetWidth,height:this.offsetHeight});L.body.removeChild(this);D.safari()};L.body[C](Ak);Ak.src=AT[1];Aa.paper.defs[C](e);Af.style.fill="url(#"+e.id+")";q(Af,{fill:"url(#"+e.id+")"});Aa.pattern=e;Aa.pattern&&c(Aa);break}if(!K.getRGB(Ac).error){delete Aj.gradient;delete Ab.gradient;if(!K.is(Ab.opacity,"undefined")&&K.is(Aj.opacity,"undefined")){Af.style.opacity=Ab.opacity;q(Af,{opacity:Ab.opacity})}if(!K.is(Ab["fill-opacity"],"undefined")&&K.is(Aj["fill-opacity"],"undefined")){Af.style.fillOpacity=Ab["fill-opacity"];q(Af,{"fill-opacity":Ab["fill-opacity"]})}}else{if((Aa.type in {circle:1,ellipse:1}||(Ac+W).charAt(0)!="r")&&AF(Af,Ac,Aa.paper)){Ab.gradient=Ac;Ab.fill="none";break}}case"stroke":Af.style[Ae]=K.getRGB(Ac).hex;Af[F](Ae,K.getRGB(Ac).hex);break;case"gradient":(Aa.type in {circle:1,ellipse:1}||(Ac+W).charAt(0)!="r")&&AF(Af,Ac,Aa.paper);break;case"opacity":case"fill-opacity":if(Ab.gradient){var E=L.getElementById(Af.getAttribute("fill")[r](/^url\(#|\)$/g,W));if(E){var AW=E.getElementsByTagName("stop");AW[AW[Z]-1][F]("stop-opacity",Ac)}break}default:Ae=="font-size"&&(Ac=U(Ac,10)+"px");var AY=Ae[r](/(\-.)/g,function(Al){return Al.substring(1).toUpperCase()});Af.style[AY]=Ac;Af[F](Ae,Ac);break}}}AM(Aa,Aj);U(AX,10)&&Aa.rotate(AX,true)};var AC=1.2;var AM=function(E,AT){if(E.type!="text"||!("text" in AT||"font" in AT||"font-size" in AT||"x" in AT||"y" in AT)){return }var AY=E.attrs,R=E.node,Aa=R.firstChild?U(L.defaultView.getComputedStyle(R.firstChild,W).getPropertyValue("font-size"),10):10;if("text" in AT){while(R.firstChild){R.removeChild(R.firstChild)}var e=(AT.text+W)[h]("\n");for(var AU=0,AZ=e[Z];AU<AZ;AU++){var AW=q("tspan");AU&&q(AW,{dy:Aa*AC,x:AY.x});AW[C](L.createTextNode(e[AU]));R[C](AW)}}else{var e=R.getElementsByTagName("tspan");for(var AU=0,AZ=e[Z];AU<AZ;AU++){AU&&q(e[AU],{dy:Aa*AC,x:AY.x})}}q(R,{y:AY.y});var AV=E.getBBox(),AX=AY.y-(AV.y+AV.height/2);AX&&q(R,{y:AY.y+AX})};var S=function(R,E){var i=0,e=0;this[0]=R;this.node=R;R.raphael=this;this.paper=E;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1}};S[V].rotate=function(R,E,i){if(R==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][T](" ")}return this._.rt.deg}var e=this.getBBox();R=(R+W)[h](AS);if(R[Z]-1){E=B(R[1]);i=B(R[2])}R=B(R[0]);if(E!=null){this._.rt.deg=R}else{this._.rt.deg+=R}(i==null)&&(E=null);this._.rt.cx=E;this._.rt.cy=i;E=E==null?e.x+e.width/2:E;i=i==null?e.y+e.height/2:i;if(this._.rt.deg){this.transformations[0]=K.format("rotate({0} {1} {2})",this._.rt.deg,E,i);this.clip&&q(this.clip,{transform:K.format("rotate({0} {1} {2})",-this._.rt.deg,E,i)})}else{this.transformations[0]=W;this.clip&&q(this.clip,{transform:W})}q(this.node,{transform:this.transformations[T](" ")});return this};S[V].hide=function(){this.node.style.display="none";return this};S[V].show=function(){this.node.style.display="block";return this};S[V].remove=function(){this.node.parentNode.removeChild(this.node);for(var E in this){delete this[E]}};S[V].getBBox=function(){if(this.type=="path"){return t(this.attrs.path)}if(this.node.style.display=="none"){this.show();var R=true}var AW={};try{AW=this.node.getBBox()}catch(AU){}finally{AW=AW||{}}if(this.type=="text"){AW={x:AW.x,y:Infinity,width:0,height:0};for(var E=0,AT=this.node.getNumberOfChars();E<AT;E++){var AV=this.node.getExtentOfChar(E);(AV.y<AW.y)&&(AW.y=AV.y);(AV.y+AV.height-AW.y>AW.height)&&(AW.height=AV.y+AV.height-AW.y);(AV.x+AV.width-AW.x>AW.width)&&(AW.width=AV.x+AV.width-AW.x)}}R&&this.hide();return AW};S[V].attr=function(){if(arguments[Z]==1&&K.is(arguments[0],"string")){if(arguments[0]=="translation"){return this.translate()}if(arguments[0]=="rotation"){return this.rotate()}if(arguments[0]=="scale"){return this.scale()}return this.attrs[arguments[0]]}if(arguments[Z]==1&&K.is(arguments[0],"array")){var E={};for(var R in arguments[0]){if(arguments[0][H](R)){E[arguments[0][R]]=this.attrs[arguments[0][R]]}}return E}if(arguments[Z]==2){var e={};e[arguments[0]]=arguments[1];w(this,e)}else{if(arguments[Z]==1&&K.is(arguments[0],"object")){w(this,arguments[0])}}return this};S[V].toFront=function(){this.node.parentNode[C](this.node);return this};S[V].toBack=function(){if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild)}return this};S[V].insertAfter=function(E){if(E.node.nextSibling){E.node.parentNode.insertBefore(this.node,E.node.nextSibling)}else{E.node.parentNode[C](this.node)}return this};S[V].insertBefore=function(E){var R=E.node;R.parentNode.insertBefore(this.node,R);return this};var s=function(R,E,AU,AT){E=AI(E);AU=AI(AU);var i=q("circle");R.canvas&&R.canvas[C](i);var e=new S(i,R);e.attrs={cx:E,cy:AU,r:AT,fill:"none",stroke:"#000"};e.type="circle";q(i,e.attrs);return e};var AA=function(e,E,AW,R,AU,AV){E=AI(E);AW=AI(AW);var AT=q("rect");e.canvas&&e.canvas[C](AT);var i=new S(AT,e);i.attrs={x:E,y:AW,width:R,height:AU,r:AV||0,rx:AV||0,ry:AV||0,fill:"none",stroke:"#000"};i.type="rect";q(AT,i.attrs);return i};var M=function(R,E,AV,AU,AT){E=AI(E);AV=AI(AV);var i=q("ellipse");R.canvas&&R.canvas[C](i);var e=new S(i,R);e.attrs={cx:E,cy:AV,rx:AU,ry:AT,fill:"none",stroke:"#000"};e.type="ellipse";q(i,e.attrs);return e};var Y=function(e,AV,E,AW,R,AU){var AT=q("image");q(AT,{x:E,y:AW,width:R,height:AU,preserveAspectRatio:"none"});AT.setAttributeNS(e.xlink,"href",AV);e.canvas&&e.canvas[C](AT);var i=new S(AT,e);i.attrs={x:E,y:AW,width:R,height:AU,src:AV};i.type="image";return i};var z=function(R,E,AU,AT){var i=q("text");q(i,{x:E,y:AU,"text-anchor":"middle"});R.canvas&&R.canvas[C](i);var e=new S(i,R);e.attrs={x:E,y:AU,"text-anchor":"middle",text:AT,font:a.font,stroke:"none",fill:"#000"};e.type="text";w(e,e.attrs);return e};var u=function(R,E){this.width=R||this.width;this.height=E||this.height;this.canvas[F]("width",this.width);this.canvas[F]("height",this.height);return this};var P=function(){var i=x[AO](null,arguments),e=i&&i.container,R=i.x,AW=i.y,AT=i.width,E=i.height;if(!e){throw new Error("SVG container not found.")}D.canvas=q("svg");var AV=D.canvas;D.width=AT||512;D.height=E||342;AV[F]("width",D.width);AV[F]("height",D.height);if(e==1){AV.style.cssText="position:absolute;left:"+R+"px;top:"+AW+"px";L.body[C](AV)}else{if(e.firstChild){e.insertBefore(AV,e.firstChild)}else{e[C](AV)}}e={canvas:AV};for(var AU in D){if(D[H](AU)){e[AU]=D[AU]}}A.call(e,e,K.fn);e.clear();e.raphael=K;return e};D.clear=function(){var E=this.canvas;while(E.firstChild){E.removeChild(E.firstChild)}(this.desc=q("desc"))[C](L.createTextNode("Created with Rapha\u00ebl"));E[C](this.desc);E[C](this.defs=q("defs"))};D.remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var E in this){delete this[E]}}}if(K.vml){var n=function(Ad){var Aa=/[ahqtv]/ig,AV=j;(Ad+W).match(Aa)&&(AV=AG);Aa=/[clmz]/g;if(AV==j&&!(Ad+W).match(Aa)){var R={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},AT=/([clmz]),?([^clmz]*)/gi,AU=/-?[^,\s-]+/g;var AZ=(Ad+W)[r](AT,function(Ae,Ag,i){var Af=[];i[r](AU,function(Ah){Af[AE](AI(Ah))});return R[Ag]+Af});return AZ}var Ab=AV(Ad),e,AZ=[],E;for(var AX=0,Ac=Ab[Z];AX<Ac;AX++){e=Ab[AX];E=(Ab[AX][0]+W).toLowerCase();E=="z"&&(E="x");for(var AW=1,AY=e[Z];AW<AY;AW++){E+=AI(e[AW])+(AW!=AY-1?",":W)}AZ[AE](E)}return AZ[T](" ")};K[I]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl "+this.version};var AQ=function(E,AU){var i=AP("group");i.style.cssText="position:absolute;left:0;top:0;width:"+AU.width+"px;height:"+AU.height+"px";i.coordsize=AU.coordsize;i.coordorigin=AU.coordorigin;var e=AP("shape"),R=e.style;R.width=AU.width+"px";R.height=AU.height+"px";e.coordsize=this.coordsize;e.coordorigin=this.coordorigin;i[C](e);var AT=new S(e,i,AU);AT.isAbsolute=true;AT.type="path";AT.path=[];AT.Path=W;E&&w(AT,{fill:"none",stroke:"#000",path:E});AU.canvas[C](i);return AT};var w=function(AY,Ac){AY.attrs=AY.attrs||{};var Aa=AY.node,Ad=AY.attrs,AV=Aa.style,i,Ah=AY;for(var AW in Ac){if(Ac[H](AW)){Ad[AW]=Ac[AW]}}Ac.href&&(Aa.href=Ac.href);Ac.title&&(Aa.title=Ac.title);Ac.target&&(Aa.target=Ac.target);if(Ac.path&&AY.type=="path"){Ad.path=Ac.path;Aa.path=n(Ad.path)}if(Ac.rotation!=null){AY.rotate(Ac.rotation,true)}if(Ac.translation){i=(Ac.translation+W)[h](AS);AY.translate(i[0],i[1])}if(Ac.scale){i=(Ac.scale+W)[h](AS);AY.scale(+i[0]||1,+i[1]||+i[0]||1,+i[2]||null,+i[3]||null)}if("clip-rect" in Ac){var E=(Ac["clip-rect"]+W)[h](AS);if(E[Z]==4){E[2]=+E[2]+(+E[0]);E[3]=+E[3]+(+E[1]);var AX=Aa.clipRect||L.createElement("div"),Ag=AX.style,AU=Aa.parentNode;Ag.clip=K.format("rect({1}px {2}px {3}px {0}px)",E);if(!Aa.clipRect){Ag.position="absolute";Ag.top=0;Ag.left=0;Ag.width=AY.paper.width+"px";Ag.height=AY.paper.height+"px";AU.parentNode.insertBefore(AX,AU);AX[C](AU);Aa.clipRect=AX}}if(!Ac["clip-rect"]){Aa.clipRect&&(Aa.clipRect.style.clip=W)}}if(AY.type=="image"&&Ac.src){Aa.src=Ac.src}if(AY.type=="image"&&Ac.opacity){Aa.filterOpacity=" progid:DXImageTransform.Microsoft.Alpha(opacity="+(Ac.opacity*100)+")";AV.filter=(Aa.filterMatrix||W)+(Aa.filterOpacity||W)}Ac.font&&(AV.font=Ac.font);Ac["font-family"]&&(AV.fontFamily='"'+Ac["font-family"][h](",")[0][r](/^['"]+|['"]+$/g,W)+'"');Ac["font-size"]&&(AV.fontSize=Ac["font-size"]);Ac["font-weight"]&&(AV.fontWeight=Ac["font-weight"]);Ac["font-style"]&&(AV.fontStyle=Ac["font-style"]);if(Ac.opacity!=null||Ac["stroke-width"]!=null||Ac.fill!=null||Ac.stroke!=null||Ac["stroke-width"]!=null||Ac["stroke-opacity"]!=null||Ac["fill-opacity"]!=null||Ac["stroke-dasharray"]!=null||Ac["stroke-miterlimit"]!=null||Ac["stroke-linejoin"]!=null||Ac["stroke-linecap"]!=null){Aa=AY.shape||Aa;var Ab=(Aa.getElementsByTagName("fill")&&Aa.getElementsByTagName("fill")[0]),Ae=false;!Ab&&(Ae=Ab=AP("fill"));if("fill-opacity" in Ac||"opacity" in Ac){var R=((+Ad["fill-opacity"]+1||2)-1)*((+Ad.opacity+1||2)-1);R<0&&(R=0);R>1&&(R=1);Ab.opacity=R}Ac.fill&&(Ab.on=true);if(Ab.on==null||Ac.fill=="none"){Ab.on=false}if(Ab.on&&Ac.fill){var e=Ac.fill.match(/^url\(([^\)]+)\)$/i);if(e){Ab.src=e[1];Ab.type="tile"}else{Ab.color=K.getRGB(Ac.fill).hex;Ab.src=W;Ab.type="solid";if(K.getRGB(Ac.fill).error&&(Ah.type in {circle:1,ellipse:1}||(Ac.fill+W).charAt(0)!="r")&&AF(Ah,Ac.fill)){Ad.fill="none";Ad.gradient=Ac.fill}}}Ae&&Aa[C](Ab);var AT=(Aa.getElementsByTagName("stroke")&&Aa.getElementsByTagName("stroke")[0]),Af=false;!AT&&(Af=AT=AP("stroke"));if((Ac.stroke&&Ac.stroke!="none")||Ac["stroke-width"]||Ac["stroke-opacity"]!=null||Ac["stroke-dasharray"]||Ac["stroke-miterlimit"]||Ac["stroke-linejoin"]||Ac["stroke-linecap"]){AT.on=true}(Ac.stroke=="none"||AT.on==null||Ac.stroke==0||Ac["stroke-width"]==0)&&(AT.on=false);AT.on&&Ac.stroke&&(AT.color=K.getRGB(Ac.stroke).hex);var R=((+Ad["stroke-opacity"]+1||2)-1)*((+Ad.opacity+1||2)-1);R<0&&(R=0);R>1&&(R=1);AT.opacity=R;Ac["stroke-linejoin"]&&(AT.joinstyle=Ac["stroke-linejoin"]||"miter");AT.miterlimit=Ac["stroke-miterlimit"]||8;Ac["stroke-linecap"]&&(AT.endcap={butt:"flat",square:"square",round:"round"}[Ac["stroke-linecap"]]||"miter");Ac["stroke-width"]&&(AT.weight=(B(Ac["stroke-width"])||1)*12/16);if(Ac["stroke-dasharray"]){var AZ={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};AT.dashstyle=AZ[Ac["stroke-dasharray"]]||W}Af&&Aa[C](AT)}if(Ah.type=="text"){var AV=Ah.paper.span.style;Ad.font&&(AV.font=Ad.font);Ad["font-family"]&&(AV.fontFamily=Ad["font-family"]);Ad["font-size"]&&(AV.fontSize=Ad["font-size"]);Ad["font-weight"]&&(AV.fontWeight=Ad["font-weight"]);Ad["font-style"]&&(AV.fontStyle=Ad["font-style"]);Ah.node.string&&(Ah.paper.span.innerHTML=(Ah.node.string+W)[r](/</g,"&#60;")[r](/&/g,"&#38;")[r](/\n/g,"<br>"));Ah.W=Ad.w=Ah.paper.span.offsetWidth;Ah.H=Ad.h=Ah.paper.span.offsetHeight;Ah.X=Ad.x;Ah.Y=Ad.y+AI(Ah.H/2);switch(Ad["text-anchor"]){case"start":Ah.node.style["v-text-align"]="left";Ah.bbx=AI(Ah.W/2);break;case"end":Ah.node.style["v-text-align"]="right";Ah.bbx=-AI(Ah.W/2);break;default:Ah.node.style["v-text-align"]="center";break}}};var AF=function(E,AW){E.attrs=E.attrs||{};var AX=E.attrs,AZ=E.node.getElementsByTagName("fill"),AU="linear",AV=".5 .5";E.attrs.gradient=AW;AW=(AW+W)[r](/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,function(Ab,Ac,i){AU="radial";if(Ac&&i){Ac=B(Ac);i=B(i);if(m(Ac-0.5,2)+m(i-0.5,2)>0.25){i=Math.sqrt(0.25-m(Ac-0.5,2))+0.5}AV=Ac+" "+i}return W});AW=AW[h](/\s*\-\s*/);if(AU=="linear"){var R=AW.shift();R=-B(R);if(isNaN(R)){return null}}var AT=X(AW);if(!AT){return null}E=E.shape||E.node;AZ=AZ[0]||AP("fill");if(AT[Z]){AZ.on=true;AZ.method="none";AZ.type=(AU=="radial")?"gradientradial":"gradient";AZ.color=AT[0].color;AZ.color2=AT[AT[Z]-1].color;var Aa=[];for(var e=0,AY=AT[Z];e<AY;e++){AT[e].offset&&Aa[AE](AT[e].offset+" "+AT[e].color)}if(Aa[Z]&&AZ.colors){AZ.colors.value=Aa[T](",")}else{AZ.colors.value="0% "+AZ.color}if(AU=="radial"){AZ.focus="100%";AZ.focussize=AV;AZ.focusposition=AV}else{AZ.angle=(270-R)%360}}return 1};var S=function(AT,AV,E){var AU=0,e=0,R=0,i=1;this[0]=AT;this.node=AT;AT.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=AV;this.paper=E;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1}};S[V].rotate=function(R,E,e){if(R==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][T](" ")}return this._.rt.deg}R=(R+W)[h](AS);if(R[Z]-1){E=B(R[1]);e=B(R[2])}R=B(R[0]);if(E!=null){this._.rt.deg=R}else{this._.rt.deg+=R}e==null&&(E=null);this._.rt.cx=E;this._.rt.cy=e;this.setBox(this.attrs,E,e);this.Group.style.rotation=this._.rt.deg;return this};S[V].setBox=function(AU,AV,AT){var R=this.Group.style,AW=(this.shape&&this.shape.style)||this.node.style;AU=AU||{};for(var AX in AU){if(AU[H](AX)){this.attrs[AX]=AU[AX]}}AV=AV||this._.rt.cx;AT=AT||this._.rt.cy;var Aa=this.attrs,Ad,Ac,Ae,AZ;switch(this.type){case"circle":Ad=Aa.cx-Aa.r;Ac=Aa.cy-Aa.r;Ae=AZ=Aa.r*2;break;case"ellipse":Ad=Aa.cx-Aa.rx;Ac=Aa.cy-Aa.ry;Ae=Aa.rx*2;AZ=Aa.ry*2;break;case"rect":case"image":Ad=+Aa.x;Ac=+Aa.y;Ae=Aa.width||0;AZ=Aa.height||0;break;case"text":this.textpath.v=["m",AI(Aa.x),", ",AI(Aa.y-2),"l",AI(Aa.x)+1,", ",AI(Aa.y-2)][T](W);Ad=Aa.x-AI(this.W/2);Ac=Aa.y-this.H/2;Ae=this.W;AZ=this.H;break;case"path":if(!this.attrs.path){Ad=0;Ac=0;Ae=this.paper.width;AZ=this.paper.height}else{var AY=t(this.attrs.path);Ad=AY.x;Ac=AY.y;Ae=AY.width;AZ=AY.height}break;default:Ad=0;Ac=0;Ae=this.paper.width;AZ=this.paper.height;break}AV=(AV==null)?Ad+Ae/2:AV;AT=(AT==null)?Ac+AZ/2:AT;var e=AV-this.paper.width/2,Ab=AT-this.paper.height/2;if(this.type=="path"||this.type=="text"){(R.left!=e+"px")&&(R.left=e+"px");(R.top!=Ab+"px")&&(R.top=Ab+"px");this.X=this.type=="text"?Ad:-e;this.Y=this.type=="text"?Ac:-Ab;this.W=Ae;this.H=AZ;(AW.left!=-e+"px")&&(AW.left=-e+"px");(AW.top!=-Ab+"px")&&(AW.top=-Ab+"px")}else{(R.left!=e+"px")&&(R.left=e+"px");(R.top!=Ab+"px")&&(R.top=Ab+"px");this.X=Ad;this.Y=Ac;this.W=Ae;this.H=AZ;(R.width!=this.paper.width+"px")&&(R.width=this.paper.width+"px");(R.height!=this.paper.height+"px")&&(R.height=this.paper.height+"px");(AW.left!=Ad-e+"px")&&(AW.left=Ad-e+"px");(AW.top!=Ac-Ab+"px")&&(AW.top=Ac-Ab+"px");(AW.width!=Ae+"px")&&(AW.width=Ae+"px");(AW.height!=AZ+"px")&&(AW.height=AZ+"px");var Af=(+AU.r||0)/(v(Ae,AZ));if(this.type=="rect"&&this.arcsize!=Af&&(Af||this.arcsize)){var E=AP(Af?"roundrect":"rect");E.arcsize=Af;this.Group[C](E);this.node.parentNode.removeChild(this.node);this.node=E;this.arcsize=Af;w(this,this.attrs);this.setBox(this.attrs)}}};S[V].hide=function(){this.Group.style.display="none";return this};S[V].show=function(){this.Group.style.display="block";return this};S[V].getBBox=function(){if(this.type=="path"){return t(this.attrs.path)}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};S[V].remove=function(){this.node.parentNode.removeChild(this[0]);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var E in this){delete this[E]}};S[V].attr=function(){if(arguments[Z]==1&&K.is(arguments[0],"string")){if(arguments[0]=="translation"){return this.translate()}if(arguments[0]=="rotation"){return this.rotate()}if(arguments[0]=="scale"){return this.scale()}return this.attrs[arguments[0]]}if(this.attrs&&arguments[Z]==1&&K.is(arguments[0],"array")){var E={};for(var R=0,e=arguments[0][Z];R<e;R++){E[arguments[0][R]]=this.attrs[arguments[0][R]]}return E}var AT;if(arguments[Z]==2){AT={};AT[arguments[0]]=arguments[1]}if(arguments[Z]==1&&K.is(arguments[0],"object")){AT=arguments[0]}if(AT){if(AT.gradient&&(this.type in {circle:1,ellipse:1}||(AT.gradient+W).charAt(0)!="r")){AF(this,AT.gradient)}if(AT.text&&this.type=="text"){this.node.string=AT.text}w(this,AT);this.setBox(this.attrs)}return this};S[V].toFront=function(){this.Group.parentNode[C](this.Group);return this};S[V].toBack=function(){if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild)}return this};S[V].insertAfter=function(E){if(E.Group.nextSibling){E.Group.parentNode.insertBefore(this.Group,E.Group.nextSibling)}else{E.Group.parentNode[C](this.Group)}return this};S[V].insertBefore=function(E){E.Group.parentNode.insertBefore(this.Group,E.Group);return this};var s=function(R,E,AW,AU){var AT=AP("group"),AV=AP("oval"),e=AV.style;AT.style.cssText="position:absolute;left:0;top:0;width:"+R.width+"px;height:"+R.height+"px";AT.coordsize=R.coordsize;AT.coordorigin=R.coordorigin;AT[C](AV);var i=new S(AV,AT,R);i.type="circle";w(i,{stroke:"#000",fill:"none"});i.attrs.cx=E;i.attrs.cy=AW;i.attrs.r=AU;i.setBox({x:E-AU,y:AW-AU,width:AU*2,height:AU*2});R.canvas[C](AT);return i};var AA=function(R,AW,AV,AX,i,E){var AT=AP("group"),e=AP(E?"roundrect":"rect"),AY=(+E||0)/(v(AX,i));e.arcsize=AY;AT.style.cssText="position:absolute;left:0;top:0;width:"+R.width+"px;height:"+R.height+"px";AT.coordsize=R.coordsize;AT.coordorigin=R.coordorigin;AT[C](e);var AU=new S(e,AT,R);AU.type="rect";w(AU,{stroke:"#000"});AU.arcsize=AY;AU.setBox({x:AW,y:AV,width:AX,height:i,r:+E});R.canvas[C](AT);return AU};var M=function(E,AX,AW,e,R){var AT=AP("group"),i=AP("oval"),AV=i.style;AT.style.cssText="position:absolute;left:0;top:0;width:"+E.width+"px;height:"+E.height+"px";AT.coordsize=E.coordsize;AT.coordorigin=E.coordorigin;AT[C](i);var AU=new S(i,AT,E);AU.type="ellipse";w(AU,{stroke:"#000"});AU.attrs.cx=AX;AU.attrs.cy=AW;AU.attrs.rx=e;AU.attrs.ry=R;AU.setBox({x:AX-e,y:AW-R,width:e*2,height:R*2});E.canvas[C](AT);return AU};var Y=function(R,E,AX,AW,AY,i){var AT=AP("group"),e=AP("image"),AV=e.style;AT.style.cssText="position:absolute;left:0;top:0;width:"+R.width+"px;height:"+R.height+"px";AT.coordsize=R.coordsize;AT.coordorigin=R.coordorigin;e.src=E;AT[C](e);var AU=new S(e,AT,R);AU.type="image";AU.attrs.src=E;AU.attrs.x=AX;AU.attrs.y=AW;AU.attrs.w=AY;AU.attrs.h=i;AU.setBox({x:AX,y:AW,width:AY,height:i});R.canvas[C](AT);return AU};var z=function(R,AX,AW,AY){var AT=AP("group"),i=AP("shape"),AV=i.style,AZ=AP("path"),E=AZ.style,e=AP("textpath");AT.style.cssText="position:absolute;left:0;top:0;width:"+R.width+"px;height:"+R.height+"px";AT.coordsize=R.coordsize;AT.coordorigin=R.coordorigin;AZ.v=K.format("m{0},{1}l{2},{1}",AI(AX),AI(AW),AI(AX)+1);AZ.textpathok=true;AV.width=R.width;AV.height=R.height;e.string=AY;e.on=true;i[C](e);i[C](AZ);AT[C](i);var AU=new S(e,AT,R);AU.shape=i;AU.textpath=AZ;AU.type="text";AU.attrs.text=AY;AU.attrs.x=AX;AU.attrs.y=AW;AU.attrs.w=1;AU.attrs.h=1;w(AU,{font:a.font,stroke:"none",fill:"#000"});AU.setBox();R.canvas[C](AT);return AU};var u=function(e,E){var R=this.canvas.style;this.width=B(e||this.width);this.height=B(E||this.height);R.width=this.width+"px";R.height=this.height+"px";R.clip="rect(0 "+this.width+"px "+this.height+"px 0)";this.coordsize=this.width+" "+this.height;return this};L.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!L.namespaces.rvml&&L.namespaces.add("rvml","urn:schemas-microsoft-com:vml");var AP=function(E){return L.createElement("<rvml:"+E+' class="rvml">')}}catch(AN){var AP=function(E){return L.createElement("<"+E+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}var P=function(){var i=x[AO](null,arguments),R=i.container,AY=i.height,AZ,e=i.width,AX=i.x,AW=i.y;if(!R){throw new Error("VML container not found.")}var AU={},AV=AU.canvas=L.createElement("div"),AT=AV.style;e=B(e)||512;AY=B(AY)||342;AU.width=e;AU.height=AY;AU.coordsize=e+" "+AY;AU.coordorigin="0 0";AU.span=L.createElement("span");AU.span.style.cssText="position:absolute;left:-9999px;top:-9999px;padding:0;margin:0;line-height:1;display:inline;";AV[C](AU.span);AT.cssText=K.format("width:{0}px;height:{1}px;position:absolute;clip:rect(0 {0}px {1}px 0)",e,AY);if(R==1){L.body[C](AV);AT.left=AX+"px";AT.top=AW+"px";R={style:{width:e,height:AY}}}else{R.style.width=e;R.style.height=AY;if(R.firstChild){R.insertBefore(AV,R.firstChild)}else{R[C](AV)}}for(var E in D){if(D[H](E)){AU[E]=D[E]}}A.call(AU,AU,K.fn);AU.clear=function(){while(AV.firstChild){AV.removeChild(AV.firstChild)}};AU.raphael=K;return AU};D.remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var E in this){delete this[E]}}}if({"Apple Computer, Inc.":1,"Google Inc.":1}[navigator.vendor]){D.safari=function(){var E=this.rect(-99,-99,this.width+99,this.height+99);setTimeout(function(){E.remove()})}}else{D.safari=function(){}}var N=(function(){if(L.addEventListener){return function(AT,e,R,E){var i=function(AU){return R.call(E,AU)};AT.addEventListener(e,i,false);return function(){AT.removeEventListener(e,i,false);return true}}}else{if(L.attachEvent){return function(AU,i,e,R){var AT=function(AV){return e.call(R,AV||AD.event)};AU.attachEvent("on"+i,AT);var E=function(){AU.detachEvent("on"+i,AT);return true};if(i=="mouseover"){AU.attachEvent("onmouseenter",AT);return function(){AU.detachEvent("onmouseenter",AT);return E()}}else{if(i=="mouseout"){AU.attachEvent("onmouseleave",AT);return function(){AU.detachEvent("onmouseleave",AT);return E()}}}return E}}}})();for(var AK=g[Z];AK--;){(function(E){S[V][E]=function(R){if(K.is(R,"function")){this.events=this.events||{};this.events[E]=this.events[E]||{};this.events[E][R]=this.events[E][R]||[];this.events[E][R][AE](N(this.shape||this.node,E,R,this))}return this};S[V]["un"+E]=function(R){this.events&&this.events[E]&&this.events[E][R]&&this.events[E][R][Z]&&this.events[E][R].shift()()&&!this.events[E][R][Z]&&delete this.events[E][R]}})(g[AK])}D.circle=function(E,e,R){return s(this,E||0,e||0,R||0)};D.rect=function(E,AT,R,e,i){return AA(this,E||0,AT||0,R||0,e||0,i||0)};D.ellipse=function(E,i,e,R){return M(this,E||0,i||0,e||0,R||0)};D.path=function(E){E&&!K.is(E,"string")&&!K.is(E[0],"array")&&(E+=W);return AQ(K.format[AO](K,arguments),this)};D.image=function(i,E,AT,R,e){return Y(this,i||"about:blank",E||0,AT||0,R||0,e||0)};D.text=function(E,e,R){return z(this,E||0,e||0,R||W)};D.set=function(E){arguments[Z]>1&&(E=Array[V].splice.call(arguments,0,arguments[Z]));return new O(E)};D.setSize=u;S[V].stop=function(){clearTimeout(this.animation_in_progress);return this};S[V].scale=function(Ad,Ac,e,R){if(Ad==null&&Ac==null){return{x:this._.sx,y:this._.sy,toString:function(){return this.x+" "+this.y}}}Ac=Ac||Ad;!+Ac&&(Ac=Ad);var Ah,Af,Ag,Ae,At=this.attrs;if(Ad!=0){var Aa=this.getBBox(),AX=Aa.x+Aa.width/2,AU=Aa.y+Aa.height/2,As=Ad/this._.sx,Ar=Ac/this._.sy;e=(+e||e==0)?e:AX;R=(+R||R==0)?R:AU;var AZ=~~(Ad/Math.abs(Ad)),AW=~~(Ac/Math.abs(Ac)),Ak=this.node.style,Av=e+(AX-e)*AZ*As,Au=R+(AU-R)*AW*Ar;switch(this.type){case"rect":case"image":var AY=At.width*AZ*As,Aj=At.height*AW*Ar,Ab=At.r*v(As,Ar),AV=Av-AY/2,AT=Au-Aj/2;this.attr({width:AY,height:Aj,x:AV,y:AT,r:Ab});break;case"circle":case"ellipse":this.attr({rx:At.rx*As,ry:At.ry*Ar,r:At.r*v(As,Ar),cx:Av,cy:Au});break;case"path":var Am=G(At.path),An=true;for(var Ap=0,Ai=Am[Z];Ap<Ai;Ap++){var Al=Am[Ap];if(Al[0].toUpperCase()=="M"&&An){continue}else{An=false}if(K.svg&&Al[0].toUpperCase()=="A"){Al[Am[Ap][Z]-2]*=As;Al[Am[Ap][Z]-1]*=Ar;Al[1]*=As;Al[2]*=Ar;Al[5]=+(AZ+AW?!!+Al[5]:!+Al[5])}else{for(var Ao=1,Aq=Al[Z];Ao<Aq;Ao++){Al[Ao]*=(Ao%2)?As:Ar}}}var E=t(Am),Ah=Av-E.x-E.width/2,Af=Au-E.y-E.height/2;Am[0][1]+=Ah;Am[0][2]+=Af;this.attr({path:Am});break}if(this.type in {text:1,image:1}&&(AZ!=1||AW!=1)){if(this.transformations){this.transformations[2]="scale("[k](AZ,",",AW,")");this.node[F]("transform",this.transformations[T](" "));Ah=(AZ==-1)?-At.x-(AY||0):At.x;Af=(AW==-1)?-At.y-(Aj||0):At.y;this.attr({x:Ah,y:Af});At.fx=AZ-1;At.fy=AW-1}else{this.node.filterMatrix=" progid:DXImageTransform.Microsoft.Matrix(M11="[k](AZ,", M12=0, M21=0, M22=",AW,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");Ak.filter=(this.node.filterMatrix||W)+(this.node.filterOpacity||W)}}else{if(this.transformations){this.transformations[2]=W;this.node[F]("transform",this.transformations[T](" "));At.fx=0;At.fy=0}else{this.node.filterMatrix=W;Ak.filter=(this.node.filterMatrix||W)+(this.node.filterOpacity||W)}}At.scale=[Ad,Ac,e,R][T](" ");this._.sx=Ad;this._.sy=Ac}return this};K.easing_formulas={linear:function(E){return E},"<":function(E){return m(E,3)},">":function(E){return m(E-1,3)+1},"<>":function(E){E=E*2;if(E<1){return m(E,3)/2}E-=2;return(m(E,3)+2)/2},backIn:function(R){var E=1.70158;return R*R*((E+1)*R-E)},backOut:function(R){R=R-1;var E=1.70158;return R*R*((E+1)*R+E)+1},elastic:function(e){if(e==0||e==1){return e}var R=0.3,E=R/4;return m(2,-10*e)*Math.sin((e-E)*(2*Math.PI)/R)+1},bounce:function(i){var R=7.5625,e=2.75,E;if(i<(1/e)){E=R*i*i}else{if(i<(2/e)){i-=(1.5/e);E=R*i*i+0.75}else{if(i<(2.5/e)){i-=(2.25/e);E=R*i*i+0.9375}else{i-=(2.625/e);E=R*i*i+0.984375}}}return E}};S[V].animate=function(Al,Ac,Ab,AT){clearTimeout(this.animation_in_progress);if(K.is(Ab,"function")||!Ab){AT=Ab||null}var Af={},R={},AZ={},AY={x:0,y:0};for(var Ad in Al){if(Al[H](Ad)){if(Ad in f){Af[Ad]=this.attr(Ad);(Af[Ad]==null)&&(Af[Ad]=a[Ad]);R[Ad]=Al[Ad];switch(f[Ad]){case"number":AZ[Ad]=(R[Ad]-Af[Ad])/Ac;break;case"colour":Af[Ad]=K.getRGB(Af[Ad]);var Ae=K.getRGB(R[Ad]);AZ[Ad]={r:(Ae.r-Af[Ad].r)/Ac,g:(Ae.g-Af[Ad].g)/Ac,b:(Ae.b-Af[Ad].b)/Ac};break;case"path":var AU=AG(Af[Ad],R[Ad]);Af[Ad]=AU[0];R[Ad]=AU[1];AZ[Ad]=[];for(var Ah=0,AX=Af[Ad][Z];Ah<AX;Ah++){AZ[Ad][Ah]=[0];for(var Ag=1,Aj=Af[Ad][Ah][Z];Ag<Aj;Ag++){AZ[Ad][Ah][Ag]=(R[Ad][Ah][Ag]-Af[Ad][Ah][Ag])/Ac}}break;case"csv":var E=(Al[Ad]+W)[h](AS),AW=(Af[Ad]+W)[h](AS);switch(Ad){case"translation":Af[Ad]=[0,0];AZ[Ad]=[E[0]/Ac,E[1]/Ac];break;case"rotation":Af[Ad]=(AW[1]==E[1]&&AW[2]==E[2])?AW:[0,E[1],E[2]];AZ[Ad]=[(E[0]-Af[Ad][0])/Ac,0,0];break;case"scale":Al[Ad]=E;Af[Ad]=(Af[Ad]+W)[h](AS);AZ[Ad]=[(E[0]-Af[Ad][0])/Ac,(E[1]-Af[Ad][1])/Ac,0,0];break;case"clip-rect":Af[Ad]=(Af[Ad]+W)[h](AS);AZ[Ad]=[];var Ah=4;while(Ah--){AZ[Ad][Ah]=(E[Ah]-Af[Ad][Ah])/Ac}break}R[Ad]=E}}}}var e=+new Date,Aa=0,Ak=function(i){return i>255?255:i},AV=this;(function Ai(){var An=new Date-e,Av={},Am;if(An<Ac){var At=K.easing_formulas[Ab]?K.easing_formulas[Ab](An/Ac):An/Ac;for(var Ar in Af){if(Af[H](Ar)){switch(f[Ar]){case"number":Am=+Af[Ar]+At*Ac*AZ[Ar];break;case"colour":Am="rgb("+[Ak(AI(Af[Ar].r+At*Ac*AZ[Ar].r)),Ak(AI(Af[Ar].g+At*Ac*AZ[Ar].g)),Ak(AI(Af[Ar].b+At*Ac*AZ[Ar].b))][T](",")+")";break;case"path":Am=[];for(var Ap=0,Aw=Af[Ar][Z];Ap<Aw;Ap++){Am[Ap]=[Af[Ar][Ap][0]];for(var Ao=1,Aq=Af[Ar][Ap][Z];Ao<Aq;Ao++){Am[Ap][Ao]=+Af[Ar][Ap][Ao]+At*Ac*AZ[Ar][Ap][Ao]}Am[Ap]=Am[Ap][T](" ")}Am=Am[T](" ");break;case"csv":switch(Ar){case"translation":var Au=AZ[Ar][0]*(An-Aa),As=AZ[Ar][1]*(An-Aa);AY.x+=Au;AY.y+=As;Am=Au+" "+As;break;case"rotation":Am=+Af[Ar][0]+At*Ac*AZ[Ar][0];Af[Ar][1]&&(Am+=","+Af[Ar][1]+","+Af[Ar][2]);break;case"scale":Am=[+Af[Ar][0]+At*Ac*AZ[Ar][0],+Af[Ar][1]+At*Ac*AZ[Ar][1],(2 in Al[Ar]?Al[Ar][2]:W),(3 in Al[Ar]?Al[Ar][3]:W)][T](" ");break;case"clip-rect":Am=[];var Ap=4;while(Ap--){Am[Ap]=+Af[Ar][Ap]+At*Ac*AZ[Ar][Ap]}break}break}Av[Ar]=Am+W}}AV.attr(Av);AV.animation_in_progress=setTimeout(Ai);K.svg&&D.safari()}else{(AY.x||AY.y)&&AV.translate(-AY.x,-AY.y);Al.scale&&(Al.scale=Al.scale+W);AV.attr(Al);clearTimeout(AV.animation_in_progress);K.svg&&D.safari();(K.is(AT,"function"))&&AT.call(AV)}Aa=An})();return this};S[V].translate=function(E,e){if(E==null){return{x:this._.tx,y:this._.ty}}this._.tx+=+E;this._.ty+=+e;switch(this.type){case"circle":case"ellipse":this.attr({cx:+E+this.attrs.cx,cy:+e+this.attrs.cy});break;case"rect":case"image":case"text":this.attr({x:+E+this.attrs.x,y:+e+this.attrs.y});break;case"path":var R=G(this.attrs.path);R[0][1]+=+E;R[0][2]+=+e;this.attr({path:R});break}return this};S[V][I]=function(){return"Rapha\u00ebl\u2019s object"};var O=function(E){this.items=[];this[Z]=0;if(E){for(var R=0,e=E[Z];R<e;R++){if(E[R]&&(E[R].constructor==S||E[R].constructor==O)){this[this.items[Z]]=this.items[this.items[Z]]=E[R];this[Z]++}}}};O[V][AE]=function(){var AT,E;for(var R=0,e=arguments[Z];R<e;R++){AT=arguments[R];if(AT&&(AT.constructor==S||AT.constructor==O)){E=this.items[Z];this[E]=this.items[E]=AT;this[Z]++}}return this};O[V].pop=function(){delete this[this[Z]--];return this.items.pop()};for(var AL in S[V]){if(S[V][H](AL)){O[V][AL]=(function(E){return function(){for(var R=0,e=this.items[Z];R<e;R++){this.items[R][E][AO](this.items[R],arguments)}return this}})(AL)}}O[V].attr=function(R,AV){if(R&&K.is(R,"array")&&K.is(R[0],"object")){for(var E=0,AU=R[Z];E<AU;E++){this.items[E].attr(R[E])}}else{for(var e=0,AT=this.items[Z];e<AT;e++){this.items[e].attr[AO](this.items[e],arguments)}}return this};O[V].animate=function(AU,R,AX,AW){if(K.is(AX,"function")||!AX){AW=AX||null}var E=this.items[Z],e=E,AV=this;if(AW){var AT=function(){!--E&&AW.call(AV)};while(e--){this.items[e].animate(AU,R,AX||AT,AT)}}else{while(e--){this.items[e].animate(AU,R,AX)}}return this};O[V].getBBox=function(){var E=[],AV=[],R=[],AT=[];for(var e=this.items[Z];e--;){var AU=this.items[e].getBBox();E[AE](AU.x);AV[AE](AU.y);R[AE](AU.x+AU.width);AT[AE](AU.y+AU.height)}E=v[AO](0,E);AV=v[AO](0,AV);return{x:E,y:AV,width:Q[AO](0,R)-E,height:Q[AO](0,AT)-AV}};K.registerFont=function(R){if(!R.face){return R}this.fonts=this.fonts||{};var i={w:R.w,face:{},glyphs:{}},e=R.face["font-family"];for(var AV in R.face){if(R.face[H](AV)){i.face[AV]=R.face[AV]}}if(this.fonts[e]){this.fonts[e][AE](i)}else{this.fonts[e]=[i]}if(!R.svg){i.face["units-per-em"]=U(R.face["units-per-em"],10);for(var AT in R.glyphs){if(R.glyphs[H](AT)){var AU=R.glyphs[AT];i.glyphs[AT]={w:AU.w,k:{},d:AU.d&&"M"+AU.d[r](/[mlcxtrv]/g,function(AW){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[AW]||"M"})+"z"};if(AU.k){for(var E in AU.k){if(AU[H](E)){i.glyphs[AT].k[E]=AU.k[E]}}}}}}return R};D.getFont=function(AX,AY,R,AT){AT=AT||"normal";R=R||"normal";AY=+AY||{normal:400,bold:700,lighter:300,bolder:800}[AY]||400;var AU=K.fonts[AX];if(!AU){var e=new RegExp("(^|\\s)"+AX[r](/[^\w\d\s+!~.:_-]/g,W)+"(\\s|$)","i");for(var E in K.fonts){if(K.fonts[H](E)){if(e.test(E)){AU=K.fonts[E];break}}}}var AV;if(AU){for(var AW=0,AZ=AU[Z];AW<AZ;AW++){AV=AU[AW];if(AV.face["font-weight"]==AY&&(AV.face["font-style"]==R||!AV.face["font-style"])&&AV.face["font-stretch"]==AT){break}}}return AV};D.print=function(AZ,AY,AW,R,Ad){var AU=this.set(),AX=(AW+W)[h](W),E=0,Ac=W,AT;K.is(R,"string")&&(R=this.getFont(R));if(R){AT=(Ad||16)/R.face["units-per-em"];for(var AV=0,Aa=AX[Z];AV<Aa;AV++){var e=AV&&R.glyphs[AX[AV-1]]||{},Ab=R.glyphs[AX[AV]];E+=AV?(e.w||R.w)+(e.k&&e.k[AX[AV]]||0):0;Ab&&Ab.d&&AU[AE](this.path(Ab.d).attr({fill:"#000",stroke:"none",translation:[E,0]}))}AU.scale(AT,AT,0,AY).translate(AZ,(Ad||16)/2)}return AU};K.format=function(R){var E=K.is(arguments[1],"array")?[0][k](arguments[1]):arguments;R&&K.is(R,"string")&&E[Z]-1&&(R=R[r](/\{(\d+)\}/g,function(AT,e){return E[++e]==null?W:E[e]}));return R||W};K.ninja=function(){var R=AD.Raphael,E;if(AJ.was){AD.Raphael=AJ.is}else{try{delete AD.Raphael}catch(i){AD.Raphael=E}}return R};K.el=S[V];return K})();
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();
jQuery.noConflict();
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Draggable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.2",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Sortable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.sortable",a.extend({},a.ui.mouse,{_init:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;if(g.cursorAt){this._adjustOffsetFromHelper(g.cursorAt)}this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions()},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){continue}var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(d){for(var c=this.containers.length-1;c>=0;c--){if(this._intersectsWith(this.containers[c].containerCache)){if(!this.containers[c].containerCache.over){if(this.currentContainer!=this.containers[c]){var h=10000;var g=null;var e=this.positionAbs[this.containers[c].floating?"left":"top"];for(var b=this.items.length-1;b>=0;b--){if(!a.ui.contains(this.containers[c].element[0],this.items[b].item[0])){continue}var f=this.items[b][this.containers[c].floating?"left":"top"];if(Math.abs(f-e)<h){h=Math.abs(f-e);g=this.items[b]}}if(!g&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[c];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[c].element,true);this._trigger("change",d,this._uiHash());this.containers[c]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[c]._trigger("over",d,this._uiHash(this));this.containers[c].containerCache.over=1}}else{if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",d,this._uiHash(this));this.containers[c].containerCache.over=0}}}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}}));a.extend(a.ui.sortable,{getter:"serialize toArray",version:"1.7.2",eventPrefix:"sort",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectWith:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000}})})(jQuery);;
jQuery.ui.draggable.prototype._mouseCapture=(function(A){return function(C){var B=A.call(this,C);if(B&&jQuery.browser.msie){C.stopPropagation()}return B}})(jQuery.ui.draggable.prototype._mouseCapture);
(function(){var E=1;var B=2;var G=3;var C=4;var F=true;var A=function(K,L,J){var H=K[L];var I;if(J.type==E){I=function(){var M=H.apply(this,arguments);return J.value.apply(this,[M,L])}}else{if(J.type==B){I=function(){J.value.apply(this,[arguments,L]);return H.apply(this,arguments)}}else{if(J.type==C){I=function(){return J.value.apply(this,arguments)}}else{if(J.type==G){I=function(){var M={object:this,args:arguments};return J.value.apply(M.object,[{arguments:M.args,method:L,proceed:function(){return H.apply(M.object,M.args)}}])}}}}}I.unweave=function(){K[L]=H;pointcut=K=I=H=null};K[L]=I;return I};var D=function(I,H){var K=(typeof (I.target.prototype)!="undefined")?I.target.prototype:I.target;var J=[];if(H.type!=C&&typeof (K[I.method])=="undefined"){for(var L in K){if(K[L]!=null&&K[L] instanceof Function&&L.match(I.method)){J[J.length]=A(K,L,H)}}if(J.length==0){throw"No method: "+I.method}}else{J[0]=A(K,I.method,H)}return F?J:J[0]};jQuery.aop={after:function(I,H){return D(I,{type:E,value:H})},before:function(I,H){return D(I,{type:B,value:H})},around:function(I,H){return D(I,{type:G,value:H})},introduction:function(I,H){return D(I,{type:C,value:H})},setup:function(H){F=H.regexMatch}}})();
(function(B){B.fn.ajaxSubmit=function(M){if(!this.length){A("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof M=="function"){M={success:M}}M=B.extend({url:this.attr("action")||window.location.toString(),type:this.attr("method")||"GET"},M||{});var O={};this.trigger("form-pre-serialize",[this,M,O]);if(O.veto){A("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(M.beforeSerialize&&M.beforeSerialize(this,M)===false){A("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var I=this.formToArray(M.semantic);if(M.data){M.extraData=M.data;for(var E in M.data){if(M.data[E] instanceof Array){for(var F in M.data[E]){I.push({name:E,value:M.data[E][F]})}}else{I.push({name:E,value:M.data[E]})}}}if(M.beforeSubmit&&M.beforeSubmit(I,this,M)===false){A("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[I,this,M,O]);if(O.veto){A("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var D=B.param(I);if(M.type.toUpperCase()=="GET"){M.url+=(M.url.indexOf("?")>=0?"&":"?")+D;M.data=null}else{M.data=D}var N=this,H=[];if(M.resetForm){H.push(function(){N.resetForm()})}if(M.clearForm){H.push(function(){N.clearForm()})}if(!M.dataType&&M.target){var K=M.success||function(){};H.push(function(P){B(M.target).html(P).each(K,arguments)})}else{if(M.success){H.push(M.success)}}M.success=function(S,Q){for(var R=0,P=H.length;R<P;R++){H[R].apply(M,[S,Q,N])}};var C=B("input:file",this).fieldValue();var L=false;for(var G=0;G<C.length;G++){if(C[G]){L=true}}if(M.iframe||L){if(B.browser.safari&&M.closeKeepAlive){B.get(M.closeKeepAlive,J)}else{J()}}else{B.ajax(M)}this.trigger("form-submit-notify",[this,M]);return this;function J(){var T=N[0];if(B(":input[name=submit]",T).length){alert('Error: Form elements must not be named "submit".');return }var R=B.extend({},B.ajaxSettings,M);var c=jQuery.extend(true,{},B.extend(true,{},B.ajaxSettings),R);var S="jqFormIO"+(new Date().getTime());var Y=B('<iframe id="'+S+'" name="'+S+'" />');var a=Y[0];if(B.browser.msie||B.browser.opera){a.src='javascript:false;document.write("");'}Y.css({position:"absolute",top:"-1000px",left:"-1000px"});var b={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;Y.attr("src","about:blank")}};var Z=R.global;if(Z&&!B.active++){B.event.trigger("ajaxStart")}if(Z){B.event.trigger("ajaxSend",[b,R])}if(c.beforeSend&&c.beforeSend(b,c)===false){c.global&&jQuery.active--;return }if(b.aborted){return }var Q=0;var V=0;var P=T.clk;if(P){var U=P.name;if(U&&!P.disabled){M.extraData=M.extraData||{};M.extraData[U]=P.value;if(P.type=="image"){M.extraData[name+".x"]=T.clk_x;M.extraData[name+".y"]=T.clk_y}}}setTimeout(function(){var f=N.attr("target"),d=N.attr("action");N.attr({target:S,method:"POST",action:R.url});if(!M.skipEncodingOverride){N.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(R.timeout){setTimeout(function(){V=true;W()},R.timeout)}var e=[];try{if(M.extraData){for(var g in M.extraData){e.push(B('<input type="hidden" name="'+g+'" value="'+M.extraData[g]+'" />').appendTo(T)[0])}}Y.appendTo("body");a.attachEvent?a.attachEvent("onload",W):a.addEventListener("load",W,false);T.submit()}finally{N.attr("action",d);f?N.attr("target",f):N.removeAttr("target");B(e).remove()}},10);function W(){if(Q++){return }a.detachEvent?a.detachEvent("onload",W):a.removeEventListener("load",W,false);var f=0;var g=true;try{if(V){throw"timeout"}var h,j;j=a.contentWindow?a.contentWindow.document:a.contentDocument?a.contentDocument:a.document;if(j.body==null&&!f&&B.browser.opera){f=1;Q--;setTimeout(W,100);return }b.responseText=j.body?j.body.innerHTML:null;b.responseXML=j.XMLDocument?j.XMLDocument:j;b.getResponseHeader=function(k){var e={"content-type":R.dataType};return e[k]};if(R.dataType=="json"||R.dataType=="script"){var d=j.getElementsByTagName("textarea")[0];b.responseText=d?d.value:b.responseText}else{if(R.dataType=="xml"&&!b.responseXML&&b.responseText!=null){b.responseXML=X(b.responseText)}}h=B.httpData(b,R.dataType)}catch(i){g=false;B.handleError(R,b,"error",i)}if(g){R.success(h,"success");if(Z){B.event.trigger("ajaxSuccess",[b,R])}}if(Z){B.event.trigger("ajaxComplete",[b,R])}if(Z&&!--B.active){B.event.trigger("ajaxStop")}if(R.complete){R.complete(b,g?"success":"error")}setTimeout(function(){Y.remove();b.responseXML=null},100)}function X(d,e){if(window.ActiveXObject){e=new ActiveXObject("Microsoft.XMLDOM");e.async="false";e.loadXML(d)}else{e=(new DOMParser()).parseFromString(d,"text/xml")}return(e&&e.documentElement&&e.documentElement.tagName!="parsererror")?e:null}}};B.fn.ajaxForm=function(C){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){B(this).ajaxSubmit(C);return false}).each(function(){B(":submit,input:image",this).bind("click.form-plugin",function(E){var D=this.form;D.clk=this;if(this.type=="image"){if(E.offsetX!=undefined){D.clk_x=E.offsetX;D.clk_y=E.offsetY}else{if(typeof B.fn.offset=="function"){var F=B(this).offset();D.clk_x=E.pageX-F.left;D.clk_y=E.pageY-F.top}else{D.clk_x=E.pageX-this.offsetLeft;D.clk_y=E.pageY-this.offsetTop}}}setTimeout(function(){D.clk=D.clk_x=D.clk_y=null},10)})})};B.fn.ajaxFormUnbind=function(){this.unbind("submit.form-plugin");return this.each(function(){B(":submit,input:image",this).unbind("click.form-plugin")})};B.fn.formToArray=function(N){var M=[];if(this.length==0){return M}var D=this[0];var H=N?D.getElementsByTagName("*"):D.elements;if(!H){return M}for(var I=0,K=H.length;I<K;I++){var E=H[I];var F=E.name;if(!F){continue}if(N&&D.clk&&E.type=="image"){if(!E.disabled&&D.clk==E){M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}continue}var O=B.fieldValue(E,true);if(O&&O.constructor==Array){for(var G=0,C=O.length;G<C;G++){M.push({name:F,value:O[G]})}}else{if(O!==null&&typeof O!="undefined"){M.push({name:F,value:O})}}}if(!N&&D.clk){var J=D.getElementsByTagName("input");for(var I=0,K=J.length;I<K;I++){var L=J[I];var F=L.name;if(F&&!L.disabled&&L.type=="image"&&D.clk==L){M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}}}return M};B.fn.formSerialize=function(C){return B.param(this.formToArray(C))};B.fn.fieldSerialize=function(D){var C=[];this.each(function(){var H=this.name;if(!H){return }var F=B.fieldValue(this,D);if(F&&F.constructor==Array){for(var G=0,E=F.length;G<E;G++){C.push({name:H,value:F[G]})}}else{if(F!==null&&typeof F!="undefined"){C.push({name:this.name,value:F})}}});return B.param(C)};B.fn.fieldValue=function(H){for(var G=[],E=0,C=this.length;E<C;E++){var F=this[E];var D=B.fieldValue(F,H);if(D===null||typeof D=="undefined"||(D.constructor==Array&&!D.length)){continue}D.constructor==Array?B.merge(G,D):G.push(D)}return G};B.fieldValue=function(C,I){var E=C.name,N=C.type,O=C.tagName.toLowerCase();if(typeof I=="undefined"){I=true}if(I&&(!E||C.disabled||N=="reset"||N=="button"||(N=="checkbox"||N=="radio")&&!C.checked||(N=="submit"||N=="image")&&C.form&&C.form.clk!=C||O=="select"&&C.selectedIndex==-1)){return null}if(O=="select"){var J=C.selectedIndex;if(J<0){return null}var L=[],D=C.options;var G=(N=="select-one");var K=(G?J+1:D.length);for(var F=(G?J:0);F<K;F++){var H=D[F];if(H.selected){var M=B.browser.msie&&!(H.attributes.value.specified)?H.text:H.value;if(G){return M}L.push(M)}}return L}return C.value};B.fn.clearForm=function(){return this.each(function(){B("input,select,textarea",this).clearFields()})};B.fn.clearFields=B.fn.clearInputs=function(){return this.each(function(){var D=this.type,C=this.tagName.toLowerCase();if(D=="text"||D=="password"||C=="textarea"){this.value=""}else{if(D=="checkbox"||D=="radio"){this.checked=false}else{if(C=="select"){this.selectedIndex=-1}}}})};B.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};B.fn.enable=function(C){if(C==undefined){C=true}return this.each(function(){this.disabled=!C})};B.fn.selected=function(C){if(C==undefined){C=true}return this.each(function(){var D=this.type;if(D=="checkbox"||D=="radio"){this.checked=C}else{if(this.tagName.toLowerCase()=="option"){var E=B(this).parent("select");if(C&&E[0]&&E[0].type=="select-one"){E.find("option").selected(false)}this.selected=C}}})};function A(){if(B.fn.ajaxSubmit.debug&&window.console&&window.console.log){window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}}})(jQuery);
if(typeof jQuery!="undefined"){var AJS=(function(){var G={click:{}},D=[],E=[],F=false;var C={version:"2.0.7",params:{},$:jQuery,log:function(H){if(typeof console!="undefined"&&console.log){console.log(H)}},stopEvent:function(H){H.stopPropagation();return false},include:function(H){if(!this.contains(E,H)){E.push(H);var I=document.createElement("script");I.src=H;this.$("body").append(I)}},toggleClassName:function(H,I){if(!(H=this.$(H))){return }H.toggleClass(I)},setVisible:function(I,H){if(!(I=this.$(I))){return }var J=this.$;J(I).each(function(){var K=J(this).hasClass("hidden");if(K&&H){J(this).removeClass("hidden")}else{if(!K&&!H){J(this).addClass("hidden")}}})},setCurrent:function(H,I){if(!(H=this.$(H))){return }if(I){H.addClass("current")}else{H.removeClass("current")}},isVisible:function(H){return !this.$(H).hasClass("hidden")},populateParameters:function(){var H=this;this.$(".parameters input").each(function(){var I=this.value,J=this.title||this.id;if(H.$(this).hasClass("list")){if(H.params[J]){H.params[J].push(I)}else{H.params[J]=[I]}}else{H.params[J]=(I.match(/^(tru|fals)e$/i)?I.toLowerCase()=="true":I)}})},init:function(){AJS.populateParameters();F=true;AJS.initFunctions=D;for(var H=0,I=D.length;H<I;H++){if(typeof D[H]=="function"){D[H](AJS.$)}}},toInit:function(I){var H=this;this.$(function(){try{I.apply(this,arguments)}catch(J){H.log("Failed to run init function: "+J)}});return this},bind:function(){},indexOf:function(L,K,I){var J=L.length;if(I==null){I=0}else{if(I<0){I=Math.max(0,J+I)}}for(var H=I;H<J;H++){if(L[H]===K){return H}}return -1},contains:function(I,H){return this.indexOf(I,H)>-1},format:function(J){var H=/^((?:(?:[^']*'){2})*?[^']*?)\{(\d+)\}/,I=/'(?!')/g;AJS.format=function(N){var L=arguments,M="",K=N.match(H);while(K){N=N.substring(K[0].length);M+=K[1].replace(I,"")+(L.length>++K[2]?L[K[2]]:"");K=N.match(H)}return M+=N.replace(I,"")};return AJS.format.apply(AJS,arguments)},firebug:function(){var H=this.$(document.createElement("script"));H.attr("src","http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js");this.$("head").append(H);(function(){if(window.firebug){firebug.init()}else{setTimeout(arguments.callee,0)}})()},clone:function(H){return AJS.$(H).clone().removeAttr("id")},alphanum:function(O,N){O=(O+"").toLowerCase();N=(N+"").toLowerCase();var J=/(\d+|\D+)/g,K=O.match(J),H=N.match(J),M=Math.max(K.length,H.length);for(var I=0;I<M;I++){if(I==K.length){return -1}if(I==H.length){return 1}var P=parseInt(K[I],10),L=parseInt(H[I],10);if(P==K[I]&&L==H[I]&&P!=L){return(P-L)/Math.abs(P-L)}if((P!=K[I]||L!=H[I])&&K[I]!=H[I]){return K[I]<H[I]?-1:1}}return 0},dim:function(){if(AJS.dim.dim){AJS.dim.dim.remove();AJS.dim.dim=null}else{AJS.dim.dim=AJS("div").css({width:"100%",height:AJS.$(document).height(),background:"#000",opacity:0.5,position:"absolute",top:0,left:0});AJS.$("body").append(AJS.dim.dim)}},onTextResize:function(I){if(typeof I=="function"){if(AJS.onTextResize["on-text-resize"]){AJS.onTextResize["on-text-resize"].push(function(J){I(J)})}else{var H=AJS("div");H.css({width:"1em",height:"1em",position:"absolute",top:"-9999em",left:"-9999em"});this.$("body").append(H);H.size=H.width();setInterval(function(){if(H.size!=H.width()){H.size=H.width();for(var J=0,K=AJS.onTextResize["on-text-resize"].length;J<K;J++){AJS.onTextResize["on-text-resize"][J](H.size)}}},0);AJS.onTextResize.em=H;AJS.onTextResize["on-text-resize"]=[function(J){I(J)}]}}},unbindTextResize:function(J){for(var H=0,I=AJS.onTextResize["on-text-resize"].length;H<I;H++){if(AJS.onTextResize["on-text-resize"][H]==J){return AJS.onTextResize["on-text-resize"].splice(H,1)}}},escape:function(H){return escape(H).replace(/%u\w{4}/gi,function(I){return unescape(I)})},filterBySearch:function(L,Q,R){if(Q==""){return[]}var J=this.$;var O=(R&&R.keywordsField)||"keywords";var N=(R&&R.ignoreForCamelCase)?"i":"";var K=(R&&R.matchBoundary)?"\\b":"";var I=(R&&R.splitRegex)||(/\s+/);var M=Q.split(I);var H=[];J.each(M,function(){var T=[new RegExp(K+this,"i")];if(/^([A-Z][a-z]*){2,}$/.test(this)){var S=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");T.push(new RegExp(S,N))}H.push(T)});var P=[];J.each(L,function(){for(var U=0;U<H.length;U++){var S=false;for(var T=0;T<H[U].length;T++){if(H[U][T].test(this[O])){S=true;break}}if(!S){return }}P.push(this)});return P}};if(typeof AJS!="undefined"){for(var B in AJS){C[B]=AJS[B]}}var A=function(){var H=null;if(arguments.length&&typeof arguments[0]=="string"){H=arguments.callee.$(document.createElement(arguments[0]));if(arguments.length==2){H.html(arguments[1])}}return H};for(var B in C){A[B]=C[B]}return A})();AJS.$(function(){AJS.init()})}if(typeof console=="undefined"){console={messages:[],log:function(A){this.messages.push(A)},show:function(){alert(this.messages.join("\n"));this.messages=[]}}}else{console.show=function(){}};
(function(){var E="AJS.conglomerate.cookie";function B(F,I){I=I||"";var H=new RegExp(F+"=([^|]+)"),G=I.match(H);return G&&G[1]}function A(F,H,J){var G=new RegExp("\\s*"+F+"=[^|]+(\\||$)");J=J||"";J=J.replace(G,"")+(J?"|":"");if(H){var I=F+"="+H;if(J.length+I.length<4020){J+=I}}return J}function D(F){var H=new RegExp(F+"=([^;]+)"),G=document.cookie.match(H);return G&&G[1]}function C(F,H,J){var G="";if(J){var I=new Date();I.setTime(+I+J*24*60*60*1000);G="; expires="+I.toGMTString()}document.cookie=F+"="+H+G+";path=/"}AJS.Cookie={save:function(G,H,F){var I=D(E);I=A(G,H,I);C(E,I,F||365)},read:function(G,F){var I=D(E);var H=B(G,I);if(H!=null){return H}return F},erase:function(F){this.save(F,"")}}})();
AJS.dim=function(){if(!AJS.dim.dim){AJS.dim.dim=AJS("div").addClass("blanket");if(AJS.$.browser.msie){AJS.dim.dim.css({width:"200%",height:Math.max(AJS.$(document).height(),AJS.$(window).height())+"px"})}AJS.$("body").append(AJS.dim.dim);if(AJS.$.browser.msie){AJS.dim.shim=AJS.$('<iframe frameBorder="0" class="blanket-shim" src="javascript:false;"/>');AJS.dim.shim.css({height:Math.max(AJS.$(document).height(),AJS.$(window).height())+"px"});AJS.$("body").append(AJS.dim.shim)}if(AJS.$.browser.msie&&parseInt(AJS.$.browser.version)<8){AJS.$("html").css("overflow","hidden")}else{AJS.$("body").css("overflow","hidden")}}};AJS.undim=function(){if(AJS.dim.dim){AJS.dim.dim.remove();AJS.dim.dim=null;if(AJS.$.browser.msie){AJS.dim.shim.remove()}if(AJS.$.browser.msie&&parseInt(AJS.$.browser.version)<8){AJS.$("html").css("overflow","")}else{AJS.$("body").css("overflow","")}if(AJS.$.browser.safari){var A=AJS.$(window).scrollTop();AJS.$(window).scrollTop(10+5*(A==10)).scrollTop(A)}}};AJS.popup=function(B){var E={width:800,height:600,keypressListener:function(G){if(G.keyCode===27&&A.is(":visible")){C.hide()}}};if(typeof B!="object"){B={width:arguments[0],height:arguments[1],id:arguments[2]}}B=AJS.$.extend({},E,B);var F=AJS.$('<div class="shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>');var A=AJS("div").addClass("popup");if(B.id){A.attr("id",B.id)}var D=function(J,H){var I=J||A.width()||E.width;var G=H||A.height()||E.height;A.css({marginTop:-Math.round(G/2),marginLeft:-Math.round(I/2),width:I+"px",height:G+"px",background:"#fff"});F.css({marginTop:-Math.round(G/2),marginLeft:-(Math.round(I/2)+16),width:I+32+"px",height:G+29+"px"});AJS.$(".b",F).width(I-26);AJS.$(".l",F).height(G-17);AJS.$(".r",F).height(G-17);return arguments.callee}(B.width,B.height);AJS.$("body").append(F).append(A);A.hide();F.hide();var C={changeSize:function(G,H){D(G,H);this.show()},show:function(){var G=function(){AJS.$(document).keydown(B.keypressListener);A.show();F.show();AJS.dim()};G();if(A.css("position")=="absolute"){var H=function(){var I=document.documentElement.scrollTop||document.body.scrollTop;var J=I+(document.documentElement.clientHeight-B.height)/2;A.css("margin-top",J);F.css("margin-top",J)};H();AJS.$(window).load(H);this.show=function(){G();H()}}else{this.show=G}AJS.popup.current=this},hide:function(){AJS.$(document).unbind("keydown",B.keypressListener);this.element.hide();F.hide();AJS.undim();AJS.popup.current=null},element:A,remove:function(){F.remove();A.remove();this.element=null}};return C};(function(){function A(I,G,F,H){if(!I.buttonpanel){I.buttonpanel=AJS("div").addClass("button-panel");I.element.append(I.buttonpanel)}this.page=I;this.onclick=F;this._onclick=function(){F.call(this,I.dialog,I)};this.item=AJS("button",G);if(H){this.item.addClass(H)}if(typeof F=="function"){this.item.click(this._onclick)}I.buttonpanel.append(this.item);this.id=I.button.length;I.button[this.id]=this}function C(H,G){var F=H=="left"?-1:1;return function(L){var J=this.page[G];if(this.id!=((F==1)?J.length-1:0)){F*=(L||1);J[this.id+F].item[(F<0?"before":"after")](this.item);J.splice(this.id,1);J.splice(this.id+F,0,this);for(var I=0,K=J.length;I<K;I++){if(G=="panel"&&this.page.curtab==J[I].id){this.page.curtab=I}J[I].id=I}}return this}}function E(F){return function(){this.page[F].splice(this.id,1);for(var G=0,H=this.page[F].length;G<H;G++){this.page[F][G].id=G}this.item.remove()}}A.prototype.moveUp=A.prototype.moveLeft=C("left","button");A.prototype.moveDown=A.prototype.moveRight=C("right","button");A.prototype.remove=E("button");A.prototype.html=function(F){return this.item.html(F)};A.prototype.onclick=function(F){if(typeof F=="undefined"){return this.onclick}else{this.item.unbind("click",this._onclick);this._onclick=function(){F.call(this,page.dialog,page)};if(typeof F=="function"){this.item.click(this._onclick)}}};var D=function(L,M,F,K,I){if(!(F instanceof AJS.$)){F=AJS.$(F)}this.dialog=L.dialog;this.page=L;this.id=L.panel.length;this.button=AJS("button").html(M);if(I){this.button[0].id=I}this.item=AJS("li").append(this.button);this.body=AJS("div").append(F).addClass("panel-body").css("height",L.dialog.height+"px");this.padding=10;if(K){this.body.addClass(K)}var H=L.panel.length,J=this;L.menu.append(this.item);L.body.append(this.body);L.panel[H]=this;var G=function(){var N;if(L.curtab+1){N=L.panel[L.curtab];N.body.hide();N.item.removeClass("selected");(typeof N.onblur=="function")&&N.onblur()}L.curtab=J.id;J.body.show();J.item.addClass("selected");(typeof J.onselect=="function")&&J.onselect();(typeof L.ontabchange=="function")&&L.ontabchange(J,N)};if(!this.button.click){AJS.log("atlassian-dialog:Panel:constructor - this.button.click false");this.button.onclick=G}else{this.button.click(G)}G();if(H==0){L.menu.css("display","none")}else{L.menu.show()}};D.prototype.select=function(){this.button.click()};D.prototype.moveUp=D.prototype.moveLeft=C("left","panel");D.prototype.moveDown=D.prototype.moveRight=C("right","panel");D.prototype.remove=E("panel");D.prototype.html=function(F){if(F){this.body.html(F);return this}else{return this.body.html()}};D.prototype.setPadding=function(F){if(!isNaN(+F)){this.body.css("padding",+F);this.padding=+F;this.page.recalcSize()}return this};var B=function(F,G){this.dialog=F;this.id=F.page.length;this.element=AJS("div").addClass("dialog-components");this.body=AJS("div").addClass("page-body");this.menu=AJS("ul").addClass("page-menu").css("height",F.height+"px");this.body.append(this.menu);this.curtab;this.panel=[];this.button=[];if(G){this.body.addClass(G)}F.popup.element.append(this.element.append(this.menu).append(this.body));F.page[F.page.length]=this};B.prototype.recalcSize=function(){var G=this.header?43:0;var I=this.buttonpanel?43:0;for(var H=this.panel.length;H--;){var F=this.dialog.height-G-I-this.panel[H].padding*2;this.panel[H].body.css("height",F);this.menu.css("height",F-parseFloat(this.menu.css("padding-top")))}};B.prototype.addPanel=function(I,F,H,G){new D(this,I,F,H,G);this.recalcSize();return this};B.prototype.addHeader=function(G,F){if(this.header){this.header.remove()}this.header=AJS("h2").html(G);F&&this.header.addClass(F);this.element.prepend(this.header);this.recalcSize();return this};B.prototype.addButton=function(G,F,H){new A(this,G,F,H);this.recalcSize();return this};B.prototype.gotoPanel=function(F){this.panel[F.id||F].select()};B.prototype.getCurrentPanel=function(){return this.panel[this.curtab]};B.prototype.hide=function(){this.element.hide()};B.prototype.show=function(){this.element.show()};B.prototype.remove=function(){this.element.remove()};AJS.Dialog=function(H,F,I){var G={};if(!+H){G=Object(H);H=G.width;F=G.height;I=G.id}this.height=F||480;this.width=H||640;this.id=I;G=AJS.$.extend({},G,{width:this.width,height:this.height,id:this.id});this.popup=AJS.popup(G);this.popup.element.addClass("dialog");this.page=[];this.curpage=0;new B(this)};AJS.Dialog.prototype.addHeader=function(G,F){this.page[this.curpage].addHeader(G,F);return this};AJS.Dialog.prototype.addButton=function(G,F,H){this.page[this.curpage].addButton(G,F,H);return this};AJS.Dialog.prototype.addPanel=function(I,F,H,G){this.page[this.curpage].addPanel(I,F,H,G);return this};AJS.Dialog.prototype.addPage=function(F){new B(this,F);this.page[this.curpage].hide();this.curpage=this.page.length-1;return this};AJS.Dialog.prototype.nextPage=function(){this.page[this.curpage++].hide();if(this.curpage>=this.page.length){this.curpage=0}this.page[this.curpage].show();return this};AJS.Dialog.prototype.prevPage=function(){this.page[this.curpage--].hide();if(this.curpage<0){this.curpage=this.page.length-1}this.page[this.curpage].show();return this};AJS.Dialog.prototype.gotoPage=function(F){this.page[this.curpage].hide();this.curpage=F;if(this.curpage<0){this.curpage=this.page.length-1}else{if(this.curpage>=this.page.length){this.curpage=0}}this.page[this.curpage].show();return this};AJS.Dialog.prototype.getPanel=function(G,H){var F=(H==null)?this.curpage:G;if(H==null){H=G}return this.page[F].panel[H]};AJS.Dialog.prototype.getPage=function(F){return this.page[F]};AJS.Dialog.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()};AJS.Dialog.prototype.gotoPanel=function(H,G){if(G!=null){var F=H.id||H;this.gotoPage(F)}this.page[this.curpage].gotoPanel(typeof G=="undefined"?H:G)};AJS.Dialog.prototype.show=function(){this.popup.show();return this};AJS.Dialog.prototype.hide=function(){this.popup.hide();return this};AJS.Dialog.prototype.remove=function(){this.popup.hide();this.popup.remove()};AJS.Dialog.prototype.get=function(N){var G=[],M=this;var O='#([^"][^ ]*|"[^"]*")';var P=":(\\d+)";var H="page|panel|button|header";var I="(?:("+H+")(?:"+O+"|"+P+")?|"+O+")";var K=new RegExp("(?:^|,)\\s*"+I+"(?:\\s+"+I+")?\\s*(?=,|$)","ig");(N+"").replace(K,function(a,Q,Z,R,X,W,T,b,Y){Q=Q&&Q.toLowerCase();var S=[];if(Q=="page"&&M.page[R]){S.push(M.page[R]);Q=W;Q=Q&&Q.toLowerCase();Z=T;R=b;X=Y}else{S=M.page}Z=Z&&(Z+"").replace(/"/g,"");T=T&&(T+"").replace(/"/g,"");X=X&&(X+"").replace(/"/g,"");Y=Y&&(Y+"").replace(/"/g,"");if(Q||X){for(var V=S.length;V--;){if(X||(Q=="panel"&&(Z||(!Z&&R==null)))){for(var U=S[V].panel.length;U--;){if(S[V].panel[U].button.html()==X||S[V].panel[U].button.html()==Z||(Q=="panel"&&!Z&&R==null)){G.push(S[V].panel[U])}}}if(X||(Q=="button"&&(Z||(!Z&&R==null)))){for(var U=S[V].button.length;U--;){if(S[V].button[U].item.html()==X||S[V].button[U].item.html()==Z||(Q=="button"&&!Z&&R==null)){G.push(S[V].button[U])}}}if(S[V][Q]&&S[V][Q][R]){G.push(S[V][Q][R])}if(Q=="header"&&S[V].header){G.push(S[V].header)}}}else{G=G.concat(S)}});var L={length:G.length};for(var J=G.length;J--;){L[J]=G[J];for(var F in G[J]){if(!(F in L)){(function(Q){L[Q]=function(){for(var R=this.length;R--;){if(typeof this[R][Q]=="function"){this[R][Q].apply(this[R],arguments)}}}})(F)}}}return L};AJS.Dialog.prototype.updateHeight=function(){var F=0;for(var G=0;this.getPanel(G);G++){if(this.getPanel(G).body.css({height:"auto",display:"block"}).outerHeight()>F){F=this.getPanel(G).body.outerHeight()}if(G!==this.page[this.curpage].curtab){this.getPanel(G).body.css({display:"none"})}}for(G=0;this.getPanel(G);G++){this.getPanel(G).body.css({height:F||this.height})}this.page[0].menu.height(F);this.height=F+87;this.popup.changeSize(undefined,F+87)};AJS.Dialog.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)};AJS.Dialog.prototype.getCurPanelButton=function(){return this.getCurPanel().button}})();
AJS.dropDown=function(J,C){var R=null,G=[],F=AJS.$(document),L=function(S){return !((S=="href")||(S=="name")||(S=="className")||(S=="icon"))},B={isHiddenByDefault:false,item:"li:has(a)",activeClass:"active",selectionHandler:function(T,S){if(S){if(S.get(0).nodeName.toLowerCase()!=="a"){window.location=S.find("a").attr("href")}else{window.location=S.attr("href")}T.preventDefault()}},escapeHandler:function(){this.hide("escape");return false},hideHandler:function(){}};AJS.$.extend(B,C);if(J&&J.jquery){R=J}else{if(typeof J=="string"){R=AJS.$(J)}else{if(J&&J.constructor==Array){R=AJS("div").addClass("aui-dropdown").toggleClass("hidden",!!B.isHiddenByDefault);for(var O=0,I=J.length;O<I;O++){var H=AJS("ol");for(var N=0,Q=J[O].length;N<Q;N++){var K=AJS("li");if(J[O][N].href){K.append(AJS("a").html("<span>"+J[O][N].name+"</span>").attr({href:J[O][N].href}).addClass(J[O][N].className));var E=J[O][N];AJS.$.data(AJS.$("a > span",K)[0],"properties",E)}else{K.html(J[O][N].html).addClass(J[O][N].className)}if(J[O][N].icon){K.prepend(AJS("img").attr("src",J[O][N].icon))}H.append(K)}if(O==I-1){H.addClass("last")}R.append(H)}AJS.$("body").append(R)}else{throw new Error("AJS.dropDown function was called with illegal parameter. Should be AJS.$ object, AJS.$ selector or array.")}}}var M=function(U){if(!AJS.dropDown.current){return true}var V=U.which,S=AJS.dropDown.current.$[0],T=(typeof S.focused=="number"?S.focused:-1);AJS.dropDown.current.cleanFocus();S.focused=T;switch(V){case 40:S.focused++;break;case 38:S.focused--;break;case 27:return B.escapeHandler.call(AJS.dropDown.current,U);case 13:if(S.focused>=0){return B.selectionHandler.call(AJS.dropDown.current,U,AJS.$(AJS.dropDown.current.links[S.focused]))}return true;default:if(AJS.dropDown.current.links.length){AJS.$(AJS.dropDown.current.links[S.focused]).addClass("active")}return true}if(S.focused<0){S.focused=AJS.dropDown.current.links.length-1}if(S.focused>AJS.dropDown.current.links.length-1){S.focused=0}if(AJS.dropDown.current.links.length){AJS.$(AJS.dropDown.current.links[S.focused]).addClass("active")}U.stopPropagation();U.preventDefault();return false};var A=function(S){if(!((S&&S.which&&(S.which==3))||(S&&S.button&&(S.button==2))||false)){if(AJS.dropDown.current){AJS.dropDown.current.hide("click")}}};var D=function(S){return function(){if(!AJS.dropDown.current){return }AJS.dropDown.current.cleanFocus();this.originalClass=this.className;AJS.$(this).addClass("active");AJS.dropDown.current.$[0].focused=S}};var P=function(S){if(S.button||S.metaKey||S.ctrlKey||S.shiftKey){return true}if(AJS.dropDown.current){B.selectionHandler.call(AJS.dropDown.current,S,AJS.$(this))}};R.each(function(){var S=this,U=AJS.$(this),V;var T={reset:function(){var W=V&&V.links||[];V=AJS.$.extend(V||{},{$:U,links:AJS.$(B.item||"li:has(a)",S),cleanFocus:function(){if(S.focused+1&&V.links.length){AJS.$(V.links[S.focused]).removeClass("active")}S.focused=-1}});V.links.each(function(X){if(AJS.$.inArray(this,W)===-1){var Y=AJS.$(this);Y.hover(D(X),V.cleanFocus);Y.unbind("click",P).click(P)}});return arguments.callee}(),appear:function(W){if(W){U.removeClass("hidden")}else{U.addClass("hidden")}},fade:function(W){if(W){U.fadeIn("fast")}else{U.fadeOut("fast")}},scroll:function(W){if(W){U.slideDown("fast")}else{U.slideUp("fast")}}};V.addCallback=function(X,W){return AJS.$.aop.after({target:this,method:X},W)};V.reset=T.reset();V.show=function(W){A();AJS.dropDown.current=this;this.method=W||this.method||"appear";T[this.method](true);this.timer=setTimeout(function(){F.click(A)},0);F.keydown(M);if(B.firstSelected&&this.links[0]){D(0).call(this.links[0])}AJS.$(S.offsetParent).css({zIndex:2000})};V.hide=function(W){this.method=this.method||"appear";AJS.$(U.get(0).offsetParent).css({zIndex:""});this.cleanFocus();T[this.method](false);F.unbind("click",A).unbind("keydown",M);AJS.dropDown.current=null;return W};V.addCallback("reset",function(){if(B.firstSelected&&this.links[0]){D(0).call(this.links[0])}});if(!AJS.dropDown.iframes){AJS.dropDown.iframes=[]}AJS.dropDown.createShims=function(){AJS.$("iframe").each(function(W){var X=this;if(!X.shim){X.shim=AJS.$("<div />").addClass("shim hidden").appendTo("body");AJS.dropDown.iframes.push(X)}});return arguments.callee}();V.addCallback("show",function(){AJS.$(AJS.dropDown.iframes).each(function(){var W=AJS.$(this);if(W.is(":visible")){var X=W.offset();X.height=W.height();X.width=W.width();this.shim.css({left:X.left+"px",top:X.top+"px",height:X.height+"px",width:X.width+"px"}).removeClass("hidden")}})});V.addCallback("hide",function(){AJS.$(AJS.dropDown.iframes).each(function(){this.shim.addClass("hidden")});B.hideHandler()});(function(){var W=function(){if(this.$.is(":visible")){if(!this.shadow){this.shadow=AJS.$('<div class="aui-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>').insertBefore(this.$)}if(parseInt(this.$.outerWidth(),10)>14){this.shadow.css({display:"block",top:this.$.css("top"),right:"-7px",width:this.$.outerWidth()+14+"px",height:this.$.outerHeight()+14+"px"}).find(".b").css("width",this.$.outerWidth()-14+"px");this.shadow.find(".l, .r").css("height",this.$.outerHeight()-8+"px")}}};V.addCallback("reset",W);V.addCallback("show",W);V.addCallback("hide",function(){if(this.shadow){this.shadow.css({display:"none"})}})})();if(AJS.$.browser.msie){(function(){var W=function(){if(this.$.is(":visible")){if(!this.iframeShim){this.iframeShim=AJS.$('<iframe class="dropdown-shim" src="javascript:false;" frameBorder="0">>').insertBefore(this.$)}this.iframeShim.css({display:"block",top:this.$.css("top"),right:0,width:this.$.outerWidth()+1+"px",height:this.$.outerHeight()+"px"})}};V.addCallback("reset",W);V.addCallback("show",W);V.addCallback("hide",function(){if(this.iframeShim){this.iframeShim.css({display:"none"})}})})()}G.push(V)});return G};AJS.dropDown.getAdditionalPropertyValue=function(C,A){var B=AJS.$.data(C[0],"properties");if(typeof B!="undefined"){return B[A]}else{return null}};AJS.dropDown.removeAllAdditionalProperties=function(A){};AJS.dropDown.Standard=function(D){var B=[],C,A={selector:".aui-dd-parent",dropDown:".aui-dropdown",trigger:".aui-dd-trigger"};AJS.$.extend(A,D);if(this instanceof AJS.$){C=this}else{C=AJS.$(A.selector)}C=C.not(".dd-allocated").filter(":has("+A.dropDown+")").filter(":has("+A.trigger+")");C.each(function(){var H=AJS.$(this),G=AJS.$(A.dropDown,this),E=AJS.$(A.trigger,this),F=AJS.dropDown(G,A)[0];AJS.$.extend(F,{trigger:E});H.addClass("dd-allocated");G.addClass("hidden");E.click(function(I){if(F!=AJS.dropDown.current){G.css({top:E.outerHeight()});F.show();I.stopPropagation()}I.preventDefault()});F.addCallback("show",function(){H.addClass("active")});F.addCallback("hide",function(){H.removeClass("active")});B.push(F)});return B};AJS.dropDown.Ajax=function(C){var B,A={cache:true};AJS.$.extend(A,C||{});B=AJS.dropDown.Standard.call(this,A);AJS.$(B).each(function(){var D=this;AJS.$.extend(D,{getAjaxOptions:function(E){var F=function(G){if(A.formatResults){G=A.formatResults(G)}if(A.cache){D.cache.set(D.getAjaxOptions(),G)}D.refreshSuccess(G)};if(A.ajaxOptions){if(AJS.$.isFunction(A.ajaxOptions)){return AJS.$.extend(A.ajaxOptions.call(D),{success:F})}else{return AJS.$.extend(A.ajaxOptions,{success:F})}}return AJS.$.extend(E,{success:F})},refreshSuccess:function(E){this.$.html(E)},cache:function(){var E={};return{get:function(F){var G=F.data||"";return E[(F.url+G).replace(/[\?\&]/gi,"")]},set:function(F,G){var H=F.data||"";E[(F.url+H).replace(/[\?\&]/gi,"")]=G},reset:function(){E={}}}}(),show:function(E){return function(F){if(A.cache&&!!D.cache.get(D.getAjaxOptions())){D.refreshSuccess(D.cache.get(D.getAjaxOptions()));E.call(D)}else{AJS.$(AJS.$.ajax(D.getAjaxOptions())).throbber({target:D.$,end:function(){D.reset()}});E.call(D);D.shadow.hide();if(AJS.$.browser.msie){D.iframeShim.hide()}}}}(D.show),resetCache:function(){D.cache.reset()}});D.addCallback("refreshSuccess",function(){D.reset()})});return B};AJS.$.fn.dropDown=function(B,A){B=(B||"Standard").replace(/^([a-z])/,function(C){return C.toUpperCase()});return AJS.dropDown[B].call(this,A)};
(function(A){AJS.InlineDialog=function(N,D,G,E){var L=A.extend(false,AJS.InlineDialog.opts,E);var F;var T;var H=false;var M=false;var R=false;var S;var J;A(L.container).append(A('<div id="inline-dialog-'+D+'" class="aui-inline-dialog"><div class="contents"></div><div id="arrow-'+D+'" class="arrow"></div></div>'));var B=A("#inline-dialog-"+D);var C=A("#arrow-"+D);var Q=B.find(".contents");Q.css("width",L.width+"px");Q.mouseover(function(U){clearTimeout(F);B.unbind("mouseover")}).mouseout(function(){O()});var K=function(){if(B.is(":visible")){return }T=setTimeout(function(){if(!R||!M){return }A(N).addClass("active");H=true;var U=J.target.offset().left+L.offsetX;var Z=J.target.offset().top+J.target.height()+L.offsetY;var X=A(window).width()-(U+L.width+30);if(X<0){B.css({right:"20px",left:"auto"});C.css({left:-X+(J.target.width()/2)+"px",right:"auto"})}else{B.css({left:U+"px",right:"auto"});C.css({left:J.target.width()/2+"px",right:"auto"})}var V=(window.pageYOffset||document.documentElement.scrollTop)+A(window).height();if((Z+B.height())>V){Z=V-B.height()-5;B.mouseover(function(){clearTimeout(F)}).mouseout(function(){O()})}B.css({top:Z+"px"});var Y=A("#inline-dialog-shadow").appendTo(B).show();B.fadeIn(L.fadeTime,function(){});Y.css({width:Q.outerWidth()+32+"px",height:Q.outerHeight()+25+"px"});A(".b",Y).css("width",Q.outerWidth()-26+"px");A(".l, .r",Y).css("height",Q.outerHeight()-21+"px");if(AJS.$.browser.msie){var W=A("#inline-dialog-shim");W.appendTo(B).show();W.css({width:Q.outerWidth(),height:Q.outerHeight()})}},L.showDelay)};var O=function(U){M=false;if(H){U=(U==null)?L.hideDelay:U;clearTimeout(F);clearTimeout(T);F=setTimeout(function(){A(N).removeClass("active");B.fadeOut(L.fadeTime,function(){L.hideCallback.call(B[0].popup)});H=false;M=false;if(!L.cacheContent){R=false;I=false}},U)}};var P=function(W,U){A(".aui-inline-dialog").each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});S={x:W.pageX,y:W.pageY};var X=A(W.target).offset();J={target:A(W.target)};if(!H){clearTimeout(T)}M=true;var V=function(){R=true;L.initCallback.call({popup:B,hide:function(){O(0)},id:D,show:function(){K()}});K()};if(!I){I=true;if(A.isFunction(G)){G(Q,U,V)}else{Q.load(G,function(){R=true;L.initCallback.call({popup:B,hide:function(){O(0)},id:D,show:function(){K()}});K()})}}clearTimeout(F);if(!H){K()}return false};B[0].popup={popup:B,hide:function(){O(0)},id:D,show:function(){K()}};var I=false;if(L.onHover){A(N).mousemove(function(U){P(U,this)}).mouseout(function(){O()})}else{A(N).click(function(U){P(U,this);return false}).mouseout(function(){O()})}Q.click(function(U){U.stopPropagation()});A("body").click(function(){O(0)});return B};AJS.InlineDialog.opts={onHover:false,fadeTime:100,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,container:"body",cacheContent:true,hideCallback:function(){},initCallback:function(){}};AJS.toInit(function(){A("body").append(A('<div id="inline-dialog-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>'));A("#inline-dialog-shadow").hide();if(AJS.$.browser.msie){A("body").append(A('<iframe id="inline-dialog-shim" frameBorder="0" src="javascript:false;"></iframe>'));A("#inline-dialog-shim").hide()}})})(jQuery);
AJS.warnAboutFirebug=function(B){if(!AJS.Cookie.read("COOKIE_FB_WARNING")&&window.console&&window.console.firebug){if(!B){B="Firebug is known to cause performance problems with Atlassian products. Try disabling it, if you notice any issues."}var A=AJS.$("<div id='firebug-warning'><p>"+B+"</p><a class='close'>Close</a></div>");AJS.$(".close",A).click(function(){A.slideUp("fast");AJS.Cookie.save("COOKIE_FB_WARNING","true")});A.prependTo(AJS.$("body"))}};
(function(A){A.fn.autocomplete=function(B,C,K){K=typeof C=="function"?C:(typeof K=="function"?K:function(){});C=!isNaN(Number(C))?C:3;var J=this;J[0].lastSelectedValue=J.val();var H=A(document.createElement("ol"));var D=J.offset();var G=parseInt(A("body").css("border-left-width"));H.css({position:"absolute",width:J.outerWidth()-2+"px"});H.addClass("autocompleter");this.after(H);H.css({margin:(Math.abs(this.offset().left-H.offset().left)>=Math.abs(this.offset().top-H.offset().top))?J.outerHeight()+"px 0 0 -"+J.outerWidth()+"px":"-1px 0 0 0"});H.hide();function F(){H.hide();A(document).unbind("click",F)}function E(){var L=J.val();if(L.length>=C&&L!=J[0].lastQuery&&L!=J[0].lastSelectedValue){A.getJSON(B+encodeURI(L),function(P){var R="";L=L.toLowerCase();var U=L.split(" ");for(var Q=0,W=P.length;Q<W;Q++){var S=false;if(P[Q].fullName&&P[Q].username){var V=P[Q].fullName+" ("+P[Q].username+")";var M=P[Q].fullName.split(" ");for(var O=0,T=M.length;O<T;O++){for(var N=0;N<U.length;N++){if(M[O].toLowerCase().indexOf(U[N])==0){M[O]="<strong>"+M[O].substring(0,U[N].length)+"</strong>"+M[O].substring(U[N].length);S=true}}}if(!S){for(var N=0;N<U.length;N++){if(P[Q].username&&P[Q].username.toLowerCase().indexOf(U[N])==0){P[Q].username="<strong>"+P[Q].username.substring(0,U[N].length)+"</strong>"+P[Q].username.substring(U[N].length)}}}P[Q].fullName=M.join(" ");R+="<li><span>"+P[Q].fullName+"</span> <span class='username-in-autocomplete-list'>("+P[Q].username+")</span><i class='fullDetails'>"+V+"</i><i class='username'>"+P[Q].username+"</i><i class='fullName'>"+P[Q].fullName+"</i></li>"}if(P[Q].status){R+="<li>"+P[Q].status+"</li>"}}H.html(R);A("li",H).click(function(Y){Y.stopPropagation();var X=A("i.fullDetails",this).html();I(X)}).hover(function(){A(".focused").removeClass("focused");A(this).addClass("focused")},function(){});A(document).click(F);H.show()});J[0].lastQuery=L}else{if(L.length<C){F()}}}J.keydown(function(M){var L=this;if(this.timer){clearTimeout(this.timer)}var N={"40":function(){var O=A(".focused").removeClass("focused").next();if(O.length){O.addClass("focused")}else{A(".autocompleter li:first").addClass("focused")}},"38":function(){var O=A(".focused").removeClass("focused").prev();if(O.length){O.addClass("focused")}else{A("li:last",H).addClass("focused")}},"27":function(){F()},"13":function(){var O=A(".focused i.fullDetails").html();I(O)},"9":function(){this[13]();setTimeout(function(){L.focus()},0)}};if(H.css("display")!="none"&&M.keyCode in N){M.preventDefault();N[M.keyCode]()}this.timer=setTimeout(E,300)});function I(N){var M=J.val();if(N){J[0].lastSelectedValue=N;J.val(N);var L={input:J,originalValue:M,value:N,fullName:A(".focused i.fullName").text(),username:A(".focused i.username").text()};K(L);F()}}}})(jQuery);
(function(A){A.fn.progressBar=function(I,L){var C=this;var F={height:"1em",showPercentage:true};var B=A.extend(F,L);var J=C.attr("id")+"-incomplete-bar";var D=C.attr("id")+"-complete-bar";var K=C.attr("id")+"-percent-complete-text";if(A("#"+J).length==0){var E=A(document.createElement("div"));E.attr("id",J);E.css({width:"90%",border:"solid 1px #ccc","float":"left","margin-right":"0.5em"});E.addClass("progress-background-color");var G=A(document.createElement("div"));G.attr("id",D);G.addClass("progress-fill-color");G.css({height:B.height,width:I+"%"});var H=A(document.createElement("span"));H.attr("id",K);H.addClass("percent-complete-text");H.html(I+"%");E.append(G);C.append(E);if(B.showPercentage){C.append(H)}}else{A("#"+D).css("width",I+"%");A("#"+K).html(I+"%")}}})(jQuery);
(function(A){if(document.selection){var B=function(C){return C.replace(/\u000D/g,"")};A.fn.selection=function(F){var E=this[0];this.focus();if(!E){return false}if(F==null){return document.selection.createRange().text}else{var D=E.scrollTop;var C=document.selection.createRange();C.text=F;C.select();E.focus();E.scrollTop=D}};A.fn.selectionRange=function(C,F){var G=this[0];this.focus();var I=document.selection.createRange();if(C==null){var K=this.val(),J=K.length,E=I.duplicate();E.moveToElementText(G);E.setEndPoint("StartToEnd",I);var D=J-B(E.text).length;E.setEndPoint("StartToStart",I);var H=J-B(E.text).length;if(D!=H&&K.charAt(D+1)=="\n"){D+=1}return{end:D,start:H,text:K.substring(H,D),textBefore:K.substring(0,H),textAfter:K.substring(D)}}else{I.moveToElementText(G);I.collapse(true);I.moveStart("character",C);I.moveEnd("character",F-C);I.select()}}}else{A.fn.selection=function(E){var D=this[0];if(!D){return false}if(E==null){if(D.setSelectionRange){return D.value.substring(D.selectionStart,D.selectionEnd)}else{return false}}else{var C=D.scrollTop;if(!!D.setSelectionRange){var F=D.selectionStart;D.value=D.value.substring(0,F)+E+D.value.substring(D.selectionEnd);D.selectionStart=F;D.selectionEnd=F+E.length}D.focus();D.scrollTop=C}};A.fn.selectionRange=function(F,C){if(F==null){var D={start:this[0].selectionStart,end:this[0].selectionEnd};var E=this.val();D.text=E.substring(D.start,D.end);D.textBefore=E.substring(0,D.start);D.textAfter=E.substring(D.end);return D}else{this[0].selectionStart=F;this[0].selectionEnd=C}}}A.fn.wrapSelection=function(C,D){this.selection(C+this.selection()+(D||""))}})(jQuery);
jQuery.fn.throbber=function(A){return function(){var C=[],B={isLatentThreshold:100,minThrobberDisplay:200,loadingClass:"loading"};A().ajaxComplete(function(E,D){A(C).each(function(F){if(D===this.get(0)){this.hideThrobber();C.splice(F,1)}})});return function(F){var E,G,D=function(I,H){D.t=setTimeout(function(){clearTimeout(D.t);D.t=undefined;I()},H)};F=A.extend(B,F||{});if(!F.target){return this}G=jQuery(F.target);C.push(A.extend(this,{showThrobber:function(){D(function(){if(!E){G.addClass(F.loadingClass);D(function(){if(E){E()}},F.minThrobberDisplay)}},F.isLatentThreshold)},hideThrobber:function(){E=function(){G.removeClass(F.loadingClass);if(F.end){F.end()}};if(!D.t){E()}}}));this.showThrobber();return this}}()}(jQuery);
jQuery.noConflict();
/**
 * Provides Confluence-specific overrides of AJS.Dialog defaults
 */
AJS.ConfluenceDialog = function(options) {
    var dialog;
    options = options || {};
    options = jQuery.extend({}, options, {
        keypressListener: function(e) {
            if (e.keyCode === 27) {
                // if dropdown is currently showing, leave the dialog and let the dropdown close itself
                if (!jQuery(".aui-dropdown", dialog.popup.element).is(":visible")) {
                    if (typeof options.onCancel == "function") {
                        options.onCancel();
                    } else {
                        dialog.hide();
                    }
                }
            }
        }
    });
    dialog = new AJS.Dialog(options);
    return dialog;
};
/*  Prototype JavaScript framework, version 1.4.0_pre11
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  THIS FILE IS AUTOMATICALLY GENERATED. When sending patches, please diff
 *  against the source tree, available from the Prototype darcs repository.
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
/*--------------------------------------------------------------------------*/

var Prototype = {
  Version: '1.4.0_pre11',

  emptyFunction: function() {},
  K: function(x) {return x}
}

var Class = {
  create: function() {
    return function() { 
      this.initialize.apply(this, arguments);
    }
  }
}

var Abstract = new Object();

Object.extend = function(destination, source) {
  for (property in source) {
    destination[property] = source[property];
  }
  return destination;
}

Object.inspect = function(object) {
  try {
    if (object == undefined) return 'undefined';
    if (object == null) return 'null';
    return object.inspect ? object.inspect() : object.toString();
  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
}

Function.prototype.bind = function(object) {
  var __method = this;
  return function() {
    return __method.apply(object, arguments);
  }
}

Function.prototype.bindAsEventListener = function(object) {
  var __method = this;
  return function(event) {
    return __method.call(object, event || window.event);
  }
}

Object.extend(Number.prototype, {
  toColorPart: function() {
    var digits = this.toString(16);
    if (this < 16) return '0' + digits;
    return digits;
  },

  succ: function() {
    return this + 1;
  },

  times: function(iterator) {
    $R(0, this, true).each(iterator);
    return this;
  }
});

var Try = {
  these: function() {
    var returnValue;

    for (var i = 0; i < arguments.length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) {}
    }

    return returnValue;
  }
}

/*--------------------------------------------------------------------------*/

var PeriodicalExecuter = Class.create();
PeriodicalExecuter.prototype = {
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.callback();
      } finally {
        this.currentlyExecuting = false;
      }
    }
  }
}

/*--------------------------------------------------------------------------*/

function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}

Object.extend(String.prototype, {
  stripTags: function() {
    return this.replace(/<\/?[^>]+>/gi, '');
  },

  escapeHTML: function() {
    var div = document.createElement('div');
    var text = document.createTextNode(this);
    div.appendChild(text);
    return div.innerHTML;
  },

  unescapeHTML: function() {
    var div = document.createElement('div');
    div.innerHTML = this.stripTags();
    return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
  },

  toQueryParams: function() {
    var pairs = this.match(/^\??(.*)$/)[1].split('&');
    return pairs.inject({}, function(params, pairString) {
      var pair = pairString.split('=');
      params[pair[0]] = pair[1];
      return params;
    });
  },

  inspect: function() {
    return "'" + this.replace('\\', '\\\\').replace("'", '\\\'') + "'";
  }
});

String.prototype.parseQuery = String.prototype.toQueryParams;


var $break    = new Object();
var $continue = new Object();

var Enumerable = {
  each: function(iterator) {
    var index = 0;
    try {
      this._each(function(value) {
        try {
          iterator(value, index++);
        } catch (e) {
          if (e != $continue) throw e;
        }
      });
    } catch (e) {
      if (e != $break) throw e;
    }
  },

  all: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      if (!(result &= (iterator || Prototype.K)(value, index)))
        throw $break;
    });
    return result;
  },

  any: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      if (result &= (iterator || Prototype.K)(value, index))
        throw $break;
    });
    return result;
  },

  collect: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      results.push(iterator(value, index));
    });
    return results;
  },

  detect: function (iterator) {
    var result;
    this.each(function(value, index) {
      if (iterator(value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  },

  findAll: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (iterator(value, index))
        results.push(value);
    });
    return results;
  },

  grep: function(pattern, iterator) {
    var results = [];
    this.each(function(value, index) {
      var stringValue = value.toString();
      if (stringValue.match(pattern))
        results.push((iterator || Prototype.K)(value, index));
    })
    return results;
  },

  include: function(object) {
    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  },

  inject: function(memo, iterator) {
    this.each(function(value, index) {
      memo = iterator(memo, value, index);
    });
    return memo;
  },

  invoke: function(method) {
    var args = $A(arguments).slice(1);
    return this.collect(function(value) {
      return value[method].apply(value, args);
    });
  },

  max: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (value >= (result || value))
        result = value;
    });
    return result;
  },

  min: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (value <= (result || value))
        result = value;
    });
    return result;
  },

  partition: function(iterator) {
    var trues = [], falses = [];
    this.each(function(value, index) {
      ((iterator || Prototype.K)(value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  },

  pluck: function(property) {
    var results = [];
    this.each(function(value, index) {
      results.push(value[property]);
    });
    return results;
  },

  reject: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator(value, index))
        results.push(value);
    });
    return results;
  },

  sortBy: function(iterator) {
    return this.collect(function(value, index) {
      return {value: value, criteria: iterator(value, index)};
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  },

  toArray: function() {
    return this.collect(Prototype.K);
  },

  zip: function() {
    var iterator = Prototype.K, args = $A(arguments);
    if (typeof args.last() == 'function')
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      iterator(value = collections.pluck(index));
      return value;
    });
  },

  inspect: function() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }
}

Object.extend(Enumerable, {
  map:     Enumerable.collect,
  find:    Enumerable.detect,
  select:  Enumerable.findAll,
  member:  Enumerable.include,
  entries: Enumerable.toArray
});

var $A = Array.from = function(iterable) {
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}

Object.extend(Array.prototype, Enumerable);

Object.extend(Array.prototype, {
  _each: function(iterator) {
    for (var i = 0; i < this.length; i++)
      iterator(this[i]);
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  compact: function() {
    return this.select(function(value) {
      return value != undefined || value != null;
    });
  },

  flatten: function() {
    return this.inject([], function(array, value) {
      return array.concat(value.constructor == Array ?
        value.flatten() : [value]);
    });
  },

  without: function() {
    var values = $A(arguments);
    return this.select(function(value) {
      return !values.include(value);
    });
  },

  inspect: function() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }
});

var Hash = {
  _each: function(iterator) {
    for (key in this) {
      var value = this[key];
      if (typeof value == 'function') continue;

      var pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  },

  keys: function() {
    return this.pluck('key');
  },

  values: function() {
    return this.pluck('value');
  },

  merge: function(hash) {
    return $H(hash).inject($H(this), function(mergedHash, pair) {
      mergedHash[pair.key] = pair.value;
      return mergedHash;
    });
  },

  toQueryString: function() {
    return this.map(function(pair) {
      return pair.map(encodeURIComponent).join('=');
    }).join('&');
  },

  inspect: function() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }
}

function $H(object) {
  var hash = Object.extend({}, object || {});
  Object.extend(hash, Enumerable);
  Object.extend(hash, Hash);
  return hash;
}

var Range = Class.create();
Object.extend(Range.prototype, Enumerable);
Object.extend(Range.prototype, {
  initialize: function(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  },

  _each: function(iterator) {
    var value = this.start;
    do {
      iterator(value);
      value = value.succ();
    } while (this.include(value));
  },

  include: function(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }
});

var $R = function(start, end, exclusive) {
  return new Range(start, end, exclusive);
}

var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')},
      function() {return new XMLHttpRequest()}
    ) || false;
  },

  activeRequestCount: 0
}

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responderToAdd) {
    if (!this.include(responderToAdd))
      this.responders.push(responderToAdd);
  },

  unregister: function(responderToRemove) {
    this.responders = this.responders.without(responderToRemove);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (responder[callback] && typeof responder[callback] == 'function') {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) {
        }
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate: function() {
    Ajax.activeRequestCount++;
  },

  onComplete: function() {
    Ajax.activeRequestCount--;
  }
});

Ajax.Base = function() {};
Ajax.Base.prototype = {
  setOptions: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      parameters:   ''
    }
    Object.extend(this.options, options || {});
  },

  responseIsSuccess: function() {
    return this.transport.status == undefined
        || this.transport.status == 0
        || (this.transport.status >= 200 && this.transport.status < 300);
  },

  responseIsFailure: function() {
    return !this.responseIsSuccess();
  }
}

Ajax.Request = Class.create();
Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

Ajax.Request.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(url, options) {
    this.transport = Ajax.getTransport();
    this.setOptions(options);
    this.request(url);
  },

  request: function(url) {
    var parameters = this.options.parameters || '';
    if (parameters.length > 0) parameters += '&_=';

    try {
      this.url = url;
      if (this.options.method == 'get')
        this.url += '?' + parameters;

      Ajax.Responders.dispatch('onCreate', this, this.transport);

      this.transport.open(this.options.method, this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) {
        this.transport.onreadystatechange = this.onStateChange.bind(this);
        setTimeout((function() {this.respondToReadyState(1)}).bind(this), 10);
      }

      this.setRequestHeaders();

      var body = this.options.postBody ? this.options.postBody : parameters;
      this.transport.send(this.options.method == 'post' ? body : null);

    } catch (e) {
    }
  },

  setRequestHeaders: function() {
    var requestHeaders =
      ['X-Requested-With', 'XMLHttpRequest',
       'X-Prototype-Version', Prototype.Version];

    if (this.options.method == 'post') {
      requestHeaders.push('Content-type',
        'application/x-www-form-urlencoded');

      /* Force "Connection: close" for Mozilla browsers to work around
       * a bug where XMLHttpReqeuest sends an incorrect Content-length
       * header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType)
        requestHeaders.push('Connection', 'close');
    }

    if (this.options.requestHeaders)
      requestHeaders.push.apply(requestHeaders, this.options.requestHeaders);

    for (var i = 0; i < requestHeaders.length; i += 2)
      this.transport.setRequestHeader(requestHeaders[i], requestHeaders[i+1]);
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState != 1)
      this.respondToReadyState(this.transport.readyState);
  },

  evalJSON: function() {
    try {
      var json = this.transport.getResponseHeader('X-JSON'), object;
      object = eval(json);
      return object;
    } catch (e) {
    }
  },

  respondToReadyState: function(readyState) {
    var event = Ajax.Request.Events[readyState];
    var transport = this.transport, json = this.evalJSON();

    if (event == 'Complete')
      (this.options['on' + this.transport.status]
       || this.options['on' + (this.responseIsSuccess() ? 'Success' : 'Failure')]
       || Prototype.emptyFunction)(transport, json);

    (this.options['on' + event] || Prototype.emptyFunction)(transport, json);
    Ajax.Responders.dispatch('on' + event, this, transport, json);

    /* Avoid memory leak in MSIE: clean up the oncomplete event handler */
    if (event == 'Complete')
      this.transport.onreadystatechange = Prototype.emptyFunction;
  }
});

Ajax.Updater = Class.create();
Ajax.Updater.ScriptFragment = '(?:<script.*?>)((\n|.)*?)(?:<\/script>)';

Object.extend(Object.extend(Ajax.Updater.prototype, Ajax.Request.prototype), {
  initialize: function(container, url, options) {
    this.containers = {
      success: container.success ? $(container.success) : $(container),
      failure: container.failure ? $(container.failure) :
        (container.success ? null : $(container))
    }

    this.transport = Ajax.getTransport();
    this.setOptions(options);

    var onComplete = this.options.onComplete || Prototype.emptyFunction;
    this.options.onComplete = (function(transport, object) {
      this.updateContent();
      onComplete(transport, object);
    }).bind(this);

    this.request(url);
  },

  updateContent: function() {
    var receiver = this.responseIsSuccess() ?
      this.containers.success : this.containers.failure;

    var match    = new RegExp(Ajax.Updater.ScriptFragment, 'img');
    var response = this.transport.responseText.replace(match, '');
    var scripts  = this.transport.responseText.match(match);

    if (receiver) {
      if (this.options.insertion) {
        new this.options.insertion(receiver, response);
      } else {
        receiver.innerHTML = response;
      }
    }

    if (this.responseIsSuccess()) {
      if (this.onComplete)
        setTimeout(this.onComplete.bind(this), 10);
    }

    if (this.options.evalScripts && scripts) {
      match = new RegExp(Ajax.Updater.ScriptFragment, 'im');
      setTimeout((function() {
        for (var i = 0; i < scripts.length; i++)
          eval(scripts[i].match(match)[1]);
      }).bind(this), 10);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create();
Ajax.PeriodicalUpdater.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(container, url, options) {
    this.setOptions(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = 1;

    this.updater = {};
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Ajax.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(request) {
    if (this.options.decay) {
      this.decay = (request.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = request.responseText;
    }
    this.timer = setTimeout(this.onTimerEvent.bind(this),
      this.decay * this.frequency * 1000);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});

// commented out to fix CONF-16613
//document.getElementsByClassName = function(className, parentElement) {
//  var children = (document.body || $(parentElement)).getElementsByTagName('*');
//  return $A(children).inject([], function(elements, child) {
//    if (Element.hasClassName(child, className))
//      elements.push(child);
//    return elements;
//  });
//}

/*--------------------------------------------------------------------------*/

if (!window.Element) {
  var Element = new Object();
}

Object.extend(Element, {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      Element[Element.visible(element) ? 'show' : 'hide'](element);
    }
  },

  hide: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = 'none';
    }
  },

  show: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = '';
    }
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
  },

  getHeight: function(element) {
    element = $(element);
    return element.offsetHeight;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).include(className);
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).add(className);
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).remove(className);
  },

  // removes whitespace-only text node children
  cleanWhitespace: function(element) {
    element = $(element);
    for (var i = 0; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        Element.remove(node);
    }
  },

  empty: function(element) {
    return $(element).innerHTML.match(/^\s*$/);
  },

  scrollTo: function(element) {
    element = $(element);
    var x = element.x ? element.x : element.offsetLeft,
        y = element.y ? element.y : element.offsetTop;
    window.scrollTo(x, y);
  }
});

var Toggle = new Object();
Toggle.display = Element.toggle;

/*--------------------------------------------------------------------------*/

Abstract.Insertion = function(adjacency) {
  this.adjacency = adjacency;
}

Abstract.Insertion.prototype = {
  initialize: function(element, content) {
    this.element = $(element);
    this.content = content;

    if (this.adjacency && this.element.insertAdjacentHTML) {
      try {
        this.element.insertAdjacentHTML(this.adjacency, this.content);
      } catch (e) {
        if (this.element.tagName.toLowerCase() == 'tbody') {
          this.fragment = this.contentFromAnonymousTable();
          this.insertContent();
        } else {
          throw e;
        }
      }
    } else {
      this.range = this.element.ownerDocument.createRange();
      if (this.initializeRange) this.initializeRange();
      this.fragment = this.range.createContextualFragment(this.content);
      this.insertContent();
    }
  },

  contentFromAnonymousTable: function() {
    var div = document.createElement('div');
    div.innerHTML = '<table><tbody>' + this.content + '</tbody></table>';
    return div.childNodes[0].childNodes[0].childNodes[0];
  }
}

var Insertion = new Object();

Insertion.Before = Class.create();
Insertion.Before.prototype = Object.extend(new Abstract.Insertion('beforeBegin'), {
  initializeRange: function() {
    this.range.setStartBefore(this.element);
  },

  insertContent: function() {
    this.element.parentNode.insertBefore(this.fragment, this.element);
  }
});

Insertion.Top = Class.create();
Insertion.Top.prototype = Object.extend(new Abstract.Insertion('afterBegin'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(true);
  },

  insertContent: function() {
    this.element.insertBefore(this.fragment, this.element.firstChild);
  }
});

Insertion.Bottom = Class.create();
Insertion.Bottom.prototype = Object.extend(new Abstract.Insertion('beforeEnd'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(this.element);
  },

  insertContent: function() {
    this.element.appendChild(this.fragment);
  }
});

Insertion.After = Class.create();
Insertion.After.prototype = Object.extend(new Abstract.Insertion('afterEnd'), {
  initializeRange: function() {
    this.range.setStartAfter(this.element);
  },

  insertContent: function() {
    this.element.parentNode.insertBefore(this.fragment,
      this.element.nextSibling);
  }
});

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set(this.toArray().concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set(this.select(function(className) {
      return className != classNameToRemove;
    }));
  },

  toString: function() {
    return this.toArray().join(' ');
  }
}

Object.extend(Element.ClassNames.prototype, Enumerable);

var Field = {
  clear: function() {
    for (var i = 0; i < arguments.length; i++)
      $(arguments[i]).value = '';
  },

  focus: function(element) {
    $(element).focus();
  },

  present: function() {
    for (var i = 0; i < arguments.length; i++)
      if ($(arguments[i]).value == '') return false;
    return true;
  },

  select: function(element) {
    $(element).select();
  },

  activate: function(element) {
    $(element).focus();
    $(element).select();
  }
}

/*--------------------------------------------------------------------------*/

var Form = {
  serialize: function(form) {
    var elements = Form.getElements($(form));
    var queryComponents = new Array();

    for (var i = 0; i < elements.length; i++) {
      var queryComponent = Form.Element.serialize(elements[i]);
      if (queryComponent)
        queryComponents.push(queryComponent);
    }

    return queryComponents.join('&');
  },

  getElements: function(form) {
    var form = $(form);
    var elements = new Array();

    for (tagName in Form.Element.Serializers) {
      var tagElements = form.getElementsByTagName(tagName);
      for (var j = 0; j < tagElements.length; j++)
        elements.push(tagElements[j]);
    }
    return elements;
  },

  getInputs: function(form, typeName, name) {
    var form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name)
      return inputs;

    var matchingInputs = new Array();
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) ||
          (name && input.name != name))
        continue;
      matchingInputs.push(input);
    }

    return matchingInputs;
  },

  disable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.blur();
      element.disabled = 'true';
    }
  },

  enable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.disabled = '';
    }
  },

  focusFirstElement: function(form) {
    var form = $(form);
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.type != 'hidden' && !element.disabled) {
        Field.activate(element);
        break;
      }
    }
  },

  reset: function(form) {
    $(form).reset();
  }
}

Form.Element = {
  serialize: function(element) {
    var element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter)
      return encodeURIComponent(parameter[0]) + '=' +
        encodeURIComponent(parameter[1]);
  },

  getValue: function(element) {
    var element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter)
      return parameter[1];
  }
}

Form.Element.Serializers = {
  input: function(element) {
    switch (element.type.toLowerCase()) {
      case 'submit':
      case 'hidden':
      case 'password':
      case 'text':
        return Form.Element.Serializers.textarea(element);
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element);
    }
    return false;
  },

  inputSelector: function(element) {
    if (element.checked)
      return [element.name, element.value];
  },

  textarea: function(element) {
    return [element.name, element.value];
  },

  select: function(element) {
    return Form.Element.Serializers[element.type == 'select-one' ?
      'selectOne' : 'selectMany'](element);
  },

  selectOne: function(element) {
    var value = '', opt, index = element.selectedIndex;
    if (index >= 0) {
      opt = element.options[index];
      value = opt.value;
      if (!value && !('value' in opt))
        value = opt.text;
    }
    return [element.name, value];
  },

  selectMany: function(element) {
    var value = new Array();
    for (var i = 0; i < element.length; i++) {
      var opt = element.options[i];
      if (opt.selected) {
        var optValue = opt.value;
        if (!optValue && !('value' in opt))
          optValue = opt.text;
        value.push(optValue);
      }
    }
    return [element.name, value];
  }
}

/*--------------------------------------------------------------------------*/

var $F = Form.Element.getValue;

/*--------------------------------------------------------------------------*/

Abstract.TimedObserver = function() {}
Abstract.TimedObserver.prototype = {
  initialize: function(element, frequency, callback) {
    this.frequency = frequency;
    this.element   = $(element);
    this.callback  = callback;

    this.lastValue = this.getValue();
    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
}

Form.Element.Observer = Class.create();
Form.Element.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create();
Form.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = function() {}
Abstract.EventObserver.prototype = {
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    var elements = Form.getElements(this.element);
    for (var i = 0; i < elements.length; i++)
      this.registerCallback(elements[i]);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          element.target = this;
          element.prev_onclick = element.onclick || Prototype.emptyFunction;
          element.onclick = function() {
            this.prev_onclick();
            this.target.onElementEvent();
          }
          break;
        case 'password':
        case 'text':
        case 'textarea':
        case 'select-one':
        case 'select-multiple':
          element.target = this;
          element.prev_onchange = element.onchange || Prototype.emptyFunction;
          element.onchange = function() {
            this.prev_onchange();
            this.target.onElementEvent();
          }
          break;
      }
    }
  }
}

Form.Element.EventObserver = Class.create();
Form.Element.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create();
Form.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});


if (!window.Event) {
  var Event = new Object();
}

Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB:       9,
  KEY_RETURN:   13,
  KEY_ESC:      27,
  KEY_LEFT:     37,
  KEY_UP:       38,
  KEY_RIGHT:    39,
  KEY_DOWN:     40,
  KEY_DELETE:   46,

  element: function(event) {
    return event.target || event.srcElement;
  },

  isLeftClick: function(event) {
    return (((event.which) && (event.which == 1)) ||
            ((event.button) && (event.button == 1)));
  },

  pointerX: function(event) {
    return event.pageX || (event.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft));
  },

  pointerY: function(event) {
    return event.pageY || (event.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop));
  },

  stop: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.cancelBubble = true;
    }
  },

  // find the first node with the given tagName, starting from the
  // node the event was triggered on; traverses the DOM upwards
  findElement: function(event, tagName) {
    var element = Event.element(event);
    while (element.parentNode && (!element.tagName ||
        (element.tagName.toUpperCase() != tagName.toUpperCase())))
      element = element.parentNode;
    return element;
  },

  observers: false,

  _observeAndCache: function(element, name, observer, useCapture) {
    if (!this.observers) this.observers = [];
    if (element.addEventListener) {
      this.observers.push([element, name, observer, useCapture]);
      element.addEventListener(name, observer, useCapture);
    } else if (element.attachEvent) {
      this.observers.push([element, name, observer, useCapture]);
      element.attachEvent('on' + name, observer);
    }
  },

  unloadCache: function() {
    if (!Event.observers) return;
    for (var i = 0; i < Event.observers.length; i++) {
      Event.stopObserving.apply(this, Event.observers[i]);
      Event.observers[i][0] = null;
    }
    Event.observers = false;
  },

  observe: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.attachEvent))
      name = 'keydown';

    this._observeAndCache(element, name, observer, useCapture);
  },

  stopObserving: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.detachEvent))
      name = 'keydown';

    if (element.removeEventListener) {
      element.removeEventListener(name, observer, useCapture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + name, observer);
    }
  }
});

/* prevent memory leaks in IE */
Event.observe(window, 'unload', Event.unloadCache, false);

var Position = {

  // set to true if needed, warning: firefox performance problems
  // NOT neeeded for page scrolling, only if draggable contained in
  // scrollable elements
  includeScrollOffsets: false,

  // must be called before calling withinIncludingScrolloffset, every time the
  // page is scrolled
  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  realOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return [valueL, valueT];
  },

  cumulativeOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  },

  // caches x/y coordinate pair to use with overlap
  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = this.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = this.realOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = this.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  // within must be called directly before
  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },

  clone: function(source, target) {
    source = $(source);
    target = $(target);
    target.style.position = 'absolute';
    var offsets = this.cumulativeOffset(source);
    target.style.top    = offsets[1] + 'px';
    target.style.left   = offsets[0] + 'px';
    target.style.width  = source.offsetWidth + 'px';
    target.style.height = source.offsetHeight + 'px';
  }
}

// Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
// 
// See scriptaculous.js for full license.

var Effect = {
  tagifyText: function(element) {
    var tagifyStyle = "position:relative";
    if(/MSIE/.test(navigator.userAgent)) tagifyStyle += ";zoom:1";
    element = $(element);
    $A(element.childNodes).each( function(child) {
      if(child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            Builder.node('span',{style: tagifyStyle},
              character == " " ? String.fromCharCode(160) : character), 
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if(((typeof element == 'object') || 
        (typeof element == 'function')) && 
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;
      
    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || {});
    var speed = options.speed;
    var delay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: delay + index * speed }));
    });
  }
};

var Effect2 = Effect; // deprecated

/* ------------- transitions ------------- */

Effect.Transitions = {}

Effect.Transitions.linear = function(pos) {
  return pos;
}
Effect.Transitions.sinoidal = function(pos) {
  return (-Math.cos(pos*Math.PI)/2) + 0.5;
}
Effect.Transitions.reverse  = function(pos) {
  return 1-pos;
}
Effect.Transitions.flicker = function(pos) {
  return ((-Math.cos(pos*Math.PI)/4) + 0.75) + Math.random()/4;
}
Effect.Transitions.wobble = function(pos) {
  return (-Math.cos(pos*Math.PI*(9*pos))/2) + 0.5;
}
Effect.Transitions.pulse = function(pos) {
  return (Math.floor(pos*10) % 2 == 0 ? 
    (pos*10-Math.floor(pos*10)) : 1-(pos*10-Math.floor(pos*10)));
}
Effect.Transitions.none = function(pos) {
  return 0;
}
Effect.Transitions.full = function(pos) {
  return 1;
}

/* ------------- core effects ------------- */

Effect.Queue = {
  effects:  [],
  interval: null,
  add: function(effect) {
    var timestamp = new Date().getTime();
    
    switch(effect.options.queue) {
      case 'front':
        // move unstarted effects after this effect  
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }
    
    effect.startOn  += timestamp;
    effect.finishOn += timestamp;
    this.effects.push(effect);
    if(!this.interval) 
      this.interval = setInterval(this.loop.bind(this), 40);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if(this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    this.effects.invoke('loop', timePos);
  }
}

Effect.Base = function() {};
Effect.Base.prototype = {
  position: null,
  setOptions: function(options) {
    this.options = Object.extend({
      transition: Effect.Transitions.sinoidal,
      duration:   1.0,   // seconds
      fps:        25.0,  // max. 25fps due to Effect.Queue implementation
      sync:       false, // true for combining
      from:       0.0,
      to:         1.0,
      delay:      0.0,
      queue:      'parallel'
    }, options || {});
  },
  start: function(options) {
    this.setOptions(options || {});
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn + (this.options.duration*1000);
    this.event('beforeStart');
    if(!this.options.sync) Effect.Queue.add(this);
  },
  loop: function(timePos) {
    if(timePos >= this.startOn) {
      if(timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if(this.finish) this.finish(); 
        this.event('afterFinish');
        return;  
      }
      var pos   = (timePos - this.startOn) / (this.finishOn - this.startOn);
      var frame = Math.round(pos * this.options.fps * this.options.duration);
      if(frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  render: function(pos) {
    if(this.state == 'idle') {
      this.state = 'running';
      this.event('beforeSetup');
      if(this.setup) this.setup();
      this.event('afterSetup');
    }
    if(this.options.transition) pos = this.options.transition(pos);
    pos *= (this.options.to-this.options.from);
    pos += this.options.from;
    this.position = pos;
    this.event('beforeUpdate');
    if(this.update) this.update(pos);
    this.event('afterUpdate');
  },
  cancel: function() {
    if(!this.options.sync) Effect.Queue.remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if(this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if(this.options[eventName]) this.options[eventName](this);
  }
}

Effect.Parallel = Class.create();
Object.extend(Object.extend(Effect.Parallel.prototype, Effect.Base.prototype), {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if(effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Opacity = Class.create();
Object.extend(Object.extend(Effect.Opacity.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    // make this work on IE on elements without 'layout'
    if(/MSIE/.test(navigator.userAgent) && (!this.element.hasLayout))
      this.element.style.zoom = 1;
    var options = Object.extend({
      from: Element.getOpacity(this.element) || 0.0,
      to:   1.0
    }, arguments[1] || {});
    this.start(options);
  },
  update: function(position) {
    Element.setOpacity(this.element, position);
  }
});

Effect.MoveBy = Class.create();
Object.extend(Object.extend(Effect.MoveBy.prototype, Effect.Base.prototype), {
  initialize: function(element, toTop, toLeft) {
    this.element      = $(element);
    this.toTop        = toTop;
    this.toLeft       = toLeft;
    this.start(arguments[3]);
  },
  setup: function() {
    // Bug in Opera: Opera returns the "real" position of a static element or
    // relative element that does not have top/left explicitly set.
    // ==> Always set top and left for position relative elements in your stylesheets 
    // (to 0 if you do not need them)
    
    Element.makePositioned(this.element);
    this.originalTop  = parseFloat(Element.getStyle(this.element,'top')  || '0');
    this.originalLeft = parseFloat(Element.getStyle(this.element,'left') || '0');
  },
  update: function(position) {
    var topd  = this.toTop  * position + this.originalTop;
    var leftd = this.toLeft * position + this.originalLeft;
    this.setPosition(topd, leftd);
  },
  setPosition: function(topd, leftd) {
    this.element.style.top  = topd  + "px";
    this.element.style.left = leftd + "px";
  }
});

Effect.Scale = Class.create();
Object.extend(Object.extend(Effect.Scale.prototype, Effect.Base.prototype), {
  initialize: function(element, percent) {
    this.element = $(element)
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or {} with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || {});
    this.start(options);
  },
  setup: function() {
    var effect = this;
    
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = Element.getStyle(this.element,'position');
    
    effect.originalStyle = {};
    ['top','left','width','height','fontSize'].each( function(k) {
      effect.originalStyle[k] = effect.element.style[k];
    });
      
    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;
    
    var fontSize = Element.getStyle(this.element,'font-size') || "100%";
    ['em','px','%'].each( function(fontSizeType) {
      if(fontSize.indexOf(fontSizeType)>0) {
        effect.fontSize     = parseFloat(fontSize);
        effect.fontSizeType = fontSizeType;
      }
    });
    
    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;
    
    this.dims = null;
    if(this.options.scaleMode=='box')
      this.dims = [this.element.clientHeight, this.element.clientWidth];
    if(this.options.scaleMode=='content')
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if(!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if(this.options.scaleContent && this.fontSize)
      this.element.style.fontSize = this.fontSize*currentScale + this.fontSizeType;
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) {
      var effect = this;
      ['top','left','width','height','fontSize'].each( function(k) {
        effect.element.style[k] = effect.originalStyle[k];
      });
    }
  },
  setDimensions: function(height, width) {
    var els = this.element.style;
    if(this.options.scaleX) els.width = width + 'px';
    if(this.options.scaleY) els.height = height + 'px';
    if(this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if(this.elementPositioning == 'absolute') {
        if(this.options.scaleY) els.top = this.originalTop-topd + "px";
        if(this.options.scaleX) els.left = this.originalLeft-leftd + "px";
      } else {
        if(this.options.scaleY) els.top = -topd + "px";
        if(this.options.scaleX) els.left = -leftd + "px";
      }
    }
  }
});

Effect.Highlight = Class.create();
Object.extend(Object.extend(Effect.Highlight.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    var options = Object.extend({
      startcolor:   "#ffff99"
    }, arguments[1] || {});
    this.start(options);
  },
  setup: function() {
    // Disable background image during the effect
    this.oldBgImage = this.element.style.backgroundImage;
    this.element.style.backgroundImage = "none";
    if(!this.options.endcolor)
      this.options.endcolor = Element.getStyle(this.element, 'background-color').parseColor('#ffffff');
    if (typeof this.options.restorecolor == "undefined")
      this.options.restorecolor = this.element.style.backgroundColor;
    // init color calculations
    this.colors_base = [
      parseInt(this.options.startcolor.slice(1,3),16),
      parseInt(this.options.startcolor.slice(3,5),16),
      parseInt(this.options.startcolor.slice(5),16) ];
    this.colors_delta = [
      parseInt(this.options.endcolor.slice(1,3),16)-this.colors_base[0],
      parseInt(this.options.endcolor.slice(3,5),16)-this.colors_base[1],
      parseInt(this.options.endcolor.slice(5),16)-this.colors_base[2]];
  },
  update: function(position) {
    var effect = this; var colors = $R(0,2).map( function(i){ 
      return Math.round(effect.colors_base[i]+(effect.colors_delta[i]*position))
    });
    this.element.style.backgroundColor = "#" +
      colors[0].toColorPart() + colors[1].toColorPart() + colors[2].toColorPart();
  },
  finish: function() {
    this.element.style.backgroundColor = this.options.restorecolor;
    this.element.style.backgroundImage = this.oldBgImage;
  }
});

Effect.ScrollTo = Class.create();
Object.extend(Object.extend(Effect.ScrollTo.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    this.start(arguments[1] || {});
  },
  setup: function() {
    Position.prepare();
    var offsets = Position.cumulativeOffset(this.element);
    var max = window.innerHeight ? 
      window.height - window.innerHeight :
      document.body.scrollHeight - 
        (document.documentElement.clientHeight ? 
          document.documentElement.clientHeight : document.body.clientHeight);
    this.scrollStart = Position.deltaY;
    this.delta = (offsets[1] > max ? max : offsets[1]) - this.scrollStart;
  },
  update: function(position) {
    Position.prepare();
    window.scrollTo(Position.deltaX, 
      this.scrollStart + (position*this.delta));
  }
});

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  var oldOpacity = Element.getInlineOpacity(element);
  var options = Object.extend({
  from: Element.getOpacity(element) || 1.0,
  to:   0.0,
  afterFinishInternal: function(effect) 
    { if (effect.options.to == 0) {
        Element.hide(effect.element);
        Element.setInlineOpacity(effect.element, oldOpacity);
      }  
    }
  }, arguments[1] || {});
  return new Effect.Opacity(element,options);
}

Effect.Appear = function(element) {
  var options = Object.extend({
  from: (Element.getStyle(element, "display") == "none" ? 0.0 : Element.getOpacity(element) || 0.0),
  to:   1.0,
  beforeSetup: function(effect)  
    { Element.setOpacity(effect.element, effect.options.from);
      Element.show(effect.element); }
  }, arguments[1] || {});
  return new Effect.Opacity(element,options);
}

Effect.Puff = function(element) {
  element = $(element);
  var oldOpacity = Element.getInlineOpacity(element);
  var oldPosition = element.style.position;
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200, 
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }), 
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ], 
     Object.extend({ duration: 1.0, 
      beforeSetupInternal: function(effect) 
       { effect.effects[0].element.style.position = 'absolute'; },
      afterFinishInternal: function(effect)
       { Element.hide(effect.effects[0].element);
         effect.effects[0].element.style.position = oldPosition;
         Element.setInlineOpacity(effect.effects[0].element, oldOpacity); }
     }, arguments[1] || {})
   );
}

Effect.BlindUp = function(element) {
  element = $(element);
  Element.makeClipping(element);
  return new Effect.Scale(element, 0, 
    Object.extend({ scaleContent: false, 
      scaleX: false, 
      restoreAfterFinish: true,
      afterFinishInternal: function(effect)
        { 
          Element.hide(effect.element);
          Element.undoClipping(effect.element);
        } 
    }, arguments[1] || {})
  );
}

Effect.BlindDown = function(element) {
  element = $(element);
  var oldHeight = element.style.height;
  var elementDimensions = Element.getDimensions(element);
  return new Effect.Scale(element, 100, 
    Object.extend({ scaleContent: false, 
      scaleX: false,
      scaleFrom: 0,
      scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
      restoreAfterFinish: true,
      afterSetup: function(effect) {
        Element.makeClipping(effect.element);
        effect.element.style.height = "0px";
        Element.show(effect.element); 
      },  
      afterFinishInternal: function(effect) {
        Element.undoClipping(effect.element);
        effect.element.style.height = oldHeight;
      }
    }, arguments[1] || {})
  );
}

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = Element.getInlineOpacity(element);
  return new Effect.Appear(element, { 
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, { 
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) { 
          Element.makePositioned(effect.element); 
          Element.makeClipping(effect.element);
        },
        afterFinishInternal: function(effect) { 
          Element.hide(effect.element); 
          Element.undoClipping(effect.element);
          Element.undoPositioned(effect.element);
          Element.setInlineOpacity(effect.element, oldOpacity);
        }
      })
    }
  });
}

Effect.DropOut = function(element) {
  element = $(element);
  var oldTop = element.style.top;
  var oldLeft = element.style.left;
  var oldOpacity = Element.getInlineOpacity(element);
  return new Effect.Parallel(
    [ new Effect.MoveBy(element, 100, 0, { sync: true }), 
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) { 
          Element.makePositioned(effect.effects[0].element); },
        afterFinishInternal: function(effect) { 
          Element.hide(effect.effects[0].element); 
          Element.undoPositioned(effect.effects[0].element);
          effect.effects[0].element.style.left = oldLeft;
          effect.effects[0].element.style.top = oldTop;
          Element.setInlineOpacity(effect.effects[0].element, oldOpacity); } 
      }, arguments[1] || {}));
}

Effect.Shake = function(element) {
  element = $(element);
  var oldTop = element.style.top;
  var oldLeft = element.style.left;
  return new Effect.MoveBy(element, 0, 20, 
    { duration: 0.05, afterFinishInternal: function(effect) {
  new Effect.MoveBy(effect.element, 0, -40, 
    { duration: 0.1, afterFinishInternal: function(effect) {
  new Effect.MoveBy(effect.element, 0, 40, 
    { duration: 0.1, afterFinishInternal: function(effect) {
  new Effect.MoveBy(effect.element, 0, -40, 
    { duration: 0.1, afterFinishInternal: function(effect) {
  new Effect.MoveBy(effect.element, 0, 40, 
    { duration: 0.1, afterFinishInternal: function(effect) {
  new Effect.MoveBy(effect.element, 0, -20, 
    { duration: 0.05, afterFinishInternal: function(effect) {
        Element.undoPositioned(effect.element);
        effect.element.style.left = oldLeft;
        effect.element.style.top = oldTop;
  }}) }}) }}) }}) }}) }});
}

Effect.SlideDown = function(element) {
  element = $(element);
  Element.cleanWhitespace(element);
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.firstChild.style.bottom;
  var elementDimensions = Element.getDimensions(element);
  return new Effect.Scale(element, 100, 
   Object.extend({ scaleContent: false, 
    scaleX: false, 
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},    
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      Element.makePositioned(effect.element.firstChild);
      if (window.opera) effect.element.firstChild.style.top = "";
      Element.makeClipping(effect.element);
      element.style.height = '0';
      Element.show(element); 
    },  
    afterUpdateInternal: function(effect) { 
      effect.element.firstChild.style.bottom = 
        (effect.originalHeight - effect.element.clientHeight) + 'px'; },
    afterFinishInternal: function(effect) { 
      Element.undoClipping(effect.element); 
      Element.undoPositioned(effect.element.firstChild);
      effect.element.firstChild.style.bottom = oldInnerBottom; }
    }, arguments[1] || {})
  );
}
  
Effect.SlideUp = function(element) {
  element = $(element);
  Element.cleanWhitespace(element);
  var oldInnerBottom = element.firstChild.style.bottom;
  return new Effect.Scale(element, 0, 
   Object.extend({ scaleContent: false, 
    scaleX: false, 
    scaleMode: 'box',
    scaleFrom: 100,
    restoreAfterFinish: true,
    beforeStartInternal: function(effect) { 
      Element.makePositioned(effect.element.firstChild);
      if (window.opera) effect.element.firstChild.style.top = "";
      Element.makeClipping(effect.element);
      Element.show(element); 
    },  
    afterUpdateInternal: function(effect) { 
     effect.element.firstChild.style.bottom = 
       (effect.originalHeight - effect.element.clientHeight) + 'px'; },
    afterFinishInternal: function(effect) { 
        Element.hide(effect.element);
        Element.undoClipping(effect.element); 
        Element.undoPositioned(effect.element.firstChild);
        effect.element.firstChild.style.bottom = oldInnerBottom; }
   }, arguments[1] || {})
  );
}

Effect.Squish = function(element) {
  // Bug in opera makes the TD containing this element expand for a instance after finish 
  return new Effect.Scale(element, window.opera ? 1 : 0, 
    { restoreAfterFinish: true,
      beforeSetup: function(effect) { 
        Element.makeClipping(effect.element); },  
      afterFinishInternal: function(effect) { 
        Element.hide(effect.element); 
        Element.undoClipping(effect.element); } 
  });
}

Effect.Grow = function(element) {
  element = $(element);
  var options = arguments[1] || {};
  
  var elementDimensions = Element.getDimensions(element);
  var originalWidth = elementDimensions.width;
  var originalHeight = elementDimensions.height;
  var oldTop = element.style.top;
  var oldLeft = element.style.left;
  var oldHeight = element.style.height;
  var oldWidth = element.style.width;
  var oldOpacity = Element.getInlineOpacity(element);
  
  var direction = options.direction || 'center';
  var moveTransition = options.moveTransition || Effect.Transitions.sinoidal;
  var scaleTransition = options.scaleTransition || Effect.Transitions.sinoidal;
  var opacityTransition = options.opacityTransition || Effect.Transitions.full;
  
  var initialMoveX, initialMoveY;
  var moveX, moveY;
  
  switch (direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0; 
      break;
    case 'top-right':
      initialMoveX = originalWidth;
      initialMoveY = moveY = 0;
      moveX = -originalWidth;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = originalHeight;
      moveY = -originalHeight;
      break;
    case 'bottom-right':
      initialMoveX = originalWidth;
      initialMoveY = originalHeight;
      moveX = -originalWidth;
      moveY = -originalHeight;
      break;
    case 'center':
      initialMoveX = originalWidth / 2;
      initialMoveY = originalHeight / 2;
      moveX = -originalWidth / 2;
      moveY = -originalHeight / 2;
      break;
  }
  
  return new Effect.MoveBy(element, initialMoveY, initialMoveX, { 
    duration: 0.01, 
    beforeSetup: function(effect) { 
      Element.hide(effect.element);
      Element.makeClipping(effect.element);
      Element.makePositioned(effect.element);
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: opacityTransition }),
          new Effect.MoveBy(effect.element, moveY, moveX, { sync: true, transition: moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: originalHeight, originalWidth: originalWidth }, 
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
              effect.effects[0].element.style.height = 0;
              Element.show(effect.effects[0].element);
             },              
             afterFinishInternal: function(effect) {
               var el = effect.effects[0].element;
               var els = el.style;
               Element.undoClipping(el); 
               Element.undoPositioned(el);
               els.top = oldTop;
               els.left = oldLeft;
               els.height = oldHeight;
               els.width = originalWidth;
               Element.setInlineOpacity(el, oldOpacity);
             }
           }, options)
      )
    }
  });
}

Effect.Shrink = function(element) {
  element = $(element);
  var options = arguments[1] || {};
  
  var originalWidth = element.clientWidth;
  var originalHeight = element.clientHeight;
  var oldTop = element.style.top;
  var oldLeft = element.style.left;
  var oldHeight = element.style.height;
  var oldWidth = element.style.width;
  var oldOpacity = Element.getInlineOpacity(element);

  var direction = options.direction || 'center';
  var moveTransition = options.moveTransition || Effect.Transitions.sinoidal;
  var scaleTransition = options.scaleTransition || Effect.Transitions.sinoidal;
  var opacityTransition = options.opacityTransition || Effect.Transitions.none;
  
  var moveX, moveY;
  
  switch (direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = originalWidth;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = originalHeight;
      break;
    case 'bottom-right':
      moveX = originalWidth;
      moveY = originalHeight;
      break;
    case 'center':  
      moveX = originalWidth / 2;
      moveY = originalHeight / 2;
      break;
  }
  
  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: scaleTransition, restoreAfterFinish: true}),
      new Effect.MoveBy(element, moveY, moveX, { sync: true, transition: moveTransition })
    ], Object.extend({            
         beforeStartInternal: function(effect) { 
           Element.makePositioned(effect.effects[0].element);
           Element.makeClipping(effect.effects[0].element);
         },
         afterFinishInternal: function(effect) {
           var el = effect.effects[0].element;
           var els = el.style;
           Element.hide(el);
           Element.undoClipping(el); 
           Element.undoPositioned(el);
           els.top = oldTop;
           els.left = oldLeft;
           els.height = oldHeight;
           els.width = oldWidth;
           Element.setInlineOpacity(el, oldOpacity);
         }
       }, options)
  );
}

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || {};
  var oldOpacity = Element.getInlineOpacity(element);
  var transition = options.transition || Effect.Transitions.sinoidal;
  var reverser   = function(pos){ return transition(1-Effect.Transitions.pulse(pos)) };
  reverser.bind(transition);
  return new Effect.Opacity(element, 
    Object.extend(Object.extend({  duration: 3.0, from: 0,
      afterFinishInternal: function(effect) { Element.setInlineOpacity(effect.element, oldOpacity); }
    }, options), {transition: reverser}));
}

Effect.Fold = function(element) {
  element = $(element);
  var originalTop = element.style.top;
  var originalLeft = element.style.left;
  var originalWidth = element.style.width;
  var originalHeight = element.style.height;
  Element.makeClipping(element);
  return new Effect.Scale(element, 5, Object.extend({   
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, { 
      scaleContent: false, 
      scaleY: false,
      afterFinishInternal: function(effect) { 
        Element.hide(effect.element);  
        Element.undoClipping(effect.element); 
        effect.element.style.top = originalTop;
        effect.element.style.left = originalLeft;
        effect.element.style.width = originalWidth;
        effect.element.style.height = originalHeight;
      } });
  }}, arguments[1] || {}));
}

// Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// 
// Element.Class part Copyright (c) 2005 by Rick Olson
// 
// See scriptaculous.js for full license.

/*--------------------------------------------------------------------------*/

var Droppables = {
  drops: [],

  remove: function(element) {
    this.drops = this.drops.reject(function(d) { return d.element==element });
  },

  add: function(element) {
    element = $(element);
    var options = Object.extend({
      greedy:     true,
      hoverclass: null  
    }, arguments[1] || {});

    // cache containers
    if(options.containment) {
      options._containers = [];
      var containment = options.containment;
      if((typeof containment == 'object') && 
        (containment.constructor == Array)) {
        containment.each( function(c) { options._containers.push($(c)) });
      } else {
        options._containers.push($(containment));
      }
    }

    Element.makePositioned(element); // fix IE
    options.element = element;

    this.drops.push(options);
  },

  isContained: function(element, drop) {
    var parentNode = element.parentNode;
    return drop._containers.detect(function(c) { return parentNode == c });
  },

  isAffected: function(pX, pY, element, drop) {
    return (
      (drop.element!=element) &&
      ((!drop._containers) ||
        this.isContained(element, drop)) &&
      ((!drop.accept) ||
        (Element.Class.has_any(element, drop.accept))) &&
      Position.within(drop.element, pX, pY) );
  },

  deactivate: function(drop) {
    if(drop.hoverclass)
      Element.Class.remove(drop.element, drop.hoverclass);
    this.last_active = null;
  },

  activate: function(drop) {
    if(this.last_active) this.deactivate(this.last_active);
    if(drop.hoverclass)
      Element.Class.add(drop.element, drop.hoverclass);
    this.last_active = drop;
  },

  show: function(event, element) {
    if(!this.drops.length) return;
    var pX = Event.pointerX(event);
    var pY = Event.pointerY(event);
    Position.prepare();

    var i = this.drops.length-1; do {
      var drop = this.drops[i];
      if(this.isAffected(pX, pY, element, drop)) {
        if(drop.onHover)
           drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));
        if(drop.greedy) { 
          this.activate(drop);
          return;
        }
      }
    } while (i--);
    
    if(this.last_active) this.deactivate(this.last_active);
  },

  fire: function(event, element) {
    if(!this.last_active) return;
    Position.prepare();

    if (this.isAffected(Event.pointerX(event), Event.pointerY(event), element, this.last_active))
      if (this.last_active.onDrop) 
        this.last_active.onDrop(element, this.last_active.element, event);
  },

  reset: function() {
    if(this.last_active)
      this.deactivate(this.last_active);
  }
}

var Draggables = {
  observers: [],
  addObserver: function(observer) {
    this.observers.push(observer);    
  },
  removeObserver: function(element) {  // element instead of obsever fixes mem leaks
    this.observers = this.observers.reject( function(o) { return o.element==element });
  },
  notify: function(eventName, draggable) {  // 'onStart', 'onEnd'
    this.observers.invoke(eventName, draggable);
  }
}

/*--------------------------------------------------------------------------*/

var Draggable = Class.create();
Draggable.prototype = {
  initialize: function(element) {
    var options = Object.extend({
      handle: false,
      starteffect: function(element) { 
        new Effect.Opacity(element, {duration:0.2, from:1.0, to:0.7}); 
      },
      reverteffect: function(element, top_offset, left_offset) {
        var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
        new Effect.MoveBy(element, -top_offset, -left_offset, {duration:dur});
      },
      endeffect: function(element) { 
         new Effect.Opacity(element, {duration:0.2, from:0.7, to:1.0}); 
      },
      zindex: 1000,
      revert: false
    }, arguments[1] || {});

    this.element      = $(element);
    if(options.handle && (typeof options.handle == 'string'))
      this.handle = Element.Class.childrenWith(this.element, options.handle)[0];
      
    if(!this.handle) this.handle = $(options.handle);
    if(!this.handle) this.handle = this.element;

    Element.makePositioned(this.element); // fix IE    

    this.offsetX      = 0;
    this.offsetY      = 0;
    this.originalLeft = this.currentLeft();
    this.originalTop  = this.currentTop();
    this.originalX    = this.element.offsetLeft;
    this.originalY    = this.element.offsetTop;

    this.options      = options;

    this.active       = false;
    this.dragging     = false;   

    this.eventMouseDown = this.startDrag.bindAsEventListener(this);
    this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
    this.eventMouseMove = this.update.bindAsEventListener(this);
    this.eventKeypress  = this.keyPress.bindAsEventListener(this);
    
    this.registerEvents();
  },
  destroy: function() {
    Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
    this.unregisterEvents();
  },
  registerEvents: function() {
    Event.observe(document, "mouseup", this.eventMouseUp);
    Event.observe(document, "mousemove", this.eventMouseMove);
    Event.observe(document, "keypress", this.eventKeypress);
    Event.observe(this.handle, "mousedown", this.eventMouseDown);
  },
  unregisterEvents: function() {
    //if(!this.active) return;
    //Event.stopObserving(document, "mouseup", this.eventMouseUp);
    //Event.stopObserving(document, "mousemove", this.eventMouseMove);
    //Event.stopObserving(document, "keypress", this.eventKeypress);
  },
  currentLeft: function() {
    return parseInt(this.element.style.left || '0');
  },
  currentTop: function() {
    return parseInt(this.element.style.top || '0')
  },
  startDrag: function(event) {
    if(Event.isLeftClick(event)) {
      
      // abort on form elements, fixes a Firefox issue
      var src = Event.element(event);
      if(src.tagName && (
        src.tagName=='INPUT' ||
        src.tagName=='SELECT' ||
        src.tagName=='BUTTON' ||
        src.tagName=='TEXTAREA')) return;
      
      // this.registerEvents();
      this.active = true;
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      var offsets = Position.cumulativeOffset(this.element);
      this.offsetX =  (pointer[0] - offsets[0]);
      this.offsetY =  (pointer[1] - offsets[1]);
      Event.stop(event);
    }
  },
  finishDrag: function(event, success) {
    // this.unregisterEvents();

    this.active = false;
    this.dragging = false;

    if(this.options.ghosting) {
      Position.relativize(this.element);
      Element.remove(this._clone);
      this._clone = null;
    }

    if(success) Droppables.fire(event, this.element);
    Draggables.notify('onEnd', this);

    var revert = this.options.revert;
    if(revert && typeof revert == 'function') revert = revert(this.element);

    if(revert && this.options.reverteffect) {
      this.options.reverteffect(this.element, 
      this.currentTop()-this.originalTop,
      this.currentLeft()-this.originalLeft);
    } else {
      this.originalLeft = this.currentLeft();
      this.originalTop  = this.currentTop();
    }

    if(this.originalZ && this.options.zindex)
      this.element.style.zIndex = this.originalZ;

    if(this.options.endeffect) 
      this.options.endeffect(this.element);


    Droppables.reset();
  },
  keyPress: function(event) {
    if(this.active) {
      if(event.keyCode==Event.KEY_ESC) {
        this.finishDrag(event, false);
        Event.stop(event);
      }
    }
  },
  endDrag: function(event) {
    if(this.active && this.dragging) {
      this.finishDrag(event, true);
      Event.stop(event);
    }
    this.active = false;
    this.dragging = false;
  },
  draw: function(event) {
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    var offsets = Position.cumulativeOffset(this.element);
    offsets[0] -= this.currentLeft();
    offsets[1] -= this.currentTop();
    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal'))
      style.left = (pointer[0] - offsets[0] - this.offsetX) + "px";
    if((!this.options.constraint) || (this.options.constraint=='vertical'))
      style.top  = (pointer[1] - offsets[1] - this.offsetY) + "px";
    if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
  },
  update: function(event) {
   if(this.active) {
      if(!this.dragging) {
        var style = this.element.style;
        this.dragging = true;
        
        if(Element.getStyle(this.element,'position')=='') 
          style.position = "relative";
        
        if(this.options.zindex) {
          this.options.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
          style.zIndex = this.options.zindex;
        }

        if(this.options.ghosting) {
          this._clone = this.element.cloneNode(true);
          Position.absolutize(this.element);
          this.element.parentNode.insertBefore(this._clone, this.element);
        }

        Draggables.notify('onStart', this);
        if(this.options.starteffect) this.options.starteffect(this.element);
      }

      Droppables.show(event, this.element);
      this.draw(event);
      if(this.options.change) this.options.change(this);

      // fix AppleWebKit rendering
      if(navigator.appVersion.indexOf('AppleWebKit')>0) window.scrollBy(0,0); 

      Event.stop(event);
   }
  }
}

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create();
SortableObserver.prototype = {
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },
  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },
  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element))
      this.observer(this.element)
  }
}

var Sortable = {
  sortables: new Array(),
  options: function(element){
    element = $(element);
    return this.sortables.detect(function(s) { return s.element == element });
  },
  destroy: function(element){
    element = $(element);
    this.sortables.findAll(function(s) { return s.element == element }).each(function(s){
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d) });
      s.draggables.invoke('destroy');
    });
    this.sortables = this.sortables.reject(function(s) { return s.element == element });
  },
  create: function(element) {
    element = $(element);
    var options = Object.extend({ 
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,      // fixme: unimplemented
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      hoverclass:  null,
      ghosting:    false,
      format:      null,
      onChange:    function() {},
      onUpdate:    function() {}
    }, arguments[1] || {});

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect)
      options_for_draggable.starteffect = options.starteffect;

    if(options.reverteffect)
      options_for_draggable.reverteffect = options.reverteffect;
    else
      if(options.ghosting) options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };

    if(options.endeffect)
      options_for_draggable.endeffect = options.endeffect;

    if(options.zindex)
      options_for_draggable.zindex = options.zindex;

    // build options for the droppables  
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover,
      greedy:      !options.dropOnEmpty
    }

    // fix for gecko engine
    Element.cleanWhitespace(element); 

    options.draggables = [];
    options.droppables = [];

    // make it so

    // drop on empty handling
    if(options.dropOnEmpty) {
      Droppables.add(element,
        {containment: options.containment, onHover: Sortable.onEmptyHover, greedy: false});
      options.droppables.push(element);
    }

    (this.findElements(element, options) || []).each( function(e) {
      // handles are per-draggable
      var handle = options.handle ? 
        Element.Class.childrenWith(e, options.handle)[0] : e;    
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      options.droppables.push(e);      
    });

    // keep reference
    this.sortables.push(options);

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    if(!element.hasChildNodes()) return null;
    var elements = [];
    $A(element.childNodes).each( function(e) {
      if(e.tagName && e.tagName==options.tag.toUpperCase() &&
        (!options.only || (Element.Class.has(e, options.only))))
          elements.push(e);
      if(options.tree) {
        var grandchildren = this.findElements(e, options);
        if(grandchildren) elements.push(grandchildren);
      }
    });

    return (elements.length>0 ? elements.flatten() : null);
  },

  onHover: function(element, dropon, overlap) {
    if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode) 
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode) 
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },

  onEmptyHover: function(element, dropon) {
    if(element.parentNode!=dropon) {
      dropon.appendChild(element);
    }
  },

  unmark: function() {
    if(Sortable._marker) Element.hide(Sortable._marker);
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) return; 

    if(!Sortable._marker) {
      Sortable._marker = $('dropmarker') || document.createElement('DIV');
      Element.hide(Sortable._marker);
      Element.Class.add(Sortable._marker, 'dropmarker');
      Sortable._marker.style.position = 'absolute';
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }    
    var offsets = Position.cumulativeOffset(dropon);
    Sortable._marker.style.top  = offsets[1] + 'px';
    if(position=='after') Sortable._marker.style.top = (offsets[1]+dropon.clientHeight) + 'px';
    Sortable._marker.style.left = offsets[0] + 'px';
    Element.show(Sortable._marker);
  },

  serialize: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag:  sortableOptions.tag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format || /^[^_]*_(.*)$/
    }, arguments[1] || {});
    return $(this.findElements(element, options) || []).collect( function(item) {
      return (encodeURIComponent(options.name) + "[]=" + 
              encodeURIComponent(item.id.match(options.format) ? item.id.match(options.format)[1] : ''));
    }).join("&");
  }
} 
// Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
// 
// See scriptaculous.js for full license.

// Autocompleter.Base handles all the autocompletion functionality 
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least, 
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method 
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most 
// useful when one of the tokens is \n (a newline), as it 
// allows smart autocompletion after linebreaks.

var Autocompleter = {}
Autocompleter.Base = function() {};
Autocompleter.Base.prototype = {
  baseInitialize: function(element, update, options) {
    this.element     = $(element); 
    this.update      = $(update);  
    this.hasFocus    = false; 
    this.changed     = false; 
    this.active      = false; 
    this.index       = 0;     
    this.entryCount  = 0;

    if (this.setOptions)
      this.setOptions(options);
    else
      this.options = options || {};

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow || 
    function(element, update){ 
      if(!update.style.position || update.style.position=='absolute') {
        update.style.position = 'absolute';
        Position.clone(element, update, {setHeight: false, offsetTop: element.offsetHeight});
      }
      Effect.Appear(update,{duration:0.15});
    };
    this.options.onHide = this.options.onHide || 
    function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if (typeof(this.options.tokens) == 'string') 
      this.options.tokens = new Array(this.options.tokens);

    this.observer = null;
    
    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, "blur", this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, "keypress", this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix && (navigator.appVersion.indexOf('MSIE')>0) && (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update, 
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },
  
  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix);
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         if(navigator.appVersion.indexOf('AppleWebKit')>0) Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         if(navigator.appVersion.indexOf('AppleWebKit')>0) Event.stop(event);
         return;
      }
     else 
      if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN) 
        return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer = 
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex) 
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },
  
  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },
  
  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;     
  }, 
  
  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ? 
          Element.addClassName(this.getEntry(i),"selected") : 
          Element.removeClassName(this.getEntry(i),"selected");
        
      if(this.hasFocus) { 
        this.show();
        this.active = true;
      }
    } else this.hide();
  },
  
  markPrevious: function() {
    if(this.index > 0) this.index--
      else this.index = this.entryCount-1;
  },
  
  markNext: function() {
    if(this.index < this.entryCount-1) this.index++
      else this.index = 0;
  },
  
  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },
  
  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },
  
  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }

    var value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');
    var lastTokenPos = this.findLastToken();
    if (lastTokenPos != -1) {
      var newValue = this.element.value.substr(0, lastTokenPos + 1);
      var whitespace = this.element.value.substr(lastTokenPos + 1).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value;
    } else {
      this.element.value = value;
    }
    this.element.focus();
    
    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.firstChild);

      if(this.update.firstChild && this.update.firstChild.childNodes) {
        this.entryCount = 
          this.update.firstChild.childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else { 
        this.entryCount = 0;
      }

      this.stopIndicator();

      this.index = 0;
      this.render();
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;   
    if(this.getToken().length>=this.options.minChars) {
      this.startIndicator();
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
  },

  getToken: function() {
    var tokenPos = this.findLastToken();
    if (tokenPos != -1)
      var ret = this.element.value.substr(tokenPos + 1).replace(/^\s+/,'').replace(/\s+$/,'');
    else
      var ret = this.element.value;

    return /\n/.test(ret) ? '' : ret;
  },

  findLastToken: function() {
    var lastTokenPos = -1;

    for (var i=0; i<this.options.tokens.length; i++) {
      var thisTokenPos = this.element.value.lastIndexOf(this.options.tokens[i]);
      if (thisTokenPos > lastTokenPos)
        lastTokenPos = thisTokenPos;
    }
    return lastTokenPos;
  }
}

Ajax.Autocompleter = Class.create();
Object.extend(Object.extend(Ajax.Autocompleter.prototype, Autocompleter.Base.prototype), {
  initialize: function(element, update, url, options) {
	  this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    entry = encodeURIComponent(this.options.paramName) + '=' + 
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams) 
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }

});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the 
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector' 
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create();
Autocompleter.Local.prototype = Object.extend(new Autocompleter.Base(), {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&  
          ret.length < instance.options.choices ; i++) { 

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ? 
            elem.toLowerCase().indexOf(entry.toLowerCase()) : 
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) { 
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" + 
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars && 
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ? 
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) : 
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length))
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || {});
  }
});

// AJAX in-place editor
//
// see documentation on http://wiki.script.aculo.us/scriptaculous/show/Ajax.InPlaceEditor

Ajax.InPlaceEditor = Class.create();
Ajax.InPlaceEditor.defaultHighlightColor = "#FFFF99";
Ajax.InPlaceEditor.prototype = {
  initialize: function(element, url, options) {
    this.url = url;
    this.element = $(element);

    this.options = Object.extend({
      okText: "ok",
      cancelText: "cancel",
      savingText: "Saving...",
      clickToEditText: "Click to edit",
      okText: "ok",
      rows: 1,
      onComplete: function(transport, element) {
        new Effect.Highlight(element, {startcolor: this.options.highlightcolor});
      },
      onFailure: function(transport) {
        alert("Error communicating with the server: " + transport.responseText.stripTags());
      },
      callback: function(form) {
        return Form.serialize(form);
      },
      handleLineBreaks: true,
      loadingText: 'Loading...',
      savingClassName: 'inplaceeditor-saving',
      loadingClassName: 'inplaceeditor-loading',
      formClassName: 'inplaceeditor-form',
      highlightcolor: Ajax.InPlaceEditor.defaultHighlightColor,
      highlightendcolor: "#FFFFFF",
      externalControl:	null,
      ajaxOptions: {}
    }, options || {});

    if(!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + "-inplaceeditor";
      if ($(this.options.formId)) {
        // there's already a form with that name, don't specify an id
        this.options.formId = null;
      }
    }
    
    if (this.options.externalControl) {
      this.options.externalControl = $(this.options.externalControl);
    }
    
    this.originalBackground = Element.getStyle(this.element, 'background-color');
    if (!this.originalBackground) {
      this.originalBackground = "transparent";
    }
    
    this.element.title = this.options.clickToEditText;
    
    this.onclickListener = this.enterEditMode.bindAsEventListener(this);
    this.mouseoverListener = this.enterHover.bindAsEventListener(this);
    this.mouseoutListener = this.leaveHover.bindAsEventListener(this);
    Event.observe(this.element, 'click', this.onclickListener);
    Event.observe(this.element, 'mouseover', this.mouseoverListener);
    Event.observe(this.element, 'mouseout', this.mouseoutListener);
    if (this.options.externalControl) {
      Event.observe(this.options.externalControl, 'click', this.onclickListener);
      Event.observe(this.options.externalControl, 'mouseover', this.mouseoverListener);
      Event.observe(this.options.externalControl, 'mouseout', this.mouseoutListener);
    }
  },
  enterEditMode: function() {
    if (this.saving) return;
    if (this.editing) return;
    this.editing = true;
    this.onEnterEditMode();
    if (this.options.externalControl) {
      Element.hide(this.options.externalControl);
    }
    Element.hide(this.element);
    this.createForm();
    this.element.parentNode.insertBefore(this.form, this.element);
    Field.focus(this.editField);
    // stop the event to avoid a page refresh in Safari
    if (arguments.length > 1) {
      Event.stop(arguments[0]);
    }
  },
  createForm: function() {
    this.form = document.createElement("form");
    this.form.id = this.options.formId;
    Element.addClassName(this.form, this.options.formClassName)
    this.form.onsubmit = this.onSubmit.bind(this);

    this.createEditField();

    if (this.options.textarea) {
      var br = document.createElement("br");
      this.form.appendChild(br);
    }

    okButton = document.createElement("input");
    okButton.type = "submit";
    okButton.value = this.options.okText;
    this.form.appendChild(okButton);

    cancelLink = document.createElement("a");
    cancelLink.href = "#";
    cancelLink.appendChild(document.createTextNode(this.options.cancelText));
    cancelLink.onclick = this.onclickCancel.bind(this);
    this.form.appendChild(cancelLink);
  },
  hasHTMLLineBreaks: function(string) {
    if (!this.options.handleLineBreaks) return false;
    return string.match(/<br/i) || string.match(/<p>/i);
  },
  convertHTMLLineBreaks: function(string) {
    return string.replace(/<br>/gi, "\n").replace(/<br\/>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<p>/gi, "");
  },
  createEditField: function() {
    var text;
    if(this.options.loadTextURL) {
      text = this.options.loadingText;
    } else {
      text = this.getText();
    }
    
    if (this.options.rows == 1 && !this.hasHTMLLineBreaks(text)) {
      this.options.textarea = false;
      var textField = document.createElement("input");
      textField.type = "text";
      textField.name = "value";
      textField.value = text;
      textField.style.backgroundColor = this.options.highlightcolor;
      var size = this.options.size || this.options.cols || 0;
      if (size != 0) textField.size = size;
      this.editField = textField;
    } else {
      this.options.textarea = true;
      var textArea = document.createElement("textarea");
      textArea.name = "value";
      textArea.value = this.convertHTMLLineBreaks(text);
      textArea.rows = this.options.rows;
      textArea.cols = this.options.cols || 40;
      this.editField = textArea;
    }
    
    if(this.options.loadTextURL) {
      this.loadExternalText();
    }
    this.form.appendChild(this.editField);
  },
  getText: function() {
    return this.element.innerHTML;
  },
  loadExternalText: function() {
    Element.addClassName(this.form, this.options.loadingClassName);
    this.editField.disabled = true;
    new Ajax.Request(
      this.options.loadTextURL,
      Object.extend({
        asynchronous: true,
        onComplete: this.onLoadedExternalText.bind(this)
      }, this.options.ajaxOptions)
    );
  },
  onLoadedExternalText: function(transport) {
    Element.removeClassName(this.form, this.options.loadingClassName);
    this.editField.disabled = false;
    this.editField.value = transport.responseText.stripTags();
  },
  onclickCancel: function() {
    this.onComplete();
    this.leaveEditMode();
    return false;
  },
  onFailure: function(transport) {
    this.options.onFailure(transport);
    if (this.oldInnerHTML) {
      this.element.innerHTML = this.oldInnerHTML;
      this.oldInnerHTML = null;
    }
    return false;
  },
  onSubmit: function() {
    // onLoading resets these so we need to save them away for the Ajax call
    var form = this.form;
    var value = this.editField.value;
    
    // do this first, sometimes the ajax call returns before we get a chance to switch on Saving...
    // which means this will actually switch on Saving... *after* we've left edit mode causing Saving...
    // to be displayed indefinitely
    this.onLoading();
    
    new Ajax.Updater(
      { 
        success: this.element,
         // don't update on failure (this could be an option)
        failure: null
      },
      this.url,
      Object.extend({
        parameters: this.options.callback(form, value),
        onComplete: this.onComplete.bind(this),
        onFailure: this.onFailure.bind(this)
      }, this.options.ajaxOptions)
    );
    // stop the event to avoid a page refresh in Safari
    if (arguments.length > 1) {
      Event.stop(arguments[0]);
    }
    return false;
  },
  onLoading: function() {
    this.saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  showSaving: function() {
    this.oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    Element.addClassName(this.element, this.options.savingClassName);
    this.element.style.backgroundColor = this.originalBackground;
    Element.show(this.element);
  },
  removeForm: function() {
    if(this.form) {
      if (this.form.parentNode) Element.remove(this.form);
      this.form = null;
    }
  },
  enterHover: function() {
    if (this.saving) return;
    this.element.style.backgroundColor = this.options.highlightcolor;
    if (this.effect) {
      this.effect.cancel();
    }
    Element.addClassName(this.element, this.options.hoverClassName)
  },
  leaveHover: function() {
    if (this.options.backgroundColor) {
      this.element.style.backgroundColor = this.oldBackground;
    }
    Element.removeClassName(this.element, this.options.hoverClassName)
    if (this.saving) return;
    this.effect = new Effect.Highlight(this.element, {
      startcolor: this.options.highlightcolor,
      endcolor: this.options.highlightendcolor,
      restorecolor: this.originalBackground
    });
  },
  leaveEditMode: function() {
    Element.removeClassName(this.element, this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this.originalBackground;
    Element.show(this.element);
    if (this.options.externalControl) {
      Element.show(this.options.externalControl);
    }
    this.editing = false;
    this.saving = false;
    this.oldInnerHTML = null;
    this.onLeaveEditMode();
  },
  onComplete: function(transport) {
    this.leaveEditMode();
    this.options.onComplete.bind(this)(transport, this.element);
  },
  onEnterEditMode: function() {},
  onLeaveEditMode: function() {},
  dispose: function() {
    if (this.oldInnerHTML) {
      this.element.innerHTML = this.oldInnerHTML;
    }
    this.leaveEditMode();
    Event.stopObserving(this.element, 'click', this.onclickListener);
    Event.stopObserving(this.element, 'mouseover', this.mouseoverListener);
    Event.stopObserving(this.element, 'mouseout', this.mouseoutListener);
    if (this.options.externalControl) {
      Event.stopObserving(this.options.externalControl, 'click', this.onclickListener);
      Event.stopObserving(this.options.externalControl, 'mouseover', this.mouseoverListener);
      Event.stopObserving(this.options.externalControl, 'mouseout', this.mouseoutListener);
    }
  }
};
// Copyright (c) 2005 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// See scriptaculous.js for full license.


Object.debug = function(obj) {
  var info = [];
  
  if(typeof obj in ["string","number"]) {
    return obj;
  } else {
    for(property in obj)
      if(typeof obj[property]!="function")
        info.push(property + ' => ' + 
          (typeof obj[property] == "string" ?
            '"' + obj[property] + '"' :
            obj[property]));
  }
  
  return ("'" + obj + "' #" + typeof obj + 
    ": {" + info.join(", ") + "}");
}


String.prototype.toArray = function() {
  var results = [];
  for (var i = 0; i < this.length; i++)
    results.push(this.charAt(i));
  return results;
}

/*--------------------------------------------------------------------------*/

var Builder = {
  NODEMAP: {
    AREA: 'map',
    CAPTION: 'table',
    COL: 'table',
    COLGROUP: 'table',
    LEGEND: 'fieldset',
    OPTGROUP: 'select',
    OPTION: 'select',
    PARAM: 'object',
    TBODY: 'table',
    TD: 'table',
    TFOOT: 'table',
    TH: 'table',
    THEAD: 'table',
    TR: 'table'
  },
  // note: For Firefox < 1.5, OPTION and OPTGROUP tags are currently broken,
  //       due to a Firefox bug
  node: function(elementName) {
    elementName = elementName.toUpperCase();
    
    // try innerHTML approach
    var parentTag = this.NODEMAP[elementName] || 'div';
    var parentElement = document.createElement(parentTag);
    parentElement.innerHTML = "<" + elementName + "></" + elementName + ">";
    var element = parentElement.firstChild || null;
      
    // see if browser added wrapping tags
    if(element && (element.tagName != elementName))
      element = element.getElementsByTagName(elementName)[0];
    
    // fallback to createElement approach
    if(!element) element = document.createElement(elementName);
    
    // abort if nothing could be created
    if(!element) return;

    // attributes (or text)
    if(arguments[1])
      if(this._isStringOrNumber(arguments[1]) ||
        (arguments[1] instanceof Array)) {
          this._children(element, arguments[1]);
        } else {
          var attrs = this._attributes(arguments[1]);
          if(attrs.length) {
            parentElement.innerHTML = "<" +elementName + " " +
              attrs + "></" + elementName + ">";
            element = parentElement.firstChild || null;
            // workaround firefox 1.0.X bug
            if(!element) {
              element = document.createElement(elementName);
              for(attr in arguments[1]) 
                element[attr == 'class' ? 'className' : attr] = arguments[1][attr];
            }
            if(element.tagName != elementName)
              element = parentElement.getElementsByTagName(elementName)[0];
            }
        } 

    // text, or array of children
    if(arguments[2])
      this._children(element, arguments[2]);

     return element;
  },
  _text: function(text) {
     return document.createTextNode(text);
  },
  _attributes: function(attributes) {
    var attrs = [];
    for(attribute in attributes)
      attrs.push((attribute=='className' ? 'class' : attribute) +
          '="' + attributes[attribute].toString().escapeHTML() + '"');
    return attrs.join(" ");
  },
  _children: function(element, children) {
    if(typeof children=='object') { // array can hold nodes and text
      children.flatten().each( function(e) {
        if(typeof e=='object')
          element.appendChild(e)
        else
          if(Builder._isStringOrNumber(e))
            element.appendChild(Builder._text(e));
      });
    } else
      if(Builder._isStringOrNumber(children)) 
         element.appendChild(Builder._text(children));
  },
  _isStringOrNumber: function(param) {
    return(typeof param=='string' || typeof param=='number');
  }
}

/* ------------- element ext -------------- */

// adapted from http://dhtmlkitchen.com/learn/js/setstyle/index4.jsp
// note: Safari return null on elements with display:none; see http://bugzilla.opendarwin.org/show_bug.cgi?id=4125
// instead of "auto" values returns null so it's easier to use with || constructs

String.prototype.camelize = function() {
  var oStringList = this.split('-');
  if(oStringList.length == 1)    
    return oStringList[0];
  var ret = this.indexOf("-") == 0 ? 
    oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) : oStringList[0];
  for(var i = 1, len = oStringList.length; i < len; i++){
    var s = oStringList[i];
    ret += s.charAt(0).toUpperCase() + s.substring(1)
  }
  return ret;
}

Element.getStyle = function(element, style) {
  element = $(element);
  var value = element.style[style.camelize()];
  if(!value)
    if(document.defaultView && document.defaultView.getComputedStyle) {
      var css = document.defaultView.getComputedStyle(element, null);
      value = (css!=null) ? css.getPropertyValue(style) : null;
    } else if(element.currentStyle) {
      value = element.currentStyle[style.camelize()];
    }
  
  // If top, left, bottom, or right values have been queried, return "auto" for consistency resaons 
  // if position is "static", as Opera (and others?) returns the pixel values relative to root element 
  // (or positioning context?)
  if (window.opera && (style == "left" || style == "top" || style == "right" || style == "bottom"))
    if (Element.getStyle(element, "position") == "static") value = "auto";
    
  if(value=='auto') value = null;
  return value;
}

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
  color = "#";
  if(this.slice(0,4) == "rgb(") {
    var cols = this.slice(4,this.length-1).split(',');
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
  } else {
    if(this.slice(0,1) == '#') {
      if(this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
      if(this.length==7) color = this.toLowerCase();
    }
  }
  return(color.length==7 ? color : (arguments[0] || this));
}

Element.makePositioned = function(element) {
  element = $(element);
  var pos = Element.getStyle(element, 'position');
  if(pos =='static' || !pos) {
    element._madePositioned = true;
    element.style.position = "relative";
    // Opera returns the offset relative to the positioning context, when an element is position relative 
    // but top and left have not been defined
    if (window.opera){
      element.style.top = 0;
      element.style.left = 0;
    }  
  }
}
  
Element.undoPositioned = function(element) {
  element = $(element);
  if(typeof element._madePositioned != "undefined"){
    element._madePositioned = undefined;
    element.style.position = "";
    element.style.top = "";
    element.style.left = "";
    element.style.bottom = "";
    element.style.right = "";	  
  }
}

Element.makeClipping = function(element) {
  element = $(element);
  if (typeof element._overflow != 'undefined') return;
  element._overflow = element.style.overflow;
  if((Element.getStyle(element, 'overflow') || 'visible') != 'hidden') element.style.overflow = 'hidden';
}

Element.undoClipping = function(element) {
  element = $(element);
  if (typeof element._overflow == 'undefined') return;
  element.style.overflow = element._overflow;
  element._overflow = undefined;
}

Element.collectTextNodesIgnoreClass = function(element, ignoreclass) {
  var children = $(element).childNodes;
  var text     = "";
  var classtest = new RegExp("^([^ ]+ )*" + ignoreclass+ "( [^ ]+)*$","i");

  for (var i = 0; i < children.length; i++) {
    if(children[i].nodeType==3) {
      text+=children[i].nodeValue;
    } else {
      if((!children[i].className.match(classtest)) && children[i].hasChildNodes())
        text += Element.collectTextNodesIgnoreClass(children[i], ignoreclass);
    }
  }

  return text;
}

Element.setContentZoom = function(element, percent) {
  element = $(element);
  element.style.fontSize = (percent/100) + "em";  
  if(navigator.appVersion.indexOf('AppleWebKit')>0) window.scrollBy(0,0);
}

Element.getOpacity = function(element){
  var opacity;
  if (opacity = Element.getStyle(element, "opacity"))
    return parseFloat(opacity);
  if (opacity = (Element.getStyle(element, "filter") || '').match(/alpha\(opacity=(.*)\)/))
    if(opacity[1]) return parseFloat(opacity[1]) / 100;
  return 1.0;
}

Element.setOpacity = function(element, value){
  element= $(element);
  var els = element.style;
  if (value == 1){
    els.opacity = '0.999999';
    if(/MSIE/.test(navigator.userAgent))
      els.filter = Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'');
  } else {
    if(value < 0.00001) value = 0;
    els.opacity = value;
    if(/MSIE/.test(navigator.userAgent))
      els.filter = Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'') + 
        "alpha(opacity="+value*100+")";
  }  
}

Element.getInlineOpacity = function(element){
  element= $(element);
  var op;
  op = element.style.opacity;
  if (typeof op != "undefined" && op != "") return op;
  return "";
}

Element.setInlineOpacity = function(element, value){
  element= $(element);
  var els = element.style;
  els.opacity = value;
}

Element.getDimensions = function(element){
  element = $(element);
  // All *Width and *Height properties give 0 on elements with display "none",
  // so enable the element temporarily
  if (Element.getStyle(element,'display') == "none"){
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    els.visibility = "hidden";
    els.position = "absolute";
    els.display = "";
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = "none";
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return {width: originalWidth, height: originalHeight};    
  }
  
  return {width: element.offsetWidth, height: element.offsetHeight};
} 

/*--------------------------------------------------------------------------*/

Position.positionedOffset = function(element) {
  var valueT = 0, valueL = 0;
  do {
    valueT += element.offsetTop  || 0;
    valueL += element.offsetLeft || 0;
    element = element.offsetParent;
    if (element) {
      p = Element.getStyle(element,'position');
      if(p == 'relative' || p == 'absolute') break;
    }
  } while (element);
  return [valueL, valueT];
}

// Safari returns margins on body which is incorrect if the child is absolutely positioned.
// for performance reasons, we create a specialized version of Position.cumulativeOffset for
// KHTML/WebKit only

if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
  Position.cumulativeOffset = function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      
      if (element.offsetParent==document.body) 
        if (Element.getStyle(element,'position')=='absolute') break;
        
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  }
}

Position.page = function(forElement) {
  var valueT = 0, valueL = 0;

  var element = forElement;
  do {
    valueT += element.offsetTop  || 0;
    valueL += element.offsetLeft || 0;

    // Safari fix
    if (element.offsetParent==document.body)
      if (Element.getStyle(element,'position')=='absolute') break;
      
  } while (element = element.offsetParent);

  element = forElement;
  do {
    valueT -= element.scrollTop  || 0;
    valueL -= element.scrollLeft || 0;    
  } while (element = element.parentNode);

  return [valueL, valueT];
}

// elements with display:none don't return an offsetParent, 
// fall back to  manual calculation
Position.offsetParent = function(element) {
  if(element.offsetParent) return element.offsetParent;
  if(element == document.body) return element;
  
  while ((element = element.parentNode) && element != document.body)
    if (Element.getStyle(element,'position')!='static')
      return element;
  
  return document.body;
}

Position.clone = function(source, target) {
  var options = Object.extend({
    setLeft:    true,
    setTop:     true,
    setWidth:   true,
    setHeight:  true,
    offsetTop:  0,
    offsetLeft: 0
  }, arguments[2] || {})
  
  // find page position of source
  source = $(source);
  var p = Position.page(source);

  // find coordinate system to use
  target = $(target);
  var delta = [0, 0];
  var parent = null;
  // delta [0,0] will do fine with position: fixed elements, 
  // position:absolute needs offsetParent deltas
  if (Element.getStyle(target,'position') == 'absolute') {
    parent = Position.offsetParent(target);
    delta = Position.page(parent);
  }
  
  // correct by body offsets (fixes Safari)
  if (parent==document.body) {
    delta[0] -= document.body.offsetLeft;
    delta[1] -= document.body.offsetTop; 
  }

  // set position
  if(options.setLeft)   target.style.left  = (p[0] - delta[0] + options.offsetLeft) + "px";
  if(options.setTop)    target.style.top   = (p[1] - delta[1] + options.offsetTop) + "px";
  if(options.setWidth)  target.style.width = source.offsetWidth + "px";
  if(options.setHeight) target.style.height = source.offsetHeight + "px";
}

Position.absolutize = function(element) {
  element = $(element);
  if(element.style.position=='absolute') return;
  Position.prepare();

  var offsets = Position.positionedOffset(element);
  var top     = offsets[1];
  var left    = offsets[0];
  var width   = element.clientWidth;
  var height  = element.clientHeight;

  element._originalLeft   = left - parseFloat(element.style.left  || 0);
  element._originalTop    = top  - parseFloat(element.style.top || 0);
  element._originalWidth  = element.style.width;
  element._originalHeight = element.style.height;

  element.style.position = 'absolute';
  element.style.top    = top + 'px';;
  element.style.left   = left + 'px';;
  element.style.width  = width + 'px';;
  element.style.height = height + 'px';;
}

Position.relativize = function(element) {
  element = $(element);
  if(element.style.position=='relative') return;
  Position.prepare();

  element.style.position = 'relative';
  var top  = parseFloat(element.style.top  || 0) - (element._originalTop || 0);
  var left = parseFloat(element.style.left || 0) - (element._originalLeft || 0);

  element.style.top    = top + 'px';
  element.style.left   = left + 'px';
  element.style.height = element._originalHeight;
  element.style.width  = element._originalWidth;
}

/*--------------------------------------------------------------------------*/

Element.Class = {
    // Element.toggleClass(element, className) toggles the class being on/off
    // Element.toggleClass(element, className1, className2) toggles between both classes,
    //   defaulting to className1 if neither exist
    toggle: function(element, className) {
      if(Element.Class.has(element, className)) {
        Element.Class.remove(element, className);
        if(arguments.length == 3) Element.Class.add(element, arguments[2]);
      } else {
        Element.Class.add(element, className);
        if(arguments.length == 3) Element.Class.remove(element, arguments[2]);
      }
    },

    // gets space-delimited classnames of an element as an array
    get: function(element) {
      return $(element).className.split(' ');
    },

    // functions adapted from original functions by Gavin Kistner
    remove: function(element) {
      element = $(element);
      var removeClasses = arguments;
      $R(1,arguments.length-1).each( function(index) {
        element.className = 
          element.className.split(' ').reject( 
            function(klass) { return (klass == removeClasses[index]) } ).join(' ');
      });
    },

    add: function(element) {
      element = $(element);
      for(var i = 1; i < arguments.length; i++) {
        Element.Class.remove(element, arguments[i]);
        element.className += (element.className.length > 0 ? ' ' : '') + arguments[i];
      }
    },

    // returns true if all given classes exist in said element
    has: function(element) {
      element = $(element);
      if(!element || !element.className) return false;
      var regEx;
      for(var i = 1; i < arguments.length; i++) {
        if((typeof arguments[i] == 'object') && 
          (arguments[i].constructor == Array)) {
          for(var j = 0; j < arguments[i].length; j++) {
            regEx = new RegExp("(^|\\s)" + arguments[i][j] + "(\\s|$)");
            if(!regEx.test(element.className)) return false;
          }
        } else {
          regEx = new RegExp("(^|\\s)" + arguments[i] + "(\\s|$)");
          if(!regEx.test(element.className)) return false;
        }
      }
      return true;
    },

    // expects arrays of strings and/or strings as optional paramters
    // Element.Class.has_any(element, ['classA','classB','classC'], 'classD')
    has_any: function(element) {
      element = $(element);
      if(!element || !element.className) return false;
      var regEx;
      for(var i = 1; i < arguments.length; i++) {
        if((typeof arguments[i] == 'object') && 
          (arguments[i].constructor == Array)) {
          for(var j = 0; j < arguments[i].length; j++) {
            regEx = new RegExp("(^|\\s)" + arguments[i][j] + "(\\s|$)");
            if(regEx.test(element.className)) return true;
          }
        } else {
          regEx = new RegExp("(^|\\s)" + arguments[i] + "(\\s|$)");
          if(regEx.test(element.className)) return true;
        }
      }
      return false;
    },

    childrenWith: function(element, className) {
      var children = $(element).getElementsByTagName('*');
      var elements = new Array();

      for (var i = 0; i < children.length; i++)
        if (Element.Class.has(children[i], className))
          elements.push(children[i]);

      return elements;
    }
}
// ============================
// = Search field placeholder =
// ============================
AJS.toInit(function ($) {
    var search = $(".quick-search-query");
    if (!search.length) {
        return;
    }

    search.each(function() {
        $searchBox = $(this);
        $searchBox.data("quicksearch", {
            placeholder: $searchBox.closest("form").find("input[type='submit']").val(),
            placeholded: true
        });
    });

    if (!$.browser.safari) {
        search.val(search.data("quicksearch").placeholder);

        search.addClass("placeholded");

        search.focus(function () {
            var $this = $(this);
            if ($this.data("quicksearch").placeholded) {
                $this.data("quicksearch").placeholded = false;
                $this.val("");
                $this.removeClass("placeholded");
            }
        });

        search.blur(function () {
            var $this = $(this);
            if ($this.data("quicksearch").placeholder && (/^\s*$/).test($this.val())) {
                $this.val($this.data("quicksearch").placeholder);
                $this.data("quicksearch").placeholded = true;
                $this.addClass("placeholded");
            }
        });
        
    }
    else {
        search.each(function () {
            // don't use jQuery because of http://dev.jquery.com/ticket/1957
            // we know we're in Safari, so the assignment will work
            this.type = "search";
        });
        search.attr("results", 10);
        search.attr("placeholder", search.data("quicksearch").placeholder);
        search.val("");
    }

    // Moved out of macros.vm displayGlobalMessages
    $("#messageContainer .confluence-messages").each(function () {
        var message = this;
        if (!getCookie(message.id)) {
            $(message).show();
            $(".message-close-button", message).click(function () {
                $(message).slideUp();
                setCookie(message.id, true);
            });
        }
    });
});

AJS.General =  {
    getContextPath : function() {
        return AJS.$("#confluence-context-path").attr('content') || "";
    }        
};

AJS.I18n = {
    keys: {},

    /**
     * Get the I18n keys for the current user. This should be called immediately on script load.
     *
     * Note: requests are cached with last modified headers by the REST service
     */
    get: function(pluginKey, successCallback, errorCallback) {
        AJS.$.ajax( {
            url: AJS.General.getContextPath() + "/rest/prototype/1/i18n/" + pluginKey,
            data: {
                "locale": AJS.params.userLocale // request should be cached against the user's locale
            },
            dataType: "json",
            success: function(data) {
                AJS.I18n.load(data);
                if (typeof successCallback == "function") {
                    successCallback(data);
                }
            },
            error: function(request, textStatus) {
                AJS.log("Error loading I18n for " + pluginKey + ":" + textStatus);
                if (typeof errorCallback == "function") {
                    errorCallback(textStatus);
                }
            }
        });

    },
    load: function(data) {
        AJS.$.extend(AJS.I18n.keys, data);
    },
    /**
     * Returns the i18n string for the provided key. This method should only be called in the callback of
     * AJS.I18n.load() to ensure that the translations are loaded.
     *
     * First looks in AJS.params with the given key prefixed with "i18n.". If not found, it will try to
     * look it up in the prefetched calls to AJS.I18n.load(). The original key is returned if translations
     * could not be found.
     *
     * @param i18nKey an i18n key. Should be the same as entered in an i18n .properties file.
     */
    getText: function (i18nKey) {
        return AJS.params["i18n." + i18nKey] || AJS.I18n.keys[i18nKey] || i18nKey;
    }
};

/**
 * Makes the current element selectable with effects by adding 'hover' and 'selected' class names.
 *
 * This is typically used for table row elements which can be selected.
 *
 * @param container the parent container which contains all selectable elements
 * @param onSelect the function to be invoked when the element is clicked on.
 * It should take two parameters, the element that was clicked on followed by the properties.
 * @param properties the properties to be stored against the element and passed into the onSelect function.
 */
jQuery.fn.selectableEffects = function(container, onSelect, properties) {
    var $ = jQuery, el = $(this);
    if (properties) {
        el.data("properties", properties);
    }
    el.click(function (e) {
        var $this = $(this);
        if (onSelect) {
            onSelect(this, $this.data("properties"));
        }

        container.find(".selected").removeClass("selected");
        $this.addClass("selected");
        return AJS.stopEvent(e);
    });
    el.hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
};
/**
 * Wrap this function around values which should not be auto-HTML escaped in template substitution.
 *
 * @param value the String value which should not be escaped
 */
AJS.html = function (value) {
    var str = new String(value);
    str.isHtml = true;
    return str;
};

AJS.toInit(function ($) {
    var templates = {};
    $("script").each(function () {
        if (this.type == "text/x-template") {
            templates[this.title] = AJS.html(this.text);
        }
    });

    AJS.getTemplate = function (name) {
        return templates[name];
    };

    var entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    };

    AJS.escapeEntities = function (str) {
        if (str == null) {
            return str;
        }
        if (str.isHtml) {
            return "" + str;
        }
        return ("" + str).replace(/[&<>'"]/g, function (c) { return entities[c] || c; });
    };

    function format(message) {
        var args = arguments;
        return message.replace(/\{(\d+)\}/g, function (str, i) {
            var replacement = args[parseInt(i, 10) + 1];
            return replacement != null ? replacement : str;
        });
    };

    /**
     * Retrieves a template with a given name from the page body (in the form
     * <script type="text/x-template" title="name">...</script>) and formats it
     * using AJS.format. The arguments are automatically HTML-encoded, so that
     * you cannot accidentally introduce XSS vulnerabilities with this templating
     * mechanism.
     *
     * @method renderTemplate
     * @param templateName the title of a script tag in the document which contains a template
     * @param args an array or list of arguments which will be the replacement values for tokens {0}, {1}, etc.
     * @return {String} the template with the tokens replaced or empty string if there is no matching template
     * @usage AJS.renderTemplate("someTemplate", "first", "second", "third");
     * @usage AJS.renderTemplate("someTemplate", ["first", "second", "third"]);
    */
    AJS.renderTemplate = function (templateName, args) {
        if (!AJS.getTemplate(templateName)) {
            return "";
        }
        if (!$.isArray(args)) {
            args = Array.prototype.slice.call(arguments, 1); // arguments is not a proper Array
        }
        var template = AJS.getTemplate(templateName).toString();
        var formatArgs = [ template ];
        for (var i = 0; i < args.length; i++) {
            formatArgs.push(AJS.escapeEntities(args[i]));
        }
        return format.apply(this, formatArgs);
    };
});
// ==================
// = Drop-down menu =
// ==================
AJS.menuShowCount = 0;

jQuery.fn.ajsMenu = function (options) {
    options = options || {};
    var $ = jQuery;
    var shownDropDown = null;
    var hideDropDown = function (e) {
        if (typeof AJS.dropDownTimer != "undefined" && AJS.dropDownHider) {
            clearTimeout(AJS.dropDownTimer);
            delete AJS.dropDownTimer;
            AJS.dropDownHider();
            AJS.dropDownHider = null;
        }
    };
    $(".ajs-button", this).each(function () {
        $(this).mouseover(hideDropDown);
    });
    $(".ajs-menu-item", this).each(function () {
        var it = this, $it = $(this),
            dd = $(".ajs-drop-down", it);
        if (!dd.length) return;

        dd = dd[0];
        dd.hidden = true;
        dd.focused = -1;
        dd.hide = function () {
            if (!this.hidden) {
                $it.toggleClass("opened");
                $(it.parentNode).toggleClass("menu-bar-open");
                var as = $("a", this);
                $(this).toggleClass("hidden");
                this.hidden = true;
                $(document).unbind("click", this.fhide).unbind("keydown", this.fmovefocus).unbind("keypress", this.blocker);
                if (this.focused + 1) {
                    $(as[this.focused]).removeClass("active");
                }
                this.focused = -1;
            }
        };
        dd.show = function () {
            if (typeof this.hidden == "undefined" || this.hidden) {
                var dd = this, $dd = $(this);
                $dd.toggleClass("hidden");
                $it.toggleClass("opened");
                $(it.parentNode).toggleClass("menu-bar-open");
                this.hidden = false;
                this.timer = setTimeout(function () {$(document).click(dd.fhide);}, 1);
                $(document).keydown(dd.fmovefocus).keypress(dd.blocker);
                var as = $("a", dd);
                as.each(function (i) {
                    var grandpa = this.parentNode.parentNode;
                    $(this).hover(function (e) {
                        if (grandpa.focused + 1) {
                            $(as[grandpa.focused].parentNode).removeClass("active");
                        }
                        $(this.parentNode).addClass("active");
                        grandpa.focused = i;
                    }, function (e) {
                        if (grandpa.focused + 1) {
                            $(as[grandpa.focused].parentNode).removeClass("active");
                        }
                        grandpa.focused = -1;
                    });
                });
                var topOfViewablePage = (window.pageYOffset || document.documentElement.scrollTop);
                var bottomOfViewablePage = topOfViewablePage + $(window).height();
                $dd.removeClass("above");
                if (!options.isFixedPosition) {
                    if ($dd.offset().top + $dd.height() > bottomOfViewablePage) {
                        $dd.addClass("above");
                        if ($dd.offset().top < topOfViewablePage) {
                            $dd.removeClass("above");
                        }
                    }
                }
            }
        };
        dd.fmovefocus = function (e) {dd.movefocus(e);};
        dd.fhide = function (e) {dd.hide(e);};
        dd.blocker = function (e) {
            var c = e.which;
            if (c == 40 || c == 38) {
                return false;
            }
        };
        dd.movefocus = function (e) {
            var c = e.which,
                a = this.getElementsByTagName("a");
            if (this.focused + 1) {
                $(a[this.focused].parentNode).removeClass("active");
            }
            switch (c) {
                case 40:
                case 9: {
                    this.focused++;
                    break;
                }
                case 38: {
                    this.focused--;
                    break;
                }
                case 27: {
                    this.hide();
                    return false;
                }
                default: {
                    return true;
                }
            }
            if (this.focused < 0) {
                this.focused = a.length - 1;
            }
            if (this.focused > a.length - 1) {
                this.focused = 0;
            }
            a[this.focused].focus();
            $(a[this.focused].parentNode).addClass("active");
            e.stopPropagation();
            e.preventDefault();
            return false;
        };
        dd.show();
        clearTimeout(dd.timer);
        var $dd = $(dd),
            offset = $dd.offset();
        dd.hide();
        if (offset.left + $dd.width() > $(window).width()) {
            $dd.css("margin-left", "-" + (($dd.width()) - ($it.width())) + "px");
        }
        var a = $(".trigger", it);
        if (a.length) {
            var killHideTimerAndShow = function() {
                clearTimeout(AJS.dropDownTimer);
                delete AJS.dropDownTimer;
                AJS.dropDownHider();
                AJS.dropDownHider = null;
                dd.show();
            };

            var showMenu = function (millis) {
                var changingMenu = typeof AJS.dropDownTimer != "undefined";
                shownDropDown = dd;
                if (changingMenu) {
                    killHideTimerAndShow();
                }
                else {
                    AJS.dropDownShower = function () {dd.show(); delete AJS.dropDownShowerTimer;};
                    AJS.dropDownShowerTimer = setTimeout(AJS.dropDownShower, millis);
                }
            };
            var hideMenu = function (millis) {
                var passingThrough = typeof AJS.dropDownShowerTimer != "undefined";
                if (passingThrough) {
                    clearTimeout(AJS.dropDownShowerTimer);
                    delete AJS.dropDownShowerTimer;
                }
                if (typeof AJS.dropDownTimer != "undefined") {
                    clearTimeout(AJS.dropDownTimer);
                    delete AJS.dropDownHider;
                }
                AJS.dropDownHider = function () {dd.hide(); delete AJS.dropDownTimer;};
                AJS.dropDownTimer = setTimeout(AJS.dropDownHider, millis);
            };

            var overHandler = function (e) {
                showMenu(500);
            };

            var outHandler = function (e) {
                hideMenu(300);
            };
            a.click(function (e) { return false; });
            $it.mouseover(overHandler);
            $it.mouseout(outHandler);

            var keypressHandler = function (e) {
                if (shownDropDown)
                    shownDropDown.hide();
                if (e.which == 27) {
                    dd.hide();
                } else {
                    showMenu(0);
                }
            };
            a.keypress(keypressHandler);
        }
    });
};


AJS.toInit(function ($) {

    /* TODO: Restore this once JQuery is integrated and HTMLUnit is upgraded to work with JQuery. */
    /*jQuery(function ($) {
        $(".popup-link").bind("click", function() {
            window.open(this.href, this.id + '-popupwindow', 'width=600, height=400, scrollbars, resizable');
            return false;
        });
    });*/

    var ids = ["action-view-source-link", "view-user-history-link"];
    for (var i = ids.length; i--;) {
        $("#" + ids[i]).click(function (e) {
            window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=600, height=400, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
    }

    /* TODO: Extract this logic out into a common js file */
    var errorHandler = function (errorMessage, item) {
        var errorDiv = $("#ajax-error");
        if (errorDiv.length == 0) {
            $("#com-atlassian-confluence").prepend("<div id='ajax-error'></div>");
            errorDiv = $("#ajax-error");
        }

        errorDiv.append("<span class='error'>" + errorMessage +  "<a class='close'>Close</a></span>");

        errorDiv.find("a.close").click(function () {
            var parent = $(this).parent();
            $(parent).slideUp(1000, function () {
                $(parent).remove();
                if ($("#ajax-error").children(".error").length == 0)
                {
                    $("#ajax-error").remove();
                }
            });
            return false;
        });
        item.removeClass("waiting");
    };

    $("#page-favourite").click(function (e) {
        var menuItem = $(this);
        if (menuItem.hasClass("waiting")) {
            // already waiting
            return AJS.stopEvent(e);
        }
        menuItem.addClass("waiting");
        var url = contextPath + "/json/addfavourite.action";
        if (menuItem.hasClass("selected")) {
            url = contextPath + "/json/removefavourite.action";
        }
        AJS.safeAjax({
            url: url,
            type: "POST",
            dataType: "json",
            data: {
                "entityId": AJS.params.pageId
            },
            success: function(data) {
                if(data.actionErrors) {
                    for (var i = 0; i < data.actionErrors.length; i++) {
                        errorHandler(data.actionErrors, menuItem);
                    }
                    return;
                }
                if (data.errorMessage) {
                    errorHandler(data.errorMessage, menuItem);
                    return;
                }

                menuItem.removeClass("waiting");
                menuItem.toggleClass("selected");
                menuItem.toggleClass("ie-page-favourite-selected");
            },
            error: function(data) {
                errorHandler("Server error while updating favourite", menuItem);
            }
        });
        return AJS.stopEvent(e);
    });

    var watch = $("#page-watch");
    var unwatch = $("#page-unwatch");
    var watchParent = $(watch.parent("li"));
    var unwatchParent = $(unwatch.parent("li"));

    if (watch.hasClass("inactive")) {
        watchParent.addClass("hidden");
    }

    if (unwatch.hasClass("inactive")) {
        unwatchParent.addClass("hidden");
    }

    var watchOrUnwatch = function (url, item, opposite) {
        item.addClass("waiting");
        AJS.safe.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            data: {
                "entityId": AJS.params.pageId
            },
            success: function(data) {
                if(data.actionErrors) {
                    for (var i = 0; i < data.actionErrors.length; i++) {
                        errorHandler(data.actionErrors, item);
                    }
                    return;
                }
                if (data.errorMessage) {
                    errorHandler(data.errorMessage, item);
                    return;
                }

                item.removeClass("waiting");
                item.toggleClass("inactive");
                opposite.toggleClass("inactive");

                item.parent("li").toggleClass("hidden");
                opposite.parent("li").toggleClass("hidden");
            },
            error: function(data) {
                item.removeClass("waiting");
                errorHandler("Server error while updating favourite", menuItem);
            }
        });
    };

    watch.click(function(e) {
        watchOrUnwatch(contextPath + "/pages/startwatching.action", watch, unwatch);
        watch.addClass("waiting");
        return AJS.stopEvent(e);
    });

    unwatch.click(function(e) {
        watchOrUnwatch(contextPath + "/pages/stopwatching.action", unwatch, watch);
        unwatch.addClass("waiting");
        return AJS.stopEvent(e);
    });

    $("#action-menu-link").next().addClass("most-right-menu-item");

    $(".ajs-menu-bar").ajsMenu({isFixedPosition: true});

});

/**
 * Dropdown Hackery. In IE6 if a link is wider than its dropdown, all the subsequent dropdowns break.
 * So we always make dropdowns wider than their link - done across browsers for consistency.
 * CRITICAL: CSS must reset the width of the hidden divs for IE6. Annoyingly it doesn't work if you do it with JS.
 * Currently the hidden dropdowns are excessively larger than their actual display size (about 1100px).
 * TODO: this would be much better if we could get real widths from the hidden dropdowns. 
 */
AJS.$(function ($) {
    $("#header-menu-bar .ajs-menu-item").each(function () {
        var link = $(this), dropDown = $(".ajs-drop-down",this), linkWidth = link.width();
        if (linkWidth > dropDown.width()) {
            dropDown.width(linkWidth.valueOf() + 50);
            AJS.log("Dropdown width override occurred");
        }
    });
});


AJS.REST = {
    /**
     * Iterates through the links array to find the first matching link of the given type and rel.
     * @param links typically the link field on a REST JSON object
     * @param type type of link. Defaults to "text/html" if not defined.
     * @param rel relationship of the link. Defaults to "alternate".
     */
    findLink: function(links, type, rel) {
        if (!type) type = "text/html";
        if (!rel) rel = "alternate";
        if (AJS.$.isArray(links)) {
            for (var i=0,ii=links.length; i<ii; i++) {
                var link = links[i];
                if (link.type == type && link.rel == rel) {
                    return link.href;
                }
            }
        }
        return "#";
    },
    
    findSpaceName: function(restObj){
    	if (restObj.space){
    		return restObj.space.name;
    	}
    	return "";
    }
    
};


/**
 * Simple scroll-to jQuery plugin.
 * Written by Atlassian, October 2009.
 *
 * Typical usage: $("#container").simpleScrollTo($("#container > .some-item"))
 *
 * The container must be the nearest ancestor of the item with "position: relative" or "position: absolute".
 * This is the only way that the item's position can be calculated relative to it.
 */
jQuery.fn.simpleScrollTo = function (element) {
    var $ = jQuery;
    var container = $(this[0]);
    var topOffset = $(element).position().top;
    var bottomOffset = topOffset + $(element).outerHeight() - container.outerHeight();
    if (topOffset < 0) { // top of element is above the top of the container
        container.scrollTop(container.scrollTop() + topOffset);
    } else if (bottomOffset > 0) { // bottom of element is below the bottom of the container
        container.scrollTop(container.scrollTop() + bottomOffset);
    }
    return this;
};
(function($){

    AJS.safeHTML = function (html) {
        return html.replace(/[<>&"']/g, function (symbol) {
            return "&#" + symbol.charCodeAt() + ";";
        });
    };


    /* The Control provides access to the UI component (input, RTE autocomplete, etc) that drives the dropdown */
    function Control() {}
    Control.prototype.value = function (value) {
        if (value == null) {
            return this._value;
        } else {
            this._value = value;
            return this;
        }
    };
    Control.prototype.focus = function () {};
    Control.prototype.change = function (value, force) {
        if (value != this.value()) {
            this.value(value);
            this.onchange && this.onchange(value, force);
        }
    };

    /**
     * Provides a controller-agnostic object that listens for controller changes and populates a dropdown
     * via an AJAX request. Most aspects can be customized via the options object parameter.
     *
     * Options are:
     *   path - the path at the root of AJAX requests, excluding query parameters
     *   makeParams - function to return a parameter object when passed a search value
     *   onShow - function to call when the drop-down is displayed
     *   dropdownPostprocess - a function that will be supplied with the list created by the dropDown and can manipulate or modify it
     *                         as necessary.
     *   dropdownPlacement - a function that will be called with the drop down and which should place it in the correct place on the page.
     *                       The supplied arguments are 1) the input that issued the search, 2) the dropDown to be placed.
     *   ajsDropDownOptions - any options the underlying dropDown component can handle expects
     *
     *   isRest - if true, the drop down will process the ajax search query as a REST call
     *
     *   makeRestMatrixFromData - function used to put the returned rest data into a matrix to be processed by the function. Used when isRest = true
     *
     *   searchFor - function that returns text to place at the end of the dropdown when isRest is true. Used to add a "search for..." option when REST is used.
     */
    AJS.quickSearch = function (options) {
        var path = options.path,
            onShow = options.onShow;
        var attr = {
            cache_size: 30,
            max_length: 1,
            effect: "appear"
        };
        var dd,
            cache = {},
            cache_stack = [],
            timer;

        var control = new Control;

        if (typeof path == "function") {
            var oldPath = path(control),
                getPath = function () {
                    var newPath = path(control);
                    if (newPath != oldPath) {
                        // reset the cache if the path has changed
                        cache = {};
                        cache_stack = [];
                        oldPath = newPath;
                    }
                    return newPath;
                };
        } else {
            getPath = function () {
                return path;
            };
        }

        var getDropdownObjectForRestResult = function (result) {
            if (!result) {
                AJS.log("REST result is null");
                return null;
            }
            if (!result.link || !$.isArray(result.link)) {
                AJS.log("No link for result with title: " + result.title);
                return null;
            }
            if (!result.title) {
                AJS.log("No title for result with id: " + result.id);
                return null;
            } 
            var obj = {
                href : encodeURI(AJS.REST.findLink(result.link)),
                name : AJS.safeHTML(result.title),
                spaceName: AJS.safeHTML(AJS.REST.findSpaceName(result)),
                restObj : result
            };
            if (result.thumbnailLink) {
                var versionQuery = result.version ? "?version="+result.version + "&modificationDate=" : "";
                obj.icon = result.thumbnailLink.href + versionQuery;
            } else {
                obj.className = result.iconClass || "content-type-" + result.type + (result.type == "space" ? "desc" : "");
            }
            return obj;
        };

        /**
         * Converts a matrix in REST format into a matrix in the format expected by AJS.dropDown.
         *
         * REST format is currently :
            {
                "title": "Test J. User",
                "type": "user",
                "id": "853654",
                "link": [{
                    "rel": "self",
                    "href": "http://localhost:8080/confluence/rest/prototype/1/user/Test%20J.%20User"
                },
                {
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://localhost:8080/confluence/display/~test"
                }],
                "wikiLink": "[~test]"
            }
         *
         * @param restMatrix matrix of objects in Confluence REST format
         */
        var convertFromRest = function (restMatrix) {
            var matrix = [], catArray, obj;
            for (var i = 0, len = restMatrix.length; i < len; i++) {
                catArray = [];
                for (var j = 0, len2 = restMatrix[i].length; j < len2; j++) {
                    obj = getDropdownObjectForRestResult(restMatrix[i][j]);
                    obj && catArray.push(obj);
                }
                catArray.length && matrix.push(catArray);
            }
            // optional "search for..." at the end
            if (options.searchFor)
            {
            	matrix.push([{
            		name: options.searchFor(),
            		className:"search-for",
            		href:"#"
                }]);
            }
            return matrix;
        };

        var jsonparser = function (json, resultStatus, query) {
            if (!control || control.inactive) {
                AJS.log("Quick search abandoned before server response received, ignoring. " + control);
                return;
            }

            json = json || {};
            query = query || json.query || "";

            var hasErrors = json.statusMessage; // right now, we are overloading the existence of a status message to imply an error

            var matrix;
            if (hasErrors) {
               matrix = [[{html: json.statusMessage, className: "error"}]];
            } else {
                if (options.makeRestMatrixFromData) {
                    var restMatrix = options.makeRestMatrixFromData(json, query);
                    matrix = convertFromRest(restMatrix);
                    if (options.addDropdownData) {
                        matrix = options.addDropdownData(matrix, control);
                    }
                } else {
                    matrix = json.contentNameMatches;
                }
            }
            var dropdownData = {
                matrix: matrix,
                queryTokens: json.queryTokens
            };

            if (!hasErrors) {
                if (!cache[query] && resultStatus == "success") {
                    cache[query] = dropdownData;
                    cache_stack.push(query);
                    if (cache_stack.length > attr.cache_size) {
                        delete cache[cache_stack.shift()];
                    }
                }
            }

            // do not update drop down for earlier requests. We are only interested in displaying the results for the most current search
            if (query != control.value()) {
                return;
            }

            makeDropdown(dropdownData);
        };

        /**
         * Builds the dropdown. Data for the dropdown may come from an AJAX response or from the cache.
         * @param dropdownData in the form { matrix, queryTokens }
         */
        var makeDropdown = function (dropdownData) {

            var old_dd = dd;

            /**
             * First dropDown parameter should be an array of arrays, where the sub-arrays represent the different
             * search categories.
             *
             * Expected properties of category sub-array objects are:
             *  - href
             *  - name
             *  - className
             *  - html (optional, replaces href and name)
             *  - icon (optional)
             *
             * The sub-objects themselves are stored as a jQuery "data" property on the name span called properties.
             */
            dd = AJS.dropDown(dropdownData.matrix, options.ajsDropDownOptions)[0];

            // TODO - could move into dropdown.js in AUI
            if (options.ajsDropDownOptions && options.ajsDropDownOptions.className) {
                dd.$.addClass(options.ajsDropDownOptions.className);
            }

            dd.jsonResult = dropdownData;
            // place the created drop down using the configured dropdownPlacement function
            // if there is none then use a default behaviour
            if (options.dropdownPlacement) {
                options.dropdownPlacement(dd.$);
            } else {
                AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");
                $("body").append(dd.$);
            }

            dd.onhide = function (causer) {
                if (causer == "escape") {
                    control.focus();
                }
            };
            var spans = $("span", dd.$);
            for (var i = 0, ii = spans.length - 1; i < ii; i++) {
                (function () {
                    var $this = $(this),
                    html = $this.html();
                    // highlight matching tokens
                    var tokens = dropdownData.queryTokens;
                    tokens && tokens.length && tokens[0] && (html = html.replace(new RegExp("(" + tokens.join("|") + ")", "gi"), "<strong>$1</strong>"));
                    $this.html(html);
                }).call(spans[i]);
            }

            if (options.dropdownPostprocess) {
                options.dropdownPostprocess(dd.$);
                dd.hider = function () {
                    options.dropdownPostprocess(dd.$);
                };
            }

            /**
             * Check that all items in the drop down can be displayed - show ellipses at the end of any that
             * are too long. Also remove any unused properties that the dropDown may have stored for each
             * item in the list.
             */
            $("a span", dd.$).each(function () {
                var $a = $(this),
                    elpss = AJS("var", "&#8230;"),
                    elwidth = elpss[0].offsetWidth,
                    width = this.parentNode.parentNode.parentNode.parentNode.offsetWidth,
                    isLong = false,
                    rightPadding = 20; // add some padding so the ellipsis doesn't run over the edge of the box

                AJS.dropDown.removeAllAdditionalProperties($a);

                $a.wrapInner($("<em>"));
                $a.append(elpss);
                this.elpss = elpss;
                $("em", $a).each(function () {
                    var $label = $(this);

                    $label.show();
                    if (this.offsetLeft + this.offsetWidth + elwidth > width - rightPadding) {

                        var childNodes = this.childNodes,
                            success = false;

                        for (var j = childNodes.length - 1; j >= 0; j--) {
                            var childNode = childNodes[j],
                                truncatedChars = 1,
                                valueAttr = (childNode.nodeType == 3) ? "nodeValue" : "innerHTML",
                                nodeText = childNode[valueAttr];

                            do {
                                if (truncatedChars <= nodeText.length) {
                                    childNode[valueAttr] = nodeText.substr(0, nodeText.length - truncatedChars++);
                                } else { // if we cannot fit even one character of the next word, then try truncating the node just previous to this
                                    break;
                                }
                            } while (this.offsetLeft + this.offsetWidth + elwidth > width - rightPadding);

                            if (truncatedChars <= nodeText.length) {
                                // we've managed truncate part of the word and fit it in
                                success = true;
                                break;
                            }
                        }

                        if (success) {
                            isLong = true;
                        } else {
                            $label.hide();
                        }
                    }
                });
                if (!isLong) {
                    elpss.hide();
                }
            });

            if (old_dd) {
                dd.show();
                dd.method = attr.effect;
                old_dd.$.remove();
            } else {
                dd.show(attr.effect);
            }
            if (typeof onShow == "function") {
                onShow.call(dd);
            }
        };
        
        control.clearCache = function () {
        	cache = {};
        	cache_stack = [];
        };
        
        control.onchange = function (val, force) {
            clearTimeout(timer);
            control.busy = false;

            if (force || (/\S{2,}/).test(val)) {
                if (cache[val]) {
                    makeDropdown(cache[val]);
                } else {
                    var path = getPath();
                    if (!path) {
                        jsonparser({}, "success", val);  // it might not be appropriate to request data from the back end
                        return;
                    }

                    control.busy = true;
                    timer = setTimeout(function () { // delay sending a request to give the user a chance to finish typing their search term(s)
                        return AJS.$.ajax({
                            type: "GET",
                            url: contextPath + getPath(),
                            data: options.makeParams(val),
                            success: function (json, resultStatus) {
                                jsonparser(json, resultStatus, val);
                                control.busy = false;
                            },
                            dataType: "json",
                            global: false,
                            timeout: 5000,
                            error: function (xml, status, e) { // ajax error handler
                                if (status == "timeout") {
                                    jsonparser({statusMessage: "Timeout", query: val}, status);
                                }
                                control.busy = false;
                            }
                        });

                    }, 200);
                }
            } else {
                dd && dd.hide();
            }
        };

        control.hide = function () {
            dd && dd.hide();
        };
        control.die = function () {
            if (dd) {
                dd.hide();
                dd.$.remove();
            }
            control.inactive = true;
            options.onDeath && options.onDeath(dd);
        };
        control.dd = AJS.dropDown;

        return control;
    };

    /**
     * Options are:
     *   dropdownPostprocess - a function that will be supplied with the list created by the dropDown and can manipulate or modify it
     *                         as necessary.
     *   dropdownPlacement - a function that will be called with the drop down and which should place it in the correct place on the page.
     *                       The supplied arguments are 1) the input that issued the search, 2) the dropDown to be placed.
     *   ajsDropDownOptions - any options the underlying dropDown component can handle expects
     */
    $.fn.quicksearch = function (path, onShow, options) {
        options.path = path;
        options.onShow = onShow;
        options.makeParams = options.makeParams || function(val) {
            return {
                query: val
            };
        };
        var qs = AJS.quickSearch(options),
            qsinput = $(this);
        qs.focus = function () {
            qsinput.focus();
        };
        qsinput.keyup(function (e) {
            if (e.which == 13 || e.which == 9) {
                return;
			}
            !qsinput.hasClass("placeholded") && qs.change(this.value);
        });
        qsinput.quickSearchControl = qs;
        return qsinput;
    };

})(jQuery);
///*--------------------------------------------------------------------------
// Behaviour for page-permissions.vm
// --------------------------------------------------------------------------*/
AJS.PagePermissions = AJS.PagePermissions || {};

// TODO - send to AUI.
AJS.$.fn.disable = function(element) {
    return this.each(function() {
        var el = AJS.$(this);
        var id = el.attr("disabled", "disabled").addClass("disabled").attr("id");
        if (id) {
            // Only search in the parent - element might not exist in the DOM yet.
            AJS.$("label[for=" + id + "]", el.parent()).addClass("disabled");
        }
    });
};
AJS.$.fn.enable = function(element) {
    return this.each(function() {
        var el = AJS.$(this);
        var id = el.attr("disabled", "").removeClass("disabled").attr("id");
        if (id) {
            AJS.$("label[for=" + id + "]", el.parent()).removeClass("disabled");
        }
    });
};

AJS.toInit(function($) {

    var USER = "user",
        GROUP = "group";

    var contextPath = $("#confluence-context-path").attr("content");
    var isEditPage = !!$("#permissions-show-hide-link").length;

    var popup = null;
    var controls = null;
    var table = null;

    /**
     * Handles the AJAX calls to check for added users and groups, calling PermissionsTable.addEntry if found.
     */
    var permissionManager = {

        // Queries the server for whether an entityName represents a user or group
        // perform subsequent group check inside the callback of the user check so it occurs after the user check completes
        addNames : function (entityNames, entityType) {
            var pm = this;
            var entityNamesArray = entityNames.replace(/\s*,\s*/g, ",").split(",");
            var throbber = $("#waitImage");
            throbber.show();
            // TODO - use the parentPageId / space whither this page may have been MOVED.
            var params = {
                name: entityNamesArray,
                type: entityType || "",
                pageId: AJS.params.parentPageId,
                spaceKey: AJS.params.spaceKey
            };
            $.getJSON(contextPath + "/pages/getentities.action", params, function(results) {
                throbber.hide();
                for (var i = 0, len = results.length; i < len; i++) {
                    var entity = results[i].entity;
                    var report = results[i].report;
                    // 1. Add permission row for entity
                    pm.addEntity(results[i]);

                    // 2. Remove from submitted names list
                    var index = $.inArray(entity.name, entityNamesArray);
                    entityNamesArray.splice(index, 1);
                };
                // 3. Didn't find anything for names - should only occur for names via the form
                controls.validator.handleNonExistentEntityNames(entityNamesArray);
            });
        },

        // Note - dupe validation can't be done before looking up the entity from a name because it depends on the entity type.
        addEntity : function(entityResult) {
            if (!entityResult)
                return;

            var entity = entityResult.entity;
            var report = entityResult.report;

            var currentPermissionType = controls.getPermissionType();
            if (controls.validator.isDuplicateEntityForType(entity, currentPermissionType)) {
                table.highlightEntityRow(entity, currentPermissionType);
                return;
            }

            var entry = {
                entity : entity,
                view : true,     // always give added users/groups both permissions
                edit : true,
                report : report
            };
            table.addRow(entry, currentPermissionType);
            table.changedByUser();
            table.highlightEntityRow(entity, currentPermissionType);
            controls.nameField.removeFromNameInput(entity.name);
        },

        makePermissionStrings : function () {
            var permissions = table.makePermissionMap(false);
            return {
                viewPermissionsUsers : permissions.user.view.join(","),
                editPermissionsUsers : permissions.user.edit.join(","),
                viewPermissionsGroups : permissions.group.view.join(","),
                editPermissionsGroups : permissions.group.edit.join(",")
            };
        },

        /**
         * Calculates the correct height for the dialog divs, needed for the scroll bar.
         * TODO - remove this when DB writes AJS.Dialog2.
         */
        refreshLayout : function() {
            var tablesDiv = $("#page-permissions-tables");
            var dialog = $("#update-page-restrictions-dialog");

            var dialogHeight = dialog.outerHeight();
            var headerHeight = dialog.find("h2").outerHeight();
            var buttonBarHeight = dialog.find(".button-panel").outerHeight();
            var panelHeight = dialogHeight - (headerHeight + buttonBarHeight);
            var formHeight = $("#page-permissions-editor-form").outerHeight();
            var tablesHeight = panelHeight - formHeight;

            $("#update-page-restrictions-dialog .panel-body").height(panelHeight);
            tablesDiv.height(tablesHeight);
        }
    };

    /*--------------------------------------------------------------------------
        Public methods called by pop ups and page-editor.js
    --------------------------------------------------------------------------*/
    $.extend(AJS.PagePermissions, {
        // Callback from Choose Users popup
        addUserPermissions : function (commaDelimitedUserNames) {
            permissionManager.addNames(commaDelimitedUserNames, USER);
        },

        // Callback from Choose Groups popup
        addGroupPermissions : function (commaDelimitedGroupNames) {
            permissionManager.addNames(commaDelimitedGroupNames, GROUP);
        },

        makePermissionStrings : permissionManager.makePermissionStrings
    });

    /**
     * Adds rows to the permission table based on JSON data received from the back end. The data should have three
     * parts :
     *      1. permissions - An array of permission arrays, containing :
     *          a. permissionType
     *          b. entityType
     *          c. entity name (username or groupname)
     *          d. owning content name, if not the current page
     *      2. users - A map of usernames to User objects
     *      3. groups - A map of groupnames to Group objects
     */
    function loadTableFromJson (data) {
        table.allowEditing(data.userCanEditRestrictions);
        table.resetInherited();
        if (!permissionManager.permissionsEdited)
            table.resetDirect();

        if (!data) return;

        // 1. First, build up map of permissions for entity. // UI-973
        // TODO - If this design stays, build the map at the back-end. dT
        for (var i = 0, len = data.permissions.length; i < len; i++) {
            var permission = data.permissions[i];
            var permissionType = permission[0].toLowerCase();   // will come in as "View", "Edit"
            var entityType = permission[1];
            var entityName = permission[2];
            var wrappedEntity = (entityType == USER) ? data.users[entityName] : data.groups[entityName];
            var owningContentId = permission[3];
            var owningContentTitle = permission[4];

            var inherited = +owningContentId && owningContentId != AJS.params.pageId;
            if (permissionManager.permissionsEdited && !inherited)
                continue;

            var entryForEntityForPage = {
                owningId: owningContentId,
                entity: wrappedEntity.entity,
                report: wrappedEntity.report
            };
            entryForEntityForPage[permissionType] = true;
            entryForEntityForPage.owningTitle = owningContentTitle;
            entryForEntityForPage.inherited = inherited;

            table.addRow(entryForEntityForPage, permissionType);
        };

        table.saveBackup();
        table.refresh();
    };

    /**
     * Updates the Restrictions summary on the Page Edit screen with the full names of permitted users and the names of
     * permitted groups.
     *
     * Also synchronizes the hidden permission fields from the permissions table and notifies the user if they are
     * changed from the originals.
     */
    function updateEditPage () {

        var nameMap = table.makePermissionMap(true);

        // todo: refactor these doubled 4 lines of code.
        // todo: refactor this doubled line of comments.
        var viewSummaryDiv = $("#permissions-view-summary");
        var viewNames = [].concat(nameMap.group.view).concat(nameMap.user.view);
        if (viewNames.length) viewSummaryDiv.find(".summary-content").text(viewNames.join(", "));
        AJS.setVisible(viewSummaryDiv, viewNames.length);

        var editSummaryDiv = $("#permissions-edit-summary");
        var editNames = [].concat(nameMap.group.edit).concat(nameMap.user.edit);
        if (editNames.length) editSummaryDiv.find(".summary-content").text(editNames.join(", "));
        AJS.setVisible(editSummaryDiv, editNames.length);

        /**
         * Updates the hidden fields that submit the edited permissions in the form. The fields are updated with the
         * data in the Permissions table.
         */
        permissionManager.permissionsEdited = false;
        var permissionStrs = permissionManager.makePermissionStrings();
        for (var key in permissionStrs) {
            var updatedPermStr = permissionStrs[key];
            $("#" + key).val(updatedPermStr);

            if (permissionManager.originalPermissions[key] != updatedPermStr) {
                permissionManager.permissionsEdited = true;
            }
        }
    };

    /**
     * Closes the dialog after saving or cancelling, scrolling the web page to where it was prior to opening.
     */
    function closeDialog () {
        controls.validator.resetValidationErrors();
        table.clearHighlight();
        popup.hide();
        window.scrollTo(permissionManager.bookmark.scrollX, permissionManager.bookmark.scrollY);
    };

    /**
     * Called when the user saves the permissions. If creating/editing a page, just updates the hidden permission inputs.
     * If on any other screen, saves the permissions to the backend.
     */
    function saveClicked () {
        // TODO - the disabling of the submit button should be in AJS.Dialog.
        var submitButton = $(".permissions-update-button").disable();
        if (isEditPage) {
            updateEditPage();

            // Notify the user that the changes are not yet saved to the back-end.
            AJS.setVisible("#page-permissions-unsaved-changes-msg", permissionManager.permissionsEdited);
            submitButton.enable();
            closeDialog();
        } else {
            var post = permissionManager.makePermissionStrings();
            post.pageId = AJS.params.pageId;
            $("#waitImage").show();

            AJS.safe.post(contextPath + "/pages/setpagepermissions.action", post, function(data) {
                $("#waitImage").hide();

                // If any permissions set, show padlock
                AJS.setVisible("#content-metadata-page-restrictions", data.hasPermissions);
                submitButton.enable();
                closeDialog();
            }, "json");
        }
    };

    /**
     * Called when the user cancels the dialog via Cancel button or escape.
     */
    function cancel () {
        closeDialog();
        if (isEditPage) {
            table.restoreBackup();
        }
    };

    /**
     * Creates the permissions dialog with the main panel coming from a template, then initializes the Controls and Table
     * handlers.
     */
    function initPopup () {
        if (popup) return;

        popup = AJS.ConfluenceDialog({
            width : 865,
            height: 530,
            id: "update-page-restrictions-dialog",
            onCancel: cancel
        });

        popup.addHeader(AJS.I18n.getText("page.perms.dialog.heading"));
        popup.addPanel("Page Permissions Editor", AJS.renderTemplate("page-permissions-div"));
        popup.addButton(AJS.params.statusDialogUpdateButtonLabel || AJS.I18n.getText("update.name"), saveClicked, "permissions-update-button");
        popup.addButton(AJS.params.statusDialogCancelButtonLabel || AJS.I18n.getText("cancel.name"), cancel, "permissions-cancel-button");
        popup.popup.element.find(".button-panel").append(AJS.renderTemplate("page-restrictions-help-link"));
        //    $("#update-page-restrictions-dialog .button-panel").append($("#permissions-inherited-warning"));

        controls = AJS.PagePermissions.Controls(permissionManager);
        table = AJS.PagePermissions.Table($("#page-permissions-table"));
        permissionManager.table = table;
    }

    /**
     * Makes final changes to the popup and then displays it.
     */
    function showPopup (data) {
        permissionManager.bookmark = {
            scrollX : document.documentElement.scrollLeft,
            scrollY : document.documentElement.scrollTop
        };

        $(".permissions-update-button").disable();
        
        controls.setVisible(data.userCanEditRestrictions);

        var cancelButtonText = AJS.I18n.getText(data.userCanEditRestrictions ? "cancel.name" : "close.name");
        $(".permissions-cancel-button").text(cancelButtonText);
        AJS.setVisible(".permissions-update-button", data.userCanEditRestrictions);

        popup.show();
        permissionManager.refreshLayout();
    };

    /**
     * Gets page restrictions (direct and inherited), plus group/user details from the server. Also gets a flag if the 
     * user has permission to change restrictions or not.
     */
    function getPermissionsFromServer (callback, editingPage) {
        // If editingPage, Space and Parent Page may have changed due to the Location editor on the edit screen.
        var spaceKey = (editingPage && $("#newSpaceKey").val()) || AJS.params.spaceKey;
        var parentPageTitle = (editingPage && $("#parentPageString").val()) || "";
        var params = {
            pageId: AJS.params.pageId,
            parentPageId: AJS.params.parentPageId,
            parentPageTitle: parentPageTitle,
            spaceKey: spaceKey
        };
        if (AJS.params.newPage) {
            params.draftId = AJS.params.contentId;
        }

        $("#waitImage").show();
        $.getJSON(contextPath + "/pages/getpagepermissions.action", params, function(data) {
            $("#waitImage").hide();

            loadTableFromJson(data);
            callback(data);
        });
    };

    /**
     * Called when the user opens the popup from the view or edit screens.
     * 
     * @param isEditingAPage true if the popup is being called from a create/edit page screen, false otherwise
     */
    function openPopup (isEditingAPage) {
        initPopup();
        getPermissionsFromServer(showPopup, isEditingAPage);
    };

    $("#content-metadata-page-restrictions, #action-page-permissions-link").click(function (e) {
        openPopup(false);
        e.preventDefault();
        return AJS.stopEvent(e);
    });

    /**
     * Show dialog link for the Create/Edit page screen.
     */
    $("#permissions-show-hide-link").click(function (e) {
        openPopup(true);
        e.preventDefault();
        return AJS.stopEvent(e);
    });

    if (isEditPage) {
        // Store original values of hidden permission fields for comparison on dialog save, to show "Unsaved changes"
        permissionManager.originalPermissions = {
            viewPermissionsUsers : $("#viewPermissionsUsers").val(),
            editPermissionsUsers : $("#editPermissionsUsers").val(),
            viewPermissionsGroups : $("#viewPermissionsGroups").val(),
            editPermissionsGroups : $("#editPermissionsGroups").val()
        };
    }
});

/**
 * Controls the Table component of the Page Permissions dialog.
 */
AJS.PagePermissions.Table = function ($table) {

    var $ = AJS.$;
    var t = this;

    // TODO - remove this if the "Everyone" row design stays (or goes).
    var useEveryOne = false;

    /**
     * Determines if the user can edit the permissions in the table.
     */
    var canEdit = false;

    /**
     * Called when permissions are added or removed, updates the no view/edit rows, markers, and row highlights.
     */
    this.refresh = function () {

        var directViewRows = $table.find(".view-permission-row");
        var editRows = $table.find(".edit-permission-row");

        var hasViewPermissions = directViewRows.length > 0;
        var hasEditPermissions = editRows.length > 0;

        // Display "No view/edit restrictions" message row if no restrictions.
        AJS.setVisible("#page-permissions-no-views", !hasViewPermissions);
        AJS.setVisible("#page-permissions-no-edits", !hasEditPermissions);

        $table.each(function() {
            // Only display "Viewing restricted to" message on first view/edit row.
            $(".view-permission-row .page-permissions-marker-cell span", this).removeClass("first-of-type").filter(":first").addClass("first-of-type");
            $(".edit-permission-row .page-permissions-marker-cell span", this).removeClass("first-of-type").filter(":first").addClass("first-of-type");
        });

//        // If any entries have warning markers, show the warning legend at the bottom of the dialog.
//        var hasWarnings = !!$("#page-permissions-table .permission-entity-result .icon:not(.hidden)").length;
//        AJS.setVisible("#permissions-inherited-warning", hasWarnings);

        t.clearHighlight();
    };

    /**
     * Saves a copy of the last-changed table in case the user makes changes and then cancels.
     */
    this.saveBackup = function () {
        this.copy = $table.children().clone(true);
    };

    /**
     * Restores the saved copy
     */
    this.restoreBackup = function() {
        $table.children().remove();
        $table.append(this.copy);
    };

    var setupUserHover = function(userlink, username) {
        // Ensure no "popup" title will clash with the user hover.
        $("span, img", userlink).attr("title", "");

        // Find/set the index of this user in the user list
        var users = AJS.contentHover.users;
        var arrayIndex = $.inArray(username, users);
        if (arrayIndex == -1) {
            users.push(username);
            arrayIndex = $.inArray(username, users);
        }
        userlink.addClass("content-hover");

        AJS.contentHover(userlink, arrayIndex, contextPath + "/users/userinfopopup.action?username=" + username, AJS.contentHover.confluencePostProcess);
    };

    // Tracks the number of added rows to use as a unique id.
    this.addCount = 0;

    /**
     * Turns the table rows into a map of entity name arrays.
     * 
     * @param getDisplayNames if true, the display names of the entities are returned instead of the internal names.
     */
    this.makePermissionMap = function (getDisplayNames) {
        var permissions = {
            user : {
                view: [],
                edit: []
            },
            group : {
                view: [],
                edit: []
            }
        };

        $table.find("tr.view-permission-row, tr.edit-permission-row").each(function () {
            var row = $(this);
            var entityType = row.is(".user-permission") ? "user" : "group";
            var permissionType = row.is(".view-permission-row") ? "view" : "edit";

            // For summary get the "full name", else the "name"
            var nameType = (getDisplayNames && (entityType == "user")) ? "display-name" : "name";
            var entityName = row.find(".permission-entity-" + nameType).text();

            permissions[entityType][permissionType].push(entityName);
        });

        return permissions;
    };

    /** Not used unless we move on to checkboxes again */
    this.makePermissionMapForCheckboxes = function (forSummary) {
        var permissions = {
            user : {
                view: [],
                edit: []
            },
            group : {
                view: [],
                edit: []
            }
        };

        $table.find("tr.view-permission-row").each(function () {
            var row = $(this);
            var viewChecked = !!row.find(".view-permission-cell input").attr("checked");
            var editChecked = !!row.find(".edit-permission-cell input").attr("checked");

            if (viewChecked || editChecked) {
                var entityType = row.hasClass("user-permission") ? "user" : "group";

                // For summary get the "full name", else the "name"
                var nameType = (forSummary && (entityType == "user")) ? "display-name" : "name";
                var entityName = row.find(".permission-entity-" + nameType).text();

                // Don't count inherited views unless for summary
                if (viewChecked && (forSummary || !row.hasClass("readonly-permission"))) {
                    permissions[entityType].view.push(entityName);
                }
                if (editChecked) {
                    permissions[entityType].edit.push(entityName);
                }
            }
        });

        return permissions;
    };

    var setupEntity = function (row, entity) {
        var nameColumn = row.find("td.permission-entity");
        var imgSrc = contextPath + (entity.profilePictureDownloadPath || "/images/icons/" + entity.type + "_16.gif");
        nameColumn.find("img").attr("src", imgSrc);

        nameColumn.find(".permission-entity-name").text(entity.name);
        if (entity.type == "group") { // || entity.fullName == entity.name || !entity.name) {
            nameColumn.find(".permission-entity-name-wrap").hide();
        }
        nameColumn.find(".permission-entity-display-name").text(entity.fullName || entity.name);

        var userBox = nameColumn.find("span.entity-container");
        if (entity.type == "user") {
            setupUserHover(userBox, entity.name);
        }
    };

    this.addRow = function(entry, permissionType) {

        var entity = entry.entity;

        var newRowElement = $(AJS.renderTemplate("permissions-row-template"));
        newRowElement.addClass(entity.type + "-permission");
        newRowElement.addClass(permissionType + "-permission-row");

        // Change marker row text to match permission type.
        if (permissionType == "edit") {
            newRowElement.find(".page-permissions-marker-cell span").text(AJS.I18n.getText("page.perms.editing.restricted.to"));
        }

        // 1. User or Group with permission
        setupEntity(newRowElement, entity);

        var readOnlyRow = !canEdit || entry.inherited || entry.readOnly;

        if (readOnlyRow) {
            newRowElement.addClass("readonly-permission");
        }

        // 2. Remove col
        var removeLink = newRowElement.find(".remove-permission-link");
        if (readOnlyRow || !canEdit) {
            removeLink.remove();
        } else {
            removeLink.attr("id", "remove-permission-" + this.addCount++);
            removeLink.click(function (e) {
                $(this).closest("tr").remove();
                t.changedByUser();
                return AJS.stopEvent(e);
            });
        }

        if (entry.inherited) {
            // If there is already a table for the owning content, add this row to that
            var inheritedTable = $(".page-permissions-table[owningTitle='" + AJS.escape(entry.owningTitle) + "']");
            if (!inheritedTable.length) {
                // Else clone a new table
                var newTableDiv= $(AJS.renderTemplate("page-inherited-permissions-table-div-template"));
                inheritedTable = newTableDiv.find("table");
                inheritedTable.attr("owningTitle", AJS.escape(entry.owningTitle));

                var desc = newTableDiv.find(".page-inherited-permissions-table-desc");

                // Title/link for the parent page
                var link = desc.find("a");
                var href = contextPath + "/pages/viewpage.action?pageId=" + entry.owningId;
                link.attr("href", href).attr("target", "_blank").text(entry.owningTitle).addClass("page-perms-owningTitle");

                // Title of the current page
                var editorPageTitle = $("#content-title");  // use the title field if page create or edit 
                var title = editorPageTitle.length ? editorPageTitle.val() : AJS.params.pageTitle;
                desc.find("span").addClass(".page-perms-inherited-this-page").text(title);

                $("#page-inherited-permissions-tables").append(newTableDiv);
            }
            inheritedTable.append(newRowElement);


            $("#page-inherited-permissions-table-div").removeClass("hidden");

        } else {
            // Insert the new row either a) after the last row for the same entity or b) at the end of the table.
            if (permissionType == "view") {
                $("#page-permissions-no-edits").before(newRowElement);
            } else {
                $table.append(newRowElement);
            }
        }
    };

//    /**
//     * Adds a row to the table with permission data for a single entity (user or group) for a single owning page.
//     * TODO - this method unused for non-checkbox/radio version
//     */
//    this.addEntryXX = function(entry) {
//
//        var rowId = this.addCount++;
//
//        var entity = entry.entity;
//        var newRowElement = AJS.clone("#permissions-row-template");
//        newRowElement.addClass(entity.type + "-permission");
//
//        if (entry.report) {
//            $(".permission-entity-result .icon", newRowElement).text(entry.report).removeClass("hidden").attr("title", entry.report);
//        }
//        // 1. User or Group with permission
//        setupEntity(newRowElement, entity);
//
//        var inherited = +entry.owningId && entry.owningId != AJS.params.pageId;
//        var readOnly = !canEdit || inherited || entry.readOnly;
//
//        // 2. View permission
//        var viewCheck = newRowElement.find(".view-permission-cell input:checkbox");
//        var checkId = "view-permission-check-" + rowId;
//        viewCheck.attr("id", checkId);
//        viewCheck.next("label").attr("for", checkId);
//        if (readOnly) {
//            viewCheck.disable();
//        }
//
//        // 3. Edit permission
//        var editCheck = newRowElement.find(".edit-permission-cell input:checkbox");
//        var editLabel = editCheck.next("label");
//        if (inherited) {
//            editCheck.remove();
//            editLabel.remove();
//        } else {
//            checkId = "edit-permission-check-" + rowId;
//            editCheck.attr("id", checkId);
//            editLabel.attr("for", checkId);
//            if (readOnly) {
//                editCheck.disable();
//            }
//        }
//
//        // 4a. Inheritence status
//        var inheritDiv = newRowElement.find(".permission-inherited-div");
//        if (inherited) {
//            // i18n string has <a></a> where the link should go
//            inheritDiv.html(AJS.I18n.getText("page.perms.inherited.detail"));
//
//            var href = contextPath + "/pages/viewpage.action?pageId=" + entry.owningId;
//            var link = inheritDiv.find("a");
//            link.attr("href", href).attr("target", "_blank").text(entry.owningTitle);
//        } else {
//            inheritDiv.remove();
//        }
//
//        if (readOnly) {
//            newRowElement.addClass("readonly-permission");
//        }
//
//        // 4b. Remove col
//        var removeLink = newRowElement.find(".remove-permission-link");
//        if (readOnly) {
//            removeLink.remove();
//        } else if (!canEdit) {
//            removeLink.hide();
//        } else {
//            removeLink.click(function (e) {
//                $(this).parents("tr:first").remove();
//                t.permissionsChanged();
//                t.changedByUser();
//                return AJS.stopEvent(e);
//            });
//        }
//
//        if (inherited) {
//            // If there is already a table for the owning content, add this row to that
//            var inheritedTable = $(".page-permissions-table[owningTitle='" + entry.owningTitle + "']");
//            if (!inheritedTable.length) {
//                // Else clone a new table
//                var newTableDiv= AJS.clone("#page-inherited-permissions-table-div-template");
//                inheritedTable = newTableDiv.find("table");
//                inheritedTable.attr("owningTitle", entry.owningTitle);
//
//                newTableDiv.find(".page-perms-owningTitle").text(entry.owningTitle);
//
//                $("#page-inherited-permissions-tables").append(newTableDiv);
//            }
//            inheritedTable.append(newRowElement);
//
//
//            $("#page-inherited-permissions-table-div").removeClass("hidden");
//
//        } else {
//            // Insert the new row either a) after the last row for the same entity or b) at the end of the table.
//            var entityRows = table.find("tr").filter(function () {
//                return $(".permission-entity-name", this).text() == entity.name;
//            });
//            var prevEntityRow = entityRows.length && $(entityRows[entityRows.length - 1]);
//            if (prevEntityRow) {
//                newRowElement.addClass("user-continued");
//                prevEntityRow.after(newRowElement);
//            } else {
//                table.append(newRowElement);
//            }
//        }
//
//        // Have to check boxes after added to DOM for IE.
//        if (entry.view) {
//            viewCheck.attr("checked", "checked");
//        }
//        if (entry.edit) {
//            editCheck.attr("checked", "checked");
//        }
//        t.permissionsChanged();
//    },

    /**
     * Called when the user interacts with the dialog, adding, removing rows or changing checkboxes.
     */
    this.changedByUser = function () {
        $(".permissions-update-button").attr("disabled", "");
        t.clearHighlight();
        t.refresh();
    };

    /**
     * Resets the table when new JSON data populated. Creates a fake "Everyone" row at the top (if enabled).
     */
    this.resetDirect = function () {
        $table.find("tr:not(.marker-row)").remove();
        t.addCount = 0;

        if (useEveryOne) {
            var everyoneEntry = {
                entity : {
                    name : "",      // Guaranteed to not match any user or group names
                    fullName : AJS.I18n.getText("page.perms.everyone.user"),
                    type : "group"
                },
                readOnly : true,
                view : true,
                edit : true
            };
            this.addEntry(everyoneEntry);
        }
    };

    /**
     * Resets the inherited permissions tables when new JSON data populated.
     */
    this.resetInherited = function () {
        $("#page-inherited-permissions-tables div").remove();
    };

    /**
     * Clear any highlighted rows when the user clicks the direct permissions table.
     */
    $table.click(function (e) {
        t.clearHighlight();
    });

    $("#page-inherited-permissions-table-desc").click(function() {
        $(".page-inheritance-togglable").toggleClass("hidden");
        $(".icon", this).toggleClass("twisty-open").toggleClass("twisty-closed");
    });
    /**
     * Finds the uninherited table row for the given entity and highlights it, e.g. if the user tries to reenter the
     * entity name.
     */
    this.highlightEntityRow = function(entity, permissionType) {
        var highlightedRow = $table.find("." + permissionType + "-permission-row").filter(function() {
            return $(".permission-entity-name", this).text() == entity.name;
        });
        $("#page-permissions-tables").simpleScrollTo(highlightedRow);
        highlightedRow.addClass("highlighted-permission");
    };

    this.clearHighlight = function() {
        $("tr.highlighted-permission").removeClass("highlighted-permission");
    };

    this.allowEditing = function(allowEditing) {
        canEdit = allowEditing;
    };

    return this;
};

/**
 * Controls the Form component of the Page Permissions dialog.
 */
AJS.PagePermissions.Controls = function (permissionManager) {
    var $ = AJS.$;

    /**
     * Adds validation error messages for unknown or duplicate names.
     */
    var validator = {

        handleNonExistentEntityNames : function (entityNames) {
            if (!entityNames || !entityNames.length)
                return;

            var commaDelimitedNames = entityNames.join(", ");

            var errorMsg = AJS.I18n.getText("page.perms.error.invalid.entity.names") + " " + commaDelimitedNames;
            $("#page-permissions-error-div").find("div").text(errorMsg).end().removeClass("hidden");
            permissionManager.refreshLayout();
        },

        isDuplicateEntityForType : function (entity, permissionType) {
            var matches = $("#page-permissions-table ." + permissionType + "-permission-row .permission-entity-name").filter(function() {
                return $(this).text() == entity.name;
            });

            return matches.length > 0;
        },

        // TODO - currently unused because duplicated entity row is now highlighted. If design sticks, remove this method.
//        handleDuplicateEntityName : function(entityName) {
//            this.duplicateNames.push(entityName);
//            var commaDelimitedNames = this.duplicateNames.join(", ");
//            this.validationErrors["duplicateNames"] = AJS.params["page-perms-duplicate-names"] + " " + commaDelimitedNames;
//
//            this.updateAndShowValidationErrors();
//        },

        resetValidationErrors : function () {
            $("#page-permissions-error-div").addClass("hidden");
            permissionManager.refreshLayout();
        }
    };

    /**
     * Handles typing of user/names and groups with autocomplete and placeholder text.
     */
    var nameField = (function() {
        var input = $("#page-permissions-names-input");
        var autocompleted = $("#page-permissions-names-hidden");

        // The placeholder will be set as the initial value of the input.
        var placeholder = input.val();
        var placeholderClass = "input-placeholder";

        input.keypress(function (e) {
            if (e.keyCode == Event.KEY_RETURN) {
                namesEntered();
                input.focus();
                return false;
            }
            return true;
        });

        // TODO(dtaylor) Merge this with username from macro-browser-fields.js when time allows.
        input.quicksearch("/json/contentnamesearch.action?type=userinfo", null,
            {
                dropdownPostprocess : function (list) {
                    // remove the "search for" at the bottom of the list
                    $("ol.last", list).remove();

                    // check if there are items in the drop down. If none then display a
                    // message telling the user this
                    if ($("ol", list).length == 0) {
                        list.append(AJS.renderTemplate("permissions-username-no-suggestion-template"));
                    }
                },
                dropdownPlacement : function (dropDown) {
                    var placer = AJS("div");
                    placer.addClass("page-perms-name-dropdown-wrapper aui-dd-parent");
                    placer.append(dropDown);
                    input.after(placer);
                    // dropDownEscapeHandler(input, dropDown);
                },
                ajsDropDownOptions : {
                    selectionHandler: function (e, selection) {
                        // if the user selected the "no matches" message then do nothing
                        if (selection.hasClass("message")) return;

                        var contentProps = $.data(selection.find("span")[0], "properties");
                        var username = contentProps.href.substr(contentProps.href.lastIndexOf("/") + 2);
                        autocompleted.val(unescape(username));
                        input.val("");
                        namesEntered();
                        this.hide();
                        e.preventDefault();
                    }
               }
            }
        );
        input.focus(function() {
            if (input.hasClass(placeholderClass)) {
                input.removeClass(placeholderClass).val("");
            }
            // Reset the position of the autocomplete list each time the input gets focus. This allows for the window
            // being resized (and for the input being hidden when the position is originally calculated).
            var ol = input.next(".aui-dd-parent");
            ol.show();
            var expectedLeftOffset = input.offset().left;
            if (ol.offset().left != expectedLeftOffset) {
                ol.css("margin-left", 0);       // "reset" the offset.
                var olMarginLeft = expectedLeftOffset - ol.offset().left;
                ol.css("margin-left", olMarginLeft + "px");
            }
            var expectedTopOffset = input.offset().top + input.outerHeight();
            if (ol.offset().top != expectedTopOffset) {
                ol.css("margin-top", 0);       // "reset" the offset.
                var olMarginTop = expectedTopOffset - ol.offset().top;
                ol.css("margin-top", olMarginTop + "px");
            }
            ol.css({
                "width" : input.outerWidth()
            });
            ol.hide();
        });
        input.blur(function() {
            if (input.val() == "") {
                input.addClass(placeholderClass).val(placeholder);
            }
        });
        return {
            getValue : function() {
                var names = autocompleted.val();
                if (names) {
                    autocompleted.val("");
                } else {
                    names = input.val();
                    if (names == placeholder) {
                        names = "";
                    }
                }
                return names;
            },

            addPlaceholder : function() {
                input.addClass(placeholderClass).val(placeholder);
            },

            /**
             * Removes a name from the input field (called after the name is found at the back end)
             */
            removeFromNameInput : function (nameToRemove) {
                if (!nameToRemove)
                    return;

                var value = input.val();
                if (!value)
                    return;

                var entityNames = value.split(",");
                for (var i = 0; i < entityNames.length; i++) {
                    entityNames[i] = $.trim(entityNames[i]);
                }

                // remove all empty strings and the entity name that's just been added
                entityNames = $.grep(entityNames, function (name) {
                    return name != "" && name != nameToRemove;
                });

                if (entityNames.length) {
                    input.val(entityNames.join(", "));
                } else {
                    if (document.activeElement == input[0]) {
                        input.val("");
                    } else {
                        this.addPlaceholder();
                    }
                }
            }
        };
    })();

    /**
     * Called when the user hits Enter or clicks the Add button.
     */
    var namesEntered = function () {
        validator.resetValidationErrors();
        permissionManager.table.clearHighlight();
        var names = nameField.getValue();
        if (!names)
            return;

        permissionManager.addNames(names);
    };

    // Choose Me button (User and Group button are wired with VM component
    $("#page-permissions-choose-me").click(function(e) {
        validator.resetValidationErrors();
        permissionManager.addNames($(this).find(".remote-user-name").text());
        return AJS.stopEvent(e);
    });

    $("#permissions-error-div-close").click(function(e) {
        validator.resetValidationErrors();
        return AJS.stopEvent(e);
    });

    // Typed user list submit
    $("#add-typed-names").click(namesEntered);

    return {
        validator: validator,
        
        nameField: nameField,

        setVisible : function (show) {
            AJS.setVisible("#page-permissions-editor-form", show);
            AJS.setVisible(".remove-permission-link", show);

            // Set the user/group name field placeholder
            if (show) nameField.addPlaceholder();
        },

        isShowing : function() {
            return !$("#page-permissions-editor-form").hasClass("hidden");
        },

        getPermissionType : function() {
            return !!$("#restrictViewRadio:checked").length ? "view" : "edit";
        }
    };
};


AJS.toInit(function($) {
    var dialog = new AJS.Dialog(600, 210, "link-page-popup")
        .addHeader(AJS.params.linkToThisPageHeading)
        .addPanel(AJS.params.linkToThisPageHeading, "<form id='link-page-popup-form' class='aui'>" +
                               "<fieldset>" +
                               "</fieldset>" +
                               "</form>")
        .addButton(AJS.params.linkToThisPageClose, function(e) { hideDialog(e); }, "link-page-close-button");
    
    var keydownHandler = function(e) {
        if (e.which == 27) { // ESC
            hideDialog(dialog);
        }
    };

    var links = [
        {
            label: AJS.params.linkToThisPageLink,
            id: "link",
            value: $("link[rel=canonical]").attr("href")
        },
        {
            label: AJS.params.linkToThisPageTinyLink,
            id: "tiny-link",
            value: $("link[rel=shortlink]").attr("href")
        },
        {
            label: AJS.params.linkToThisPageWikiMarkup,
            id: "wiki-markup",
            value: $("meta[name=wikilink]").attr("content")
        }
    ];

    $.each(links, function() {
        $("#link-page-popup-form fieldset").append(AJS.format(
                "<div>" +
                    "<label for=''link-popup-field-{0}''>{1}:</label>" +
                    "<input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''>" +
                "</div>", this.id, this.label)).find("input:last").val(this.value);
    });

    var hideDialog = function(dialog) {
        dialog.hide();
        $(document).unbind("keydown", keydownHandler);
    };

    $("#link-to-page-link").click(function(e) {
        // If the fieldset isn't available skip the dialoglogin
        if (!$("#link-to-page-fields")[0]) {
            alert("Due to customisations made to this space's layout, Confluence is unable to load the links dialog. " +
                  "For details on how to correct this, please visit the 'Upgrading Custom Layouts' page in our Confluence " +
                  "Documentation, or contact your administrators.");
            return;
        }
        $(this).parents(".ajs-drop-down")[0].hide();
        dialog.show();
        $(document).keydown(keydownHandler);
        $("#link-page-popup-form #link-popup-field-tiny-link").select().focus();
        return AJS.stopEvent(e);
    });

    var linkText = $("#link-page-popup-form fieldset input.text");
    linkText.focus(function() {
        $(this).select();
    });

    // On Safari the mouse up event deselects the text
    linkText.mouseup(function(e){
        e.preventDefault();
    });

});

AJS.toInit(function ($){
    var editInWord = $('#edit-in-word');
    var pathAuth = false;
    if (!editInWord.length){
       editInWord = $('#edit-in-word-pathauth');
       pathAuth = true;
    }
    if (editInWord.length){
    	 var originalHref = editInWord.attr('href'); 
    	 editInWord.click(function (e) {
              e.preventDefault();
              return doEditInOffice(contextPath, originalHref, 'Word.Document', pathAuth);
          })    	
    }
});

AJS.toInit(function ($){

    var contextPath = document.getElementById('confluence-context-path').content;

    $("a.office-editable").each(function() {
        var $this = $(this);
        $this.click(function() {
            var href = $this.attr('href')
            return doEditInOffice(contextPath, href, getProgID(href), false);
        })
    });
    
    $("a.office-editable-pathauth").each(function() {
        var $this = $(this);
        $this.click(function() {
            var href = $this.attr('href')
            return doEditInOffice(contextPath, href, getProgID(href), true);
        })
    });
});

function getProgID(href)
{
    var ext = href.substring(href.lastIndexOf('.') + 1);

    switch(ext)
    {
        case "ppt":
        case "pptx":
        case "ppsx":
        case "pot":
        case "potx":
        case "pptm":
            return "PowerPoint.Show";
        case "doc":
        case "docx":
        case "dot":
        case "dotx":
            return "Word.Document";
        case "xls":
        case "xlt":
        case "xlsx":
        case "xlst":
        case "xlsm":
            return "Excel.Sheet";
        default:
            return ''
    }
}

function filterPath(urlPath)
{
    var jsession = getCookie('jsessionid');
    if (!jsession){
        jsession = getCookie('JSESSIONID');
    }
    if (jsession){
        var splitPath = urlPath.split('/');
        var newPath = '';
        for (var i = 0; i < splitPath.length - 1; i++){
            
            if (splitPath[i].length){
                newPath = newPath + '/' + splitPath[i];
            }            
        }
        newPath = newPath + '/ocauth/' + jsession + '/' + splitPath[splitPath.length - 1];
        return newPath        
     }
     else{
        return urlPath
     }
}

function getCookie( check_name ) {
    // first we'll split this cookie up into name/value pairs
    // note: document.cookie only returns name=value, not the other components
    var a_all_cookies = document.cookie.split( ';' );
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false; // set boolean t/f default f

    for ( i = 0; i < a_all_cookies.length; i++ ) {
        // now we'll split apart each name=value pair
        a_temp_cookie = a_all_cookies[i].split( '=' );

        // and trim left/right whitespace while we're at it
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

        // if the extracted name matches passed check_name
        if ( cookie_name == check_name ){
            b_cookie_found = true;
            // we need to handle case where cookie has no value but exists (no = sign, that is):
            if ( a_temp_cookie.length > 1 ){
                cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
            }
            // note that in cases where cookie is initialized but no value, null is returned
            return cookie_value;
            break;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }
    if ( !b_cookie_found ){
        return null;
    }
}

function getBaseUrl(){    
	return location.protocol + "//" + location.host;	
}

function doEditInOffice(contextPath, webDavUrl, progID, usePathAuth)
{
	    var baseUrl = getBaseUrl();
    	if (window.ActiveXObject)// this is IE
    	{
    		var ed; 
    		try
    		{
    			ed = new ActiveXObject('SharePoint.OpenDocuments.1');
    		}
    		catch(err)
    		{
    			window.alert('Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.');
    			return false;
    		}
    		if (ed)
    		{
    			if (usePathAuth)
    			{
    				webDavUrl = filterPath(webDavUrl);
    			}
    			ed.EditDocument(baseUrl + webDavUrl, progID);
    			return false;
    		}
    		else
    		{
    			window.alert('Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.');
    			return false;
    		}  
    	}
    	else if (window.URLLauncher)// this means the OC firefox plugin is installed
    	{
    		var isMac = navigator.appVersion.indexOf("Mac") != -1;
    		if (usePathAuth && !isMac)
			{
				webDavUrl = filterPath(webDavUrl);
			}
    		var wdFile = new URLLauncher();
    		// check and see if they have the function we want.
    		if (wdFile.open2)
    		{
	    		//grok the webdav root path and the remaining path after the root
	    		var regex = new RegExp(contextPath + '/plugins/servlet/[^\/]+/');
	    		var rootPath = webDavUrl.match(regex);
	    		var remainingPath = webDavUrl.substring(rootPath[0].length);	
	    		
	    		wdFile.open2(encodeURI(rootPath[0]), encodeURI(remainingPath));
    		}
    		else
    		{
    			wdFile.open(webDavUrl);
    		}
    	}
    	else if(window.InstallTrigger)
    	{
    		if(window.confirm('A plugin is required to use this feature. Would you like to download it?'))
    		{
    			InstallTrigger.install({'WebDAV Launcher': 'https://update.atlassian.com/office-connector/URLLauncher/latest/webdavloader.xpi'});
    		}
    	}
    	else
    	{
    		window.alert('Firefox or Internet Explorer is required to use this feature.');
    	}
    	return false;
}
function enableEdit(node)
{
	node.style.cursor='pointer';
	node.style.backgroundColor='#cccccc';
	node.style.color='';
	//node.parentNode.style.border='1px solid #cccccc';
}
function disableEdit(node)
{
    node.style.cursor='';
	node.style.backgroundColor='#ffffff';
	node.style.color='#ffffff';
	//node.parentNode.style.border='';	
}
AJS.moreLinkClickHandler=function(B){var A=AJS.$(this),C=A.attr("href"),D=A.closest(".more-link-container");if(!D.length){throw new Error("Could not find more link container when one was expected.")}AJS.$(".waiting-image",D).removeClass("hidden");AJS.$(".more-link-text",A).hide();AJS.$.get(C,function(E){$context=AJS.$(E);D.replaceWith($context);AJS.$(".more-link",$context).click(AJS.moreLinkClickHandler)});return AJS.stopEvent(B)};
AJS.toInit(function(A){A(".more-link").click(AJS.moreLinkClickHandler)});
AJS.toInit(function(A){A("select.content-filter").change(function(){A(".filter-control .waiting-image").removeClass("hidden");var B=A(this);A.get(AJS.params.changesUrl,{contentType:A(this).val()},function(E){var D=A(E);var C=B.parent();C.parent().siblings(".results-container").children("ul").html(D);A(".waiting-image",C).addClass("hidden");A(".more-link",D).click(AJS.moreLinkClickHandler)})})});
AJS.toInit(function($) {
    var hideSidebarCookie = "com.atlassian.confluence.sidebar.hide",
        sidebar = $("#personal-info-sidebar"),
        height = sidebar.height(),
        sidebarControl = $("#personal-info-sidebar .sidebar-collapse"),
        contentContainer = $("#full-height-container"),
        content = $("#content");

    function toggleSidebar() {
        var howHighIsContentContainer = contentContainer.height();
        var howHighIsContent = content.height();
        sidebar.toggleClass("collapsed");
        content.toggleClass("sidebar-collapsed");

        // fixed width theme: force page to stay tall enough to cope with sidebar
        if ($("body").hasClass("theme-fixedwidth") && !sidebar.hasClass("collapsed") && content.hasClass("view") && $("#main").hasClass("has-personal-sidebar")) {
            if (content.hasClass("sidebar-collapsed")) {
                $("#page").height(howHighIsContentContainer);
                content.height(howHighIsContent);
                sidebarControl.height(sidebar.height());
            } else {
                $("#page").height("auto");
                content.height("auto");
            }
        }

    }

    if (getCookie(hideSidebarCookie) == "true") {
        toggleSidebar();
    }

    $(".sidebar-collapse").click(function(e) {
        toggleSidebar();
        setCookie(hideSidebarCookie, sidebar.hasClass("collapsed"));
        return AJS.stopEvent(e);
    }).height(height);
    //sidebar.height(height); // fixes half-px rounding bug in FF but causes overflow bug
});
AJS.toInit(function($) {
    $(".confluence-thumbnail-link").click(function(e) {
        /* the thumbnail javacode will produce a link with a class specifying the image size widthxheight */
        var size = this.className.match(/(^|\s)(\d+)x(\d+)(\s|$)/);
        window.open(this.href, "thumbnail_popup", "width=" + (+size[2] + 20) + ",height=" + (+size[3] + 20) + ",menubar=no,status=no,toolbar=no");
        return AJS.stopEvent(e);
    });
});

/**
 * Code for toggling version metadata.
 */
AJS.toInit(function ($) {
    var comment = $("#version-comment");
    if (comment.length) {
        var showLink = $("#show-version-comment");
        var hideLink = $("#hide-version-comment");
        showLink.click(function (e) {
            showLink.hide();
            hideLink.show();
            comment.show();
            return AJS.stopEvent(e);
        });
        hideLink.click(function (e) {
            hideLink.hide();
            showLink.show();
            comment.hide();
            return AJS.stopEvent(e);
        });
    }
});

AJS.toInit(function ($) {
    if (!$("#add-labels-form").length) {
        return;
    }

    $(".show-labels-editor").click(function () {
        SuggestedLabelsForEntity.viewLabels(AJS.params.pageId, AJS.Labels.suggestedLabelsCallback);
        // reset the value of this field, just in case the browser wants to become helpful and insert the old value
        $("#labelsString").val("");
        $("#labels-section").addClass("open");

        // update the links
        AJS.setVisible(".show-labels-editor", false);
        AJS.setVisible("a.hide-labels-editor", true);
        AJS.setVisible("#labels-section-title", true);

        $("#labelsString").get(0).focus();
        return false;
    });
    $(".hide-labels-editor").click(function () {
        // clear out any error messages
        AJS.Labels.labelOperationError("");
        $("#errorSpan").html("");
        $("#labels-section").removeClass("open");

        // update the links
        AJS.setVisible("a.hide-labels-editor", false);
        AJS.setVisible(".show-labels-editor", true);
        if ($("#labelsList").children().length == 0 && $("#labelsString").val() == "") { // no labels
            $(".show-labels-editor").addClass("add").text(AJS.params.addLabel);
            AJS.setVisible("#labels-section-title", false);
        }
        else {
            $(".show-labels-editor").removeClass("add").text(AJS.params.editLabel);
            AJS.setVisible("#labels-section-title", true);
        }

        // add label if any user input
        AJS.Labels.addLabelFromInput();
        return false;
    });

    $("#add-labels-form").submit(AJS.Labels.addLabelFromInput);
    $(".labels-editor .add-labels").click(AJS.Labels.addLabelFromInput);
    $(".labels-editor .remove-label").click(AJS.Labels.removeLabel);

    // add return key handling to the label field
    $("#labelsString").keydown(function (event) {
        if (event.which == 13 && !AJS.dropDown.current) {
            AJS.Labels.addLabelFromInput();
            return AJS.stopEvent(event);
        }
    });
});


(function () {
    var originalAjax = jQuery.ajax;

    AJS.safe = {
        ajax: function (options) {
            if (options.data && typeof options.data == "object") {
                options.data.atl_token = jQuery("#atlassian-token").attr("content");
                return originalAjax(options);
            }
        },

        get: function () {
            jQuery.ajax = AJS.safe.ajax;
            try {
                return jQuery.get.apply(jQuery, arguments);
            } finally {
                jQuery.ajax = originalAjax;
            }
        },

        getScript: function(url, callback) {
            return AJS.safe.get(url, null, callback, "script");
        },

        getJSON: function(url, data, callback) {
            return AJS.safe.get(url, data, callback, "json");
        },

        post: function(url, data, callback, type) {
            jQuery.ajax = AJS.safe.ajax;
            try {
                return jQuery.post.apply(jQuery, arguments);
            } finally {
                jQuery.ajax = originalAjax;
            }
        }
    };
})();

// DEPRECATED: Use AJS.safe.ajax() directly
AJS.safeAjax = function(options) {
    return AJS.safe.ajax(options);
};

// An extension to Raphael to draw a spinner (useful to show user when waiting for something to load).
// It returns a function that you can execute later to remove the spinner.
Raphael.spinner = function (holderId, radius, colour) {
    var color = colour || "#fff",
        width = radius * 13 / 60,
        r1 = radius * 35 / 60,
        r2 = radius,
        cx = r2 + width,
        cy = r2 + width,
        r = Raphael(holderId, r2 * 2 + width * 2, r2 * 2 + width * 2),

        sectors = [],
        opacity = [],
        beta = 2 * Math.PI / 12,

        pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
    for (var i = 0; i < 12; i++) {
        var alpha = beta * i - Math.PI / 2,
            cos = Math.cos(alpha),
            sin = Math.sin(alpha);
        opacity[i] = i / 12;
        sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
    }
    var tick;
    (function ticker() {
        opacity.unshift(opacity.pop());
        for (var i = 0; i < 12; i++) {
            sectors[i].attr("opacity", opacity[i]);
        }
        r.safari();
        tick = setTimeout(ticker, 80);
    })();
    return function () {
        clearTimeout(tick);
        r.remove();
    };
};
/**
 * Displays the search results from search.action in a grid display of the current element.
 *
 * @param queryString the query string which the search was performed on
 * @param data JSON format of the results returned by search.action
 * @param controls an object with controls defined.
 * It should have a 'select' function to handle onclick events in the grid.
 * @param messages i18n messages required for the grid.
 */
jQuery.fn.searchResultsGrid = function(queryString, data, controls, messages) {
    var $ = jQuery, resultsContainer = this;

    if (!data.results || data.results.length == 0) {
        var message = AJS.format(messages.noSearchResults, AJS.escapeEntities(queryString));
        resultsContainer.html("<div class='no-results'>" + message + "</div>");
        return;
    }

    resultsContainer.html(AJS.getTemplate("searchResultsGrid").toString());

    var startIndex = data.startIndex + 1,
        endIndex = data.startIndex + data.results.length;
    var resultsCount = AJS.format(messages.resultsCount, startIndex, endIndex,
        data.total, AJS.escapeEntities(queryString));
    resultsContainer.prepend(AJS.renderTemplate("searchResultsGridCount", AJS.html(resultsCount)));

    for (var i=0; i<data.results.length; i++) {
        var item = data.results[i];
        var el = $(AJS.renderTemplate("searchResultsGridRow", [
            item.title,
            item.url,
            item.type,
            item.spaceName,
            item.spaceKey,
            item.friendlyDate,
            item.date
        ]));
        el.selectableEffects(resultsContainer, controls.select, item);
        resultsContainer.find("table").append(el);
    }

    $(".search-result:first", resultsContainer).click();
};
(function ($) {
    $.ui = $.ui || {};
    $.fn.extend({
        spinner: function (options) {
            if (!this.is(".ui-spinner")) {
                return new $.ui.spinner(this, options || {});
            }
        }
    });

    $.ui.spinner = function (anchor, options) {
        this.anchor = anchor;
        var prefix = AJS.params.staticResourceUrlPrefix || contextPath;
        this.images = options.images || 
            [
                prefix + "/images/ddtree/black spinner/1.png",
                prefix + "/images/ddtree/black spinner/2.png",
                prefix + "/images/ddtree/black spinner/3.png",
                prefix + "/images/ddtree/black spinner/4.png",
                prefix + "/images/ddtree/black spinner/5.png",
                prefix + "/images/ddtree/black spinner/6.png",
                prefix + "/images/ddtree/black spinner/7.png",
                prefix + "/images/ddtree/black spinner/8.png",
                prefix + "/images/ddtree/black spinner/9.png",
                prefix + "/images/ddtree/black spinner/10.png",
                prefix + "/images/ddtree/black spinner/11.png",
                prefix + "/images/ddtree/black spinner/12.png"
            ];
        this.width = options.width || "16px";
        this.height = options.height || options.width || "16px";
        this.hide = function () {
            this.anchor.hide();
            this.stop();
        };
        this.show = function () {
            this.start();
            this.anchor.show();
        };
        this.fadeIn = function () {
            this.anchor.fadeIn.apply(this.anchor, arguments);
        };
        this.fadeOut = function () {
            this.anchor.fadeOut.apply(this.anchor, arguments);
        };
        this.moveTo = function (x, y) {
            this.anchor.css("top", y);
            this.anchor.css("left", x);
        };
        this.putInBox = function (box) {
            var x = box.x || box.x1,
                y = box.y || box.y1,
                width = (typeof box.width == "undefined") ? box.x2 - box.x1 : box.width,
                height = (typeof box.height == "undefined") ? box.y2 - box.y1 : box.height;
            this.moveTo(x + Math.round((width - this.offsetWidth) / 2), y + Math.round((height - this.offsetHeight) / 2));
        };
        this.start = function () {
            if (!this.timer) {
                this.timer = setInterval(spin, 100);
            }
            return this.timer;
        };
        this.stop = function () {
            clearInterval(this.timer);
            this.timer = null;
        };
        this.divs = [];
        var isIE = /*@cc_on1@*/0;
        for (var i = 0, ii = this.images.length; i < ii; i++) {
            var div = document.createElement("div");
            if (isIE) {
                div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.images[i] + "', sizingMethod='scale')";
            } else {
                var img = document.createElement("img");
                img.src = this.images[i];
                img.style.width = this.width;
                img.style.height = this.height;
                div.appendChild(img);
            }
            div.style.width = this.width;
            div.style.height = this.height;
            this.anchor.append(div);
            if (!this.offsetWidth) {
                this.offsetWidth = div.offsetWidth;
                this.offsetHeight = div.offsetHeight;
            }
            this.divs.push($(div).hide());
        };
        this.frame = 0;
        this.direction = 1;
        var spinner = this;
        var spin = function () {
            spinner.divs[spinner.frame].hide();
            spinner.frame += spinner.direction;
            if (spinner.frame >= spinner.divs.length) {
                spinner.frame = 0;
            }
            if (spinner.frame < 0) {
                spinner.frame = spinner.divs.length - 1;
            }
            spinner.divs[spinner.frame].show();
        };
        this.anchor.css("position", "absolute");
    };
})(jQuery);
// See http://confluence.atlassian.com/pages/viewpage.action?pageId=155813439 for documentation
(function ($) {

    // Check for ui namespace in jQuery
    $.ui = $.ui || {};

    // Adding tree function to jQuery
    // $("#tree").tree();
    $.fn.extend({
        tree: function (options){
            if (!this.is(".ui-tree")) {
                return new $.ui.tree(this, options);
            }
        }
    });

    var preventDefault = function (e) {
        e.preventDefault();
    };

    // The tree object
    $.ui.tree = function (element, options) {
        var el = element,
            tree = this,
            elCreated = false,
            args = arguments;
        // if element is not a list, create one and add it into the element, in which case
        // set a flag to enable removal when tree reloaded
        if (!(/^[ou]l$/i.test(el[0].tagName))) {
            elCreated = true;
            if (!options.url) {
                return false;
            }
            el.html("<ul></ul>");
            el = $("ul", el);
        }
        var root = el[0];   // either a <ul> or an <ol>
        el.addClass("ui-tree");

        // private variables
        var obj = {
            list: el,
            // array of the items as they appear on the screen
            visibleNodes: [],
            dim: el.offset(),
            // array of the pixels assosiated with items from visibleNodes array
            points: [],
            win: $(window),
            timer: null,
            prev: 0,
            events: {
                grab: function () {},
                click: function () {},
                drag: function () {},
                drop: function () {},
                append: function () {},
                insertabove: function () {},
                insertbelow: function () {},
                load: function () {},
                nodeover: function () {},
                nodeout: function () {},
                onready: function () {},
                order: function() {},
                orderUndo: function() {},
                remove: function() {},
                preview: function() {}
            }
        };

        this.options = options;

        // These functions could be useful for debug
        // this.getLis = function () {
        //     return obj.visibleNodes;
        // };
        // this.getPoints = function () {
        //     return obj.points;
        // };
        // this.update = function () {
        //     updatePoints();
        // };

        /**
        * expands nodes by names provided
        * @method expandPath
        * @param {String} attr set of names to be expanded or/and callback function
        * @param {function} callback function which is called after all the nodes are expanded
        * @return {void}
        */
        this.expandPath = function (attr, callback) {
            callback = callback || function () {};
            if (attr.length) {
                var n = 1, node, name, opener = function () {
                    if (n < attr.length) {
                        for (var name in attr[n]) {
                            node = tree.findNodeBy(name, attr[n][name]);
                            if (node) {
                                break;
                            }
                        }
                        n++;
                        node.open(opener);
                    } else {
                        callback();
                    }
                };
                for (name in attr[0]) {
                    node = this.findNodeBy(name, attr[0][name]);
                    break;
                }
                // silently return if we can't find the node to expand
                if (!node) {
                    return;
                }
                node.open(opener);
            } else {
                callback();
            }
        };
        /**
        * reloads the tree
        * @method reload
        * @param {Object} options for recreating tree
        * @return {Object} new tree object
        */
        this.reload = function (options) {
            if (elCreated) {
                el.remove();
            }
            for (var i in options) {
                this.options[i] = options[i];
            }
            return new args.callee(element, this.options);
        };
        /**
        * appends node to the tree
        * @method append
        * @param {Object} node object
        * @return {void}
        */
        this.append = function (node) {
            var newnode = createLI(node);
            el.append(newnode);
            prepareLI.call(newnode);
            updateVisibleNodes();
        };

        /**
         * Remove the highlight from any nodes in the tree that are currently highlighted.
         */
        this.unhighlight = function () {
            el.find("li.highlighted").each(function (index, domElement) {
               $(this).removeClass("highlighted");
            });
        };

        function alphanum(a, b) {
            a = (a + "").toLowerCase();
            b = (b + "").toLowerCase();
            
            var chunks = /(\d+|\D+)/g,
                am = a.match(chunks),
                bm = b.match(chunks),
                len = Math.max(am.length, bm.length);
            for (var i = 0; i < len; i++) {
                if (i == am.length) {
                    return -1;
                }
                if (i == bm.length) {
                    return 1;
                }
                var ad = parseInt(am[i], 10),
                    bd = parseInt(bm[i], 10);
                if (ad == am[i] && bd == bm[i] && ad != bd) {
                    return (ad - bd) / Math.abs(ad - bd);
                }
                if ((ad != am[i] || bd != bm[i]) && am[i] != bm[i]) {
                    return am[i] < bm[i] ? -1 : 1;
                }
            }
            return 0;
        }



        function node($li) {
            this[0] = $li[0];
            this.$ = $li;
            this.text = $li.find("span").text();
            this.href = $li.find("a").attr("href");
            this.linkClass = $li.find("a").attr("class");
            this.nodeClass = $li.attr("class");
            this.open = function (callback) {
                return obj.visibleNodes[this[0].num].open(callback);
            };
            this.insertChild = function (nodeorli) {
                nodeorli.$ && (nodeorli = nodeorli[0]);
                obj.visibleNodes[this[0].num].append(nodeorli);
            };
            this.reorder = function () {
                obj.visibleNodes[this[0].num].order(alphanum);
            };
            this.close = function () {
                obj.visibleNodes[this[0].num].close();
            };
            this.getAttribute = function (attribute){
                return this[0][attribute];
            };
            this.setAttribute = function (attribute, value){
                this[0][attribute] = value;
            };
            this.highlight = function () {
                this.$.addClass("highlighted");
            };
            this.unhighlight = function () {
                this.$.removeClass("highlighted");
            };
            this.makeDraggable = function () {
                this.setAttribute("undraggable", false);
                this.$.removeClass("undraggable");
            };
            this.makeUndraggable = function () {
                this.setAttribute("undraggable", true);
                this.$.addClass("undraggable");
            };
            
            /**
             * The no propagation flag specifies that the addition of click handling will not
             * also apply to the children of the node.
             */            
            this.makeClickable = function (nopropagation) {
                this.setAttribute("unclickable", false);
                this.$.removeClass("unclickable");
                var alllinks = this[0].getElementsByTagName("a");
                var a;
                if (nopropagation) {
                    a = $(alllinks[0]);
                } else {
                    a = $(alllinks);
                }
                
                a.unbind("click", preventDefault);
                a.click(obj.events.click);
            };
            
            /**
             * The no propagation flag specifies that the prevention of click handling will not
             * also apply to the children of the node.
             */
            this.makeUnclickable = function (nopropagation) {
                this.setAttribute("unclickable", true);
                this.$.addClass("unclickable");
                var alllinks = this[0].getElementsByTagName("a");
                var a;
                if (nopropagation) {
                    a = $(alllinks[0]);
                } else {
                    a = $(alllinks);
                }
                
                a.click(preventDefault);
                a.unbind("click", obj.events.click);
            };
            this.setText = function(nodeText) {
                this.text = nodeText;
                this[0].text = nodeText;
                this.$.find("span").text(nodeText);
            };
            /**
             * Return the parent node object for this current node.
             * If the node has no parent then null will be returned.
             */
            this.getParent = function () {
                if (this.$.parent(":not(.ui-tree)").length) {
                    // parent node is not the root ul of the tree
                    var parentEl = this.$.parent().parent();
                    if (parentEl.length) {
                        return new node($(parentEl[0]));
                    }
                }
                
                return null;
            };
            
            this.append = function (node) {
                var uls = this.$.find("ul");
                if (!uls.length) {
                    if (this[0].toBeLoaded) {
                        var theNode = this;
                        this.open(function () {theNode.append(node);});
                        return false;
                    }
                    this.$.append("<ul></ul>");
                    uls = this.$.find("ul");
                }
                var newli = createLI(node);
                uls.append(newli);
                prepareLI.call(newli);
                if (typeof this[0].closed == "undefined") {
                    this.$.addClass("closed");
                    this[0].closed = true;
                    uls.hide();
                }
                updateVisibleNodes();
            };
            this.below = function (node) {
                var newnode = createLI(node);
                this.$.after(newnode);
                prepareLI.call(newnode);
                updateVisibleNodes();
            };
            this.above = function (node) {
                var newnode = createLI(node);
                this.$.before(newnode);
                prepareLI.call(newnode);
                updateVisibleNodes();
            };
            this.remove = function () {
                this.$.remove();
                updateVisibleNodes();
            };
            this.reload = function () {
                if (this[0].getElementsByTagName("ul").length) {
                    this[0].removeChild(this[0].getElementsByTagName("ul")[0]);
                    this.$.removeClass("opened").addClass("closed");
                    this[0].closed = true;
                    obj.visibleNodes[this[0].num].open();
                }
            };
            this.order = function (orderer) {
                var $ul = $("ul", this.$),
                    li = this[0];
                li.ordered = true;
                if ($ul.length) {
                    var oldorder = [];
                    li.oldorder = [];
                    $("li", this.$).each(function () {
                        oldorder.push(this);
                        li.oldorder.push(this);
                    });
                    function sorter(a, b) {
                        return orderer($(a).find("span").html(), $(b).find("span").html());
                    }
                    oldorder.sort(sorter);
                    li.order = oldorder;
                    for (var i = 0, ii = oldorder.length; i < ii; i++) {
                        $ul.append(oldorder[i]);
                    }
                }
                updateVisibleNodes();
            };
            this.orderUndo = function () {
                this[0].ordered = false;
                var $ul = $("ul", this.$);
                if (this[0].oldorder && $ul.length) {
                    for (var i = 0, ii = this[0].oldorder.length; i < ii; i++) {
                        $ul.append(this[0].oldorder[i]);
                    }
                }
                this[0].oldorder = null;
                updateVisibleNodes();
            };
            this.setOrdered = function (isOrdered) {
                this[0].ordered = isOrdered;
                $("a.abc:first", this).css("display", isOrdered ? "none" : "block");
                $("a.rollback:first", this).css("display", "none");
            };
            // Copy any other custom parameters to this object
             if (tree.options.parameters && tree.options.parameters.length) {
                 for (var j = 0, jj = tree.options.parameters.length; j < jj; j++) {
                     if ($li[0][tree.options.parameters[j]]) {
                         this[tree.options.parameters[j]] = $li[0][tree.options.parameters[j]];
                     }
                 }
             }
        }
        /**
        * finds a node in the tree by its attribute
        * @method findNodeBy
        * @param {String} attributeName name of the atribute
        * @param {String} attributeValue value of the atribute
        * @return {Object | Array} node object or array of nodes
        */
        this.findNodeBy = function (attributeName, attributeValue) {
            var results = [], lis = root.getElementsByTagName("li");
            for (var i = 0, ii = lis.length; i < ii; i++) {
                if (lis[i][attributeName] == attributeValue) {
                    // Here we creating an object to be used as a return value
                    results.push(new node($(lis[i])));
                }
            }

            if (results.length == 0) {
                return null;
            } else if (results.length == 1) {
                return results[0];
            } else {
                return results;
            }
        };

        if (options.url) {
            // Spinner
            var div = document.createElement("div");
            div.className = "tree-spinner";
            if (options.spinnerId) {
                div.id = options.spinnerId;
            }
            $("body").append(div);
            obj.spinner = $(div).spinner();
            obj.spinner.hide();
        }

        // copy event handlers from options to obj.events
        for (var i in obj.events) {
            if (typeof options[i] == "function") {
                obj.events[i] = options[i];
            }
        }

        /**
         * Return whether the supplied node is a folder.
         */
        function isFolder(grandpa) {
            return !(grandpa.tagName.toLowerCase() == "li" && $("li:not(.tree-helper)", grandpa).length < 1)
        }

        // Object container for nodes in the tree
        function VisibleNode(li) {
            this.$li = $(li);
            this.height = this.$li.height();
        }
        VisibleNode.prototype.append = function (li) {
            if (this.$li[0] == li) {
                return false;
            }
            if (this.$li[0].toBeLoaded) {
                var item = this;
                this.load(function () {item.append(li);});
                return false;
            }
            if (this.$li[0].tagName.toLowerCase() == "li") {
                var ul = $("ul:first", this.$li);
                var grandpa = li.parentNode.parentNode;
                $(".rollback:first", grandpa).css("display", "none");
                if (ul.length) {
                    ul.append(li);
                    if (this.$li[0].ordered) {
                        this.order(alphanum);
                    }
                } else {
                    ul = document.createElement("ul");
                    ul.appendChild(li);
                    this.$li[0].appendChild(ul);
                    this.$li.addClass("opened");
                    $(".click-zone:first", this.$li).css("display", "inline");
                    $(".rollback:first", this.$li).css("display", "none");
                }
                
                if (!isFolder(grandpa)) {
                    obj.visibleNodes[grandpa.num].notaFolderAnymore();                    
                }
                
                setTimeout(updateVisibleNodes, 0);
                obj.events.append.call({source: li, target: this.$li[0]});
            }
        };
        VisibleNode.prototype.below = function (li) {
            var grandpa = li.parentNode.parentNode;
            this.$li.after(li);
            $(".rollback:first", grandpa).css("display", "none");
            if (isFolder(grandpa)) {
                if (!$(li.parentNode).hasClass("ui-tree") && !li.parentNode.parentNode.undraggable) {
                    li.parentNode.parentNode.ordered = false;
                    $(".abc:first", li.parentNode.parentNode).css("display", "block");
                    $(".rollback:first", li.parentNode.parentNode).css("display", "none");
                }                
            } else {
                obj.visibleNodes[grandpa.num].notaFolderAnymore();
            }
            setTimeout(updateVisibleNodes, 0);
            obj.events.insertbelow.call({source: li, target: this.$li[0]});
        };
        VisibleNode.prototype.above = function (li) {
            var grandpa = li.parentNode.parentNode;
            this.$li.before(li);
            $(".rollback:first", grandpa).css("display", "none");
            if (isFolder(grandpa)) {
                if (!$(li.parentNode).hasClass("ui-tree") && !li.parentNode.parentNode.undraggable) {
                    li.parentNode.parentNode.ordered = false;
                    $(".abc:first", li.parentNode.parentNode).css("display", "block");
                    $(".rollback:first", li.parentNode.parentNode).css("display", "none");
                }                
            } else {
                obj.visibleNodes[grandpa.num].notaFolderAnymore();
            }
            setTimeout(updateVisibleNodes, 0);
            obj.events.insertabove.call({source: li, target: this.$li[0]});
        };
        VisibleNode.prototype.order = function (orderer) {
            var li = this.$li[0];
            li.ordered = true;
            var $ul = $("ul:first", this.$li);
            if ($ul.length) {
                var oldorder = [];
                li.oldorder = [];
                $("li", this.$li).each(function () {
                    if (this.parentNode.parentNode == li) {
                        oldorder.push(this);
                        li.oldorder.push(this);
                    }
                });
                function sorter(a, b) {
                    var atext = $("span", a).text().replace(/^\s+|\s+$/g, ""),
                        btext = $("span", b).text().replace(/^\s+|\s+$/g, "");
                    return orderer(atext, btext);
                }
                oldorder.sort(sorter);
                li.order = oldorder;
                for (var i = 0, ii = oldorder.length; i < ii; i++) {
                    $ul.append(oldorder[i]);
                }
            }
            updateVisibleNodes();
        };
        VisibleNode.prototype.orderUndo = function () {
            var li = this.$li[0];
            li.ordered = false;
            var $ul = $("ul:first", this.$li);
            if (li.oldorder && $ul.length && $ul[0].parentNode == li) {
                for (var i = 0, ii = li.oldorder.length; i < ii; i++) {
                    $ul.append(li.oldorder[i]);
                }
            }
            li.oldorder = null;
            li.oldor = null;
            updateVisibleNodes();
        };
        VisibleNode.prototype.open = function (callback) {
            callback = callback || function () {};
            if (this.$li.hasClass("closed")) {
                var ul = $("ul:has(li)", this.$li);
                if (ul.length) {
                    ul.show();
                    this.closed = false;
                    this.$li.removeClass("closed").addClass("opened");
                    updateVisibleNodes();
                    callback(true);
                    return true;
                } else {
                    return this.load(callback);
                }
            }
            callback(false);
            return false;
        };
        VisibleNode.prototype.close = function (callback) {
            callback = callback || function () {};
            var ul = this.$li.contents().filter("ul:has(li)");
            if (ul.length) {
                ul.hide();
                this.closed = true;
                this.$li.removeClass("opened").addClass("closed");
                obj.visibleNodes.splice(this.$li[0].num + 1, ul[0].getElementsByTagName("li").length);
                updateVisibleNodes();
                callback();
            }
        };
        VisibleNode.prototype.load = function (callback) {
            var url = tree.options.url;
            if (!url) {
                return false;
            }
            callback = callback || function () {};
            this.$li[0].toBeLoaded = false;
            this.$li[0].closed = true;
            var params = {};
            if (options.parameters && options.parameters.length) {
                for (var i = 0, ii = options.parameters.length; i < ii; i++) {
                    params[options.parameters[i]] = (this.$li[0][options.parameters[i]] || "");
                }
            }
            var node = this,
                span = this.$li[0].getElementsByTagName("span")[0],
                spanWidth = span.offsetWidth,
                spanLeft = Math.round($(span).offset().left);
            node.loading = true;
            obj.spinner.putInBox({x:spanLeft + spanWidth, y: this.top, width: 25, height: obj.H});
            obj.spinner.show();
            var insertNodes = function (data) {
                var ul = $("ul", node.$li);
                if (!ul.length) {
                    ul = document.createElement("ul");
                    node.$li[0].appendChild(ul);
                    ul = $(ul);
                }
                node.ordered = (typeof data[0].position != "number");
                for (var i = 0, ii = data.length; i < ii; i++) {
                    var li = createLI(data[i]);
                    ul[0].appendChild(li);
                    prepareLI.call(li);
                }
                ul.hide();
                //  this will clear the loading flag
                node.open(callback);
                obj.events.load();
                obj.spinner.hide();

                // Now know which button should be active, based on node.ordered..
                // Never show revert before changes are made, but show ABC if already ordered.
                node.$li[0].ordered = node.ordered;
                $(".abc:first", node.$li[0]).css("display", node.ordered || li.undraggable ? "none" : "block");
                $(".rollback:first", node.$li[0]).css("display", "none");
            };

            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                data: params,
                success: insertNodes
            });
            return true;
        };
        VisibleNode.prototype.notaFolderAnymore = function () {
            this.$li.removeClass("closed").removeClass("opened");
            $(".click-zone:first", this.$li).hide();
            $(".abc:first", this.$li).css("display", "none");
            $(".rollback:first", this.$li).css("display", "none");
            var ul = this.$li[0].getElementsByTagName("ul");
            this.closed = false;
            if (ul.length) {
                this.$li[0].removeChild(ul[0]);
            }
        };

        /**
        * finds a node in the tree by its y coordinate and returns it as a bundle
        * @method getItem
        * @param {String} num name of the atribute
        * @return {Object} bundle of visibleNode, where and top
        */
        function getItem(num) {
            var p = obj.points[num];
            if (typeof p != "undefined") {
                return {visibleNode: obj.visibleNodes[p.num], where: p.where, top: p.top};
            } else {
                return {visibleNode: new VisibleNode(root), where: "append", top: obj.dim.top};
            }
        }

        /**
         * Rebuilds the array of tree nodes by y-coordinate.
         */
        function updatePoints() {
            var prev = {y: 0, num: 0};
            obj.points = [];
            for (var j = 0, jj = obj.visibleNodes.length; j < jj; j++) {
                var offset = obj.visibleNodes[j].$li.offset(),
                    y = Math.round(offset.top);
                obj.visibleNodes[j].top = y;
                obj.visibleNodes[j].left = Math.round(offset.left);
                if (prev.y) {
                    var q = (y - prev.y) / 4;
                    for (var i = prev.y; i < y; i++) {
                        var where = (i - prev.y < q)?"above":(i - prev.y < q * 3)?"append":"below";
                        obj.points[i] = {num: prev.num, where: where, top: prev.y};
                    }
                }
                if (j == jj - 1) {
                    var q = (obj.visibleNodes[j].height) / 4;
                    for (var i = y; i < y + obj.visibleNodes[j].height; i++) {
                        var where = (i - y < q)?"above":(i - y < q * 3)?"append":"below";
                        obj.points[i] = {num: j, where: where, top: y};
                    }
                }
                prev.y = y;
                prev.num = j;
            }
        }
        function updateVisibleNodes() {
            obj.visibleNodes = [];
            var lis = $("li:visible", root); //root.getElementsByTagName("li");
            for (var i = 0, ii = lis.length; i < ii; i++) {
                if (!$(lis[i]).hasClass("tree-helper")) {
                    lis[i].num = obj.visibleNodes.length;
                    obj.visibleNodes.push(new VisibleNode(lis[i]));
                }
            }
            updatePoints();
        }
        this.updateVisibleNodes = updateVisibleNodes;

        // Jquery-specific options for passing to "node.draggable" later. Separated for readability.
        var draggableOptions = function() { var options = {
                distance: 3,
                helper: 'clone',
                opacity: 0.7,
                cursorAt: {top: obj.H / 2, left: 30},
                stop: function(e, ui) {
                    clearInterval(obj.timer);
                    clearTimeout(obj.opentimer);
                    obj.opentimer = null;
                    var item = getItem(obj.prev);
                    item.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");
                    item.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");
                    obj.win.unbind("keypress", obj.escape);
                    delete obj.escape;
                    if (options.revert) {
                        options.revert = false;
                        return false;
                    }
                    item = getItem(e.pageY);
                    // check if the target is the source or it's children
                    var ele = item.visibleNode.$li[0], isOk = true;
                    while (ele != root) {
                        if (ele == this) {
                            isOk = false;
                            break;
                        }
                        ele = ele.parentNode;
                    }
                    // don't insert above next element and don't append to element's parent
                    isOk =  isOk && !(item.where == "above" && item.visibleNode.$li.prev()[0] == this) &&
                            !(item.where == "append" && item.visibleNode.$li[0] == this.parentNode.parentNode);
                    if (isOk) {
                        item.visibleNode[item.where](this);
                        obj.events.drop.call({position: item.where, source: this, target: item.visibleNode.$li[0]});
                    }
                },
                start: function (e, ui) {
                    var target = this;
                    ui.helper.append("<strong></strong>")
                        .addClass("tree-helper")
                        .find(".button-panel").remove();
                    obj.events.grab.call(target);
                    if (this.undraggable) {
                        ui.helper.addClass("no");
                        options.revert = true;
                    }
                    obj.escape = function (e) {
                        if (e.keyCode == 27) {
                            var item = getItem(obj.prev);
                            item.visibleNode.$li.removeClass("over").removeClass("above").removeClass("append").removeClass("below");
                            item.visibleNode.$li.next().removeClass("over").removeClass("above").removeClass("append").removeClass("below");
                            var newhelper = ui.helper.clone();
                            ui.helper.before(newhelper);
                            newhelper.animate({
                                left: Math.round($(target).offset().left) + "px",
                                top: Math.round($(target).offset().top) + "px",
                                opacity: 0
                            }, "slow", "swing", function () {newhelper.remove();});
                            ui.helper.css("display", "none");
                            options.revert = true;
                        }
                    };
                    obj.win.keypress(obj.escape);
                },
                drag: function (e, ui) {
                    var olditem = getItem(obj.prev);
                    olditem.visibleNode.$li.removeClass("above").removeClass("append").removeClass("below");
                    olditem.visibleNode.$li.next().removeClass("above").removeClass("append").removeClass("below");
                    if (!options.revert || obj.out) {
                        obj.prev = e.pageY;
                        var item = getItem(obj.prev);
                        if (item.visibleNode.$li[0] == root) {
                            options.revert = true;
                            obj.out = true;
                            return;
                        } else {
                            if (obj.out) {
                                obj.out = false;
                                options.revert = false;
                            }
                        }
                        if (item.visibleNode != olditem.visibleNode) {
                            obj.events.nodeout.call(olditem.visibleNode.$li);
                            if (obj.opentimer) {
                                clearTimeout(obj.opentimer);
                                obj.opentimer = false;
                            }
                        }
                        obj.events.nodeover.call({element: item.visibleNode.$li, position: item.where});
                        var className = item.where,
                            next = item.visibleNode.$li.next();
                        if (className == "below" && next.length && !next.hasClass("tree-helper")) {
                            next.addClass("above");
                        } else {
                            getItem(obj.prev).visibleNode.$li.addClass(className);
                        }
                        // Openning
                        if (item.where == "append" && (item.visibleNode.closed || item.visibleNode.$li[0].toBeLoaded) && !obj.opentimer) {
                            obj.opentimer = (function (item) {
                                return setTimeout(function () {
                                    item.visibleNode.$li.removeClass("append");
                                    item.visibleNode.open(function () {obj.opentimer = false;});
                                }, 500);
                            })(item);
                        }
                        // Scrolling
                        var f = arguments.callee;
                        if (obj.win.height() - e.pageY + obj.win.scrollTop() < 30) {
                            clearInterval(obj.timer);
                            obj.timer = setInterval(function () {
                                window.scrollBy(0, 4);
                                ui.helper.css("top", parseInt(ui.helper.css("top")) + 4 + "px");
                                f({pageY: e.pageY + 4}, ui);
                            }, obj.win.height() - e.pageY + obj.win.scrollTop());
                        } else {
                            if (obj.win.scrollTop() > 0 && (e.pageY - obj.win.scrollTop()) < 30) {
                                clearInterval(obj.timer);
                                obj.timer = setInterval(function () {
                                    window.scrollBy(0, -4);
                                    f({pageY: e.pageY - 4}, ui);
                                    ui.helper.css("top", parseInt(ui.helper.css("top")) - 4 + "px");
                                }, e.pageY - obj.win.scrollTop());
                            } else {
                                if (obj.timer) {
                                    clearInterval(obj.timer);
                                }
                            }
                        }
                        obj.events.drag.call({element: this, left: e.pageX, top: e.pageY});
                    }
                }
            };
            return options;
        };

        // adds necessary event handlers to HTML <li>
        function prepareLI() {
            var nod = $(this);
            if (tree.options.undraggable) {
                nod.mousedown(preventDefault);
            } else {
                nod.draggable(draggableOptions());
                nod[0].undraggable = nod.hasClass("undraggable");
            }
            var a = $(this.getElementsByTagName("a")[0]);
            if (tree.options.unclickable) {
                nod.addClass("unclickable");
                a.click(preventDefault);
            } else {
                a.click(obj.events.click);
            }

            if (tree.options.oninsert) {
                tree.options.oninsert.call(new node(nod), a);
            }
        };

        $.ui.tree.callNumber = 0;
        var clickZoneHandler = function (e) {
            if (obj.visibleNodes[this.parentNode.num].loading){
                return;
            }
            if ($(this.parentNode).hasClass("closed")) {
                obj.visibleNodes[this.parentNode.num].open();
            } else {
                obj.visibleNodes[this.parentNode.num].close();
            }
            return false;
        },
            liOverHandler = function (e) {
                if (!$(e.target).hasClass("tree-helper")) {
                    $(".button-panel:first", this).addClass("hover");
                }
                return false;
            },
            liOutHandler = function (e) {
                if (!$(e.target).hasClass("tree-helper")) {
                    $(".button-panel:first", this).removeClass("hover");
                }
                return false;
            },
            abcHandler = function () {
                var item = obj.visibleNodes[this.parentNode.parentNode.num];
                item.order(alphanum);
                obj.events.order.call({source: item.$li[0]});
                $(this).hide();
                $("a.rollback", this.parentNode).show();
                return false;
            },
            cbaHandler = function (e) {
                var item = obj.visibleNodes[this.parentNode.parentNode.num];
                item.orderUndo();
                obj.events.orderUndo.call({source: item.$li[0], orderedChildren: $("ul:first", item.$li[0]).children()});
                $(this).hide();
                $("a.abc", this.parentNode).show();
                return false;
            },
            previewHandler = function (e) {
                e.preventDefault();
                var item = obj.visibleNodes[this.parentNode.parentNode.num];
                obj.events.preview.call({source: preview, node: item.$li[0]});
            },
            removeHandler = function (e) {
                e.preventDefault();
                var item = obj.visibleNodes[this.parentNode.parentNode.num];
                obj.events.remove.call({source: item.$li[0]});
            };
        function createLI(node) {
            var li = document.createElement("li");
            li.className = node.nodeClass;
            if (tree.options.parameters && tree.options.parameters.length) {
                for (var j = 0, jj = tree.options.parameters.length; j < jj; j++) {
                    if (node[tree.options.parameters[j]]) {
                        li[tree.options.parameters[j]] = node[tree.options.parameters[j]];
                    }
                }
            }
            if (tree.options.nodeId) {
                li.id = "node-" + node[tree.options.nodeId];
            }
            var a = document.createElement("a"),
                span = document.createElement("span"),
                dec = document.createElement("i");
            dec.className = "decorator";
            a.href = node.href;
            span.appendChild(document.createTextNode(node.text));
            a.appendChild(span);
            a.appendChild(dec);
            a.className = node.linkClass;
            var clickZone = document.createElement("div");
            $(clickZone).addClass("click-zone");
            $(clickZone).click(clickZoneHandler);
            $(li).mouseover(liOverHandler).mouseout(liOutHandler);
            li.appendChild(clickZone);
            li.appendChild(a);

            var div = document.createElement("div");
            div.className = "button-panel";
            li.appendChild(div);

            var abc = document.createElement("a");
            abc.className = "abc";
            abc.title = "Sort Alphabetically";
            div.appendChild(abc);

            var cba = document.createElement("a");
            cba.className = "rollback";
            cba.title = "Undo Sorting";
            div.appendChild(cba);

            $(abc).click(abcHandler);
            $(cba).click(cbaHandler);
            if (tree.options.isAdministrator) {
                var preview = document.createElement("a");
                preview.className = "preview-node";
                preview.title = "Preview";
                div.appendChild(preview);

                $(preview).click(previewHandler);

                var rem = document.createElement("a");
                rem.className = "remove-node";
                rem.title = "Delete";
                div.appendChild(rem);

                $(rem).click(removeHandler);

            }

            $(abc).css("display", "none");
            $(cba).css("display", "none");

            var $li = $(li);
            if ($li.hasClass("opened")) {
                $li.removeClass("opened").addClass("closed");
                li.closed = true;
            } else if ($li.hasClass("closed")) {
                li.toBeLoaded = true;
            } else {
                $(clickZone).css("display", "none");
            }
            return li;
        }

        // initialisation
        var li = el.contents().filter("li");
        if (li.length > 0) {
            // some tree data exists in the DOM already
            obj.H = li.height();
            li.each(prepareLI);
            updateVisibleNodes();
            obj.events.onready.call(this);
        } else {
            // all tree data is to be loaded from back-end
            var url = tree.options.initUrl || tree.options.url;
            if (!url) {
                return false;
            }
            obj.spinner.putInBox({x: obj.dim.left, y: obj.dim.top, width: 16, height: 16});
            obj.spinner.show();
            var call = ++$.ui.tree.callNumber;
            $.getJSON(url, function (data) {
                var dt = +new Date;
                for (var i = 0, ii = data.length; i < ii; i++) {
                    var li = createLI(data[i]);
                    root.appendChild(li);
                    if (i == 0) {
                        obj.H = $(li).height();
                    }
                    prepareLI.call(li);
                }
                updateVisibleNodes();
                obj.spinner.hide();
                // if the data was re-requested again we only call onready for the latest request
                if (call == $.ui.tree.callNumber){
                    obj.events.onready.call(this);
                    $.ui.tree.callNumber = 0;
                }
            });
        }
        obj.offset = root.offsetTop;
        setInterval(function () {
            if (root.offsetTop != obj.offset) {
                updatePoints();
                obj.offset = root.offsetTop;
            }
        }, 10);
        return this;
    };
})(jQuery);
jQuery.fn.movePageOrdering = function (newSpaceKey, newParentPage, pageTitle, reorderFunction) {
    var $ = jQuery;
    
    var contextPath = $("#confluence-context-path").attr("content");
    var orderingContainer = $("#orderingPlaceHolder",  this);

    orderingContainer.addClass("loading").html(AJS.renderTemplate("movePagePanelLoading"));    
    
    orderingContainer.load(
            contextPath + "/panels/reorderpage.action",
            {
                panelName: "reorder",
                spaceKey: newSpaceKey,
                title: newParentPage,
                movedPageId: AJS.params.pageId,
                pageTitle: pageTitle
            },
            function () {
                orderingContainer.removeClass("loading");                
                initialisePageOrderMechanism(orderingContainer, reorderFunction);
                scrollCurrentPageIntoView($(".siblings",orderingContainer));
            });


    /**
     * Calculate the targetId and the positional indicator for this
     * placement. The possible outcomes are - - previous sibling id, with
     * placement of below - next sibling id, with placement of above If
     * neither situation is found then the reorderFunction will not be
     * called.
     * 
     * @param clickPoint
     *            the place holder position clicked
     * @param reorderFunction
     *            function with the signature (targetId, indicator) which will
     *            be called with the result of the move
     */
    var siblingSelector = function(clickPoint, reorderFunction) {
        var positionIndicator;
        var target = clickPoint.prevAll("li.sibling:first");
        if (target.length) {
            positionIndicator = "below";
        } else {
            positionIndicator = "above";
            target = clickPoint.nextAll("li:sibling:first");
        }
        
        if (target.length) {
            AJS.log("Reorder: positionIndicator = " + positionIndicator + " and target = " + target[0].innerHTML);
            var targetId = $("i", target[0]).text();
            reorderFunction(targetId, positionIndicator);
        }
    }
        
    var initialisePageOrderMechanism = function (container, reorderFunction) {
        
        var dropper = $(".dropper", container),
            target = $(".target", dropper);
        
        var placementPlaceholderIdCounter = 0;
        
        $("li", dropper).each(function (i) {
            !i && $(this).before($('<li class="leading">&nbsp;</li>'));
            $(this).after($('<li class="leading">&nbsp;</li>'));
        });
        var targetLeading = target.next();
        $(".leading", dropper).hover(function (e) {
            $(this).addClass("here");
        }, function () {
            $(this).removeClass("here");
        }).click(function () {
            siblingSelector($(this), reorderFunction);
            var lead = this;
            target.hide(150, function () {
                lead != targetLeading[0] && $(lead).after(targetLeading).after(target);
                target.show(150);
            });
        });
    };
    
    var scrollCurrentPageIntoView = function(container) {
        var currentPage = $(".target", container);
        
        if (currentPage.length) {
            // scroll into view
            var topOffset = currentPage.position().top;
            var containerHeight = container.height();
            if (topOffset < 0 || topOffset > containerHeight) {
                container.scrollTop(container.scrollTop() + topOffset - containerHeight / 3);
            }
        }
    };
};
/**
 * Shortens the set of elements by replacing the last character of each with ellipsis
 * until the condition returns true. Typical usage:
 *
 *   $("#some-list li").shortenUntil(function () { return $("#some-list").width() < 500; });
 *
 * @param condition shortening of elements will happen until this function returns true
 */
jQuery.fn.shortenUntil = function (condition) {
    var $ = jQuery;
    var current = 0;
    while (!condition() && current < this.length) {
        var currentText = $(this[current]).text();
        if (currentText == "\u2026") {
            current++;
            continue;
        }
        $(this[current]).text(currentText.replace(/[^\u2026]\u2026?$/, "\u2026"));
    }
    return this;
};

/**
 * Renders a set of breadcrumbs in the specified element. Typical usage:
 *
 *   $("some-element").renderBreadcrumbs([ { title: "Dashboard", url: "/dashboard.action" }, ... ]);
 *
 * @param items an array of objects with 'title' and 'url' properties, representing the breadcrumbs.
 */
jQuery.fn.renderBreadcrumbs = function (items) {
    var $ = jQuery;
    var el = this;
    var html = [];
    var i = 0;
    var last = items.length - 1;
    
    var space = items[i];
    var spaceClass = space.url.indexOf("~") >= 0 ? "personalspacedesc" : "spacedesc";
    html.push(AJS.renderTemplate("movePageBreadcrumb", space.title,
            space.url, (i == last ? "last content-type-" + spaceClass : ""), space.title));

    while (i++ < last) {
        var parent = items[i];
        html.push(AJS.renderTemplate("movePageBreadcrumb", parent.title,
            parent.url, (i == last ? "last content-type-" + items.type : ""), parent.title));
    }
    
    var lessThanContainer = function () {
		return el.width() < el.closest(".breadcrumbs-container").width();
	}
    
    // shorten the middle items first then the space (first item) and then the last item 
    this.html(html.join(""));
    var breadcrumbItems = $('li a span', this);
    breadcrumbItems.each(function(index){
    	if (index != 0 && index != last){
    		$(this).shortenUntil(lessThanContainer);
    	}
    });
    $(breadcrumbItems.get(0)).shortenUntil(lessThanContainer);
    $(breadcrumbItems.get(last)).shortenUntil(lessThanContainer);
    return this;
};

AJS.toInit(function ($) {
    var contextPath = $("#confluence-context-path").attr("content");

    // returns false if the breadcrumb contains the current page
    function isValidLocation(breadcrumbs) {
        for (var i=1; i<breadcrumbs.length; i++) { // skip dashboard and space title
            if (breadcrumbs[i].title == AJS.params.pageTitle) {
                return false;
            }
        }
        return true;
    };

    if (!AJS.MoveDialog) AJS.MoveDialog = {};

    var breadcrumbCache = {}; // cached for entire request -- if this isn't okay, move it into Breadcrumbs class below

    /**
     * Handles retrieval of breadcrumbs via AJAX and caching of the responses until the page reloads.
     * 
     * Possible options:
     * 
     * spaceKey - The space key for the space containing the object you want breadcrumbs for. It can be the space by itself or an 
     *            object within the space
     * title - The page title for the page you want breadcrumbs for or a page with an attachment you want breadcrumbs for.
     * fileName - the name of the attachment you want breadcrumbs for. 
     * userName - the name of the User you want breadcrumbs for. If this option is specified, the others are ignored and the user
     *            breadcrumbs are returned. 
     */
    AJS.MoveDialog.getBreadcrumbs = function (options, success, error) {
        var cacheKey = options.userName ? options.userName : 
        	(options.pageId ? (options.pageId + ":" + options.fileName): 
        		(options.spaceKey + ":" + options.title + ":" + options.postingDay + ":" + options.fileName));
        
        if (cacheKey in breadcrumbCache) {
            success(breadcrumbCache[cacheKey], "success");
            return;
        }       
       
        $.ajax({
            type: "GET",
            dataType: "json",
            data: options,
            url: contextPath + "/pages/breadcrumb.action",
            error: error || function () { },
            success:  function (data, textStatus) {
                if (!data || !data.breadcrumbs) {
                    error(data, textStatus);
                    return;
                }
                
                var breadcrumbs = $.makeArray(data.breadcrumbs);
                
                // strip out "Dashboard" and "People"
                while (breadcrumbs[0] && (/dashboard.action$/.test(breadcrumbs[0].url) || 
                	  (data.type != "userinfo" && /peopledirectory.action$/.test(breadcrumbs[0].url)))) {
                    breadcrumbs.shift();
                }
                breadcrumbs.type = data.type;
                
                breadcrumbCache[cacheKey] = breadcrumbs;
                success(breadcrumbs, textStatus);
            }
        });
    };

    /**
     * Returns an object with an 'update' method, which can be called to render a breadcrumb
     * with that location inside the breadcrumbsElement.
     *
     * @param breadcrumbsElement the element (usually a 'ul') where the breadcrumb will be
     * rendered.
     */
    AJS.MoveDialog.Breadcrumbs = function (breadcrumbsElement) {

        var requestCount = 0

        function displayBreadcrumbs(spaceKey, breadcrumbs, controls) {
            breadcrumbsElement.renderBreadcrumbs(breadcrumbs);
            var validLocation = spaceKey != AJS.params.spaceKey || isValidLocation(breadcrumbs);
            if (validLocation) {
                controls.clearErrors();
                $(controls.moveButton).attr("disabled", "");
            } else {
                controls.error(AJS.params.movePageDialogInvalidLocation);
                $("li:last-child", breadcrumbsElement).addClass("warning");
            }
        }

        return {
            /**
             * Updates the breadcrumb to the specified location. Any errors are handled by
             * calling 'controls.error' with the message.
             *
             * @param options available options
             * 
             * spaceKey - The space key for the space containing the object you want breadcrumbs for. It can be the space by itself or an 
		     *            object within the space
		     * title - The page title for the page you want breadcrumbs for or a page with an attachment you want breadcrumbs for.
		     * fileName - the name of the attachment you want breadcrumbs for. 
		     * userName - the name of the User you want breadcrumbs for. If this option is specified, the others are ignored and the user
		     *            breadcrumbs are returned. 
             * @param controls should contain an 'error' function which is used to pass
             * errors back to the caller, and a 'clearErrors' which indicates no errors
             * occurred
             */
            update: function (options, controls) {
                AJS.log("Breadcrumbs update: " + breadcrumbsElement.attr("id") + " to:");
                AJS.log(options);
                breadcrumbsElement.html(AJS.renderTemplate("movePageBreadcrumbLoading"));
                var thisRequest = requestCount += 1;

                // Breadcrumbs and errors should only be displayed for the latest request.
                var isRequestStale = function() {
                    if (thisRequest != requestCount) {
                        AJS.log("Breadcrumb response for ");
                        AJS.log(options)
                        AJS.log(" is stale, ignoring.");
                        return true;
                    }
                    return false;
                };
                
                AJS.MoveDialog.getBreadcrumbs(options,
                    function (breadcrumbs, textStatus) {
                        if (isRequestStale()) return;

                        if (textStatus != "success" || !breadcrumbs) {
                            breadcrumbsElement.html(AJS.renderTemplate("movePageBreadcrumbError", textStatus));
                            return;
                        }
                        displayBreadcrumbs(options.spaceKey, breadcrumbs, controls);
                    },
                    function (xhr) {
                        if (isRequestStale()) return;

                        breadcrumbsElement.html(AJS.renderTemplate("movePageBreadcrumbError"));
                        if (xhr.status == 404) {
                            controls.error(AJS.params.movePageDialogLocationNotFound);
                        }
                    }
                );
            }
        };
    };
});

jQuery.fn.movePageAutocomplete = function (url, appendTo, notFoundTemplate, selectionHandler) {
    var $ = jQuery;
    var handler = selectionHandler;
    AJS.log(url);
    return $(this).quicksearch(url, null, {
        dropdownPostprocess: function (list) {
            $("> ol.last", list).remove();
            if (!$("> ol", list).length) { // empty list
                $(list).append(AJS.renderTemplate(notFoundTemplate));
            }
            $("> ol:last-child", list).addClass("last");
            $("a", list).attr("tabindex", "-1"); // prevent tabbing to links
        },
        dropdownPlacement: function (dropDown) {
            $(appendTo).append(dropDown);
        },
        ajsDropDownOptions: {
            selectionHandler: function (e, selected) {
                if (selected) {
                    this.hide("selected");
                    handler(e, selected);
                    e.preventDefault();
                }
            }
        }
    });
};

/**
 * Renders the 'Known Location' tab with autocomplete in the move page dialog.
 *
 * @param controls should contain:
 * - an 'error' function for passing errors back to the caller
 * - a 'clearErrors' function to indicate no problems occurred
 * - a 'select' function to handle selection of a new parent page
 * - a 'moveButton' jQuery-wrapped element, which is the default button in the dialog
 */
jQuery.fn.movePageLocation = function (controls) {
    var $ = jQuery;
    var container = $(this);
    var space = $("#new-space", container);
    var spaceKey = $("#new-space-key", container);
    var parentPage = $("#new-parent-page", container);

    var fieldChanged = function () {
        if (space.val() == "") {
            space.val(AJS.params.spaceName);
            spaceKey.val(AJS.params.spaceKey);
        }
        controls.clearErrors();
        controls.select(spaceKey.val(), space.val(), parentPage.val());
    };

    parentPage.blur(fieldChanged).focus(function () {
        controls.clearErrors();
        AJS.dropDown.current && AJS.dropDown.current.hide();
    });
    space.blur(fieldChanged).focus(function () {
        AJS.dropDown.current && AJS.dropDown.current.hide();
    });

    space.movePageAutocomplete(
        "/json/contentnamesearch.action?type=spacedesc&type=personalspacedesc",
        $(".new-space-dropdown", container),
        "movePageNoMatchingSpaces",
        function (e, selected) {
            var props = selected.find("span").data("properties");
            spaceKey.val(props.spaceKey);
            space.val(AJS("span").html(props.name).text());
            parentPage.val("");
            fieldChanged();
            parentPage.focus();
        }
    );
    parentPage.movePageAutocomplete(
        function () { return "/json/contentnamesearch.action?type=page&spaceKey=" + spaceKey.val(); },
        $(".new-parent-page-dropdown", container),
        "movePageNoMatchingPages",
        function (e, selected) {
            var title = AJS("span").html(selected.find("span").data("properties").name).text();
            parentPage.val(title);
            fieldChanged();
            window.setTimeout(function () {
                controls.moveButton.focus(); // focus slightly afterwards, so Firefox 2 doesn't submit the form
            }, 50);
        }
    );
};

/**
 * The search panel of the move page dialog.
 *
 * @param controls should contain:
 * - an 'error' function for passing errors back to the caller
 * - a 'clearErrors' function to indicate no problems occurred
 * - a 'select' function to handle selection of a new parent page
 */
jQuery.fn.movePageSearch = function (controls) {
    var $ = jQuery;
    var contextPath = $("#confluence-context-path").attr("content");
    var container = this;
    var button = $("input[type=button]", container);
    var query = $("input.search-query", container);
    var space = $(".search-space", container);
    var results = $(".search-results", container);

    // enter keypress on space or query should search
    $([ space[0], query[0] ]).keydown(function (e) {
        if (e.which == 13) {
            button.click();
        }
    });

    // arrows in query or results should move selection up or down
    $([ query[0], results[0] ]).keydown(function (e) {
        function moveSelection(delta) {
            var results = $(".search-result", container);
            var selected = $(".search-result.selected", container);
            var index = results.index(selected) + delta;
            if (index < 0) index = results.length - 1;
            if (index >= results.length) index = 0;
            results.eq(index).click();
        }

        if (e.which == 38) {
            moveSelection(-1);
        } else if (e.which == 40) {
            moveSelection(1);
        }
    });

    button.click(function () {
        controls.clearErrors();
        var queryString = query.val();
        if (queryString == "") {
            results.empty();
            return;
        }
        results.html(AJS.getTemplate("movePageSearchResultsLoading").toString());

        $.ajax({
            type: "GET",
            dataType: "json",
            data: {
                queryString: queryString,
                where: space.val(),
                types: ["spacedesc", "personalspacedesc", "page"]
            },
            url: contextPath + "/json/search.action",
            error: function () {
                controls.error(AJS.params.movePageDialogSearchError);
            },
            success: function(data, status) {
                if (status != "success") {
                    controls.error(AJS.params.movePageDialogSearchError);
                    return;
                }

                var searchResultsControls = { 
                    // called when a row is selected
                    select: function (rowElement, data) {
                        if (data.type == "page")
                            controls.select(data.spaceKey, data.spaceName, data.title, data.id);
                        else
                            controls.select(data.spaceKey, data.spaceName);
                    }
                };
                
                results.searchResultsGrid(queryString, data, $(controls).extend(searchResultsControls), {
                    "noSearchResults": AJS.params.movePageDialogSearchNoResults,
                    "resultsCount": AJS.params.movePageDialogSearchResultCount
                });
            }
        });
    });
};
/**
 * The history (or 'Recently Viewed' in the new vernacular) panel of the move page dialog.
 *
 * @param controls should contain:
 * - an 'error' function for passing errors back to the caller
 * - a 'clearErrors' function to indicate no problems occurred
 * - a 'select' function to handle selection of a new parent page
 */
jQuery.fn.movePageHistory = function (controls) {
    var $ = jQuery;
    var contextPath = $("#confluence-context-path").attr("content");
    var container = this;
    var results = $(".search-results", container);

    // arrows in results should move selection up or down
    $(results).keydown(function (e) {
        function moveSelection(delta) {
            var results = $(".search-result", container);
            var selected = $(".search-result.selected", container);
            var index = results.index(selected) + delta;
            if (index < 0) index = results.length - 1;
            if (index >= results.length) index = 0;
            results.eq(index).click();
        }

        if (e.which == 38) {
            moveSelection(-1);
        } else if (e.which == 40) {
            moveSelection(1);
        }
    });

    results.html(AJS.getTemplate("movePageHistoryLoading").toString());

    $.ajax({
        type: "GET",
        dataType: "json",
        data: {
            types: ["spacedesc", "personalspacedesc", "page"]
        },
        url: contextPath + "/json/history.action",
        error: function () {
            controls.error(AJS.params.movePageDialogHistoryError);
        },
        success: function(data, status) {
            if (status != "success") {
                controls.error(AJS.params.movePageDialogHistoryError);
                return;
            }
            if (!data.history || data.history.length == 0) {
                results.html("<div class='no-results'>" + AJS.params.movePageDialogHistoryNoResults + "</div>");
                return;
            }

            results.html(AJS.getTemplate("searchResultsGrid").toString());
            $.each(data.history, function () {
                var item = this;
                if (item.id == AJS.params.pageId) { // skip current page
                    return;
                }
                var el = AJS.$(AJS.renderTemplate("searchResultsGridRow", [
                    item.title,
                    contextPath + item.url,
                    item.type,
                    item.spaceName,
                    item.spaceKey,
                    item.friendlyDate,
                    item.date
                ]));
                $(el).click(function (e) {
                    if (item.type == "page") {
                        controls.select(item.spaceKey, item.spaceName, item.title, item.id);
                    } else {
                        controls.select(item.spaceKey, item.spaceName);
                    }
                    results.find(".selected").removeClass("selected");
                    $(this).addClass("selected");
                    return AJS.stopEvent(e);
                });
                $(el).hover(function () {
                    $(this).addClass("hover");
                }, function () {
                    $(this).removeClass("hover");
                });
                results.find("table").append(el);
            });
            if ($(".search-result", results).length == 0) {
                results.html("<div class='no-results'>" + AJS.params.movePageDialogHistoryNoResults + "</div>");
            }
        }
    });
};
/**
 * The 'Browse' panel with a tree view in the move page dialog.
 *
 * @param controls includes a 'select' and 'error' callback for handling those events on this panel
 * @param newSpaceKey the space key selected by the user in another panel. The tree should change to show this space.
 * @param newSpaceName the name of the space selected by the user
 * @param newParentPage the parent page selected by the user in another panel. The tree should expand to show this page.
 * @param originalParent the original parent page of the current page. The tree should also expand to show this page.
 * @param pageTitle the current title for the page being moved (for display in the tree).
 */

jQuery.fn.movePageBrowse = function (controls, newSpaceKey, newSpaceName, newParentPage, originalParent, pageTitle) {
    var $ = jQuery;
    var contextPath = $("#confluence-context-path").attr("content");
    var container = this;

    var treeContainer = $(".tree", container);
    treeContainer.addClass("loading").html(AJS.renderTemplate("movePagePanelLoading"));

    var tree,
        onready = function () {
            treeContainer.removeClass("rendering").addClass("expanding");
            $("#parent-selection-tree .button-panel").remove();

            expandToPage(AJS.params.spaceKey, originalParent, function (found) {
                if (found && originalParent != "") {
                    var parentPageNode = tree.findNodeBy("text", originalParent);
                    if (parentPageNode) {
                        parentPageNode.$.find("> a").addClass("current-parent");
                    }
                }

                // Make the node for the current page unclickable. Additionally, if the title of the current page has
                // been changed in the edit screen then update it in the tree
                if (found && AJS.params.pageTitle != "") {
                    var pageNode = tree.findNodeBy("text", AJS.params.pageTitle);
                    if (pageNode) {
                        pageNode.makeUnclickable();
                        
                        if (AJS.params.pageTitle != pageTitle) {
                            // the user has changed the title on the edit screen so update the tree
                            pageNode.setText(pageTitle);
                        }
                    }
                }

                expandToPage(newSpaceKey, newParentPage, function (found) {
                    if (found) {
                        var selectedNode = tree.findNodeBy("text", newParentPage);
                        if (selectedNode) {
                            selectedNode.$.find("> a").addClass("highlighted");

                            // scroll into view
                            var topOffset = selectedNode.$.position().top;
                            var containerHeight = treeContainer.height();
                            if (topOffset < 0 || topOffset > containerHeight) {
                                treeContainer.scrollTop(treeContainer.scrollTop() + topOffset - containerHeight / 3);
                            }
                        }
                    }

                    treeContainer.removeClass("expanding");
                });
            });
        };

    var clickHandler = function (e) {
        e.preventDefault(); // don't follow the link that was clicked

        $("a.highlighted", treeContainer).removeClass("highlighted");
        $(this).addClass("highlighted");

        newSpaceKey = $("#chosenSpaceKey").val();
        newSpaceName = $("#chosenSpaceKey option:selected").text();
        newParentPage = $(this).hasClass("root-node")
            ? ""                           // clicked on space
            : $(this).find("span").text(); // clicked on page
        controls.select(newSpaceKey, newSpaceName, newParentPage);
    };

    var initialiseSpacePicker = function () {
        // initialise the space selector (if there is one - if only one space available then it will be a hidden input)
        $("select#chosenSpaceKey").val(newSpaceKey).change(function () {
            var spaceKey = $(this).val();
            var spaceName = $(this).find("option:selected").text();

            $("#tree-root-node-item a").text(spaceName)
                .toggleClass("highlighted", newSpaceKey == spaceKey && newParentPage == "")
                .toggleClass("current-parent", AJS.params.spaceKey == spaceKey && originalParent == "");

            treeContainer.addClass("rendering");
            tree = tree.reload({
                initUrl: contextPath + "/pages/children.action?spaceKey=" + encodeURIComponent(spaceKey) + "&node=root"
            });
        });

        // create and initialise the treeRootDiv
        $("#tree-root-div").html(AJS.renderTemplate("movePageBrowsePanelSpace", newSpaceName))
            .find("a").click(clickHandler)
                .toggleClass("highlighted", newParentPage == "")
                .toggleClass("current-parent", AJS.params.spaceKey == newSpaceKey && originalParent == "");
    };

    var expandToPage = function (spaceKey, pageTitle, callback) {
        if (spaceKey != $("#chosenSpaceKey").val()) {
            callback(false);
            return;
        }
        console.log("before breadcrumbs");
        AJS.MoveDialog.getBreadcrumbs({spaceKey:spaceKey, title:pageTitle}, function (breadcrumbs) {
            var toExpand = $.map(breadcrumbs.slice(1), function (o) {
                return { text: o.title };
            });
            console.log("before expandPath");
            tree.expandPath(toExpand, function () {
                console.log("expandPath callback");
                callback(true);
            });
        }, function () {
            controls.error("Could not retrieve tree expansion information.");
            callback(false);
        });
    };

    treeContainer.load(
        contextPath + "/panels/browsepagelocation.action",
        {
            panelName: "browse",
            dialogMode: "view",
            spaceKey: newSpaceKey,
            parentPageString: newParentPage,
            pageId: AJS.params.pageId
        },
        function () {
            treeContainer.removeClass("loading").addClass("rendering");

            initialiseSpacePicker();

            tree = $("#parent-selection-tree").tree({
                url: contextPath + "/pages/children.action",
                initUrl: contextPath + "/pages/children.action?spaceKey=" + encodeURIComponent(newSpaceKey) + "&node=root",
                parameters: ["pageId", "text"],
                undraggable: true,
                spinnerId: "move-page-dialog-spinner",
                nodeId: "pageId",
                click: clickHandler,
                onready: onready,
                oninsert: function () {
                    var $li = this.$;
                    if ($li.parents("li:first").attr("unclickable")) {
                        this.makeUnclickable();
                    }
                }
            });
            AJS.MoveDialog.tree = tree;
        }
    );

};

AJS.toInit(function ($) {
    var MovePageDialog = function (options) {
        options = $.extend({
            spaceKey: AJS.params.spaceKey,
            spaceName: AJS.params.spaceName,
            parentPageTitle: AJS.params.parentPageTitle,
            title: AJS.params.movePageDialogViewPageTitle, // "Move Page: 'Title'
            buttonName: AJS.params.movePageDialogMoveButton, // "Move"
            moveHandler: function (dialog) {
                AJS.log("No move handler defined. Closing dialog.");
                dialog.remove();
            },
            cancelHandler: function (dialog) {
                dialog.remove();
            },
            pageTitleAccessor: function () {
                return AJS.params.pageTitle;
            }
        }, options);

        var newLocation = {
            spaceKey : options.spaceKey,
            spaceName : options.spaceName,
            parentPageTitle : options.parentPageTitle
        };
        var newSpaceKey = options.spaceKey;
        var newSpaceName = options.spaceName;
        var newParentPage = options.parentPageTitle;
        
        var reorderTargetId = "";
        var reorderTargetPosition = "";
        
        // called when the ordering of a page is set beneath a parent.
        var reorder = function (targetId, positionIndicator) {
            reorderTargetId = targetId;
            reorderTargetPosition = positionIndicator;
        };

        var structure = AJS.ConfluenceDialog({
            width : 800,
            height: 590,
            id: "move-page-dialog"
        });
        structure.addHeader(options.title);
        structure.addPanel(AJS.params.movePageDialogLocationPanel, AJS.renderTemplate("movePageDialog"), "location-panel", "location-panel-id");
        structure.addPanel(AJS.params.movePageDialogSearchPanel, AJS.renderTemplate("movePageSearchPanel"), "search-panel", "search-panel-id");
        structure.addPanel(AJS.params.movePageDialogHistoryPanel, AJS.renderTemplate("movePageHistoryPanel"), "history-panel", "history-panel-id");
        structure.addPanel(AJS.params.movePageDialogBrowsePanel, AJS.renderTemplate("movePageBrowsePanel"), "browse-panel", "browse-panel-id");

        // panel switching logic
        structure.get("panel:0")[0].onselect = function () {
            $("#new-space-key").val(newSpaceKey);
            $("#new-space").val(newSpaceName);
            $("#new-parent-page").val(newParentPage).select();
        };
        structure.get("panel:1")[0].onselect = function () {
            // always clear out the previous selection
            $("#move-page-dialog .search-panel .search-results .selected").removeClass("selected");
            $("#move-page-dialog input.search-query").focus();
        };
        structure.get("panel:0").select();

        gotoReorderPage = function (dialog) {
            dialog.nextPage();         
            var dialogDom = $("#move-page-dialog");
            $(".ordering-panel", dialogDom).movePageOrdering(newSpaceKey, newParentPage, options.pageTitleAccessor(), reorder);            
        };
        
        moveFunction = function (dialog) {
            var space = $("#new-space:visible").val();
            var spaceKey = $("#new-space-key").val();
            var parentPage = $("#new-parent-page:visible").val();
            if (space && (space != newSpaceName || spaceKey != newSpaceKey || parentPage != newParentPage)) {
                AJS.MoveDialog.getBreadcrumbs({spaceKey:spaceKey, pageTitle:parentPage}, function () {
                    options.moveHandler(dialog, spaceKey, space, parentPage, reorderTargetId, reorderTargetPosition, setErrors);
                }, function (xhr) {
                        $('#new-parent-breadcrumbs').html(AJS.renderTemplate("movePageBreadcrumbError"));
                        if (xhr.status == 404) {
                            controls.error(AJS.params.movePageDialogLocationNotFound);
                        }
                    });
            } else {
                options.moveHandler(dialog, newSpaceKey, newSpaceName, newParentPage, reorderTargetId, reorderTargetPosition, setErrors);
            }            
        };
        
        // Decide whether to execute the move or goto the re-order page instead.
        executeMove = function (dialog) {
            if ($("#reorderCheck")[0].checked) {
                gotoReorderPage(dialog);
            } else {
                moveFunction(dialog);
            }
        };
        
        structure.addButton(options.buttonName, executeMove, "move-button");
        structure.addButton(AJS.params.movePageDialogCancelButton, options.cancelHandler, "move-cancel-button");
        
        // Add the ordering page
        structure.addPage();
        structure.page[1].addHeader(options.title);
        structure.page[1].addPanel(AJS.params.movePageDialogOrderingTitle, AJS.renderTemplate("orderingPagePanel"), "ordering-panel", "ordering-panel-id");
        structure.page[1].addButton(AJS.params.movePageDialogBackButton, function(dialog) { dialog.prevPage(); }, "back left");
        structure.page[1].addButton(AJS.params.movePageDialogMoveAndOrderButton, moveFunction, "reorder-button");
        structure.page[1].addButton(AJS.params.movePageDialogCancelButton, options.cancelHandler, "move-cancel-button");
        
        var moveButton = structure.get("button#" + options.buttonName)[0].item;
        $("button.move-button").before(AJS.renderTemplate("reorderCheckbox"));

        structure.gotoPage(0);
        structure.show();

        var dialog = $("#move-page-dialog");

        // move breadcrumbs to the bottom of all pages on the first page of the dialog (location selection page)
        $(".location-panel .location-info", dialog).appendTo($(".page-body:first", dialog));

        // error messages next to the buttons
        $(".button-panel", dialog).prepend(AJS.renderTemplate("movePageErrors"));

        var breadcrumbs = new AJS.MoveDialog.Breadcrumbs($('#new-parent-breadcrumbs'));

        function setErrors(errors) {
            if (!errors || errors.length == 0) {
                $("#move-errors").addClass("hidden");
                $(moveButton).attr("disabled", "");
                return;
            }
            if (!$.isArray(errors)) errors = [ errors ];
            $("#move-errors").text(errors[0]).attr("title", errors.join("\n")).removeClass("hidden");
            structure.gotoPage(0); // errors all show on the first page, where you can correct them
        }
        
        var controls = {
            moveButton: moveButton,
            clearErrors: function () {
                setErrors([]);
            },
            error: setErrors,

            // called when a destination is selected on one of the panels
            select: function (spaceKey, spaceName, parentPageTitle) {
                AJS.log("select: " +[spaceKey, spaceName, parentPageTitle].join());
                newSpaceKey = spaceKey;
                newSpaceName = spaceName;
                newParentPage = parentPageTitle || "";
                $(moveButton).attr("disabled", "disabled"); // disable submission until the location is validated
                breadcrumbs.update({spaceKey:newSpaceKey, title:newParentPage}, controls);

            }
        };

        // render the current breadcrumbs immediately
        var originalParent = AJS.params.parentPageTitle != "" ? AJS.params.parentPageTitle : AJS.params.fromPageTitle;
        var currentBreadcrumbs = new AJS.MoveDialog.Breadcrumbs($('#current-parent-breadcrumbs'));
        currentBreadcrumbs.update({spaceKey:AJS.params.spaceKey, title:originalParent}, controls);

        $(".location-panel", dialog).movePageLocation(controls);
        $(".search-panel", dialog).movePageSearch(controls);
        $(".history-panel", dialog).movePageHistory(controls);
        structure.get("panel:2")[0].onselect = function () {
            // refresh the history panel every time it loads, in case the user has navigated elsewhere in another tab
            $(".history-panel", dialog).movePageHistory(controls);
        };
        structure.get("panel:3")[0].onselect = function () {
            // always refresh the tree when loading the Browse tab, don't load it initially
			AJS.log("browse: " +[newSpaceKey, newSpaceName, newParentPage].join());
            $(".browse-panel", dialog).movePageBrowse(controls, newSpaceKey, newSpaceName, newParentPage, originalParent, options.pageTitleAccessor());
        };

        $("#new-parent-page").select(); // focus the new parent page input

        return dialog;
    };

    var MovePageParams = function (spaceKey, pageTitle, siblingId, siblingRelativePosition) {
        var params = {
            pageId: AJS.params.pageId,
            spaceKey: spaceKey
        };

        if (siblingId) {
            params.position = siblingRelativePosition; // may be above or below
            params.targetId = siblingId;
        }
        else if (pageTitle != "") {
            params.targetTitle = pageTitle;
            params.position = "append";
        } else {
            params.position = "topLevel";
        }
        return params;
    };

    function viewPageMoveHandler(dialog, newSpaceKey, newSpaceName, newParentPage, newSiblingId, newSiblingPosition, setErrors) {
        dialog = dialog.popup.element;
        dialog.addClass("waiting");
        $("button", dialog).attr("disabled", "disabled");
        var throbber = $("<div class='throbber'></div>");
        dialog.append(throbber);
        var killSpinner = Raphael.spinner(throbber[0], 100, "#666");

        function error(messages) {
            setErrors(messages);
            dialog.removeClass("waiting");
            killSpinner();
            $("button", dialog).attr("disabled", "");
        }

        $.ajax({
            url: contextPath + "/pages/movepage.action",
            type: "GET",
            dataType: "json",
            data: new MovePageParams(newSpaceKey, newParentPage, newSiblingId, newSiblingPosition),
            error: function () {
                error(AJS.params.movePageDialogMoveFailed);
            },
            success: function (data) {
                var errors = [].concat(data.validationErrors || []).concat(data.actionErrors || []).concat(data.errorMessage || []);
                if (errors.length > 0) {
                    error(errors);
                    return;
                }
                window.location.href = contextPath + data.page.url + (data.page.url.indexOf("?") >= 0 ? "&" : "?") + "moved=true";
            }
        });
    }

    $("#action-move-page-dialog-link").click(function (e) {
        e.preventDefault();

        if ($("#move-page-dialog").length > 0) {
            $("#move-page-dialog, body > .shadow, body > .blanket").remove();
        }

        new MovePageDialog({
            moveHandler: viewPageMoveHandler
        });

        return false;
    });

    $("#edit-move-page-dialog-link").click(function (e) {
        e.preventDefault();

        if ($("#move-page-dialog").length > 0) {
            $("#move-page-dialog, body > .shadow, body > .blanket").remove();
        }

        new MovePageDialog({
            spaceKey: $("#newSpaceKey").val(),
            spaceName: $("#space_content").text(),
            parentPageTitle: $("#parentPageString").val(),
            buttonName: AJS.params.movePageDialogOkButton,
            title: AJS.params.movePageDialogEditPageTitle,
            moveHandler: function (dialog, newSpaceKey, newSpaceName, newParentPage, targetId, newPositionIndicator, setErrors) {
                // TODO: AJAX validation, should use setErrors
                $("#space_content").text(newSpaceName);
                $("#newSpaceKey").val(newSpaceKey);
                $("#parentPageString").val(newParentPage);
                $("#parent_content").text(newParentPage);
                if (newParentPage != "") {
                    $("#position").val("append");
                    $("#parent_info").removeClass("hidden"); // display the new parent info
                } else {
                    $("#parent_info").addClass("hidden"); // hide the parent info since the move is to the top level
                    $("#position").val("topLevel");
                }
                
                // If explicit position has been set then override the positions that may have been set up
                if (targetId) {
                    $("#targetId").val(targetId);
                    $("#position").val(newPositionIndicator);
                }
                
                dialog.remove();
            },
            pageTitleAccessor: function () {
                return $("#content-title").val();
            }
        });

        return false;
    });
    
    // animate the header after moving
    if ($("#header").is(".moved")) {
        $("<div></div>").prependTo($("#header")).css({
            backgroundColor: "#69c",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            "z-index": -1
        }).animate({ opacity: 0.001 }, 1500, function () { $(this).remove(); });
    }
});

/**
 * Atlassian JS animation framework. Simple, but not overly so.
 *
 * TODO: Document this, make it an object
 */
var AJS = AJS || {};

AJS.animation = {
    running: [],
    queue: [],
    timer: null,
    duration: 300,
    period: 20,
    add: function(item) {
        this.queue.push(item);
    },
    start: function() {
        if (this.timer != null) return;
        this.running = this.queue;
        this.queue = [];
        jQuery.each(this.running, function () {
            if (this.onStart) {
                this.onStart();
            }
        });
        var animation = this;
        var startTime = new Date().getTime();
        var endTime = startTime + this.duration;
        this.timer = setInterval(function() {
            var time = new Date().getTime();
            var pos = (time - startTime) / (endTime - startTime);
            if (pos <= 1)
                animation.animate(pos);
            if (pos >= 1 && animation.timer != null)
                animation.finish();
        }, this.period);
        return this.timer;
    },
    finish: function() {
        clearInterval(this.timer);
        jQuery.each(this.running, function () {
            if (this.onFinish) {
                this.onFinish();
            }
        });
        this.running = [];
        this.timer = null; // must be last because it's the lock to prevent concurrent executions
        if (this.queue.length > 0) this.start();
    },
    animate: function(pos) {
        jQuery.each(this.running, function () {
            if (this.animate) {
                this.animate(AJS.animation.interpolate(pos, this.start, this.end, this.reverse));
            }
        });
    },
    interpolate: function(pos, start, end, reverse) {
        if (typeof start != "undefined" && typeof end != "undefined") {
            if (reverse) {
                return end + pos * (start - end);
            } else {
                return start + pos * (end - start);
            }
        }
        return pos;
    },
    combine: function(list) {
        return {
            animations: list,
            append: function(animation) {
                this.animations.push(animation);
                return this;
            },
            onStart: function() {
                jQuery.each(this.animations, function () {
                    if (this.onStart) {
                        this.onStart();
                    }
                });
            },
            onFinish: function() {
                jQuery.each(this.animations, function () {
                    if (this.onFinish) {
                        this.onFinish();
                    }
                });
            },
            animate: function(pos) {
                jQuery.each(this.animations, function () {
                    if (this.animate) {
                        this.animate(AJS.animation.interpolate(pos, this.start, this.end, this.reverse));
                    }
                });
            }
        };
    }
};
var IE = /*@cc_on function(){ switch(@_jscript_version){ case 1.0:return 3; case 3.0:return 4; case 5.0:return 5; case 5.1:return 5; case 5.5:return 5.5; case 5.6:return 6; case 5.7:return 7; }}()||@*/0;

jQuery(function($) { 
    
    if (IE && IE < 7) {
        function applyPngFilter(imageSrc) {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + (imageSrc || this.src) + "', sizingMethod='scale')"
        }
        $(".logo.anonymous").each(function () {
            var div = document.createElement("div");
            div.className = "replacement";
            applyPngFilter.call(div, this.src);
            $(this).replaceWith(div);
        });
        $(".comment-actions .comment-permalink a").each(function () {
            $(this).addClass("filtered");
            var path_light = $(this).css("background-image").replace(/^url\(\"?|\"?\)$/g, ""); // remove url(...) surrounding actual URL
            var path_dark = path_light.replace("light", "dark");
            applyPngFilter.call(this, path_light);
            this.style.cursor = "pointer";
            this.style.background = "none";
            $(this).hover(function () {
                applyPngFilter.call(this, path_dark);
            }, function () {
                applyPngFilter.call(this, path_light);
            });
        });
    }

    var collapseTransition = function (comment) {
        var imageTransition = function (image, reverse) {
            return {
                animate: function (pos) {
                    image.style.height = AJS.animation.interpolate(pos, 48, 24, reverse) + "px";
                    image.style.width = image.style.height;
                    image.style.marginLeft = AJS.animation.interpolate(pos, 0, 12, reverse) + "px";
                },
                onFinish: function () {
                    image.style.height = '';
                    image.style.width = '';
                    image.style.marginLeft = '';
                }
            };
        };
        var opacityTransition = function (el, reverse) {
            return {
                start: 1.0,
                end: 0.0,
                reverse: reverse,
                animate: function (pos) {
                    el.style.opacity = pos;
                    el.style.filter = "alpha(opacity=" + (pos * 100) + ")";
                },
                onFinish: function () {
                    el.style.opacity = "";
                    el.style.filter = "alpha(opacity=" + (reverse ? 100 : 0) + ")";
                }
            };
        };
        var heightTransition = function (el, reverse) {
            if (!reverse)
                el.originalHeight = jQuery(el).height();
            return {
                start: el.originalHeight || 50,
                end: 0,
                reverse: reverse,
                animate: function (pos) {
                    el.style.height = pos + "px";
                },
                onFinish: function () {
                    el.style.height = '';
                }
            };
        };

        var body = jQuery(comment).find('.comment-body')[0];
        var reverse = comment.className.indexOf("collapsed") >= 0;
        return AJS.animation.combine([
            imageTransition(jQuery(comment).parent().find('.comment-user-logo img, .comment-user-logo .replacement')[0], reverse),
            opacityTransition(body, reverse),
            opacityTransition(jQuery(comment).find('.excerpt')[0], !reverse),
            heightTransition(body, reverse),
            {
                onFinish: function () {
                    if (reverse)
                        jQuery(comment).removeClass('collapsed');
                    else
                        jQuery(comment).addClass('collapsed');
                }
            }
        ]);
    };

    /*
     * Alternate colours of comments. Doing this with threaded comments in the backend
     * is painful.
     */
    $('#comments-section .comment:odd').addClass('odd');

    /*
     * Bind collapsing comment functionality to comment-toggle class.
     */
    function commentToggle() {
        var toggle = this;
        $(toggle).unbind('click');
        AJS.animation.add(collapseTransition($(toggle).parent()[0]));
        AJS.animation.add({
            onFinish: function () { $(toggle).click(commentToggle); } /* rebind */
        });
        AJS.animation.start();
    }
    
    var toggle = $('.comment-toggle');
    toggle.css('cursor', 'pointer');
    toggle.attr("title", AJS.params.collapseTooltip);
    toggle.click(commentToggle);

    /*
     * Remove comment pop-up confirmation.
     */
    $('.comment-action-remove a').click(function() {
        if(confirm(AJS.params.deleteCommentConfirmMessage))
        {
            this.href = this.href + '&confirm=yes';
            return true;
        }
        return false;
    });

    /*
     * Toggle links for hiding and showing the comments section.
     */
    $('#comments-hide').click(function() {
        $('#page-comments').addClass("hidden");
        $(this).addClass("hidden");
        $('#comments-show').removeClass("hidden");
        $('#comments-expand-collapse').addClass("hidden");
        return false;
    });
    $('#comments-show').click(function() {
        $('#page-comments').removeClass("hidden");
        $(this).addClass("hidden");
        $('#comments-hide').removeClass("hidden");
        $('#comments-expand-collapse').removeClass("hidden");
        return false;
    });

    /*
     * Collapse- and expand-all functionality.
     *
     * We only actually animate the first 10 comments. This looks much less jerky
     * and you can't tell the difference because the buttons are only at the top.
     */
    $('#comments-collapse').click(function() {
        $(this).addClass("hidden");
        $('#collapse-wait').removeClass("hidden");
        $('.comment:lt(10):not(.collapsed,.add,.reply,.edit)').each(function () {
                AJS.animation.add(collapseTransition(this));
        });
        AJS.animation.add({
            onFinish: function () {
                $('#collapse-wait').addClass("hidden");
                $('#comments-expand').removeClass("hidden");
                $('.comment:not(.add,.reply,.edit)').addClass("collapsed");
            }
        });
        AJS.animation.start();
        return false;
    });
    $('#comments-expand').click(function() {
        $(this).addClass("hidden");
        $('#expand-wait').removeClass("hidden");
        $('.comment:lt(10).collapsed').each(function () {
            AJS.animation.add(collapseTransition(this));
        });
        AJS.animation.add({
            onFinish: function () {
                $('#expand-wait').addClass("hidden");
                $('#comments-collapse').removeClass("hidden");
                $('.comment').removeClass("collapsed");
            }
        });
        AJS.animation.start();
        return false;
    });
});

AJS.toInit(function ($) {
    $("#ellipsis").click(function () {
        try {
            $(".hidden-crumb", $("#breadcrumbs")).removeClass("hidden-crumb");
            $(this).addClass("hidden-crumb");
        } catch(e) {
            AJS.log(e);
        }
    });
});

AJS.toInit(function ($) {

    /**
     * function to add a tooltip showing the space name to each drop down list item
     */
    AJS.quicksearch = AJS.quicksearch || {};
    AJS.quicksearch.dropdownPostprocess = function (list) {
         $("a span", list).each(function () {
            var $a = $(this);
            // get the hidden space name property from the span
            var spaceName = AJS.dropDown.getAdditionalPropertyValue($a, "spaceName") || "";

            // we need to go through html node creation so that all encoded symbols(like &gt;) are displayed correctly
            if (spaceName) {
                spaceName = " (" + AJS("i").html(spaceName).text() + ")";
            }

            $a.attr("title", $a.text() + spaceName);
        });
    };

    /**
     * Append the drop down to the form element with the class quick-nav-drop-down
     */
    var quickNavPlacement = function (input) {
        return function (dropDown) {
            input.closest("form").find(".quick-nav-drop-down").append(dropDown);
        };
    };
    var quickSearchQuery = $("#quick-search-query"),
        spaceBlogSearchQuery = $("#space-blog-search-query"),
        confluenceSpaceKey = $("#confluence-space-key");
/**    quickSearchQuery.quicksearch("/json/contentnamesearch.action", null, {
        dropdownPostprocess : AJS.quicksearch.dropdownPostprocess,
        dropdownPlacement : quickNavPlacement(quickSearchQuery)
    });

    if (spaceBlogSearchQuery.length && confluenceSpaceKey.length) {
        spaceBlogSearchQuery.quicksearch("/json/contentnamesearch.action?type=blogpost&spaceKey=" + 
                AJS("i").html(confluenceSpaceKey.attr("content")).text(), null, {
            dropdownPostprocess : AJS.quicksearch.dropdownPostprocess,
            dropdownPlacement : quickNavPlacement(spaceBlogSearchQuery)
        });
    };**/
});

(function($) {
    /**
     * Creates a new hover popup
     *
     * @param items jQuery object - the items that trigger the display of this popup when the user mouses over.
     * @param identifier A unique identifier for this popup. This should be unique across all popups on the page and a valid CSS class.
     * @param url The URL to retrieve popup contents.
     * @param postProcess A function called after the popup contents are loaded.
     *                    `this` will be the popup jQuery object, and the first argument is the popup identifier.
     * @param options Custom options to change default behaviour. See AJS.contentHover.opts for default values and valid options.
     *
     * @return jQuery object - the popup that was created
     */
    AJS.contentHover = function(items, identifier, url, postProcess, options) {
        var opts = $.extend(false, AJS.contentHover.opts, options);
        var p, contents;
        var mousePosition;
        var initialMousePosition;
        var popup = $("#content-hover-" + identifier);
        if (!popup.length) {
            // This is the first contentHover call for this identifier - create and set up the content container div.
            $(opts.container).append($('<div id="content-hover-' + identifier + '" class="ajs-content-hover"><div class="contents"></div></div>'));
            popup = $("#content-hover-" + identifier);
            contents = popup.find(".contents");
            contents.css("width", opts.width + "px");
            contents.mouseover(function() {
                clearTimeout(p.hideDelayTimer);
                popup.unbind("mouseover");
            }).mouseout(function() {
                hidePopup();
            });
        } else {
            // A popup has already been created for this identifier (ie. this contentHover call is from a newly-created
            // element with an existing identifier).
            contents = popup.find(".contents");
        }

        // The popup HTML element is persisted across contentHover calls so it can hold data.
        p = popup[0];

        var showPopup = function() {
            if (popup.is(":visible")) {
                return;
            }

            p.showTimer = setTimeout(function() {
                if (!p.contentLoaded || !p.shouldShow) {
                    return;
                }
                p.beingShown = true;
                var posx = mousePosition.x - 3;
                var posy = mousePosition.y + 15;

                if (posx + opts.width + 30 > $(window).width()) {
                    popup.css({
                        right: "20px",
                        left: "auto"
                    });
                }
                else {
                    popup.css({
                        left: posx + "px",
                        right: "auto"
                    });
                }

                var bottomOfViewablePage = (window.pageYOffset || document.documentElement.scrollTop) + $(window).height();
                if ((posy + popup.height()) > bottomOfViewablePage) {
                    posy = bottomOfViewablePage - popup.height() - 5;
                    popup.mouseover(function() {
                        clearTimeout(p.hideDelayTimer);
                    }).mouseout(function() {
                        hidePopup();
                    });
                }
                popup.css({
                    top: posy + "px"
                });

                var shadow = $("#content-hover-shadow").appendTo(popup).show();
                // reset position of popup box
                popup.fadeIn(opts.fadeTime, function() {
                    // once the animation is complete, set the tracker variables
                    p.beingShown = false;
                });

                shadow.css({
                    width: contents.outerWidth() + 32 + "px",
                    height: contents.outerHeight() + 25 + "px"
                });
                $(".b", shadow).css("width", contents.outerWidth() - 26 + "px");
                $(".l, .r", shadow).css("height", contents.outerHeight() - 21 + "px");
            }, opts.showDelay);
        };

        var hidePopup = function() {
            p.beingShown = false;
            p.shouldShow = false;
            clearTimeout(p.hideDelayTimer);
            clearTimeout(p.showTimer);
            clearTimeout(p.loadTimer);
            p.contentLoading = false;
            p.shouldLoadContent = false;
            // store the timer so that it can be cleared in the mouseover if required
            p.hideDelayTimer = setTimeout(function() {
                popup.fadeOut(opts.fadeTime);
            }, opts.hideDelay);
        };

        $(items).mousemove(function(e) {
            mousePosition = { x: e.pageX, y: e.pageY };
            
            if (!p.beingShown) {
                clearTimeout(p.showTimer);
            }
            p.shouldShow = true;
            // lazy load popup contents
            if (!p.contentLoaded) {
                if (p.contentLoading) {
                    // If the mouse has moved more than the threshold don't load the contents
                    if (p.shouldLoadContent) {
                        var distance = (mousePosition.x - initialMousePosition.x)*(mousePosition.x - initialMousePosition.x)
                                + (mousePosition.y - initialMousePosition.y) * (mousePosition.y - initialMousePosition.y);
                        if (distance > (opts.mouseMoveThreshold * opts.mouseMoveThreshold)) {
                            p.contentLoading = false;
                            p.shouldLoadContent = false;
                            clearTimeout(p.loadTimer);
                            return;
                        }
                    }
                } else {
                    // Save the position the mouse started from
                    initialMousePosition = mousePosition;
                    p.shouldLoadContent = true;
                    p.contentLoading = true;
                    p.loadTimer = setTimeout(function () {
                        if (!p.shouldLoadContent)
                            return;

                        contents.load(url, function() {
                            p.contentLoaded = true;
                            p.contentLoading = false;
                            postProcess.call(popup, identifier);
                            showPopup();
                        });
                    }, opts.loadDelay);
                }
            }
            // stops the hide event if we move from the trigger to the popup element
            clearTimeout(p.hideDelayTimer);
            // don't trigger the animation again if we're being shown
            if (!p.beingShown) {
                showPopup();
            }
        }).mouseout(function() {
            hidePopup();
        });

        contents.click(function(e) {
            e.stopPropagation();
        });

        $("body").click(function() {
            p.beingShown = false;
            clearTimeout(p.hideDelayTimer);
            clearTimeout(p.showTimer);
            popup.hide();
        });

        return popup;
    };

    AJS.contentHover.opts = {
        fadeTime: 100,
        hideDelay: 500,
        showDelay: 700,
        loadDelay: 50,
        width: 300,
        mouseMoveThreshold: 10,
        container: "body"
    };

    AJS.toInit(function(){
        $("body").append($('<div id="content-hover-shadow"><div class="tl"></div><div class="tr"></div><div class="l"></div><div class="r"></div><div class="bl"></div><div class="br"></div><div class="b"></div></div>'));
        $("#content-hover-shadow").hide();
    });
})(jQuery);

if (typeof AJS.followCallbacks == "undefined") AJS.followCallbacks = [];
if (typeof AJS.favouriteCallbacks == "undefined") AJS.favouriteCallbacks = [];

// if you want to customize the behaviour of the follow button you can add callbacks to the above array
// by adding this code to your javascript page:
//
// if (typeof AJS.followCallbacks == "undefined") AJS.followCallbacks = [];
// AJS.followCallbacks.push(function(user) {
//    alert('favourite added'+user');
// });
//
// these callbacks are called after the post to the server has completed.
//
// You can add to the followCallbacks or the favouriteCallbacks if you want callbacks on the follow functions
// or the favourite functions respectively.

// Confluence specific code
AJS.toInit(function($) {

    AJS.contentHover.confluencePostProcess  = function(id) {
        var username = users[id];
        $(".ajs-menu-bar", this).ajsMenu();
        $(".follow-icon, .unfollow-icon", this).each(function() {
            var $this = $(this).click(function(e) {
                if ($this.hasClass("waiting")) {
                    return;
                }
                var url = $this.hasClass("unfollow-icon") ? "/unfollowuser.action" : "/followuser.action";
                $this.addClass("waiting");
                AJS.safe.post(contextPath + url + "?username=" + username + "&mode=blank", function() {
                    $this.removeClass("waiting");
                    $this.parent().toggleClass("follow-item").toggleClass("unfollow-item");
                    $.each(AJS.followCallbacks, function() {
                        this(username);
                    });
                });
                return AJS.stopEvent(e);
            });
        });

    };

    AJS.contentHover.users = [];
    var users = AJS.contentHover.users;
    $(".confluence-userlink, .userLogoLink").each(function() {
        var userlink = $(this);
        var matched = /username:([^ ]*)/.exec(userlink.attr("class"));
        if (matched == null) {
            return;
        }
        var username = matched[1];

        // Ensure no "popup" title will clash with the user hover.
        userlink.attr("title", "");
        $("img", userlink).attr("title", "");
        
        var arrayIndex = $.inArray(username, users);
        if (arrayIndex == -1) {
            users.push(username);
            arrayIndex = $.inArray(username, users);
        }

        $(this).addClass("userlink-" + arrayIndex);
    });

    $.each(users, function(i) {
        AJS.contentHover($(".userlink-" + i), i, contextPath + "/users/userinfopopup.action?username=" + users[i], AJS.contentHover.confluencePostProcess);
    });
});
AJS.toInit(function($) {
    function trim(string) {
        return string.replace(/(^\s*)|(\s*$)/g, "");
    }
    function isBlank(string) {
        return trim(string).length == 0;
    }

    // One user status popup per page.
    var popup;
    var statusHolder = $("<div id='current-user-status-holder' class='current-user-latest-status'></div>");
    $("body").append(statusHolder);
    statusHolder.hide();
    var maxChars = 140;

    function createPopUp() {
        var popup = new AJS.Dialog(650, 200, "update-user-status-dialog");
        popup.addHeader(AJS.params.statusDialogHeading || "What are you working on?");
        popup.addPanel("Set Status", "<form class='update-status'>" +
                                     "<textarea name='status-text' id='status-text'></textarea>" +
                                     "<span id='update-status-chars-left'>" + maxChars + "</span>" +
                                     "<div id='dialog-current-status' class='current-user-latest-status'>" +
                                     (AJS.params.statusDialogLatestLabel || "Latest:") +
                                     " <span class='status-text'></span></div>" +
                                     "</form>");
        popup.addButton(AJS.params.statusDialogUpdateButtonLabel || "Update", updateStatus, "status-update-button");
        popup.addButton(AJS.params.statusDialogCancelButtonLabel || "Cancel", function (dialog) {dialog.hide();}, "status-cancel-button");
        popup.popup.element.find(".button-panel").append("<span class='error-message'></span>");
        popup.setError = function(html) {
            $("#update-user-status-dialog .error-message").html(html)
        }
        return popup;
    }
    
    function setCurrentStatus(status) {
        $(".current-user-latest-status .status-text").html(status.text);

        $(".current-user-latest-status a[id^=view]").each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href.replace(/\d+$/, status.id))
                   .text(status.friendlyDate)
                   .attr("title", new Date(status.date).toLocaleString());
        });
    }

    function getLatestStatus() {
        $.getJSON(contextPath + "/status/current.action", function(data) {
            if (data.errorMessage != null) {
                popup.setError(data.errorMessage);
            }
            else {
                setCurrentStatus(data);
            }
        });
    }

    var updateStatus = function() {
        var textarea = $("#update-user-status-dialog #status-text").attr("disabled", "disabled").blur();
        var text = textarea.val();
        // Move focus away from textarea
        $("#update-user-status-dialog #status-text").blur();
        $("#update-user-status-dialog #status-text").attr("readonly", "readonly");
        $(".status-update-button").attr("disabled", "disabled");

        if (text.length > maxChars || isBlank(text)) {
            return false;
        }
        AJS.safe.ajax({
            url: contextPath + "/status/update.action",
            type: "POST",
            dataType: "json",
            data: {
                "text": text
            },
            success: function(data) {
                if (data.errorMessage != null) {
                    popup.setError(data.errorMessage);
                }
                else {
                    setCurrentStatus(data);
                    $("#update-user-status-dialog #status-text").val("");
                    setTimeout(function() { popup.hide(); }, 1000);
                }
            },
            error: function(xhr, text, error) {
                AJS.log("Error updating status: " + text);
                AJS.log(error);
                popup.setError("There was an error - " + error);
            }
        });
    };
    $("#set-user-status-link").click(function(e) {
        var dropDown = $(this).parents(".ajs-drop-down")[0];
        dropDown && dropDown.hide();

        if (typeof popup == "undefined") {
            popup = createPopUp();
            var $charsLeft = $("#update-status-chars-left");
            var $updateButton = $(".status-update-button").attr("disabled", "disabled");
            $("#update-user-status-dialog form.update-status #status-text").keydown(function(e) {
                if (e.which == 27) { // ESC
                    popup.hide();
                }
                else if (e.which == 13) { // Enter
                    updateStatus();
                }
            }).bind("blur focus change " + ($.browser.mozilla ? "paste input" : "keyup"), function() {
                var length = maxChars - $(this).val().length;
                $charsLeft.removeClass("over-limit").removeClass("close-to-limit").text(length);
                $updateButton.removeAttr("disabled");
                
                if (isBlank($(this).val())) {
                    $updateButton.attr("disabled", "disabled");
                }
                if (length < 0) {
                    $charsLeft.addClass("over-limit").html("&minus;" + -length);
                    $updateButton.attr("disabled", "disabled");
                }
                else if (length < 20) {
                    $charsLeft.addClass("close-to-limit");
                }
            });
            $("#update-user-status-dialog form.update-status").submit(function(e) {
                updateStatus();
                return AJS.stopEvent(e);
            });
        }
        popup.setError("");
        getLatestStatus();
        $("#update-user-status-dialog #status-text").removeAttr("readonly");
        popup.show();
        $("#update-user-status-dialog #status-text").removeAttr("disabled").focus();
        return AJS.stopEvent(e);
    });
});

var GADGET_DIRECTORY = null;

GadgetDirectory = function() {};
GadgetDirectory.prototype = {
    dlg: null,
    gadget_list: null,

    showDialog: function() {
        //Create the dialog
        this.dlg.addHeader(GADGET_DIRECTORY.translations.header);
        this.dlg.addButton(GADGET_DIRECTORY.translations.closeButton, function(dlg) {dlg.hide();}, "button1");

        AJS.$(".throbber").hide();
        this.dlg.getCurrentPanel().html(this.buildPanel());
    },

    buildPanel: function() {
        return AJS.$("<div/>").addClass("directory-panel").append(this.buildDirectoryHelp()).append(this.buildDirectoryList());
    },

    buildDirectoryHelp: function() {
        var helpPanel = AJS.$("<div/>").addClass("directory-help");
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle1).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody1).appendTo(helpPanel);
        AJS.$("<h3/>").addClass("directory-help-title").html(GADGET_DIRECTORY.translations.helpTitle2).appendTo(helpPanel);
        AJS.$("<p/>").addClass("directory-help-text").html(GADGET_DIRECTORY.translations.helpBody2).appendTo(helpPanel);
        AJS.$("<p/>").html(GADGET_DIRECTORY.translations.moreInfo).appendTo(helpPanel);
        return helpPanel;
    },

    buildDirectoryList: function() {
        if (!GADGET_DIRECTORY.gadget_list)
            return AJS.$("<div/>").addClass("no-gadgets").html("No gadgets found.");

        var directory_list = AJS.$("<ol/>").addClass("macro-list");
        AJS.$.each(GADGET_DIRECTORY.gadget_list, function(i, gadget_item) {
            var directory_item = AJS.$("<li/>").attr("id", "macro-" + gadget_item.title.split(' ').join('')).addClass("macro-list-item");

            var title = AJS.$("<h3/>").addClass("macro-title").html(gadget_item.title);

            var gadgetUrl = AJS.$("<p/>").append(AJS.$("<span/>").append(AJS.$("<a/>").addClass("macro-uri").attr("href", gadget_item.url).attr("target", "_blank").html(GADGET_DIRECTORY.translations.gadgetUrl)));
            var author = AJS.$("<p/>").addClass("macro-author");
            if (gadget_item.author) {
                author.html("By " + gadget_item.author);
            } else {
                author.html(GADGET_DIRECTORY.translations.noAuthor);
            }
            var description = AJS.$("<p/>").addClass("macro-desc");
            if (gadget_item.description) {
                description.html(gadget_item.description);
            } else {
                description.html(GADGET_DIRECTORY.translations.noDescription);
            }

            if (gadget_item.thumbnail) {
                var thumbnail = AJS.$("<img/>").addClass("macro-icon").attr({
                       height: 60,
                       width: 120,
                       alt: "",
                       src: gadget_item.thumbnail
                   });
                directory_item.append(thumbnail);
            }
            directory_item.append(title);
            directory_item.append(gadgetUrl);
            directory_item.append(author);
            directory_item.append(description);
            
            directory_list.append(directory_item);
        });

        return directory_list;
    },

    buildThrobber: function() {
        var throbber = AJS.$("<div/>").addClass("throbber");
        Raphael.spinner(throbber[0], 60, "#666");
        return throbber;
    },

    loadDirectory: function() {
        AJS.$(document).keyup(function (e) {
            if (e.keyCode == 27)  {
                GADGET_DIRECTORY.dlg.hide();
                AJS.$(document).unbind("keyup", arguments.callee);
                return AJS.stopEvent(e);
            }
        });
        if (this.dlg) {
            this.dlg.show();
        } else {
            AJS.log("creating dialog");
            this.dlg = new AJS.Dialog(865, 530, "gadget-directory-dialog");
            this.dlg.addPanel("", "panel1");
            this.dlg.getCurrentPanel().html(this.buildThrobber());
            this.dlg.getCurrentPanel().setPadding(0);
            this.dlg.getCurrentPanel().body.css("overflow", "hidden");
            this.dlg.show();

            AJS.$.ajax({
                    url: contextPath + "/rest/gadget/1.0/published/gadgetsdirectory",
                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        if (data.directoryList)
                            GADGET_DIRECTORY.gadget_list = data.directoryList;
                        GADGET_DIRECTORY.translations = data.translations;
                        GADGET_DIRECTORY.showDialog();
                    },
                    error: function() {
                        GADGET_DIRECTORY.dlg.getCurrentPanel().html(AJS.$("<div/>").addClass("loading-error").html("An error has occurred while trying to load the gadget directory."));
                    },
                    timeout: 12000
            });
        }
    }
}


AJS.toInit(function ($)
{
    GADGET_DIRECTORY = new GadgetDirectory();
    AJS.$("#gadget-directory-link").click(function (e) {
        GADGET_DIRECTORY.loadDirectory();
        e.preventDefault();
    });
});
function placeFocus()
{
    // If the page has been loaded with an #anchor, don't place focus because it breaks the anchor
    // If the page contains a page-edit form, don't place focus because it pisses people off too frequently
    if (document.location.hash || document.getElementById("editpageform") || document.getElementById("createpageform") || document.getElementById("upload-attachments"))
    {
        return;
    }

    // allow ability to customize which textfield the focus goes to (by specifying "?autofocus=<id of element>")
    var autoFocusElementId = "";
    var queryString = window.location.search.substring(1);
    // substring to remove the leading "?"
    var parameterPairs = queryString.split("&");
    for (var i = 0; i < parameterPairs.length; i++)
    {
        var key = parameterPairs[i].split("=")[0];
        var value = parameterPairs[i].split("=")[1];
        if (key == "autofocus" && (value != null && value.length > 0))
        {
            autoFocusElementId = "'" + value + "'";
            // necessary single quotes as element ids returned by element.id contain them
        }
    }

    var stopNow = false;
    for (var i = 0; i < document.forms.length; i++)
    {
        var currSet = document.forms[i].elements;
        if (document.forms[i].id != 'quick-search' && document.forms[i].name != 'inlinecommentform')
        {
            for (var j = 0; j < currSet.length; j++)
            {
                if (
                    (currSet[j].type == 'text' || currSet[j].type == 'password' || currSet[j].type == 'textarea')
                        && !currSet[j].disabled
                        && !(currSet[j].style.display == 'none')
                    )
                {
                    try
                    {
                        if (autoFocusElementId != null && autoFocusElementId.length > 0)
                        {
                            if (currSet[j].id == autoFocusElementId)
                            {
                                currSet[j].focus();
                                stopNow = true;
                                break;
                            }
                        }
                        else
                        {
                            currSet[j].focus();
                            stopNow = true;
                            break;
                        }
                    }
                    catch (e)
                    {
                        // ignore
                        // setting focus to input elements inside hidden div's causes an exception on IE
                    }
                }
            }
        }
        if (stopNow)
            break;
    }
}

function setCookie(name, value, exp_y, exp_m, exp_d, path, domain, secure)
{
    var cookie_string = name + "=" + escape(value);

    if (exp_y)
    {
        var expires = new Date(exp_y, exp_m, exp_d);
        cookie_string += "; expires=" + expires.toGMTString();
    }

    if (path)
        cookie_string += "; path=" + escape(path);
    else
        cookie_string += "; path=/";

    if (domain)
        cookie_string += "; domain=" + escape(domain);

    if (secure)
        cookie_string += "; secure";

    document.cookie = cookie_string;
}

function getCookie(cookie_name)
{
    var results = document.cookie.match(cookie_name + '=(.*?)(;|$)');

    if (results)
        return ( unescape(results[1]) );
    else
        return null;
}

function highlight(element)
{
    new Effect.Highlight(element,{endcolor:"#f0f0f0"});
}


