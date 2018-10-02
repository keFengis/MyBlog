package org.flydog.dao;

import org.flydog.vo.User;

import java.util.List;

public class UserDao {

    public List findUser() {
        return HibernateSessionFactory.getSession().createNativeQuery("SELECT * FROM user", User.class).list();
    }
}
