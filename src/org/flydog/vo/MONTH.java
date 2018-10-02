package org.flydog.vo;

public class MONTH {

    public String month;
    public String year;

    public MONTH(String month, String year) {
        this.month = month;
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MONTH)) return false;

        MONTH month1 = (MONTH) o;

        if (month != null ? !month.equals(month1.month) : month1.month != null) return false;
        if (year != null ? !year.equals(month1.year) : month1.year != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = month != null ? month.hashCode() : 0;
        result = 31 * result + (year != null ? year.hashCode() : 0);
        return result;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
