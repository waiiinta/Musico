function send(){
    chrome.windows.getAll({populate:true},function(windows){
        windows.forEach(function(window){
            window.tabs.forEach(function(tab){
                //collect all of the urls here, I will just log them instead
                // alert(tab.url);
                
                if(tab.url.includes('youtube')){
                    alert(tab.url.includes('youtube'))
                    var para = document.createElement("p");
                    var node = document.createTextNode(tab.url);
                    para.appendChild(node);

                    var element = document.getElementById("playlist");
                    element.appendChild(para);
                }
            });
        });
    });
}

chrome.tabs.onUpdated.addListener(send)