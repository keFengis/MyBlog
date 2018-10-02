package org.flydog.util;

import javax.servlet.http.HttpSession;

public class SessionChecker {
    String yes = "yes";

    public boolean online(HttpSession session) {
        if (session.getAttribute(yes) != null)
            return true;
        return false;
    }

}
