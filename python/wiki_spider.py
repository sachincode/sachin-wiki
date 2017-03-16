# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os
import requests
import sys
from bs4 import BeautifulSoup
import random
import time

reload(sys)
sys.setdefaultencoding("utf-8")

host = 'http://wiki.corp.qunar.com'
url = 'http://wiki.corp.qunar.com/pages/viewpage.action?pageId={}'
tree_url = 'http://wiki.corp.qunar.com/plugins/pagetree/naturalchildren.action?decorator=none&excerpt=false&' \
           'sort=position&reverse=false&disableLinks=false&hasRoot=true&pageId={}&treeId=0&startDepth=0'
cookies = {'JSESSIONID': '508793AA9D141A86670CCE380E9C7377', 'doc-sidebar': '233px'}
project_path = '/home/shichengzhang/github'
img_path = project_path + '/sachin-wiki/src/main/webapp/download/attachments/'


def get_wiki(wiki_id):
    """
    根据wiki_id拿到 标题和主体内容, 保存图片
    :param wiki_id:
    :return:
    """
    resp = requests.get(url.format(wiki_id), cookies=cookies)
    # resp.encoding = 'utf-8'
    soup = BeautifulSoup(resp.text, 'html.parser')
    title = soup.title.string.split('-')[0].strip()
    print wiki_id, title
    # 解析wiki文章内容
    tag = soup.find(id="content")
    content_tags = tag.find_all('div', class_='wiki-content')
    if len(content_tags) != 1:
        print Exception("wiki-content html tag 数目不等于1.解析到{}个".format(len(content_tags)))
    # 解析文章里的图片链接并下载保存
    img_srcs = []
    imgs = content_tags[0].find_all('img')
    for img in imgs:
        src = img.attrs.get('src')
        print src
        if src:
            try:
                name = src.split('?')[0].split('/')[-1]
                r = requests.get(host + src, cookies=cookies)
                __save_image(wiki_id, name, r.content)
                img_srcs.append(src.split('?')[0])
            except:
                print 'error img: {}'.format(src)
    # 解析目录tree的父子关系
    tag = soup.find(id="splitter-sidebar")
    tree = tag.find_all('div', class_='plugin_pagetree')
    field_set = tree[0].find_all('fieldset', class_='hidden')
    if len(field_set) != 2:
        raise Exception("hidden fieldset tag 数目不等于2.解析到{}个".format(len(field_set)))
    fields = field_set[1].find_all('input')
    # print fields
    ancestors = []
    for one in fields:
        attrs = one.attrs
        if attrs['name'] == 'ancestorId':
            ancestors.append(attrs['value'])
    print 'ancestors: ', ancestors
    return title, content_tags[0].prettify(), img_srcs


def __save_image(wiki_id, name, content):
    path = img_path + str(wiki_id)
    if not os.path.exists(path):
        os.makedirs(path)
    path_name = path + '/' + name
    if os.path.exists(path_name):
        print Exception('存在同名文件. file: {}'.format(path_name))
    f = open(path_name, 'w')
    f.write(content)
    f.close()


def get_tree(ancestors):
    # &ancestors=118433927&ancestors=87342584&ancestors=87335158
    t_url = tree_url.format(ancestors[-1])
    for one in ancestors:
        t_url = t_url + '&ancestors={}'.format(one)
    resp = requests.get(t_url, cookies=cookies)
    print resp.text
    soup = BeautifulSoup(resp.text, 'html.parser')


__plus_img = '/images/icons/tree_plus.gif'
__square_img = '/images/icons/tree_square.gif'
__child_span_prefix = 'childrenspan'


def get_children_id_tree(wiki_id):
    """ 获取wiki_id下的所有子目录结构
    目录：
    97131505
    - 100039273 qta反作弊
    -- 98578544 qta同步监控报警处理
    -- 99769907 qta订单同步
    -- 100794613 qta订单同步新算法
    - 100039275 团购反作弊
    - 100036031 常用接口地址
    - 97131509 点评反作弊
    - 100248364 自助处罚
    -- 100248367 酒店上下线管理
    返回：
    {
      97131505: {
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
    :param wiki_id: 父wiki_id
    :return:
    """
    od = dict()
    print wiki_id
    __get_children_id(wiki_id, od, 1)
    return {wiki_id: od}


def __get_children_id(wiki_id, od, level=1):
    r = random.uniform(1, 3)
    time.sleep(r)
    resp = requests.get(tree_url.format(wiki_id), cookies=cookies)
    soup = BeautifulSoup(resp.text, 'html.parser')
    lis = soup.find_all('li')
    for li in lis:
        img_src = li.find('img').attrs['src']
        span_id = li.find('span')['id']
        if span_id.startswith(__child_span_prefix):
            ch_id = span_id.split('-')[0].replace(__child_span_prefix, '')
        else:
            raise Exception('error span id: {}'.format(span_id))
        title = li.find('span').find('a').string
        if img_src == __plus_img:
            # 还有子节点，开始递归查询子节点
            print __get_prefix(level), ch_id, title
            ch_od = dict()
            od[ch_id] = ch_od
            __get_children_id(ch_id, ch_od, level + 1)
        elif img_src == __square_img:
            # 已是最低层节点，结束递归
            print __get_prefix(level), ch_id, title
            od[ch_id] = None
        else:
            raise Exception('error tree img src: {}'.format(img_src))


def __get_prefix(level):
    return '-' * level


def __write_file(file_name, content):
    f = open(file_name, "w")
    f.write(content)
    f.close()


def save_wiki_file(wiki_id):
    title, content, img_srcs = get_wiki(wiki_id)
    content = '<div class="col-xs-12">\n' + content + "</div>\n#include('inc/script.vm')"
    file_name = project_path + '/sachin-wiki/src/main/webapp/WEB-INF/vm/wiki/test/{}.vm'.format(wiki_id)
    __write_file(file_name, content)


if __name__ == '__main__':
    get_wiki(63243146)
    # an = ['118433927', '87342584', '87335158']
    # get_tree(an)
    # print get_children_id_tree(98578544)
