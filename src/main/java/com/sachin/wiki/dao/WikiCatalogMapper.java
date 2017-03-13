package com.sachin.wiki.dao;

import java.util.List;
import java.util.Map;

import com.sachin.wiki.model.WikiCatalog;

/**
 * @author shicheng.zhang
 * @date 17-3-12
 * @time 下午12:51
 * @Description:
 */
public interface WikiCatalogMapper {

    List<WikiCatalog> select(Map<String, Object> params);

    int selectCount(Map<String, Object> params);

    int insert(WikiCatalog wikiArticle);

    int update(WikiCatalog wikiArticle);
}
