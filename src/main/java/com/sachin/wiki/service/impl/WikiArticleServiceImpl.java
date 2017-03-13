package com.sachin.wiki.service.impl;

import com.sachin.wiki.dao.WikiCatalogMapper;
import com.sachin.wiki.dao.WikiContentMapper;
import com.sachin.wiki.model.WikiCatalog;
import com.sachin.wiki.model.WikiContent;
import com.sachin.wiki.model.WikiDto;
import com.sachin.wiki.service.WikiArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author shicheng.zhang
 * @date 16-9-25
 * @time 下午9:32
 * @Description:
 */
@Service
public class WikiArticleServiceImpl implements WikiArticleService {

    private static final Logger logger = LoggerFactory.getLogger(WikiArticleServiceImpl.class);

    @Resource
    private WikiContentMapper wikiContentMapper;
    @Resource
    private WikiCatalogMapper wikiCatalogMapper;

    @Override
    public WikiDto getWikiByWikiId(long wikiId) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("wikiId", wikiId);
        List<WikiCatalog> wikiCatalogs = wikiCatalogMapper.select(params);
        List<WikiContent> wikiContents = wikiContentMapper.select(params);
        if (wikiCatalogs.size() == 0 || wikiContents.size() == 0) {
            logger.warn("wiki 不存在. wikiId: {}", wikiId);
            return null;
        }
        WikiCatalog catalog = wikiCatalogs.get(0);
        WikiDto wikiDto = new WikiDto();
        wikiDto.setWikiId(catalog.getWikiId());
        wikiDto.setArticleTitle(catalog.getArticleTitle());
        wikiDto.setArticleAuthor(catalog.getArticleAuthor());
        wikiDto.setParentWikiId(catalog.getParentWikiId());
        wikiDto.setContent(wikiContents.get(0).getContent());
        return wikiDto;
    }
}
