<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0" xmlns:fn="http://www.w3.org/2005/xpath-functions" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:cnc="cnc">

    <xsl:output method="html" encoding="UTF-8" media-type="application/html" />

    <xsl:template match="texts-placeholder">
        <xsl:copy-of select="document('texts/lyr-3-31.html')"/>
        <xsl:copy-of select="document('texts/lyr-3-32.html')"/>
        <xsl:copy-of select="document('texts/lyr-3-33.html')"/>
    </xsl:template>

    <!--
         Keep attributes and nodes not matched otherwise (i.e. do not only take value).
         This allows XML/HTML formatting of the input to be forwarded to the edition.
    -->
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>  
    </xsl:template>

</xsl:stylesheet>