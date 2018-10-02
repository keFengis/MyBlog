package org.flydog.vo;

import java.sql.Timestamp;

public class Classify {
    private int id;
    private String classname;
    private Timestamp classaddtime;
    private Integer classcode;
    private Integer postsnum;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public Timestamp getClassaddtime() {
        return classaddtime;
    }

    public void setClassaddtime(Timestamp classaddtime) {
        this.classaddtime = classaddtime;
    }

    public Integer getClasscode() {
        return classcode;
    }

    public void setClasscode(Integer classcode) {
        this.classcode = classcode;
    }

    public Integer getPostsnum() {
        return postsnum;
    }

    public void setPostsnum(Integer postsnum) {
        this.postsnum = postsnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Classify classify = (Classify) o;

        if (id != classify.id) return false;
        if (classname != null ? !classname.equals(classify.classname) : classify.classname != null) return false;
        if (classaddtime != null ? !classaddtime.equals(classify.classaddtime) : classify.classaddtime != null)
            return false;
        if (classcode != null ? !classcode.equals(classify.classcode) : classify.classcode != null) return false;
        if (postsnum != null ? !postsnum.equals(classify.postsnum) : classify.postsnum != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (classname != null ? classname.hashCode() : 0);
        result = 31 * result + (classaddtime != null ? classaddtime.hashCode() : 0);
        result = 31 * result + (classcode != null ? classcode.hashCode() : 0);
        result = 31 * result + (postsnum != null ? postsnum.hashCode() : 0);
        return result;
    }
}
