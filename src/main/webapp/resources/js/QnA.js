$('#newQnAbtn').on('click', function () {
    location.href = "/QNA/write";
});

// search board
$('#findbtn').on('click', function(){
    if ($('#findkey').val() == '') alert('검색할 내용을 작성하세요!');
    else {
        let qry = '?findtype=' + $('#findtype').val();
        qry += "&findkey=" + $('#findkey').val() + "&cp=1";
        let url = '/QNA/find' + qry;
        location.href = url;
    }
});

$('#newFAQbtn').on('click', function () {
    location.href = '/FAQ/FAQlist';
});

$('#newQnAPagebtn').on('click', function () {
    location.href = '/QNA/QnAlist';
});

$("#qsavebdbbtn").on('click', function() {
    if ($('#title').val() == '') {
        alert('제목을 입력하세요!');
    } else if ($('#contents').val() == '') {
        alert('본문을 입력하세요!');
    } else if (grecaptcha.getResponse() == '') {
        alert('자동기입 방지 확인 필요!')
    } else {
        const frm = $('#boardfrm');
        frm.attr('action', '/QNA/write');
        frm.attr('method', 'post');
        frm.submit();
    }
})