package org.flydog.vo;

import java.sql.Timestamp;

public class Posts {
    private int id;
    private Timestamp date;
    private String content;
    private Integer author;
    private Integer delstate;
    private Integer type;
    private String part;
    private String title;
    private String fbanner;
    private Integer readnum;

    public String getFbanner() {
        return fbanner;
    }

    public void setFbanner(String fbanner) {
        this.fbanner = fbanner;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getReadnum() {

        return readnum;
    }

    public void setReadnum(Integer readnum) {
        this.readnum = readnum;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getAuthor() {
        return author;
    }

    public void setAuthor(Integer author) {
        this.author = author;
    }

    public Integer getDelstate() {
        return delstate;
    }

    public void setDelstate(Integer delstate) {
        this.delstate = delstate;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getPart() {
        return part;
    }

    public void setPart(String part) {
        this.part = part;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Posts posts = (Posts) o;

        if (id != posts.id) return false;
        if (date != null ? !date.equals(posts.date) : posts.date != null) return false;
        if (content != null ? !content.equals(posts.content) : posts.content != null) return false;
        if (author != null ? !author.equals(posts.author) : posts.author != null) return false;
        if (delstate != null ? !delstate.equals(posts.delstate) : posts.delstate != null) return false;
        if (type != null ? !type.equals(posts.type) : posts.type != null) return false;
        if (part != null ? !part.equals(posts.part) : posts.part != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (content != null ? content.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + (delstate != null ? delstate.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (part != null ? part.hashCode() : 0);
        return result;
    }
}
