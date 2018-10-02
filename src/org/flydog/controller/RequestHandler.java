package org.flydog.controller;

import org.flydog.dao.*;
import org.flydog.util.DateBuilder;
import org.flydog.util.FileUpLoader;
import org.flydog.util.SessionChecker;
import org.flydog.util.StringUtil;
import org.flydog.vo.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

//控制器 处理所有的请求
@Controller
public class RequestHandler {
    public static final int link_id = 110;
    public static final int about_id = 111;
    String yes = "yes";
    private PostDao postDao = new PostDao();
    private CommentDao commentDao = new CommentDao();
    private ClassDao classDao = new ClassDao();
    private LinkDao linkDao = new LinkDao();
    private UserDao uesrDao = new UserDao();
    private SessionChecker sessionChecker = new SessionChecker();

    //映射到首页
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    private String index(ModelMap map) throws Exception {
        List<Posts> postList = postDao.findAllPosts();
        List<Classify> classList = classDao.findAllClass();
        map.addAttribute("classList", classList);
        map.addAttribute("postList", postList);
        return "index";
    }

    //映射到文章+id
    @RequestMapping(value = "/archives/{id}", method = RequestMethod.GET)
    private String detail(ModelMap map, @PathVariable("id") int id) {
        List commentList = commentDao.findByIdComment(id);
        List allPostList = postDao.findAllPosts();
        List classList = classDao.findAllClass();
        Posts posts = postDao.findOnePost(id);
        int npn = allPostList.indexOf(posts);
        int bpn = allPostList.indexOf(posts) + 2;//hou
        Posts np = new Posts();
        Posts bp = new Posts();
        boolean flag = true;
        if (bpn - 1 == allPostList.size()) {//最后一篇
            bp.setTitle("没有了");
            bp.setId(posts.getId());
            flag = false;
            np = (Posts) allPostList.get(allPostList.indexOf(posts) - 1);
        }
        if (npn == 0) {
            np.setTitle("没有了");
            np.setId(posts.getId());
            flag = false;
            if (bpn != allPostList.size()) {
                bp = (Posts) allPostList.get(allPostList.indexOf(posts) + 1);
            }
        }
        if (flag) {
            np = (Posts) allPostList.get(npn - 1);
            bp = (Posts) allPostList.get(npn + 1);
        }
        map.addAttribute("bp", bp);
        map.addAttribute("np", np);
        map.addAttribute("commentnum", commentList.size());
        map.addAttribute("posts", posts);
        map.addAttribute("commentList", commentList);
        map.addAttribute("classList", classList);
        return "detail";
    }

    @RequestMapping(value = "/content/{pid}", method = RequestMethod.GET)
    private void content(@PathVariable("pid") int pid, HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        PrintWriter printWriter = response.getWriter();
        printWriter.write(postDao.findOnePost(pid).getContent());
        printWriter.close();
    }

    //评论保存
    @RequestMapping(value = "/comment/save", method = RequestMethod.POST)
    private void saveComment(HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter printWriter = response.getWriter();
        String replyid = request.getParameter("commentid");
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Comments comment = new Comments();
        comment.setBody(request.getParameter("body"));
        comment.setUser(request.getParameter("user"));
        comment.setDate(df.format(new Date()));
        comment.setEmail(request.getParameter("email"));
        comment.setPostid(Integer.valueOf(request.getParameter("postid")));
        if (replyid != null) {
            System.out.println("test");
            Comments commentss = commentDao.findOne(Integer.valueOf(replyid));
            comment.setUser(request.getParameter("user") + "=> " + commentss.getUser());
            comment.setBody(commentss.getBody() + "<hr><div class=\"comment-reply\" style=\"margin-left: 60px\">" + request.getParameter("body") + "</div>");
//            String c[] = commentss.getBody().split("<hr>");
//            if(c.length>=2){
//                System.out.println("test2");
//                String toAddName = c[c.length-1];
//                String before = "";
//                for(int i=0;i<c.length-2;++i)
//                    before = c[i] + before;
//                toAddName = commentss.getUser() + ": " + commentss.getBody() + toAddName;
//                String realBody = before + toAddName;
//                comment.setBody(  "<hr>" + realBody);
//            }
//            else{
//                System.out.println("test3");
//                comment.setBody(commentss.getUser() + ": " + commentss.getBody() + "<hr>" + request.getParameter("body"));
//            }
        }
        comment.setSite((request.getParameter("site").equals("") ? "/index" : "http://" + request.getParameter("site")));
        commentDao.saveComment(comment);
        String commentHtmlTemp = "<ol class=\"comment-list\">" +
                "        <li data-no-instant id=\"%s\" class=\"comment-body comment-parent comment-even\">" +
                "     <div id=\"comment-14321\" class=\"comment-id\">" +
                "     <a href=\"\" target=\"_blank\" rel=\"external nofollow\">" +
                "          <img class=\"avatar\" id=\"img\" src=\"/image/3.jpg\" alt=\"\"/>" +
                "               </a>" +
                "     <div class=\"comment-main\">" +
                "   <a href=\"%s\" target=\"_blank\"" +
                "     rel=\"external nofollow\">%s</a>" +
                "      <div class=\"comment-meta\">" +
                "         <input type=\"hidden\" value=\"\" id=\"savecid\"/>" +
                "     <time class=\"comment-time\">%s</time>&nbsp;&nbsp;&nbsp;" +
                "             <span class=\"comment-reply\">" +
                "           <a id=\"ts-%s\" class=\"ts\" onclick=\"reply(%s)\">回复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>" +
                "   </span>" +
                "     </div>" +
                "   </div>" +
                "        </div>" +
                "     <div><p id=\"comment-%s\" class=\"elsecomment\" style=\"margin-left: 60px\">%s</p></div>" +
                "     </li></ol>";

        List<Comments> commentList = commentDao.findByIdComment(Integer.valueOf(request.getParameter("postid")));
        String all = "";
        for (Comments c : commentList) {
            String each = String.format(commentHtmlTemp, c.getId(), c.getSite(), c.getUser(), c.getDate(), c.getId(), c.getId(), c.getId(), c.getBody());
            all = all + each;
        }
        int size = commentList.size();
        printWriter.write(all + "+-*/" + size);
    }

    @RequestMapping(value = "/comments/{pid}", method = RequestMethod.GET)
    private void comments(@PathVariable("pid") int pid, HttpServletResponse response, HttpServletRequest request) throws Exception {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        int postid = pid;
        PrintWriter printWriter = response.getWriter();
        String commentHtmlTemp = "<ol class=\"comment-list\">" +
                "        <li data-no-instant id=\"%s\" class=\"comment-body comment-parent comment-even\">" +
                "     <div id=\"comment-14321\" class=\"comment-id\">" +
                "     <a href=\"\" target=\"_blank\" rel=\"external nofollow\">" +
                "          <img class=\"avatar\" id=\"img\" src=\"/image/3.jpg\" alt=\"\"/>" +
                "               </a>" +
                "     <div class=\"comment-main\">" +
                "   <a href=\"%s\" target=\"_blank\"" +
                "     rel=\"external nofollow\">%s</a>" +
                "      <div class=\"comment-meta\">" +
                "         <input type=\"hidden\" value=\"\" id=\"savecid\"/>" +
                "     <time class=\"comment-time\">%s</time>&nbsp;&nbsp;&nbsp;" +
                "             <span class=\"comment-reply\">" +
                "           <a id=\"ts-%s\" class=\"ts\" onclick=\"reply(%s)\">回复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>" +
                "   </span>" +
                "     </div>" +
                "   </div>" +
                "        </div>" +
                "     <div><p id=\"comment-%s\" class=\"elsecomment\" style=\"margin-left: 60px\">%s</p></div>" +
                "     </li></ol>";

        List<Comments> commentList = commentDao.findByIdComment(postid);
        String all = "";
        for (Comments c : commentList) {
            String each = String.format(commentHtmlTemp, c.getId(), c.getSite(), c.getUser(), c.getDate(), c.getId(), c.getId(), c.getId(), c.getBody());
            all = all + each;
        }
        int size = commentList.size();
        printWriter.write(all + "+-*/" + size);
        printWriter.close();
    }

//    //文章翻页
//    @RequestMapping(value = "/pages/{now}", method = RequestMethod.GET)
//    private String pages(@PathVariable("now") int now, ModelMap map) {
//        List bkList = postDao.findBkList();
//        List commList = commentDao.findAllComment();
//        List classList = classDao.findAllClass();
//        List allPostList = postDao.findAllPosts();
//        List postList = postDao.findByPage(now);
//        map.addAttribute("bkList", bkList);
//        map.addAttribute("pagenum", postDao.getPageNum());
//        map.addAttribute("classList", classList);
//        map.addAttribute("allPostList", allPostList);
//        map.addAttribute("postList", postList);
//        map.addAttribute("commList", commList);
//        return "index";
//    }

    @RequestMapping(value = "/history", method = RequestMethod.GET)
    private String history(ModelMap map) {
        List<YEAR> year = new LinkedList<YEAR>();
        List<MONTH> month = new LinkedList<MONTH>();
        List<Posts> postList = postDao.findHistory();
        List<POSTDATE> pl = new LinkedList<POSTDATE>();
        for (Posts p : postList) {
            Timestamp time = p.getDate();
            String t = String.valueOf(time);
            System.out.println(t);
            String t1 = t.substring(0, 10);
            String[] t2 = t1.split("-");
            pl.add(new POSTDATE(t2[0], t2[1], t2[2], p.getTitle(), p.getId()));
            if (!year.contains(new YEAR(t2[0]))) { //年份
                year.add(new YEAR(t2[0], t2[1]));
            }
            if (!month.contains(new MONTH(t2[1], t2[0]))) {
                month.add(new MONTH(t2[1], t2[0]));
            }
        }
        map.addAttribute("monthList", month);
        map.addAttribute("yearList", year);
        map.addAttribute("postList", pl);
        return "history";
    }

    //映射到分类
    @RequestMapping(value = "/classify/{code}", method = RequestMethod.GET)
    private String type(@PathVariable("code") int code, ModelMap map) {
        List<Posts> postsList = postDao.findTypePosts(code, 1);
        List<Classify> classList = classDao.findAllClass();
        String tyname = classDao.findClassName(code);
        map.addAttribute("postsList", postsList);
        map.addAttribute("classList", classList);
        map.addAttribute("tyname", tyname);
        return "type";
    }

    @RequestMapping(value = "/link", method = RequestMethod.GET)
    private String link(ModelMap map) {
        List allPostList = postDao.findAllPosts();
        Posts posts = postDao.findOnePost(link_id);
        List commentList = commentDao.findByIdComment(posts.getId());
        map.addAttribute("commentnum", commentList.size());
        map.addAttribute("posts", posts);
        map.addAttribute("commentList", commentList);
        return "miscellaneous";
    }

    @RequestMapping(value = "/about", method = RequestMethod.GET)
    private String about(ModelMap map) {
        List allPostList = postDao.findAllPosts();
        Posts posts = postDao.findOnePost(about_id);
        List commentList = commentDao.findByIdComment(posts.getId());
        map.addAttribute("commentnum", commentList.size());
        map.addAttribute("posts", posts);
        map.addAttribute("commentList", commentList);
        return "miscellaneous";
    }

    //删除文章+id
    @RequestMapping(value = "/delpost/{pid}", method = RequestMethod.GET)
    private String delPost(@PathVariable("pid") int pid, HttpSession session) {
        if (!sessionChecker.online(session)) {
            return "redirect:/login";
        } else {
            postDao.delPost(pid);
            return "redirect:/admin";
        }
    }

    //添加文章
    @RequestMapping(value = "/add", method = RequestMethod.GET)
    private String add(HttpSession session, ModelMap map) {
        try {
            if (sessionChecker.online(session)) {
                List classList = classDao.findAllClass();
                map.addAttribute("classList", classList);
                map.addAttribute("editState", 0);
                return "editadd";
            } else return "redirect:/login";
        } catch (Exception e) {
            return "redirect:/login";
        }
    }

    //所有分类
    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    private String cate(ModelMap map) {
        List<Classify> classList = classDao.findAllClass();
        List<TYPE> types = new LinkedList<TYPE>();
        for (Classify c : classList) {
            int pnum = postDao.findTypePosts(c.getClasscode()).size();
            types.add(new TYPE(c, pnum));
        }
        List<Posts> postList = postDao.findAllPosts();
        map.addAttribute("types", types);
        map.addAttribute("classList", classList);
        map.addAttribute("postList", postList);
        return "categories";
    }

    //删除分类
    @RequestMapping(value = "/delclass/{cid}", method = RequestMethod.GET)
    private String delClass(@PathVariable("cid") int cid, HttpSession session) {
        if (!sessionChecker.online(session)) {
            return "redirect:/login";
        } else {
            classDao.delClass(cid);
            return "redirect:/admin";
        }
    }

    //保存文章
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    private String save(HttpServletRequest request, HttpSession session) {
        try {
            if (!sessionChecker.online(session)) {
                return "redirect:/login";
            }
        } catch (Exception e) {
            return "redirect:/login";
        }
        String date = DateBuilder.formatDate();
        Posts posts = new Posts();
        try {
            request.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String content = request.getParameter("content");
        String title = request.getParameter("title");
        int type = Integer.valueOf(request.getParameter("type"));
        int author = Integer.valueOf(request.getParameter("author"));
        posts.setDelstate(0);
        posts.setType(type);
        posts.setFbanner("/resource/banners/" + (int) (20 * Math.random()) + ".jpg"); //0-100
        posts.setContent(content);
        posts.setReadnum(1);
        posts.setAuthor(author);
        posts.setPart(StringUtil.buildPart(StringUtil.removeHtmlTag(content)));
        posts.setTitle(title);
        posts.setDate(Timestamp.valueOf(date));
        postDao.postsave(posts);
        return "redirect:/admin";
    }

    //文章编辑
    @RequestMapping(value = "/edit/{pid}", method = RequestMethod.GET)
    private String edit(@PathVariable("pid") int pid, ModelMap map, HttpSession session) {
        try {
            if (sessionChecker.online(session)) {
                Posts posts = postDao.findOnePost(pid);
                List classList = classDao.findAllClass();
                map.addAttribute("classList", classList);

                map.addAttribute("post", posts);
                map.addAttribute("editState", 1);
                return "editadd";
            }
        } catch (Exception e) {
            return "redirect:/login";
        }
        return "redirect:/login";
    }

    //文章更新
    @RequestMapping(value = "/update/{pid}", method = RequestMethod.POST)
    private String update(@PathVariable("pid") int pid, HttpServletRequest request, HttpSession session) {
        String date = DateBuilder.formatDate();
        try {
            request.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        try {
            if (sessionChecker.online(session)) {
                String content = request.getParameter("content");
                String title = request.getParameter("title");
                int type = Integer.valueOf(request.getParameter("type"));
                int author = Integer.valueOf(request.getParameter("author"));
                Posts posts = postDao.findOnePost(pid);
                String part = posts.getPart();
                posts.setDelstate(posts.getDelstate());
                posts.setReadnum(posts.getReadnum() == null ? 1 : posts.getReadnum());
                posts.setDate(posts.getDate());
                posts.setFbanner("/resource/banners/" + (int) (20 * Math.random()) + ".jpg"); //0-100
                posts.setContent(content);
                posts.setTitle(title);
                posts.setAuthor(author);
                posts.setType(type);
                posts.setPart(StringUtil.buildPart(StringUtil.removeHtmlTag(content)));
                if (request.getParameter("bk") != null) {
                    posts.setType(2500);
                    posts.setPart(part);
                }
                postDao.updatePost(posts);
                return "redirect:/admin";
            }
        } catch (Exception e) {
            return "redirect:/login";
        }
        return "redirect:/login";
    }

    //文件上传
    @RequestMapping(value = "/fileup", method = RequestMethod.POST)
    private void fileUp(HttpServletRequest request, HttpServletResponse response, String dir) throws Exception {
        FileUpLoader.fileup(request, response);
    }

    //登陆后台
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    private String login() {
        return "login";
    }

    //登陆验证
    @RequestMapping(value = "/admin", method = {RequestMethod.POST, RequestMethod.GET})
    private String admin(HttpServletRequest request, HttpSession session, ModelMap map) throws UnsupportedEncodingException {
        List postList = postDao.findAllPosts();
        List classList = classDao.findAllClass();
        List commentList = commentDao.findAllComment();
        List linkList = linkDao.findAllLinks();
        HibernateSessionFactory.getSession().close();
        request.setCharacterEncoding("UTF-8");
        String user = request.getParameter("user");
        String pwd = request.getParameter("pwd");
        List<User> userList = uesrDao.findUser();
        HibernateSessionFactory.getSession().close();
        //根据session进入后台
        if (user == null || pwd == null) {
            if (!sessionChecker.online(session)) {
                return "login";
            } else {
                map.addAttribute("classList", classList);
                map.addAttribute("postList", postList);
                map.addAttribute("commentList", commentList);
                map.addAttribute("linkList", linkList);
                session.setAttribute(yes, yes);
                return "admin";
            }
        }
        //根据账号密码进入后台
        for (User u : userList) {
            if (u.getName().equals(user) && u.getPassword().equals(pwd)) {
                map.addAttribute("classList", classList);
                map.addAttribute("postList", postList);
                map.addAttribute("commentList", commentList);
                map.addAttribute("linkList", linkList);
                session.setAttribute(yes, yes);
                return "admin";
            }
        }
        return "redirect:/login";
    }

    //添加分类
    @RequestMapping(value = "/addclass", method = RequestMethod.GET)
    private String addclass(HttpSession session) {
        if (session.getAttribute(yes) == null) {
            return "redirect:/login";
        }
        return "addclass";
    }

    //保存分类
    @RequestMapping(value = "/saveclass", method = RequestMethod.POST)
    private String saveClass(HttpServletRequest request, HttpSession session) throws UnsupportedEncodingException {
        if (!sessionChecker.online(session)) {
            return "redirect:/login";
        } else {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            request.setCharacterEncoding("UTF-8");
            Classify classify = new Classify();
            classify.setPostsnum(0);
            classify.setClasscode((int) (Math.random() * Integer.MAX_VALUE));
            classify.setClassname(request.getParameter("name"));
            classify.setClassaddtime(Timestamp.valueOf(df.format(new Date())));
            classDao.saveClass(classify);
            return "redirect:/admin";
        }
    }

    //评论删除
    @RequestMapping(value = "/delcomment/{cid}", method = RequestMethod.GET)
    private String delComment(@PathVariable("cid") int cid, HttpSession session) {
        if (!sessionChecker.online(session)) {
            return "redirect:/login";
        } else {
            commentDao.delComment(cid);
            return "redirect:/admin";
        }
    }

    //修改友情链接
    @RequestMapping(value = "/editlink", method = RequestMethod.GET)
    private String editLink(HttpSession session, ModelMap map) {
        if (sessionChecker.online(session)) {
            Posts post = postDao.findOnePost(link_id);
            map.addAttribute("post", post);
            map.addAttribute("editState", 1);
            map.addAttribute("bk", 1);
            return "editadd";
        }
        return "redirect:/login";
    }

    //修改关于页面
    @RequestMapping(value = "/editabout", method = RequestMethod.GET)
    private String editAbout(HttpSession session, ModelMap map) {
        if (sessionChecker.online(session)) {
            Posts post = postDao.findOnePost(about_id);
            map.addAttribute("bk", 1);
            map.addAttribute("editState", 1);
            map.addAttribute("post", post);
            return "editadd";
        }
        return "redirect:/login";
    }

    //全局搜索
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    private String search(HttpServletRequest request, ModelMap map) throws UnsupportedEncodingException {
        request.setCharacterEncoding("UTF-8");
        String info = request.getParameter("keyword");
        if (info.length() > 0) {
            List<Posts> postList = postDao.search(info);
            List<Classify> classList = classDao.findAllClass();
            map.addAttribute("classList", classList);
            map.addAttribute("keyword", info);
            map.addAttribute("postList", postList);
            return "index";
        }
        return "redirect:/index";
    }

    //按日期查询
    @RequestMapping(value = "/records/{year}/{month}", method = RequestMethod.GET)
    private String records(@PathVariable("year") String year, @PathVariable("month") String month, ModelMap map) {
        String keyword = year + "年 " + month + "月 的文章";
        List<Posts> postList = postDao.findByDate(year, month);
        List<Classify> classList = classDao.findAllClass();
        map.addAttribute("classList", classList);
        map.addAttribute("postList", postList);
        map.addAttribute("keyword", keyword);
        return "records";
    }
}
