package com.reminders.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reminders.demo.model.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {
}

