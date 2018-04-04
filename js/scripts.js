var Person = Backbone.Model.extend({
    defaults:{
        name: null,
    }
});

var Stack = Backbone.Model.extend({
    defaults:{
        name: null,
    }
});

//View for model
var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#PeopleTemplate').html()),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      $('body').append(this.$el);
      return this;
    }
});

var StackView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#StackTemplate').html()),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      $('body').append(this.$el);
      return this;
    }
});

var barry = new Person({name: 'Barry'});
var personView1 = new PersonView({model: barry});
var josh = new Person({name: 'Josh'});
var personView2 = new PersonView({model: josh});
var sun = new Person({name: 'Sun'});
var personView3 = new PersonView({model: sun});

var stack1 = new Stack({name: 'Python'});
var stackView1 = new StackView({model: stack1});
var stack2 = new Stack({name: 'C#'});
var stackView2 = new StackView({model: stack2});
var stack3 = new Stack({name: 'Java'});
var stackView3 = new StackView({model: stack3});