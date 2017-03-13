package com.sachin.wiki.model;

/**
 * @author shicheng.zhang
 * @date 17-3-12
 * @time 下午10:47
 * @Description:
 */
public class WikiDto {

    /** wikiid **/
    private Long wikiId;
    /** 文章标题 **/
    private String articleTitle;
    /** 文章作者 **/
    private String articleAuthor;
    /** 父文章wiki_id **/
    private Long parentWikiId;
    /** 文章内容(html) **/
    private String content;

    public Long getWikiId() {
        return wikiId;
    }

    public void setWikiId(Long wikiId) {
        this.wikiId = wikiId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleAuthor() {
        return articleAuthor;
    }

    public void setArticleAuthor(String articleAuthor) {
        this.articleAuthor = articleAuthor;
    }

    public Long getParentWikiId() {
        return parentWikiId;
    }

    public void setParentWikiId(Long parentWikiId) {
        this.parentWikiId = parentWikiId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "WikiDto{" +
                "wikiId=" + wikiId +
                ", articleTitle='" + articleTitle + '\'' +
                ", articleAuthor='" + articleAuthor + '\'' +
                ", parentWikiId=" + parentWikiId +
                ", content='" + content + '\'' +
                '}';
    }
}
