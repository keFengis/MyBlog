package org.flydog.dao;

import org.flydog.vo.Link;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class LinkDao {
    public List findAllLinks() {
        String sql = "SELECT  * FROM link l WHERE l.linkdelstate=0";
        Session session = HibernateSessionFactory.getSession();
        try {
            Query query = session.createNativeQuery(sql, Link.class);
            return query.list();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
