define(function(){var t,n={log:function(){if(!javaScriptCompressed||-1!==window.location.href.indexOf("devmode=true")){var t,n=arguments.length;if(void 0!==window.console)for(t=0;t<n;t++)console.log(arguments[t])}},isArray:function(t){return void 0===Array.isArray?"[object Array]"===Object.prototype.toString.call(t):Array.isArray(t)},isEmptyObject:function(t){for(var n in t)if(t.hasOwnProperty(n))return!1;return!0},emptyObject:function(t){for(var n in t)t.hasOwnProperty(n)&&delete t[n]},getStoreType:function(){return document.querySelector("#topcontrols .list")&&document.querySelector("#topcontrols .list").length>0?"list":"bopus"},reloadParent:function(){self!==top&&(parent.location.href=parent.location.href)},loadUrlInParent:function(t){parent.location.href=t},loadUrlInWindow:function(t){window.location.href=t},removeParam:function(t,n){var e,o,r=t.split("?");if(r.length>=2){e=encodeURIComponent(n)+"=";for(var i=(o=r[1].split(/[&;]/g)).length;i-- >0;)-1!==o[i].lastIndexOf(e,0)&&o.splice(i,1),t=0!==o.length?r[0]+"?"+o.join("&"):r[0]}return"?"==t.charAt(t.length-1)&&(t=t.slice(0,-1)),t},browsers:{placeholderIsSupported:function(){return"placeholder"in document.createElement("input")}},getRequestURI:function(){var t=window.location.pathname;return window.location.search&&(t+=window.location.search),window.location.hash&&(t+=window.location.hash),t},getUrlVars:function(t){var n,e,o=[],r=window.location.hash.substr(1),i=window.location.search,a=r.slice(r.indexOf("?")+1).split("&"),s=i.slice(i.indexOf("?")+1).split("&");e=a.concat(s),t&&t.length>0&&(e=t.slice(t.indexOf("?")+1).split("&"));for(var c=0;c<e.length;c++)n=e[c].split("="),o.push(n[0]),o[n[0]]=n[1];return o},getUrlVar:function(t,e){return e?n.getUrlVars(e)[t]:n.getUrlVars()[t]},date:{getDayOfWeek:function(){return["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()]}},obj:{define:function(t,n,e){if(n)for(var o in n)t.prototype[o]=n[o];if(e)for(var r in e)t[r]=e[r];return t},defineSubclass:function(t,n,e,o){if(t.prototype=Object.create(n.prototype),e)for(var r in e)t.prototype[r]=e[r];if(o)for(var i in o)t[i]=o[i];return t}},tpl:function(t,n){var e=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return n?e(n):e},UserException:function(t){this.message=t,this.name="UserException",n.UserException.prototype.toString=function(){return this.name+": "+this.message}},window:{onresize:function(t,e){var o="resize"+(new Date).valueOf();window.onresize=function(){n.window.smoothResize(t,e,o)}},smoothResize:(t={},function(e,o,r){if(!r)throw new n.UserException("Unique ID generation for utils.window.onresize failed.");t[r]&&clearTimeout(t[r]),t[r]=setTimeout(e,o)})},autoTab:function(t){var n=t.length;t.each(function(e){var o=e+1;o<n&&$(this).on("keyup",function(){var n=$(this),e=parseInt(n.attr("maxlength"),10);n.val().length>=e&&($(this).off("keyup"),t[o].focus())})})}};return n});