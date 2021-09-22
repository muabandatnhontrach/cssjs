
	var url_popup = 'https://bandatnhontrach.vn/dat-song-ong-keo-nhon-trach-duong-oto-toi-dat/';

      //<![CDATA[
	  // var url_ppp = 'https://bandatnhontrach.vn/du-an/vi-sao-mua-dat-vuon-xa-phuoc-khanh-nhon-trach-duong-oto-khu-dan-cu-ven-song-gia-1-9tr-m2-dien-tich-1000m2-dang-de-dau-tu/';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
