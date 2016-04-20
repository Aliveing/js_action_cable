/**
 * Created by Alive on 16/4/19.
 */

var socket = (function(){
    var socket = new WebSocket('ws://localhost:3001/cable');
    var initSocketObj = {
        command:'subscribe',
        identifier:"{\"channel\":\"ChatChannel\"}"
    };
    socket.onopen = function(event){
        console.log("onOpen =========> " + event);
        socket.send(JSON.stringify(initSocketObj));
    };
    socket.onmessage = function(event){
        console.log("onOpen =========> " + event.data);
    };
    socket.onclose = function(event){
        console.log("onOpen =========> " + 'E.., close.');
    };
    return socket;
})();

function loadXMLDoc(method,url,params,success,failure) {
    var xhr = null;
    if (window.XMLHttpRequest)
    {// code for all new browsers
        xhr=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE5 and IE6
        xhr=new ActiveXObject("Microsoft.xhr");
    }
    if (xhr!=null)
    {
        xhr.onreadystatechange=function(){
            state_Change(xhr,success,failure);
        };
        xhr.open(method,url,true);
        if(method === "POST"){
            xhr.
            xhr.send(params);
        }
        xhr.send(null);
    }
    else
    {
        alert("Your browser does not support xhr.");
    }
}

function state_Change(xhr,success,failure)
{
    if (xhr.readyState==4)
    {// 4 = "loaded"
        if (xhr.status==200)
        {// 200 = OK
            success(xhr.responseText);
        }
        else
        {
            failure(xhr.responseText);
        }
    }
}

function submit(button){
    var parent = button.parentNode;
    var name = parent.querySelector('input[name=name]').value;
    var content = parent.querySelector('input[name=content]').value;
    var obj = {name:name, content:content};
    var simpleCableObj = {
        identifier:'_ping',
        command:'message',
        data:obj
    };
    socket.send(JSON.stringify(simpleCableObj));
    //loadXMLDoc('post','/chat/create',{
    //    name:name,
    //    message:content
    //},function(res){
    //    console.log(res);
    //},function(res){
    //    console.log(res);
    //})
}

window.onload = init;

function init(){
    var message = document.querySelector('div.message');
    //socket.close();
    //loadXMLDoc('GET','/chat/get_all',null,
    //    function(ret){
    //        var json = JSON.parse(ret);
    //        if(json.success){
    //            console.log(json.data);
    //        }else{
    //            console.log(json.msg);
    //        }
    //    },
    //    function(ret){
    //        console.log(ret);
    //    }
    //)
}



