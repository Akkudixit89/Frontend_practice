import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String userId = request.getParameter("userid");
        String password = request.getParameter("password");

        Cookie[] cookies = request.getCookies();
        boolean validUser = false;

        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals(userId) && c.getValue().equals(password)) {
                    validUser = true;
                    break;
                }
            }
        }

        if (validUser) {
            out.println("<h3>Login Successful! Welcome, " + userId + "</h3>");
        } else {
            out.println("<h3>Invalid Login! Try again.</h3>");
            out.println("<a href='Login.html'>Back to Login</a>");
        }
    }
}
