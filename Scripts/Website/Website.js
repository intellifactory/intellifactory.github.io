(function()
{
 "use strict";
 var Global,WebSharper,Obj,Website,ClientSideCode,Swiper,Swiper$1,TalksAndPresentations,City,IntelliFactory,Runtime,UI,Doc,google,maps,AttrProxy,Concurrency,Seq,Utils,List,Strings,Arrays,console,$;
 Global=self;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Website=Global.Website=Global.Website||{};
 ClientSideCode=Website.ClientSideCode=Website.ClientSideCode||{};
 Swiper=ClientSideCode.Swiper=ClientSideCode.Swiper||{};
 Swiper$1=Swiper.Swiper=Swiper.Swiper||{};
 TalksAndPresentations=ClientSideCode.TalksAndPresentations=ClientSideCode.TalksAndPresentations||{};
 City=TalksAndPresentations.City=TalksAndPresentations.City||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 google=Global.google;
 maps=google&&google.maps;
 AttrProxy=UI&&UI.AttrProxy;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Seq=WebSharper&&WebSharper.Seq;
 Utils=WebSharper&&WebSharper.Utils;
 List=WebSharper&&WebSharper.List;
 Strings=WebSharper&&WebSharper.Strings;
 Arrays=WebSharper&&WebSharper.Arrays;
 console=Global.console;
 $=Global.jQuery;
 Swiper$1=Swiper.Swiper=Runtime.Class({},Obj,Swiper$1);
 Swiper$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Swiper$1);
 Swiper.Init=function()
 {
  Swiper.InitImageSwiper();
  return Doc.TextNode("");
 };
 Swiper.InitImageSwiper=function()
 {
  Global.jQuery(function()
  {
   new Global.Swiper(".image-swiper-container",{
    scrollbar:".image-swiper-scrollbar",
    scrollbarHide:false,
    slidesPerView:"auto",
    ceteredSlides:true,
    grabCursor:true,
    freeMode:true,
    preloadImages:false,
    lazyLoading:true,
    watchSlidesVisibility:true
   });
  });
 };
 City.New=function(City$1,Country,Latitude,Longitude)
 {
  return{
   City:City$1,
   Country:Country,
   Latitude:Latitude,
   Longitude:Longitude
  };
 };
 TalksAndPresentations.GMapOffice$338$32=function(styleJson)
 {
  return function(el)
  {
   var map,r,point,icon,r$1,r$2;
   map=new maps.Map(el,(r={
    center:new maps.LatLng(47.48543,19.071336),
    zoom:15
   },r.styles=Global["eval"](styleJson),r.scrollwheel=false,r.disableDefaultUI=true,r.zoomControl=true,r));
   point=new maps.LatLng(47.48543,19.071336);
   icon=(r$1={},r$1.url="/img/map-marker.png",r$1.anchor=new maps.Point(8,8),r$1);
   new maps.Marker((r$2={
    position:point
   },r$2.map=map,r$2.title="IntelliFactory",r$2.icon=icon,r$2));
  };
 };
 TalksAndPresentations.GMapOffice=function(styleJson)
 {
  return Doc.Element("div",[AttrProxy.Create("class","inner-map"),AttrProxy.OnAfterRenderImpl(function(el)
  {
   var map,r,point,icon,r$1,r$2;
   map=new maps.Map(el,(r={
    center:new maps.LatLng(47.48543,19.071336),
    zoom:15
   },r.styles=Global["eval"](styleJson),r.scrollwheel=false,r.disableDefaultUI=true,r.zoomControl=true,r));
   point=new maps.LatLng(47.48543,19.071336);
   icon=(r$1={},r$1.url="/img/map-marker.png",r$1.anchor=new maps.Point(8,8),r$1);
   new maps.Marker((r$2={
    position:point
   },r$2.map=map,r$2.title="IntelliFactory",r$2.icon=icon,r$2));
  })],[]);
 };
 TalksAndPresentations.GMap$307$32=function(styleJson)
 {
  return function(el)
  {
   var map,r,b;
   map=new maps.Map(el,(r={
    center:new maps.LatLng(50,-20),
    zoom:3
   },r.styles=Global["eval"](styleJson),r.scrollwheel=false,r.disableDefaultUI=true,r));
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(TalksAndPresentations.GetCities(),function(a)
    {
     Seq.iter(function(m)
     {
      var point,icon,r$1,r$2;
      point=new maps.LatLng(m.Latitude,m.Longitude);
      icon=(r$1={},r$1.url="/img/map-marker.png",r$1.anchor=new maps.Point(8,8),r$1);
      new maps.Marker((r$2={
       position:point
      },r$2.map=map,r$2.title=(((Runtime.Curried3(function($1,$2,$3)
      {
       return $1(Utils.toSafe($2)+", "+Utils.toSafe($3));
      }))(Global.id))(m.City))(m.Country),r$2.icon=icon,r$2));
     },a);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 TalksAndPresentations.GMap=function(styleJson)
 {
  return Doc.Element("div",[AttrProxy.Create("class","inner-map"),AttrProxy.OnAfterRenderImpl(function(el)
  {
   var map,r,b;
   map=new maps.Map(el,(r={
    center:new maps.LatLng(50,-20),
    zoom:3
   },r.styles=Global["eval"](styleJson),r.scrollwheel=false,r.disableDefaultUI=true,r));
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(TalksAndPresentations.GetCities(),function(a)
    {
     Seq.iter(function(m)
     {
      var point,icon,r$1,r$2;
      point=new maps.LatLng(m.Latitude,m.Longitude);
      icon=(r$1={},r$1.url="/img/map-marker.png",r$1.anchor=new maps.Point(8,8),r$1);
      new maps.Marker((r$2={
       position:point
      },r$2.map=map,r$2.title=(((Runtime.Curried3(function($1,$2,$3)
      {
       return $1(Utils.toSafe($2)+", "+Utils.toSafe($3));
      }))(Global.id))(m.City))(m.Country),r$2.icon=icon,r$2));
     },a);
     return Concurrency.Zero();
    });
   })),null);
  })],[]);
 };
 TalksAndPresentations.GetCities=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(TalksAndPresentations.Ajax("\\assets\\cities.txt"),function(a)
   {
    return Concurrency.Return(List.ofSeq(Seq.map(function(line)
    {
     var parts;
     parts=Strings.SplitChars(line,[","],0);
     try
     {
      return City.New(Arrays.get(parts,0),Arrays.get(parts,1),Global.Number(Arrays.get(parts,2)),Global.Number(Arrays.get(parts,3)));
     }
     catch(exn)
     {
      console.log(exn.message);
      console.log(exn.stack);
      throw exn;
     }
    },Strings.SplitStrings(a,["\r\n","\n"],1))));
   });
  });
 };
 TalksAndPresentations.Ajax=function(url)
 {
  function a(ok,ko)
  {
   var r;
   $.ajax((r={},r.url=url,r.type="GET",r.contentType="application/json",r.dataType="text",r.success=function(result)
   {
    return ok(result);
   },r.error=function(jqXHR)
   {
    return ko(new Global.Error(jqXHR.responseText));
   },r));
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
}());
