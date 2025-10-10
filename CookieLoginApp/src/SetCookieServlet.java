import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SetCookieServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Create cookies for 4 users
        Cookie c1 = new Cookie("user1", "pwd1");
        Cookie c2 = new Cookie("user2", "pwd2");
        Cookie c3 = new Cookie("user3", "pwd3");
        Cookie c4 = new Cookie("user4", "pwd4");

        // Add cookies to response
        response.addCookie(c1);
        response.addCookie(c2);
        response.addCookie(c3);
        response.addCookie(c4);

        out.println("<h3>Cookies for users created successfully!</h3>");
        out.println("<a href='Login.html'>Go to Login Page</a>");
    }
}
