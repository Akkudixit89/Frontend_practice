<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Institute Departments</title>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="institute/name"/></h1>
          <p class="subtitle">Departmental Information</p>
        </div>

        <div class="hero">
          <p>Welcome to our Institute! Below is the departmental information.</p>
        </div>

        <div class="list">
          <h3>Departments</h3>
          <table class="dept-table">
            <tr>
              <th>Title</th>
              <th>HOD</th>
              <th>Programs</th>
              <th>Focus Areas</th>
            </tr>
            <xsl:for-each select="institute/departments/department">
              <tr>
                <td><xsl:value-of select="title"/></td>
                <td><xsl:value-of select="hod"/></td>
                <td><xsl:value-of select="programs"/></td>
                <td><xsl:value-of select="focus"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>

        <div class="contact">
          <p>Visit our official site: 
            <a href="https://psitkanpur.ac.in" target="_blank">psitkanpur.ac.in</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
