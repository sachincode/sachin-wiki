# -*- coding: utf-8 -*-

from __future__ import unicode_literals
import sys
import wiki_dao
import wiki_spider
import random
import time

reload(sys)
sys.setdefaultencoding("utf-8")


def get_and_save_wiki(wiki_id, parent_wiki_id=0):
    """
    爬取wiki_id及其子wiki的内容
    :param wiki_id:
    :param parent_wiki_id: wiki_id的父目录wiki的id，用于维护目录结构
    :return:
    """
    title, content, img_srcs = wiki_spider.get_wiki(wiki_id)
    # 获取子目录并存储DB
    dir_dict = wiki_spider.get_children_id_tree(wiki_id)
    catalog_list = []  # (wiki_id, article_title, parent_wiki_id)
    if len(dir_dict.get(wiki_id)) == 0:  # 没有子目录, 直接存储当前
        catalog_list.append((wiki_id, title, parent_wiki_id))
    else:  # 递归构建目录详情
        __build_catalog(dir_dict, parent_wiki_id, catalog_list)
    print catalog_list
    print zip(*catalog_list)[0]
    print '开始保存目录结构....'
    for one in catalog_list:
        wiki_dao.save_catalog(one[0], one[1], one[2])
    wiki_dict = {wiki_id: (title, content, img_srcs)}
    print '开始获取wiki内容....'
    for one in catalog_list:
        if str(wiki_id) == str(one[0]):
            continue
        sub_wiki = wiki_spider.get_wiki(one[0])
        print one[0], sub_wiki[0]
        wiki_dict[one[0]] = sub_wiki
        r = random.uniform(1, 3)
        time.sleep(r)
    for k, v in wiki_dict.iteritems():
        wiki_dao.update_catalog_title(k, v[0])
        wiki_dao.save_content(k, v[1])
        wiki_dao.save_img_src(k, v[2])


def __build_catalog(dir_dict, parent_wiki_id, catalog_list):
    for k, v in dir_dict.iteritems():
        if v:
            if isinstance(v, dict):
                catalog_list.append((k, '', parent_wiki_id))
                __build_catalog(v, k, catalog_list)
            else:
                raise Exception("类型错误： {}".format(v))
        else:
            catalog_list.append((k, '', parent_wiki_id))


def save_or_update_single_wiki(wiki_id):
    """
    保存或更新一个单独的wiki，不会更新其子wiki
    此wiki会设置其默认父wiki为根0
    :param wiki_id:
    :return:
    """
    wiki_dao.delete_img_src(wiki_id)
    title, content, img_srcs = wiki_spider.get_wiki(wiki_id)
    out = wiki_dao.query_catalog(wiki_id)
    if out:
        wiki_dao.update_catalog_title(wiki_id, title)
        print 'update_catalog_title'
    else:
        wiki_dao.save_catalog(wiki_id, title, 0)
        print 'save_catalog'
    out = wiki_dao.query_content(wiki_id)
    if out:
        wiki_dao.update_content(wiki_id, content)
        print 'update_content'
    else:
        wiki_dao.save_content(wiki_id, content)
        print 'save_content'
    wiki_dao.save_img_src(wiki_id, img_srcs)


def __test():
    dir_dict = {
        '97131505': {
            '100248364': {
                '100248367': None
            },
            '100036031': None,
            '100039275': None,
            '97131509': None,
            '100039273': {
                '99769907': None,
                '100794613': None,
                '98578544': None
            }
        }
    }
    catalog_list = []
    __build_catalog(dir_dict, 0, catalog_list)
    print catalog_list

if __name__ == '__main__':
    get_and_save_wiki(64813216, 63243065)
    # save_or_update_single_wiki(63243093)
