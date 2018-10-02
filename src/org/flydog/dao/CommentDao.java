package org.flydog.dao;

import org.flydog.vo.Comments;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;

public class CommentDao {
    public List findByIdComment(int postsid) {
        try {
            String sql = "SELECT * FROM comments c WHERE c.postid=" + postsid;
            Session session = HibernateSessionFactory.getSession();
            Query query = session.createNativeQuery(sql, Comments.class);
            return query.list();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List findAllComment() {
        try {
            String sql = "SELECT * FROM comments c ORDER BY c.date ASC  ";
            Session session = HibernateSessionFactory.getSession();
            Query query = session.createNativeQuery(sql, Comments.class);
            return query.list();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void delComment(int cid) {
        Session session = HibernateSessionFactory.getSession();
        Transaction tx = session.beginTransaction();
        Comments comments = session.get(Comments.class, cid);
        session.delete(comments);
        tx.commit();
        session.close();
    }

    public Comments findOne(int cid) {
        Session session = HibernateSessionFactory.getSession();
        Comments comments = session.get(Comments.class, cid);
        session.close();
        return comments;
    }

    public void saveComment(Comments comment) {
        try {
            Session session = HibernateSessionFactory.getSession();
            Transaction tx = session.beginTransaction();
            session.save(comment);
            tx.commit();
            session.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
