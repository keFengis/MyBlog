package org.flydog.vo;

public class TYPE {
    public int num;
    public int code;
    private String classname;

    public TYPE(Classify pp, int nn) {
        this.classname = pp.getClassname();
        this.num = nn;
        this.code = pp.getClasscode();
    }

    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
