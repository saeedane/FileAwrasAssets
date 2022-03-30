jQuery(function($){
const checkbox = document.getElementById('exampleCheck1');
var status = "";	
var post_id = jQuery('#postId').attr("data-post-id");
	
checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
	  status = "on";
	  ajaxAddAndRemovePostMeta(post_id,status);
  } else {
	  status = "off";
	  ajaxAddAndRemovePostMeta(post_id,status);

   }
});

function ajaxAddAndRemovePostMeta(post_id,status){
	     $.ajax({
            type: 'POST',
            url: ajaxurl,
            dataType: 'JSON',
            data: 'action=save_post_meta&post_id='+post_id + '&status='+status,
            success: function( response ) {

            }
          });      
}	
	
	
});