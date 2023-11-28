let element = document.getElementById("content_video_html5_api").src;
if(element!=null){
    let name = window.location.pathname + ".mp4";
    window.open(element);
    if(window.location.host = 'storage4-2.premiumcdn.net'){
        let link = document.createElement('a');
        link.href = window.location.href;
        link.setAttribute('download',name);
    
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
