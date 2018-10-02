package org.flydog.vo;

public class Comments {
    private int id;
    private String body;
    private String user;
    private Integer postid;
    private String date;
    private String email;
    private String site;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Integer getPostid() {
        return postid;
    }

    public void setPostid(Integer postid) {
        this.postid = postid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Comments comments = (Comments) o;

        if (id != comments.id) return false;
        if (body != null ? !body.equals(comments.body) : comments.body != null) return false;
        if (user != null ? !user.equals(comments.user) : comments.user != null) return false;
        if (postid != null ? !postid.equals(comments.postid) : comments.postid != null) return false;
        if (date != null ? !date.equals(comments.date) : comments.date != null) return false;
        if (email != null ? !email.equals(comments.email) : comments.email != null) return false;
        if (site != null ? !site.equals(comments.site) : comments.site != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (body != null ? body.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        result = 31 * result + (postid != null ? postid.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (site != null ? site.hashCode() : 0);
        return result;
    }
}
