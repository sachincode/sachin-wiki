package com.sachin.wiki.service.impl;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.sachin.wiki.dao.WikiCatalogMapper;
import com.sachin.wiki.dao.WikiContentMapper;
import com.sachin.wiki.model.WikiCatalog;
import com.sachin.wiki.model.WikiContent;
import com.sachin.wiki.model.WikiDto;
import com.sachin.wiki.model.ZTreeNode;
import com.sachin.wiki.service.WikiArticleService;
import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.Comparator;
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

    @Override
    public List<ZTreeNode> getCatalogTree() {
        List<ZTreeNode> treeNodes = Lists.newArrayList();
        List<WikiCatalog> catalogs = wikiCatalogMapper.select(new HashMap<String, Object>());
        for (WikiCatalog catalog : catalogs) {
            ZTreeNode node = new ZTreeNode();
            node.setId(catalog.getWikiId());
            node.setpId(catalog.getParentWikiId());
            node.setName(catalog.getArticleTitle());
            treeNodes.add(node);
        }
        Collections.sort(treeNodes, new Comparator<ZTreeNode>() {
            @Override
            public int compare(ZTreeNode o1, ZTreeNode o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });
        return treeNodes;
    }

    @Override
    public List<ZTreeNode> getCatalogTree(long wikiId) {
        List<Long> parentIds = getParentIds(wikiId);
        List<ZTreeNode> treeNodes = getCatalogTree();
        for (ZTreeNode node : treeNodes) {
            if (node.getId() == wikiId) {
                Map<String, String> font = Maps.newHashMap();
                font.put("font-weight", "bold");
                node.setFont(font);
            } else if (parentIds.contains(node.getId())) {
                node.setOpen(true);
            }
        }
        return treeNodes;
    }

    public List<Long> getParentIds(long wikiId) {
        List<Long> ids = Lists.newArrayList();
        long tmpId = wikiId;
        Map<String, Object> params = Maps.newHashMap();
        while (true) {
            params.put("wikiId", tmpId);
            List<WikiCatalog> catalogs = wikiCatalogMapper.select(params);
            if (CollectionUtils.isEmpty(catalogs)) {
                break;
            }
            WikiCatalog catalog = catalogs.get(0);
            ids.add(catalog.getParentWikiId());
            tmpId = catalog.getParentWikiId();
            if (catalog.getParentWikiId() <= 0) {
                break;
            }
        }
        return ids;
    }
}
