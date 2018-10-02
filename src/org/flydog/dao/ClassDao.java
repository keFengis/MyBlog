package org.flydog.dao;

import org.flydog.vo.Classify;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class ClassDao {
    public List findAllClass() {
        String sql = "SELECT * FROM classify";
        return HibernateSessionFactory.getSession().createNativeQuery(sql, Classify.class).list();
    }

    public void delClass(int cid) {
        Session session = HibernateSessionFactory.getSession();
        Transaction tx = session.beginTransaction();
        Classify classify = session.get(Classify.class, cid);
        session.delete(classify);
        tx.commit();
    }

    public void saveClass(Classify classify) {
        Session session = HibernateSessionFactory.getSession();
        Transaction tx = session.beginTransaction();
        session.save(classify);
        tx.commit();
        session.close();
    }

    public String findClassName(int cid) {
        Session session = HibernateSessionFactory.getSession();
        Classify classify = session.createNativeQuery("SELECT * FROM classify c WHERE c.classcode=" + cid, Classify.class).list().get(0);
        return classify.getClassname();
    }
}