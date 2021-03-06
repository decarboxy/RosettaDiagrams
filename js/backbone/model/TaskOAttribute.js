var app = app || {};
(function() {
		
	'use strict';

	app.TaskOAttribute = app.Attribute.extend({
		
		initialize: function(options) {
   	      this.constructor.__super__.initialize.apply(this, [options])
			this.set('moversList',new app.DiagramElementList());
			this.set('key','task_operations');
			this.listenTo(this.get('moversList'),'add remove change',this.reset_value);
			
		},
		
		reset_value:function() {
			console.log('reset is called');
			var movers = this.get('moversList');
			
			if ( movers.length == 0 )
				this.destroy();
			
			var value_arr = [];
			movers.each(function(mover){
				var attributes = mover.get('attributes');
				var nameStr = attributes.byKey('name').get('value');
				value_arr.push(nameStr);
			});
			
			this.set('value',value_arr.join(','));
		},
		
		add_task: function(new_task_element) {
			this.get('moversList').add(new_task_element);
		},
		remove_task: function(task) {
			this.get('moversList').remove(task);
		}
		
	});

}
());