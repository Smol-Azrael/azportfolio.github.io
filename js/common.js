// let var const 차이 알아보기
let isDropboxOpen = false; //true이면 메뉴가 열려있다. false면 닫혀있다.
let dropbox = document.querySelector('.dropboxBtn');
let dropboxItem = document.querySelector('.dropbox-item');

dropbox.onclick = function(){
    let dropboxLinks = dropboxItem.querySelectorAll('a');
    let spans = dropbox.querySelectorAll('span');
    //기존에 드롭다운이 열려있었으면
    if(isDropboxOpen) {
        // 메뉴를 닫는다.
        dropboxLinks.forEach(element => {
            element.style.height = '0';
            element.style.marginTop = '-1em';
            element.style.opacity = '0';
        });
        setTimeout(() => {
            dropboxItem.style.display = 'none';
        }, 300);
        // TODO 닫기아이콘을 메뉴 아이콘으로 전환한다.
        spans[0].style.width = "50%";
        spans[1].style.width = "75%";
        spans[2].style.width = "100%";

        spans[0].style.transform = "";
        spans[2].style.transform = "";
    } else {
        // 기존에 드롭다운이 닫혀 있었다면 메뉴를 연다.
        dropboxItem.style.display = 'flex';
        setTimeout(() => {
            dropboxLinks.forEach(element => {
                element.style.height = '1em';
                element.style.marginTop = '0';
                element.style.opacity = '1';
            });
        }, 50);
        // TODO 메뉴 아이콘을 닫기 아이콘으로 전환한다.
        // width: 32px;
        spans[0].style.width = "30px";
        spans[1].style.width = "0";
        spans[2].style.width = "30px";
        
        // transform: rotate(45deg) translate(8px, -7px);
        spans[0].style.transform = "rotate(45deg) translate(6px, -6px)";

        // transform: rotate(-45deg) translate(14px, -14px);
        spans[2].style.transform = "rotate(-45deg) translate(14.5px, -15px)";
    }
    // 열림값 전환
    isDropboxOpen = !isDropboxOpen;
};
