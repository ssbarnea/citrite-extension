/*!
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Adapted by Laurent Van Winckel for Clickable Links, anno 2012.
 */
(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.replaceText = function( search, replace, text_only ) {
    return this.each(function(){
      var node = this.firstChild,
        val,
        new_val,
        
        // Elements to be removed at the end.
        remove = [];
      
      // Laurent: exclude some tags
      var exTags=['a', 'head', 'noscript', 'option', 'script', 'style', 'title', 'textarea', 'pre', 'xmp', 'input'];
      
      if ( node && $.inArray(this.nodeName.toLowerCase(), exTags) == -1 ) { // Laurent: exclude some tags
        
        // Loop over all childNodes.
        do {
          
          // Only process text nodes.
          if ( node.nodeType === 3 ) {
            
            // The original node value.
            val = node.value;
            
            // The new value.
            if (typeof val !== "undefined" && typeof val.replace !== "undefined") {
                        
            new_val = val.replace( search, replace );
            
            // Only replace text if the new value is actually different!
            if ( new_val !== val ) {
              
              if ( !text_only && /</.test( new_val ) ) {
                // The new value contains HTML, set it in a slower but far more
                // robust way.
                $(node).before( new_val );
                
                // Don't remove the node yet, or the loop will lose its place.
                remove.push( node );
              } else {
                // The new value contains no HTML, so it can be set in this
                // very fast, simple way.
                node.value = new_val;
              }
            }
            }
          }
          
        } while ( node = node.nextSibling );
      }
      
      // Time to remove those elements!
      remove.length && $(remove).remove();
    });
  };  
  
})(jQuery);