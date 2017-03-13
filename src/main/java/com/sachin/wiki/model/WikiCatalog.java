package com.sachin.wiki.model;

import java.util.Date;

/**
 * @author shicheng.zhang
 * @date 17-3-12
 * @time 下午12:11
 * @Description:
 */
public class WikiCatalog {
    /** 主键 **/
    private Long id;
    /** wikiid **/
    private Long wikiId;
    /** 文章标题 **/
    private String articleTitle;
    /** 文章作者 **/
    private String articleAuthor;
    /** 父文章wiki_id **/
    private Long parentWikiId;
    /** 创建时间 **/
    private Date createTime;
    /** 修改时间 **/
    private Date updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "WikiCatalog{" +
                "id=" + id +
                ", wikiId=" + wikiId +
                ", articleTitle='" + articleTitle + '\'' +
                ", articleAuthor='" + articleAuthor + '\'' +
                ", parentWikiId=" + parentWikiId +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
