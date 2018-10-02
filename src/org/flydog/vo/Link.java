package org.flydog.vo;

public class Link {
    private int id;
    private String linkname;
    private String linkaddr;
    private Integer linkdelstate;
    private String linkinfo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLinkname() {
        return linkname;
    }

    public void setLinkname(String linkname) {
        this.linkname = linkname;
    }

    public String getLinkaddr() {
        return linkaddr;
    }

    public void setLinkaddr(String linkaddr) {
        this.linkaddr = linkaddr;
    }

    public Integer getLinkdelstate() {
        return linkdelstate;
    }

    public void setLinkdelstate(Integer linkdelstate) {
        this.linkdelstate = linkdelstate;
    }

    public String getLinkinfo() {
        return linkinfo;
    }

    public void setLinkinfo(String linkinfo) {
        this.linkinfo = linkinfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Link link = (Link) o;

        if (id != link.id) return false;
        if (linkname != null ? !linkname.equals(link.linkname) : link.linkname != null) return false;
        if (linkaddr != null ? !linkaddr.equals(link.linkaddr) : link.linkaddr != null) return false;
        if (linkdelstate != null ? !linkdelstate.equals(link.linkdelstate) : link.linkdelstate != null) return false;
        if (linkinfo != null ? !linkinfo.equals(link.linkinfo) : link.linkinfo != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (linkname != null ? linkname.hashCode() : 0);
        result = 31 * result + (linkaddr != null ? linkaddr.hashCode() : 0);
        result = 31 * result + (linkdelstate != null ? linkdelstate.hashCode() : 0);
        result = 31 * result + (linkinfo != null ? linkinfo.hashCode() : 0);
        return result;
    }
}
