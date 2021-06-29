
// new board
$('#newbdbtn').on('click', function () {
    location.href = "/board/write";
});

//save board
$('#savebdbbtn').on('click', function () {
    if ($('#title').val() == '') {
        alert('제목을 입력하세요!');
    } else if ($('#contents').val() == '') {
        alert('본문을 입력하세요!');
    } else if (grecaptcha.getResponse() == '') {
        alert('자동기입 방지 확인 필요!')
    } else {
        const frm = $('#boardfrm');
        frm.attr('action', '/board/write');
        frm.attr('method', 'post');
        frm.submit();
    }
});

// search board
$('#bfindbtn').on('click', function () {
    if($('#bfindkey').val() == '') {
        alert('검색할 내용을 작성하세요!');
    } else {
        let qry = '?findtype=' + $('#bfindtype').val();
        qry += "&findkey=" + $('#bfindkey').val() + "&cp=1";
        let url = '/board/find' + qry;
        location.href = url;
    }
});

// search board
$('#findbtn2').on('click', function () {
    if($('#findkey').val() == '') {
        alert('검색할 내용을 작성하세요!');
    } else {
        let qry = '?findtype=titcont';
        qry += "&findkey=" + $('#findkey').val() + "&cp=1";
        let url = '/board/find' + qry;
        location.href = url;
    }
});

// board findtype tag setting
// $('#findtype').val('${param.findtype}').prop('selected', 'true');


// new board reply
$('#newbrbtn').on('click', function () {
    if ($('#contents').val() == "") {
        alert('댓글을 작성하세요!');
    } else {
        const frm = $('#replefrm');
        frm.attr('method', 'post');
        frm.attr('action', '/reple/write');
        frm.submit();
    }
});

// show reply
function addReply(rno) {
    $('#repleModal').modal('show');
    $('#rpno').val(rno);    // 대댓글 작성시 부모댓글번호를 넘겨줌
}

// new reply
$('#newrrpbtn').on('click', function () {
    if ($('#rreple').val() == '') {
        alert('대댓글을 작성하세요');
    } else {
        const frm = $('#rpfrm');
        frm.attr('method', 'post');
        frm.attr('action', '/rreple/write');
        frm.submit();
    }
});

$('#modbdbtn').on('click', function () {
    location.href = '/board/update?bdno=' + $('#bdno').val();
});

// update board
$('#modboard').on('click', function () {
    if (grecaptcha.getResponse() == '') { alert('자동가입방지를 체크하세요') }
    else {
        const frm = $('#modbdfrm');
        frm.attr('method', 'post');
        frm.attr('action', '/board/update');
        frm.submit();
    }
});

// update reple
function modReple(rno) {
    $('#modRepleModal').modal('show');
    $('#rno').val(rno);
};

$('#modrpbtn').on('click', function () {
    if ($('#modreple').val() == '') {
        alert('수정내용을 작성하세요');
    } else {
        const frm = $('#modrpfrm');
        frm.attr('method', 'post');
        frm.attr('action', '/reple/update');
        frm.submit();
    }
});

// delete board
$('#rmvbdbtn').on('click', function () {
    location.href = '/board/remove?bdno=' + $('#bdno').val();
});

// delete reple
function delReple(rno, bdno) {
    location.href = '/reple/remove?bdno=' + bdno + '&rno=' + rno;
};

// 추천
$('#thumbbtn').on('click', function () {
    location.href = '/board/thumbsup?bdno=' + $('#bdno').val();
});

// 추천순 정렬
$('#listThumbbtn').on('click', function () {
    location.href = "/board/listThumbs?cp=1";
});

// 조회순 정렬
$('#listViewbtn').on('click', function () {
    location.href = "/board/listView?cp=1";
});


