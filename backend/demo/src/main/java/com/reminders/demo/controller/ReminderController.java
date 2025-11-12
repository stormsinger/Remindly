package com.reminders.demo.controller;

import com.reminders.demo.model.Holiday;
import com.reminders.demo.model.Reminder;
import com.reminders.demo.repository.ReminderRepository;
import com.reminders.demo.services.HolidayService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
        if (reminder.getId() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Naujas priminimas neturi turėti ID");
        }
        return repository.save(reminder);
    }

    @GetMapping("/holidays/{year}")
    public List<Holiday> getHolidays(@PathVariable int year) {
        return holidayService.getLithuanianHolidays(year);
    }
    
    @DeleteMapping("/{id}")
    public void deleteReminder(@PathVariable long id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reminder not found");
        }
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Reminder updateReminder(@PathVariable long id, @RequestBody Reminder updatedReminder) {
        Reminder existing = repository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Reminder not found"));
        existing.setDate(updatedReminder.getDate());
        existing.setDateTime(updatedReminder.getDateTime());
        existing.setDescription(updatedReminder.getDescription());

        return repository.save(existing);
    }


}

