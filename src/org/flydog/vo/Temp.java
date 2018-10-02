package org.flydog.vo;

public class Temp implements java.io.Serializable {
    public String title;
    public String classname;
    public int id;
    public int postid;

    public Temp() {
    }

    public Temp(String title, String classname, int id, int postid) {
        this.title = title;
        this.classname = classname;
        this.id = id;
        this.postid = postid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPostid() {
        return postid;
    }

    public void setPostid(int posiid) {
        this.postid = posiid;
    }
}
