package com.sachin.wiki.service;

import com.sachin.wiki.model.WikiDto;

/**
 * @author shicheng.zhang
 * @date 16-9-25
 * @time 下午9:31
 * @Description:
 */

public interface WikiArticleService {

    WikiDto getWikiByWikiId(long wikiId);

}
