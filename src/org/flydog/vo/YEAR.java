package org.flydog.vo;

public class YEAR {
    public String year;
    public String month;

    public YEAR(String year, String month) {
        this.year = year;
        this.month = month;
    }

    public YEAR(String year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        YEAR year1 = (YEAR) o;

        if (!year.equals(year1.year)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return year.hashCode();
    }
}
