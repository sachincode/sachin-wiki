# -*- coding: utf-8 -*-

from __future__ import unicode_literals
import MySQLdb
import sys

reload(sys)
sys.setdefaultencoding("utf-8")


def get_connection():
    connection = MySQLdb.Connect(
        host='127.0.0.1',
        port=3306,
        user='sachin_w',
        passwd='sachin',
        db='sachin_wiki',
        charset='utf8'
    )
    return connection


###########################################
# wiki_catalog
###########################################


def save_catalog(wiki_id, article_title, parent_wiki_id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        insert ignore into wiki_catalog(wiki_id,article_title,parent_wiki_id,create_time,update_time)
        VALUES (%s,%s,%s, now(), now())
    '''
    cursor.execute(sql, (wiki_id, article_title, parent_wiki_id))
    connection.commit()
    cursor.close()
    connection.close()


def update_catalog_title(wiki_id, article_title):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        update wiki_catalog set article_title = %s WHERE wiki_id = %s
    '''
    cursor.execute(sql, (article_title, wiki_id))
    connection.commit()
    cursor.close()
    connection.close()


def query_catalog(wiki_id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        select * from wiki_catalog where wiki_id = %s
    '''
    cursor.execute(sql, (wiki_id, ))
    out = cursor.fetchall()
    cursor.close()
    connection.close()
    return out


###########################################
# wiki_content
###########################################


def save_content(wiki_id, content):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        insert ignore into wiki_content(wiki_id,content,create_time,update_time)
        VALUES (%s, %s, now(), now())
    '''
    cursor.execute(sql, (wiki_id, content))
    connection.commit()
    cursor.close()
    connection.close()


def update_content(wiki_id, content):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        update wiki_content set content = %s WHERE wiki_id = %s
    '''
    cursor.execute(sql, (content, wiki_id))
    connection.commit()
    cursor.close()
    connection.close()


def query_content(wiki_id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        select * from wiki_content where wiki_id = %s
    '''
    cursor.execute(sql, (wiki_id, ))
    out = cursor.fetchall()
    cursor.close()
    connection.close()
    return out


###########################################
# wiki_img_src
###########################################


def save_img_src(wiki_id, img_src_list):
    if not img_src_list:
        return
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        insert ignore into wiki_img_src(wiki_id,img_src,create_time,update_time)
        VALUES (%s, %s, now(), now())
    '''
    for img_src in img_src_list:
        cursor.execute(sql, (wiki_id, img_src))
    connection.commit()
    cursor.close()
    connection.close()


def delete_img_src(wiki_id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        delete from wiki_img_src WHERE wiki_id = %s
    '''
    cursor.execute(sql, (wiki_id, ))
    connection.commit()
    cursor.close()
    connection.close()


def query_img_src(wiki_id):
    connection = get_connection()
    cursor = connection.cursor()
    sql = '''
        select * from wiki_img_src where wiki_id = %s
    '''
    cursor.execute(sql, (wiki_id, ))
    out = cursor.fetchall()
    cursor.close()
    connection.close()
    return out
