var blt=getUrlData("blt"),urlParm=blt&&"我的愿望是..."!=decodeURI(blt)?"?blt="+blt:"",urlMsg=blt&&"我的愿望是..."!=decodeURI(blt)?"我的愿望是: "+decodeURI(blt):"我的愿望是...",shareData={shareUrl:awardData.baseUrl+"wallofwish/start.html"+urlParm,shareTitle:"新年许愿墙",shareDesc:urlMsg,shareIcon:"https://static.nfapp.southcn.com/app/nanfang_logo.png"};initShare({getShareFail:function(){},title:shareData.shareTitle,desc:shareData.shareDesc,iconUrl:"https://static.nfapp.southcn.com/app/nanfang_logo.png",shareUrl:shareData.shareUrl}),$(function(){for(var a=["有一次说走就走的旅行","银行存款突破六位数","父母身体健康","找个对象","世界和平","减肥","早睡早起","每天拍一张照片","坚持锻炼"],t=[.08,.04,.13,.03,.07,.12,.17,.16,.2],e=[1,2,3,3,2,1,1,3,2],l=[1,2,3,3,2,1,1,3,2],s=[1,2,3,3,2,1,1,3,2],r="",c=new Date("2017/12/27").getTime(),n=0,i=(new Date).getTime(),o=Math.ceil((i-c)/36e5),h=-80*o/125+125,n=(h+125)*o/2,p=0;p<t.length;p++)e[p]=t[p]*h,l[p]=Math.ceil((e[p]+125*t[p])*o/2),s[p]=parseFloat(100*l[p]/n).toFixed(1);for(var p=0;p<a.length;p++){e[p];r+='<li class="u-li f-cb"><div class="u-left pipe"><span class="content">',r+=a[p],r+='</span><span class="count">'+l[p]+'票</span><div class="cover" style="width:'+e[p]/100*4.5+'rem"></div> </div><div class="u-right percent">',r+=s[p],r+="%</div></li>"}$(".m-list").html(r),$(".j-share").on("click",function(){$(".j-cover").show()}),$(".j-cover").on("click",function(){$(".j-cover").hide()})});