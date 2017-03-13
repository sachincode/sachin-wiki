use sachin_wiki;
set names utf8mb4;

DROP TABLE IF EXISTS wiki_catalog;

CREATE TABLE wiki_catalog (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `wiki_id` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'wiki id',
  `article_title` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '文章标题',
  `article_author` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '文章作者',
  `parent_wiki_id` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '父文章wiki_id',
  `create_time` DATETIME NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_wiki_id` (`wiki_id`),
  KEY `idx_article_title` (`article_title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='wiki文章目录表';

DROP TABLE IF EXISTS wiki_content;

CREATE TABLE wiki_content (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `wiki_id` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'wiki id',
  `content` TEXT COMMENT '文章内容(html)',
  `create_time` DATETIME NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_wiki_id` (`wiki_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='wiki文章内容表';


CREATE TABLE wiki_img_src (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `wiki_id` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT 'wiki id',
  `img_src` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'wiki中img路径',
  `create_time` DATETIME NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_wiki_id` (`wiki_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='wiki中img路径表';