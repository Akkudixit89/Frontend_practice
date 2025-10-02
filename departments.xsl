<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Department Information</title>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
      </head>
      <body>
        <h1>Department Information</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>HOD</th>
            <th>Programs</th>
            <th>Focus Areas</th>
          </tr>
          <xsl:for-each select="departments/department">
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="hod"/></td>
              <td><xsl:value-of select="programs"/></td>
              <td><xsl:value-of select="focus"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <p>Visit our official site: <a href="https://psitkanpur.ac.in">psitkanpur.ac.in</a></p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
