package org.flydog.vo;

public class POSTDATE {
    public String year;
    public String month;
    public String day;
    public String title;
    public int id;

    public POSTDATE(String year, String month, String day, String title, int id) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.title = title;
        this.id = id;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getYear() {

        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
