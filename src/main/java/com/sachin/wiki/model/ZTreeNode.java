package com.sachin.wiki.model;

import java.util.Map;

/**
 * @author shicheng.zhang
 * @date 17-3-13
 * @time 下午8:30
 * @Description:
 */
public class ZTreeNode {

    private long id;
    private long pId;
    private String name;
    private boolean open;
    private boolean isParent;
    private Map<String, String> font;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getpId() {
        return pId;
    }

    public void setpId(long pId) {
        this.pId = pId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return open;
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public boolean isParent() {
        return isParent;
    }

    public void setParent(boolean isParent) {
        this.isParent = isParent;
    }

    public Map<String, String> getFont() {
        return font;
    }

    public void setFont(Map<String, String> font) {
        this.font = font;
    }
}
