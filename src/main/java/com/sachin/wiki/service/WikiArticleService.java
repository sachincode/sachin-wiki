package com.sachin.wiki.service;

import com.sachin.wiki.model.WikiDto;
import com.sachin.wiki.model.ZTreeNode;

import java.util.List;

/**
 * @author shicheng.zhang
 * @date 16-9-25
 * @time 下午9:31
 * @Description:
 */
public interface WikiArticleService {

    /**
     * 根据wikiId获取wiki详情内容
     * @param wikiId
     * @return
     */
    WikiDto getWikiByWikiId(long wikiId);

    /**
     * 获取整个Wiki的目录结构
     * @return
     */
    List<ZTreeNode> getCatalogTree();

    /**
     * 根据wikiId获取整个Wiki的目录结构, 当前wiki的路径会设置为展开状态
     * @param wikiId
     * @return
     */
    List<ZTreeNode> getCatalogTree(long wikiId);

}
