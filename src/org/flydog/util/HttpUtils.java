package org.flydog.util;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;

public class HttpUtils {
    /**
     * 向指定URL发送GET方法的请求
     */
    public static String Get(String url) {
        BufferedReader in = null;
        try {
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            connection.setConnectTimeout(5000);
            connection.setReadTimeout(5000);
            // 建立实际的连接
            connection.connect();
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuffer sb = new StringBuffer();
            String line;
            while ((line = in.readLine()) != null) {
                sb.append(line);
            }
            return sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 使用finally块来关闭输入流
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return null;
    }

    /**
     * 发送HttpPost请求
     *
     * @param strURL 服务地址
     * @param params
     * @return 成功:返回json字符串<br/>
     */
    public static String Post(String strURL, Map<String, String> params) {
        try {
            URL url = new URL(strURL);// 创建连接
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoOutput(true);
            connection.setDoInput(true);
            connection.setUseCaches(false);
            connection.setInstanceFollowRedirects(true);
            connection.setRequestMethod("POST"); // 设置请求方式
            connection.setRequestProperty("Accept", "application/json"); // 设置接收数据的格式
            connection.setRequestProperty("Content-Type", "application/json"); // 设置发送数据的格式
            connection.connect();
            OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream(), "UTF-8"); // utf-8编码
            //out.append(JSONObject.toJSONString(params));
            out.flush();
            out.close();
            int code = connection.getResponseCode();
            InputStream is = null;
            if (code == 200) {
                is = connection.getInputStream();
            } else {
                is = connection.getErrorStream();
            }
            // 读取响应
            int length = (int) connection.getContentLength();// 获取长度
            if (length != -1) {
                byte[] data = new byte[length];
                byte[] temp = new byte[512];
                int readLen = 0;
                int destPos = 0;
                while ((readLen = is.read(temp)) > 0) {
                    System.arraycopy(temp, 0, data, destPos, readLen);
                    destPos += readLen;
                }
                String result = new String(data, "UTF-8"); // utf-8编码
                return result;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "error"; // 自定义错误信息
    }


    public static void main(String[] a) {
        String s = "http://music.163.com/api/search/get/web?&s=fa&type=1&offset=0&total=true&limit=100";
        Map<String, String> para = new HashMap<String, String>();
        para.put("s", "666");
        para.put("type", "1");
        para.put("offset", "0");
        para.put("total", "true");
        para.put("limit", "100");
//
//        //map->jsonString
//        String jsonStr = JSONObject.toJSONString(para);
//        System.out.println(jsonStr);
//        //json->map->value
//        String re = ((Map)JSONValue.parse(jsonStr)).get("limit").toString();
//        System.out.println(re);
//        //test
//        //发送post请求
        String json = Post(s, para);
        //远程服务器返回的json字符串解析成map
        Map m = (Map) JSONValue.parse(json);
        JSONObject jsonObject = new JSONObject();
//        JSONValue.
        Map f = (Map) m.get("result");
        String ss = f.get("songs").toString();
        System.out.println(ss);
    }
}
