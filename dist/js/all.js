if($("#masthead").length){var prevScrollpos=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("masthead").style.top=prevScrollpos>e?"0":"-75px",prevScrollpos=e}}var currentMark;$(window).width()<960&&$("body").bind("touchmove",(function(e){e.preventDefault();var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];console.log(a.pageY+" "+a.pageX)})),lastWindow=null;const locations=[["Dein Restaurant",51.948744478483555,7.157971836523928,"./images/icon-marker.png","./images/burger.png"],["Modehaus Bruns",51.946609097080426,7.178758154024501,"./images/icon-marker.png","./images/Fotolia.png"],["Barberladen",51.950701822121246,7.169303266550282,"./images/icon-marker.png","./images/Fotolia_2.png"],["Arundel Thai Massage",51.93457270633895,7.16222225914868,"./images/icon-marker.png","./images/Fotolia_1.png"]];function CenterControl(e,a){const t=document.createElement("div");t.style.backgroundColor="transparent",t.style.marginTop="8px",t.style.marginBottom="22px",t.style.textAlign="center",t.title="Click to recenter the map",e.appendChild(t);const n=document.createElement("div");n.style.color="rgb(25,25,25)",n.style.backgroundColor="#fff",n.style.borderRadius="50%",n.style.fontSize="20px",n.style.width="40px",n.style.height="40px",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",n.style.cursor="pointer",n.style.margin="20px",n.innerHTML='<i class="fas fa-plus"></i>',t.appendChild(n);const o=document.createElement("div");o.style.color="rgb(25,25,25)",o.style.backgroundColor="#fff",o.style.borderRadius="50%",o.style.fontSize="20px",o.style.width="40px",o.style.height="40px",o.style.display="flex",o.style.justifyContent="center",o.style.alignItems="center",o.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",o.style.cursor="pointer",o.style.margin="20px",o.innerHTML='<i class="fas fa-minus"></i>',t.appendChild(o),n.addEventListener("click",(()=>{a.setZoom(a.getZoom()+1)})),o.addEventListener("click",(()=>{a.setZoom(a.getZoom()-1)}))}var markersarray=[];function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:51.9442511620035,lng:7.1658388803001865},zoom:12,mapId:"5f41d52c83213f7e",disableDefaultUI:!0});const e=document.createElement("div");CenterControl(e,map),map.controls[google.maps.ControlPosition.TOP_RIGHT].push(e);const a=[["Dein Restaurant",51.948744478483555,7.157971836523928,"./images/icon-marker.png","./images/burger.png"],["Modehaus Bruns",51.946609097080426,7.178758154024501,"./images/icon-marker.png","./images/Fotolia.png"],["Barberladen",51.950701822121246,7.169303266550282,"./images/icon-marker.png","./images/Fotolia_2.png"],["Arundel Thai Massage",51.93457270633895,7.16222225914868,"./images/icon-marker.png","./images/Fotolia_1.png"]];for(let e=0;e<a.length;e++){const t=a[e],n='<div class="card ctype-map"><div class="card-header"><picture><source srcset="'+t[4]+'"><img src="'+t[4]+'"></picture></div><div class="card-body"><div class="card-title">'+t[0]+'</div> <div class="item-value-row"> <div class="ivr-item">Akzeptanzstellen</div> <div class="ivr-value"><img src="./images/icons/utensils.svg"></div></div></div></div>',o=new google.maps.Marker({position:{lat:t[1],lng:t[2]},map:map,icon:t[3]}),i=new google.maps.InfoWindow({content:n});google.maps.event.addListener(o,"click",function(e,a){return function(){for(var a=0;a<markersarray.length;a++)markersarray[a].setIcon("D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png"),i.close();i.open(map,e),e.setIcon("D:/2HATS/upskilling/zmyle%20development/images/icon-marker-active.png")}}(o)),markersarray.push(o)}}function initcustomMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:51.9442511620035,lng:7.1658388803001865},zoom:12,mapId:"5f41d52c83213f7e",disableDefaultUI:!0});const e=document.createElement("div");CenterControl(e,map),map.controls[google.maps.ControlPosition.TOP_RIGHT].push(e);const a="D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png";for(var t=new google.maps.InfoWindow,n=0;n<locations.length;n++){var o=locations[n],i=new google.maps.LatLng(o[1],o[2]),s=new google.maps.Marker({position:i,map:map,title:o[0],icon:a});!function(e,n){google.maps.event.addListener(e,"click",(function(o){t.setContent('<div class="card ctype-map"><div class="card-header"><picture><source srcset="'+n[4]+'"><img src="'+n[4]+'"></picture></div><div class="card-body"><div class="card-title">'+n[0]+'</div> <div class="item-value-row"> <div class="ivr-item">Akzeptanzstellen</div> <div class="ivr-value"><img src="./images/icons/utensils.svg"></div></div></div></div>');for(var i=0;i<markersarray.length;i++)markersarray[i].setIcon(a);t.open(map,e),e.setIcon("D:/2HATS/upskilling/zmyle%20development/images/icon-marker-active.png"),lastWindow=t}))}(s,o),markersarray.push(s)}google.maps.event.addListener(map,"click",(function(e){lastWindow&&lastWindow.close()}))}function initnewMap(){const e={lat:51.9442511620035,lng:7.1658388803001865};map2=new google.maps.Map(document.getElementById("mapnew"),{center:{lat:51.9442511620035,lng:7.1658388803001865},zoom:12,center:e,mapId:"a95bc43b319cb41f",disableDefaultUI:!0});new google.maps.Marker({position:e,map:map2,icon:"D:/2HATS/upskilling/zmyle%20development/images/icon-marker.png"});const a=document.createElement("div");CenterControl(a,map2),map2.controls[google.maps.ControlPosition.TOP_RIGHT].push(a)}$(".map-switcher").click((function(){$(".item-list-area").addClass("map-wrap-view"),$(".map-view").addClass("map-wrap-view"),$("#filter-popup-btn").addClass("active"),$(this).fadeTo(0,0)})),$(".map-close-btn").click((function(){$(".item-list-area").removeClass("map-wrap-view"),$(".map-view").removeClass("map-wrap-view"),$("#filter-popup-btn").removeClass("active"),$(".map-switcher").fadeTo(0,1)})),$(".site-header .head-wrapper .nav-area ul li").not(".site-header .head-wrapper .nav-area ul li ul").click((function(){$(".site-header .head-wrapper .nav-area ul li").not(this).children("ul").hide(),$(this).children("ul").toggle()})),$(".mobile-toggler").click((function(){$(".nav-area").toggleClass("nav-scale"),$(".mobile-toggler").toggleClass("close")})),$(".all-img-btn").click((function(){$(".carusel-popup-wrapper").addClass("view")})),$(".carousel-popup-close-btn").click((function(){$(".carusel-popup-wrapper").removeClass("view")})),$(".map-filter-toggler").click((function(){$(".filter-search-block").toggleClass("toggleview")}));
//# sourceMappingURL=all.js.map