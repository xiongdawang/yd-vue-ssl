import utils from './utils';

var timer = null;
xtag.register('x-praise', {
	lifecycle: {
		created: function() {
			console.log('created');
		}
	},
	content: function() {/*
		<div class="hand" id="hand">
			<div class="finger1"></div>
			<div class="finger2 shade"></div>
			<div class="finger3 shade"></div>
			<div class="finger4 shade"></div>
			<div class="finger5 shade"></div>
		</div>
		<div id="js-add" class="add">+1</div>
	*/},
	methods: {
		
	},
	events: {
		tap: function() {
			console.log('events');
			clearTimeout(timer);
			timer=setTimeout(function() {
				console.log("utils:", utils);
				if(this.num<10){
					$('#js-add').addClass('on');
					// this.element.css('webkit-filter',"grayscale(0)");
					this.num = utils.add(this.num);
					console.log(this.num);
					setTimeout(function(){
						$('#js-add').removeClass('on');
					},1000);
					axios.get('/index/update')
		  			.then(function (response) {
			    		console.log(response);
			    		var result = response.data;
			    		if(result.success) {
			    			console.log('点赞成功')
			    		} else {
			    			console.log('点赞失败')
			    		}
  				}).catch(function (error) {
			   		console.log(error);
				})
				}else{
					this.num = 0;
					// this.element.css('webkit-filter',"grayscale(1)");
				}

			},800);
		}
	}
});