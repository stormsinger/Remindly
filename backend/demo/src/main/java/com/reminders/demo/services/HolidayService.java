package com.reminders.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.reminders.demo.model.Holiday;

@Service
public class HolidayService {

    public List<Holiday> getLithuanianHolidays(int year) {

        String url = "https://date.nager.at/api/v3/PublicHolidays/" + year + "/LT";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Holiday[]> response = restTemplate.getForEntity(url, Holiday[].class);

        return List.of(response.getBody());
    }
}
