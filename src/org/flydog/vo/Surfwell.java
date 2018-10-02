package org.flydog.vo;

public class Surfwell {
    private int id;
    private String surfwellcontent;
    private Integer surfwelldelstate;
    private String surfwelltitle;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSurfwellcontent() {
        return surfwellcontent;
    }

    public void setSurfwellcontent(String surfwellcontent) {
        this.surfwellcontent = surfwellcontent;
    }

    public Integer getSurfwelldelstate() {
        return surfwelldelstate;
    }

    public void setSurfwelldelstate(Integer surfwelldelstate) {
        this.surfwelldelstate = surfwelldelstate;
    }

    public String getSurfwelltitle() {
        return surfwelltitle;
    }

    public void setSurfwelltitle(String surfwelltitle) {
        this.surfwelltitle = surfwelltitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Surfwell surfwell = (Surfwell) o;

        if (id != surfwell.id) return false;
        if (surfwellcontent != null ? !surfwellcontent.equals(surfwell.surfwellcontent) : surfwell.surfwellcontent != null)
            return false;
        if (surfwelldelstate != null ? !surfwelldelstate.equals(surfwell.surfwelldelstate) : surfwell.surfwelldelstate != null)
            return false;
        if (surfwelltitle != null ? !surfwelltitle.equals(surfwell.surfwelltitle) : surfwell.surfwelltitle != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (surfwellcontent != null ? surfwellcontent.hashCode() : 0);
        result = 31 * result + (surfwelldelstate != null ? surfwelldelstate.hashCode() : 0);
        result = 31 * result + (surfwelltitle != null ? surfwelltitle.hashCode() : 0);
        return result;
    }
}
