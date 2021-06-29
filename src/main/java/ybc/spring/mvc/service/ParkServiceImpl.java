package ybc.spring.mvc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ybc.spring.mvc.dao.ParkDAO;
import ybc.spring.mvc.vo.Park;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("psrv")
public class ParkServiceImpl implements ParkService{
    @Autowired
    private ParkDAO pdao;

    @Override
    public List<Park> readPark(String addr, String shour, String ehour, String satshour, String satehour, String holshour, String holehour, String weekday, String saturday, String holiday, String gubun, String buze, String onedaypass, String monthpass, String cash, String card, String others) {
        Map<String, Object> params = new HashMap<>();
        params.put("addr", addr);
        params.put("shour", shour);
        params.put("ehour", ehour);
        params.put("satshour", satshour);
        params.put("satehour", satehour);
        params.put("holshour", holshour);
        params.put("holehour", holehour);
        params.put("weekday", weekday);
        params.put("saturday", saturday);
        params.put("holiday", holiday);
        params.put("gubun", gubun);
        params.put("buze", buze);
        params.put("onedaypass", onedaypass);
        params.put("monthpass", monthpass);
        params.put("cash", cash);
        params.put("card", card);
        params.put("others", others);
        return pdao.selectPark(params);
    }

    @Override
    public int countPark(String addr, String shour, String ehour, String satshour, String satehour, String holshour, String holehour, String weekday, String saturday, String holiday, String gubun, String buze, String onedaypass, String monthpass, String cash, String card, String others) {
        Map<String, Object> params = new HashMap<>();
        params.put("addr", addr);
        params.put("shour", shour);
        params.put("ehour", ehour);
        params.put("satshour", satshour);
        params.put("satehour", satehour);
        params.put("holshour", holshour);
        params.put("holehour", holehour);
        params.put("weekday", weekday);
        params.put("saturday", saturday);
        params.put("holiday", holiday);
        params.put("gubun", gubun);
        params.put("buze", buze);
        params.put("onedaypass", onedaypass);
        params.put("monthpass", monthpass);
        params.put("cash", cash);
        params.put("card", card);
        params.put("others", others);
        return pdao.selectCnt(params);
    }
}