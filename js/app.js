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
    
    var ContactView = SimpleView.extend({
        id: 'contact-wrapper',
        className: 'wrapper',
        template_id: "#contact-template"
    });
    
    var ColophonView = SimpleView.extend({
        id: 'colophon-wrapper',
        className: 'wrapper',
        template_id: "#colophon-template"
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
            'contact': 'contact',
            'colophon': 'colophon'
        },
        
        initialize: function(opts) {
            _.bindAll(this);
            this.homeView = new HomeView();
            this.resumeView = new ResumeView();
            this.contactView = new ContactView();
            this.colophonView = new ColophonView();
        },
        
        render: function(view) {
            var $container = $("#main");
            $container.empty();
            $container.append(view.render().el);
        },
        
        modal: function(view) {
            
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
            this.render(this.contactView);
            this.activate($(".nav a[href=#contact]").parent());
        },
        
        colophon: function() {
            this.render(this.colophonView);
            this.activate($("footer a[href=#colophon]"));
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