# DSXDropSelectMenu

## usage
```js
//容器
DropSelectMenu.menuContainer = $('#singer_box')
//顶部菜单title
DropSelectMenu.setTitleTop(['全部','费用','类型','风格']);
//下拉的菜单title
DropSelectMenu.setTitleBottom([[		
   ],[
        {'key':'全部','value':'0'},{'key':'5万以下','value':'1'},
        {'key':'5-10万','value':'2'},{'key':'10-20万','value':'3'},
	{'key':'20-50万','value':'4'},{'key':'50-100万','value':'5'},
	{'key':'100万以上','value':'6'}		
    ],[
	{'key':'全部类型','value':'-1'},{'key':'女歌手','value':'0'},
	{'key':'男歌手','value':'1'},{'key':'组合','value':'2'}		
    ],[
	{'key':'流行','value':'1'},{'key':'R&B','value':'2'},
	{'key':'摇滚','value':'3'},{'key':'古典','value':'4'},
	{'key':'舞曲','value':'5'},{'key':'民谣','value':'6'},
	{'key':'中国风','value':'7'}		
      ]],function(index){
	   console.log(index)
			
      });
```

---

![image](https://github.com/dengshangxun94/DSXDropSelectMenu/blob/master/select_demo.gif)
