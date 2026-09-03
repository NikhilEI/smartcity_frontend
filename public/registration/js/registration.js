(function ( $ ) {
 
    $.fn.initializeRegistration = function( options ) {
 
        // Default options
        var settings = $.extend({
            eventPageForm: '',
            evetnName: '',
            evetnPass: '',
            formContainer: '.form-container',
            formSubmitButton: '#btnRegistration',
            reCaptchaSiteKey:'6Lev6qoUAAAAALf5_5aGH9PbUfz14ZklDMr0uNnl',
            formCss:'https://www.convergenceindia.org/registration/css/form.css',            
            formGoogleRecaptcha:'https://www.google.com/recaptcha/api.js?onload=renderRecaptcha&render=explicit',
            formValidateJS:'https://www.convergenceindia.org/registration/js/jquery.validate.min.js',
            senderEmail: "",
            redirectUrl:'',
            apiUrl: "",
        }, options );
        
        
        loadStyle(settings.formCss);
        loadScript(settings.formGoogleRecaptcha);
        loadScript(settings.formValidateJS);
        var $this = this;

        if(settings.eventPageForm){
                $.get(settings.eventPageForm, function(data){
                $(settings.formContainer).html(data);
                $this.find('form').append( 
                  $("<input>", 
                       { type:'hidden', 
                         name:'Event_Name', 
                         value: settings.evetnName, 
                        
                        }
                   )                   
              );
              $this.find('form').append( 
                $("<input>", 
                      { type:'hidden', 
                        name:'Email_From', 
                        value: settings.senderEmail, 
                      
                      }
                  )                
              );
              
                if(settings.evetnPass)
                  $('#Event_Pass').val(settings.evetnName+' - '+settings.evetnPass);
                else
                $('#Event_Pass').val(settings.evetnName+' - '+ $('#Event_Pass').val());
                
            });
        }
        
        this.on("click", settings.formSubmitButton, function (e) {
          
          var formdetail = {};          
          $.each($this.find('form').serializeArray(), function(_, field) {              
            formdetail[field.name] = field.value;
          }); 

            $this.find('form').validate({   

              submitHandler: function (form, event) {
                if (grecaptcha.getResponse() == '') {
                    $('#g-recaptcha-error').text('Please select captcha');
                    $('#g-recaptcha-error').show();
                    return false;
                } else {
                    $('#g-recaptcha-error').hide();
                }
                event.preventDefault(); 
                $.each($this.find('form').serializeArray(), function(_, field) {              
                  formdetail[field.name] = field.value;
                });

                $.ajax({  
                    type: "POST",  
                    url: settings.apiUrl,    
                    contentType: "application/json; charset=utf-8", 
                    dataType: "json",  
                    data: '{formdetail: ' + JSON.stringify(formdetail) + '}',
                    success: function (response) {  
                      if (response != null && response.d != null) {
                        var data = response.d;
                        data = $.parseJSON(data);
                        $(settings.formContainer).html(data.info);
                      }
                      if($("#response-ajax").length>0){
                        $([document.documentElement, document.body]).animate({
                          scrollTop: $("#response-ajax").offset().top-100
                        }, 100);
                      }
                    },  
                    failure: function (response) {  
                      console.log(response.d);
                    }  
                });  
              }  
            });
           });

           function loadScript(url) {
			 if (url){ 
				var head = document.getElementsByTagName('head')[0];
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = url;
				head.appendChild(script);
			 }
          }
          function loadStyle(href) {
			if (href){
				var cssLink = $("<link>");
				$("head").append(cssLink); //IE hack: append before setting href
			  
				cssLink.attr({
				  rel:  "stylesheet",
				  type: "text/css",
				  href: href
				});
			  
			  };
		  }
         
 
    };
}( jQuery ));
function recaptchaCallback() {
  $('#g-recaptcha-error').hide();
};
function renderRecaptcha() {
  setTimeout(
    function() 
    {
      grecaptcha.render("g-recaptcha", {
        sitekey: '6Lev6qoUAAAAALf5_5aGH9PbUfz14ZklDMr0uNnl',
        callback:recaptchaCallback
    });
    }, 1500);

 
}