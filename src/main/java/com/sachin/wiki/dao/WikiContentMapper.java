package com.sachin.wiki.dao;

import java.util.List;
import java.util.Map;

import com.sachin.wiki.model.WikiContent;

/**
 * @author shicheng.zhang
 * @date 17-3-12
 * @time 下午12:55
 * @Description:
 */
public interface WikiContentMapper {

    List<WikiContent> select(Map<String, Object> params);

    int selectCount(Map<String, Object> params);

    int insert(WikiContent wikiArticle);

    int update(WikiContent wikiArticle);
}
