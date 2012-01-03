(function($) {
    // ==========================================================================================    
    // Simple views - views with no models, just content
    // ==========================================================================================
    
    var SimpleView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render');
            this.template = _.template($(this.template_id).html());
        },
        
        render: function() {
            var renderedContent = this.template({});
            $(this.el).html(renderedContent);
            return this;
        }
    });
    
    var HomeView = SimpleView.extend({
        id: 'home-wrapper',
        className: 'wrapper',
        template_id: "#home-template"        
    });
    
    var ResumeView = SimpleView.extend({
        id: 'resume-wrapper',
        className: 'wrapper',
        template_id: "#resume-template"        
    });
    
    // ==========================================================================================    
    // Router
    // ==========================================================================================
    window.App = Backbone.Router.extend({
        $activated: false,
        
        routes: {
            '': 'home',
            'home': 'home',
            'resume': 'resume',
            'contact': 'contact'
        },
        
        initialize: function(opts) {
            _.bindAll(this);
            this.homeView = new HomeView();
            this.resumeView = new ResumeView();
        },
        
        render: function(view) {
            var $container = $("#main");
            $container.empty();
            $container.append(view.render().el);
        },
        
        home: function() {
            this.render(this.homeView);
            this.activate($(".topbar a.brand"));
        },
        
        resume: function() {
            this.render(this.resumeView);
            this.activate($(".nav a[href=#resume]").parent());
        },
        
        contact: function() {
            this.activate($(".nav a[href=#contact]").parent());
        },
        
        activate: function($el) {
            if (this.$activated) {
                this.$activated.removeClass("active");
            }
            $el.addClass("active");
            this.$activated = $el;
        }
    });
    
})(jQuery);