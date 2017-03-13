package com.sachin.wiki.model;

import java.util.Date;

/**
 * @author shicheng.zhang
 * @date 17-3-12
 * @time 下午12:13
 * @Description:
 */
public class WikiContent {
    /** 主键 **/
    private Long id;
    /** wikiid **/
    private Long wikiId;
    /** 文章内容(html) **/
    private String content;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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
        return "WikiContent{" +
                "id=" + id +
                ", wikiId=" + wikiId +
                ", content='" + content + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
