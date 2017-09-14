//先定义一个主对象
var DropSelectMenu = {
	//存入顶部标题
	 top_titles : [],
	 //存储下面的标题
	 bottom_titles : [],
	 //记录顶上的索引
	 select_top : 0,
	 //记录底部选中的记录，数组的底部个数 = 顶部数组的个数	 
	 select_bottom:[],
	 //存储外部传过来的容器
	 menuContainer:null,
	 //处理顶部标题的数据的函数
	setTitleTop : function(titles){
		this.top_titles = titles
         this.renderTopUI();//渲染
		var self = this;
        $('#top_box li').click(function(){
        	if($(this).index() == 0){
        		self.selectReset()
        	}
        //三角型的反转效果
		  if(self.select_top != 0 && self.select_top == $(this).index()&& $('.type_all').eq($(this).index()).css('display') != 'none'){
		  	      $('.type_all').eq($(this).index()).css('display','none')
		  	      $("#top_box li img").eq($(this).index()).removeClass()
		  	      return;
		  }
		   $("#top_box li img").removeClass()
		  $("#top_box li img").eq($(this).index()).addClass('retate')
          $('.type_all').css('display','none')
          $('.type_all').eq($(this).index()).css('display','block')
        
        //记录顶部到底选择了哪一个
        self.select_top = $(this).index()
         })
		$('#top_box li').eq(0).click()  //主动调用一次点击事件
	},
	renderTopUI:function(){
	   //制作点击头部标题 底下的容器
		var top_box = '<ul id="top_box">';
		var bot_html = ''
		$.each(this.top_titles, function(k,v) {
			top_box += '<li><span>'+v+'</span>&nbsp;<img src="img/sanjiao.png" style="width:10px;height:10px;"/></li>'
			bot_html += '<div class="type_all" style="widht:100%;overflow:hidden;"></div>'
		});
		top_box += '</ul>'
		this.menuContainer.html(top_box+bot_html);//渲染顶部菜单
		$("#top_box li img").eq(0).css('display','none')
		
		
	},
	renderBottomUI:function(){
		
		var self = this
		$.each(self.bottom_titles, function(k,v) {			
			var html = '<div class="type_fen" id="type_bottom'+k+'" >';
			var html_ = $('.type_all').eq(k)
			var reset = '<div class="type_res"><p class="select_reset" reset_index = '+k+'>恢复默认</p></div>'
			self.select_bottom = self.select_bottom.concat(v[0])
	        $.each(v, function(kk,vv) {
	        	html += '<span>'+vv.key+'</span>'
	        });
	         html += '</div>'
	         if(k == 0){
	         	reset = ''
	         }
			html_.html(html + reset)
		});
		//页面记载完毕
		$(function(){
			var self = this
			$(".select_reset").click(function(){
			var seletct_index = $(this).attr('reset_index')
			   //alert($(this).attr('reset_index')) 
			$($('.type_fen').eq(seletct_index).children('span')).css('color','#000')
			
			$($('.type_fen').eq(seletct_index).children('span').get(0)).css('color','red')
			
	        DropSelectMenu.select_bottom[seletct_index] = DropSelectMenu.bottom_titles[seletct_index][0]
	        //菜单还原
		    $("#top_box li span").eq(seletct_index).html(DropSelectMenu.top_titles[seletct_index])
		    
			$('.type_all').eq(seletct_index).css('display','none')
			
		})
			
			
		})
		
	},
	//处理下面传过来的数据
	setTitleBottom:function(titles,callback){
		this.bottom_titles = titles;
		this.renderBottomUI();//渲染底下菜单
		//console.log(self.select_bottom)
		this.selectReset()//调用重置函数
	     var that = this;
		 $('.type_fen span').click(function(){
		 	$("#top_box li img").removeClass()
        	$('#type_bottom'+that.select_top+' span').css('color','#000')
        	$('#type_bottom'+that.select_top+' span').eq($(this).index()).css('color','red')
         	//将点击选中的记录到选中大数组里面去
        	var select_big = that.bottom_titles[that.select_top][$(this).index()]
        	that.select_bottom[that.select_top] = select_big
        	 	// 刚改顶部的标题
        	$("#top_box li span").eq(that.select_top).html(select_big.key)
        	
        	if(typeof callback === 'function'){//回调函数
        		callback(that.select_bottom)
        	}
        	$('.type_all').eq(that.select_top).css('display','none')
        })
		 

		
	},
	selectReset:function(){//重置函数
		var self = this;
		//点击当前项字体变红
		$.each($(".type_fen"), function(k,v) {
			$($(this).children('span')).css('color','#000')
			$($(this).children('span').get(0)).css('color','red')
		});
		//菜单内容还原
		$.each(this.bottom_titles,function(k,v){
        	self.select_bottom[k] = v[0]
		})
		//同上
		$.each(this.top_titles,function(k,v){
        	$("#top_box li span").eq(k).html(v)
		})
	}
	
	
	
	
	
	
};

