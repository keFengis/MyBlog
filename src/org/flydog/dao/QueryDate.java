package org.flydog.dao;

import org.flydog.vo.Posts;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class QueryDate {
    public List queryDate(String begin, String end) {
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(String.format("SELECT * FROM posts p WHERE p.date BETWEEN %s AND%s && p.delstate=0", begin, end), Posts.class);
        return query.list();
    }
}
