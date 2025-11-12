package com.reminders.demo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.jayway.jsonpath.JsonPath;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.reminders.demo.repository.ReminderRepository;
import com.reminders.demo.services.HolidayService;
import com.reminders.demo.model.Reminder;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class ReminderControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ReminderRepository reminderRepository;

    @MockBean
    private HolidayService holidayService;

@Test
public void shouldCreateReminder() throws Exception {
    Reminder savedReminder = new Reminder();
    savedReminder.setId(1L);
    savedReminder.setDate("2025-12-01");
    savedReminder.setDateTime("10:00");
    savedReminder.setDescription("Test reminder");

    when(reminderRepository.save(any(Reminder.class))).thenReturn(savedReminder);

    String reminderJson = """
        {
            "date": "2025-12-01",
            "dateTime": "10:00",
            "description": "Test reminder"
        }
    """;

    mockMvc.perform(post("/reminders")
            .contentType(MediaType.APPLICATION_JSON)
            .content(reminderJson))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1));
}
}