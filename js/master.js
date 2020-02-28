fetch('https://jsonplaceholder.typicode.com/comments')
  .then(result => result.json())
  .then((myJSON) => {
  	makeArticle(myJSON);
  });
function makeArticle(comments) {
	var {postId} = comments;
	var filteredcomments = comments.filter(function(comment){
		return comment.postId > 1;
	});
	filteredcomments.forEach(function(comment){
		var {postId, name, email, body} = comment;
		console.log(comment);
	  	var article = `<article>
		<h2>${name}</h2>
		<a href="emilto:${email}">${email}</a>
		<p>${body}</p>
		<div>Post ID: ${postId}</div>
		</article>`
		$("#comments").append(article);
	})
		
}