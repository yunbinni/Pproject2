package ybc.spring.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import ybc.spring.mvc.service.QnAService;
import ybc.spring.mvc.vo.QnA;

@Controller
public class QnAController {

    private QnAService qsrv;

    @Autowired
    public QnAController(QnAService qsrv){
        this.qsrv = qsrv;
    }

    @GetMapping("/QNA/QnAlist")
    public  ModelAndView QnAlist(ModelAndView mv, String cp) {
        if (cp == null) cp = "1";
        mv.setViewName("QNA/QnAlist.tiles");
        mv.addObject("QnAs", qsrv.readQnA(cp));
        mv.addObject("QnAcnt", qsrv.countQnA());

        return mv;
    }
    // 게시판 검색 기능 구현
    @GetMapping("/QNA/find")
    public ModelAndView find(ModelAndView mv, String cp,
                             String findtype, String findkey) {

        mv.setViewName("QNA/QnAlist.tiles");
        mv.addObject("QnAs",
                qsrv.readQnA(cp, findtype, findkey));
        mv.addObject("QnAcnt",
                qsrv.countQnA(findtype, findkey));

        return mv;
    }

    @GetMapping("/QNA/write")
    public String write() {
        return "QNA/write.tiles";
    }

    @PostMapping("/QNA/write")
    public String writeok(QnA q) {
        qsrv.newQnA(q);
        return "redirect:/QNA/QnAlist";
    }

    @GetMapping("/QNA/view")
    public ModelAndView view(ModelAndView mv, String qno) {
        mv.setViewName("QNA/view.tiles");
        mv.addObject("q", qsrv.readOneQnA(qno));
        return mv;
    }
}