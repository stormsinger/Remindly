package com.reminders.demo.model;

public class Holiday {
    private String date;
    private String localName;
    private String name;
    private String countryCode;
    private boolean fixed;
    private boolean global;
    private String type;

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getLocalName() { return localName; }
    public void setLocalName(String localName) { this.localName = localName; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountryCode() { return countryCode; }
    public void setCountryCode(String countryCode) { this.countryCode = countryCode; }

    public boolean isFixed() { return fixed; }
    public void setFixed(boolean fixed) { this.fixed = fixed; }

    public boolean isGlobal() { return global; }
    public void setGlobal(boolean global) { this.global = global; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

}
