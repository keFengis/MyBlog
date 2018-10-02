package org.flydog.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateBuilder {
    public static String formatDate() {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return df.format(new Date());
    }
}
