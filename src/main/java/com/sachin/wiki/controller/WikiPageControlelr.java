package com.sachin.wiki.controller;

import com.sachin.wiki.model.WikiDto;
import com.sachin.wiki.model.ZTreeNode;
import com.sachin.wiki.service.WikiArticleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author shicheng.zhang
 * @date 16-9-24
 * @time 下午10:07
 * @Description:
 */
@Controller
public class WikiPageControlelr {

    @Resource
    private WikiArticleService wikiArticleService;

    @RequestMapping("index.htm")
    public ModelAndView hello() {
        return new ModelAndView("wiki/test/ideakey").addObject("page_title", "测试").addObject("author", "张世程");
    }

    @RequestMapping("viewPage.do")
    public ModelAndView viewPage(Long wikiId) {
        WikiDto wiki = wikiArticleService.getWikiByWikiId(wikiId);
        ModelAndView modelAndView = new ModelAndView("wiki/template");
        if (wiki != null) {
            modelAndView.addObject("wiki_content", wiki.getContent());
            modelAndView.addObject("page_title", wiki.getArticleTitle());
            modelAndView.addObject("author", wiki.getArticleAuthor());
            modelAndView.addObject("parent_id", wiki.getParentWikiId());
        } else {
            modelAndView.addObject("wiki_content", "<label><font color=\"red\">wiki不存在</font></label>");
        }
        return modelAndView;
    }

    @RequestMapping("getCatalogTree.do")
    @ResponseBody
    public List<ZTreeNode> getCatalogTree(@RequestParam(required = false)Long wikiId) {
        if (wikiId == null) {
            return wikiArticleService.getCatalogTree();
        } else {
            return wikiArticleService.getCatalogTree(wikiId);
        }
    }
}
