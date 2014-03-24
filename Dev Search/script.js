$(function () {


  	$('#s').click(function SearchMDN() {
     var url  = "https://developer.mozilla.org/en-US/search?q=" + $('#q').val();
     chrome.tabs.create({url: url});
  	}); 
  
  
  	$('#s').click(function SearchCodeProject() {
     var url  = "http://www.codeproject.com/search.aspx?q=" + $('#q').val();
     chrome.tabs.create({url: url});
  	});
  

  	$('#s').click(function SearchStack() {
     var url  = "http://stackoverflow.com/search?q=" + $('#q').val();
     chrome.tabs.create({url: url});
  	});
  
});
