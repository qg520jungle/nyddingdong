function getShareUrl(){return shareData.shareUrl}function getShareDesc(){return shareData.shareDesc}function getShareIcon(){return shareData.shareIcon}function getShareTitle(){return shareData.shareTitle}function getShareObj(){window.activity.getShareUrl(shareData.shareUrl),window.activity.getShareDesc(shareData.shareDesc),window.activity.getShareTitle(shareData.shareTitle),window.activity.getShareIcon(shareData.shareIcon)}var awardData={url:"https://testdangfei.nfapp.southcn.com/nfplus-activity-api/",baseUrl:"http://devstatic.nfapp.southcn.com/zhxg/",activityId:getUrlData("activityId"),uuid:""},blt=getUrlData("blt"),urlParm=blt&&"我的愿望是..."!=decodeURI(blt)?"?blt="+blt:"",urlMsg=blt&&"我的愿望是..."!=decodeURI(blt)?"我的愿望是: "+decodeURI(blt):"我的愿望是...",shareData={shareUrl:awardData.baseUrl+"wallofwish/start.html"+urlParm,shareTitle:"新年许愿墙",shareDesc:urlMsg,shareIcon:"https://static.nfapp.southcn.com/app/nanfang_logo.png"};initShare({getShareFail:function(){},title:shareData.shareTitle,desc:shareData.shareDesc,iconUrl:"https://static.nfapp.southcn.com/app/nanfang_logo.png",shareUrl:shareData.shareUrl});var metaStr='<meta itemprop="name" content="'+shareData.shareTitle+'"/><meta itemprop="image" content="https://static.nfapp.southcn.com/hd/XDspeech/XDshare/img/share_logo.png" /><meta itemprop="description" content="'+shareData.shareDesc+'"/>';$("head").append(metaStr);