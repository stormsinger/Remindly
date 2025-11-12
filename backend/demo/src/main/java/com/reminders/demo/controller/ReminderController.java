package com.reminders.demo.controller;

import com.reminders.demo.model.Holiday;
import com.reminders.demo.model.Reminder;
import com.reminders.demo.repository.ReminderRepository;
import com.reminders.demo.services.HolidayService;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/reminders")
public class ReminderController {

    private final ReminderRepository repository;
    private final HolidayService holidayService;

    public ReminderController(ReminderRepository repository, HolidayService holidayService) {
        this.repository = repository;
        this.holidayService = holidayService;
    }

    @GetMapping
    public List<Reminder> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Reminder create(@RequestBody Reminder reminder) {
        return repository.save(reminder);
    }

    @GetMapping("/holidays/{year}")
    public List<Holiday> getHolidays(@PathVariable int year) {
        return holidayService.getLithuanianHolidays(year);
    }
    
    @DeleteMapping("/{id}")
    public void deleteReminder(@PathVariable Long id) {
        repository.deleteById(id);
    }

}

