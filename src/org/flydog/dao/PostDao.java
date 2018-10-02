package org.flydog.dao;

import org.flydog.vo.Posts;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;

public class PostDao {
    public static final int pageSize = 6;
    public static final int deled = 1;

//    public List findIndexPosts() {
//        String sql = "SELECT * FROM posts p WHERE p.delstate=0 ORDER BY id DESC LIMIT 0" + pageSize;
//        Session session = HibernateSessionFactory.getSession();
//        try {
//            Query query = session.createNativeQuery(sql, Posts.class);
//            return query.list();
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        } finally {
//            session.close();
//        }
//    }

    public List findAllPosts() {
        String sql = "SELECT * FROM posts p WHERE p.delstate=0 ORDER BY p.date DESC";
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(sql, Posts.class);
        return query.list();
    }

    public List findByDate(String year, String month) {
        String sql = "SELECT * FROM posts p WHERE p.delstate=0 AND p.date LIKE " + "\"" + year + "-" + month + "%\"" + " ORDER BY p.date DESC";
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(sql, Posts.class);
        return query.list();
    }

//    public int getPageNum() {
//        String sql = "SELECT * FROM posts p WHERE p.delstate=0 ORDER BY id";
//        return HibernateSessionFactory.getSession().createNativeQuery(sql, Posts.class).list().size() / pageSize + 1;
//    }

    public Posts findOnePost(int id) {
        Session session = HibernateSessionFactory.getSession();
        Posts posts = (Posts) session.get(Posts.class, id);
        return posts;
    }

    public List findTypePosts(int type) {
        String sql = "SELECT * FROM posts p WHERE p.delstate=0 AND p.type=" + type + " ORDER BY p.DATE DESC";
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(sql, Posts.class);
        return query.list();
    }

//    public List findByPage(int now) {
//        try {
//            String sql = "SELECT * FROM posts p WHERE p.delstate=0 ORDER BY id DESC LIMIT " + (now - 1) * pageSize + "," + pageSize;
//            return HibernateSessionFactory.getSession().createNativeQuery(sql, Posts.class).list();
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        } finally {
//            HibernateSessionFactory.getSession().close();
//        }
//    }

    public List findTypePosts(int type, int a) {
        String sql = "SELECT * FROM posts p WHERE p.delstate=0 AND p.type=" + type + " ORDER BY p.date DESC";
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(sql, Posts.class);
        return query.list();
    }

    public void updatePost(Posts posts) {
        Session session = HibernateSessionFactory.getSession();
        Transaction tx = session.beginTransaction();
        session.update(posts);
        tx.commit();
        session.close();
    }

    public void delPost(int pid) {
        Session session = HibernateSessionFactory.getSession();
        Posts posts = this.findOnePost(pid);
        posts.setDelstate(deled);
        this.updatePost(posts);
    }

    public void postsave(Posts post) {
        Session session = HibernateSessionFactory.getSession();
        Transaction tx = session.beginTransaction();
        session.save(post);
        tx.commit();
    }

    public List findHistory() {
        String sql = "SELECT * FROM posts p WHERE p.delstate=0 ORDER BY p.date DESC";
        Session session = HibernateSessionFactory.getSession();
        Query query = session.createNativeQuery(sql, Posts.class);
        return query.list();
    }

    public List search(String keyword) {
        String sql = "select * from posts p where p.content like '%" + keyword + "%' AND (p.type!=2500&&p.delstate=0)" + " ORDER BY p.date DESC";
        Session session = HibernateSessionFactory.getSession();
        List<Posts> pl = session.createNativeQuery(sql, Posts.class).list();
        return pl;
    }
}
